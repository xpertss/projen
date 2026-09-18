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
  expect(snapshot['.github/workflows/projen-drift-check.yml']).toBeDefined();
  expect(snapshot['.github/workflows/workflow-change-notice.yml']).toBeDefined();
  expect(snapshot['.github/workflows/actions-allowlist-guard.yml']).toBeDefined();
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

test('redirects out-of-policy actions and fixes the upgrade workflow', () => {
  const snapshot = synthSnapshot(
    new JavaLibraryProject({
      name: 'lib-test',
      groupId: 'com.example',
      artifactId: 'lib-test',
    }),
  );

  // F009 override: third-party actions are redirected to xpertss/*
  const upgrade = snapshot['.github/workflows/upgrade.yml'];
  const createPr = upgrade.jobs.upgrade.steps.find(
    (s: { name: string }) => s.name === 'Create Pull Request',
  );
  expect(createPr.uses).toBe('xpertss/create-pull-request@PLACEHOLDER_SHA');
  // F009 latent defect fix: write permissions + token input
  expect(upgrade.jobs.upgrade.permissions.contents).toBe('write');
  expect(upgrade.jobs.upgrade.permissions['pull-requests']).toBe('write');
  expect(createPr.with.token).toBe('${{ secrets.PROJEN_GITHUB_TOKEN }}');

  const codeindex = snapshot['.github/workflows/codeindex.yml'];
  const commitStep = codeindex.jobs.codeindex.steps.find(
    (s: { name: string }) => s.name === 'Commit code index',
  );
  expect(commitStep.uses).toBe('xpertss/auto-commit@PLACEHOLDER_SHA');
});
