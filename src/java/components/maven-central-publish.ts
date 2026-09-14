import { Component, Task, github } from 'projen';
import type { java } from 'projen';

export interface MavenCentralPublishOptions {
  /** @default false */
  readonly mavenCentralOidc?: boolean;
}

/**
 * On-demand publish workflow to Maven Central, with GPG signing (secrets)
 * or OIDC trusted publishing.
 */
export class MavenCentralPublish extends Component {
  constructor(project: java.JavaProject, options: MavenCentralPublishOptions = {}) {
    super(project, 'MavenCentralPublish');

    const gh = project.github;
    if (!gh) {
      throw new Error('MavenCentralPublish requires GitHub integration');
    }

    const publishTask: Task = project.addTask('publish:maven-central', {
      exec: 'mvn -B deploy -P release',
    });

    new github.TaskWorkflow(gh, {
      name: 'publish-maven-central',
      jobId: 'publish',
      task: publishTask,
      triggers: { workflowDispatch: {} },
      permissions: {
        contents: github.workflows.JobPermission.READ,
        idToken: options.mavenCentralOidc
          ? github.workflows.JobPermission.WRITE
          : github.workflows.JobPermission.NONE,
      },
      env: options.mavenCentralOidc
        ? {}
        : {
          MAVEN_GPG_PRIVATE_KEY: '${{ secrets.MAVEN_GPG_PRIVATE_KEY }}',
          MAVEN_GPG_PASSPHRASE: '${{ secrets.MAVEN_GPG_PASSPHRASE }}',
          MAVEN_CENTRAL_USERNAME: '${{ secrets.MAVEN_CENTRAL_USERNAME }}',
          MAVEN_CENTRAL_PASSWORD: '${{ secrets.MAVEN_CENTRAL_PASSWORD }}',
        },
    });
  }
}
