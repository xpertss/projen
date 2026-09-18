import { Task, github, java } from 'projen';
import { CommonJavaOptions } from './options';
import { ActionsAllowlistGuard } from '../common/actions-allowlist-guard';
import { DEFAULT_GHE_TOKEN_SECRET } from '../common/constants';
import { applyInternalActionOverrides } from '../common/internal-actions';
import { ProjenDriftCheckWorkflow } from '../common/projen-drift-check-workflow';
import { UpgradeWorkflow } from '../common/upgrade-workflow';
import { WorkflowChangeNoticeWorkflow } from '../common/workflow-change-notice-workflow';

export interface JavaMavenProjectOptions extends CommonJavaOptions {}

/**
 * Shared Maven build skeleton for all three Java project types: standard
 * `pom.xml`/directory layout (via `java.JavaProject`), a PR-triggered
 * build+test(+SonarQube) workflow that hard-fails on projen drift, and a
 * nightly dependency-upgrade workflow.
 */
export class JavaMavenProject extends java.JavaProject {
  public readonly upgradeTask: Task;
  public readonly buildVerifyWorkflow: github.TaskWorkflow;

  constructor(options: JavaMavenProjectOptions) {
    super({
      name: options.name,
      groupId: options.groupId,
      artifactId: options.artifactId,
      version: options.version ?? '0.1.0',
      projenCredentials: github.GithubCredentials.fromPersonalAccessToken({
        secret: options.gheTokenSecret ?? DEFAULT_GHE_TOKEN_SECRET,
      }),
    });

    const gh = this.github;
    if (!gh) {
      throw new Error('JavaMavenProject requires GitHub integration');
    }

    applyInternalActionOverrides(gh);

    new ProjenDriftCheckWorkflow(this, {
      gheTokenSecret: options.gheTokenSecret ?? DEFAULT_GHE_TOKEN_SECRET,
    });
    new WorkflowChangeNoticeWorkflow(this);
    new ActionsAllowlistGuard(this);

    const postBuildSteps: github.workflows.JobStep[] = [];
    if (options.sonarProjectKey) {
      postBuildSteps.push({
        name: 'SonarQube scan',
        run: `mvn -B sonar:sonar -Dsonar.projectKey=${options.sonarProjectKey}`,
        env: { SONAR_TOKEN: '${{ secrets.SONAR_TOKEN }}' },
      });
    }

    this.buildVerifyWorkflow = new github.TaskWorkflow(gh, {
      name: 'build',
      jobId: 'build',
      task: this.buildTask,
      triggers: { pullRequest: {}, workflowDispatch: {} },
      permissions: { contents: github.workflows.JobPermission.READ },
      postBuildSteps,
    });

    this.upgradeTask = this.addTask('upgrade', {
      exec: 'mvn -B versions:use-latest-releases versions:update-properties',
    });
    new UpgradeWorkflow(this, { task: this.upgradeTask });
  }
}
