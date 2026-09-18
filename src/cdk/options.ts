import { EnvironmentOptions } from '../common/environment-options';

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

export interface CommonCdkOptions {
  readonly name: string;

  /** @default "2.189.1" */
  readonly cdkVersion?: string;

  /** @default "PROJEN_GITHUB_TOKEN" */
  readonly gheTokenSecret?: string;
}

export interface CdkInfraProjectOptions extends CommonCdkOptions {
  /** Deploy targets for the manual-dispatch deploy workflow, e.g. ["dev", "stage", "prod"]. */
  readonly environments: (string | EnvironmentOptions)[];

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
