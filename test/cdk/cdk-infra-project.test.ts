import { github } from 'projen';
import { CREATE_PULL_REQUEST_VERSION, CdkInfraProject } from '../../src';
import { synthSnapshot } from '../util';

test('synthesizes cdk.json and a PR-check build workflow', () => {
  const project = new CdkInfraProject({
    name: 'infra-test',
    environments: ['dev', 'prod'],
  });

  const snapshot = synthSnapshot(project);

  expect(snapshot['cdk.json']).toBeDefined();
  expect(snapshot['.github/workflows/build.yml']).toBeDefined();
  expect(snapshot['.github/workflows/deploy.yml']).toBeDefined();
  expect(snapshot['.github/workflows/projen-drift-check.yml']).toBeDefined();
  expect(snapshot['.github/workflows/workflow-change-notice.yml']).toBeDefined();
});

test('deploy workflow exposes one job per environment', () => {
  const project = new CdkInfraProject({
    name: 'infra-test',
    environments: ['dev', 'stage', 'prod'],
  });

  const deployWorkflow = synthSnapshot(project)['.github/workflows/deploy.yml'];

  expect(Object.keys(deployWorkflow.jobs)).toEqual([
    'deploy-dev',
    'deploy-stage',
    'deploy-prod',
  ]);
  expect(deployWorkflow.on.workflow_dispatch.inputs.environment.options).toEqual([
    'dev',
    'stage',
    'prod',
  ]);
});

test('no deploy workflow when no environments are configured', () => {
  const project = new CdkInfraProject({ name: 'infra-test', environments: [] });

  expect(synthSnapshot(project)['.github/workflows/deploy.yml']).toBeUndefined();
});

test('ecr/ecs constructs are opt-in', () => {
  const withEcr = synthSnapshot(
    new CdkInfraProject({
      name: 'infra-test',
      environments: [],
      ecrEcs: { enabled: true },
    }),
  );
  const withoutEcr = synthSnapshot(
    new CdkInfraProject({ name: 'infra-test', environments: [] }),
  );

  expect(withEcr['src/constructs/ecr-ecs.ts']).toBeDefined();
  expect(withoutEcr['src/constructs/ecr-ecs.ts']).toBeUndefined();
});

test('edge networking constructs are generated per requested resource', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({
      name: 'infra-test',
      environments: [],
      edgeResources: ['cloudfront', 'sqs'],
    }),
  );

  const source = snapshot['src/constructs/edge-networking.ts'];
  expect(source).toContain('aws-cloudfront');
  expect(source).toContain('aws-sqs');
  expect(source).not.toContain('aws-cognito');
});

test('deploy workflow no longer references Slack', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({
      name: 'infra-test',
      environments: ['dev', 'prod'],
    }),
  );
  const deploy = JSON.stringify(snapshot['.github/workflows/deploy.yml']);
  expect(deploy).not.toContain('slackapi');
  expect(deploy).not.toContain('SLACK_WEBHOOK');
});

test('default task re-runs .projenrc.ts - the repo is configured in TypeScript', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({ name: 'infra-test', environments: [] }),
  );

  expect(snapshot['.projen/tasks.json'].tasks.default.steps).toEqual([
    { execArgs: ['ts-node', '--project', 'projenrc/tsconfig.json', '.projenrc.ts'] },
  ]);
  expect(snapshot['package.json'].devDependencies['ts-node']).toBeDefined();
});

test('gitignore excludes JetBrains IDE state and /spec/', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({ name: 'infra-test', environments: [] }),
  );
  expect(snapshot['.gitignore']).toContain('/.idea/*');
  expect(snapshot['.gitignore']).toContain('/spec/');
});

test('the deps-upgrade workflow mints a GitHub App token (default) and opens the PR with it', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({ name: 'infra-test', environments: [] }),
  );
  const prSteps = snapshot['.github/workflows/upgrade.yml'].jobs.pr.steps;

  // Core projen emits a "Generate token" step (from the default
  // `GithubCredentials.fromApp()`) at the top of the `pr` job; the Create
  // Pull Request step consumes its output instead of reading a PAT secret.
  const genToken = prSteps.find(
    (s: { name: string }) => s.name === 'Generate token',
  );
  expect(genToken).toBeDefined();
  expect(genToken.id).toBe('generate_token');
  expect(genToken.with['app-id']).toBe('${{ secrets.PROJEN_APP_ID }}');
  expect(genToken.with['private-key']).toBe('${{ secrets.PROJEN_APP_PRIVATE_KEY }}');

  const prStep = prSteps.find(
    (s: { name: string }) => s.name === 'Create Pull Request',
  );
  expect(prStep.uses).toBe(
    `xpertss/create-pull-request@${CREATE_PULL_REQUEST_VERSION}`,
  );
  expect(prStep.with.token).toBe('${{ steps.generate_token.outputs.token }}');
});

test('projenCredentials: a custom App uses its own secret names; a PAT reverts to the PAT secret', () => {
  const customApp = synthSnapshot(
    new CdkInfraProject({
      name: 'infra-test',
      environments: [],
      projenCredentials: github.GithubCredentials.fromApp({
        appIdSecret: 'MY_APP_ID',
        privateKeySecret: 'MY_APP_PRIVATE_KEY',
      }),
    }),
  );
  const customPrSteps = customApp['.github/workflows/upgrade.yml'].jobs.pr.steps;
  const genToken = customPrSteps.find(
    (s: { name: string }) => s.name === 'Generate token',
  );
  expect(genToken.with['app-id']).toBe('${{ secrets.MY_APP_ID }}');
  expect(genToken.with['private-key']).toBe('${{ secrets.MY_APP_PRIVATE_KEY }}');
  const prStep = customPrSteps.find(
    (s: { name: string }) => s.name === 'Create Pull Request',
  );
  expect(prStep.with.token).toBe('${{ steps.generate_token.outputs.token }}');

  // PAT fallback: no Generate token step; the token is the secret directly.
  const pat = synthSnapshot(
    new CdkInfraProject({
      name: 'infra-test',
      environments: [],
      projenCredentials: github.GithubCredentials.fromPersonalAccessToken({
        secret: 'MY_GHE_TOKEN',
      }),
    }),
  );
  const patPrSteps = pat['.github/workflows/upgrade.yml'].jobs.pr.steps;
  expect(
    patPrSteps.find((s: { name: string }) => s.name === 'Generate token'),
  ).toBeUndefined();
  const patPrStep = patPrSteps.find(
    (s: { name: string }) => s.name === 'Create Pull Request',
  );
  expect(patPrStep.with.token).toBe('${{ secrets.MY_GHE_TOKEN }}');
});

test('.editorconfig is written by default and can be turned off', () => {
  expect(synthSnapshot(new CdkInfraProject({ name: 'infra-test', environments: [] }))['.editorconfig']).toContain(
    'root = true',
  );
  expect(
    synthSnapshot(new CdkInfraProject({ name: 'infra-test', environments: [], editorconfig: false }))['.editorconfig'],
  ).toBeUndefined();
});
