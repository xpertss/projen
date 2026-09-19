import { Component, github } from 'projen';
import type { java } from 'projen';
import { noteWorkflowPurpose } from '../../common/workflow-purpose';

export interface GitHubPackagesPublishOptions {
  /** @default derived from the repository URL */
  readonly ghPackagesRegistry?: string;
}

/** On-demand publish to GitHub Packages. */
export class GitHubPackagesPublish extends Component {
  constructor(
    project: java.JavaProject,
    options: GitHubPackagesPublishOptions = {},
  ) {
    super(project, 'GitHubPackagesPublish');

    const gh = project.github;
    if (!gh) {
      throw new Error('GitHubPackagesPublish requires GitHub integration');
    }

    const registry =
      options.ghPackagesRegistry ??
      'https://maven.pkg.github.com/${{ github.repository }}';

    const publishTask = project.addTask('publish:ghpackages', {
      exec: `mvn -B deploy -DaltDeploymentRepository=github::${registry}`,
    });

    const publishWorkflow = new github.TaskWorkflow(gh, {
      name: 'publish-ghpackages',
      jobId: 'publish',
      task: publishTask,
      triggers: { workflowDispatch: {} },
      permissions: {
        contents: github.workflows.JobPermission.READ,
        packages: github.workflows.JobPermission.WRITE,
      },
      env: { GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}' },
    });
    noteWorkflowPurpose(
      publishWorkflow.file,
      'Publish the artifact to GitHub Packages on demand.',
    );
  }
}
