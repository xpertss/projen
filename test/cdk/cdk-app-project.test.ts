import { CREATE_PULL_REQUEST_VERSION, CdkAppProject } from '../../src';
import { synthSnapshot } from '../util';

test('adds app runtime scaffold, database construct, and app-build workflow', () => {
  const snapshot = synthSnapshot(
    new CdkAppProject({
      name: 'app-test',
      environments: ['prod'],
      database: { engine: 'postgres' },
    }),
  );

  expect(snapshot['src/app.ts']).toBeDefined();
  expect(snapshot['src/handlers/example.ts']).toBeDefined();
  expect(snapshot['src/constructs/database.ts']).toContain('aws-rds');
  expect(snapshot['.github/workflows/app-build.yml']).toBeDefined();
});

test('dynamodb engine generates a dynamodb-flavored construct', () => {
  const snapshot = synthSnapshot(
    new CdkAppProject({
      name: 'app-test',
      environments: [],
      database: { engine: 'dynamodb', migrationTool: 'some-migration-tool' },
    }),
  );

  expect(snapshot['src/constructs/database.ts']).toContain('aws-dynamodb');
  expect(snapshot['src/constructs/database.ts']).toContain(
    'some-migration-tool',
  );
});

test('gitignore excludes JetBrains IDE state and /spec/', () => {
  const snapshot = synthSnapshot(
    new CdkAppProject({ name: 'app-test', environments: [] }),
  );
  expect(snapshot['.gitignore']).toContain('/.idea/*');
  expect(snapshot['.gitignore']).toContain('/spec/');
});

test('the deps-upgrade workflow opens the PR with the pinned internal action and the PAT', () => {
  const snapshot = synthSnapshot(
    new CdkAppProject({ name: 'app-test', environments: [] }),
  );
  const prStep = snapshot['.github/workflows/upgrade.yml'].jobs.pr.steps.find(
    (s: { name: string }) => s.name === 'Create Pull Request',
  );
  expect(prStep.uses).toBe(
    `xpertss/create-pull-request@${CREATE_PULL_REQUEST_VERSION}`,
  );
  expect(prStep.with.token).toBe('${{ secrets.PROJEN_GITHUB_TOKEN }}');
});
