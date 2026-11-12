import { JavaLibraryProject } from '../../src';
import { synthSnapshot } from '../util';

// F028: publishing a JavaLibraryProject to Maven Central from GitHub Actions.

// What Maven Central requires of a library's pom.
const LIB = {
  description: 'A test library',
  url: 'https://github.com/xpertss/lib-test',
  developers: [{ name: 'Test Dev' }],
};

const lib = (extra: object = {}) =>
  new JavaLibraryProject({ ...LIB, name: 'lib-test', groupId: 'com.example', artifactId: 'lib-test', ...extra });

function multiModule() {
  const multi = lib({ artifactId: 'lib-parent' });
  multi.addModule({ dir: 'core', artifactId: 'lib-core' });
  multi.addModule({ dir: 'extra', artifactId: 'lib-extra' });
  return multi;
}

/** The text of the pom's `release` profile, and of everything outside it. */
function splitRelease(pom: string): { release: string; rest: string } {
  const start = pom.indexOf('<id>release</id>');
  const end = pom.indexOf('</profile>', start);
  return { release: pom.slice(start, end), rest: pom.slice(0, start) + pom.slice(end) };
}

describe('release profile', () => {
  test('is explicit-only and holds sources, javadoc, flatten, gpg and the publishing plugin', () => {
    const { release } = splitRelease(synthSnapshot(lib())['pom.xml']);
    expect(release).not.toContain('<activation>');
    expect(release).toMatch(/<id>attach-sources<\/id>\s*<goals>\s*<goal>jar-no-fork<\/goal>/);
    expect(release).toMatch(/<id>attach-javadocs<\/id>\s*<goals>\s*<goal>jar<\/goal>/);
    expect(release).toContain('<artifactId>flatten-maven-plugin</artifactId>');
    expect(release).toContain('<flattenMode>resolveCiFriendliesOnly</flattenMode>');
    expect(release).toContain('<updatePomFile>true</updatePomFile>');
    expect(release).toMatch(/<artifactId>maven-gpg-plugin<\/artifactId>[\s\S]*<phase>verify<\/phase>\s*<goals>\s*<goal>sign<\/goal>/);
    expect(release).toContain('<arg>loopback</arg>');
    expect(release).toMatch(/<artifactId>central-publishing-maven-plugin<\/artifactId>\s*<version>0\.12\.0<\/version>\s*<extensions>true<\/extensions>/);
    expect(release).toContain('<publishingServerId>central</publishingServerId>');
    expect(release).toContain('<autoPublish>true</autoPublish>');
    expect(release).toContain('<waitUntil>validated</waitUntil>');
  });

  test('the default build has no sources, flatten, gpg or publishing plugin', () => {
    const { rest } = splitRelease(synthSnapshot(lib())['pom.xml']);
    for (const plugin of ['maven-source-plugin', 'flatten-maven-plugin', 'maven-gpg-plugin', 'central-publishing']) {
      expect(rest).not.toContain(plugin);
    }
    expect(rest).not.toContain('distributionManagement');
  });

  test('the default build runs the javadoc tool (report only, early) so errors fail mvn test, not the release', () => {
    const { rest, release } = splitRelease(synthSnapshot(lib())['pom.xml']);
    expect(rest).toMatch(/<artifactId>maven-javadoc-plugin<\/artifactId>\s*<version>3\.12\.0<\/version>/);
    expect(rest).toMatch(
      /<id>check-javadoc<\/id>\s*<phase>process-classes<\/phase>\s*<goals>\s*<goal>javadoc<\/goal>/,
    );
    // The default build never builds the javadoc jar or sources jar; only the release profile does.
    expect(rest).not.toMatch(/<goal>jar<\/goal>/);
    expect(rest).not.toContain('attach-javadocs');
    expect(release).toContain('attach-javadocs');
  });

  test('multi-module: every module inherits the javadoc check from the root pom', () => {
    const snapshot = synthSnapshot(multiModule());
    expect(snapshot['pom.xml']).toContain('check-javadoc');
    for (const module of ['core', 'extra']) {
      expect(snapshot[`${module}/pom.xml`]).not.toContain('maven-javadoc-plugin');
    }
  });

  test('multi-module: the publishing plugin is declared in the root pom only; modules inherit the profile', () => {
    const snapshot = synthSnapshot(multiModule());
    expect(snapshot['pom.xml']).toContain('central-publishing-maven-plugin');
    expect(snapshot['pom.xml']).toContain('maven-gpg-plugin');
    for (const module of ['core', 'extra']) {
      expect(snapshot[`${module}/pom.xml`]).not.toMatch(/central-publishing|maven-gpg|<profile>/);
    }
  });
});

describe('version', () => {
  test('is ${revision}, with a <revision> of <version>-SNAPSHOT', () => {
    const pom: string = synthSnapshot(lib({ version: '2.3.4' }))['pom.xml'];
    expect(pom).toContain('<version>${revision}</version>');
    expect(pom).toContain('<revision>2.3.4-SNAPSHOT</revision>');
    expect(synthSnapshot(lib())['pom.xml']).toContain('<revision>0.1.0-SNAPSHOT</revision>');
  });

  test('multi-module: modules take ${revision} from the parent, and siblings are managed at ${project.version}', () => {
    const snapshot = synthSnapshot(multiModule());
    expect(snapshot['core/pom.xml']).toMatch(/<parent>[\s\S]*<version>\$\{revision\}<\/version>[\s\S]*<\/parent>/);
    expect(snapshot['pom.xml']).toContain('<version>${project.version}</version>');
    expect(snapshot['pom.xml']).not.toMatch(/<artifactId>lib-core<\/artifactId>\s*<version>\$\{revision\}/);
  });

  test('a version that is not like 1.2.3 fails the synth', () => {
    expect(() => lib({ version: '1.2' })).toThrow(/must be like 1\.2\.3/);
  });

  test('the release:version task passes the baseline and minMajorVersion', () => {
    const tasks = synthSnapshot(lib({ version: '0.5.0', minMajorVersion: 1 }))['.projen/tasks.json'].tasks;
    expect(tasks['release:version'].steps[0].exec).toBe(
      'node node_modules/@xpertss/projen-types/lib/java/release-version.js --baseline 0.5.0 --min-major 1',
    );
    const plain = synthSnapshot(lib())['.projen/tasks.json'].tasks;
    expect(plain['release:version'].steps[0].exec).not.toContain('--min-major');
  });
});

describe('Maven Central metadata', () => {
  test('licenses, developers, scm, name, description and url are written', () => {
    const pom: string = synthSnapshot(
      lib({ license: 'Apache-2.0', developers: [{ name: 'A Dev', url: 'https://example.org/a', organization: 'Org' }] }),
    )['pom.xml'];
    expect(pom).toContain('<name>Apache-2.0</name>');
    expect(pom).toContain('<url>https://spdx.org/licenses/Apache-2.0.html</url>');
    expect(pom).toMatch(/<developer>\s*<name>A Dev<\/name>\s*<url>https:\/\/example\.org\/a<\/url>\s*<organization>Org<\/organization>/);
    expect(pom).toContain('<connection>scm:git:git://github.com/xpertss/lib-test.git</connection>');
    expect(pom).toContain('<developerConnection>scm:git:ssh://git@github.com/xpertss/lib-test.git</developerConnection>');
    expect(pom).toContain('<description>A test library</description>');
    expect(pom).toContain('<name>lib-test</name>');
  });

  test.each([
    ['description', { description: undefined }],
    ['url', { url: undefined }],
    ['developers', { developers: [] }],
  ])('missing %s fails the synth with a message naming it', (what, override) => {
    expect(() => lib(override)).toThrow(new RegExp(`Maven Central requires the pom to carry ${what}`));
  });

  test('a url that is not a GitHub repository fails the synth', () => {
    expect(() => lib({ url: 'https://example.org/lib' })).toThrow(/must be the GitHub repository/);
  });

  test('projen new, which cannot pass developers, still scaffolds', () => {
    // Outside a real `projen new` the fqn does not resolve, so the constructor
    // throws once it reaches projen; what matters is that it got past the checks.
    const create = () =>
      new JavaLibraryProject({
        name: 'lib-test',
        groupId: 'com.example',
        artifactId: 'lib-test',
        __new__: { fqn: '@xpertss/projen-types.JavaLibraryProject', args: {}, comments: 0, synth: false, post: false },
      } as any);
    expect(create).not.toThrow(/Maven Central requires/);
  });
});

describe('publish workflow', () => {
  const publish = () => synthSnapshot(lib())['.github/workflows/publish-maven-central.yml'];
  const stepNamed = (name: string) => publish().jobs.publish.steps.find((s: any) => s.name === name);

  test('is manual, main-only, in the maven-central environment, with the three inputs', () => {
    const wf = publish();
    expect(Object.keys(wf.on)).toEqual(['workflow_dispatch']);
    expect(wf.on.workflow_dispatch.inputs.version.type).toBe('string');
    expect(wf.on.workflow_dispatch.inputs.dry_run).toMatchObject({ type: 'boolean', default: false });
    expect(wf.on.workflow_dispatch.inputs.auto_publish).toMatchObject({ type: 'boolean', default: true });
    expect(wf.jobs.publish.if).toBe("github.ref == 'refs/heads/main'");
    expect(wf.jobs.publish.environment).toBe('maven-central');
    expect(wf.jobs.publish.permissions).toEqual({ contents: 'write' });
  });

  test('checks out full history and sets up Java with the Central server and the signing key', () => {
    const steps = publish().jobs.publish.steps;
    expect(steps[0]).toMatchObject({ uses: 'actions/checkout@v7', with: { 'fetch-depth': 0 } });
    const java = steps.find((s: any) => s.uses?.startsWith('actions/setup-java'));
    expect(java.with).toMatchObject({
      'distribution': 'temurin',
      'java-version': '21',
      'server-id': 'central',
      'server-username': 'MAVEN_CENTRAL_USERNAME',
      'server-password': 'MAVEN_CENTRAL_PASSWORD',
      'gpg-private-key': '${{ secrets.MAVEN_GPG_PRIVATE_KEY }}',
      'gpg-passphrase-env-var': 'MAVEN_GPG_PASSPHRASE',
    });
    // The deprecated alias must not come back (setup-java warns about it and may remove it).
    expect(java.with['gpg-passphrase']).toBeUndefined();
    // The build workflow's JDK step is untouched.
    const build = synthSnapshot(lib())['.github/workflows/build.yml'].jobs.build.steps;
    expect(build.find((s: any) => s.uses?.startsWith('actions/setup-java')).with['server-id']).toBeUndefined();
  });

  test('secrets are only on the publish steps, never job-wide', () => {
    const wf = publish();
    expect(wf.jobs.publish.env).toBeUndefined();
    expect(wf.env).toBeUndefined();
    const withSecrets = wf.jobs.publish.steps
      .filter((s: any) => JSON.stringify(s.env ?? {}).includes('secrets.'))
      .map((s: any) => s.name);
    expect(withSecrets).toEqual(['Build and sign (dry run)', 'Publish to Maven Central']);
    expect(Object.keys(stepNamed('Publish to Maven Central').env)).toEqual(
      expect.arrayContaining(['MAVEN_GPG_PASSPHRASE', 'MAVEN_CENTRAL_USERNAME', 'MAVEN_CENTRAL_PASSWORD']),
    );
    expect(Object.keys(stepNamed('Build and sign (dry run)').env)).not.toContain('MAVEN_CENTRAL_PASSWORD');
    expect(JSON.stringify(wf)).not.toContain('id-token');
  });

  test('computes the version, guards SNAPSHOT, and passes the version and gates to Maven', () => {
    const names = publish().jobs.publish.steps.map((s: any) => s.name);
    expect(names.indexOf('Compute release version')).toBeLessThan(names.indexOf('Refuse a SNAPSHOT version'));
    expect(stepNamed('Compute release version').run).toBe('npx projen release:version');
    expect(stepNamed('Compute release version').env).toEqual({ VERSION_OVERRIDE: '${{ inputs.version }}' });
    expect(stepNamed('Refuse a SNAPSHOT version').run).toContain('*-SNAPSHOT');

    const real = stepNamed('Publish to Maven Central');
    expect(real.run).toBe('npx projen publish:maven-central');
    expect(real.env.MAVEN_ARGS).toContain('-Drevision=${{ steps.version.outputs.version }} -Dchangelist=');
    expect(real.env.MAVEN_ARGS).toContain('-DautoPublish=${{ inputs.auto_publish }}');
    expect(real.env.MAVEN_ARGS).toContain("-DwaitUntil=${{ inputs.auto_publish && 'published' || 'validated' }}");
    expect(real.if).toBe("steps.version.outputs.release == 'true' && !inputs.dry_run");

    const dry = stepNamed('Build and sign (dry run)');
    expect(dry.run).toBe('npx projen publish:maven-central:dry-run');
    expect(dry.if).toBe("steps.version.outputs.release == 'true' && inputs.dry_run");

    const tasks = synthSnapshot(lib())['.projen/tasks.json'].tasks;
    expect(tasks['publish:maven-central'].steps[0].exec).toBe('mvn -B deploy -P release');
    expect(tasks['publish:maven-central:dry-run'].steps[0].exec).toBe('mvn -B verify -P release');
  });

  test('tags and creates the GitHub Release only after the publish step, and only when auto-published', () => {
    const names = publish().jobs.publish.steps.map((s: any) => s.name);
    expect(names.indexOf('Tag and create the GitHub Release')).toBeGreaterThan(names.indexOf('Publish to Maven Central'));
    const tag = stepNamed('Tag and create the GitHub Release');
    expect(tag.if).toBe("steps.version.outputs.release == 'true' && !inputs.dry_run && inputs.auto_publish");
    expect(tag.run).toContain('git tag -a "v$VERSION"');
    expect(tag.run).toContain('gh release create "v$VERSION"');
    expect(stepNamed('Print the tag command').if).toContain('!inputs.auto_publish');
  });

  test('the four secret names are the documented ones', () => {
    const text = JSON.stringify(publish());
    for (const name of ['MAVEN_GPG_PRIVATE_KEY', 'MAVEN_GPG_PASSPHRASE', 'MAVEN_CENTRAL_USERNAME', 'MAVEN_CENTRAL_PASSWORD']) {
      expect(text).toContain(`secrets.${name}`);
    }
  });

  test('mavenCentralOidc is gone', () => {
    expect(JSON.stringify(publish())).not.toContain('OIDC');
  });
});

test('.flattened-pom.xml is ignored', () => {
  expect(synthSnapshot(lib())['.gitignore']).toContain('.flattened-pom.xml');
});
