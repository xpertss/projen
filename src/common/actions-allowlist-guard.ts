import { Component, github } from 'projen';
import { DEFAULT_GHE_TOKEN_SECRET } from './constants';
import { noteWorkflowPurpose } from './workflow-purpose';

/**
 * Blocking, tamper-proof PR check that stops a disallowed GitHub Action
 * reference from ever (re)appearing in a repo's workflow or composite-action
 * files.
 *
 * Runs on `pull_request_target` so it always executes the copy of this
 * workflow committed on the base branch - a PR cannot edit this file to
 * disable or weaken the check. It checks out and executes nothing from the
 * PR; it only reads the PR head's file content via the GitHub API. Because
 * `pull_request_target` runs with the base repo's token even for
 * fork-originated PRs, the failure comment posts reliably.
 *
  * It performs a flat, unconditional scan of the PR's head ref (no
  * base-vs-head comparison): fetch the content of every GitHub workflow and
  * composite-action file, extract every `uses:` value, and fail if any does
  * not start with one of the three trusted namespaces from AD-001
  * (`actions/`, `docker/`, `xpertss/`). The single
 * exemption is a local same-repo reference (`uses: .` or
 * `uses: ./.github/actions/<name>`) - the repo's own hand-committed action,
 * to which the org policy's "allow select actions" setting does not apply.
 */
export interface ActionsAllowlistGuardOptions {
  /**
   * GitHub secret holding a token with permission to comment on PRs, used
   * for the failure comment. The check still fails without it, so fork PRs -
   * which get no secrets - are only missing the extra comment.
   * @default "PROJEN_GITHUB_TOKEN"
   */
  readonly gheTokenSecret?: string;

  /** @default "actions-allowlist-guard" */
  readonly workflowName?: string;
}

export class ActionsAllowlistGuard extends Component {
  public readonly workflow: github.GithubWorkflow;

  constructor(
    scope: github.GitHubProject,
    options: ActionsAllowlistGuardOptions = {},
  ) {
    super(scope, 'ActionsAllowlistGuard');

    const gh = scope.github;
    if (!gh) {
      throw new Error(
        'ActionsAllowlistGuard requires GitHub integration to be enabled',
      );
    }

    const gheTokenSecret =
      options.gheTokenSecret ?? DEFAULT_GHE_TOKEN_SECRET;

    this.workflow = new github.GithubWorkflow(
      gh,
      options.workflowName ?? 'actions-allowlist-guard',
    );
    noteWorkflowPurpose(
      this.workflow.file,
      'Block PRs that reference a GitHub Action outside the org allow-list.',
    );
    this.workflow.on({ pullRequestTarget: {} });
    this.workflow.addJob('check', {
      runsOn: ['ubuntu-latest'],
      permissions: {
        contents: github.workflows.JobPermission.READ,
        pullRequests: github.workflows.JobPermission.WRITE,
      },
      env: { GH_TOKEN: `\${{ secrets.${gheTokenSecret} }}` },
      steps: [
        {
          name: 'Enforce action allow-list',
          run: `set -uo pipefail
head_sha="\${{ github.event.pull_request.head.sha }}"
pr_number="\${{ github.event.number }}"
repo="\${GITHUB_REPOSITORY}"
# All files at the PR head (recursive tree), narrowed to workflow and
# composite-action files.
files="$(gh api "repos/$repo/git/trees/$head_sha?recursive=1" --jq '.tree[] | select(.type=="blob") | .path' | grep -E '^\\.github/(workflows/[^/]+\\.(yml|yaml)|actions/[^/]+/action\\.(yml|yaml))$' || true)"
violations=()
while IFS= read -r path; do
  [ -z "$path" ] && continue
  content="$(gh api "repos/$repo/contents/$path?ref=$head_sha" --jq -r '.content' 2>/dev/null | base64 -d 2>/dev/null || true)"
  lineno=0
  while IFS= read -r line; do
    lineno=$((lineno + 1))
    value="$(printf '%s\\n' "$line" | sed -n 's/^[[:space:]]*uses:[[:space:]]*//p' | tr -d '\\\"')"
    [ -z "$value" ] && continue
    case "$value" in
      actions/*|docker/*|xpertss/*|.|./*) ;;
      *) violations+=("  - $path:$lineno — uses: $value") ;;
    esac
  done <<< "$content"
done <<< "$files"
if [ "\${#violations[@]}" -gt 0 ]; then
  {
    echo "❌ Disallowed GitHub Action reference"
    echo ""
    echo "This PR references an action outside the allow-list:"
    echo ""
    printf '%s\\n' "\${violations[@]}"
    echo ""
    echo "Org policy trusts only actions/*, docker/*, and xpertss/*. Use an equivalent internal action, or ask its maintainers to add one."
  } | gh pr comment "$pr_number" --body-file - || echo "::warning::could not post PR comment (fork PR or missing token)"
  exit 1
fi
`,
        },
      ],
    });
  }
}
