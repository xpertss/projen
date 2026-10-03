import { JavaMavenProject } from './java-maven-base';
import {
  JUNIT_BOM,
  MAVEN_FAILSAFE_PLUGIN,
  SPRING_BOOT_BOM,
  SPRING_BOOT_MAVEN_PLUGIN,
} from './java-versions';
import { MavenModule } from './maven/maven-module';
import { assertExactVersion } from './maven/maven-pom';
import { JavaSpringBootProjectOptions, MavenModuleOptions } from './options';

const REPACKAGE = { executions: [{ id: 'repackage', goals: ['repackage'] }] };

/**
 * Spring Boot on Maven, single- or multi-module, with no Docker, Flyway or
 * CDK - `JavaMavenProject` plus Spring Boot dependency management.
 *
 * - `spring-boot-dependencies` is imported as the first BOM, so starters and
 *   the libraries Boot manages (JUnit included) are added versionless.
 * - `spring-boot-maven-plugin` is versioned in `<pluginManagement>`. A
 *   single-module project repackages its root jar into an executable one.
 *   In a multi-module project only modules added with
 *   `addSpringBootModule()` are repackaged; `addModule()` modules stay plain
 *   jars (shared libraries, clients, ...).
 *
 * `JavaServiceProject` builds on this and adds Docker publishing, Flyway,
 * and a CDK deploy hook.
 */
export class JavaSpringBootProject extends JavaMavenProject {
  /** The Spring Boot version (BOM and Maven plugin). */
  public readonly springBootVersion: string;

  constructor(options: JavaSpringBootProjectOptions) {
    super(options);

    const version = options.springBootVersion ?? this.pinnedVersion(SPRING_BOOT_BOM);
    assertExactVersion(version, 'springBootVersion');
    const major = Number.parseInt(version.split('.')[0], 10);
    const maxMajor = this.maxSpringBootMajor();
    if (maxMajor !== undefined && major > maxMajor) {
      throw new Error(
        `Spring Boot ${version} does not run on javaVersion ${this.javaVersion} (the newest Spring Boot line for it is ${maxMajor}.x). Use a ${maxMajor}.x springBootVersion, or a newer javaVersion.`,
      );
    }
    this.springBootVersion = version;

    // Boot's BOM manages JUnit, so the base type's junit-bom would only
    // compete with it.
    this.pom.removeBom(JUNIT_BOM);
    this.pom.addBom(`${SPRING_BOOT_BOM}@${version}`);
    this.pom.addManagedPlugin(`${SPRING_BOOT_MAVEN_PLUGIN}@${version}`);
    // A repackaged jar no longer exposes its classes at the top level, so
    // failsafe tests against the compiled classes, as spring-boot-starter-
    // parent configures it.
    this.addPlugin(MAVEN_FAILSAFE_PLUGIN, {
      configuration: { classesDirectory: '${project.build.outputDirectory}' },
    });
  }

  /**
   * Adds a module that is a Spring Boot application: like `addModule()`, plus
   * `spring-boot-maven-plugin`'s `repackage`, which turns the module's jar
   * into an executable one.
   */
  public addSpringBootModule(options: MavenModuleOptions): MavenModule {
    const module = this.addModule(options);
    module.addPlugin(SPRING_BOOT_MAVEN_PLUGIN, REPACKAGE);
    return module;
  }

  public preSynthesize(): void {
    super.preSynthesize();
    if (this.modules.length === 0 && !this.pom.hasPlugin(SPRING_BOOT_MAVEN_PLUGIN)) {
      this.addPlugin(SPRING_BOOT_MAVEN_PLUGIN, REPACKAGE);
    }
  }
}
