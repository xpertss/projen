import { CdkAppProject } from '../../src';
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

test('gitignore excludes JetBrains IDE state', () => {
  const snapshot = synthSnapshot(
    new CdkAppProject({ name: 'app-test', environments: [] }),
  );
  expect(snapshot['.gitignore']).toContain('/.idea/*');
});
