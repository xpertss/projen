import { Component, github } from 'projen';
import type { java } from 'projen';
import { noteWorkflowPurpose } from '../../common/workflow-purpose';

/** Generates a code index and publishes it to `.cai/` on checkin. */
export class CodeIndexWorkflow extends Component {
  constructor(project: java.JavaProject) {
    super(project, 'CodeIndexWorkflow');

    const gh = project.github;
    if (!gh) {
      throw new Error('CodeIndexWorkflow requires GitHub integration');
    }

    const indexTask = project.addTask('codeindex', {
      exec: "mkdir -p .cai && find src -name '*.java' > .cai/index.txt",
    });

    const codeIndexWorkflow = new github.TaskWorkflow(gh, {
      name: 'codeindex',
      jobId: 'codeindex',
      task: indexTask,
      triggers: { push: { branches: ['main'] } },
      permissions: { contents: github.workflows.JobPermission.WRITE },
      postBuildSteps: [
        {
          name: 'Commit code index',
          uses: 'stefanzweifel/git-auto-commit-action@v5',
          with: { commit_message: 'chore: update code index' },
        },
      ],
    });
    noteWorkflowPurpose(
      codeIndexWorkflow.file,
      'Regenerate and commit the code index on push to main.',
    );
  }
}
