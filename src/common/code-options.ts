/** Options shared by project types that own source code. */
export interface CommonCodeOptions {
  /**
   * Generate the `codeindex` task and the `codeindex.yml` workflow, which on
   * push to `main` regenerates the code index under `.xss/` when the push
   * changed source files but not the index, and commits it straight to `main`
   * as `chore: update code index`. The commit is pushed with the workflow's
   * `GITHUB_TOKEN`, so it starts no further workflows (no build, Sonar scan or
   * release); the workflow's bot must be allowed to push to `main`.
   *
   * @default true
   */
  readonly publishCodeIndex?: boolean;
}
