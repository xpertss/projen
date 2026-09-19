import { EnvironmentOptions } from '../common/environment-options';

export interface CommonJavaOptions {
  readonly name: string;
  readonly groupId: string;
  readonly artifactId: string;

  /** @default "0.1.0" */
  readonly version?: string;

  /** SonarCloud project key. If unset, the sonar scan step is skipped. */
  readonly sonarProjectKey?: string;

  /** @default "PROJEN_GITHUB_TOKEN" */
  readonly gheTokenSecret?: string;
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

export interface JavaServiceProjectOptions extends CommonJavaOptions {
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
