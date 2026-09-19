import { github } from 'projen';

// Placeholder ref for internal action repos that are not yet built and
// released (AD-002 Phase 1, step 8). Entries resolve independently - a real
// ref (a version tag) replaces the placeholder in each entry once that repo
// is released. Landed with placeholders so the override mechanism is in place
// while the untrusted workflows it retargets are non-gating (AD-002 Phase 0).
const PLACEHOLDER_SHA = 'PLACEHOLDER_SHA';

// Name (without ref) -> ref override. Per projen's
// GitHubActionsProvider.get() a name-keyed override redirects every ref
// variant at once, so a single entry covers both this package's literals and
// projen's built-in workflows (SHA refs) for the same action.
const ACTION_OVERRIDES: Record<string, string> = {
  'peter-evans/create-pull-request': `xpertss/create-pull-request@${PLACEHOLDER_SHA}`,
  'stefanzweifel/git-auto-commit-action': `xpertss/auto-commit@${PLACEHOLDER_SHA}`,
  'amannn/action-semantic-pull-request': 'xpertss/semantic-pull-request@v0.1.0',
};

// Name (without ref) -> floating major ref, for the `actions/*` actions that
// projen's built-in workflows inject commit-SHA-pinned (its `ActionRefs`
// constants). Org convention: trusted `actions/*` refs use the current major
// line as a floating major ref - upgrades within a major happen
// automatically, and moving to a newer major line is a reviewed change (here,
// in this constant, and in this package's own literals). The name key also
// redirects this package's own literals for the same action, so every
// workflow in the org stays on the same major line.
const BUILTIN_ACTION_REPIINS: Record<string, string> = {
  'actions/checkout': 'actions/checkout@v7',
  'actions/upload-artifact': 'actions/upload-artifact@v7',
  'actions/download-artifact': 'actions/download-artifact@v8',
};

/**
 * Redirects every out-of-policy third-party action reference to the
 * first-party `xpertss/*` internal actions across the whole project, using
 * projen's `GitHubActionsProvider`, and re-pins the `actions/*` refs that
 * projen's built-in workflows inject commit-SHA-pinned to the floating major
 * ref of the action's current major line (see BUILTIN_ACTION_REPIINS). Call
 * once per `GitHubProject`. Because every generated `uses:` is resolved
 * through this map at synth time - including projen's built-in `upgrade-main`
 * / `pull-request-lint` / `release` workflows - this single call covers all
 * current call sites.
 */
export function applyInternalActionOverrides(gh: github.GitHub): void {
  for (const [action, override] of Object.entries(ACTION_OVERRIDES)) {
    gh.actions.set(action, override);
  }
  for (const [action, ref] of Object.entries(BUILTIN_ACTION_REPIINS)) {
    gh.actions.set(action, ref);
  }
}
