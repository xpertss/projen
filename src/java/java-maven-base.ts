import { posix } from 'node:path';
import { JsonFile, SampleDir, Task, github, java } from 'projen';
import { MavenUpgradeReport } from './components/maven-upgrade-report';
import {
  DEFAULT_MIN_MAVEN_VERSION,
  JUNIT_BOM,
  JavaLineProfile,
  MAVEN_COMPILER_PLUGIN,
  MAVEN_ENFORCER_PLUGIN,
  MAVEN_FAILSAFE_PLUGIN,
  MAVEN_JAR_PLUGIN,
  MAVEN_SUREFIRE_PLUGIN,
  VERSIONS_MAVEN_PLUGIN,
  resolveJavaLine,
} from './java-versions';
import { MavenModule } from './maven/maven-module';
import { MavenPom, assertExactVersion } from './maven/maven-pom';
import { JavaMavenProjectOptions, MavenModuleOptions } from './options';
import { NPM_CI_STEP, SETUP_NODE_STEP } from '../common/ci-steps';
import { DEFAULT_GHE_TOKEN_SECRET } from '../common/constants';
import { addEditorConfig } from '../common/editorconfig';
import { applyInternalActionOverrides } from '../common/internal-actions';
import { addLicenseFile } from '../common/license-file';
import { ProjenDriftCheckWorkflow } from '../common/projen-drift-check-workflow';
import { attachTypeScriptProjenrc } from '../common/projenrc-ts';
import { WorkflowChangeNoticeWorkflow } from '../common/workflow-change-notice-workflow';
import { noteWorkflowPurpose } from '../common/workflow-purpose';

// `require(...)` resolves through Node's normal module resolution, so in a
// *published* package these are the versions installed in the consuming
// repo - exactly what its package.json must pin (same as
// `GitHubActionProject`).
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PROJEN_VERSION: string = require('projen/package.json').version;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PROJEN_TYPES_VERSION: string = require('../../package.json').version;

/**
 * Baseline Maven project, single- or multi-module, with no framework
 * assumptions. It is the base of every Java type in this package and is
 * usable on its own (`projen new ... java_maven`).
 *
 * - The pom is written by this package (`MavenPom`), not projen's
 *   `java.Pom`: exact versions only, BOM imports, `<modules>`,
 *   `<dependencyManagement>`, `<pluginManagement>`.
 * - Everything Java-version-dependent (compiler level, enforcer rule, JUnit
 *   line, CI JDK) follows `javaVersion`.
 * - With no `addModule()` calls the root pom is the artifact. After the
 *   first `addModule()` it is a `pom`-packaged reactor parent and the
 *   modules inherit its plugins and test dependencies.
 * - `npx projen build` synthesizes, then runs Maven once: `mvn -B verify`
 *   (unit tests via surefire, `*IT` tests via failsafe).
 * - CI: a PR build (with an optional SonarQube scan), the projen drift
 *   check, and a nightly report-only update check.
 */
export class JavaMavenProject extends github.GitHubProject {
  /** The root `pom.xml`. */
  public readonly pom: MavenPom;

  /** The canonical Java line the build targets (`1.8`, `17`, `21`, `25`). */
  public readonly javaVersion: string;

  /** Prints available dependency/plugin updates (`npx projen upgrade`). */
  public readonly upgradeTask: Task;

  /**
   * The PR build workflow (`build.yml`). Add jobs to it with
   * `buildVerifyWorkflow.addJob(id, job)`; use `ciSetupSteps` for a job that
   * needs Node, the projen toolchain, and the JDK.
   */
  public readonly buildVerifyWorkflow: github.TaskWorkflow;

  /**
   * Steps that install Node (pinned), `npm ci`, and the project's JDK with a
   * Maven cache - the setup every Maven CI job in this repo needs.
   */
  public readonly ciSetupSteps: github.workflows.JobStep[];

  private readonly javaLine: JavaLineProfile;
  private readonly rootPackaging?: string;
  private readonly groupId: string;
  private readonly sample: boolean;
  private readonly mavenModules: MavenModule[] = [];

  constructor(options: JavaMavenProjectOptions) {
    super({
      // Spread first, overrides after: forwarding the caller's options is
      // what lets `projen new --from @xpertss/projen-types java_maven` work
      // - projen smuggles its bootstrap marker (`__new__`) through the
      // options object, and it is that marker which makes the
      // `ProjenrcFile` component write the initial `.projenrc.ts`. Drop it
      // and `projen new` scaffolds a repo with no projenrc at all.
      ...stringifyProjenNewArgs(options),
      name: options.name,
      // PR titles are not gated: `feat:`/`fix:` matter only because they drive
      // the release workflow (via `releasableCommits`), not PR checks. The
      // conventional-commit PR-title lint is added by the `GitHub` component
      // unless `githubOptions.pullRequestLint` is `false` (it defaults true).
      githubOptions: { pullRequestLint: false },
      projenCredentials: github.GithubCredentials.fromPersonalAccessToken({
        secret: options.gheTokenSecret ?? DEFAULT_GHE_TOKEN_SECRET,
      }),
    });

    for (const version of Object.values(options.pluginVersions ?? {})) {
      assertExactVersion(version, 'pluginVersions');
    }
    this.javaLine = resolveJavaLine(options.javaVersion, options.pluginVersions);
    this.javaVersion = this.javaLine.line;
    this.rootPackaging = options.packaging;
    this.groupId = options.groupId;
    this.sample = options.sample ?? false;

    // `.projenrc.ts` + `npx projen`, same as every other type here. The
    // Maven repo needs no TypeScript toolchain of its own - the runner is
    // fetched (pinned) by npx at synth time.
    attachTypeScriptProjenrc(this);

    // The projen toolchain `npx projen` runs, pinned exactly so every
    // machine and CI resolve the same generator. Owner-writable on disk so
    // the documented update flow (`npm i -D -E @xpertss/projen-types@<v>`)
    // can rewrite it; hand-edits are still caught by the drift check.
    new JsonFile(this, 'package.json', {
      obj: {
        name: options.name,
        version: '0.0.0',
        private: true,
        devDependencies: {
          'projen': PROJEN_VERSION,
          '@xpertss/projen-types': PROJEN_TYPES_VERSION,
        },
      },
      readonly: false,
    });

    // JetBrains IDE state (.idea/) is never tracked in generated repos, and
    // neither is /spec/ (local plans and specs; the pattern covers every
    // subdirectory).
    this.addGitIgnore('/.idea/*');
    this.addGitIgnore('/spec/');
    this.addGitIgnore('target/');
    this.addGitIgnore('.classpath');
    this.addGitIgnore('.project');
    this.addGitIgnore('.settings');

    if (options.licensed ?? true) {
      addLicenseFile(this, {
        spdx: options.license ?? 'MIT',
        copyrightOwner: options.copyrightOwner ?? 'Xpert Software',
        copyrightPeriod: options.copyrightPeriod,
      });
    }
    if (options.editorconfig ?? true) {
      addEditorConfig(this);
    }

    this.pom = new MavenPom(this, {
      groupId: options.groupId,
      artifactId: options.artifactId,
      version: options.version ?? '0.1.0',
      packaging: this.rootPackaging ?? 'jar',
      name: options.name,
      description: options.description,
      url: options.url,
    });
    this.configureBuild(options);

    // One Maven run per build: `verify` runs every earlier phase (compile,
    // unit tests, package) plus integration tests. Nothing deploys.
    this.testTask.exec('mvn -B verify');

    const gh = this.github;
    if (!gh) {
      throw new Error('JavaMavenProject requires GitHub integration');
    }
    applyInternalActionOverrides(gh);

    new ProjenDriftCheckWorkflow(this, {
      gheTokenSecret: options.gheTokenSecret ?? DEFAULT_GHE_TOKEN_SECRET,
    });
    new WorkflowChangeNoticeWorkflow(this);

    this.ciSetupSteps = [
      SETUP_NODE_STEP,
      NPM_CI_STEP,
      {
        name: 'Setup Java',
        uses: 'actions/setup-java@v6',
        with: {
          'distribution': options.javaDistribution ?? 'temurin',
          'java-version': this.javaLine.setupJavaVersion,
          'cache': 'maven',
        },
      },
    ];

    const postBuildSteps: github.workflows.JobStep[] = [];
    if (options.sonarProjectKey) {
      postBuildSteps.push({
        name: 'SonarQube scan',
        run: `mvn -B sonar:sonar -Dsonar.projectKey=${options.sonarProjectKey}`,
        env: { SONAR_TOKEN: '${{ secrets.SONAR_TOKEN }}' },
      });
    }

    this.buildVerifyWorkflow = new github.TaskWorkflow(gh, {
      name: 'build',
      jobId: 'build',
      task: this.buildTask,
      triggers: { pullRequest: {}, workflowDispatch: {} },
      permissions: { contents: github.workflows.JobPermission.READ },
      preBuildSteps: this.ciSetupSteps,
      postBuildSteps,
    });
    noteWorkflowPurpose(
      this.buildVerifyWorkflow.file,
      'Build and test the Maven project on pull requests, with an optional SonarQube scan.',
    );

    const versionsPlugin = `org.codehaus.mojo:versions-maven-plugin:${this.pinnedVersion(VERSIONS_MAVEN_PLUGIN)}`;
    this.upgradeTask = this.addTask('upgrade', {
      exec: `mvn -B ${versionsPlugin}:display-dependency-updates ${versionsPlugin}:display-plugin-updates`,
    });
    if (options.upgradeWorkflow ?? true) {
      new MavenUpgradeReport(this, {
        task: this.upgradeTask,
        setupSteps: this.ciSetupSteps,
      });
    }
  }

  /** The modules added with `addModule()`, in order. */
  public get modules(): MavenModule[] {
    return [...this.mavenModules];
  }

  /**
   * Adds a Maven module in `dir` (relative to the repo root; may be nested,
   * e.g. `tools/stub-model`) and turns the root pom into the reactor parent
   * (`packaging=pom`, `<modules>` in the order added). The parent manages
   * every module at `${project.version}`, so modules depend on each other
   * with `addModuleDependency()`, versionless.
   */
  public addModule(options: MavenModuleOptions): MavenModule {
    if (this.rootPackaging !== undefined && this.rootPackaging !== 'pom') {
      throw new Error(
        `A multi-module project's root pom is packaged as "pom"; remove packaging: "${this.rootPackaging}".`,
      );
    }
    const dir = normalizeModuleDir(options.dir);
    for (const m of this.mavenModules) {
      if (m.artifactId === options.artifactId) {
        throw new Error(`Duplicate module artifactId "${options.artifactId}" (dirs "${m.dir}" and "${dir}").`);
      }
      if (m.dir === dir || dir.startsWith(`${m.dir}/`) || m.dir.startsWith(`${dir}/`)) {
        throw new Error(`Module dir "${dir}" overlaps module dir "${m.dir}": module dirs must be distinct and not nested.`);
      }
    }

    const module = new MavenModule(this, this.pom, { ...options, dir });
    this.mavenModules.push(module);
    this.pom.packaging = 'pom';
    this.pom.managePluginVersions = true;
    this.pom.addModule(dir);
    this.pom.addManagedDependency(`${this.groupId}/${options.artifactId}@\${project.version}`);
    return module;
  }

  /**
   * Imports a BOM into the root `<dependencyManagement>` (`type=pom`,
   * `scope=import`).
   *
   * @param spec `groupId/artifactId@version`
   */
  public addBom(spec: string): void {
    this.pom.addBom(spec);
  }

  /**
   * Pins a version in the root `<dependencyManagement>` without adding the
   * dependency, so modules (or the root) can use it versionless.
   *
   * @param spec `groupId/artifactId@version`
   */
  public addManagedDependency(spec: string): void {
    this.pom.addManagedDependency(spec);
  }

  /**
   * Adds a compile-scope dependency to the root pom. In a multi-module
   * project every module inherits it; use `MavenModule.addDependency` for
   * one module.
   *
   * @param spec `groupId/artifactId[@version]` - exact version, or none when
   * a BOM manages it
   */
  public addDependency(spec: string): void {
    this.pom.addDependency(spec);
  }

  /** Adds a test-scope dependency to the root pom (inherited by every module). */
  public addTestDependency(spec: string): void {
    this.pom.addTestDependency(spec);
  }

  /** Adds a build plugin to the root pom (inherited by every module). */
  public addPlugin(spec: string, options: java.PluginOptions = {}): void {
    this.pom.addPlugin(spec, options);
  }

  public preSynthesize(): void {
    super.preSynthesize();
    if (this.sample && this.mavenModules.length === 0) {
      this.addSample();
    }
  }

  /**
   * The exact version this project uses for a `groupId/artifactId` it pins
   * by default: the `pluginVersions` override if set, otherwise the
   * default for `javaVersion`.
   */
  public pinnedVersion(coordinates: string): string {
    const version = this.javaLine.versions[coordinates];
    if (!version) {
      throw new Error(`No default version for ${coordinates}.`);
    }
    return version;
  }

  /**
   * The newest Spring Boot major version `javaVersion` supports, or
   * undefined when this package knows of no cap.
   */
  protected maxSpringBootMajor(): number | undefined {
    return this.javaLine.maxSpringBootMajor;
  }

  private configureBuild(options: JavaMavenProjectOptions): void {
    this.pom.addProperty('project.build.sourceEncoding', 'UTF-8');
    for (const [name, value] of Object.entries(this.javaLine.compilerProperties)) {
      this.pom.addProperty(name, value);
    }

    // JUnit's version comes from its BOM (or from a framework BOM that
    // manages it - see JavaSpringBootProject), never from a dependency.
    this.pom.addBom(`${JUNIT_BOM}@${this.pinnedVersion(JUNIT_BOM)}`);
    this.pom.addTestDependency('org.junit.jupiter/junit-jupiter');

    this.addPlugin(`${MAVEN_COMPILER_PLUGIN}@${this.pinnedVersion(MAVEN_COMPILER_PLUGIN)}`);
    this.addPlugin(`${MAVEN_SUREFIRE_PLUGIN}@${this.pinnedVersion(MAVEN_SUREFIRE_PLUGIN)}`);
    // failsafe has no default lifecycle binding; bind it so `*IT` tests run
    // in `mvn verify`.
    this.addPlugin(`${MAVEN_FAILSAFE_PLUGIN}@${this.pinnedVersion(MAVEN_FAILSAFE_PLUGIN)}`, {
      executions: [{ id: 'integration-tests', goals: ['integration-test', 'verify'] }],
    });
    this.addPlugin(`${MAVEN_JAR_PLUGIN}@${this.pinnedVersion(MAVEN_JAR_PLUGIN)}`, {
      configuration: {
        archive: {
          manifest: {
            addDefaultImplementationEntries: true,
            addDefaultSpecificationEntries: true,
          },
        },
      },
    });

    if (options.enforcer ?? true) {
      const minMaven = options.minMavenVersion ?? DEFAULT_MIN_MAVEN_VERSION;
      assertExactVersion(minMaven, 'minMavenVersion');
      this.addPlugin(`${MAVEN_ENFORCER_PLUGIN}@${this.pinnedVersion(MAVEN_ENFORCER_PLUGIN)}`, {
        executions: [{ id: 'enforce-versions', goals: ['enforce'] }],
        configuration: {
          rules: {
            requireMavenVersion: { version: `[${minMaven},)` },
            requireJavaVersion: { version: this.javaLine.enforcerJavaRange },
          },
        },
      });
    }
  }

  private addSample(): void {
    const pkg = this.groupId.replace(/[^A-Za-z0-9_.]/g, '_');
    const path = pkg.split('.');
    new SampleDir(this, posix.join('src/main/java', ...path), {
      files: {
        'Main.java': [
          `package ${pkg};`,
          '',
          'public class Main {',
          '    public static void main(String[] args) {',
          '        System.out.println("Hello, world!");',
          '    }',
          '}',
          '',
        ].join('\n'),
      },
    });
    new SampleDir(this, posix.join('src/test/java', ...path), {
      files: {
        'MainTest.java': [
          `package ${pkg};`,
          '',
          'import org.junit.jupiter.api.Test;',
          '',
          'class MainTest {',
          '    @Test',
          '    void runs() {',
          '        Main.main(new String[0]);',
          '    }',
          '}',
          '',
        ].join('\n'),
      },
    });
  }
}

/**
 * `projen new ... --java-version 21` (or `1.8`, or `--min-maven-version 3.9`)
 * reaches the options as a *number*: yargs parses numeric-looking flags, and
 * projen passes string-typed options through unchanged. The initial
 * `.projenrc.ts` is rendered from the same args, so it would read
 * `javaVersion: 21` and fail to type-check. No Java option is number-typed,
 * so every numeric arg is turned back into the string the user typed. This
 * runs before the Project constructor, which is where projen captures the
 * args it renders. Options from a hand-written projenrc are never numbers
 * (they type-check as strings) and are left alone.
 */
function stringifyProjenNewArgs<T extends object>(options: T): T {
  const marker = (options as any).__new__;
  if (!marker?.args) {
    return options;
  }
  for (const target of [options as any, marker.args]) {
    for (const [name, value] of Object.entries(target)) {
      if (typeof value === 'number') {
        target[name] = String(value);
      }
    }
  }
  return options;
}

function normalizeModuleDir(dir: string): string {
  const unix = dir.replace(/\\/g, '/');
  if (unix.startsWith('/') || /^[A-Za-z]:/.test(unix)) {
    throw new Error(`Module dir "${dir}" must be relative to the repo root.`);
  }
  const normalized = posix.normalize(unix).replace(/\/+$/, '');
  if (normalized === '.' || normalized === '' || normalized.split('/').includes('..')) {
    throw new Error(`Module dir "${dir}" must be a subdirectory of the repo root.`);
  }
  return normalized;
}
