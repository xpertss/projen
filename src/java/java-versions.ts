// Every Java-line-dependent value a generated Maven build uses lives in this
// file, grouped by Java line (F013 §4). Nothing else in `src/java` may
// hard-code a Java version or a default plugin/BOM version - adding a Java
// line is one new entry in JAVA_LINES. Versions are exact pins, verified
// against Maven Central (and, for plugins, run on the oldest JDK of the line
// they are listed for) when they were last bumped.

/** `groupId/artifactId` keys for the versions this package pins by default. */
export const MAVEN_COMPILER_PLUGIN = 'org.apache.maven.plugins/maven-compiler-plugin';
export const MAVEN_SUREFIRE_PLUGIN = 'org.apache.maven.plugins/maven-surefire-plugin';
export const MAVEN_FAILSAFE_PLUGIN = 'org.apache.maven.plugins/maven-failsafe-plugin';
export const MAVEN_JAR_PLUGIN = 'org.apache.maven.plugins/maven-jar-plugin';
export const MAVEN_ENFORCER_PLUGIN = 'org.apache.maven.plugins/maven-enforcer-plugin';
export const MAVEN_JAVADOC_PLUGIN = 'org.apache.maven.plugins/maven-javadoc-plugin';
export const MAVEN_SOURCE_PLUGIN = 'org.apache.maven.plugins/maven-source-plugin';
export const JUNIT_BOM = 'org.junit/junit-bom';
export const SPRING_BOOT_BOM = 'org.springframework.boot/spring-boot-dependencies';
export const SPRING_BOOT_MAVEN_PLUGIN = 'org.springframework.boot/spring-boot-maven-plugin';
export const FLYWAY_MAVEN_PLUGIN = 'org.flywaydb/flyway-maven-plugin';
export const VERSIONS_MAVEN_PLUGIN = 'org.codehaus.mojo/versions-maven-plugin';
export const EXEC_MAVEN_PLUGIN = 'org.codehaus.mojo/exec-maven-plugin';
// The SCIP code index (F025): the javac plugin, the CLI that merges its output,
// and the temporary patch for `ScipWriter` on Windows (F027; drop it, and raise
// the pins, once a scip-aggregator release contains the fix).
export const SCIP_JAVAC = 'org.scip-code/scip-javac';
export const SCIP_JAVA = 'org.scip-code/scip-java';
export const SCIP_AGGREGATOR_SHIM = 'org.xpertss/scip-aggregator-shim';

/** The Java line used when a project sets no `javaVersion`. */
export const DEFAULT_JAVA_VERSION = '21';

/** The minimum Maven version the enforcer requires by default. */
export const DEFAULT_MIN_MAVEN_VERSION = '3.9';

// Maven plugins that run on every supported JDK, so they are shared by every
// line.
const SHARED_PLUGIN_VERSIONS: Record<string, string> = {
  [MAVEN_COMPILER_PLUGIN]: '3.16.0',
  [MAVEN_SUREFIRE_PLUGIN]: '3.6.0',
  [MAVEN_FAILSAFE_PLUGIN]: '3.6.0',
  [MAVEN_JAR_PLUGIN]: '3.5.1',
  [MAVEN_ENFORCER_PLUGIN]: '3.6.3',
  [MAVEN_JAVADOC_PLUGIN]: '3.12.0',
  [MAVEN_SOURCE_PLUGIN]: '3.4.0',
  [VERSIONS_MAVEN_PLUGIN]: '2.22.0',
  [EXEC_MAVEN_PLUGIN]: '3.5.0',
  [SCIP_JAVAC]: '0.13.1',
  [SCIP_JAVA]: '0.13.1',
  [SCIP_AGGREGATOR_SHIM]: '0.13.1-1',
};

// Libraries whose current major needs Java 17: JUnit 6, Spring Boot 3+/4,
// Flyway 10+.
const MODERN_VERSIONS: Record<string, string> = {
  ...SHARED_PLUGIN_VERSIONS,
  [JUNIT_BOM]: '6.1.3',
  [SPRING_BOOT_BOM]: '4.1.1',
  [FLYWAY_MAVEN_PLUGIN]: '13.9.0',
};

/** Everything a generated build derives from its Java line. */
export interface JavaLineProfile {
  /** Canonical line id, as written in `javaVersion` (`17`, `21`, ...). */
  readonly line: string;
  /** `<properties>` that set the compiler level. */
  readonly compilerProperties: Record<string, string>;
  /** The enforcer's `requireJavaVersion` range. */
  readonly enforcerJavaRange: string;
  /** `actions/setup-java`'s `java-version` input. */
  readonly setupJavaVersion: string;
  /** Default exact versions, keyed by `groupId/artifactId`. */
  readonly versions: Record<string, string>;
}

const JAVA_LINES: Record<string, JavaLineProfile> = {
  ...modernLine('17'),
  ...modernLine('21'),
  ...modernLine('25'),
};

function modernLine(line: string): Record<string, JavaLineProfile> {
  return {
    [line]: {
      line,
      compilerProperties: { 'maven.compiler.release': line },
      enforcerJavaRange: `[${line},)`,
      setupJavaVersion: line,
      versions: MODERN_VERSIONS,
    },
  };
}

/** The Java lines `javaVersion` accepts, in ascending order. */
export function supportedJavaVersions(): string[] {
  return Object.keys(JAVA_LINES).sort((a, b) => Number.parseFloat(a) - Number.parseFloat(b));
}

/**
 * Resolves a `javaVersion` option to its line profile, applying
 * `versionOverrides` (`groupId/artifactId` -> exact version) on top of the
 * line's defaults. Throws, listing the supported lines, on an unknown line.
 */
export function resolveJavaLine(
  javaVersion: string | undefined,
  versionOverrides: Record<string, string> = {},
): JavaLineProfile {
  const requested = javaVersion ?? DEFAULT_JAVA_VERSION;
  const profile = JAVA_LINES[requested];
  if (!profile) {
    throw new Error(
      `Unsupported javaVersion "${requested}". Supported: ${supportedJavaVersions().join(', ')}.`,
    );
  }
  return {
    ...profile,
    versions: { ...profile.versions, ...versionOverrides },
  };
}
