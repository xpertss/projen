/**
 * The branch names a dogfood scenario pushes its throwaway PR from: each
 * step's literal `branch` input. Expression values (`${{ ... }}`) cannot be
 * compared statically, so they are excluded.
 */
export function dogfoodBranches(
  scenario: ReadonlyArray<{ readonly inputs?: Record<string, string> }> = [],
): string[] {
  return [
    ...new Set(
      scenario.flatMap((s) => {
        const branch = s.inputs?.branch;
        return branch && !branch.includes('${{') ? [branch] : [];
      }),
    ),
  ];
}

/**
 * Job-level `if` that skips a PR-triggered workflow for the dogfood
 * scenario's own throwaway PR, or `undefined` when there are no branches to
 * guard (a repo with no dogfood scenario gets unchanged output).
 *
 * That PR is opened, force-pushed again by the re-run path, and torn down
 * (PR closed, branch deleted) within about a minute, and it carries only a
 * fixture line - so the checks have nothing to verify, and any that check
 * out the branch race its deletion. Guarding every PR workflow, not just one,
 * keeps the failure from moving to whichever check loses the race next.
 *
 * `github.head_ref` is only populated on pull_request / pull_request_target
 * events, so push, dispatch and cron runs (head_ref empty) are unaffected.
 * The head-repo clause keeps a fork PR that merely *names* its branch like
 * the dogfood branch from skipping the checks.
 */
export function skipDogfoodPrCondition(branches: string[]): string | undefined {
  if (branches.length === 0) {
    return undefined;
  }
  const notDogfoodBranch =
    branches.length === 1
      ? `github.head_ref != '${branches[0]}'`
      : `!contains(fromJSON('${JSON.stringify(branches)}'), github.head_ref)`;
  return `${notDogfoodBranch} || github.event.pull_request.head.repo.full_name != github.repository`;
}
