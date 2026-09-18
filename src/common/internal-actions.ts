import { github } from 'projen';

// Placeholder until the internal action repos are built and released (AD-002
// Phase 1, step 8) - a real 40-char SHA replaces this in each entry at that
// point. Landed with placeholders so the override mechanism is in place while
// the untrusted workflows it retargets are non-gating (AD-002 Phase 0).
const PLACEHOLDER_SHA = 'PLACEHOLDER_SHA';

// Name (without ref) -> SHA-pinned internal-action override. Per projen's
// GitHubActionsProvider.get() a name-keyed override redirects every ref
// variant at once, so a single entry covers both this package's literals
// (@v7/@v5) and projen's built-in workflows (@v8.1.1/SHA) for the same
// action. Only actions outside the trusted namespaces (actions/*, docker/*,
// xpertss/*) ever need an entry.
const ACTION_OVERRIDES: Record<string, string> = {
  'peter-evans/create-pull-request': `xpertss/create-pull-request@${PLACEHOLDER_SHA}`,
  'stefanzweifel/git-auto-commit-action': `xpertss/auto-commit@${PLACEHOLDER_SHA}`,
  'amannn/action-semantic-pull-request': `xpertss/semantic-pull-request@${PLACEHOLDER_SHA}`,
};

/**
 * Redirects every out-of-policy third-party action reference to the
 * first-party `xpertss/*` internal actions across the whole project, using
 * projen's `GitHubActionsProvider`. Call once per `GitHubProject`. Because
 * every generated `uses:` is resolved through this map at synth time -
 * including projen's built-in `upgrade-main` / `pull-request-lint` workflows
 * - this single call covers all current out-of-policy call sites.
 */
export function applyInternalActionOverrides(gh: github.GitHub): void {
  for (const [action, override] of Object.entries(ACTION_OVERRIDES)) {
    gh.actions.set(action, override);
  }
}
