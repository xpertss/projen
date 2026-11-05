import { MavenCentralPublish } from './components/maven-central-publish';
import { JavaMavenProject } from './java-maven-base';
import {
  CENTRAL_PUBLISHING_PLUGIN,
  FLATTEN_MAVEN_PLUGIN,
  MAVEN_GPG_PLUGIN,
  MAVEN_JAVADOC_PLUGIN,
  MAVEN_SOURCE_PLUGIN,
} from './java-versions';
import { JavaLibraryProjectOptions } from './options';

const DEFAULT_VERSION = '0.1.0';

/**
 * Reusable Java library, published to Maven Central from GitHub Actions.
 *
 * The pom's version is `${revision}`, set to `<version>-SNAPSHOT`: the release
 * version is computed from the commits when the publish workflow runs and is
 * never committed. The sources jar, javadoc jar, GPG signatures and the
 * Central upload belong to a `release` profile that only `-P release` turns
 * on, so an ordinary build neither builds javadoc nor signs nor uploads. In a
 * reactor every module inherits the profile and the publishing plugin, which
 * is declared once in the root pom and uploads the whole reactor as one bundle.
 */
export class JavaLibraryProject extends JavaMavenProject {
  constructor(options: JavaLibraryProjectOptions) {
    super(libraryBaseOptions(options));

    const baseline = options.version ?? DEFAULT_VERSION;
    this.pom.addProperty('revision', `${baseline}-SNAPSHOT`);
    this.addGitIgnore('.flattened-pom.xml');

    const spdx = options.license ?? 'MIT';
    this.pom.addLicense(spdx, `https://spdx.org/licenses/${spdx}.html`);
    for (const developer of options.developers ?? []) {
      this.pom.addDeveloper(developer);
    }
    const repository = options.url ? githubRepository(options.url) : undefined;
    if (repository) {
      this.pom.setScm(
        `https://github.com/${repository}`,
        `scm:git:git://github.com/${repository}.git`,
        `scm:git:ssh://git@github.com/${repository}.git`,
      );
    }

    const pin = (coordinates: string) => `${coordinates}@${this.pinnedVersion(coordinates)}`;
    this.pom.addProfile({
      id: 'release',
      // Defaults for `mvn deploy -P release`; the publish workflow overrides
      // both with -D.
      properties: { autoPublish: 'true', waitUntil: 'validated' },
      plugins: [
        {
          spec: pin(MAVEN_SOURCE_PLUGIN),
          options: { executions: [{ id: 'attach-sources', goals: ['jar-no-fork'] }] },
        },
        {
          spec: pin(MAVEN_JAVADOC_PLUGIN),
          options: { executions: [{ id: 'attach-javadocs', goals: ['jar'] }] },
        },
        {
          // Writes the concrete version into the pom that is installed and
          // deployed (Maven 3 deploys `${revision}` unresolved otherwise).
          spec: pin(FLATTEN_MAVEN_PLUGIN),
          options: {
            configuration: { updatePomFile: true, flattenMode: 'resolveCiFriendliesOnly' },
            executions: [
              { id: 'flatten', phase: 'process-resources', goals: ['flatten'] },
              { id: 'flatten-clean', phase: 'clean', goals: ['clean'] },
            ],
          },
        },
        {
          // Reads the passphrase from MAVEN_GPG_PASSPHRASE, never from a file.
          spec: pin(MAVEN_GPG_PLUGIN),
          options: {
            configuration: { gpgArguments: { arg: ['--pinentry-mode', 'loopback'] } },
            executions: [{ id: 'sign-artifacts', phase: 'verify', goals: ['sign'] }],
          },
        },
        {
          spec: pin(CENTRAL_PUBLISHING_PLUGIN),
          extensions: true,
          options: { configuration: { publishingServerId: 'central' } },
        },
      ],
    });

    new MavenCentralPublish(this, {
      version: baseline,
      minMajorVersion: options.minMajorVersion,
    });
  }
}

/**
 * Checks what Maven Central requires of the pom, and gives the base the
 * `${revision}` version. `projen new` cannot pass a list of developers, so
 * while it scaffolds the project (it leaves its `__new__` marker in the
 * options) the checks wait for the first `npx projen`.
 */
function libraryBaseOptions(options: JavaLibraryProjectOptions): JavaLibraryProjectOptions {
  const baseline = options.version ?? DEFAULT_VERSION;
  if (!/^\d+\.\d+\.\d+$/.test(baseline)) {
    throw new Error(`JavaLibraryProject: version "${baseline}" must be like 1.2.3; the release version is computed from it.`);
  }
  if (!(options as any).__new__) {
    const missing = [
      !options.description && 'description',
      !options.url && 'url',
      !options.developers?.length && 'developers',
    ].filter(Boolean);
    if (missing.length) {
      throw new Error(
        `JavaLibraryProject: Maven Central requires the pom to carry ${missing.join(', ')}. Set ${missing.length > 1 ? 'them' : 'it'} in .projenrc.ts.`,
      );
    }
    if (!githubRepository(options.url!)) {
      throw new Error(
        `JavaLibraryProject: url "${options.url}" must be the GitHub repository, https://github.com/<owner>/<repo>, because the pom's <scm> is derived from it.`,
      );
    }
  }
  return { ...options, version: '${revision}' };
}

/** `owner/repo` of a `https://github.com/owner/repo[.git]` URL. */
function githubRepository(url: string): string | undefined {
  return /^https:\/\/github\.com\/([^/\s]+\/[^/\s]+?)(?:\.git)?\/?$/.exec(url)?.[1];
}
