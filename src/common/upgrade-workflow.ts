import { Component, Task, github } from 'projen';
import { NIGHTLY_UPGRADE_SCHEDULE } from './constants';

/**
 * Nightly cron workflow that opens a PR with dependency upgrades. Used by
 * non-Node project types (Java); TypeScript/CDK project types instead get
 * this for free from projen's built-in `depsUpgrade`.
 */
export interface UpgradeWorkflowOptions {
  /** The task that performs the upgrade (e.g. `mvn versions:use-latest-releases`). */
  readonly task: Task;

  /** @default "upgrade" */
  readonly workflowName?: string;

  /** @default NIGHTLY_UPGRADE_SCHEDULE (03:00 UTC) */
  readonly schedule?: string;
}

export class UpgradeWorkflow extends Component {
  public readonly workflow: github.TaskWorkflow;

  constructor(scope: github.GitHubProject, options: UpgradeWorkflowOptions) {
    super(scope, 'UpgradeWorkflow');

    const gh = scope.github;
    if (!gh) {
      throw new Error(
        'UpgradeWorkflow requires GitHub integration to be enabled',
      );
    }

    this.workflow = new github.TaskWorkflow(gh, {
      name: options.workflowName ?? 'upgrade',
      jobId: 'upgrade',
      task: options.task,
      triggers: {
        schedule: [{ cron: options.schedule ?? NIGHTLY_UPGRADE_SCHEDULE }],
        workflowDispatch: {},
      },
      permissions: { contents: github.workflows.JobPermission.READ },
      postBuildSteps: [
        {
          name: 'Create Pull Request',
          uses: 'peter-evans/create-pull-request@v7',
          with: {
            'commit-message': 'chore: upgrade dependencies',
            'branch': 'auto/upgrade-dependencies',
            'title': 'chore: upgrade dependencies',
            'labels': 'auto-approve,auto-merge',
          },
        },
      ],
    });
  }
}
