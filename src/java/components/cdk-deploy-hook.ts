import { Component } from 'projen';
import type { java } from 'projen';
import { EnvironmentOptions } from '../../common/environment-options';
import { ManualDeployWorkflow } from '../../common/manual-deploy-workflow';
import { CdkDeployHookOptions } from '../options';

/**
 * Manual-dispatch workflow that invokes a downstream CDK deploy in a
 * companion `CdkInfraProject`/`CdkAppProject` repo, using the same
 * `ManualDeployWorkflow` contract those project types use for their own
 * deploys - see the CDK spec's open question about sharing this contract.
 *
 * With no `targetRepo` the workflow is still generated, but every job's
 * only step fails with instructions. Synthesizing is not the place to
 * enforce this: it would make the project type unscaffoldable by
 * `projen new` (which cannot supply the value), and it is a dispatch-only
 * workflow - nobody hits the failure until they actually try to deploy,
 * which is exactly when "this repo has no deploy target" needs saying.
 */
export class CdkDeployHook extends Component {
  constructor(
    project: java.JavaProject,
    environments: (string | EnvironmentOptions)[],
    options: CdkDeployHookOptions = {},
  ) {
    super(project, 'CdkDeployHook');

    const targetRepo = options.targetRepo;

    if (!targetRepo) {
      new ManualDeployWorkflow(project, {
        workflowName: 'deploy-cdk',
        environments,
        deploySteps: () => [
          {
            name: 'No CDK deploy target configured',
            run: [
              'echo "::error::cdkDeployTargetRepo is not set, so there is no companion CDK repo to dispatch a deploy to."',
              'echo "Set cdkDeployTargetRepo in .projenrc.ts (or turn the workflow off with cdkDeployHook: false), then run npx projen."',
              'exit 1',
            ].join('\n'),
          },
        ],
      });
      return;
    }

    new ManualDeployWorkflow(project, {
      workflowName: 'deploy-cdk',
      environments,
      deploySteps: (env) => [
        {
          name: `Trigger CDK deploy (${env.name}) in ${targetRepo}`,
          uses: 'actions/github-script@v7',
          with: {
            script: [
              'await github.rest.actions.createWorkflowDispatch({',
              `  owner: "${targetRepo.split('/')[0]}",`,
              `  repo: "${targetRepo.split('/')[1]}",`,
              '  workflow_id: "deploy.yml",',
              '  ref: "main",',
              `  inputs: { environment: "${env.name}" },`,
              '});',
            ].join('\n'),
          },
        },
      ],
    });
  }
}
