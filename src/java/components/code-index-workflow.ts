import { Component, github } from 'projen';
import { noteWorkflowPurpose } from '../../common/workflow-purpose';
import type { JavaMavenProject } from '../java-maven-base';

/** Generates a code index and publishes it to `.cai/` on checkin. */
export class CodeIndexWorkflow extends Component {
  constructor(project: JavaMavenProject) {
    super(project, 'CodeIndexWorkflow');

    const gh = project.github;
    if (!gh) {
      throw new Error('CodeIndexWorkflow requires GitHub integration');
    }

    const indexTask = project.addTask('codeindex', {
      // From the repo root, not `src/`: in a multi-module repo the sources
      // live under each module directory.
      exec: "mkdir -p .cai && find . -path ./node_modules -prune -o -name target -prune -o -name '*.java' -print | sort > .cai/index.txt",
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
