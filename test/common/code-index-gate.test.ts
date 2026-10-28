import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { CdkInfraProject } from '../../src';
import { synthSnapshot } from '../util';

// The gate is a bash script inside the generated workflow, so these tests run
// the synthesized script itself against real git repositories. They are
// skipped where no usable bash exists (a bare Windows PATH resolves `bash` to
// the WSL stub); set BASH_EXE to run them there.
const BASH = process.env.BASH_EXE ?? 'bash';

function bashWorks(): boolean {
  try {
    return execFileSync(BASH, ['-c', 'echo ok'], { encoding: 'utf8' }).trim() === 'ok';
  } catch {
    return false;
  }
}

const gateTest = bashWorks() ? test : test.skip;

function gateScript(): string {
  const snapshot = synthSnapshot(new CdkInfraProject({ name: 'infra-test' }));
  return snapshot['.github/workflows/codeindex.yml'].jobs.codeindex.steps.find(
    (s: { id?: string }) => s.id === 'changes',
  ).run;
}

function git(cwd: string, ...args: string[]): string {
  return execFileSync(
    'git',
    ['-c', 'user.name=t', '-c', 'user.email=t@example.com', '-c', 'commit.gpgsign=false', ...args],
    { cwd, encoding: 'utf8' },
  ).trim();
}

function write(root: string, files: Record<string, string>) {
  for (const [path, content] of Object.entries(files)) {
    mkdirSync(dirname(join(root, path)), { recursive: true });
    writeFileSync(join(root, path), content);
  }
}

/**
 * Commits `base`, then `change` on top, clones only the second commit (depth
 * 1, as `actions/checkout` does) and runs the gate there. Returns the `run`
 * output.
 */
function runGate(
  base: Record<string, string>,
  change: Record<string, string>,
  before: (baseSha: string) => string = (sha) => sha,
): string {
  const dir = mkdtempSync(join(tmpdir(), 'code-index-gate-'));
  try {
    const origin = join(dir, 'origin');
    mkdirSync(origin);
    git(origin, 'init', '-q', '-b', 'main');
    write(origin, base);
    git(origin, 'add', '-A');
    git(origin, 'commit', '-q', '-m', 'base');
    const baseSha = git(origin, 'rev-parse', 'HEAD');
    write(origin, change);
    git(origin, 'add', '-A');
    git(origin, 'commit', '-q', '-m', 'change');
    const head = git(origin, 'rev-parse', 'HEAD');

    const work = join(dir, 'work');
    git(dir, 'clone', '-q', '--depth=1', pathToFileURL(origin).href, work);
    const output = join(dir, 'github-output');
    writeFileSync(output, '');
    execFileSync(BASH, ['-c', gateScript()], {
      cwd: work,
      env: { ...process.env, BEFORE: before(baseSha), GITHUB_SHA: head, GITHUB_OUTPUT: output },
      encoding: 'utf8',
    });
    return readFileSync(output, 'utf8').trim();
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

const BASE = { 'src/main.ts': 'a', 'README.md': 'a', '.xss/index.scip': 'a' };

describe('code index diff gate', () => {
  gateTest('a source-only push runs the indexer', () => {
    expect(runGate(BASE, { 'src/main.ts': 'b' })).toBe('run=true');
  });

  gateTest('a source-plus-index push does not', () => {
    expect(runGate(BASE, { 'src/main.ts': 'b', '.xss/index.scip': 'b' })).toBe('run=false');
  });

  gateTest('an index-only push does not', () => {
    expect(runGate(BASE, { '.xss/index.scip': 'b' })).toBe('run=false');
  });

  gateTest('a push with no source file does not', () => {
    expect(runGate(BASE, { 'README.md': 'b', 'package.json': '{}' })).toBe('run=false');
  });

  gateTest('nested .ts and .tsx files under src/ count as source', () => {
    expect(runGate(BASE, { 'src/a/b/c.ts': 'x' })).toBe('run=true');
    expect(runGate(BASE, { 'src/ui/app.tsx': 'x' })).toBe('run=true');
  });

  gateTest('the projen project and the tests are not source', () => {
    expect(runGate(BASE, { '.projenrc.ts': 'x' })).toBe('run=false');
    expect(runGate(BASE, { 'projenrc/helper.ts': 'x' })).toBe('run=false');
    expect(runGate(BASE, { 'test/main.test.ts': 'x' })).toBe('run=false');
  });

  gateTest('a push with no usable before commit runs the indexer', () => {
    const only = { 'README.md': 'b' };
    expect(runGate(BASE, only, () => '0'.repeat(40))).toBe('run=true');
    expect(runGate(BASE, only, () => '')).toBe('run=true');
    expect(runGate(BASE, only, () => 'f'.repeat(40))).toBe('run=true');
  });
});
