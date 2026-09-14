import { EnvironmentOptions } from '../common/environment-options';

export interface CommonJavaOptions {
  readonly name: string;
  readonly groupId: string;
  readonly artifactId: string;

  /** @default "0.1.0" */
  readonly version?: string;

  /** SonarQube project key. If unset, the sonar scan step is skipped. */
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
  /** @default true */
  readonly enabled?: boolean;

  /** The companion CDK infra/app repo (owner/repo) that owns the actual infrastructure. */
  readonly targetRepo?: string;
}

export interface JavaServiceProjectOptions extends CommonJavaOptions {
  /** @default "docker.io" */
  readonly dockerRegistry?: string;

  /** @default true */
  readonly useFlyway?: boolean;

  /** @default { enabled: true } */
  readonly cdkDeployHook?: CdkDeployHookOptions;

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
