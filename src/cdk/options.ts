import { github } from 'projen';
import { CommonCodeOptions } from '../common/code-options';
import { SonarScanOptions } from '../common/sonar-options';

export type EdgeResource =
  | 'cloudfront'
  | 'route53'
  | 'apigateway'
  | 'cognito'
  | 'sqs';

export interface EcrEcsOptions {
  /** @default false */
  readonly enabled?: boolean;

  /**
   * Whether the ECS service stands up an externally-built image (infra-only)
   * rather than one built from this project's own source.
   *
   * @default true
   */
  readonly externalImageSource?: boolean;
}

export interface CommonCdkOptions extends SonarScanOptions, CommonCodeOptions {
  readonly name: string;

  /** @default "2.273.0" */
  readonly cdkVersion?: string;

  /**
   * Pin `aws-cdk-lib` to exactly `cdkVersion` instead of `^cdkVersion`.
   *
   * @default false
   */
  readonly cdkVersionPinning?: boolean;

  /**
   * Runtime dependencies, as `name@version` (use an exact version to pin).
   *
   * @default []
   */
  readonly deps?: string[];

  /**
   * Build dependencies, as `name@version` (use an exact version to pin).
   *
   * @default []
   */
  readonly devDeps?: string[];

  /**
   * Additional context written to `cdk.json`, read by the app with
   * `node.tryGetContext()`.
   *
   * @default - no additional context
   */
  readonly context?: { [key: string]: any };

  /**
   * How projen-generated workflows authenticate to the GitHub API.
   *
   * @default - GitHub App using the `PROJEN_APP_ID` and
   *            `PROJEN_APP_PRIVATE_KEY` secrets
   */
  readonly projenCredentials?: github.GithubCredentials;

  /**
   * Write a `LICENSE`.
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
}

export interface CdkInfraProjectOptions extends CommonCdkOptions {
  readonly ecrEcs?: EcrEcsOptions;

  readonly edgeResources?: EdgeResource[];
}

export interface DatabaseOptions {
  /** @default "postgres" */
  readonly engine?: 'postgres' | 'mysql' | 'dynamodb';

  /** Migration tool to wire up, e.g. "flyway", "liquibase", "prisma". Left pluggable - no default. */
  readonly migrationTool?: string;
}

export interface CdkAppProjectOptions extends CdkInfraProjectOptions {
  readonly database?: DatabaseOptions;

  /** @default "src/app.ts" */
  readonly appEntryPoint?: string;
}
