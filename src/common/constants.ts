/**
 * Default GitHub secret name used for projen's self-mutation/automation token,
 * unless a project overrides it via `gheTokenSecret`.
 */
export const DEFAULT_GHE_TOKEN_SECRET = 'PROJEN_GITHUB_TOKEN';

/** Cron schedule used by nightly dependency-upgrade workflows (03:00 UTC). */
export const NIGHTLY_UPGRADE_SCHEDULE = '0 3 * * *';
