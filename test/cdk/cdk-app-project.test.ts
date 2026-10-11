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

test('the deps-upgrade workflow mints a GitHub App token and opens the PR with it', () => {
  const snapshot = synthSnapshot(
    new CdkAppProject({ name: 'app-test', environments: [] }),
  );
  const prSteps = snapshot['.github/workflows/upgrade.yml'].jobs.pr.steps;

  // Core projen emits a "Generate token" step (from `GithubCredentials.fromApp`)
  // at the top of the `pr` job; the Create Pull Request step consumes it.
  const genToken = prSteps.find(
    (s: { name: string }) => s.name === 'Generate token',
  );
  expect(genToken).toBeDefined();
  expect(genToken.id).toBe('generate_token');
  expect(genToken.uses).toMatch(/^actions\/create-github-app-token@/);
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
