import { Component, github } from 'projen';
import { dogfoodBranches } from '../common/dogfood-pr-guard';
import { noteWorkflowPurpose } from '../common/workflow-purpose';

// Nightly environment-regression canary (AD-001/F006): re-runs the same
// scenario against settled `main` in today's runner image, independent of
// the pull_request gate. Quiet UTC hour; a component constant, not a
// project option - upgrading it is a reviewed diff.
const NIGHTLY_DOGFOOD_SCHEDULE = '17 3 * * *';

/**
 * One invocation of the action within the dogfood scenario: optional fixture
 * setup, the `uses: ./` call with this step's inputs, then this step's
 * assertions. Most actions need exactly one; actions with a re-run/no-op
 * behavior to verify (e.g. F006's reuse-the-PR path, F007's no-op-commit
 * path) declare two.
 */
export interface ActionDogfoodStep {
  /** Label used to name this step-group's generated workflow steps. */
  readonly name: string;

  /**
   * Step id for the `uses: ./` invocation, so a later assertion can
   * reference this step's outputs via `${{ steps.<id>.outputs.<name> }}`.
   * @default - a slug derived from `name`, disambiguated by position
   */
  readonly id?: string;

  /**
   * Shell steps executed before this invocation, to produce or alter
   * fixture state.
   * @default []
   */
  readonly fixtureSteps?: string[];

  /**
   * `with:` inputs for this invocation's local `uses: ./` call.
   * @default {}
   */
  readonly inputs?: Record<string, string>;

  /**
   * Shell assertions after this invocation - the job fails unless every one
   * exits 0. The generated step runs under `set -euo pipefail`, so a failing
   * assertion fails the step immediately rather than being masked by a later,
   * passing one.
   */
  readonly assertions: string[];
}

// Lowercase, non-alphanumerics collapsed to a single `-`, trimmed - then
// disambiguated by position so two steps sharing a name (or an unnamed
// slug, e.g. punctuation-only) never collide.
function slug(name: string, index: number): string {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${base || 'step'}-${index}`;
}

/**
 * Mint a short-lived GitHub App token at the start of the dogfood job (via
 * `actions/create-github-app-token`) instead of running on the built-in
 * `github.token`. Required for any scenario whose load-bearing behavior the
 * Actions app cannot perform: the GitHub Actions app is platform-forbidden
 * from creating or approving pull requests
 * (`GraphQL: GitHub Actions is not permitted to create or approve pull
 * requests`), so a `uses: ./` call that creates a PR must run under a
 * different identity. It is also the org's standing credential for machine
 * automation (F020 builder-app-migration): a short-lived, revocable app
 * token instead of a long-lived PAT.
 *
 * The minted token is passed to the action explicitly, e.g.
 * `token: ${{ steps.token.outputs.token }}`, and exposed to every shell step
 * in the job (fixture, assert, cleanup) as `GH_TOKEN`: the org's runners do
 * not inject the `GITHUB_TOKEN` environment variable, so any `gh` call in a
 * shell step would be unauthenticated without it.
 */
export interface ActionDogfoodAppTokenOptions {
  /**
   * Name of the org-level secret holding the GitHub App's ID.
   * @default "PROJEN_APP_ID"
   */
  readonly appIdSecret?: string;

  /**
   * Name of the org-level secret holding the GitHub App's private key.
   * @default "PROJEN_APP_PRIVATE_KEY"
   */
  readonly privateKeySecret?: string;

  /**
   * Step id of the mint step, so scenario `inputs` can reference the token
   * via `${{ steps.<stepId>.outputs.token }}`.
   * @default "token"
   */
  readonly stepId?: string;
}

export interface ActionDogfoodOptions {
  /** One or more scenario steps, run in order, in the dogfood job. */
  readonly scenario: ActionDogfoodStep[];

  /**
   * Shell cleanup, run once at the end with `if: always()` so repeated runs
   * start clean. Intentionally **best-effort**: unlike the assert step it does
   * *not* run under `set -e`, so a failing line (e.g. deleting an already
   * deleted ref) does not fail the job.
   */
  readonly cleanup: string[];

  /**
   * Mint a short-lived GitHub App token for the job (see
   * `ActionDogfoodAppTokenOptions`) - needed when the scenario's action must
   * act under an identity other than the Actions app (e.g. create pull
   * requests) or authenticate `gh` calls in the shell steps.
   *
   * @default - the job runs on the workflow's built-in `github.token`
   */
  readonly appToken?: ActionDogfoodAppTokenOptions;
}

// The stand-in scenario used when a project declares no `dogfood` at all
// (e.g. a repo `projen new` just scaffolded). The workflow is still
// generated and still runs on every PR - it just fails, telling you what to
// write. AD-001's rule is that a dogfood must never be *silently* absent;
// throwing during synth instead would make the project type unscaffoldable,
// since `projen new` has no way to supply a scenario.
const UNCONFIGURED_STEPS: string[] = [
  'echo "::error::this action has no dogfood scenario, so nothing exercises it end-to-end."',
  'echo "Add dogfood: { scenario: [...], cleanup: [...] } to .projenrc.ts and run npx projen - see the @xpertss/projen-types README."',
  'exit 1',
];

/**
 * Per AD-001's dogfood test: the composite action is run **against this
 * repo**, end-to-end, via a local `uses: ./` reference - no external harness.
 * Builds `test-dogfood.yml` from an ordered `scenario` of invocation steps
 * (see `ActionDogfoodStep`) followed by a shared cleanup step.
 *
 * Omitting `options` generates the workflow with a single failing step (see
 * `UNCONFIGURED_STEPS`). A *partially* declared dogfood is still a synth
 * error: if you wrote a scenario by hand, you can write its cleanup too.
 *
 * With `appToken` (see `ActionDogfoodAppTokenOptions`), the job mints a
 * short-lived GitHub App token first: the Actions app token cannot create or
 * approve pull requests, and the org's runners do not inject the
 * `GITHUB_TOKEN` env var, so shell steps authenticate `gh` via `GH_TOKEN`.
 */
export class ActionDogfoodWorkflow extends Component {
  public readonly workflow: github.GithubWorkflow;

  constructor(scope: github.GitHubProject, options?: ActionDogfoodOptions) {
    super(scope, 'ActionDogfoodWorkflow');

    if (options) {
      if (!options.scenario || options.scenario.length === 0) {
        throw new Error(
          'ActionDogfoodWorkflow requires at least one dogfood.scenario step',
        );
      }
      if (!options.cleanup || options.cleanup.length === 0) {
        throw new Error('ActionDogfoodWorkflow requires dogfood.cleanup');
      }
    }

    const gh = scope.github;
    if (!gh) {
      throw new Error(
        'ActionDogfoodWorkflow requires GitHub integration to be enabled',
      );
    }

    // When a GitHub App token is minted, every shell step authenticates `gh`
    // with it via GH_TOKEN - the org's runners do not inject the
    // GITHUB_TOKEN env var, so without this the gh CLI would be
    // unauthenticated. The `uses: ./` invocation gets the token explicitly
    // through its inputs (the caller references the mint step's output).
    const appToken = options?.appToken;
    const tokenStepId = appToken ? (appToken.stepId ?? 'token') : undefined;
    const ghTokenEnv = tokenStepId
      ? { GH_TOKEN: `\${{ steps.${tokenStepId}.outputs.token }}` }
      : undefined;

    const steps: github.workflows.JobStep[] = options
      ? [github.WorkflowSteps.checkout()]
      : [
        {
          name: 'Dogfood scenario not configured',
          run: UNCONFIGURED_STEPS.join('\n'),
        },
      ];

    if (appToken) {
      steps.push({
        name: 'Generate GitHub App token',
        id: tokenStepId,
        uses: 'actions/create-github-app-token@v1',
        with: {
          'app-id': `\${{ secrets.${appToken.appIdSecret ?? 'PROJEN_APP_ID'} }}`,
          'private-key': `\${{ secrets.${appToken.privateKeySecret ?? 'PROJEN_APP_PRIVATE_KEY'} }}`,
        },
      });
    }

    (options?.scenario ?? []).forEach((step, index) => {
      if (step.fixtureSteps && step.fixtureSteps.length > 0) {
        steps.push({
          name: `${step.name}: fixture`,
          run: step.fixtureSteps.join('\n'),
          ...(ghTokenEnv ? { env: ghTokenEnv } : {}),
        });
      }

      const hasInputs = step.inputs && Object.keys(step.inputs).length > 0;
      steps.push({
        id: step.id ?? slug(step.name, index),
        name: `${step.name}: run the action`,
        uses: './',
        ...(hasInputs ? { with: step.inputs } : {}),
      });

      steps.push({
        name: `${step.name}: assert`,
        run: ['set -euo pipefail', ...step.assertions].join('\n'),
        ...(ghTokenEnv ? { env: ghTokenEnv } : {}),
      });
    });

    if (options) {
      steps.push({
        name: 'Cleanup',
        if: 'always()',
        run: options.cleanup.join('\n'),
        ...(ghTokenEnv ? { env: ghTokenEnv } : {}),
      });
    }

    this.workflow = new github.GithubWorkflow(gh, 'test-dogfood');
    noteWorkflowPurpose(
      this.workflow.file,
      'End-to-end dogfood test running the action against this repo.',
    );
    this.workflow.on({
      workflowDispatch: {},
      pullRequest: { branches: ['main'] },
      // No nightly canary while unconfigured: the PR run is the signal, and
      // a cron that always fails is just a daily notification nobody reads.
      ...(options ? { schedule: [{ cron: NIGHTLY_DOGFOOD_SCHEDULE }] } : {}),
    });

    // Self-trigger guard: a scenario whose action pushes a dedicated test
    // branch and opens a PR against `main` would otherwise re-trigger this
    // workflow on its own PR (`opened`, then `synchronize` on every
    // re-push) - and since every run pushes a fresh fixture commit, the
    // chain never terminates. `github.head_ref` is only populated on
    // pull_request events, so the first disjunct keeps dispatch and cron
    // runs (head_ref empty) unaffected. Branch values that are expressions
    // cannot be compared statically, so they are excluded from the guard.
    const selfTriggerBranches = dogfoodBranches(options?.scenario);
    const selfTriggerGuard =
      selfTriggerBranches.length === 1
        ? `github.event_name != 'pull_request' || github.head_ref != '${selfTriggerBranches[0]}'`
        : selfTriggerBranches.length > 1
          ? `github.event_name != 'pull_request' || !contains(fromJSON('${JSON.stringify(selfTriggerBranches)}'), github.head_ref)`
          : undefined;

    this.workflow.addJob('dogfood', {
      runsOn: ['ubuntu-latest'],
      ...(selfTriggerGuard ? { if: selfTriggerGuard } : {}),
      permissions: options
        ? {
          contents: github.workflows.JobPermission.WRITE,
          pullRequests: github.workflows.JobPermission.WRITE,
        }
        : { contents: github.workflows.JobPermission.READ },
      steps,
    });
  }
}
