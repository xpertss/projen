import { Component, github } from 'projen';
import { noteWorkflowPurpose } from './workflow-purpose';

// Pinned release + verified SHA-256 (linux-x64) - upgrade is a reviewed diff
// of this constant, never a floating version (AD-001).
const SONAR_SCANNER_VERSION = '8.1.0.6389';
const SONAR_SCANNER_SHA256 =
  'bb8f709f9cb73352f8d1260a3b3c506c0f41146754bc630762c126d795499d0b';

export interface SonarWorkflowOptions {
  /**
   * URL of the org's SonarCloud instance (e.g. `https://sonarcloud.io`).
   * Required, no default - a guessed server is worse than a loud failure.
   */
  readonly sonarHostUrl: string;

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

  /**
   * `sonar.inclusions` glob, only needed for files Sonar's default inclusions
   * skip - e.g. a composite action's `action.yml` and `*.sh` scripts, which
   * live outside the defaults. Omit it for default-recognized languages
   * (Java, TypeScript, ...).
   * @default - none (Sonar's default inclusions)
   */
  readonly sonarInclusions?: string;
}

/**
 * AD-001 Layer 2: SonarCloud via the Scanner CLI only (never
 * `SonarSource/sonarqube-scan-action` - third-party, and it carried a
 * security advisory). `sonar.projectKey` defaults to
 * `${sonarOrganization}_${name}` (the org + project key SonarCloud uses);
 * `sonar.inclusions` is emitted only when provided, since the defaults are
 * enough for default-recognized languages.
 */
export class SonarWorkflow extends Component {
  public readonly workflow: github.GithubWorkflow;

  constructor(scope: github.GitHubProject, options: SonarWorkflowOptions) {
    super(scope, 'SonarWorkflow');

    if (!options.sonarHostUrl) {
      throw new Error('SonarWorkflow requires sonarHostUrl');
    }

    const gh = scope.github;
    if (!gh) {
      throw new Error(
        'SonarWorkflow requires GitHub integration to be enabled',
      );
    }

    const sonarTokenSecret = options.sonarTokenSecret ?? 'SONAR_TOKEN';
    const pullRequestGate = options.sonarPullRequestGate ?? true;
    const sonarOrganization = options.sonarOrganization ?? 'xpertss';
    const projectKey = options.sonarProjectKey ?? `${sonarOrganization}_${scope.name}`;

    this.workflow = new github.GithubWorkflow(gh, 'sonar');
    noteWorkflowPurpose(this.workflow.file, 'Static-analysis scan on the org SonarCloud.');
    this.workflow.on({
      push: { branches: ['main'] },
      ...(pullRequestGate ? { pullRequest: {} } : {}),
    });
    this.workflow.addJob('sonar', {
      runsOn: ['ubuntu-latest'],
      permissions: { contents: github.workflows.JobPermission.READ },
      env: { SONAR_TOKEN: `\${{ secrets.${sonarTokenSecret} }}` },
      steps: [
        github.WorkflowSteps.checkout(),
        {
          name: 'Install sonar-scanner',
          run: `set -euo pipefail
curl -fsSL -o /tmp/sonar-scanner.zip "https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-${SONAR_SCANNER_VERSION}-linux-x64.zip"
echo "${SONAR_SCANNER_SHA256}  /tmp/sonar-scanner.zip" | sha256sum -c -
unzip -q /tmp/sonar-scanner.zip -d /tmp
echo "/tmp/sonar-scanner-${SONAR_SCANNER_VERSION}-linux-x64/bin" >> "$GITHUB_PATH"
`,
        },
        {
          name: 'Scan',
          run: [
            'sonar-scanner \\',
            `  -Dsonar.host.url=${options.sonarHostUrl} \\`,
            `  -Dsonar.organization=${sonarOrganization} \\`,
            `  -Dsonar.projectKey=${projectKey} \\`,
            '  -Dsonar.projectVersion="$(git describe --tags --always)" \\',
            ...(options.sonarInclusions
              ? [`  -Dsonar.inclusions=${options.sonarInclusions} \\`]
              : []),
            '  -Dsonar.qualitygate.wait=true',
          ].join('\n'),
        },
      ],
    });
  }
}
