import { AUTO_COMMIT_VERSION, CdkAppProject, CdkInfraProject } from '../../src';
import { SCIP_TYPESCRIPT_VERSION } from '../../src/common/constants';
import { synthSnapshot } from '../util';

const types = [
  (o: object) => new CdkInfraProject({ name: 'infra-test', ...o }),
  (o: object) => new CdkAppProject({ name: 'app-test', ...o }),
];

function codeIndexJob(snapshot: Record<string, any>) {
  return snapshot['.github/workflows/codeindex.yml'].jobs.codeindex;
}

describe('code index', () => {
  test('every CDK type generates the code index by default', () => {
    for (const make of types) {
      const snapshot = synthSnapshot(make({}));
      expect(snapshot['.github/workflows/codeindex.yml']).toBeDefined();
      expect(snapshot['.projen/tasks.json'].tasks.codeindex).toBeDefined();
      expect(snapshot['package.json'].devDependencies['@sourcegraph/scip-typescript']).toBe(
        SCIP_TYPESCRIPT_VERSION,
      );
    }
  });

  test('publishCodeIndex: false removes the workflow, the task and the devDependency', () => {
    for (const make of types) {
      const snapshot = synthSnapshot(make({ publishCodeIndex: false }));
      expect(snapshot['.github/workflows/codeindex.yml']).toBeUndefined();
      expect(snapshot['.projen/tasks.json'].tasks.codeindex).toBeUndefined();
      expect(snapshot['package.json'].devDependencies['@sourcegraph/scip-typescript']).toBeUndefined();
    }
  });

  test('the codeindex task indexes the root tsconfig (src/ only) into .xss/index.scip', () => {
    const { tasks } = synthSnapshot(new CdkInfraProject({ name: 'infra-test' }))['.projen/tasks.json'];
    const [prepare, index, normalize] = tasks.codeindex.steps;
    expect(prepare.exec).toContain('.xss/index.txt');
    expect(index.exec).toBe('scip-typescript index --output .xss/index.scip');
    // Last, so the index that is written to .xss/ is the machine-independent one.
    expect(normalize.exec).toBe(
      'node node_modules/@xpertss/projen-types/lib/common/scip-index-normalizer.js .xss/index.scip',
    );
    expect(tasks.codeindex.steps).toHaveLength(3);
  });

  test('the committed index is marked binary, so line-ending conversion never touches it', () => {
    const snapshot = synthSnapshot(new CdkInfraProject({ name: 'infra-test' }));
    expect(snapshot['.gitattributes']).toMatch(/\/\.xss\/index\.scip .*binary/);
    const off = synthSnapshot(new CdkInfraProject({ name: 'infra-test', publishCodeIndex: false }));
    expect(off['.gitattributes']).not.toContain('.xss');
  });

  test('the generated root tsconfig covers src/ only, so the projen project stays out of the index', () => {
    const tsconfig = synthSnapshot(new CdkInfraProject({ name: 'infra-test' }))['tsconfig.json'];
    expect(tsconfig.include).toEqual(['src/**/*.ts']);
  });

  test('the workflow runs on push to main, serialized, with contents: write only', () => {
    const codeindex = synthSnapshot(new CdkInfraProject({ name: 'infra-test' }))[
      '.github/workflows/codeindex.yml'
    ];
    expect(codeindex.on.push).toEqual({ branches: ['main'] });
    expect(codeindex.on.workflow_dispatch).toBeDefined();
    expect(codeindex.concurrency).toEqual({ 'group': 'codeindex', 'cancel-in-progress': true });
    expect(codeindex.jobs.codeindex.permissions).toEqual({ contents: 'write' });
  });

  test('the diff gate comes first and every later step waits on it', () => {
    const steps = codeIndexJob(synthSnapshot(new CdkInfraProject({ name: 'infra-test' }))).steps;
    expect(steps.map((s: { name: string }) => s.name)).toEqual([
      'Checkout',
      'Find changed files',
      'Setup Node',
      'Install dependencies',
      'Generate code index',
      'Commit code index',
    ]);
    for (const step of steps.slice(2)) {
      expect(step.if).toBe("steps.changes.outputs.run == 'true'");
    }
    expect(steps[1].env).toEqual({ BEFORE: '${{ github.event.before }}' });
  });

  test('the index is committed as a chore of .xss/ only, with no token', () => {
    const snapshot = synthSnapshot(new CdkInfraProject({ name: 'infra-test' }));
    const commit = codeIndexJob(snapshot).steps.find(
      (s: { name: string }) => s.name === 'Commit code index',
    );
    expect(commit.uses).toBe(`xpertss/auto-commit@${AUTO_COMMIT_VERSION}`);
    expect(commit.with).toEqual({
      commit_message: 'chore: update code index',
      folder: '.xss',
      if_behind: 'skip',
    });
    expect(JSON.stringify(snapshot['.github/workflows/codeindex.yml'])).not.toContain(
      'PROJEN_GITHUB_TOKEN',
    );
  });

  test('every uses: in codeindex.yml is a trusted actions/* ref or the pinned auto-commit', () => {
    const steps = codeIndexJob(synthSnapshot(new CdkInfraProject({ name: 'infra-test' }))).steps;
    for (const step of steps.filter((s: { uses?: string }) => s.uses)) {
      if (step.uses !== `xpertss/auto-commit@${AUTO_COMMIT_VERSION}`) {
        expect(step.uses).toMatch(/^actions\/[a-z-]+@v\d+$/);
      }
    }
  });
});
