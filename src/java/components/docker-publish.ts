import { Component, github } from 'projen';
import type { java } from 'projen';
import { noteWorkflowPurpose } from '../../common/workflow-purpose';

export interface DockerPublishOptions {
  /** @default "docker.io" */
  readonly dockerRegistry?: string;
}

/** On-demand build+push of a Docker image, defaulting to Docker Hub. */
export class DockerPublish extends Component {
  constructor(project: java.JavaProject, options: DockerPublishOptions = {}) {
    super(project, 'DockerPublish');

    const gh = project.github;
    if (!gh) {
      throw new Error('DockerPublish requires GitHub integration');
    }

    const registry = options.dockerRegistry ?? 'docker.io';
    const publishTask = project.addTask('publish:docker', {
      exec: `mvn -B package && docker build -t ${registry}/\${IMAGE_NAME}:\${IMAGE_TAG} .`,
    });

    const publishWorkflow = new github.TaskWorkflow(gh, {
      name: 'publish-docker',
      jobId: 'publish',
      task: publishTask,
      triggers: { workflowDispatch: {} },
      permissions: { contents: github.workflows.JobPermission.READ },
      preBuildSteps: [
        {
          name: 'Docker login',
          uses: 'docker/login-action@v3',
          with: {
            registry,
            username: '${{ secrets.DOCKER_USERNAME }}',
            password: '${{ secrets.DOCKER_PASSWORD }}',
          },
        },
      ],
      env: { IMAGE_NAME: project.name, IMAGE_TAG: '${{ github.sha }}' },
    });
    noteWorkflowPurpose(
      publishWorkflow.file,
      'Build and push the container image on demand.',
    );
  }
}
