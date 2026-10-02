import { Component, Project, java } from 'projen';
import { MavenPom, parseMavenSpec } from './maven-pom';
import { MavenModuleOptions } from '../options';

/**
 * One module of a Maven reactor: a `<dir>/pom.xml` owned by the root
 * project (not a projen subproject - there is still one `.projen/`, one
 * `.gitignore` and one `tasks.json`). Created by `JavaMavenProject.addModule()`.
 *
 * The module pom holds `<parent>`, `artifactId`, `name`, `description` and
 * versionless dependencies/plugins. Any version given to `addDependency`,
 * `addTestDependency` or `addPlugin` is moved into the parent pom's
 * `<dependencyManagement>`/`<pluginManagement>`, so every module that uses
 * an artifact gets the same version.
 */
export class MavenModule extends Component {
  /** Module directory, relative to the repo root. */
  public readonly dir: string;
  public readonly artifactId: string;
  /** The module's own `pom.xml`. */
  public readonly pom: MavenPom;

  private readonly parentPom: MavenPom;
  private readonly groupId: string;

  constructor(project: Project, parentPom: MavenPom, options: MavenModuleOptions) {
    super(project);
    if (!parentPom.groupId || !parentPom.version) {
      throw new Error('A module parent pom needs a groupId and version.');
    }
    this.dir = options.dir;
    this.artifactId = options.artifactId;
    this.parentPom = parentPom;
    this.groupId = parentPom.groupId;

    const depth = options.dir.split('/').length;
    this.pom = new MavenPom(project, {
      filePath: `${options.dir}/pom.xml`,
      artifactId: options.artifactId,
      packaging: options.packaging,
      name: options.name ?? options.artifactId,
      description: options.description,
      parent: {
        groupId: parentPom.groupId,
        artifactId: parentPom.artifactId,
        // Maven does not interpolate the <parent> block, so this is the
        // literal parent version, not ${project.version}.
        version: parentPom.version,
        relativePath: `${'../'.repeat(depth)}pom.xml`,
      },
    });
  }

  /**
   * Adds a compile-scope dependency. A version, if given, is pinned in the
   * parent's `<dependencyManagement>` and the module entry stays versionless.
   *
   * @param spec `groupId/artifactId[@version]`
   */
  public addDependency(spec: string): void {
    this.pom.addDependency(this.hoistDependency(spec));
  }

  /** Adds a `test`-scoped dependency; versions are hoisted like `addDependency`. */
  public addTestDependency(spec: string): void {
    this.pom.addTestDependency(this.hoistDependency(spec));
  }

  /**
   * Adds a build plugin. A version, if given, is pinned in the parent's
   * `<pluginManagement>` and the module entry stays versionless.
   */
  public addPlugin(spec: string, options: java.PluginOptions = {}): void {
    const c = parseMavenSpec(spec);
    if (c.version) {
      this.parentPom.addManagedPlugin(spec);
    }
    this.pom.addPlugin(`${c.groupId}/${c.artifactId}`, options);
  }

  /**
   * Depends on a sibling module. The dependency is versionless here; the
   * parent manages every module at `${project.version}`.
   *
   * @param scope Maven scope (`test`, `provided`, ...)
   * @default - compile scope
   */
  public addModuleDependency(module: MavenModule, scope?: string): void {
    if (module === this) {
      throw new Error(`Module "${this.artifactId}" cannot depend on itself.`);
    }
    this.pom.addDependency(`${this.groupId}/${module.artifactId}`, scope);
  }

  private hoistDependency(spec: string): string {
    const c = parseMavenSpec(spec);
    if (c.version) {
      this.parentPom.addManagedDependency(spec);
    }
    return `${c.groupId}/${c.artifactId}`;
  }
}
