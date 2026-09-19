import { Component, github } from 'projen';
import {
  EnvironmentOptions,
  normalizeEnvironments,
} from './environment-options';
import { noteWorkflowPurpose } from './workflow-purpose';

/**
 * Shared, environment-parameterized manual-dispatch deploy workflow.
 *
 * This is the one "trigger a deploy" contract used by both the CDK project
 * types (deploying their own stacks) and the Java `CdkDeployHook` component
 * (dispatching a deploy in a companion CDK repo) - see the "Open Questions"
 * sections of the two specs.
 *
 * @internal - not part of the jsii-exported API (its `deploySteps` callback
 * isn't representable across jsii languages); consumed directly by other
 * TypeScript source in this package.
 */
export interface ManualDeployWorkflowOptions {
  /** Deploy targets exposed as the `environment` workflow_dispatch choice. */
  readonly environments: (string | EnvironmentOptions)[];

  /** @default "deploy" */
  readonly workflowName?: string;

  /**
   * The steps that actually perform the deploy for a given environment.
   * Defaults to a placeholder `echo` step - project types are expected to
   * override this with something real (e.g. `cdk deploy`, or a
   * `repository_dispatch` to a companion infra repo).
   */
  readonly deploySteps?: (
    env: EnvironmentOptions,
  ) => github.workflows.JobStep[];
}

/** @internal */
export class ManualDeployWorkflow extends Component {
  public readonly workflow: github.GithubWorkflow;

  constructor(
    scope: github.GitHubProject,
    options: ManualDeployWorkflowOptions,
  ) {
    super(scope, 'ManualDeployWorkflow');

    const environments = normalizeEnvironments(options.environments);
    const gh = scope.github;
    if (!gh) {
      throw new Error(
        'ManualDeployWorkflow requires GitHub integration to be enabled',
      );
    }

    const workflowName = options.workflowName ?? 'deploy';
    const deploySteps =
      options.deploySteps ??
      ((env: EnvironmentOptions): github.workflows.JobStep[] => [
        {
          name: `Deploy ${env.name}`,
          run: `echo "TODO: implement deploy steps for environment '${env.name}'"`,
        },
      ]);

    this.workflow = new github.GithubWorkflow(gh, workflowName);
    noteWorkflowPurpose(
      this.workflow.file,
      'Manually deploy to a chosen environment via workflow_dispatch.',
    );
    this.workflow.on({
      workflowDispatch: {
        inputs: {
          environment: {
            description: 'Environment to deploy',
            required: true,
            type: 'choice',
            options: environments.map((e) => e.name),
          },
          git_sha: {
            description:
              'Optional commit SHA to deploy (defaults to the default branch)',
            required: false,
          },
        },
      },
    });

    for (const env of environments) {
      const steps: github.workflows.JobStep[] = [
        {
          name: 'Checkout',
          uses: 'actions/checkout@v7',
          with: {
            ref: '${{ github.event.inputs.git_sha || github.sha }}',
          },
        },
        ...deploySteps(env),
      ];

      this.workflow.addJob(`deploy-${env.name}`, {
        name: `Deploy (${env.name})`,
        if: `github.event.inputs.environment == '${env.name}'`,
        runsOn: ['ubuntu-latest'],
        environment: env.requiresApproval ? env.name : undefined,
        permissions: {
          idToken: github.workflows.JobPermission.WRITE,
          contents: github.workflows.JobPermission.READ,
        },
        steps,
      });
    }
  }
}
