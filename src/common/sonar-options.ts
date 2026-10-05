export interface SonarScanOptions {
  /**
   * URL of the org's SonarCloud instance (e.g. `https://sonarcloud.io`). When
   * set, a `sonar.yml` SonarScanner workflow is generated; when omitted, no
   * Sonar workflow is produced. Must be reachable from github.com-hosted
   * (public) runners (AD-001).
   */
  readonly sonarHostUrl?: string;

  /**
   * SonarCloud organization key (`sonar.organization`). Mandatory for the
   * Scanner CLI on SonarCloud - it is not derived from the token, so a scan
   * without it always fails.
   * @default "xpertss"
   */
  readonly sonarOrganization?: string;

  /** @default "SONAR_TOKEN" */
  readonly sonarTokenSecret?: string;

  /**
   * Whether `sonar.yml` also runs on `pull_request` as a pass/fail gate.
   * @default true
   */
  readonly sonarPullRequestGate?: boolean;

  /**
   * `sonar.projectKey`.
   * @default - `${sonarOrganization}_${name}` (the org + project key SonarCloud
   * uses, e.g. `xpertss_create-pull-request`)
   */
  readonly sonarProjectKey?: string;
}
