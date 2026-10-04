import { EnvironmentOptions } from '../common/environment-options';

export interface CommonJavaOptions {
  readonly name: string;
  readonly groupId: string;
  readonly artifactId: string;

  /** @default "0.1.0" */
  readonly version?: string;

  /** Project description, written to the root pom. @default - none */
  readonly description?: string;

  /** Project URL, written to the root pom. @default - none */
  readonly url?: string;

  /** SonarCloud project key. If unset, the sonar scan step is skipped. */
  readonly sonarProjectKey?: string;

  /** @default "PROJEN_GITHUB_TOKEN" */
  readonly gheTokenSecret?: string;

  /**
   * Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`.
   *
   * Drives every Java-dependent part of the generated build: the compiler
   * level (`maven.compiler.release`, or `source`/`target` for 1.8, which has
   * no `--release`), the enforcer's `requireJavaVersion` rule, the JUnit line,
   * the default Spring Boot line, and the JDK CI installs. Any other value
   * fails at synth and lists the supported lines.
   *
   * @default "21"
   */
  readonly javaVersion?: string;

  /**
   * `actions/setup-java` distribution CI installs the JDK from.
   * @default "temurin"
   */
  readonly javaDistribution?: string;

  /**
   * Maven packaging of the root pom while the project has no modules. Once
   * `addModule()` is called the root pom is always `pom`-packaged (and
   * setting anything other than `pom` here is a synth error).
   *
   * @default "jar"
   */
  readonly packaging?: string;

  /**
   * Write a starter `Main` class and test under the `groupId` package, if
   * `src/` does not exist yet. Never written for a multi-module project.
   *
   * @default false
   */
  readonly sample?: boolean;

  /**
   * Add `maven-enforcer-plugin`, which fails the build up front when the JDK
   * or Maven running it is older than the project needs (rather than later,
   * with confusing compiler errors). Its Java rule always follows
   * `javaVersion`.
   *
   * @default true
   */
  readonly enforcer?: boolean;

  /**
   * Lowest Maven version the enforcer accepts (`requireMavenVersion
   * [<this>,)`). Ignored when `enforcer` is false.
   *
   * @default "3.9"
   */
  readonly minMavenVersion?: string;

  /**
   * Overrides for the plugin/BOM versions this package pins by default,
   * keyed by `groupId/artifactId`, e.g.
   * `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values
   * must be exact versions.
   *
   * @default - the defaults for `javaVersion`
   */
  readonly pluginVersions?: { [coordinates: string]: string };

  /**
   * Write a `LICENSE` file.
   * @default true
   */
  readonly licensed?: boolean;

  /**
   * SPDX identifier for the generated `LICENSE`.
   * @default "MIT"
   */
  readonly license?: string;

  /**
   * Copyright owner named in the `LICENSE`.
   * @default "Xpert Software"
   */
  readonly copyrightOwner?: string;

  /**
   * Copyright period named in the `LICENSE`.
   * @default - the current year
   */
  readonly copyrightPeriod?: string;

  /**
   * Write a projen-managed `.editorconfig`.
   * @default true
   */
  readonly editorconfig?: boolean;

  /**
   * Generate the nightly `upgrade.yml` workflow, which reports available
   * dependency and plugin updates in the job summary (it never edits files -
   * versions are changed in `.projenrc.ts`).
   *
   * @default true
   */
  readonly upgradeWorkflow?: boolean;
}

/** Options for `JavaMavenProject`. */
export interface JavaMavenProjectOptions extends CommonJavaOptions {}

/** Options for `JavaSpringBootProject`. */
export interface JavaSpringBootProjectOptions extends CommonJavaOptions {
  /**
   * Spring Boot version: imports `spring-boot-dependencies` as the first
   * BOM, and versions `spring-boot-maven-plugin`. Must be an exact version.
   * Spring Boot 3 and later need Java 17+, so with `javaVersion: '1.8'` only
   * a 2.x version is accepted.
   *
   * @default - the newest release of the line supporting `javaVersion`
   * (2.7.x for 1.8, otherwise the current major)
   */
  readonly springBootVersion?: string;
}

export interface JavaLibraryProjectOptions extends CommonJavaOptions {
  /** Use Maven Central's OIDC trusted-publishing flow instead of secret-based GPG signing. */
  readonly mavenCentralOidc?: boolean;

  /** @default true */
  readonly publishCodeIndex?: boolean;
}

export interface CdkDeployHookOptions {
  /**
   * The companion CDK infra/app repo (owner/repo) that owns the actual
   * infrastructure.
   *
   * @default - the workflow is still generated, but its only step fails with
   * instructions (see `CdkDeployHook`)
   */
  readonly targetRepo?: string;
}

export interface JavaServiceProjectOptions extends JavaSpringBootProjectOptions {
  /** @default "docker.io" */
  readonly dockerRegistry?: string;

  /** @default true */
  readonly useFlyway?: boolean;

  /**
   * The companion CDK infra/app repo (`owner/repo`) whose `deploy.yml` the
   * `deploy-cdk` workflow dispatches.
   *
   * A plain string rather than a nested struct so that
   * `projen new --from @xpertss/projen-types java_service` can pass it
   * (`--cdk-deploy-target-repo owner/repo`): projen's CLI can only render
   * options whose type is a string/number/boolean/array/enum, so a
   * struct-typed option is invisible to it.
   *
   * @default - `deploy-cdk.yml` is generated with a single failing step that
   * tells you to set this
   */
  readonly cdkDeployTargetRepo?: string;

  /**
   * Whether to generate the `deploy-cdk` workflow at all.
   *
   * @default true
   */
  readonly cdkDeployHook?: boolean;

  /**
   * Deploy targets to offer on the `CdkDeployHook`'s manual-dispatch
   * workflow, when the hook is enabled.
   *
   * @default ["prod"]
   */
  readonly environments?: (string | EnvironmentOptions)[];
}

export interface JavaAppProjectOptions extends CommonJavaOptions {
  /** @default "https://maven.pkg.github.com/OWNER/REPO" (derived from the repository URL) */
  readonly ghPackagesRegistry?: string;
}

/** Options for `JavaMavenProject.addModule()`. */
export interface MavenModuleOptions {
  /**
   * Module directory, relative to the repo root (may be nested, e.g.
   * `tools/stub-model`). Its `pom.xml` is generated there.
   */
  readonly dir: string;

  readonly artifactId: string;

  /** @default - the artifactId */
  readonly name?: string;

  /** @default - none */
  readonly description?: string;

  /** @default "jar" */
  readonly packaging?: string;
}
