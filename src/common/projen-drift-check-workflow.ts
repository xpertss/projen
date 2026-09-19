import { Component, github } from 'projen';
import { noteWorkflowPurpose } from './workflow-purpose';

/**
 * PR-triggered check that rejects direct edits to projen-managed files.
 *
 * Re-runs the project's synth command on the PR head and fails if the
 * regenerated output no longer matches what's committed - i.e. someone
 * hand-edited a generated file (package.json / pom.xml /
 * .github/workflows/*.yml / ...) instead of going through `.projenrc.ts`.
 *
 * Runs on `pull_request` so it genuinely executes the PR's own code (the
 * only way to detect drift) - and therefore, by necessity, a PR author can
 * disable it within their own PR. That residual exposure is bounded by
 * `WorkflowChangeNoticeWorkflow` (Check 2), which is tamper-proof and flags
 * any touch to `.github/workflows/**`. See the F003 spec's Security section.
 */
export interface ProjenDriftCheckWorkflowOptions {
  /**
   * The command that regenerates the project from `.projenrc.ts`.
   * @default "npx projen"
   */
  readonly projenCommand?: string;

  /**
   * GitHub secret holding a token with permission to comment on PRs, used
   * for the best-effort drift report comment. The check still fails (and
   * emits `::error::` annotations) without it, so fork PRs - which get no
   * secrets - are only missing the extra comment.
   * @default "PROJEN_GITHUB_TOKEN"
   */
  readonly gheTokenSecret?: string;

  /** @default "projen-drift-check" */
  readonly workflowName?: string;
}

export class ProjenDriftCheckWorkflow extends Component {
  public readonly workflow: github.GithubWorkflow;

  constructor(
    scope: github.GitHubProject,
    options: ProjenDriftCheckWorkflowOptions = {},
  ) {
    super(scope, 'ProjenDriftCheckWorkflow');

    const gh = scope.github;
    if (!gh) {
      throw new Error(
        'ProjenDriftCheckWorkflow requires GitHub integration to be enabled',
      );
    }

    const projenCommand = options.projenCommand ?? 'npx projen';
    const gheTokenSecret = options.gheTokenSecret ?? 'PROJEN_GITHUB_TOKEN';

    this.workflow = new github.GithubWorkflow(
      gh,
      options.workflowName ?? 'projen-drift-check',
    );
    noteWorkflowPurpose(
      this.workflow.file,
      'Fail a PR when a projen-generated file has been edited by hand instead of through the projenrc.',
    );
    this.workflow.on({ pullRequest: {} });
    this.workflow.addJob('check', {
      runsOn: ['ubuntu-latest'],
      permissions: { contents: github.workflows.JobPermission.READ },
      env: { GH_TOKEN: `\${{ secrets.${gheTokenSecret} }}` },
      steps: [
        {
          name: 'Checkout',
          uses: 'actions/checkout@v7',
          with: {
            ref: '${{ github.event.pull_request.head.ref }}',
            repository: '${{ github.event.pull_request.head.repo.full_name }}',
          },
        },
        {
          name: 'Setup Node',
          uses: 'actions/setup-node@v7',
          // Pinned, not `lts/*` - a floating version can resolve a
          // different npm than whatever generated the committed
          // package-lock.json, and `npm ci` then fails on optional-
          // dependency drift that isn't a real dependency bug.
          with: { 'node-version': '24' },
        },
        {
          name: 'Install dependencies',
          run: 'npm ci',
        },
        {
          name: 'Check for projen drift',
          run: `set -euo pipefail
${projenCommand}
drifted="$(git diff --name-only)"
if [ -n "$drifted" ]; then
  while IFS= read -r f; do
    echo "::error file=$f::projen-managed file was edited directly; make the change in .projenrc.ts and re-run npx projen"
  done <<< "$drifted"
  if [ -n "$GH_TOKEN" ] && [ -n "$GITHUB_EVENT_PATH" ]; then
    pr_number="$(jq -r ".pull_request.number // empty" "$GITHUB_EVENT_PATH" 2>/dev/null || true)"
    if [ -n "$pr_number" ]; then
      {
        echo "❌ projen drift detected"
        echo ""
        echo "These files are managed by projen and were edited directly. Direct edits are silently overwritten by the next npx projen run, so they cannot be merged as-is:"
        echo ""
        while IFS= read -r f; do echo "  - $f"; done <<< "$drifted"
        echo ""
        echo "To fix: revert the direct edits above, make the equivalent change in .projenrc.ts, then run npx projen and commit the regenerated output."
      } | gh pr comment "$pr_number" --body-file - || echo "::warning::could not post PR comment (fork PR or missing token)"
    fi
  fi
  exit 1
fi
`,
        },
      ],
    });
  }
}
