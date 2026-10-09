import * as fs from 'fs';
import * as path from 'path';
import {
  AUTO_COMMIT_VERSION,
  JavaAppProject,
  JavaLibraryProject,
  JavaMavenProject,
  JavaMavenProjectOptions,
  JavaServiceProject,
  JavaSpringBootProject,
} from '../../src';
import { synthSnapshot } from '../util';

const BASE: JavaMavenProjectOptions = {
  name: 'maven-test',
  groupId: 'com.example',
  artifactId: 'maven-test',
};

function maven(options: Partial<JavaMavenProjectOptions> = {}): JavaMavenProject {
  return new JavaMavenProject({ ...BASE, ...options });
}

/** The pom with the enforcer's own rule configuration removed - its
 * `requireJavaVersion`/`requireMavenVersion` values are ranges by design. */
function withoutEnforcerRules(pom: string): string {
  return pom.replace(/<rules>[\s\S]*?<\/rules>/g, '');
}

function reactor(): JavaMavenProject {
  const project = maven({ artifactId: 'parent', version: '1.0.0-SNAPSHOT' });
  const model = project.addModule({ dir: 'model', artifactId: 'model', description: 'Domain model' });
  const stub = project.addModule({ dir: 'tools/stub-model', artifactId: 'stub-model' });
  stub.addModuleDependency(model);
  stub.addDependency('org.yaml/snakeyaml@2.4');
  stub.addTestDependency('org.assertj/assertj-core@3.27.3');
  project.addBom('org.testcontainers/testcontainers-bom@1.21.3');
  project.addManagedDependency('com.networknt/json-schema-validator@1.5.7');
  return project;
}

describe('single-module defaults', () => {
  const snapshot = synthSnapshot(maven());
  const pom: string = snapshot['pom.xml'];

  test('root pom snapshot', () => {
    expect(pom).toMatchSnapshot();
  });

  test('targets Java 21 by default, via release (no source/target)', () => {
    expect(pom).toContain('<maven.compiler.release>21</maven.compiler.release>');
    expect(pom).not.toContain('maven.compiler.source');
    expect(pom).not.toContain('<source>');
    expect(pom).not.toContain('<target>');
  });

  test('jar packaging is implicit; no sample code', () => {
    expect(pom).not.toContain('<packaging>');
    expect(Object.keys(snapshot).filter((f) => f.startsWith('src/'))).toEqual([]);
  });

  test('JUnit comes from junit-bom; the dependency is versionless', () => {
    expect(pom).toMatch(
      /<artifactId>junit-bom<\/artifactId>\s*<version>6\.1\.3<\/version>\s*<type>pom<\/type>\s*<scope>import<\/scope>/,
    );
    expect(pom).toMatch(/<artifactId>junit-jupiter<\/artifactId>\s*<scope>test<\/scope>/);
    expect(pom).not.toContain('junit-jupiter-api');
  });

  test('default plugin set is pinned; javadoc/source are library-only', () => {
    expect(pom).toMatch(/maven-compiler-plugin<\/artifactId>\s*<version>3\.16\.0</);
    expect(pom).toMatch(/maven-surefire-plugin<\/artifactId>\s*<version>3\.6\.0</);
    expect(pom).toMatch(/maven-failsafe-plugin<\/artifactId>\s*<version>3\.6\.0</);
    expect(pom).toMatch(/maven-jar-plugin<\/artifactId>\s*<version>3\.5\.1</);
    expect(pom).toMatch(/maven-enforcer-plugin<\/artifactId>\s*<version>3\.6\.3</);
    expect(pom).not.toContain('maven-javadoc-plugin');
    expect(pom).not.toContain('maven-source-plugin');
    expect(pom).not.toContain('<index>');
  });

  test('failsafe binds integration-test and verify in ONE <goals> element', () => {
    const failsafe = pom.slice(pom.indexOf('maven-failsafe-plugin'));
    const execution = failsafe.slice(0, failsafe.indexOf('</execution>'));
    expect(execution.match(/<goals>/g)).toHaveLength(1);
    expect(execution).toMatch(
      /<goals>\s*<goal>integration-test<\/goal>\s*<goal>verify<\/goal>\s*<\/goals>/,
    );
  });

  test('enforcer requires Maven [3.9,) and Java [21,)', () => {
    expect(pom).toMatch(/<requireMavenVersion>\s*<version>\[3\.9,\)<\/version>/);
    expect(pom).toMatch(/<requireJavaVersion>\s*<version>\[21,\)<\/version>/);
  });

  test('build runs Maven exactly once: mvn -B verify, no deploy', () => {
    const tasks = snapshot['.projen/tasks.json'].tasks;
    expect(tasks.test.steps).toEqual([{ exec: 'mvn -B verify' }]);
    expect(tasks.compile.steps).toBeUndefined();
    expect(tasks.package.steps).toBeUndefined();
    expect(JSON.stringify(tasks)).not.toContain('deploy');
  });

  test('LICENSE (MIT) and .editorconfig are written by default', () => {
    expect(snapshot.LICENSE).toContain('Permission is hereby granted, free of charge');
    expect(snapshot['.editorconfig']).toMatchSnapshot();
  });

  test('package.json pins projen and this package exactly', () => {
    const devDeps = snapshot['package.json'].devDependencies;
    expect(Object.keys(devDeps).sort()).toEqual(['@xpertss/projen-types', 'projen']);
    for (const version of Object.values(devDeps)) {
      expect(version).toMatch(/^\d+\.\d+\.\d+/);
    }
  });
});

describe('javaVersion', () => {
  test.each([
    ['1.8', '8'],
    ['8', '8'],
    ['17', '17'],
    ['21', '21'],
    ['25', '25'],
  ])('javaVersion %s drives compiler, enforcer, JUnit and CI JDK', (javaVersion, setupJava) => {
    for (const project of [maven({ javaVersion }), reactorAt(javaVersion)]) {
      const snapshot = synthSnapshot(project);
      const pom: string = snapshot['pom.xml'];
      const setupJavaStep = snapshot['.github/workflows/build.yml'].jobs.build.steps.find(
        (s: { uses?: string }) => s.uses?.startsWith('actions/setup-java'),
      );
      expect(setupJavaStep.with['java-version']).toBe(setupJava);

      if (setupJava === '8') {
        expect(project.javaVersion).toBe('1.8');
        expect(pom).toContain('<maven.compiler.source>1.8</maven.compiler.source>');
        expect(pom).toContain('<maven.compiler.target>1.8</maven.compiler.target>');
        expect(pom).not.toContain('maven.compiler.release');
        expect(pom).toMatch(/<requireJavaVersion>\s*<version>\[1\.8,\)</);
        // JUnit 6 needs Java 17, so the 1.8 line stays on JUnit 5.
        expect(pom).toMatch(/junit-bom<\/artifactId>\s*<version>5\./);
      } else {
        expect(pom).toContain(`<maven.compiler.release>${javaVersion}</maven.compiler.release>`);
        expect(pom).not.toContain('maven.compiler.source');
        expect(pom).toMatch(new RegExp(`<requireJavaVersion>\\s*<version>\\[${javaVersion},\\)<`));
        expect(pom).toMatch(/junit-bom<\/artifactId>\s*<version>6\./);
      }
    }
  });

  test('an unsupported line fails and lists the supported ones', () => {
    expect(() => maven({ javaVersion: '11' })).toThrow(
      'Unsupported javaVersion "11". Supported: 1.8, 17, 21, 25.',
    );
  });

  test('no Java version is hard-coded in src/java outside java-versions.ts', () => {
    const offenders: string[] = [];
    const walk = (dir: string) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const file = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(file);
        } else if (file.endsWith('.ts') && entry.name !== 'java-versions.ts') {
          const code = fs
            .readFileSync(file, 'utf8')
            // doc comments may name lines; code may not
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\/\/.*$/gm, '');
          if (/['"`](1\.8|8|11|17|21|25)['"`]/.test(code)) {
            offenders.push(file);
          }
        }
      }
    };
    walk(path.join(__dirname, '../../src/java'));
    expect(offenders).toEqual([]);
  });
});

function reactorAt(javaVersion: string): JavaMavenProject {
  const project = maven({ javaVersion });
  project.addModule({ dir: 'core', artifactId: 'core' });
  return project;
}

describe('multi-module', () => {
  const project = reactor();
  const snapshot = synthSnapshot(project);
  const parent: string = snapshot['pom.xml'];
  const stub: string = snapshot['tools/stub-model/pom.xml'];

  test('parent and nested module pom snapshots', () => {
    expect(parent).toMatchSnapshot();
    expect(stub).toMatchSnapshot();
  });

  test('parent is pom-packaged with modules in addModule order', () => {
    expect(parent).toContain('<packaging>pom</packaging>');
    expect(parent).toMatch(
      /<modules>\s*<module>model<\/module>\s*<module>tools\/stub-model<\/module>\s*<\/modules>/,
    );
  });

  test('parent versions plugins in pluginManagement; its <plugins> are versionless', () => {
    const management = parent.slice(parent.indexOf('<pluginManagement>'), parent.indexOf('</pluginManagement>'));
    expect(management).toMatch(/maven-compiler-plugin<\/artifactId>\s*<version>3\.16\.0</);
    const plugins = parent.slice(parent.indexOf('</pluginManagement>'));
    expect(plugins).toMatch(/maven-compiler-plugin<\/artifactId>\s*<\/plugin>/);
    expect(plugins).not.toMatch(/<version>3\.16\.0/);
  });

  test('nested module gets the right relativePath and nothing beyond its own declarations', () => {
    expect(stub).toMatch(
      /<parent>\s*<groupId>com\.example<\/groupId>\s*<artifactId>parent<\/artifactId>\s*<version>1\.0\.0-SNAPSHOT<\/version>\s*<relativePath>\.\.\/\.\.\/pom\.xml<\/relativePath>\s*<\/parent>/,
    );
    expect(stub).toContain('<artifactId>stub-model</artifactId>');
    expect(stub).not.toContain('<groupId>com.example</groupId>\n    <artifactId>stub-model');
    expect(stub).not.toContain('<build>');
    expect(stub).not.toContain('<properties>');
    expect(snapshot['model/pom.xml']).toContain('<relativePath>../pom.xml</relativePath>');
    expect(snapshot['model/pom.xml']).toContain('<description>Domain model</description>');
  });

  test('module dependency is versionless; parent manages every module at ${project.version}', () => {
    expect(stub).toMatch(/<groupId>com\.example<\/groupId>\s*<artifactId>model<\/artifactId>\s*<\/dependency>/);
    for (const artifactId of ['model', 'stub-model']) {
      expect(parent).toMatch(
        new RegExp(`<artifactId>${artifactId}</artifactId>\\s*<version>\\$\\{project\\.version\\}</version>`),
      );
    }
  });

  test('pinned module dependencies are hoisted into the parent', () => {
    expect(stub).toMatch(/<artifactId>snakeyaml<\/artifactId>\s*<\/dependency>/);
    expect(stub).toMatch(/<artifactId>assertj-core<\/artifactId>\s*<scope>test<\/scope>/);
    expect(parent).toMatch(/<artifactId>snakeyaml<\/artifactId>\s*<version>2\.4<\/version>/);
    expect(parent).toMatch(/<artifactId>assertj-core<\/artifactId>\s*<version>3\.27\.3<\/version>/);
    expect(parent).toMatch(/<artifactId>json-schema-validator<\/artifactId>\s*<version>1\.5\.7<\/version>/);
  });

  test('BOM imports are type=pom, scope=import, before other managed dependencies', () => {
    expect(parent).toMatch(
      /<artifactId>testcontainers-bom<\/artifactId>\s*<version>1\.21\.3<\/version>\s*<type>pom<\/type>\s*<scope>import<\/scope>/,
    );
    expect(parent.indexOf('testcontainers-bom')).toBeLessThan(parent.indexOf('<artifactId>model</artifactId>'));
  });

  test('module plugins with a version are pinned in the parent pluginManagement', () => {
    const p = maven();
    p.addModule({ dir: 'cli', artifactId: 'cli' }).addPlugin('org.codehaus.mojo/exec-maven-plugin@3.5.1', {
      configuration: { mainClass: 'com.example.Main' },
    });
    const s = synthSnapshot(p);
    expect(s['cli/pom.xml']).toMatch(/exec-maven-plugin<\/artifactId>\s*<configuration>/);
    expect(s['pom.xml']).toMatch(/exec-maven-plugin<\/artifactId>\s*<version>3\.5\.1</);
  });

  test('/spec/ (and so every subdirectory) is git-ignored', () => {
    expect(snapshot['.gitignore']).toContain('/spec/');
  });

  test('one projen project: a single .projen/, .gitignore and tasks.json; no sample', () => {
    const files = Object.keys(snapshot);
    expect(files.filter((f) => f.endsWith('.gitignore'))).toEqual(['.gitignore']);
    expect(files.filter((f) => f.endsWith('tasks.json'))).toEqual(['.projen/tasks.json']);
    expect(files.filter((f) => f.includes('/.projen/'))).toEqual([]);
    expect(files.filter((f) => f.endsWith('.java'))).toEqual([]);
  });

  test('sample: true is ignored once the project has modules', () => {
    const p = maven({ sample: true });
    p.addModule({ dir: 'core', artifactId: 'core' });
    expect(Object.keys(synthSnapshot(p)).filter((f) => f.endsWith('.java'))).toEqual([]);
  });

  test('nothing in the output references a placeholder or third-party PR action', () => {
    const all = JSON.stringify(snapshot);
    expect(all).not.toContain('PLACEHOLDER_SHA');
    expect(all).not.toContain('create-pull-request');
  });
});

describe('multi-module validation', () => {
  test('duplicate artifactId fails', () => {
    const p = maven();
    p.addModule({ dir: 'a', artifactId: 'same' });
    expect(() => p.addModule({ dir: 'b', artifactId: 'same' })).toThrow(/Duplicate module artifactId "same"/);
  });

  test.each([
    ['a', 'a'],
    ['a', './a/'],
    ['a', 'a/nested'],
    ['a/nested', 'a'],
  ])('dir %s then %s fails as overlapping', (first, second) => {
    const p = maven();
    p.addModule({ dir: first, artifactId: 'one' });
    expect(() => p.addModule({ dir: second, artifactId: 'two' })).toThrow(/overlaps module dir/);
  });

  test.each(['/abs', 'C:/abs', '../outside', '.', 'a/../../b'])('dir %s is rejected', (dir) => {
    expect(() => maven().addModule({ dir, artifactId: 'x' })).toThrow(/Module dir/);
  });

  test('a module cannot depend on itself', () => {
    const m = maven().addModule({ dir: 'a', artifactId: 'a' });
    expect(() => m.addModuleDependency(m)).toThrow(/cannot depend on itself/);
  });

  test('a non-pom packaging cannot have modules', () => {
    expect(() => maven({ packaging: 'jar' }).addModule({ dir: 'a', artifactId: 'a' })).toThrow(
      /packaged as "pom"/,
    );
    expect(() => maven({ packaging: 'pom' }).addModule({ dir: 'a', artifactId: 'a' })).not.toThrow();
  });

  test('the same artifact pinned at two versions fails', () => {
    const p = maven();
    const a = p.addModule({ dir: 'a', artifactId: 'a' });
    const b = p.addModule({ dir: 'b', artifactId: 'b' });
    a.addDependency('org.yaml/snakeyaml@2.4');
    expect(() => b.addDependency('org.yaml/snakeyaml@2.3')).toThrow(/pinned at two different versions/);
  });
});

describe('exact versions only', () => {
  test.each(['^3', '~1.2', '[1.0,2.0)', '1.x', '*', '>=1'])('version "%s" in a spec fails', (version) => {
    expect(() => maven().addDependency(`org.example/thing@${version}`)).toThrow(/not an exact version/);
  });

  test('versionless specs are accepted everywhere', () => {
    const p = maven();
    p.addDependency('org.yaml/snakeyaml');
    p.addTestDependency('org.assertj/assertj-core');
    p.addPlugin('org.codehaus.mojo/exec-maven-plugin');
    expect(synthSnapshot(p)['pom.xml']).toMatch(/<artifactId>snakeyaml<\/artifactId>\s*<\/dependency>/);
  });

  test('no generated pom of any Java type contains a version range', () => {
    const types = [
      maven(),
      reactor(),
      new JavaLibraryProject({ ...BASE }),
      new JavaAppProject({ ...BASE }),
      new JavaSpringBootProject({ ...BASE }),
      new JavaServiceProject({ ...BASE }),
      new JavaServiceProject({ ...BASE, javaVersion: '1.8' }),
    ];
    for (const project of types) {
      const snapshot = synthSnapshot(project);
      for (const [file, content] of Object.entries(snapshot)) {
        if (file.endsWith('pom.xml')) {
          for (const v of withoutEnforcerRules(content as string).match(/<version>[^<]*<\/version>/g) ?? []) {
            expect(v).not.toMatch(/[\[\]()^~]/);
          }
        }
      }
    }
  });

  test('pluginVersions overrides a default; a non-exact override fails', () => {
    const pom = synthSnapshot(
      maven({ pluginVersions: { 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' } }),
    )['pom.xml'];
    expect(pom).toMatch(/maven-surefire-plugin<\/artifactId>\s*<version>3\.5\.6</);
    expect(() =>
      maven({ pluginVersions: { 'org.apache.maven.plugins/maven-surefire-plugin': '[3,)' } }),
    ).toThrow(/not an exact version/);
  });
});

describe('optional parts', () => {
  test('enforcer: false removes the enforcer; minMavenVersion sets its Maven rule', () => {
    expect(synthSnapshot(maven({ enforcer: false }))['pom.xml']).not.toContain('maven-enforcer-plugin');
    expect(synthSnapshot(maven({ minMavenVersion: '3.8.8' }))['pom.xml']).toMatch(
      /<requireMavenVersion>\s*<version>\[3\.8\.8,\)</,
    );
  });

  test('licensed: false, editorconfig: false, upgradeWorkflow: false', () => {
    const snapshot = synthSnapshot(maven({ licensed: false, editorconfig: false, upgradeWorkflow: false }));
    expect(snapshot.LICENSE).toBeUndefined();
    expect(snapshot['.editorconfig']).toBeUndefined();
    expect(snapshot['.github/workflows/upgrade.yml']).toBeUndefined();
    // the task stays available locally
    expect(snapshot['.projen/tasks.json'].tasks.upgrade).toBeDefined();
  });

  test('license and copyright options reach LICENSE', () => {
    const license = synthSnapshot(
      maven({ license: 'Apache-2.0', copyrightOwner: 'Xpert Software', copyrightPeriod: '2026' }),
    ).LICENSE;
    expect(license).toContain('Apache License');
  });

  test('sample: true writes a Main class and test under the groupId package', () => {
    const snapshot = synthSnapshot(maven({ sample: true }));
    expect(snapshot['src/main/java/com/example/Main.java']).toContain('package com.example;');
    expect(snapshot['src/test/java/com/example/MainTest.java']).toContain('import org.junit.jupiter.api.Test;');
  });

  test('description and url are written to the root pom', () => {
    const pom = synthSnapshot(maven({ description: 'Demo', url: 'https://example.com' }))['pom.xml'];
    expect(pom).toContain('<description>Demo</description>');
    expect(pom).toContain('<url>https://example.com</url>');
  });
});

describe('workflows', () => {
  test('build.yml installs Node, the locked toolchain, and the JDK before building', () => {
    const steps = synthSnapshot(maven({ javaDistribution: 'corretto' }))['.github/workflows/build.yml'].jobs.build
      .steps;
    const names = steps.map((s: { name: string }) => s.name);
    expect(names.indexOf('Setup Node')).toBeLessThan(names.indexOf('Install dependencies'));
    expect(names.indexOf('Install dependencies')).toBeLessThan(names.indexOf('build'));
    const setupJava = steps.find((s: { name: string }) => s.name === 'Setup Java');
    expect(setupJava.uses).toBe('actions/setup-java@v6');
    expect(setupJava.with).toEqual({ 'distribution': 'corretto', 'java-version': '21', 'cache': 'maven' });
    const install = steps.find((s: { name: string }) => s.name === 'Install dependencies');
    expect(install.run).toContain('package-lock.json is not committed');
    expect(install.run).toContain('npm ci --ignore-scripts');
  });

  test('extra jobs can be added to build.yml through buildVerifyWorkflow', () => {
    const p = maven();
    p.buildVerifyWorkflow.addJob('integration', {
      runsOn: ['self-hosted', 'linux'],
      permissions: {},
      steps: [{ uses: 'actions/checkout@v7' }, ...p.ciSetupSteps, { run: 'mvn -B verify -Pcontainers' }],
    });
    const build = synthSnapshot(p)['.github/workflows/build.yml'];
    expect(build.jobs.integration['runs-on']).toEqual(['self-hosted', 'linux']);
  });

  test('upgrade.yml is report-only: read permissions, job summary, no PR', () => {
    const upgrade = synthSnapshot(maven())['.github/workflows/upgrade.yml'];
    expect(upgrade.jobs.upgrade.permissions).toEqual({ contents: 'read' });
    const report = upgrade.jobs.upgrade.steps.find((s: { name: string }) => s.name === 'Report available updates');
    expect(report.run).toContain('npx projen upgrade');
    expect(report.run).toContain('GITHUB_STEP_SUMMARY');
    expect(JSON.stringify(upgrade)).not.toContain('pull-request');
  });

  test('codeindex.yml indexes from the repo root into .xss/ and commits it straight to main', () => {
    for (const project of [maven(), reactor()]) {
      const snapshot = synthSnapshot(project);
      expect(snapshot['.projen/tasks.json'].tasks.codeindex.steps).toEqual([
        {
          exec: "mkdir -p .xss && find . -path ./node_modules -prune -o -name target -prune -o -name '*.java' -print | sort > .xss/index.txt",
        },
      ]);

      const codeindex = snapshot['.github/workflows/codeindex.yml'];
      expect(codeindex.on.push).toEqual({ branches: ['main'] });
      expect(codeindex.concurrency).toEqual({ 'group': 'codeindex', 'cancel-in-progress': true });
      expect(codeindex.jobs.codeindex.permissions).toEqual({ contents: 'write' });

      // F009 override: the third-party action is redirected to xpertss/*.
      const commitStep = codeindex.jobs.codeindex.steps.find(
        (s: { name: string }) => s.name === 'Commit code index',
      );
      expect(commitStep.uses).toBe(`xpertss/auto-commit@${AUTO_COMMIT_VERSION}`);
      // A chore: commit of .xss/ only, losing a push race quietly; no token
      // input, so the push uses GITHUB_TOKEN and starts no workflows.
      expect(commitStep.with).toEqual({
        commit_message: 'chore: update code index',
        folder: '.xss',
        if_behind: 'skip',
      });
      expect(commitStep.with.commit_message).toMatch(/^chore:/);
      expect(JSON.stringify(codeindex)).not.toContain('PROJEN_GITHUB_TOKEN');
    }
  });

  test('every Java type generates the code index; publishCodeIndex: false removes it', () => {
    const types = [
      (o: object) => new JavaMavenProject({ ...BASE, ...o }),
      (o: object) => new JavaLibraryProject({ ...BASE, ...o }),
      (o: object) => new JavaAppProject({ ...BASE, ...o }),
      (o: object) => new JavaSpringBootProject({ ...BASE, ...o }),
      (o: object) => new JavaServiceProject({ ...BASE, ...o }),
    ];
    for (const make of types) {
      const on = synthSnapshot(make({}));
      expect(on['.github/workflows/codeindex.yml']).toBeDefined();
      expect(on['.projen/tasks.json'].tasks.codeindex).toBeDefined();

      const off = synthSnapshot(make({ publishCodeIndex: false }));
      expect(off['.github/workflows/codeindex.yml']).toBeUndefined();
      expect(off['.projen/tasks.json'].tasks.codeindex).toBeUndefined();
    }
  });

  test('every uses: in Java output is a trusted actions/* ref or a pinned first-party action', () => {
    const firstParty = [`xpertss/auto-commit@${AUTO_COMMIT_VERSION}`];
    for (const project of [maven(), reactor(), new JavaSpringBootProject({ ...BASE })]) {
      const snapshot = synthSnapshot(project);
      for (const [file, content] of Object.entries(snapshot)) {
        if (file.startsWith('.github/workflows/')) {
          for (const job of Object.values((content as any).jobs) as any[]) {
            for (const step of job.steps ?? []) {
              if (step.uses && !firstParty.includes(step.uses)) {
                expect(step.uses).toMatch(/^actions\/[a-z-]+@v\d+$/);
              }
            }
          }
        }
      }
    }
  });
});

describe('projen new', () => {
  test('numeric CLI values (--java-version 1.8) become the strings .projenrc.ts is rendered from', () => {
    // yargs hands `--java-version 1.8` to the type as the number 1.8.
    const args = { ...BASE, javaVersion: 1.8 as any };
    const options: any = {
      ...args,
      __new__: { fqn: '@xpertss/projen-types.JavaMavenProject', args, comments: 0, synth: false, post: false },
    };
    let project: JavaMavenProject | undefined;
    try {
      project = new JavaMavenProject(options);
    } catch (e) {
      // outside a real `projen new` the fqn may not resolve; the
      // normalization has already run by then
    }
    expect(options.javaVersion).toBe('1.8');
    expect(options.__new__.args.javaVersion).toBe('1.8');
    if (project) {
      expect(project.javaVersion).toBe('1.8');
    }
  });
});
