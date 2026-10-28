import { awscdk, github, javascript } from 'projen';
import { addCdkDeployWorkflow } from './cdk-deploy-workflow';
import { CommonCdkOptions } from './options';
import { NPM_CI_STEP, SETUP_NODE_STEP } from '../common/ci-steps';
import { CodeIndexWorkflow } from '../common/code-index-workflow';
import { SCIP_TYPESCRIPT_VERSION } from '../common/constants';
import { addEditorConfig } from '../common/editorconfig';
import { applyInternalActionOverrides } from '../common/internal-actions';
import { addLicenseFile } from '../common/license-file';
import { ProjenDriftCheckWorkflow } from '../common/projen-drift-check-workflow';
import { SonarWorkflow } from '../common/sonar-workflow';
import { WorkflowChangeNoticeWorkflow } from '../common/workflow-change-notice-workflow';
import { noteWorkflowPurpose } from '../common/workflow-purpose';

// Resolved through Node's normal module resolution, so in a *published*
// package this is the version of this package that scaffolded the repo (same
// trick as `GitHubActionProject`).
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PROJEN_TYPES_VERSION: string = require('../../package.json').version;

export interface CdkTypescriptProjectOptions extends CommonCdkOptions {}

/**
 * Shared CDK + TypeScript foundation for `CdkInfraProject` and
 * `CdkAppProject`: standard app structure (via `AwsCdkTypeScriptApp`,
 * `cdk.json`, `cdk synth`/`cdk diff` tasks), a PR-check build that hard-fails
 * on projen drift (rather than self-mutating), and the push-to-`main`
 * `deploy` workflow (OIDC into the org-wide `gha-cdk-deploy` role).
 */
export class CdkTypescriptProject extends awscdk.AwsCdkTypeScriptApp {
  /** Set only when `sonarHostUrl` is provided. */
  public readonly sonarWorkflow?: SonarWorkflow;

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
      cdkVersion: options.cdkVersion ?? '2.273.0',
      // We write LICENSE ourselves (with a human-readable header);
      // suppress projen's built-in License component.
      licensed: false,
      defaultReleaseBranch: 'main',
      sampleCode: true,
      // PR titles are not gated: `feat:`/`fix:` matter only because they drive
      // the release workflow (via `releasableCommits`), not PR checks. The
      // conventional-commit PR-title lint is added by the `GitHub` component
      // unless `githubOptions.pullRequestLint` is `false` (it defaults true).
      githubOptions: { pullRequestLint: false },
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
      // How core projen's own automation (the dependency-upgrade PR in
      // `upgrade.yml`) authenticates. Defaults to the org's `builder`
      // GitHub App; a consumer can override with a different App or a PAT.
      projenCredentials:
        options.projenCredentials ?? github.GithubCredentials.fromApp(),
    });

    // `.projenrc.ts` imports this package, so the generated repo has to
    // declare it: projen prunes any dependency of a `NodeProject` that the
    // projenrc does not ask for ("Removing unmanaged dependencies..."), which
    // would leave a repo whose `npx projen` cannot resolve its own project
    // type after a clean `npm ci`.
    this.addDevDeps(`@xpertss/projen-types@${PROJEN_TYPES_VERSION}`);
    this.addDevDeps('esbuild');

    // JetBrains IDE state (.idea/) is never tracked in generated repos, and
    // neither is /spec/ (local plans and specs; the pattern covers every
    // subdirectory).
    this.addGitIgnore('/.idea/*');
    this.addGitIgnore('/spec/');

    if (options.editorconfig ?? true) {
      addEditorConfig(this);
    }

    if (options.licensed ?? true) {
      addLicenseFile(this, {
        spdx: options.license ?? 'MIT',
        copyrightOwner: options.copyrightOwner ?? 'Xpert Software',
        copyrightPeriod: options.copyrightPeriod,
      });
    }

    const gh = this.github;
    if (!gh) {
      throw new Error(
        'CdkTypescriptProject requires GitHub integration to be enabled',
      );
    }
    applyInternalActionOverrides(gh);

    new ProjenDriftCheckWorkflow(this);
    new WorkflowChangeNoticeWorkflow(this);

    if (options.sonarHostUrl) {
      this.sonarWorkflow = new SonarWorkflow(this, {
        sonarHostUrl: options.sonarHostUrl,
        sonarOrganization: options.sonarOrganization,
        sonarTokenSecret: options.sonarTokenSecret,
        sonarPullRequestGate: options.sonarPullRequestGate,
        sonarProjectKey: options.sonarProjectKey,
      });
    }

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
    addCdkDeployWorkflow(gh);

    if (options.publishCodeIndex ?? true) {
      this.addDevDeps(`@sourcegraph/scip-typescript@${SCIP_TYPESCRIPT_VERSION}`);
      new CodeIndexWorkflow(this, {
        exec: [
          // `scip-typescript` does not create the output directory, and the
          // older list-of-files index is replaced by `.xss/index.scip`. Node,
          // not `mkdir -p`/`rm`, so the task also runs where there is no POSIX
          // shell.
          'node -e "const fs=require(\'fs\');fs.mkdirSync(\'.xss\',{recursive:true});fs.rmSync(\'.xss/index.txt\',{force:true})"',
          // The generated root `tsconfig.json` includes `src/` only, so the
          // projen project itself (`.projenrc.ts`, `projenrc/`) and the tests
          // stay out of the index.
          'scip-typescript index --output .xss/index.scip',
          // Drop what differs by machine (the absolute project root, Windows
          // path separators), so the index is the same wherever it was built.
          'node node_modules/@xpertss/projen-types/lib/common/scip-index-normalizer.js .xss/index.scip',
        ],
        sourcePathspecs: ['src/*.ts', 'src/*.tsx'],
        setupSteps: [SETUP_NODE_STEP, NPM_CI_STEP],
      });
    }
  }
}
