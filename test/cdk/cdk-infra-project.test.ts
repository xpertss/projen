import { CdkInfraProject } from '../../src';
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

test('gitignore excludes JetBrains IDE state', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({ name: 'infra-test', environments: [] }),
  );
  expect(snapshot['.gitignore']).toContain('/.idea/*');
});
