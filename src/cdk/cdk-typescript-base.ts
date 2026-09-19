import { awscdk, github, javascript } from 'projen';
import { CommonCdkOptions } from './options';
import { ActionsAllowlistGuard } from '../common/actions-allowlist-guard';
import { DEFAULT_GHE_TOKEN_SECRET } from '../common/constants';
import { EnvironmentOptions } from '../common/environment-options';
import { applyInternalActionOverrides } from '../common/internal-actions';
import { ManualDeployWorkflow } from '../common/manual-deploy-workflow';
import { ProjenDriftCheckWorkflow } from '../common/projen-drift-check-workflow';
import { WorkflowChangeNoticeWorkflow } from '../common/workflow-change-notice-workflow';
import { noteWorkflowPurpose } from '../common/workflow-purpose';

// Resolved through Node's normal module resolution, so in a *published*
// package this is the version of this package that scaffolded the repo (same
// trick as `GitHubActionProject`).
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PROJEN_TYPES_VERSION: string = require('../../package.json').version;

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
      // Spread first, overrides after: forwarding the caller's options is
      // what lets `projen new --from @xpertss/projen-types cdk_infra` work
      // - projen smuggles its bootstrap marker (`__new__`) through the
      // options object, and it is that marker which makes the
      // `ProjenrcFile` component write the initial `.projenrc.ts`. Drop it
      // and `projen new` scaffolds a repo with no projenrc at all.
      ...options,
      name: options.name,
      cdkVersion: options.cdkVersion ?? '2.189.1',
      defaultReleaseBranch: 'main',
      sampleCode: true,
      // Generated repos are configured through `.projenrc.ts`; without this
      // `TypeScriptProject` defaults to `projenrcTs: false` and wires the
      // default task to `node .projenrc.js`.
      projenrcTs: true,
      // Pinned, not `TypeScriptProject`'s default `*`: `typescript@7` no
      // longer exposes `ts.sys` from its JS API, which breaks the `ts-node`
      // that `projenrcTs` wires the default task to (AD-001 wants the pin
      // regardless).
      typescriptVersion: '~6.0.3',
      // Declared floor for the generated repo. Also required by the pin
      // above: with no `minNodeVersion`, projen derives `@types/node` from
      // the TypeScript version instead, and the `@types/node@ts6.0`
      // dist-tag it asks for does not exist - `npm install` fails outright.
      minNodeVersion: '22.0.0',
      // Without this projen defaults to yarn classic and the generated repo's
      // own install step runs `yarn install --check-files`, while every
      // workflow this package generates - and the README - use npm.
      packageManager: javascript.NodePackageManager.NPM,
      // Fail PR checks on drift instead of auto-committing projen's output.
      buildWorkflowOptions: { mutableBuild: false },
      projenCredentials: github.GithubCredentials.fromPersonalAccessToken({
        secret: options.gheTokenSecret ?? DEFAULT_GHE_TOKEN_SECRET,
      }),
    });

    // `.projenrc.ts` imports this package, so the generated repo has to
    // declare it: projen prunes any dependency of a `NodeProject` that the
    // projenrc does not ask for ("Removing unmanaged dependencies..."), which
    // would leave a repo whose `npx projen` cannot resolve its own project
    // type after a clean `npm ci`.
    this.addDevDeps(`@xpertss/projen-types@${PROJEN_TYPES_VERSION}`);
    this.addDevDeps('esbuild');

    const gh = this.github;
    if (!gh) {
      throw new Error(
        'CdkTypescriptProject requires GitHub integration to be enabled',
      );
    }
    applyInternalActionOverrides(gh);

    new ProjenDriftCheckWorkflow(this, {
      gheTokenSecret: options.gheTokenSecret ?? DEFAULT_GHE_TOKEN_SECRET,
    });
    new WorkflowChangeNoticeWorkflow(this);
    new ActionsAllowlistGuard(this);

    // `build` is projen's built-in NodeProject workflow (enabled via
    // `buildWorkflowOptions` above), not one this package constructs -
    // annotate it the same way as the others.
    if (this.buildWorkflow) {
      noteWorkflowPurpose(
        this.buildWorkflow.workflow.file,
        'Pull-request build gate: install dependencies, synthesize the CDK app, and run unit tests.',
      );
    }
    // `depsUpgrade` is projen's built-in nightly upgrade workflow - annotate
    // it the same way (one workflow per release branch).
    if (this.upgradeWorkflow) {
      for (const workflow of this.upgradeWorkflow.workflows) {
        noteWorkflowPurpose(
          workflow.file,
          'Open a nightly dependency-upgrade pull request.',
        );
      }
    }
    // `pull-request-lint` is projen's built-in PR-title validation workflow -
    // reach its file by path like the release workflow.
    noteWorkflowPurpose(
      this.tryFindFile('.github/workflows/pull-request-lint.yml'),
      'Reject pull requests whose titles do not follow the conventional-commit (semantic-release) format.',
    );

    if (options.environments && options.environments.length > 0) {
      new ManualDeployWorkflow(this, {
        environments: options.environments,
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
