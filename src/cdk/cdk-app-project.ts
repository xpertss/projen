import { github } from 'projen';
import { AppRuntimeScaffold } from './app-runtime-scaffold';
import { CdkInfraProject } from './cdk-infra-project';
import { DatabaseComponent } from './database-component';
import { CdkAppProjectOptions } from './options';
import { noteWorkflowPurpose } from '../common/workflow-purpose';

/**
 * Full TypeScript service application running behind API Gateway (or
 * similar), with the infra to support it - `CdkInfraProject` plus
 * application source, a database, and an app-level build/test workflow.
 */
export class CdkAppProject extends CdkInfraProject {
  constructor(options: CdkAppProjectOptions) {
    super(options);

    new AppRuntimeScaffold(this, options.appEntryPoint ?? 'src/app.ts');
    new DatabaseComponent(this, options.database);

    const gh = this.github;
    if (gh) {
      const appBuildWorkflow = new github.TaskWorkflow(gh, {
        name: 'app-build',
        jobId: 'app-build',
        task: this.testTask,
        triggers: { pullRequest: {}, workflowDispatch: {} },
        permissions: { contents: github.workflows.JobPermission.READ },
      });
      noteWorkflowPurpose(
        appBuildWorkflow.file,
        'Run the application unit tests on pull requests.',
      );
    }
  }
}
