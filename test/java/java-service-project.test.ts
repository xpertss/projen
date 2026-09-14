import { JavaServiceProject } from '../../src';
import { synthSnapshot } from '../util';

test('defaults to flyway + docker publish + cdk deploy hook enabled', () => {
  const snapshot = synthSnapshot(
    new JavaServiceProject({
      name: 'svc-test',
      groupId: 'com.example',
      artifactId: 'svc-test',
      cdkDeployHook: { targetRepo: 'example-org/infra-repo' },
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
      cdkDeployHook: { enabled: false },
    }),
  );

  expect(snapshot['src/main/resources/db/migration/V1__init.sql']).toBeUndefined();
  expect(snapshot['.github/workflows/deploy-cdk.yml']).toBeUndefined();
});
