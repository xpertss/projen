import { Component, Task, github } from 'projen';
import { NIGHTLY_UPGRADE_SCHEDULE } from '../../common/constants';
import { noteWorkflowPurpose } from '../../common/workflow-purpose';

export interface MavenUpgradeReportOptions {
  /** The task that prints the available updates. */
  readonly task: Task;

  /** Steps that install Node, the projen toolchain, and the JDK. */
  readonly setupSteps: github.workflows.JobStep[];
}

/**
 * Nightly, report-only dependency check for the Maven types: runs the
 * `upgrade` task (`versions:display-dependency-updates` and
 * `display-plugin-updates`) and writes the available updates into the job
 * summary.
 *
 * It deliberately changes nothing. Every version in a generated pom comes
 * from `.projenrc.ts` (or this package's defaults), so rewriting `pom.xml`
 * would just be reverted by the next `npx projen` and flagged by the drift
 * check. Apply an update by changing the version in `.projenrc.ts`.
 */
export class MavenUpgradeReport extends Component {
  public readonly workflow: github.GithubWorkflow;

  constructor(scope: github.GitHubProject, options: MavenUpgradeReportOptions) {
    super(scope, 'MavenUpgradeReport');

    const gh = scope.github;
    if (!gh) {
      throw new Error('MavenUpgradeReport requires GitHub integration to be enabled');
    }

    this.workflow = new github.GithubWorkflow(gh, 'upgrade');
    noteWorkflowPurpose(
      this.workflow.file,
      'Report available Maven dependency and plugin updates nightly (job summary only; changes nothing).',
    );
    this.workflow.on({
      schedule: [{ cron: NIGHTLY_UPGRADE_SCHEDULE }],
      workflowDispatch: {},
    });
    this.workflow.addJob('upgrade', {
      runsOn: ['ubuntu-latest'],
      permissions: { contents: github.workflows.JobPermission.READ },
      steps: [
        { name: 'Checkout', uses: 'actions/checkout@v7' },
        ...options.setupSteps,
        {
          name: 'Report available updates',
          run: [
            'set -o pipefail',
            `npx projen ${options.task.name} | tee upgrade-report.txt`,
            '{',
            '  echo "## Available Maven updates"',
            '  echo ""',
            '  echo "Apply an update by changing its version in .projenrc.ts and running npx projen."',
            '  echo ""',
            '  echo \'```\'',
            '  grep -E -- "->" upgrade-report.txt | sed -E "s/^\\[INFO\\] *//" | sort -u || echo "Everything is up to date."',
            '  echo \'```\'',
            '} >> "$GITHUB_STEP_SUMMARY"',
          ].join('\n'),
        },
      ],
    });
  }
}
