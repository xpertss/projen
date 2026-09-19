import { Task, github, java } from 'projen';
import { CommonJavaOptions } from './options';
import { DEFAULT_GHE_TOKEN_SECRET } from '../common/constants';
import { applyInternalActionOverrides } from '../common/internal-actions';
import { ProjenDriftCheckWorkflow } from '../common/projen-drift-check-workflow';
import { attachTypeScriptProjenrc } from '../common/projenrc-ts';
import { UpgradeWorkflow } from '../common/upgrade-workflow';
import { WorkflowChangeNoticeWorkflow } from '../common/workflow-change-notice-workflow';
import { noteWorkflowPurpose } from '../common/workflow-purpose';

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
      // Spread first, overrides after: forwarding the caller's options is
      // what lets `projen new --from @xpertss/projen-types java_library`
      // work - projen smuggles its bootstrap marker (`__new__`) through the
      // options object, and it is that marker which makes the
      // `ProjenrcFile` component write the initial `.projenrc.ts`. Drop it
      // and `projen new` scaffolds a repo with no projenrc at all.
      ...options,
      name: options.name,
      groupId: options.groupId,
      artifactId: options.artifactId,
      version: options.version ?? '0.1.0',
      // PR titles are not gated: `feat:`/`fix:` matter only because they drive
      // the release workflow (via `releasableCommits`), not PR checks. The
      // conventional-commit PR-title lint is added by the `GitHub` component
      // unless `githubOptions.pullRequestLint` is `false` (it defaults true).
      githubOptions: { pullRequestLint: false },
      // Consumers author their config as a Node-side `.projenrc.ts` (this
      // package only publishes an npm jsii target, no java target), not a
      // hand-written `src/test/java/projenrc.java` - so java.JavaProject's
      // own Java-native projenrc (which wires the default task to `mvn
      // compiler:testCompile && mvn exec:java ...`) would be wrong here.
      // Disable it and attach the TypeScript one instead.
      projenrcJava: false,
      projenCredentials: github.GithubCredentials.fromPersonalAccessToken({
        secret: options.gheTokenSecret ?? DEFAULT_GHE_TOKEN_SECRET,
      }),
    });

    // `.projenrc.ts` + `npx projen`, same as every other type here. The
    // Maven repo needs no TypeScript toolchain of its own - the runner is
    // fetched (pinned) by npx at synth time.
    attachTypeScriptProjenrc(this);

    const gh = this.github;
    if (!gh) {
      throw new Error('JavaMavenProject requires GitHub integration');
    }

    applyInternalActionOverrides(gh);

    new ProjenDriftCheckWorkflow(this, {
      gheTokenSecret: options.gheTokenSecret ?? DEFAULT_GHE_TOKEN_SECRET,
    });
    new WorkflowChangeNoticeWorkflow(this);

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
    noteWorkflowPurpose(
      this.buildVerifyWorkflow.file,
      'Build and test the Maven project on pull requests, with an optional SonarQube scan.',
    );

    this.upgradeTask = this.addTask('upgrade', {
      exec: 'mvn -B versions:use-latest-releases versions:update-properties',
    });
    new UpgradeWorkflow(this, { task: this.upgradeTask });
  }
}
