/**
 * Default GitHub secret name for core projen's own automation token
 * (self-mutation push, dependency-upgrade PR), unless a project overrides it
 * via `gheTokenSecret`. The drift-check's PR comment does not use a secret.
 */
export const DEFAULT_GHE_TOKEN_SECRET = 'PROJEN_GITHUB_TOKEN';

/** Cron schedule used by nightly dependency-upgrade workflows (03:00 UTC). */
export const NIGHTLY_UPGRADE_SCHEDULE = '0 3 * * *';
