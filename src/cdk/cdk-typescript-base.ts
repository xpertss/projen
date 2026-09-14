import { awscdk, github } from 'projen';
import { CommonCdkOptions } from './options';
import { DEFAULT_GHE_TOKEN_SECRET } from '../common/constants';
import { EnvironmentOptions } from '../common/environment-options';
import { ManualDeployWorkflow } from '../common/manual-deploy-workflow';

export interface CdkTypescriptProjectOptions extends CommonCdkOptions {
  readonly environments?: (string | EnvironmentOptions)[];
}

/**
 * Shared CDK + TypeScript foundation for `CdkInfraProject` and
 * `CdkAppProject`: standard app structure (via `AwsCdkTypeScriptApp`,
 * `cdk.json`, `cdk synth`/`cdk diff` tasks), a PR-check build that hard-fails
 * on projen drift (rather than self-mutating), and an optional
 * `ManualDeployWorkflow` when `environments` is provided.
 */
export class CdkTypescriptProject extends awscdk.AwsCdkTypeScriptApp {
  constructor(options: CdkTypescriptProjectOptions) {
    super({
      name: options.name,
      cdkVersion: options.cdkVersion ?? '2.189.1',
      defaultReleaseBranch: 'main',
      sampleCode: true,
      // Fail PR checks on drift instead of auto-committing projen's output.
      buildWorkflowOptions: { mutableBuild: false },
      projenCredentials: github.GithubCredentials.fromPersonalAccessToken({
        secret: options.gheTokenSecret ?? DEFAULT_GHE_TOKEN_SECRET,
      }),
    });

    this.addDevDeps('esbuild');

    if (options.environments && options.environments.length > 0) {
      new ManualDeployWorkflow(this, {
        environments: options.environments,
        slackWebhookSecret: options.slackWebhookSecret,
        deploySteps: (env) => [
          {
            name: 'Install',
            run: 'npm ci',
          },
          {
            name: `cdk deploy (${env.name})`,
            run: `npx cdk deploy --all --require-approval never --context environment=${env.name}`,
            env: {
              ...(env.accountId ? { CDK_DEFAULT_ACCOUNT: env.accountId } : {}),
              ...(env.region ? { CDK_DEFAULT_REGION: env.region } : {}),
            },
          },
        ],
      });
    }
  }
}
