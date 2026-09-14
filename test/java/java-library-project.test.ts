import { JavaLibraryProject } from '../../src';
import { synthSnapshot } from '../util';

test('synthesizes pom.xml, build workflow, publish workflow, and code index by default', () => {
  const snapshot = synthSnapshot(
    new JavaLibraryProject({
      name: 'lib-test',
      groupId: 'com.example',
      artifactId: 'lib-test',
    }),
  );

  expect(snapshot['pom.xml']).toContain('<groupId>com.example</groupId>');
  expect(snapshot['.github/workflows/build.yml']).toBeDefined();
  expect(snapshot['.github/workflows/publish-maven-central.yml']).toBeDefined();
  expect(snapshot['.github/workflows/codeindex.yml']).toBeDefined();
});

test('code index can be opted out', () => {
  const snapshot = synthSnapshot(
    new JavaLibraryProject({
      name: 'lib-test',
      groupId: 'com.example',
      artifactId: 'lib-test',
      publishCodeIndex: false,
    }),
  );

  expect(snapshot['.github/workflows/codeindex.yml']).toBeUndefined();
});

test('sonar step is only added when sonarProjectKey is set', () => {
  const withSonar = synthSnapshot(
    new JavaLibraryProject({
      name: 'lib-test',
      groupId: 'com.example',
      artifactId: 'lib-test',
      sonarProjectKey: 'com.example:lib-test',
    }),
  )['.github/workflows/build.yml'];
  const withoutSonar = synthSnapshot(
    new JavaLibraryProject({
      name: 'lib-test',
      groupId: 'com.example',
      artifactId: 'lib-test',
    }),
  )['.github/workflows/build.yml'];

  const steps = JSON.stringify(withSonar.jobs.build.steps);
  expect(steps).toContain('sonar:sonar');
  expect(JSON.stringify(withoutSonar.jobs.build.steps)).not.toContain(
    'sonar:sonar',
  );
});
