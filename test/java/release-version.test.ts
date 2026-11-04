import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { computeReleaseVersion, main } from '../../src/java/release-version';

// The rows of the projen README's versioning guide ("Bump table"), plus the
// first release and minMajorVersion. Commit bodies are given after a blank line.
function version(latest: string | undefined, commits: string[], extra: { minMajorVersion?: number; override?: string } = {}) {
  return computeReleaseVersion({
    baseline: '0.1.0',
    latestVersion: latest,
    commits: commits.map((c) => {
      const [subject, ...body] = c.split('\n');
      return { subject, body: body.join('\n') };
    }),
    ...extra,
  });
}

describe('pre-1.0 (0.x)', () => {
  test.each([
    ['feat!: drop X', '0.4.0'],
    ['fix!: drop X', '0.4.0'],
    ['feat(core)!: drop X', '0.4.0'],
    ['feat: add X', '0.3.2'],
    ['fix: repair X', '0.3.2'],
  ])('0.3.1 + %s = %s', (commit, expected) => {
    expect(version('0.3.1', [commit])).toBe(expected);
  });

  test('a BREAKING CHANGE body paragraph on a feat bumps the minor', () => {
    expect(version('0.3.1', ['feat: add X\n\nSome text.\n\nBREAKING CHANGE: X moved'])).toBe('0.4.0');
  });
});

describe('1.0 and later', () => {
  test.each([
    ['feat!: drop X', '2.0.0'],
    ['feat: add X', '1.3.0'],
    ['fix: repair X', '1.2.4'],
  ])('1.2.3 + %s = %s', (commit, expected) => {
    expect(version('1.2.3', [commit])).toBe(expected);
  });

  test('a BREAKING CHANGE body paragraph on a fix is a major', () => {
    expect(version('1.2.3', ['fix: repair X\n\nBREAKING CHANGE: X moved'])).toBe('2.0.0');
  });

  test('the highest commit in the window wins', () => {
    expect(version('1.2.3', ['fix: a', 'feat: b', 'docs: c'])).toBe('1.3.0');
    expect(version('1.2.3', ['fix: a', 'feat: b', 'feat!: c'])).toBe('2.0.0');
  });
});

describe('no release', () => {
  test.each([
    [['docs: update guide']],
    [['ci: pin node', 'chore: tidy', 'Updated the README']],
    [['chore(release): 1.2.3']],
    [[]],
    // A breaking note only counts on a feat or fix.
    [['refactor: rework\n\nBREAKING CHANGE: nope']],
  ])('%j gives nothing to publish', (commits) => {
    expect(version('1.2.3', commits)).toBeUndefined();
  });
});

describe('first release (no tag)', () => {
  test('publishes the baseline, whatever the commits', () => {
    expect(version(undefined, [])).toBe('0.1.0');
    expect(version(undefined, ['feat!: first'])).toBe('0.1.0');
  });
});

describe('minMajorVersion', () => {
  test('0.4.0 + any release = 1.0.0', () => {
    expect(version('0.3.1', ['feat!: x'], { minMajorVersion: 1 })).toBe('1.0.0');
    expect(version('0.3.1', ['fix: x'], { minMajorVersion: 1 })).toBe('1.0.0');
  });
  test('1.2.0 is unaffected', () => {
    expect(version('1.2.0', ['feat: x'], { minMajorVersion: 1 })).toBe('1.3.0');
  });
  test('applies to the first release too', () => {
    expect(version(undefined, [], { minMajorVersion: 1 })).toBe('1.0.0');
  });
  test('does not make a no-op window release', () => {
    expect(version('0.3.1', ['docs: x'], { minMajorVersion: 1 })).toBeUndefined();
  });
});

describe('override', () => {
  test('replaces the whole computation', () => {
    expect(version('1.2.3', ['docs: x'], { override: '5.0.0' })).toBe('5.0.0');
    expect(version(undefined, [], { override: '5.0.0', minMajorVersion: 9 })).toBe('5.0.0');
  });
  test('must be a version', () => {
    expect(() => version('1.2.3', [], { override: 'latest' })).toThrow(/not a version/);
  });
});

describe('against a git repository', () => {
  let dir: string;
  let previous: string;
  const git = (...args: string[]) =>
    execFileSync('git', ['-c', 'user.name=t', '-c', 'user.email=t@example.org', '-c', 'commit.gpgsign=false', ...args], {
      cwd: dir,
      encoding: 'utf8',
    });
  const commit = (message: string) => git('commit', '--allow-empty', '-m', message);
  const run = (env: Record<string, string> = {}): { release: string; version: string } => {
    const out = join(dir, 'out.txt');
    writeFileSync(out, '');
    main(['--baseline', '0.1.0'], { ...env, GITHUB_OUTPUT: out });
    const lines = Object.fromEntries(
      readFileSync(out, 'utf8').trim().split('\n').map((l) => l.split('=')),
    );
    return { release: lines.release, version: lines.version };
  };

  beforeEach(() => {
    previous = process.cwd();
    dir = mkdtempSync(join(tmpdir(), 'release-version-'));
    git('init', '-q', '-b', 'main');
    process.chdir(dir);
    jest.spyOn(console, 'log').mockImplementation(() => undefined);
  });
  afterEach(() => {
    jest.restoreAllMocks();
    process.chdir(previous);
    rmSync(dir, { recursive: true, force: true });
  });

  test('no tag: the baseline', () => {
    commit('feat: first');
    expect(run()).toEqual({ release: 'true', version: '0.1.0' });
  });

  test('uses the highest tag and only the commits after it, merges excluded', () => {
    commit('feat: first');
    git('tag', '-a', 'v0.1.0', '-m', 'v0.1.0');
    commit('feat: second');
    git('tag', '-a', 'v0.2.0', '-m', 'v0.2.0');
    git('tag', '-a', 'v0.10.0', '-m', 'v0.10.0');
    commit('docs: only docs');
    expect(run()).toEqual({ release: 'false', version: '' });

    commit('fix: repair');
    git('checkout', '-q', '-b', 'topic');
    commit('feat!: breaking on a branch');
    git('checkout', '-q', 'main');
    git('merge', '--no-ff', '-m', 'feat!: merge commit that must not count', 'topic');
    // The branch commit itself is a non-merge commit in the window; only the
    // merge's own subject is ignored.
    expect(run().version).toBe('0.11.0');
  });

  test('a merge commit alone does not release', () => {
    commit('feat: first');
    git('tag', '-a', 'v1.0.0', '-m', 'v1.0.0');
    git('checkout', '-q', '-b', 'topic');
    commit('docs: branch');
    git('checkout', '-q', 'main');
    commit('docs: main');
    git('merge', '--no-ff', '-m', 'feat: merge subject', 'topic');
    expect(run().release).toBe('false');
  });

  test('VERSION_OVERRIDE wins', () => {
    commit('docs: nothing');
    git('tag', '-a', 'v1.0.0', '-m', 'v1.0.0');
    expect(run({ VERSION_OVERRIDE: '2.5.0' })).toEqual({ release: 'true', version: '2.5.0' });
  });
});
