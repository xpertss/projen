import { github } from 'projen';
import { SETUP_NODE_STEP } from '../common/ci-steps';
import { noteWorkflowPurpose } from '../common/workflow-purpose';

/**
 * The org-wide OIDC deploy role. Its trust admits only the `main` branch of
 * `xpertss` repos, so the workflow below cannot assume it from anywhere else.
 */
const DEPLOY_ROLE_NAME = 'gha-cdk-deploy';

/**
 * Per-repo secret holding the target account id. Public repos cannot read
 * org-level secrets, and the literal id must never appear in the generated
 * workflow.
 */
const AWS_ACCOUNT_ID_SECRET = 'AWS_ACCOUNT_ID';

/** The workloads account is SCP-locked to this region. */
const AWS_REGION = 'us-east-2';

/**
 * `deploy.yml`: deploys every stack of the CDK app on each push to `main`
 * (and on manual dispatch) by assuming the org-wide `gha-cdk-deploy` role
 * through GitHub OIDC. No long-lived AWS credentials and no GitHub
 * Environment - an environment on the job would change the OIDC `sub` away
 * from `ref:refs/heads/main`, which is all the role trusts.
 *
 * @internal
 */
export function addCdkDeployWorkflow(gh: github.GitHub): github.GithubWorkflow {
  const workflow = new github.GithubWorkflow(gh, 'deploy');
  noteWorkflowPurpose(
    workflow.file,
    'Deploy the CDK app on every push to main via the org-wide gha-cdk-deploy OIDC role.',
  );
  workflow.on({
    push: { branches: ['main'] },
    workflowDispatch: {},
  });
  workflow.addJob('deploy', {
    name: 'Deploy',
    runsOn: ['ubuntu-latest'],
    permissions: {
      idToken: github.workflows.JobPermission.WRITE,
      contents: github.workflows.JobPermission.READ,
    },
    steps: [
      { name: 'Checkout', uses: 'actions/checkout@v7' },
      {
        name: 'Configure AWS credentials',
        uses: 'aws-actions/configure-aws-credentials@v6',
        with: {
          'role-to-assume': `arn:aws:iam::\${{ secrets.${AWS_ACCOUNT_ID_SECRET} }}:role/${DEPLOY_ROLE_NAME}`,
          'aws-region': AWS_REGION,
        },
      },
      SETUP_NODE_STEP,
      { name: 'Install', run: 'npm ci' },
      { name: 'cdk deploy', run: 'npx cdk deploy --all --require-approval never' },
    ],
  });
  return workflow;
}
