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

/** The Java line used when a project sets no `javaVersion`. */
export const DEFAULT_JAVA_VERSION = '21';

/** The minimum Maven version the enforcer requires by default. */
export const DEFAULT_MIN_MAVEN_VERSION = '3.9';

// Maven plugins that run on every supported JDK (all of them require only
// Java 8 at runtime), so they are shared by every line.
const SHARED_PLUGIN_VERSIONS: Record<string, string> = {
  [MAVEN_COMPILER_PLUGIN]: '3.16.0',
  [MAVEN_SUREFIRE_PLUGIN]: '3.6.0',
  [MAVEN_FAILSAFE_PLUGIN]: '3.6.0',
  [MAVEN_JAR_PLUGIN]: '3.5.1',
  [MAVEN_ENFORCER_PLUGIN]: '3.6.3',
  [MAVEN_JAVADOC_PLUGIN]: '3.12.0',
  [MAVEN_SOURCE_PLUGIN]: '3.4.0',
  [VERSIONS_MAVEN_PLUGIN]: '2.22.0',
};

// Libraries whose current major needs Java 17: JUnit 6, Spring Boot 3+/4,
// Flyway 10+. The Java 8 line stays on the last major that supports it.
const MODERN_VERSIONS: Record<string, string> = {
  ...SHARED_PLUGIN_VERSIONS,
  [JUNIT_BOM]: '6.1.3',
  [SPRING_BOOT_BOM]: '4.1.1',
  [FLYWAY_MAVEN_PLUGIN]: '13.9.0',
};

/** Everything a generated build derives from its Java line. */
export interface JavaLineProfile {
  /** Canonical line id, as written in `javaVersion` (`1.8`, `17`, ...). */
  readonly line: string;
  /** `<properties>` that set the compiler level. */
  readonly compilerProperties: Record<string, string>;
  /** The enforcer's `requireJavaVersion` range. */
  readonly enforcerJavaRange: string;
  /** `actions/setup-java`'s `java-version` input. */
  readonly setupJavaVersion: string;
  /** Default exact versions, keyed by `groupId/artifactId`. */
  readonly versions: Record<string, string>;
  /** Newest Spring Boot major that runs on this line, if it is capped. */
  readonly maxSpringBootMajor?: number;
}

const JAVA_LINES: Record<string, JavaLineProfile> = {
  1.8: {
    line: '1.8',
    // javac 8 has no --release flag; source/target is the only option.
    compilerProperties: {
      'maven.compiler.source': '1.8',
      'maven.compiler.target': '1.8',
    },
    enforcerJavaRange: '[1.8,)',
    setupJavaVersion: '8',
    // Spring Boot 3+ needs Java 17.
    maxSpringBootMajor: 2,
    versions: {
      ...SHARED_PLUGIN_VERSIONS,
      [JUNIT_BOM]: '5.14.4',
      [SPRING_BOOT_BOM]: '2.7.18',
      [FLYWAY_MAVEN_PLUGIN]: '9.22.3',
    },
  },
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

const ALIASES: Record<string, string> = { 8: '1.8' };

/** The Java lines `javaVersion` accepts, in ascending order. */
export function supportedJavaVersions(): string[] {
  // Integer-like keys ('17') enumerate before '1.8', so sort explicitly.
  return Object.keys(JAVA_LINES).sort((a, b) => parseFloat(a) - parseFloat(b));
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
  const key = ALIASES[requested] ?? requested;
  const profile = JAVA_LINES[key];
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
