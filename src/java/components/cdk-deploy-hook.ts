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
 */
export class CdkDeployHook extends Component {
  constructor(
    project: java.JavaProject,
    environments: (string | EnvironmentOptions)[],
    options: CdkDeployHookOptions = {},
  ) {
    super(project, 'CdkDeployHook');

    if (!options.targetRepo) {
      throw new Error(
        'CdkDeployHook requires targetRepo (the companion CDK infra/app repo)',
      );
    }
    const targetRepo = options.targetRepo;

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
