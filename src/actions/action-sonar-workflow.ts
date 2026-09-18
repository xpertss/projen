import { Component, github } from 'projen';

// Pinned release + verified SHA-256 (linux-x64) - upgrade is a reviewed diff
// of this constant, never a floating version (AD-001).
const SONAR_SCANNER_VERSION = '8.1.0.6389';
const SONAR_SCANNER_SHA256 =
  'bb8f709f9cb73352f8d1260a3b3c506c0f41146754bc630762c126d795499d0b';

export interface ActionSonarWorkflowOptions {
  /**
   * URL of the org's self-hosted SonarQube instance. Required, no default -
   * a guessed server is worse than a loud failure.
   */
  readonly sonarHostUrl: string;

  /** @default "SONAR_TOKEN" */
  readonly sonarTokenSecret?: string;

  /**
   * Whether `sonar.yml` also runs on `pull_request` as a pass/fail gate.
   * @default true
   */
  readonly sonarPullRequestGate?: boolean;
}

/**
 * AD-001 Layer 2: self-hosted SonarQube Community Edition via the Scanner
 * CLI only (never `SonarSource/sonarqube-scan-action` - third-party, and it
 * carried a security advisory). `sonar.inclusions` is set explicitly since
 * default inclusions may skip `action.yml` outside `.github/`.
 */
export class ActionSonarWorkflow extends Component {
  public readonly workflow: github.GithubWorkflow;

  constructor(
    scope: github.GitHubProject,
    options: ActionSonarWorkflowOptions,
  ) {
    super(scope, 'ActionSonarWorkflow');

    if (!options.sonarHostUrl) {
      throw new Error('ActionSonarWorkflow requires sonarHostUrl');
    }

    const gh = scope.github;
    if (!gh) {
      throw new Error(
        'ActionSonarWorkflow requires GitHub integration to be enabled',
      );
    }

    const sonarTokenSecret = options.sonarTokenSecret ?? 'SONAR_TOKEN';
    const pullRequestGate = options.sonarPullRequestGate ?? true;

    this.workflow = new github.GithubWorkflow(gh, 'sonar');
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
          run: `sonar-scanner \\
  -Dsonar.host.url=${options.sonarHostUrl} \\
  -Dsonar.projectKey=${scope.name} \\
  -Dsonar.projectVersion="$(git describe --tags --always)" \\
  -Dsonar.inclusions=.github/workflows/**,action.yml,**/*.sh \\
  -Dsonar.qualitygate.wait=true`,
        },
      ],
    });
  }
}
