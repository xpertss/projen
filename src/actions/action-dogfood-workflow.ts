import { Component, github } from 'projen';

// Nightly environment-regression canary (AD-001/F006): re-runs the same
// scenario against settled `main` in today's runner image, independent of
// the pull_request gate. Quiet UTC hour; a component constant, not a
// project option - upgrading it is a reviewed diff.
const NIGHTLY_DOGFOOD_SCHEDULE = '17 3 * * *';

/**
 * One invocation of the action within the dogfood scenario: optional fixture
 * setup, the `uses: .` call with this step's inputs, then this step's
 * assertions. Most actions need exactly one; actions with a re-run/no-op
 * behavior to verify (e.g. F006's reuse-the-PR path, F007's no-op-commit
 * path) declare two.
 */
export interface ActionDogfoodStep {
  /** Label used to name this step-group's generated workflow steps. */
  readonly name: string;

  /**
   * Step id for the `uses: .` invocation, so a later assertion can
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
   * `with:` inputs for this invocation's local `uses: .` call.
   * @default {}
   */
  readonly inputs?: Record<string, string>;

  /** Shell assertions after this invocation - the job fails unless every one exits 0. */
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

export interface ActionDogfoodOptions {
  /** One or more scenario steps, run in order, in the dogfood job. */
  readonly scenario: ActionDogfoodStep[];

  /** Shell cleanup, run once at the end with `if: always()`, so repeated runs start clean. */
  readonly cleanup: string[];
}

/**
 * Per AD-001's dogfood test: the composite action is run **against this
 * repo**, end-to-end, via a local `uses: .` reference - no external harness.
 * Builds `test-dogfood.yml` from an ordered `scenario` of invocation steps
 * (see `ActionDogfoodStep`) followed by a shared cleanup step.
 */
export class ActionDogfoodWorkflow extends Component {
  public readonly workflow: github.GithubWorkflow;

  constructor(scope: github.GitHubProject, options: ActionDogfoodOptions) {
    super(scope, 'ActionDogfoodWorkflow');

    if (!options.scenario || options.scenario.length === 0) {
      throw new Error(
        'ActionDogfoodWorkflow requires at least one dogfood.scenario step',
      );
    }
    if (!options.cleanup || options.cleanup.length === 0) {
      throw new Error('ActionDogfoodWorkflow requires dogfood.cleanup');
    }

    const gh = scope.github;
    if (!gh) {
      throw new Error(
        'ActionDogfoodWorkflow requires GitHub integration to be enabled',
      );
    }

    const steps: github.workflows.JobStep[] = [github.WorkflowSteps.checkout()];

    options.scenario.forEach((step, index) => {
      if (step.fixtureSteps && step.fixtureSteps.length > 0) {
        steps.push({
          name: `${step.name}: fixture`,
          run: step.fixtureSteps.join('\n'),
        });
      }

      const hasInputs = step.inputs && Object.keys(step.inputs).length > 0;
      steps.push({
        id: step.id ?? slug(step.name, index),
        name: `${step.name}: run the action`,
        uses: '.',
        ...(hasInputs ? { with: step.inputs } : {}),
      });

      steps.push({
        name: `${step.name}: assert`,
        run: step.assertions.join('\n'),
      });
    });

    steps.push({
      name: 'Cleanup',
      if: 'always()',
      run: options.cleanup.join('\n'),
    });

    this.workflow = new github.GithubWorkflow(gh, 'test-dogfood');
    this.workflow.on({
      workflowDispatch: {},
      pullRequest: { branches: ['main'] },
      schedule: [{ cron: NIGHTLY_DOGFOOD_SCHEDULE }],
    });
    this.workflow.addJob('dogfood', {
      runsOn: ['ubuntu-latest'],
      permissions: {
        contents: github.workflows.JobPermission.WRITE,
        pullRequests: github.workflows.JobPermission.WRITE,
      },
      steps,
    });
  }
}
