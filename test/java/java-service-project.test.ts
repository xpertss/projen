import { JavaServiceProject } from '../../src';
import { synthSnapshot } from '../util';

test('defaults to flyway + docker publish + cdk deploy hook enabled', () => {
  const snapshot = synthSnapshot(
    new JavaServiceProject({
      name: 'svc-test',
      groupId: 'com.example',
      artifactId: 'svc-test',
      cdkDeployTargetRepo: 'example-org/infra-repo',
    }),
  );

  expect(snapshot['src/main/resources/db/migration/V1__init.sql']).toBeDefined();
  expect(snapshot['.github/workflows/publish-docker.yml']).toBeDefined();
  expect(snapshot['.github/workflows/deploy-cdk.yml']).toBeDefined();
  expect(snapshot['.github/workflows/publish-maven-central.yml']).toBeUndefined();
});

test('flyway and cdk deploy hook can both be disabled', () => {
  const snapshot = synthSnapshot(
    new JavaServiceProject({
      name: 'svc-test',
      groupId: 'com.example',
      artifactId: 'svc-test',
      useFlyway: false,
      cdkDeployHook: false,
    }),
  );

  expect(snapshot['src/main/resources/db/migration/V1__init.sql']).toBeUndefined();
  expect(snapshot['.github/workflows/deploy-cdk.yml']).toBeUndefined();
});

test('no cdkDeployTargetRepo still synthesizes - deploy-cdk.yml fails loudly when dispatched', () => {
  const snapshot = synthSnapshot(
    new JavaServiceProject({
      name: 'svc-test',
      groupId: 'com.example',
      artifactId: 'svc-test',
    }),
  );

  const deploy = snapshot['.github/workflows/deploy-cdk.yml'];
  expect(deploy).toBeDefined();
  // Dispatch-only, so the failure only lands on someone actually deploying.
  expect(deploy.on.workflow_dispatch).toBeDefined();
  expect(deploy.on.push).toBeUndefined();
  expect(deploy.on.pull_request).toBeUndefined();

  const run = JSON.stringify(deploy.jobs);
  expect(run).toContain('cdkDeployTargetRepo is not set');
  expect(run).toContain('exit 1');
  expect(run).not.toContain('createWorkflowDispatch');
});
