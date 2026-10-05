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
});

test('default task re-runs the Node-side .projenrc.ts, not java.JavaProject\'s Maven-native projenrc', () => {
  const snapshot = synthSnapshot(
    new JavaLibraryProject({
      name: 'lib-test',
      groupId: 'com.example',
      artifactId: 'lib-test',
    }),
  );

  expect(snapshot['.projen/tasks.json'].tasks.default.steps).toEqual([
    {
      exec: 'npx -y -p ts-node@10.9.2 -p typescript@6.0.3 ts-node --project tsconfig.projen.json .projenrc.ts',
    },
  ]);
  expect(snapshot['pom.xml']).not.toContain('exec-maven-plugin');
  expect(snapshot['pom.xml']).not.toContain('io.github.cdklabs');
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

test('sonar is opt-in via sonarHostUrl: sonar.yml is generated, and the Maven build never runs a sonar step', () => {
  const withSonar = synthSnapshot(
    new JavaLibraryProject({
      name: 'lib-test',
      groupId: 'com.example',
      artifactId: 'lib-test',
      sonarHostUrl: 'https://sonar.example.org',
    }),
  );
  const withoutSonar = synthSnapshot(
    new JavaLibraryProject({
      name: 'lib-test',
      groupId: 'com.example',
      artifactId: 'lib-test',
    }),
  );

  // Opted in: a standalone sonar.yml appears with the default projectKey.
  expect(withSonar['.github/workflows/sonar.yml']).toBeDefined();
  expect(JSON.stringify(withSonar['.github/workflows/sonar.yml'].jobs.sonar.steps)).toContain(
    'sonar.projectKey=xpertss_lib-test',
  );

  // Opted out: no sonar.yml at all.
  expect(withoutSonar['.github/workflows/sonar.yml']).toBeUndefined();

  // The Maven build no longer carries a sonar:sonar step in either case.
  expect(JSON.stringify(withSonar['.github/workflows/build.yml'].jobs.build.steps)).not.toContain(
    'sonar:sonar',
  );
  expect(JSON.stringify(withoutSonar['.github/workflows/build.yml'].jobs.build.steps)).not.toContain(
    'sonar:sonar',
  );
});

test('upgrade workflow is report-only; code index commit is redirected', () => {
  const snapshot = synthSnapshot(
    new JavaLibraryProject({
      name: 'lib-test',
      groupId: 'com.example',
      artifactId: 'lib-test',
    }),
  );

  // F013: the upgrade workflow reports updates and opens no PR, so it
  // references no (placeholder) PR action.
  const upgrade = snapshot['.github/workflows/upgrade.yml'];
  expect(upgrade.jobs.upgrade.permissions).toEqual({ contents: 'read' });
  expect(JSON.stringify(upgrade)).not.toContain('create-pull-request');

  // F009 override: third-party actions are redirected to xpertss/*
  const codeindex = snapshot['.github/workflows/codeindex.yml'];
  const commitStep = codeindex.jobs.codeindex.steps.find(
    (s: { name: string }) => s.name === 'Commit code index',
  );
  expect(commitStep.uses).toBe('xpertss/auto-commit@PLACEHOLDER_SHA');
});

test('attaches source and javadoc jars, single- and multi-module', () => {
  const single = new JavaLibraryProject({
    name: 'lib-test',
    groupId: 'com.example',
    artifactId: 'lib-test',
  });
  const multi = new JavaLibraryProject({
    name: 'lib-test',
    groupId: 'com.example',
    artifactId: 'lib-parent',
  });
  multi.addModule({ dir: 'core', artifactId: 'lib-core' });

  for (const project of [single, multi]) {
    const pom: string = synthSnapshot(project)['pom.xml'];
    expect(pom).toMatch(/<id>attach-sources<\/id>\s*<goals>\s*<goal>jar-no-fork<\/goal>/);
    expect(pom).toMatch(/<id>attach-javadocs<\/id>\s*<goals>\s*<goal>jar<\/goal>/);
  }
});

test('gitignore excludes JetBrains IDE state and /spec/', () => {
  const snapshot = synthSnapshot(
    new JavaLibraryProject({
      name: 'lib-test',
      groupId: 'com.example',
      artifactId: 'lib-test',
    }),
  );
  expect(snapshot['.gitignore']).toContain('/.idea/*');
  expect(snapshot['.gitignore']).toContain('/spec/');
});
