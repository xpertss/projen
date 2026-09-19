import {
  JsonFile,
  License,
  ReleasableCommits,
  YamlFile,
  github,
  release,
} from 'projen';
import { ActionBuildWorkflow } from './action-build-workflow';
import { ActionDogfoodOptions, ActionDogfoodWorkflow } from './action-dogfood-workflow';
import { ActionSonarWorkflow } from './action-sonar-workflow';
import { DEFAULT_GHE_TOKEN_SECRET } from '../common/constants';
import { applyInternalActionOverrides } from '../common/internal-actions';
import { ProjenDriftCheckWorkflow } from '../common/projen-drift-check-workflow';
import { attachTypeScriptProjenrc } from '../common/projenrc-ts';
import { WorkflowChangeNoticeWorkflow } from '../common/workflow-change-notice-workflow';
import { noteWorkflowPurpose } from '../common/workflow-purpose';

// `require('projen/package.json')`/`require('../../package.json')` resolve
// via Node's normal module resolution, so in a *published* package these
// read the versions actually installed in the consuming repo's
// node_modules - exactly the "PROJEN_VERSION of the synth" / "version of
// this package that scaffolded the repo" the private package.json's
// devDependencies need to pin (see F010 CI-dependencies section).
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PROJEN_VERSION: string = require('projen/package.json').version;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PROJEN_TYPES_VERSION: string = require('../../package.json').version;

// Exact pin, recorded as a component constant (AD-001: no latest/moving
// tag/semver range in anything a generated repo depends on). Upgrading this
// is a reviewed diff of this file.
const COMMIT_AND_TAG_VERSION = '13.2.1';

export interface GitHubActionProjectOptions
  extends github.GitHubProjectOptions {
  /**
   * One-line description of the action. Used in the default README
   * template and recorded in the private `package.json`.
   */
  readonly description?: string;

  /**
   * Name of the GitHub Actions secret holding the PAT used for
   * projen-automation PR comments (F003) and, when the action has a
   * `token` input, the dogfood's invocation of it.
   * @default "PROJEN_GITHUB_TOKEN"
   */
  readonly gheTokenSecret?: string;

  /**
   * URL of the org's SonarCloud instance (e.g. `https://sonarcloud.io`).
   * MUST be reachable from github.com-hosted (public) runners (AD-001).
   * Required, no default: a guessed server is worse than a loud failure.
   */
  readonly sonarHostUrl: string;

  /** @default "SONAR_TOKEN" */
  readonly sonarTokenSecret?: string;

  /**
   * Whether `sonar.yml` also runs on `pull_request` as a pass/fail gate.
   * @default true
   */
  readonly sonarPullRequestGate?: boolean;

  /**
   * The dogfood scenario (AD-001). What fixture state, what to assert, and
   * how to clean up are specified by the action's own F### spec - the
   * highest-risk behavior of that action.
   *
   * Its type is a struct, which projen's CLI cannot render into a projenrc,
   * so it can only be written by hand - it is therefore optional, because a
   * *required* option `projen new` cannot supply would make this project
   * type impossible to scaffold. AD-001's "never a silent no-op dogfood"
   * rule is enforced instead by the workflow it generates in that case: a
   * single step that fails on every PR until a scenario is declared.
   *
   * @default - `test-dogfood.yml` runs one failing step that tells you to
   * declare a scenario
   */
  readonly dogfood?: ActionDogfoodOptions;

  /**
   * SPDX identifier for the generated `LICENSE`.
   * @default "MIT"
   */
  readonly license?: string;
}

function defaultReadmeContents(options: GitHubActionProjectOptions): string {
  return `# ${options.name}

${options.description ?? ''}

## Usage

\`\`\`yaml
- uses: xpertss/${options.name}@<ref>
\`\`\`

## Bumping

A \`feat:\`/\`fix:\` commit pushed to \`main\` is released automatically: bump,
tag \`vX.Y.Z\`, GitHub Release. See \`.github/workflows/release.yml\`.

## Trust contract

This is a composite (shell) action - no Node/npm at runtime, no Docker. Its
CI lint gate (\`build.yml\`), dogfood test (\`test-dogfood.yml\`), and Sonar
scan (\`sonar.yml\`) are scaffolded by \`@xpertss/projen-types\`'
\`GitHubActionProject\`; only \`action.yml\` and its shell scripts are
hand-committed.
`;
}

/**
 * Scaffolds the repo lifecycle (AD-001) around a hand-committed, composite
 * (shell) GitHub Action: the `build`/`test-dogfood`/`sonar`/`release`
  * workflows, versioning and release discipline, the F003 verify components,
  * and repo boilerplate (a private version-source `package.json`, `.yamllint`,
  * `LICENSE`, and a `README.md` template). The
 * action's own content
 * (`action.yml`, its shell scripts, `test/` fixtures) is authored by hand
 * per the action's own F### spec - this type only lints it.
 */
export class GitHubActionProject extends github.GitHubProject {
  public readonly buildWorkflow: ActionBuildWorkflow;
  public readonly dogfoodWorkflow: ActionDogfoodWorkflow;
  public readonly sonarWorkflow: ActionSonarWorkflow;
  public readonly release: release.Release;

  constructor(options: GitHubActionProjectOptions) {
    if (!options.sonarHostUrl) {
      throw new Error('GitHubActionProject requires sonarHostUrl');
    }
    // A declared-but-incomplete dogfood is still an error - see
    // `ActionDogfoodWorkflow`, which owns that check (and the
    // no-dogfood-declared case).

    super({
      ...options,
      // PR titles are not gated: `feat:`/`fix:` matter only because they drive
      // the release workflow (via `releasableCommits`), not PR checks. The
      // conventional-commit PR-title lint is added by the `GitHub` component
      // unless `githubOptions.pullRequestLint` is `false` (it defaults true).
      githubOptions: { ...options.githubOptions, pullRequestLint: false },
      readme: options.readme ?? { contents: defaultReadmeContents(options) },
    });

    const gh = this.github;
    if (!gh) {
      throw new Error(
        'GitHubActionProject requires GitHub integration to be enabled',
      );
    }
    applyInternalActionOverrides(gh);

    new ProjenDriftCheckWorkflow(this, {
      gheTokenSecret: options.gheTokenSecret ?? DEFAULT_GHE_TOKEN_SECRET,
    });
    new WorkflowChangeNoticeWorkflow(this);

    new License(this, {
      spdx: options.license ?? 'MIT',
      copyrightOwner: 'xpertss',
    });

    // `.projenrc.ts` + `npx projen`, same as every other type here. A bare
    // GitHubProject has no default task that runs a projenrc on its own, so
    // this is what makes `npx projen` work in the generated repo at all.
    attachTypeScriptProjenrc(this);

    // projen marks generated files read-only (0444) on disk by default, but
    // this one must stay owner-writable: the documented update flow
    // (`npm i -D @xpertss/projen-types@latest`) needs npm to rewrite the
    // pinned versions in an existing repo. Hand-edits are still caught by
    // the drift check.
    new JsonFile(this, 'package.json', {
      obj: {
        name: options.name,
        version: '0.0.0',
        private: true,
        description: options.description,
        devDependencies: {
          'projen': PROJEN_VERSION,
          '@xpertss/projen-types': PROJEN_TYPES_VERSION,
          'commit-and-tag-version': COMMIT_AND_TAG_VERSION,
        },
      },
      readonly: false,
    });

    new YamlFile(this, '.yamllint', {
      obj: {
        extends: 'default',
        rules: { 'line-length': { max: 120 } },
      },
    });

    this.buildWorkflow = new ActionBuildWorkflow(this);

    this.dogfoodWorkflow = new ActionDogfoodWorkflow(this, options.dogfood);

    this.sonarWorkflow = new ActionSonarWorkflow(this, {
      sonarHostUrl: options.sonarHostUrl,
      sonarTokenSecret: options.sonarTokenSecret,
      sonarPullRequestGate: options.sonarPullRequestGate,
    });

    // `githubRelease` defaults to true, which auto-wires
    // `publishToGitHubReleases` - its `gh release create ... --target
    // $GITHUB_SHA` creates the tag *and* the release together for our
    // continuous (push-to-main) trigger. No separate `publishToGit` call
    // needed (that path only fires for a manual release trigger).
    this.release = new release.Release(this, {
      branch: 'main',
      // No build artifact for a composite action (AD-001) - this is only
      // where Release stages its own version/changelog files.
      artifactsDirectory: 'dist',
      tasks: [this.buildWorkflow.task],
      versionFile: 'package.json',
      releasableCommits: ReleasableCommits.featuresAndFixes(),
      releaseTrigger: release.ReleaseTrigger.continuous(),
      bumpPackage: `commit-and-tag-version@${COMMIT_AND_TAG_VERSION}`,
      releaseWorkflowSetupSteps: [
        { name: 'Install dependencies', run: 'npm ci' },
      ],
    });

    // The release workflow is created inside `release.Release` (projen
    // internal), not by this type - reach its file by path to annotate it
    // like every other generated workflow. This type is always a root
    // project, so projen names it `release.yml`.
    noteWorkflowPurpose(
      this.tryFindFile('.github/workflows/release.yml'),
      'Continuous release on push to main: bump version, tag, and create a GitHub Release.',
    );
  }
}
