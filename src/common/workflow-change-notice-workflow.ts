import { Component, github } from 'projen';
import { noteWorkflowPurpose } from './workflow-purpose';

/**
 * PR-triggered, tamper-proof notice that a PR touches GitHub Actions
 * workflow or action files.
 *
 * Runs on `pull_request_target` (NOT `pull_request`) so it always executes
 * the copy of this workflow committed on the base branch - a PR cannot edit
 * this file to disable or weaken the notice. It checks out and executes
 * nothing from the PR; it only lists the changed filenames via the GitHub
 * API and posts a non-blocking NOTE. Because `pull_request_target` runs with
 * the base repo's normal token even for fork-originated PRs, the comment
 * posts reliably with no degraded fallback.
 *
 * This check NEVER fails the build - it is purely informational (reviewer
 * attention). It is the tamper-proof backstop that bounds Check 1's
 * (`ProjenDriftCheckWorkflow`) residual exposure. See the F003 spec's
 * Security section.
 */
export interface WorkflowChangeNoticeWorkflowOptions {
  /**
   * Glob patterns (bash `[[ string == pattern ]]` semantics, where `*` also
   * matches `/`) that trigger the notice when a changed PR file matches any
   * of them.
   * @default [".github/workflows/**", ".github/actions/**"]
   */
  readonly watchPaths?: string[];

  /** @default "workflow-change-notice" */
  readonly workflowName?: string;
}

export class WorkflowChangeNoticeWorkflow extends Component {
  public readonly workflow: github.GithubWorkflow;

  constructor(
    scope: github.GitHubProject,
    options: WorkflowChangeNoticeWorkflowOptions = {},
  ) {
    super(scope, 'WorkflowChangeNoticeWorkflow');

    const gh = scope.github;
    if (!gh) {
      throw new Error(
        'WorkflowChangeNoticeWorkflow requires GitHub integration to be enabled',
      );
    }

    const watchPaths = options.watchPaths ?? [
      '.github/workflows/**',
      '.github/actions/**',
    ];

    this.workflow = new github.GithubWorkflow(
      gh,
      options.workflowName ?? 'workflow-change-notice',
    );
    noteWorkflowPurpose(
      this.workflow.file,
      'Ask PR authors to review when a GitHub Actions workflow or a shared internal action changes.',
    );
    this.workflow.on({ pullRequestTarget: {} });
    this.workflow.addJob('check', {
      runsOn: ['ubuntu-latest'],
      permissions: { pullRequests: github.workflows.JobPermission.WRITE },
      env: {
        GH_TOKEN: '${{ github.token }}',
        WATCH_PATHS: watchPaths.join(' '),
      },
      steps: [
        {
          name: 'Check for workflow/action changes',
          run: `set -uo pipefail
changed="$(gh api --paginate "repos/\${GITHUB_REPOSITORY}/pulls/\${{ github.event.number }}/files" --jq '.[].filename')"
if [ -z "$changed" ]; then exit 0; fi
matches=""
while IFS= read -r path; do
  for p in $WATCH_PATHS; do
    if [[ "$path" == $p ]]; then
      matches="$matches$path
"
      break
    fi
  done
done <<< "$changed"
if [ -n "$matches" ]; then
  {
    echo "⚠️ NOTE for reviewers: this PR modifies GitHub Actions workflow or action files. Please review these changes carefully - they can alter or bypass standard build, test, and deployment checks:"
    echo ""
    printf "%s" "$matches" | sed "s/^/  - /"
  } | gh pr comment "\${{ github.event.number }}" --body-file -
fi
`,
        },
      ],
    });
  }
}
