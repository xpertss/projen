import { Component, Project, XmlFile, java } from 'projen';

const POM_XML_ATTRS = {
  '@xsi:schemaLocation':
    'http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd',
  '@xmlns': 'http://maven.apache.org/POM/4.0.0',
  '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
};

// Characters that make a version a range or a semver expression rather than
// one exact version. Maven ranges make builds non-reproducible, so a spec
// carrying one is rejected outright instead of being converted.
const NON_EXACT_VERSION = /[\^~*\[\](),<>\s]|^x$|\.x(\.|$)/i;

/** Parsed `groupId/artifactId[@version]` spec. */
export interface MavenCoordinates {
  readonly groupId: string;
  readonly artifactId: string;
  readonly version?: string;
}

/**
 * Parses `groupId/artifactId[@version]`. The version, when present, must be
 * one exact version - a range (`[1,2)`), a semver range (`^1`, `~1.2`), or a
 * wildcard throws, because a range resolves differently over time and makes
 * the build non-reproducible.
 */
export function parseMavenSpec(spec: string): MavenCoordinates {
  const at = spec.indexOf('@');
  const name = at === -1 ? spec : spec.slice(0, at);
  const version = at === -1 ? undefined : spec.slice(at + 1);
  const parts = name.split('/');
  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    throw new Error(
      `Invalid Maven spec "${spec}". Format is "<groupId>/<artifactId>[@<version>]", e.g. "org.yaml/snakeyaml@2.4".`,
    );
  }
  if (version !== undefined) {
    assertExactVersion(version, spec);
  }
  return { groupId: parts[0], artifactId: parts[1], version };
}

/** Throws unless `version` is one exact version (no range, no wildcard). */
export function assertExactVersion(version: string, context: string): void {
  if (!version || NON_EXACT_VERSION.test(version)) {
    throw new Error(
      `"${context}" uses version "${version}", which is not an exact version. Generated poms never contain version ranges: pin one exact version (e.g. "1.2.3"), or omit the version when a BOM manages it.`,
    );
  }
}

/** Options for `MavenPom`. */
export interface MavenPomOptions {
  /**
   * Path of the pom, relative to the project root.
   * @default "pom.xml"
   */
  readonly filePath?: string;

  /**
   * `groupId`. Omit in a module pom to inherit it from `<parent>`.
   * @default - inherited from the parent
   */
  readonly groupId?: string;

  readonly artifactId: string;

  /**
   * `version`. Omit in a module pom to inherit it from `<parent>`.
   * @default - inherited from the parent
   */
  readonly version?: string;

  /** @default "jar" */
  readonly packaging?: string;

  /** @default - none */
  readonly name?: string;

  /** @default - none */
  readonly description?: string;

  /** @default - none */
  readonly url?: string;

  /** @default - no parent */
  readonly parent?: java.ParentPom;
}

interface DependencyEntry {
  readonly coords: MavenCoordinates;
  readonly scope?: string;
  readonly type?: string;
}

interface PluginEntry {
  readonly coords: MavenCoordinates;
  readonly options: java.PluginOptions;
}

function key(c: MavenCoordinates): string {
  return `${c.groupId}/${c.artifactId}`;
}

/**
 * A `pom.xml` written by this package (rather than projen's `java.Pom`).
 *
 * Supports `<modules>`, `<dependencyManagement>` (including BOM imports),
 * `<pluginManagement>`, and versionless dependencies/plugins - what a Maven
 * reactor needs and `java.Pom` cannot express. Every version it writes is
 * exact; a spec carrying a range throws. Plugin executions render one
 * `<goals>` element per execution (projen's `java.Pom` repeats `<goals>`,
 * which Maven 3.9 rejects as non-parseable).
 *
 * Adding the same `groupId/artifactId` twice merges: a later version
 * replaces an earlier one only if the earlier had none (two different
 * versions throw), and plugin options are merged - `configuration` shallowly,
 * `executions` and `dependencies` appended.
 */
export class MavenPom extends Component {
  /** Path of the pom, relative to the project root. */
  public readonly filePath: string;
  public readonly groupId?: string;
  public readonly artifactId: string;
  public readonly version?: string;
  public readonly name?: string;
  public readonly description?: string;
  public readonly url?: string;
  public readonly parent?: java.ParentPom;

  /** Maven packaging (`jar`, `pom`, ...). */
  public packaging: string;

  /**
   * When true, the versions of `<plugins>` entries are written into
   * `<pluginManagement>` and the `<plugins>` entries stay versionless - the
   * shape a reactor parent wants, so modules can redeclare a plugin without
   * repeating its version.
   */
  public managePluginVersions = false;

  private readonly properties: Record<string, string> = {};
  private readonly modules: string[] = [];
  private readonly boms: MavenCoordinates[] = [];
  private readonly managedDeps = new Map<string, DependencyEntry>();
  private readonly deps = new Map<string, DependencyEntry>();
  private readonly managedPlugins = new Map<string, PluginEntry>();
  private readonly plugins = new Map<string, PluginEntry>();
  private readonly repositories: java.MavenRepository[] = [];
  private readonly pluginRepositories: java.MavenRepository[] = [];

  constructor(project: Project, options: MavenPomOptions) {
    super(project);
    this.filePath = options.filePath ?? 'pom.xml';
    this.groupId = options.groupId;
    this.artifactId = options.artifactId;
    this.version = options.version;
    this.packaging = options.packaging ?? 'jar';
    this.name = options.name;
    this.description = options.description;
    this.url = options.url;
    this.parent = options.parent;
    if (this.version !== undefined) {
      assertExactVersion(this.version, `${this.artifactId} version`);
    }

    new XmlFile(project, this.filePath, { obj: () => this.synthPom() });
  }

  /** Sets a `<properties>` entry. */
  public addProperty(name: string, value: string): void {
    this.properties[name] = value;
  }

  /** Adds a `<module>` (a path relative to this pom's directory). */
  public addModule(path: string): void {
    if (!this.modules.includes(path)) {
      this.modules.push(path);
    }
  }

  /**
   * Imports a BOM into `<dependencyManagement>` (`type=pom`,
   * `scope=import`). BOMs are written in the order added, before every other
   * managed dependency.
   *
   * @param spec `groupId/artifactId@version` - the version is required
   */
  public addBom(spec: string): void {
    const coords = parseMavenSpec(spec);
    if (!coords.version) {
      throw new Error(`BOM "${spec}" needs a version: a BOM import cannot be versionless.`);
    }
    const existing = this.boms.findIndex((b) => key(b) === key(coords));
    if (existing !== -1) {
      this.boms[existing] = coords;
    } else {
      this.boms.push(coords);
    }
  }

  /** Removes a BOM import added by `addBom`, if present. */
  public removeBom(coordinates: string): void {
    const index = this.boms.findIndex((b) => key(b) === coordinates);
    if (index !== -1) {
      this.boms.splice(index, 1);
    }
  }

  /**
   * Pins a version in `<dependencyManagement>` without adding the
   * dependency itself.
   *
   * @param spec `groupId/artifactId@version` - the version is required
   */
  public addManagedDependency(spec: string): void {
    const coords = parseMavenSpec(spec);
    if (!coords.version) {
      throw new Error(`Managed dependency "${spec}" needs a version.`);
    }
    this.mergeDependency(this.managedDeps, { coords }, 'dependencyManagement');
  }

  /**
   * Adds a dependency (compile scope unless `scope` is given).
   *
   * @param spec `groupId/artifactId[@version]` - omit the version when a BOM
   * or the parent's `<dependencyManagement>` manages it
   * @param scope Maven scope (`test`, `provided`, `runtime`, ...)
   */
  public addDependency(spec: string, scope?: string): void {
    this.mergeDependency(
      this.deps,
      { coords: parseMavenSpec(spec), scope },
      'dependencies',
    );
  }

  /** Adds a `test`-scoped dependency. */
  public addTestDependency(spec: string): void {
    this.addDependency(spec, 'test');
  }

  /**
   * Adds a build plugin to `<build><plugins>`.
   *
   * @param spec `groupId/artifactId[@version]` - omit the version when
   * `<pluginManagement>` (here or in the parent) manages it
   */
  public addPlugin(spec: string, options: java.PluginOptions = {}): void {
    this.mergePlugin(this.plugins, parseMavenSpec(spec), options);
  }

  /**
   * Adds a plugin to `<build><pluginManagement>` only: it pins the version
   * (and optional default configuration) for this pom and its modules
   * without running the plugin here.
   */
  public addManagedPlugin(spec: string, options: java.PluginOptions = {}): void {
    this.mergePlugin(this.managedPlugins, parseMavenSpec(spec), options);
  }

  /** True if a plugin with these `groupId/artifactId` coordinates is in `<plugins>`. */
  public hasPlugin(coordinates: string): boolean {
    return this.plugins.has(coordinates);
  }

  /** Adds a `<repository>`. */
  public addRepository(repository: java.MavenRepository): void {
    this.repositories.push(repository);
  }

  /** Adds a `<pluginRepository>`. */
  public addPluginRepository(repository: java.MavenRepository): void {
    this.pluginRepositories.push(repository);
  }

  private mergeDependency(
    target: Map<string, DependencyEntry>,
    entry: DependencyEntry,
    section: string,
  ): void {
    const k = key(entry.coords);
    const existing = target.get(k);
    if (!existing) {
      target.set(k, entry);
      return;
    }
    const version = mergeVersion(existing.coords, entry.coords, section);
    target.set(k, {
      coords: { ...entry.coords, version },
      scope: entry.scope ?? existing.scope,
      type: entry.type ?? existing.type,
    });
  }

  private mergePlugin(
    target: Map<string, PluginEntry>,
    coords: MavenCoordinates,
    options: java.PluginOptions,
  ): void {
    const k = key(coords);
    const existing = target.get(k);
    if (!existing) {
      target.set(k, { coords, options });
      return;
    }
    const version = mergeVersion(existing.coords, coords, 'plugins');
    const executions = [...(existing.options.executions ?? [])];
    for (const e of options.executions ?? []) {
      const i = executions.findIndex((x) => x.id === e.id);
      if (i === -1) {
        executions.push(e);
      } else {
        executions[i] = e;
      }
    }
    target.set(k, {
      coords: { ...coords, version },
      options: {
        configuration:
          existing.options.configuration || options.configuration
            ? { ...existing.options.configuration, ...options.configuration }
            : undefined,
        executions: executions.length ? executions : undefined,
        dependencies: [
          ...(existing.options.dependencies ?? []),
          ...(options.dependencies ?? []),
        ],
      },
    });
  }

  private synthPom(): any {
    const managedPlugins = new Map(this.managedPlugins);
    const plugins: any[] = [];
    for (const p of this.plugins.values()) {
      if (this.managePluginVersions && p.coords.version) {
        const k = key(p.coords);
        if (!managedPlugins.has(k)) {
          managedPlugins.set(k, { coords: p.coords, options: {} });
        }
        plugins.push(renderPlugin({ ...p.coords, version: undefined }, p.options));
      } else {
        plugins.push(renderPlugin(p.coords, p.options));
      }
    }

    const managed = [
      ...this.boms.map((b) => ({ ...renderCoords(b), type: 'pom', scope: 'import' })),
      ...[...this.managedDeps.values()].map(renderDependency),
    ];

    const pluginManagement = [...managedPlugins.values()].map((p) =>
      renderPlugin(p.coords, p.options),
    );

    // JSON round-trip drops every `undefined` field, so absent sections are
    // omitted rather than written as empty elements.
    return JSON.parse(JSON.stringify({
      project: {
        ...POM_XML_ATTRS,
        modelVersion: '4.0.0',
        parent: this.parent,
        groupId: this.groupId,
        artifactId: this.artifactId,
        version: this.version,
        // `jar` is Maven's default and is left implicit.
        packaging: this.packaging === 'jar' ? undefined : this.packaging,
        name: this.name,
        description: this.description,
        url: this.url,
        modules: this.modules.length ? { module: this.modules } : undefined,
        properties: Object.keys(this.properties).length ? this.properties : undefined,
        repositories: this.repositories.length
          ? { repository: this.repositories }
          : undefined,
        pluginRepositories: this.pluginRepositories.length
          ? { pluginRepository: this.pluginRepositories }
          : undefined,
        dependencyManagement: managed.length
          ? { dependencies: { dependency: managed } }
          : undefined,
        dependencies: this.deps.size
          ? { dependency: [...this.deps.values()].map(renderDependency) }
          : undefined,
        build:
          plugins.length || pluginManagement.length
            ? {
              pluginManagement: pluginManagement.length
                ? { plugins: { plugin: pluginManagement } }
                : undefined,
              plugins: plugins.length ? { plugin: plugins } : undefined,
            }
            : undefined,
      },
    }));
  }
}

function mergeVersion(
  existing: MavenCoordinates,
  added: MavenCoordinates,
  section: string,
): string | undefined {
  if (existing.version && added.version && existing.version !== added.version) {
    throw new Error(
      `${key(added)} is pinned at two different versions in ${section} (${existing.version} and ${added.version}). Pin it once.`,
    );
  }
  return added.version ?? existing.version;
}

function renderCoords(c: MavenCoordinates): any {
  return { groupId: c.groupId, artifactId: c.artifactId, version: c.version };
}

function renderDependency(d: DependencyEntry): any {
  return { ...renderCoords(d.coords), type: d.type, scope: d.scope };
}

function renderPlugin(c: MavenCoordinates, options: java.PluginOptions): any {
  const deps = (options.dependencies ?? []).map((d) => renderCoords(parseMavenSpec(d)));
  return {
    ...renderCoords(c),
    configuration: options.configuration,
    dependencies: deps.length ? { dependency: deps } : undefined,
    executions: options.executions?.length
      ? {
        execution: options.executions.map((e) => ({
          id: e.id,
          phase: e.phase,
          // One <goals> holding every <goal> - not one <goals> per goal.
          goals: { goal: e.goals },
          configuration: e.configuration,
        })),
      }
      : undefined,
  };
}
