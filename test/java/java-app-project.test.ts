import { JavaAppProject } from '../../src';
import { synthSnapshot } from '../util';

test('publishes to GitHub Packages only', () => {
  const snapshot = synthSnapshot(
    new JavaAppProject({
      name: 'app-test',
      groupId: 'com.example',
      artifactId: 'app-test',
    }),
  );

  expect(snapshot['.github/workflows/publish-ghpackages.yml']).toBeDefined();
  expect(snapshot['.github/workflows/publish-maven-central.yml']).toBeUndefined();
  expect(snapshot['.github/workflows/publish-docker.yml']).toBeUndefined();
  expect(snapshot['.github/workflows/deploy-cdk.yml']).toBeUndefined();
});

test('gitignore excludes JetBrains IDE state', () => {
  const snapshot = synthSnapshot(
    new JavaAppProject({
      name: 'app-test',
      groupId: 'com.example',
      artifactId: 'app-test',
    }),
  );
  expect(snapshot['.gitignore']).toContain('/.idea/*');
});
