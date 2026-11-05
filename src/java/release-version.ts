import { execFileSync } from 'node:child_process';
import { appendFileSync, existsSync } from 'node:fs';
import { delimiter, join, resolve } from 'node:path';

/**
 * Computes the next release version of a Maven library from its commits, so
 * the version is never stored in `pom.xml` (F028 section 3.7).
 *
 * The rules are the ones the npm and action projects get from projen's
 * `Release` (`commit-and-tag-version` with the conventionalcommits preset), as
 * documented in the projen README's versioning guide: only `feat:` and `fix:`
 * subjects release, `!` or a `BREAKING CHANGE:` paragraph marks a breaking
 * change, the highest commit in the window wins, and below `1.0.0` every level
 * moves down one. `minMajorVersion` raises a lower result to `<N>.0.0`. They
 * are applied here rather than by running `commit-and-tag-version`, which
 * works on a `package.json` version and rewrites files; the test file pins this
 * code to the guide's table.
 *
 * Run as a script (see {@link main}).
 */

/** One commit of the release window. */
export interface CommitMessage {
  readonly subject: string;
  readonly body: string;
}

export interface ReleaseVersionInput {
  /** The `version` option: published as the first release when there is no tag. */
  readonly baseline: string;
  /** The latest release tag's version (`1.2.3`, no `v`); undefined when there is none. */
  readonly latestVersion?: string;
  /** Non-merge commits since the latest tag. */
  readonly commits: CommitMessage[];
  readonly minMajorVersion?: number;
  /** Replaces the whole computation (the `version` workflow input). */
  readonly override?: string;
}

const VERSION = /^(\d+)\.(\d+)\.(\d+)$/;
const OVERRIDE = /^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/;
const RELEASABLE = /^(feat|fix)(\([^)]*\))?(!)?:/;
const BREAKING_BODY = /^BREAKING[ -]CHANGE:/m;
/** Subjects of the release bookkeeping commits, which carry no content. */
const RELEASE_COMMIT_PREFIX = 'chore(release)';

type Level = 'major' | 'minor' | 'patch';

/** The version to release, or `undefined` when there is nothing to release. */
export function computeReleaseVersion(input: ReleaseVersionInput): string | undefined {
  if (input.override) {
    if (!OVERRIDE.test(input.override)) {
      throw new Error(`Version override "${input.override}" is not a version like 1.2.3.`);
    }
    return input.override;
  }

  let next: number[];
  if (input.latestVersion === undefined) {
    next = parse(input.baseline, 'version');
  } else {
    const level = highestLevel(input.commits);
    if (!level) {
      return undefined;
    }
    next = bump(parse(input.latestVersion, 'latest tag'), level);
  }

  if (input.minMajorVersion !== undefined && next[0] < input.minMajorVersion) {
    next = [input.minMajorVersion, 0, 0];
  }
  return next.join('.');
}

function parse(version: string, what: string): number[] {
  const m = VERSION.exec(version);
  if (!m) {
    throw new Error(`The ${what} "${version}" is not a version like 1.2.3.`);
  }
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}

function highestLevel(commits: CommitMessage[]): Level | undefined {
  const rank: Level[] = ['patch', 'minor', 'major'];
  let highest = -1;
  for (const c of commits) {
    const m = RELEASABLE.exec(c.subject);
    if (!m || c.subject.startsWith(RELEASE_COMMIT_PREFIX)) {
      continue;
    }
    let level: Level;
    if (m[3] || BREAKING_BODY.test(c.body)) {
      level = 'major';
    } else if (m[1] === 'feat') {
      level = 'minor';
    } else {
      level = 'patch';
    }
    highest = Math.max(highest, rank.indexOf(level));
  }
  return highest === -1 ? undefined : rank[highest];
}

function bump([major, minor, patch]: number[], level: Level): number[] {
  // Pre-major: every level moves down one, and a patch stays a patch.
  let effective: Level = level;
  if (major < 1) {
    effective = level === 'major' ? 'minor' : 'patch';
  }
  if (effective === 'major') {
    return [major + 1, 0, 0];
  }
  return effective === 'minor' ? [major, minor + 1, 0] : [major, minor, patch + 1];
}

let gitExe: string | undefined;

function findGit(): string {
  const names = process.platform === 'win32' ? ['git.exe', 'git.cmd'] : ['git'];
  for (const dir of (process.env.PATH ?? '').split(delimiter)) {
    if (!dir) {
      continue;
    }
    for (const name of names) {
      const candidate = resolve(join(dir, name));
      if (existsSync(candidate)) {
        return candidate;
      }
    }
  }
  throw new Error('No git executable found in PATH');
}

/**
 * Absolute path of the `git` executable, resolved once (at first use) against
 * the PATH as it is at startup. Every invocation then uses that absolute path,
 * so a later change of PATH (or of a directory on it) cannot redirect `git`
 * calls to a different executable.
 */
function gitExecutable(): string {
  gitExe ??= findGit();
  return gitExe;
}

function git(args: string[]): string {
  const exe = gitExecutable();
  // A Windows .cmd shim cannot be spawned without a shell, so go through cmd.
  const command = exe.endsWith('.cmd')
    ? [process.env.ComSpec ?? 'cmd.exe', '/c', exe, ...args]
    : [exe, ...args];
  return execFileSync(command[0], command.slice(1), { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });
}

/** The highest `vX.Y.Z` tag reachable from HEAD, as `X.Y.Z`. */
export function latestReleaseVersion(): string | undefined {
  const versions = git(['tag', '--merged', 'HEAD', '--list', 'v*'])
    .split(/\r?\n/)
    .map((t) => t.trim())
    .filter((t) => /^v\d+\.\d+\.\d+$/.test(t))
    .map((t) => t.slice(1));
  versions.sort((a, b) => {
    const [x, y] = [parse(a, 'tag'), parse(b, 'tag')];
    return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
  });
  return versions.pop();
}

/** The non-merge commits after `v<version>` (all of them when there is no tag). */
export function commitsSince(version: string | undefined): CommitMessage[] {
  const range = version === undefined ? [] : [`v${version}..HEAD`];
  return git(['log', '--no-merges', '--format=%x1e%s%x1f%b', ...range])
    .split('\x1e')
    .filter((entry) => entry.trim())
    .map((entry) => {
      const [subject, body] = entry.split('\x1f');
      return { subject: subject.trim(), body: body ?? '' };
    });
}

/**
 * `node release-version.js --baseline <version> [--min-major <n>]`, run from
 * the repository root. `VERSION_OVERRIDE` in the environment replaces the
 * computation. Prints the result; under GitHub Actions also writes the step
 * outputs `release` (`true`/`false`) and `version`.
 */
export function main(argv: string[], env: NodeJS.ProcessEnv): void {
  const arg = (name: string) => {
    const i = argv.indexOf(name);
    return i === -1 ? undefined : argv[i + 1];
  };
  const baseline = arg('--baseline');
  if (!baseline) {
    throw new Error('--baseline <version> is required.');
  }
  const minMajor = arg('--min-major');

  const latestVersion = latestReleaseVersion();
  const version = computeReleaseVersion({
    baseline,
    latestVersion,
    commits: commitsSince(latestVersion),
    minMajorVersion: minMajor === undefined ? undefined : Number(minMajor),
    override: env.VERSION_OVERRIDE?.trim() || undefined,
  });

  console.log(
    version
      ? `Release version: ${version}`
      : `No releasable commits since v${latestVersion}: nothing to publish.`,
  );
  if (env.GITHUB_OUTPUT) {
    appendFileSync(env.GITHUB_OUTPUT, `release=${version ? 'true' : 'false'}\nversion=${version ?? ''}\n`);
  }
}

if (require.main === module) {
  main(process.argv.slice(2), process.env);
}
