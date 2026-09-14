# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppRuntimeScaffold <a name="AppRuntimeScaffold" id="@xpertss/projen-types.AppRuntimeScaffold"></a>

Full TypeScript application source structure (handlers/business logic), layered on top of `CdkTypescriptProject`'s pure-infra scaffold.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.AppRuntimeScaffold.Initializer"></a>

```typescript
import { AppRuntimeScaffold } from '@xpertss/projen-types'

new AppRuntimeScaffold(project: NodeProject, appEntryPoint?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.Initializer.parameter.project">project</a></code> | <code>projen.javascript.NodeProject</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.Initializer.parameter.appEntryPoint">appEntryPoint</a></code> | <code>string</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.AppRuntimeScaffold.Initializer.parameter.project"></a>

- *Type:* projen.javascript.NodeProject

---

##### `appEntryPoint`<sup>Optional</sup> <a name="appEntryPoint" id="@xpertss/projen-types.AppRuntimeScaffold.Initializer.parameter.appEntryPoint"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.AppRuntimeScaffold.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.AppRuntimeScaffold.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.AppRuntimeScaffold.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.AppRuntimeScaffold.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.AppRuntimeScaffold.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.AppRuntimeScaffold.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.AppRuntimeScaffold.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.AppRuntimeScaffold.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.AppRuntimeScaffold.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.AppRuntimeScaffold.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.AppRuntimeScaffold.isConstruct"></a>

```typescript
import { AppRuntimeScaffold } from '@xpertss/projen-types'

AppRuntimeScaffold.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.AppRuntimeScaffold.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.AppRuntimeScaffold.isComponent"></a>

```typescript
import { AppRuntimeScaffold } from '@xpertss/projen-types'

AppRuntimeScaffold.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.AppRuntimeScaffold.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.AppRuntimeScaffold.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.AppRuntimeScaffold.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.AppRuntimeScaffold.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### CdkAppProject <a name="CdkAppProject" id="@xpertss/projen-types.CdkAppProject"></a>

Full TypeScript service application running behind API Gateway (or similar), with the infra to support it - `CdkInfraProject` plus application source, a database, and an app-level build/test workflow.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.CdkAppProject.Initializer"></a>

```typescript
import { CdkAppProject } from '@xpertss/projen-types'

new CdkAppProject(options: CdkAppProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkAppProject.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.CdkAppProjectOptions">CdkAppProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.CdkAppProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.CdkAppProjectOptions">CdkAppProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.CdkAppProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@xpertss/projen-types.CdkAppProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@xpertss/projen-types.CdkAppProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.CdkAppProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.CdkAppProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.CdkAppProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@xpertss/projen-types.CdkAppProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@xpertss/projen-types.CdkAppProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@xpertss/projen-types.CdkAppProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@xpertss/projen-types.CdkAppProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@xpertss/projen-types.CdkAppProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@xpertss/projen-types.CdkAppProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@xpertss/projen-types.CdkAppProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkAppProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@xpertss/projen-types.CdkAppProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@xpertss/projen-types.CdkAppProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@xpertss/projen-types.CdkAppProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.CdkAppProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.CdkAppProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@xpertss/projen-types.CdkAppProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkAppProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@xpertss/projen-types.CdkAppProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `pnpm projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@xpertss/projen-types.CdkAppProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@xpertss/projen-types.CdkAppProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "projectCreation()" for all components, only if the project is being created for the first time
6. Call "postSynthesize()" for all components of this project
7. Call "this.postSynthesize()"
8. Call "postProjectCreation()" for all components, only if the project is being created for the first time

##### `tryFindFile` <a name="tryFindFile" id="@xpertss/projen-types.CdkAppProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.CdkAppProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@xpertss/projen-types.CdkAppProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.CdkAppProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@xpertss/projen-types.CdkAppProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.CdkAppProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@xpertss/projen-types.CdkAppProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@xpertss/projen-types.CdkAppProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@xpertss/projen-types.CdkAppProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkAppProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDeps` <a name="addDeps" id="@xpertss/projen-types.CdkAppProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkAppProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@xpertss/projen-types.CdkAppProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkAppProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@xpertss/projen-types.CdkAppProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@xpertss/projen-types.CdkAppProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@xpertss/projen-types.CdkAppProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@xpertss/projen-types.CdkAppProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@xpertss/projen-types.CdkAppProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkAppProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@xpertss/projen-types.CdkAppProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@xpertss/projen-types.CdkAppProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### `removeScript` <a name="removeScript" id="@xpertss/projen-types.CdkAppProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkAppProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@xpertss/projen-types.CdkAppProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.CdkAppProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@xpertss/projen-types.CdkAppProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkAppProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@xpertss/projen-types.CdkAppProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.CdkAppProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.CdkAppProject.isConstruct"></a>

```typescript
import { CdkAppProject } from '@xpertss/projen-types'

CdkAppProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.CdkAppProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@xpertss/projen-types.CdkAppProject.isProject"></a>

```typescript
import { CdkAppProject } from '@xpertss/projen-types'

CdkAppProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.CdkAppProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@xpertss/projen-types.CdkAppProject.of"></a>

```typescript
import { CdkAppProject } from '@xpertss/projen-types'

CdkAppProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@xpertss/projen-types.CdkAppProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.runner">runner</a></code> | <code>projen.typescript.TypeScriptRunner</code> | The TypeScript runner used for executing TypeScript files. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.cdkConfig">cdkConfig</a></code> | <code>projen.awscdk.CdkConfig</code> | cdk.json configuration. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.cdkTasks">cdkTasks</a></code> | <code>projen.awscdk.CdkTasks</code> | Common CDK tasks. |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.CdkAppProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@xpertss/projen-types.CdkAppProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@xpertss/projen-types.CdkAppProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@xpertss/projen-types.CdkAppProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@xpertss/projen-types.CdkAppProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkAppProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@xpertss/projen-types.CdkAppProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@xpertss/projen-types.CdkAppProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@xpertss/projen-types.CdkAppProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@xpertss/projen-types.CdkAppProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@xpertss/projen-types.CdkAppProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkAppProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@xpertss/projen-types.CdkAppProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@xpertss/projen-types.CdkAppProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@xpertss/projen-types.CdkAppProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@xpertss/projen-types.CdkAppProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@xpertss/projen-types.CdkAppProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@xpertss/projen-types.CdkAppProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@xpertss/projen-types.CdkAppProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@xpertss/projen-types.CdkAppProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@xpertss/projen-types.CdkAppProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@xpertss/projen-types.CdkAppProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@xpertss/projen-types.CdkAppProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@xpertss/projen-types.CdkAppProject.property.initProject"></a>

- *Deprecated:* use the `initProject` argument passed to `Component.projectCreation()` instead.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@xpertss/projen-types.CdkAppProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@xpertss/projen-types.CdkAppProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@xpertss/projen-types.CdkAppProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@xpertss/projen-types.CdkAppProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@xpertss/projen-types.CdkAppProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@xpertss/projen-types.CdkAppProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@xpertss/projen-types.CdkAppProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@xpertss/projen-types.CdkAppProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@xpertss/projen-types.CdkAppProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@xpertss/projen-types.CdkAppProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@xpertss/projen-types.CdkAppProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@xpertss/projen-types.CdkAppProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@xpertss/projen-types.CdkAppProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@xpertss/projen-types.CdkAppProject.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@xpertss/projen-types.CdkAppProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@xpertss/projen-types.CdkAppProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@xpertss/projen-types.CdkAppProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@xpertss/projen-types.CdkAppProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@xpertss/projen-types.CdkAppProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@xpertss/projen-types.CdkAppProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@xpertss/projen-types.CdkAppProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### `release`<sup>Optional</sup> <a name="release" id="@xpertss/projen-types.CdkAppProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@xpertss/projen-types.CdkAppProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@xpertss/projen-types.CdkAppProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@xpertss/projen-types.CdkAppProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `runner`<sup>Required</sup> <a name="runner" id="@xpertss/projen-types.CdkAppProject.property.runner"></a>

```typescript
public readonly runner: TypeScriptRunner;
```

- *Type:* projen.typescript.TypeScriptRunner

The TypeScript runner used for executing TypeScript files.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@xpertss/projen-types.CdkAppProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@xpertss/projen-types.CdkAppProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@xpertss/projen-types.CdkAppProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@xpertss/projen-types.CdkAppProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@xpertss/projen-types.CdkAppProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@xpertss/projen-types.CdkAppProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@xpertss/projen-types.CdkAppProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@xpertss/projen-types.CdkAppProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="@xpertss/projen-types.CdkAppProject.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="@xpertss/projen-types.CdkAppProject.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* projen.awscdk.CdkConfig

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@xpertss/projen-types.CdkAppProject.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="@xpertss/projen-types.CdkAppProject.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* projen.awscdk.CdkTasks

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@xpertss/projen-types.CdkAppProject.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@xpertss/projen-types.CdkAppProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@xpertss/projen-types.CdkAppProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@xpertss/projen-types.CdkAppProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### CdkDeployHook <a name="CdkDeployHook" id="@xpertss/projen-types.CdkDeployHook"></a>

Manual-dispatch workflow that invokes a downstream CDK deploy in a companion `CdkInfraProject`/`CdkAppProject` repo, using the same `ManualDeployWorkflow` contract those project types use for their own deploys - see the CDK spec's open question about sharing this contract.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.CdkDeployHook.Initializer"></a>

```typescript
import { CdkDeployHook } from '@xpertss/projen-types'

new CdkDeployHook(project: JavaProject, environments: (string | EnvironmentOptions)[], options?: CdkDeployHookOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.Initializer.parameter.project">project</a></code> | <code>projen.java.JavaProject</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.Initializer.parameter.environments">environments</a></code> | <code>string \| <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.CdkDeployHookOptions">CdkDeployHookOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.CdkDeployHook.Initializer.parameter.project"></a>

- *Type:* projen.java.JavaProject

---

##### `environments`<sup>Required</sup> <a name="environments" id="@xpertss/projen-types.CdkDeployHook.Initializer.parameter.environments"></a>

- *Type:* string | <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]

---

##### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.CdkDeployHook.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.CdkDeployHookOptions">CdkDeployHookOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.CdkDeployHook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.CdkDeployHook.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.CdkDeployHook.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.CdkDeployHook.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.CdkDeployHook.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.CdkDeployHook.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.CdkDeployHook.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.CdkDeployHook.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.CdkDeployHook.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.CdkDeployHook.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.CdkDeployHook.isConstruct"></a>

```typescript
import { CdkDeployHook } from '@xpertss/projen-types'

CdkDeployHook.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.CdkDeployHook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.CdkDeployHook.isComponent"></a>

```typescript
import { CdkDeployHook } from '@xpertss/projen-types'

CdkDeployHook.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.CdkDeployHook.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.CdkDeployHook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.CdkDeployHook.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### CdkInfraProject <a name="CdkInfraProject" id="@xpertss/projen-types.CdkInfraProject"></a>

Pure infrastructure CDK stacks - little or no application code (CloudFront, Route53, SQS, API Gateway, Cognito, ECR/ECS standing up externally-built images).

Reference example: SimulcastAVDelivery.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.CdkInfraProject.Initializer"></a>

```typescript
import { CdkInfraProject } from '@xpertss/projen-types'

new CdkInfraProject(options: CdkInfraProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions">CdkInfraProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.CdkInfraProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.CdkInfraProjectOptions">CdkInfraProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.CdkInfraProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.CdkInfraProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.CdkInfraProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@xpertss/projen-types.CdkInfraProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@xpertss/projen-types.CdkInfraProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@xpertss/projen-types.CdkInfraProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@xpertss/projen-types.CdkInfraProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@xpertss/projen-types.CdkInfraProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@xpertss/projen-types.CdkInfraProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@xpertss/projen-types.CdkInfraProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkInfraProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@xpertss/projen-types.CdkInfraProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@xpertss/projen-types.CdkInfraProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@xpertss/projen-types.CdkInfraProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.CdkInfraProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.CdkInfraProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@xpertss/projen-types.CdkInfraProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkInfraProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@xpertss/projen-types.CdkInfraProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `pnpm projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@xpertss/projen-types.CdkInfraProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@xpertss/projen-types.CdkInfraProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "projectCreation()" for all components, only if the project is being created for the first time
6. Call "postSynthesize()" for all components of this project
7. Call "this.postSynthesize()"
8. Call "postProjectCreation()" for all components, only if the project is being created for the first time

##### `tryFindFile` <a name="tryFindFile" id="@xpertss/projen-types.CdkInfraProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.CdkInfraProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@xpertss/projen-types.CdkInfraProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.CdkInfraProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@xpertss/projen-types.CdkInfraProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.CdkInfraProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@xpertss/projen-types.CdkInfraProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@xpertss/projen-types.CdkInfraProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@xpertss/projen-types.CdkInfraProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkInfraProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDeps` <a name="addDeps" id="@xpertss/projen-types.CdkInfraProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkInfraProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@xpertss/projen-types.CdkInfraProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkInfraProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@xpertss/projen-types.CdkInfraProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@xpertss/projen-types.CdkInfraProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@xpertss/projen-types.CdkInfraProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@xpertss/projen-types.CdkInfraProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@xpertss/projen-types.CdkInfraProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkInfraProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@xpertss/projen-types.CdkInfraProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@xpertss/projen-types.CdkInfraProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### `removeScript` <a name="removeScript" id="@xpertss/projen-types.CdkInfraProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkInfraProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@xpertss/projen-types.CdkInfraProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.CdkInfraProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@xpertss/projen-types.CdkInfraProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkInfraProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@xpertss/projen-types.CdkInfraProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.CdkInfraProject.isConstruct"></a>

```typescript
import { CdkInfraProject } from '@xpertss/projen-types'

CdkInfraProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.CdkInfraProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@xpertss/projen-types.CdkInfraProject.isProject"></a>

```typescript
import { CdkInfraProject } from '@xpertss/projen-types'

CdkInfraProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.CdkInfraProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@xpertss/projen-types.CdkInfraProject.of"></a>

```typescript
import { CdkInfraProject } from '@xpertss/projen-types'

CdkInfraProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@xpertss/projen-types.CdkInfraProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.runner">runner</a></code> | <code>projen.typescript.TypeScriptRunner</code> | The TypeScript runner used for executing TypeScript files. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.cdkConfig">cdkConfig</a></code> | <code>projen.awscdk.CdkConfig</code> | cdk.json configuration. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.cdkTasks">cdkTasks</a></code> | <code>projen.awscdk.CdkTasks</code> | Common CDK tasks. |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.CdkInfraProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@xpertss/projen-types.CdkInfraProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@xpertss/projen-types.CdkInfraProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@xpertss/projen-types.CdkInfraProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@xpertss/projen-types.CdkInfraProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkInfraProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@xpertss/projen-types.CdkInfraProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@xpertss/projen-types.CdkInfraProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@xpertss/projen-types.CdkInfraProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@xpertss/projen-types.CdkInfraProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@xpertss/projen-types.CdkInfraProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkInfraProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@xpertss/projen-types.CdkInfraProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@xpertss/projen-types.CdkInfraProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@xpertss/projen-types.CdkInfraProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@xpertss/projen-types.CdkInfraProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@xpertss/projen-types.CdkInfraProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@xpertss/projen-types.CdkInfraProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@xpertss/projen-types.CdkInfraProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@xpertss/projen-types.CdkInfraProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@xpertss/projen-types.CdkInfraProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@xpertss/projen-types.CdkInfraProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@xpertss/projen-types.CdkInfraProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@xpertss/projen-types.CdkInfraProject.property.initProject"></a>

- *Deprecated:* use the `initProject` argument passed to `Component.projectCreation()` instead.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@xpertss/projen-types.CdkInfraProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@xpertss/projen-types.CdkInfraProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@xpertss/projen-types.CdkInfraProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@xpertss/projen-types.CdkInfraProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@xpertss/projen-types.CdkInfraProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@xpertss/projen-types.CdkInfraProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@xpertss/projen-types.CdkInfraProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@xpertss/projen-types.CdkInfraProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@xpertss/projen-types.CdkInfraProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@xpertss/projen-types.CdkInfraProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@xpertss/projen-types.CdkInfraProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@xpertss/projen-types.CdkInfraProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@xpertss/projen-types.CdkInfraProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@xpertss/projen-types.CdkInfraProject.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@xpertss/projen-types.CdkInfraProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@xpertss/projen-types.CdkInfraProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@xpertss/projen-types.CdkInfraProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@xpertss/projen-types.CdkInfraProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@xpertss/projen-types.CdkInfraProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@xpertss/projen-types.CdkInfraProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@xpertss/projen-types.CdkInfraProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### `release`<sup>Optional</sup> <a name="release" id="@xpertss/projen-types.CdkInfraProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@xpertss/projen-types.CdkInfraProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@xpertss/projen-types.CdkInfraProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@xpertss/projen-types.CdkInfraProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `runner`<sup>Required</sup> <a name="runner" id="@xpertss/projen-types.CdkInfraProject.property.runner"></a>

```typescript
public readonly runner: TypeScriptRunner;
```

- *Type:* projen.typescript.TypeScriptRunner

The TypeScript runner used for executing TypeScript files.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@xpertss/projen-types.CdkInfraProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@xpertss/projen-types.CdkInfraProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@xpertss/projen-types.CdkInfraProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@xpertss/projen-types.CdkInfraProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@xpertss/projen-types.CdkInfraProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@xpertss/projen-types.CdkInfraProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@xpertss/projen-types.CdkInfraProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@xpertss/projen-types.CdkInfraProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="@xpertss/projen-types.CdkInfraProject.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="@xpertss/projen-types.CdkInfraProject.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* projen.awscdk.CdkConfig

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@xpertss/projen-types.CdkInfraProject.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="@xpertss/projen-types.CdkInfraProject.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* projen.awscdk.CdkTasks

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@xpertss/projen-types.CdkInfraProject.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@xpertss/projen-types.CdkInfraProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@xpertss/projen-types.CdkInfraProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@xpertss/projen-types.CdkInfraProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### CdkTypescriptProject <a name="CdkTypescriptProject" id="@xpertss/projen-types.CdkTypescriptProject"></a>

Shared CDK + TypeScript foundation for `CdkInfraProject` and `CdkAppProject`: standard app structure (via `AwsCdkTypeScriptApp`, `cdk.json`, `cdk synth`/`cdk diff` tasks), a PR-check build that hard-fails on projen drift (rather than self-mutating), and an optional `ManualDeployWorkflow` when `environments` is provided.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.CdkTypescriptProject.Initializer"></a>

```typescript
import { CdkTypescriptProject } from '@xpertss/projen-types'

new CdkTypescriptProject(options: CdkTypescriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.CdkTypescriptProjectOptions">CdkTypescriptProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.CdkTypescriptProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.CdkTypescriptProjectOptions">CdkTypescriptProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.CdkTypescriptProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.CdkTypescriptProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.CdkTypescriptProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@xpertss/projen-types.CdkTypescriptProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@xpertss/projen-types.CdkTypescriptProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@xpertss/projen-types.CdkTypescriptProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@xpertss/projen-types.CdkTypescriptProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@xpertss/projen-types.CdkTypescriptProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@xpertss/projen-types.CdkTypescriptProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@xpertss/projen-types.CdkTypescriptProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkTypescriptProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@xpertss/projen-types.CdkTypescriptProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@xpertss/projen-types.CdkTypescriptProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@xpertss/projen-types.CdkTypescriptProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.CdkTypescriptProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.CdkTypescriptProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@xpertss/projen-types.CdkTypescriptProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkTypescriptProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@xpertss/projen-types.CdkTypescriptProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `pnpm projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@xpertss/projen-types.CdkTypescriptProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@xpertss/projen-types.CdkTypescriptProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "projectCreation()" for all components, only if the project is being created for the first time
6. Call "postSynthesize()" for all components of this project
7. Call "this.postSynthesize()"
8. Call "postProjectCreation()" for all components, only if the project is being created for the first time

##### `tryFindFile` <a name="tryFindFile" id="@xpertss/projen-types.CdkTypescriptProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.CdkTypescriptProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@xpertss/projen-types.CdkTypescriptProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.CdkTypescriptProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@xpertss/projen-types.CdkTypescriptProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.CdkTypescriptProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@xpertss/projen-types.CdkTypescriptProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@xpertss/projen-types.CdkTypescriptProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@xpertss/projen-types.CdkTypescriptProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkTypescriptProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDeps` <a name="addDeps" id="@xpertss/projen-types.CdkTypescriptProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkTypescriptProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@xpertss/projen-types.CdkTypescriptProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkTypescriptProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@xpertss/projen-types.CdkTypescriptProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@xpertss/projen-types.CdkTypescriptProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@xpertss/projen-types.CdkTypescriptProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@xpertss/projen-types.CdkTypescriptProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@xpertss/projen-types.CdkTypescriptProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkTypescriptProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@xpertss/projen-types.CdkTypescriptProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@xpertss/projen-types.CdkTypescriptProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### `removeScript` <a name="removeScript" id="@xpertss/projen-types.CdkTypescriptProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkTypescriptProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@xpertss/projen-types.CdkTypescriptProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.CdkTypescriptProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@xpertss/projen-types.CdkTypescriptProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkTypescriptProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@xpertss/projen-types.CdkTypescriptProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.CdkTypescriptProject.isConstruct"></a>

```typescript
import { CdkTypescriptProject } from '@xpertss/projen-types'

CdkTypescriptProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.CdkTypescriptProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@xpertss/projen-types.CdkTypescriptProject.isProject"></a>

```typescript
import { CdkTypescriptProject } from '@xpertss/projen-types'

CdkTypescriptProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.CdkTypescriptProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@xpertss/projen-types.CdkTypescriptProject.of"></a>

```typescript
import { CdkTypescriptProject } from '@xpertss/projen-types'

CdkTypescriptProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@xpertss/projen-types.CdkTypescriptProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.runner">runner</a></code> | <code>projen.typescript.TypeScriptRunner</code> | The TypeScript runner used for executing TypeScript files. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.cdkConfig">cdkConfig</a></code> | <code>projen.awscdk.CdkConfig</code> | cdk.json configuration. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.cdkTasks">cdkTasks</a></code> | <code>projen.awscdk.CdkTasks</code> | Common CDK tasks. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.CdkTypescriptProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@xpertss/projen-types.CdkTypescriptProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@xpertss/projen-types.CdkTypescriptProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@xpertss/projen-types.CdkTypescriptProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@xpertss/projen-types.CdkTypescriptProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.CdkTypescriptProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@xpertss/projen-types.CdkTypescriptProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@xpertss/projen-types.CdkTypescriptProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@xpertss/projen-types.CdkTypescriptProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@xpertss/projen-types.CdkTypescriptProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@xpertss/projen-types.CdkTypescriptProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkTypescriptProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@xpertss/projen-types.CdkTypescriptProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@xpertss/projen-types.CdkTypescriptProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@xpertss/projen-types.CdkTypescriptProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@xpertss/projen-types.CdkTypescriptProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@xpertss/projen-types.CdkTypescriptProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@xpertss/projen-types.CdkTypescriptProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@xpertss/projen-types.CdkTypescriptProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@xpertss/projen-types.CdkTypescriptProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@xpertss/projen-types.CdkTypescriptProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@xpertss/projen-types.CdkTypescriptProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@xpertss/projen-types.CdkTypescriptProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@xpertss/projen-types.CdkTypescriptProject.property.initProject"></a>

- *Deprecated:* use the `initProject` argument passed to `Component.projectCreation()` instead.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@xpertss/projen-types.CdkTypescriptProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@xpertss/projen-types.CdkTypescriptProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@xpertss/projen-types.CdkTypescriptProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@xpertss/projen-types.CdkTypescriptProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@xpertss/projen-types.CdkTypescriptProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@xpertss/projen-types.CdkTypescriptProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@xpertss/projen-types.CdkTypescriptProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@xpertss/projen-types.CdkTypescriptProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@xpertss/projen-types.CdkTypescriptProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@xpertss/projen-types.CdkTypescriptProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@xpertss/projen-types.CdkTypescriptProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@xpertss/projen-types.CdkTypescriptProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@xpertss/projen-types.CdkTypescriptProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@xpertss/projen-types.CdkTypescriptProject.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@xpertss/projen-types.CdkTypescriptProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@xpertss/projen-types.CdkTypescriptProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@xpertss/projen-types.CdkTypescriptProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@xpertss/projen-types.CdkTypescriptProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@xpertss/projen-types.CdkTypescriptProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@xpertss/projen-types.CdkTypescriptProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@xpertss/projen-types.CdkTypescriptProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### `release`<sup>Optional</sup> <a name="release" id="@xpertss/projen-types.CdkTypescriptProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@xpertss/projen-types.CdkTypescriptProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@xpertss/projen-types.CdkTypescriptProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@xpertss/projen-types.CdkTypescriptProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `runner`<sup>Required</sup> <a name="runner" id="@xpertss/projen-types.CdkTypescriptProject.property.runner"></a>

```typescript
public readonly runner: TypeScriptRunner;
```

- *Type:* projen.typescript.TypeScriptRunner

The TypeScript runner used for executing TypeScript files.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@xpertss/projen-types.CdkTypescriptProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@xpertss/projen-types.CdkTypescriptProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@xpertss/projen-types.CdkTypescriptProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@xpertss/projen-types.CdkTypescriptProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@xpertss/projen-types.CdkTypescriptProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@xpertss/projen-types.CdkTypescriptProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@xpertss/projen-types.CdkTypescriptProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@xpertss/projen-types.CdkTypescriptProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="@xpertss/projen-types.CdkTypescriptProject.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="@xpertss/projen-types.CdkTypescriptProject.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* projen.awscdk.CdkConfig

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@xpertss/projen-types.CdkTypescriptProject.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="@xpertss/projen-types.CdkTypescriptProject.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* projen.awscdk.CdkTasks

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@xpertss/projen-types.CdkTypescriptProject.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@xpertss/projen-types.CdkTypescriptProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@xpertss/projen-types.CdkTypescriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### CodeIndexWorkflow <a name="CodeIndexWorkflow" id="@xpertss/projen-types.CodeIndexWorkflow"></a>

Generates a code index and publishes it to `.cai/` on checkin.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.CodeIndexWorkflow.Initializer"></a>

```typescript
import { CodeIndexWorkflow } from '@xpertss/projen-types'

new CodeIndexWorkflow(project: JavaProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.Initializer.parameter.project">project</a></code> | <code>projen.java.JavaProject</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.CodeIndexWorkflow.Initializer.parameter.project"></a>

- *Type:* projen.java.JavaProject

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.CodeIndexWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.CodeIndexWorkflow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.CodeIndexWorkflow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.CodeIndexWorkflow.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.CodeIndexWorkflow.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.CodeIndexWorkflow.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.CodeIndexWorkflow.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.CodeIndexWorkflow.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.CodeIndexWorkflow.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.CodeIndexWorkflow.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.CodeIndexWorkflow.isConstruct"></a>

```typescript
import { CodeIndexWorkflow } from '@xpertss/projen-types'

CodeIndexWorkflow.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.CodeIndexWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.CodeIndexWorkflow.isComponent"></a>

```typescript
import { CodeIndexWorkflow } from '@xpertss/projen-types'

CodeIndexWorkflow.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.CodeIndexWorkflow.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.CodeIndexWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.CodeIndexWorkflow.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### DatabaseComponent <a name="DatabaseComponent" id="@xpertss/projen-types.DatabaseComponent"></a>

DB provisioning construct + migration tooling wiring.

The migration tool
itself is left fully pluggable per the spec's open question - if
`migrationTool` is provided it's added as a dev dependency and left for
the consuming team to wire up; no opinionated default is imposed.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.DatabaseComponent.Initializer"></a>

```typescript
import { DatabaseComponent } from '@xpertss/projen-types'

new DatabaseComponent(project: NodeProject, options?: DatabaseOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.Initializer.parameter.project">project</a></code> | <code>projen.javascript.NodeProject</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.DatabaseOptions">DatabaseOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.DatabaseComponent.Initializer.parameter.project"></a>

- *Type:* projen.javascript.NodeProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.DatabaseComponent.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.DatabaseOptions">DatabaseOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.DatabaseComponent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.DatabaseComponent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.DatabaseComponent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.DatabaseComponent.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.DatabaseComponent.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.DatabaseComponent.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.DatabaseComponent.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.DatabaseComponent.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.DatabaseComponent.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.DatabaseComponent.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.DatabaseComponent.isConstruct"></a>

```typescript
import { DatabaseComponent } from '@xpertss/projen-types'

DatabaseComponent.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.DatabaseComponent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.DatabaseComponent.isComponent"></a>

```typescript
import { DatabaseComponent } from '@xpertss/projen-types'

DatabaseComponent.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.DatabaseComponent.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.DatabaseComponent.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.DatabaseComponent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.DatabaseComponent.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### DockerPublish <a name="DockerPublish" id="@xpertss/projen-types.DockerPublish"></a>

On-demand build+push of a Docker image, defaulting to Docker Hub.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.DockerPublish.Initializer"></a>

```typescript
import { DockerPublish } from '@xpertss/projen-types'

new DockerPublish(project: JavaProject, options?: DockerPublishOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.DockerPublish.Initializer.parameter.project">project</a></code> | <code>projen.java.JavaProject</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.DockerPublish.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.DockerPublishOptions">DockerPublishOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.DockerPublish.Initializer.parameter.project"></a>

- *Type:* projen.java.JavaProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.DockerPublish.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.DockerPublishOptions">DockerPublishOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.DockerPublish.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.DockerPublish.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.DockerPublish.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.DockerPublish.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.DockerPublish.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.DockerPublish.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.DockerPublish.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.DockerPublish.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.DockerPublish.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.DockerPublish.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.DockerPublish.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.DockerPublish.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.DockerPublish.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.DockerPublish.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.DockerPublish.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.DockerPublish.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.DockerPublish.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.DockerPublish.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.DockerPublish.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.DockerPublish.isConstruct"></a>

```typescript
import { DockerPublish } from '@xpertss/projen-types'

DockerPublish.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.DockerPublish.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.DockerPublish.isComponent"></a>

```typescript
import { DockerPublish } from '@xpertss/projen-types'

DockerPublish.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.DockerPublish.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.DockerPublish.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.DockerPublish.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.DockerPublish.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.DockerPublish.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### EcrEcsConstructs <a name="EcrEcsConstructs" id="@xpertss/projen-types.EcrEcsConstructs"></a>

Reusable construct helper for an ECR repo + Fargate ECS cluster/service standing up a container image.

`externalImageSource` controls whether the
service pulls an externally-published image (infra-only projects) or one
built from this project's own source (app projects).

#### Initializers <a name="Initializers" id="@xpertss/projen-types.EcrEcsConstructs.Initializer"></a>

```typescript
import { EcrEcsConstructs } from '@xpertss/projen-types'

new EcrEcsConstructs(project: Project, options?: EcrEcsOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.EcrEcsOptions">EcrEcsOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.EcrEcsConstructs.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.EcrEcsConstructs.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.EcrEcsOptions">EcrEcsOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.EcrEcsConstructs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.EcrEcsConstructs.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.EcrEcsConstructs.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.EcrEcsConstructs.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.EcrEcsConstructs.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.EcrEcsConstructs.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.EcrEcsConstructs.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.EcrEcsConstructs.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.EcrEcsConstructs.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.EcrEcsConstructs.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.EcrEcsConstructs.isConstruct"></a>

```typescript
import { EcrEcsConstructs } from '@xpertss/projen-types'

EcrEcsConstructs.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.EcrEcsConstructs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.EcrEcsConstructs.isComponent"></a>

```typescript
import { EcrEcsConstructs } from '@xpertss/projen-types'

EcrEcsConstructs.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.EcrEcsConstructs.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.EcrEcsConstructs.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.EcrEcsConstructs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.EcrEcsConstructs.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### EdgeNetworkingConstructs <a name="EdgeNetworkingConstructs" id="@xpertss/projen-types.EdgeNetworkingConstructs"></a>

Construct helpers for CloudFront/Route53/API Gateway/Cognito/SQS, scoped to whichever `edgeResources` the consuming project type opts into.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.EdgeNetworkingConstructs.Initializer"></a>

```typescript
import { EdgeNetworkingConstructs } from '@xpertss/projen-types'

new EdgeNetworkingConstructs(project: Project, resources: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.Initializer.parameter.resources">resources</a></code> | <code>string[]</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.EdgeNetworkingConstructs.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `resources`<sup>Required</sup> <a name="resources" id="@xpertss/projen-types.EdgeNetworkingConstructs.Initializer.parameter.resources"></a>

- *Type:* string[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.EdgeNetworkingConstructs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.EdgeNetworkingConstructs.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.EdgeNetworkingConstructs.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.EdgeNetworkingConstructs.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.EdgeNetworkingConstructs.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.EdgeNetworkingConstructs.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.EdgeNetworkingConstructs.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.EdgeNetworkingConstructs.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.EdgeNetworkingConstructs.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.EdgeNetworkingConstructs.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.EdgeNetworkingConstructs.isConstruct"></a>

```typescript
import { EdgeNetworkingConstructs } from '@xpertss/projen-types'

EdgeNetworkingConstructs.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.EdgeNetworkingConstructs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.EdgeNetworkingConstructs.isComponent"></a>

```typescript
import { EdgeNetworkingConstructs } from '@xpertss/projen-types'

EdgeNetworkingConstructs.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.EdgeNetworkingConstructs.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.EdgeNetworkingConstructs.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.EdgeNetworkingConstructs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.EdgeNetworkingConstructs.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### FlywayMigration <a name="FlywayMigration" id="@xpertss/projen-types.FlywayMigration"></a>

Adds Flyway config/dependencies + a migrations directory for DB migrations.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.FlywayMigration.Initializer"></a>

```typescript
import { FlywayMigration } from '@xpertss/projen-types'

new FlywayMigration(project: JavaProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.FlywayMigration.Initializer.parameter.project">project</a></code> | <code>projen.java.JavaProject</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.FlywayMigration.Initializer.parameter.project"></a>

- *Type:* projen.java.JavaProject

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.FlywayMigration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.FlywayMigration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.FlywayMigration.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.FlywayMigration.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.FlywayMigration.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.FlywayMigration.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.FlywayMigration.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.FlywayMigration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.FlywayMigration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.FlywayMigration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.FlywayMigration.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.FlywayMigration.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.FlywayMigration.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.FlywayMigration.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.FlywayMigration.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.FlywayMigration.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.FlywayMigration.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.FlywayMigration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.FlywayMigration.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.FlywayMigration.isConstruct"></a>

```typescript
import { FlywayMigration } from '@xpertss/projen-types'

FlywayMigration.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.FlywayMigration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.FlywayMigration.isComponent"></a>

```typescript
import { FlywayMigration } from '@xpertss/projen-types'

FlywayMigration.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.FlywayMigration.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.FlywayMigration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.FlywayMigration.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.FlywayMigration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.FlywayMigration.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### GitHubPackagesPublish <a name="GitHubPackagesPublish" id="@xpertss/projen-types.GitHubPackagesPublish"></a>

On-demand publish to GitHub Packages.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.GitHubPackagesPublish.Initializer"></a>

```typescript
import { GitHubPackagesPublish } from '@xpertss/projen-types'

new GitHubPackagesPublish(project: JavaProject, options?: GitHubPackagesPublishOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.Initializer.parameter.project">project</a></code> | <code>projen.java.JavaProject</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.GitHubPackagesPublishOptions">GitHubPackagesPublishOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.GitHubPackagesPublish.Initializer.parameter.project"></a>

- *Type:* projen.java.JavaProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.GitHubPackagesPublish.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.GitHubPackagesPublishOptions">GitHubPackagesPublishOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.GitHubPackagesPublish.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.GitHubPackagesPublish.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.GitHubPackagesPublish.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.GitHubPackagesPublish.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.GitHubPackagesPublish.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.GitHubPackagesPublish.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.GitHubPackagesPublish.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.GitHubPackagesPublish.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.GitHubPackagesPublish.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.GitHubPackagesPublish.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.GitHubPackagesPublish.isConstruct"></a>

```typescript
import { GitHubPackagesPublish } from '@xpertss/projen-types'

GitHubPackagesPublish.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.GitHubPackagesPublish.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.GitHubPackagesPublish.isComponent"></a>

```typescript
import { GitHubPackagesPublish } from '@xpertss/projen-types'

GitHubPackagesPublish.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.GitHubPackagesPublish.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.GitHubPackagesPublish.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.GitHubPackagesPublish.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### JavaAppProject <a name="JavaAppProject" id="@xpertss/projen-types.JavaAppProject"></a>

GUI/TUI/CLI Java application.

Publishes to GitHub Packages only -
explicitly excludes Maven Central, Docker, and CDK deploy hooks.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.JavaAppProject.Initializer"></a>

```typescript
import { JavaAppProject } from '@xpertss/projen-types'

new JavaAppProject(options: JavaAppProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaAppProject.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.JavaAppProjectOptions">JavaAppProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.JavaAppProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.JavaAppProjectOptions">JavaAppProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.JavaAppProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.addPlugin">addPlugin</a></code> | Adds a build plugin to the pom. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.addTestDependency">addTestDependency</a></code> | Adds a test dependency. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.JavaAppProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.JavaAppProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.JavaAppProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@xpertss/projen-types.JavaAppProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@xpertss/projen-types.JavaAppProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@xpertss/projen-types.JavaAppProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@xpertss/projen-types.JavaAppProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@xpertss/projen-types.JavaAppProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@xpertss/projen-types.JavaAppProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@xpertss/projen-types.JavaAppProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaAppProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@xpertss/projen-types.JavaAppProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@xpertss/projen-types.JavaAppProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@xpertss/projen-types.JavaAppProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.JavaAppProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.JavaAppProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@xpertss/projen-types.JavaAppProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaAppProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@xpertss/projen-types.JavaAppProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@xpertss/projen-types.JavaAppProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@xpertss/projen-types.JavaAppProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "projectCreation()" for all components, only if the project is being created for the first time
6. Call "postSynthesize()" for all components of this project
7. Call "this.postSynthesize()"
8. Call "postProjectCreation()" for all components, only if the project is being created for the first time

##### `tryFindFile` <a name="tryFindFile" id="@xpertss/projen-types.JavaAppProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaAppProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@xpertss/projen-types.JavaAppProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaAppProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@xpertss/projen-types.JavaAppProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaAppProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="@xpertss/projen-types.JavaAppProject.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaAppProject.addDependency.parameter.spec"></a>

- *Type:* string

Format `<groupId>/<artifactId>@<semver>`.

---

##### `addPlugin` <a name="addPlugin" id="@xpertss/projen-types.JavaAppProject.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): Dependency
```

Adds a build plugin to the pom.

The plug in is also added as a BUILD dep to the project.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaAppProject.addPlugin.parameter.spec"></a>

- *Type:* string

dependency spec (`group/artifact@version`).

---

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.JavaAppProject.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

plugin options.

---

##### `addTestDependency` <a name="addTestDependency" id="@xpertss/projen-types.JavaAppProject.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a test dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaAppProject.addTestDependency.parameter.spec"></a>

- *Type:* string

Format `<groupId>/<artifactId>@<semver>`.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.JavaAppProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.JavaAppProject.isConstruct"></a>

```typescript
import { JavaAppProject } from '@xpertss/projen-types'

JavaAppProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.JavaAppProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@xpertss/projen-types.JavaAppProject.isProject"></a>

```typescript
import { JavaAppProject } from '@xpertss/projen-types'

JavaAppProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.JavaAppProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@xpertss/projen-types.JavaAppProject.of"></a>

```typescript
import { JavaAppProject } from '@xpertss/projen-types'

JavaAppProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@xpertss/projen-types.JavaAppProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.compile">compile</a></code> | <code>projen.java.MavenCompile</code> | Compile component. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.distdir">distdir</a></code> | <code>string</code> | Maven artifact output directory. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.packaging">packaging</a></code> | <code>projen.java.MavenPackaging</code> | Packaging component. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.pom">pom</a></code> | <code>projen.java.Pom</code> | API for managing `pom.xml`. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.junit">junit</a></code> | <code>projen.java.Junit</code> | JUnit component. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.projenrc">projenrc</a></code> | <code>projen.java.Projenrc</code> | Projenrc component. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.buildVerifyWorkflow">buildVerifyWorkflow</a></code> | <code>projen.github.TaskWorkflow</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.upgradeTask">upgradeTask</a></code> | <code>projen.Task</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.JavaAppProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@xpertss/projen-types.JavaAppProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@xpertss/projen-types.JavaAppProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@xpertss/projen-types.JavaAppProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@xpertss/projen-types.JavaAppProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.JavaAppProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@xpertss/projen-types.JavaAppProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@xpertss/projen-types.JavaAppProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@xpertss/projen-types.JavaAppProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@xpertss/projen-types.JavaAppProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@xpertss/projen-types.JavaAppProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaAppProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@xpertss/projen-types.JavaAppProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@xpertss/projen-types.JavaAppProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@xpertss/projen-types.JavaAppProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@xpertss/projen-types.JavaAppProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@xpertss/projen-types.JavaAppProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@xpertss/projen-types.JavaAppProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@xpertss/projen-types.JavaAppProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@xpertss/projen-types.JavaAppProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@xpertss/projen-types.JavaAppProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@xpertss/projen-types.JavaAppProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@xpertss/projen-types.JavaAppProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@xpertss/projen-types.JavaAppProject.property.initProject"></a>

- *Deprecated:* use the `initProject` argument passed to `Component.projectCreation()` instead.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@xpertss/projen-types.JavaAppProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@xpertss/projen-types.JavaAppProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@xpertss/projen-types.JavaAppProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@xpertss/projen-types.JavaAppProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@xpertss/projen-types.JavaAppProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@xpertss/projen-types.JavaAppProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `compile`<sup>Required</sup> <a name="compile" id="@xpertss/projen-types.JavaAppProject.property.compile"></a>

```typescript
public readonly compile: MavenCompile;
```

- *Type:* projen.java.MavenCompile

Compile component.

---

##### `distdir`<sup>Required</sup> <a name="distdir" id="@xpertss/projen-types.JavaAppProject.property.distdir"></a>

```typescript
public readonly distdir: string;
```

- *Type:* string

Maven artifact output directory.

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="@xpertss/projen-types.JavaAppProject.property.packaging"></a>

```typescript
public readonly packaging: MavenPackaging;
```

- *Type:* projen.java.MavenPackaging

Packaging component.

---

##### `pom`<sup>Required</sup> <a name="pom" id="@xpertss/projen-types.JavaAppProject.property.pom"></a>

```typescript
public readonly pom: Pom;
```

- *Type:* projen.java.Pom

API for managing `pom.xml`.

---

##### `junit`<sup>Optional</sup> <a name="junit" id="@xpertss/projen-types.JavaAppProject.property.junit"></a>

```typescript
public readonly junit: Junit;
```

- *Type:* projen.java.Junit

JUnit component.

---

##### `projenrc`<sup>Optional</sup> <a name="projenrc" id="@xpertss/projen-types.JavaAppProject.property.projenrc"></a>

```typescript
public readonly projenrc: Projenrc;
```

- *Type:* projen.java.Projenrc

Projenrc component.

---

##### `buildVerifyWorkflow`<sup>Required</sup> <a name="buildVerifyWorkflow" id="@xpertss/projen-types.JavaAppProject.property.buildVerifyWorkflow"></a>

```typescript
public readonly buildVerifyWorkflow: TaskWorkflow;
```

- *Type:* projen.github.TaskWorkflow

---

##### `upgradeTask`<sup>Required</sup> <a name="upgradeTask" id="@xpertss/projen-types.JavaAppProject.property.upgradeTask"></a>

```typescript
public readonly upgradeTask: Task;
```

- *Type:* projen.Task

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@xpertss/projen-types.JavaAppProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### JavaLibraryProject <a name="JavaLibraryProject" id="@xpertss/projen-types.JavaLibraryProject"></a>

Reusable Java library, published to Maven Central.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.JavaLibraryProject.Initializer"></a>

```typescript
import { JavaLibraryProject } from '@xpertss/projen-types'

new JavaLibraryProject(options: JavaLibraryProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions">JavaLibraryProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.JavaLibraryProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.JavaLibraryProjectOptions">JavaLibraryProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addPlugin">addPlugin</a></code> | Adds a build plugin to the pom. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addTestDependency">addTestDependency</a></code> | Adds a test dependency. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.JavaLibraryProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.JavaLibraryProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.JavaLibraryProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@xpertss/projen-types.JavaLibraryProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@xpertss/projen-types.JavaLibraryProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@xpertss/projen-types.JavaLibraryProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@xpertss/projen-types.JavaLibraryProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@xpertss/projen-types.JavaLibraryProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@xpertss/projen-types.JavaLibraryProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@xpertss/projen-types.JavaLibraryProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaLibraryProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@xpertss/projen-types.JavaLibraryProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@xpertss/projen-types.JavaLibraryProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@xpertss/projen-types.JavaLibraryProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.JavaLibraryProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.JavaLibraryProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@xpertss/projen-types.JavaLibraryProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaLibraryProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@xpertss/projen-types.JavaLibraryProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@xpertss/projen-types.JavaLibraryProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@xpertss/projen-types.JavaLibraryProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "projectCreation()" for all components, only if the project is being created for the first time
6. Call "postSynthesize()" for all components of this project
7. Call "this.postSynthesize()"
8. Call "postProjectCreation()" for all components, only if the project is being created for the first time

##### `tryFindFile` <a name="tryFindFile" id="@xpertss/projen-types.JavaLibraryProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaLibraryProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@xpertss/projen-types.JavaLibraryProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaLibraryProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@xpertss/projen-types.JavaLibraryProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaLibraryProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="@xpertss/projen-types.JavaLibraryProject.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaLibraryProject.addDependency.parameter.spec"></a>

- *Type:* string

Format `<groupId>/<artifactId>@<semver>`.

---

##### `addPlugin` <a name="addPlugin" id="@xpertss/projen-types.JavaLibraryProject.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): Dependency
```

Adds a build plugin to the pom.

The plug in is also added as a BUILD dep to the project.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaLibraryProject.addPlugin.parameter.spec"></a>

- *Type:* string

dependency spec (`group/artifact@version`).

---

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.JavaLibraryProject.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

plugin options.

---

##### `addTestDependency` <a name="addTestDependency" id="@xpertss/projen-types.JavaLibraryProject.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a test dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaLibraryProject.addTestDependency.parameter.spec"></a>

- *Type:* string

Format `<groupId>/<artifactId>@<semver>`.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.JavaLibraryProject.isConstruct"></a>

```typescript
import { JavaLibraryProject } from '@xpertss/projen-types'

JavaLibraryProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.JavaLibraryProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@xpertss/projen-types.JavaLibraryProject.isProject"></a>

```typescript
import { JavaLibraryProject } from '@xpertss/projen-types'

JavaLibraryProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.JavaLibraryProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@xpertss/projen-types.JavaLibraryProject.of"></a>

```typescript
import { JavaLibraryProject } from '@xpertss/projen-types'

JavaLibraryProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@xpertss/projen-types.JavaLibraryProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.compile">compile</a></code> | <code>projen.java.MavenCompile</code> | Compile component. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.distdir">distdir</a></code> | <code>string</code> | Maven artifact output directory. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.packaging">packaging</a></code> | <code>projen.java.MavenPackaging</code> | Packaging component. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.pom">pom</a></code> | <code>projen.java.Pom</code> | API for managing `pom.xml`. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.junit">junit</a></code> | <code>projen.java.Junit</code> | JUnit component. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.projenrc">projenrc</a></code> | <code>projen.java.Projenrc</code> | Projenrc component. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.buildVerifyWorkflow">buildVerifyWorkflow</a></code> | <code>projen.github.TaskWorkflow</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.upgradeTask">upgradeTask</a></code> | <code>projen.Task</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.JavaLibraryProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@xpertss/projen-types.JavaLibraryProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@xpertss/projen-types.JavaLibraryProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@xpertss/projen-types.JavaLibraryProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@xpertss/projen-types.JavaLibraryProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.JavaLibraryProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@xpertss/projen-types.JavaLibraryProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@xpertss/projen-types.JavaLibraryProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@xpertss/projen-types.JavaLibraryProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@xpertss/projen-types.JavaLibraryProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@xpertss/projen-types.JavaLibraryProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaLibraryProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@xpertss/projen-types.JavaLibraryProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@xpertss/projen-types.JavaLibraryProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@xpertss/projen-types.JavaLibraryProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@xpertss/projen-types.JavaLibraryProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@xpertss/projen-types.JavaLibraryProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@xpertss/projen-types.JavaLibraryProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@xpertss/projen-types.JavaLibraryProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@xpertss/projen-types.JavaLibraryProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@xpertss/projen-types.JavaLibraryProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@xpertss/projen-types.JavaLibraryProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@xpertss/projen-types.JavaLibraryProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@xpertss/projen-types.JavaLibraryProject.property.initProject"></a>

- *Deprecated:* use the `initProject` argument passed to `Component.projectCreation()` instead.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@xpertss/projen-types.JavaLibraryProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@xpertss/projen-types.JavaLibraryProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@xpertss/projen-types.JavaLibraryProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@xpertss/projen-types.JavaLibraryProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@xpertss/projen-types.JavaLibraryProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@xpertss/projen-types.JavaLibraryProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `compile`<sup>Required</sup> <a name="compile" id="@xpertss/projen-types.JavaLibraryProject.property.compile"></a>

```typescript
public readonly compile: MavenCompile;
```

- *Type:* projen.java.MavenCompile

Compile component.

---

##### `distdir`<sup>Required</sup> <a name="distdir" id="@xpertss/projen-types.JavaLibraryProject.property.distdir"></a>

```typescript
public readonly distdir: string;
```

- *Type:* string

Maven artifact output directory.

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="@xpertss/projen-types.JavaLibraryProject.property.packaging"></a>

```typescript
public readonly packaging: MavenPackaging;
```

- *Type:* projen.java.MavenPackaging

Packaging component.

---

##### `pom`<sup>Required</sup> <a name="pom" id="@xpertss/projen-types.JavaLibraryProject.property.pom"></a>

```typescript
public readonly pom: Pom;
```

- *Type:* projen.java.Pom

API for managing `pom.xml`.

---

##### `junit`<sup>Optional</sup> <a name="junit" id="@xpertss/projen-types.JavaLibraryProject.property.junit"></a>

```typescript
public readonly junit: Junit;
```

- *Type:* projen.java.Junit

JUnit component.

---

##### `projenrc`<sup>Optional</sup> <a name="projenrc" id="@xpertss/projen-types.JavaLibraryProject.property.projenrc"></a>

```typescript
public readonly projenrc: Projenrc;
```

- *Type:* projen.java.Projenrc

Projenrc component.

---

##### `buildVerifyWorkflow`<sup>Required</sup> <a name="buildVerifyWorkflow" id="@xpertss/projen-types.JavaLibraryProject.property.buildVerifyWorkflow"></a>

```typescript
public readonly buildVerifyWorkflow: TaskWorkflow;
```

- *Type:* projen.github.TaskWorkflow

---

##### `upgradeTask`<sup>Required</sup> <a name="upgradeTask" id="@xpertss/projen-types.JavaLibraryProject.property.upgradeTask"></a>

```typescript
public readonly upgradeTask: Task;
```

- *Type:* projen.Task

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@xpertss/projen-types.JavaLibraryProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### JavaMavenProject <a name="JavaMavenProject" id="@xpertss/projen-types.JavaMavenProject"></a>

Shared Maven build skeleton for all three Java project types: standard `pom.xml`/directory layout (via `java.JavaProject`), a PR-triggered build+test(+SonarQube) workflow that hard-fails on projen drift, and a nightly dependency-upgrade workflow.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.JavaMavenProject.Initializer"></a>

```typescript
import { JavaMavenProject } from '@xpertss/projen-types'

new JavaMavenProject(options: JavaMavenProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions">JavaMavenProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.JavaMavenProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.JavaMavenProjectOptions">JavaMavenProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addPlugin">addPlugin</a></code> | Adds a build plugin to the pom. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addTestDependency">addTestDependency</a></code> | Adds a test dependency. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.JavaMavenProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.JavaMavenProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.JavaMavenProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@xpertss/projen-types.JavaMavenProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@xpertss/projen-types.JavaMavenProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@xpertss/projen-types.JavaMavenProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@xpertss/projen-types.JavaMavenProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@xpertss/projen-types.JavaMavenProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@xpertss/projen-types.JavaMavenProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@xpertss/projen-types.JavaMavenProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaMavenProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@xpertss/projen-types.JavaMavenProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@xpertss/projen-types.JavaMavenProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@xpertss/projen-types.JavaMavenProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.JavaMavenProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.JavaMavenProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@xpertss/projen-types.JavaMavenProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaMavenProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@xpertss/projen-types.JavaMavenProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@xpertss/projen-types.JavaMavenProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@xpertss/projen-types.JavaMavenProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "projectCreation()" for all components, only if the project is being created for the first time
6. Call "postSynthesize()" for all components of this project
7. Call "this.postSynthesize()"
8. Call "postProjectCreation()" for all components, only if the project is being created for the first time

##### `tryFindFile` <a name="tryFindFile" id="@xpertss/projen-types.JavaMavenProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaMavenProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@xpertss/projen-types.JavaMavenProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaMavenProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@xpertss/projen-types.JavaMavenProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaMavenProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="@xpertss/projen-types.JavaMavenProject.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaMavenProject.addDependency.parameter.spec"></a>

- *Type:* string

Format `<groupId>/<artifactId>@<semver>`.

---

##### `addPlugin` <a name="addPlugin" id="@xpertss/projen-types.JavaMavenProject.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): Dependency
```

Adds a build plugin to the pom.

The plug in is also added as a BUILD dep to the project.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaMavenProject.addPlugin.parameter.spec"></a>

- *Type:* string

dependency spec (`group/artifact@version`).

---

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.JavaMavenProject.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

plugin options.

---

##### `addTestDependency` <a name="addTestDependency" id="@xpertss/projen-types.JavaMavenProject.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a test dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaMavenProject.addTestDependency.parameter.spec"></a>

- *Type:* string

Format `<groupId>/<artifactId>@<semver>`.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.JavaMavenProject.isConstruct"></a>

```typescript
import { JavaMavenProject } from '@xpertss/projen-types'

JavaMavenProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.JavaMavenProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@xpertss/projen-types.JavaMavenProject.isProject"></a>

```typescript
import { JavaMavenProject } from '@xpertss/projen-types'

JavaMavenProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.JavaMavenProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@xpertss/projen-types.JavaMavenProject.of"></a>

```typescript
import { JavaMavenProject } from '@xpertss/projen-types'

JavaMavenProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@xpertss/projen-types.JavaMavenProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.compile">compile</a></code> | <code>projen.java.MavenCompile</code> | Compile component. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.distdir">distdir</a></code> | <code>string</code> | Maven artifact output directory. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.packaging">packaging</a></code> | <code>projen.java.MavenPackaging</code> | Packaging component. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.pom">pom</a></code> | <code>projen.java.Pom</code> | API for managing `pom.xml`. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.junit">junit</a></code> | <code>projen.java.Junit</code> | JUnit component. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.projenrc">projenrc</a></code> | <code>projen.java.Projenrc</code> | Projenrc component. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.buildVerifyWorkflow">buildVerifyWorkflow</a></code> | <code>projen.github.TaskWorkflow</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.upgradeTask">upgradeTask</a></code> | <code>projen.Task</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.JavaMavenProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@xpertss/projen-types.JavaMavenProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@xpertss/projen-types.JavaMavenProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@xpertss/projen-types.JavaMavenProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@xpertss/projen-types.JavaMavenProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.JavaMavenProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@xpertss/projen-types.JavaMavenProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@xpertss/projen-types.JavaMavenProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@xpertss/projen-types.JavaMavenProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@xpertss/projen-types.JavaMavenProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@xpertss/projen-types.JavaMavenProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaMavenProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@xpertss/projen-types.JavaMavenProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@xpertss/projen-types.JavaMavenProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@xpertss/projen-types.JavaMavenProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@xpertss/projen-types.JavaMavenProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@xpertss/projen-types.JavaMavenProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@xpertss/projen-types.JavaMavenProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@xpertss/projen-types.JavaMavenProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@xpertss/projen-types.JavaMavenProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@xpertss/projen-types.JavaMavenProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@xpertss/projen-types.JavaMavenProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@xpertss/projen-types.JavaMavenProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@xpertss/projen-types.JavaMavenProject.property.initProject"></a>

- *Deprecated:* use the `initProject` argument passed to `Component.projectCreation()` instead.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@xpertss/projen-types.JavaMavenProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@xpertss/projen-types.JavaMavenProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@xpertss/projen-types.JavaMavenProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@xpertss/projen-types.JavaMavenProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@xpertss/projen-types.JavaMavenProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@xpertss/projen-types.JavaMavenProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `compile`<sup>Required</sup> <a name="compile" id="@xpertss/projen-types.JavaMavenProject.property.compile"></a>

```typescript
public readonly compile: MavenCompile;
```

- *Type:* projen.java.MavenCompile

Compile component.

---

##### `distdir`<sup>Required</sup> <a name="distdir" id="@xpertss/projen-types.JavaMavenProject.property.distdir"></a>

```typescript
public readonly distdir: string;
```

- *Type:* string

Maven artifact output directory.

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="@xpertss/projen-types.JavaMavenProject.property.packaging"></a>

```typescript
public readonly packaging: MavenPackaging;
```

- *Type:* projen.java.MavenPackaging

Packaging component.

---

##### `pom`<sup>Required</sup> <a name="pom" id="@xpertss/projen-types.JavaMavenProject.property.pom"></a>

```typescript
public readonly pom: Pom;
```

- *Type:* projen.java.Pom

API for managing `pom.xml`.

---

##### `junit`<sup>Optional</sup> <a name="junit" id="@xpertss/projen-types.JavaMavenProject.property.junit"></a>

```typescript
public readonly junit: Junit;
```

- *Type:* projen.java.Junit

JUnit component.

---

##### `projenrc`<sup>Optional</sup> <a name="projenrc" id="@xpertss/projen-types.JavaMavenProject.property.projenrc"></a>

```typescript
public readonly projenrc: Projenrc;
```

- *Type:* projen.java.Projenrc

Projenrc component.

---

##### `buildVerifyWorkflow`<sup>Required</sup> <a name="buildVerifyWorkflow" id="@xpertss/projen-types.JavaMavenProject.property.buildVerifyWorkflow"></a>

```typescript
public readonly buildVerifyWorkflow: TaskWorkflow;
```

- *Type:* projen.github.TaskWorkflow

---

##### `upgradeTask`<sup>Required</sup> <a name="upgradeTask" id="@xpertss/projen-types.JavaMavenProject.property.upgradeTask"></a>

```typescript
public readonly upgradeTask: Task;
```

- *Type:* projen.Task

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@xpertss/projen-types.JavaMavenProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### JavaServiceProject <a name="JavaServiceProject" id="@xpertss/projen-types.JavaServiceProject"></a>

Springboot service application.

Publishes to Docker Hub (never Maven
Central); publish and deploy are both manual-dispatch, not on every merge.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.JavaServiceProject.Initializer"></a>

```typescript
import { JavaServiceProject } from '@xpertss/projen-types'

new JavaServiceProject(options: JavaServiceProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions">JavaServiceProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.JavaServiceProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.JavaServiceProjectOptions">JavaServiceProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addPlugin">addPlugin</a></code> | Adds a build plugin to the pom. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addTestDependency">addTestDependency</a></code> | Adds a test dependency. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.JavaServiceProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.JavaServiceProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.JavaServiceProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@xpertss/projen-types.JavaServiceProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@xpertss/projen-types.JavaServiceProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@xpertss/projen-types.JavaServiceProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@xpertss/projen-types.JavaServiceProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@xpertss/projen-types.JavaServiceProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@xpertss/projen-types.JavaServiceProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@xpertss/projen-types.JavaServiceProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaServiceProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@xpertss/projen-types.JavaServiceProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@xpertss/projen-types.JavaServiceProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@xpertss/projen-types.JavaServiceProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.JavaServiceProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.JavaServiceProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@xpertss/projen-types.JavaServiceProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaServiceProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@xpertss/projen-types.JavaServiceProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@xpertss/projen-types.JavaServiceProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@xpertss/projen-types.JavaServiceProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "projectCreation()" for all components, only if the project is being created for the first time
6. Call "postSynthesize()" for all components of this project
7. Call "this.postSynthesize()"
8. Call "postProjectCreation()" for all components, only if the project is being created for the first time

##### `tryFindFile` <a name="tryFindFile" id="@xpertss/projen-types.JavaServiceProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaServiceProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@xpertss/projen-types.JavaServiceProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaServiceProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@xpertss/projen-types.JavaServiceProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaServiceProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="@xpertss/projen-types.JavaServiceProject.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaServiceProject.addDependency.parameter.spec"></a>

- *Type:* string

Format `<groupId>/<artifactId>@<semver>`.

---

##### `addPlugin` <a name="addPlugin" id="@xpertss/projen-types.JavaServiceProject.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): Dependency
```

Adds a build plugin to the pom.

The plug in is also added as a BUILD dep to the project.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaServiceProject.addPlugin.parameter.spec"></a>

- *Type:* string

dependency spec (`group/artifact@version`).

---

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.JavaServiceProject.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

plugin options.

---

##### `addTestDependency` <a name="addTestDependency" id="@xpertss/projen-types.JavaServiceProject.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a test dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaServiceProject.addTestDependency.parameter.spec"></a>

- *Type:* string

Format `<groupId>/<artifactId>@<semver>`.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.JavaServiceProject.isConstruct"></a>

```typescript
import { JavaServiceProject } from '@xpertss/projen-types'

JavaServiceProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.JavaServiceProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@xpertss/projen-types.JavaServiceProject.isProject"></a>

```typescript
import { JavaServiceProject } from '@xpertss/projen-types'

JavaServiceProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.JavaServiceProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@xpertss/projen-types.JavaServiceProject.of"></a>

```typescript
import { JavaServiceProject } from '@xpertss/projen-types'

JavaServiceProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@xpertss/projen-types.JavaServiceProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.compile">compile</a></code> | <code>projen.java.MavenCompile</code> | Compile component. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.distdir">distdir</a></code> | <code>string</code> | Maven artifact output directory. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.packaging">packaging</a></code> | <code>projen.java.MavenPackaging</code> | Packaging component. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.pom">pom</a></code> | <code>projen.java.Pom</code> | API for managing `pom.xml`. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.junit">junit</a></code> | <code>projen.java.Junit</code> | JUnit component. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.projenrc">projenrc</a></code> | <code>projen.java.Projenrc</code> | Projenrc component. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.buildVerifyWorkflow">buildVerifyWorkflow</a></code> | <code>projen.github.TaskWorkflow</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.upgradeTask">upgradeTask</a></code> | <code>projen.Task</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.JavaServiceProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@xpertss/projen-types.JavaServiceProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@xpertss/projen-types.JavaServiceProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@xpertss/projen-types.JavaServiceProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@xpertss/projen-types.JavaServiceProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.JavaServiceProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@xpertss/projen-types.JavaServiceProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@xpertss/projen-types.JavaServiceProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@xpertss/projen-types.JavaServiceProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@xpertss/projen-types.JavaServiceProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@xpertss/projen-types.JavaServiceProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaServiceProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@xpertss/projen-types.JavaServiceProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@xpertss/projen-types.JavaServiceProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@xpertss/projen-types.JavaServiceProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@xpertss/projen-types.JavaServiceProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@xpertss/projen-types.JavaServiceProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@xpertss/projen-types.JavaServiceProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@xpertss/projen-types.JavaServiceProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@xpertss/projen-types.JavaServiceProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@xpertss/projen-types.JavaServiceProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@xpertss/projen-types.JavaServiceProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@xpertss/projen-types.JavaServiceProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@xpertss/projen-types.JavaServiceProject.property.initProject"></a>

- *Deprecated:* use the `initProject` argument passed to `Component.projectCreation()` instead.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@xpertss/projen-types.JavaServiceProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@xpertss/projen-types.JavaServiceProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@xpertss/projen-types.JavaServiceProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@xpertss/projen-types.JavaServiceProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@xpertss/projen-types.JavaServiceProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@xpertss/projen-types.JavaServiceProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `compile`<sup>Required</sup> <a name="compile" id="@xpertss/projen-types.JavaServiceProject.property.compile"></a>

```typescript
public readonly compile: MavenCompile;
```

- *Type:* projen.java.MavenCompile

Compile component.

---

##### `distdir`<sup>Required</sup> <a name="distdir" id="@xpertss/projen-types.JavaServiceProject.property.distdir"></a>

```typescript
public readonly distdir: string;
```

- *Type:* string

Maven artifact output directory.

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="@xpertss/projen-types.JavaServiceProject.property.packaging"></a>

```typescript
public readonly packaging: MavenPackaging;
```

- *Type:* projen.java.MavenPackaging

Packaging component.

---

##### `pom`<sup>Required</sup> <a name="pom" id="@xpertss/projen-types.JavaServiceProject.property.pom"></a>

```typescript
public readonly pom: Pom;
```

- *Type:* projen.java.Pom

API for managing `pom.xml`.

---

##### `junit`<sup>Optional</sup> <a name="junit" id="@xpertss/projen-types.JavaServiceProject.property.junit"></a>

```typescript
public readonly junit: Junit;
```

- *Type:* projen.java.Junit

JUnit component.

---

##### `projenrc`<sup>Optional</sup> <a name="projenrc" id="@xpertss/projen-types.JavaServiceProject.property.projenrc"></a>

```typescript
public readonly projenrc: Projenrc;
```

- *Type:* projen.java.Projenrc

Projenrc component.

---

##### `buildVerifyWorkflow`<sup>Required</sup> <a name="buildVerifyWorkflow" id="@xpertss/projen-types.JavaServiceProject.property.buildVerifyWorkflow"></a>

```typescript
public readonly buildVerifyWorkflow: TaskWorkflow;
```

- *Type:* projen.github.TaskWorkflow

---

##### `upgradeTask`<sup>Required</sup> <a name="upgradeTask" id="@xpertss/projen-types.JavaServiceProject.property.upgradeTask"></a>

```typescript
public readonly upgradeTask: Task;
```

- *Type:* projen.Task

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@xpertss/projen-types.JavaServiceProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### MavenCentralPublish <a name="MavenCentralPublish" id="@xpertss/projen-types.MavenCentralPublish"></a>

On-demand publish workflow to Maven Central, with GPG signing (secrets) or OIDC trusted publishing.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.MavenCentralPublish.Initializer"></a>

```typescript
import { MavenCentralPublish } from '@xpertss/projen-types'

new MavenCentralPublish(project: JavaProject, options?: MavenCentralPublishOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.Initializer.parameter.project">project</a></code> | <code>projen.java.JavaProject</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.MavenCentralPublishOptions">MavenCentralPublishOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.MavenCentralPublish.Initializer.parameter.project"></a>

- *Type:* projen.java.JavaProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.MavenCentralPublish.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenCentralPublishOptions">MavenCentralPublishOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.MavenCentralPublish.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.MavenCentralPublish.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.MavenCentralPublish.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.MavenCentralPublish.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.MavenCentralPublish.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.MavenCentralPublish.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.MavenCentralPublish.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.MavenCentralPublish.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.MavenCentralPublish.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.MavenCentralPublish.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.MavenCentralPublish.isConstruct"></a>

```typescript
import { MavenCentralPublish } from '@xpertss/projen-types'

MavenCentralPublish.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.MavenCentralPublish.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.MavenCentralPublish.isComponent"></a>

```typescript
import { MavenCentralPublish } from '@xpertss/projen-types'

MavenCentralPublish.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.MavenCentralPublish.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.MavenCentralPublish.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.MavenCentralPublish.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


## Structs <a name="Structs" id="Structs"></a>

### CdkAppProjectOptions <a name="CdkAppProjectOptions" id="@xpertss/projen-types.CdkAppProjectOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.CdkAppProjectOptions.Initializer"></a>

```typescript
import { CdkAppProjectOptions } from '@xpertss/projen-types'

const cdkAppProjectOptions: CdkAppProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.slackWebhookSecret">slackWebhookSecret</a></code> | <code>string</code> | GitHub secret holding a Slack webhook URL for deploy notifications. |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.environments">environments</a></code> | <code>string \| <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]</code> | Deploy targets for the manual-dispatch deploy workflow, e.g. ["dev", "stage", "prod"]. |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.ecrEcs">ecrEcs</a></code> | <code><a href="#@xpertss/projen-types.EcrEcsOptions">EcrEcsOptions</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.edgeResources">edgeResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.appEntryPoint">appEntryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.database">database</a></code> | <code><a href="#@xpertss/projen-types.DatabaseOptions">DatabaseOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkAppProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `cdkVersion`<sup>Optional</sup> <a name="cdkVersion" id="@xpertss/projen-types.CdkAppProjectOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.189.1"

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.CdkAppProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `slackWebhookSecret`<sup>Optional</sup> <a name="slackWebhookSecret" id="@xpertss/projen-types.CdkAppProjectOptions.property.slackWebhookSecret"></a>

```typescript
public readonly slackWebhookSecret: string;
```

- *Type:* string

GitHub secret holding a Slack webhook URL for deploy notifications.

---

##### `environments`<sup>Required</sup> <a name="environments" id="@xpertss/projen-types.CdkAppProjectOptions.property.environments"></a>

```typescript
public readonly environments: (string | EnvironmentOptions)[];
```

- *Type:* string | <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]

Deploy targets for the manual-dispatch deploy workflow, e.g. ["dev", "stage", "prod"].

---

##### `ecrEcs`<sup>Optional</sup> <a name="ecrEcs" id="@xpertss/projen-types.CdkAppProjectOptions.property.ecrEcs"></a>

```typescript
public readonly ecrEcs: EcrEcsOptions;
```

- *Type:* <a href="#@xpertss/projen-types.EcrEcsOptions">EcrEcsOptions</a>

---

##### `edgeResources`<sup>Optional</sup> <a name="edgeResources" id="@xpertss/projen-types.CdkAppProjectOptions.property.edgeResources"></a>

```typescript
public readonly edgeResources: string[];
```

- *Type:* string[]

---

##### `appEntryPoint`<sup>Optional</sup> <a name="appEntryPoint" id="@xpertss/projen-types.CdkAppProjectOptions.property.appEntryPoint"></a>

```typescript
public readonly appEntryPoint: string;
```

- *Type:* string
- *Default:* "src/app.ts"

---

##### `database`<sup>Optional</sup> <a name="database" id="@xpertss/projen-types.CdkAppProjectOptions.property.database"></a>

```typescript
public readonly database: DatabaseOptions;
```

- *Type:* <a href="#@xpertss/projen-types.DatabaseOptions">DatabaseOptions</a>

---

### CdkDeployHookOptions <a name="CdkDeployHookOptions" id="@xpertss/projen-types.CdkDeployHookOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.CdkDeployHookOptions.Initializer"></a>

```typescript
import { CdkDeployHookOptions } from '@xpertss/projen-types'

const cdkDeployHookOptions: CdkDeployHookOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkDeployHookOptions.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkDeployHookOptions.property.targetRepo">targetRepo</a></code> | <code>string</code> | The companion CDK infra/app repo (owner/repo) that owns the actual infrastructure. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@xpertss/projen-types.CdkDeployHookOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

---

##### `targetRepo`<sup>Optional</sup> <a name="targetRepo" id="@xpertss/projen-types.CdkDeployHookOptions.property.targetRepo"></a>

```typescript
public readonly targetRepo: string;
```

- *Type:* string

The companion CDK infra/app repo (owner/repo) that owns the actual infrastructure.

---

### CdkInfraProjectOptions <a name="CdkInfraProjectOptions" id="@xpertss/projen-types.CdkInfraProjectOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.CdkInfraProjectOptions.Initializer"></a>

```typescript
import { CdkInfraProjectOptions } from '@xpertss/projen-types'

const cdkInfraProjectOptions: CdkInfraProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.slackWebhookSecret">slackWebhookSecret</a></code> | <code>string</code> | GitHub secret holding a Slack webhook URL for deploy notifications. |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.environments">environments</a></code> | <code>string \| <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]</code> | Deploy targets for the manual-dispatch deploy workflow, e.g. ["dev", "stage", "prod"]. |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.ecrEcs">ecrEcs</a></code> | <code><a href="#@xpertss/projen-types.EcrEcsOptions">EcrEcsOptions</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.edgeResources">edgeResources</a></code> | <code>string[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkInfraProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `cdkVersion`<sup>Optional</sup> <a name="cdkVersion" id="@xpertss/projen-types.CdkInfraProjectOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.189.1"

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.CdkInfraProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `slackWebhookSecret`<sup>Optional</sup> <a name="slackWebhookSecret" id="@xpertss/projen-types.CdkInfraProjectOptions.property.slackWebhookSecret"></a>

```typescript
public readonly slackWebhookSecret: string;
```

- *Type:* string

GitHub secret holding a Slack webhook URL for deploy notifications.

---

##### `environments`<sup>Required</sup> <a name="environments" id="@xpertss/projen-types.CdkInfraProjectOptions.property.environments"></a>

```typescript
public readonly environments: (string | EnvironmentOptions)[];
```

- *Type:* string | <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]

Deploy targets for the manual-dispatch deploy workflow, e.g. ["dev", "stage", "prod"].

---

##### `ecrEcs`<sup>Optional</sup> <a name="ecrEcs" id="@xpertss/projen-types.CdkInfraProjectOptions.property.ecrEcs"></a>

```typescript
public readonly ecrEcs: EcrEcsOptions;
```

- *Type:* <a href="#@xpertss/projen-types.EcrEcsOptions">EcrEcsOptions</a>

---

##### `edgeResources`<sup>Optional</sup> <a name="edgeResources" id="@xpertss/projen-types.CdkInfraProjectOptions.property.edgeResources"></a>

```typescript
public readonly edgeResources: string[];
```

- *Type:* string[]

---

### CdkTypescriptProjectOptions <a name="CdkTypescriptProjectOptions" id="@xpertss/projen-types.CdkTypescriptProjectOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.CdkTypescriptProjectOptions.Initializer"></a>

```typescript
import { CdkTypescriptProjectOptions } from '@xpertss/projen-types'

const cdkTypescriptProjectOptions: CdkTypescriptProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProjectOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProjectOptions.property.slackWebhookSecret">slackWebhookSecret</a></code> | <code>string</code> | GitHub secret holding a Slack webhook URL for deploy notifications. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProjectOptions.property.environments">environments</a></code> | <code>string \| <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CdkTypescriptProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `cdkVersion`<sup>Optional</sup> <a name="cdkVersion" id="@xpertss/projen-types.CdkTypescriptProjectOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.189.1"

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.CdkTypescriptProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `slackWebhookSecret`<sup>Optional</sup> <a name="slackWebhookSecret" id="@xpertss/projen-types.CdkTypescriptProjectOptions.property.slackWebhookSecret"></a>

```typescript
public readonly slackWebhookSecret: string;
```

- *Type:* string

GitHub secret holding a Slack webhook URL for deploy notifications.

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@xpertss/projen-types.CdkTypescriptProjectOptions.property.environments"></a>

```typescript
public readonly environments: (string | EnvironmentOptions)[];
```

- *Type:* string | <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]

---

### CommonCdkOptions <a name="CommonCdkOptions" id="@xpertss/projen-types.CommonCdkOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.CommonCdkOptions.Initializer"></a>

```typescript
import { CommonCdkOptions } from '@xpertss/projen-types'

const commonCdkOptions: CommonCdkOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CommonCdkOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CommonCdkOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CommonCdkOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CommonCdkOptions.property.slackWebhookSecret">slackWebhookSecret</a></code> | <code>string</code> | GitHub secret holding a Slack webhook URL for deploy notifications. |

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CommonCdkOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `cdkVersion`<sup>Optional</sup> <a name="cdkVersion" id="@xpertss/projen-types.CommonCdkOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.189.1"

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.CommonCdkOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `slackWebhookSecret`<sup>Optional</sup> <a name="slackWebhookSecret" id="@xpertss/projen-types.CommonCdkOptions.property.slackWebhookSecret"></a>

```typescript
public readonly slackWebhookSecret: string;
```

- *Type:* string

GitHub secret holding a Slack webhook URL for deploy notifications.

---

### CommonJavaOptions <a name="CommonJavaOptions" id="@xpertss/projen-types.CommonJavaOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.CommonJavaOptions.Initializer"></a>

```typescript
import { CommonJavaOptions } from '@xpertss/projen-types'

const commonJavaOptions: CommonJavaOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.sonarProjectKey">sonarProjectKey</a></code> | <code>string</code> | SonarQube project key. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@xpertss/projen-types.CommonJavaOptions.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@xpertss/projen-types.CommonJavaOptions.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.CommonJavaOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.CommonJavaOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `sonarProjectKey`<sup>Optional</sup> <a name="sonarProjectKey" id="@xpertss/projen-types.CommonJavaOptions.property.sonarProjectKey"></a>

```typescript
public readonly sonarProjectKey: string;
```

- *Type:* string

SonarQube project key.

If unset, the sonar scan step is skipped.

---

##### `version`<sup>Optional</sup> <a name="version" id="@xpertss/projen-types.CommonJavaOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

---

### DatabaseOptions <a name="DatabaseOptions" id="@xpertss/projen-types.DatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.DatabaseOptions.Initializer"></a>

```typescript
import { DatabaseOptions } from '@xpertss/projen-types'

const databaseOptions: DatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.DatabaseOptions.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.DatabaseOptions.property.migrationTool">migrationTool</a></code> | <code>string</code> | Migration tool to wire up, e.g. "flyway", "liquibase", "prisma". Left pluggable - no default. |

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@xpertss/projen-types.DatabaseOptions.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string
- *Default:* "postgres"

---

##### `migrationTool`<sup>Optional</sup> <a name="migrationTool" id="@xpertss/projen-types.DatabaseOptions.property.migrationTool"></a>

```typescript
public readonly migrationTool: string;
```

- *Type:* string

Migration tool to wire up, e.g. "flyway", "liquibase", "prisma". Left pluggable - no default.

---

### DockerPublishOptions <a name="DockerPublishOptions" id="@xpertss/projen-types.DockerPublishOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.DockerPublishOptions.Initializer"></a>

```typescript
import { DockerPublishOptions } from '@xpertss/projen-types'

const dockerPublishOptions: DockerPublishOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.DockerPublishOptions.property.dockerRegistry">dockerRegistry</a></code> | <code>string</code> | *No description.* |

---

##### `dockerRegistry`<sup>Optional</sup> <a name="dockerRegistry" id="@xpertss/projen-types.DockerPublishOptions.property.dockerRegistry"></a>

```typescript
public readonly dockerRegistry: string;
```

- *Type:* string
- *Default:* "docker.io"

---

### EcrEcsOptions <a name="EcrEcsOptions" id="@xpertss/projen-types.EcrEcsOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.EcrEcsOptions.Initializer"></a>

```typescript
import { EcrEcsOptions } from '@xpertss/projen-types'

const ecrEcsOptions: EcrEcsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.EcrEcsOptions.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.EcrEcsOptions.property.externalImageSource">externalImageSource</a></code> | <code>boolean</code> | Whether the ECS service stands up an externally-built image (infra-only) rather than one built from this project's own source. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@xpertss/projen-types.EcrEcsOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* false

---

##### `externalImageSource`<sup>Optional</sup> <a name="externalImageSource" id="@xpertss/projen-types.EcrEcsOptions.property.externalImageSource"></a>

```typescript
public readonly externalImageSource: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the ECS service stands up an externally-built image (infra-only) rather than one built from this project's own source.

---

### EnvironmentOptions <a name="EnvironmentOptions" id="@xpertss/projen-types.EnvironmentOptions"></a>

A single named deployment target used by manual-dispatch deploy workflows.

#### Initializer <a name="Initializer" id="@xpertss/projen-types.EnvironmentOptions.Initializer"></a>

```typescript
import { EnvironmentOptions } from '@xpertss/projen-types'

const environmentOptions: EnvironmentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.EnvironmentOptions.property.name">name</a></code> | <code>string</code> | Environment name, e.g. "dev", "stage", "prod". |
| <code><a href="#@xpertss/projen-types.EnvironmentOptions.property.accountId">accountId</a></code> | <code>string</code> | AWS account id to deploy into, if relevant to the deploy steps used. |
| <code><a href="#@xpertss/projen-types.EnvironmentOptions.property.region">region</a></code> | <code>string</code> | AWS region to deploy into, if relevant to the deploy steps used. |
| <code><a href="#@xpertss/projen-types.EnvironmentOptions.property.requiresApproval">requiresApproval</a></code> | <code>boolean</code> | Whether this environment requires a GitHub Environment approval gate before the deploy job is allowed to run. |

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.EnvironmentOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Environment name, e.g. "dev", "stage", "prod".

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@xpertss/projen-types.EnvironmentOptions.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

AWS account id to deploy into, if relevant to the deploy steps used.

---

##### `region`<sup>Optional</sup> <a name="region" id="@xpertss/projen-types.EnvironmentOptions.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region to deploy into, if relevant to the deploy steps used.

---

##### `requiresApproval`<sup>Optional</sup> <a name="requiresApproval" id="@xpertss/projen-types.EnvironmentOptions.property.requiresApproval"></a>

```typescript
public readonly requiresApproval: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this environment requires a GitHub Environment approval gate before the deploy job is allowed to run.

---

### GitHubPackagesPublishOptions <a name="GitHubPackagesPublishOptions" id="@xpertss/projen-types.GitHubPackagesPublishOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.GitHubPackagesPublishOptions.Initializer"></a>

```typescript
import { GitHubPackagesPublishOptions } from '@xpertss/projen-types'

const gitHubPackagesPublishOptions: GitHubPackagesPublishOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublishOptions.property.ghPackagesRegistry">ghPackagesRegistry</a></code> | <code>string</code> | *No description.* |

---

##### `ghPackagesRegistry`<sup>Optional</sup> <a name="ghPackagesRegistry" id="@xpertss/projen-types.GitHubPackagesPublishOptions.property.ghPackagesRegistry"></a>

```typescript
public readonly ghPackagesRegistry: string;
```

- *Type:* string
- *Default:* derived from the repository URL

---

### JavaAppProjectOptions <a name="JavaAppProjectOptions" id="@xpertss/projen-types.JavaAppProjectOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.JavaAppProjectOptions.Initializer"></a>

```typescript
import { JavaAppProjectOptions } from '@xpertss/projen-types'

const javaAppProjectOptions: JavaAppProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.sonarProjectKey">sonarProjectKey</a></code> | <code>string</code> | SonarQube project key. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.ghPackagesRegistry">ghPackagesRegistry</a></code> | <code>string</code> | *No description.* |

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@xpertss/projen-types.JavaAppProjectOptions.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@xpertss/projen-types.JavaAppProjectOptions.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaAppProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.JavaAppProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `sonarProjectKey`<sup>Optional</sup> <a name="sonarProjectKey" id="@xpertss/projen-types.JavaAppProjectOptions.property.sonarProjectKey"></a>

```typescript
public readonly sonarProjectKey: string;
```

- *Type:* string

SonarQube project key.

If unset, the sonar scan step is skipped.

---

##### `version`<sup>Optional</sup> <a name="version" id="@xpertss/projen-types.JavaAppProjectOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

---

##### `ghPackagesRegistry`<sup>Optional</sup> <a name="ghPackagesRegistry" id="@xpertss/projen-types.JavaAppProjectOptions.property.ghPackagesRegistry"></a>

```typescript
public readonly ghPackagesRegistry: string;
```

- *Type:* string
- *Default:* "https://maven.pkg.github.com/OWNER/REPO" (derived from the repository URL)

---

### JavaLibraryProjectOptions <a name="JavaLibraryProjectOptions" id="@xpertss/projen-types.JavaLibraryProjectOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.JavaLibraryProjectOptions.Initializer"></a>

```typescript
import { JavaLibraryProjectOptions } from '@xpertss/projen-types'

const javaLibraryProjectOptions: JavaLibraryProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.sonarProjectKey">sonarProjectKey</a></code> | <code>string</code> | SonarQube project key. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.mavenCentralOidc">mavenCentralOidc</a></code> | <code>boolean</code> | Use Maven Central's OIDC trusted-publishing flow instead of secret-based GPG signing. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.publishCodeIndex">publishCodeIndex</a></code> | <code>boolean</code> | *No description.* |

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `sonarProjectKey`<sup>Optional</sup> <a name="sonarProjectKey" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.sonarProjectKey"></a>

```typescript
public readonly sonarProjectKey: string;
```

- *Type:* string

SonarQube project key.

If unset, the sonar scan step is skipped.

---

##### `version`<sup>Optional</sup> <a name="version" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

---

##### `mavenCentralOidc`<sup>Optional</sup> <a name="mavenCentralOidc" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.mavenCentralOidc"></a>

```typescript
public readonly mavenCentralOidc: boolean;
```

- *Type:* boolean

Use Maven Central's OIDC trusted-publishing flow instead of secret-based GPG signing.

---

##### `publishCodeIndex`<sup>Optional</sup> <a name="publishCodeIndex" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.publishCodeIndex"></a>

```typescript
public readonly publishCodeIndex: boolean;
```

- *Type:* boolean
- *Default:* true

---

### JavaMavenProjectOptions <a name="JavaMavenProjectOptions" id="@xpertss/projen-types.JavaMavenProjectOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.JavaMavenProjectOptions.Initializer"></a>

```typescript
import { JavaMavenProjectOptions } from '@xpertss/projen-types'

const javaMavenProjectOptions: JavaMavenProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.sonarProjectKey">sonarProjectKey</a></code> | <code>string</code> | SonarQube project key. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@xpertss/projen-types.JavaMavenProjectOptions.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@xpertss/projen-types.JavaMavenProjectOptions.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaMavenProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.JavaMavenProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `sonarProjectKey`<sup>Optional</sup> <a name="sonarProjectKey" id="@xpertss/projen-types.JavaMavenProjectOptions.property.sonarProjectKey"></a>

```typescript
public readonly sonarProjectKey: string;
```

- *Type:* string

SonarQube project key.

If unset, the sonar scan step is skipped.

---

##### `version`<sup>Optional</sup> <a name="version" id="@xpertss/projen-types.JavaMavenProjectOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

---

### JavaServiceProjectOptions <a name="JavaServiceProjectOptions" id="@xpertss/projen-types.JavaServiceProjectOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.JavaServiceProjectOptions.Initializer"></a>

```typescript
import { JavaServiceProjectOptions } from '@xpertss/projen-types'

const javaServiceProjectOptions: JavaServiceProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.sonarProjectKey">sonarProjectKey</a></code> | <code>string</code> | SonarQube project key. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.cdkDeployHook">cdkDeployHook</a></code> | <code><a href="#@xpertss/projen-types.CdkDeployHookOptions">CdkDeployHookOptions</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.dockerRegistry">dockerRegistry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.environments">environments</a></code> | <code>string \| <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]</code> | Deploy targets to offer on the `CdkDeployHook`'s manual-dispatch workflow, when the hook is enabled. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.useFlyway">useFlyway</a></code> | <code>boolean</code> | *No description.* |

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@xpertss/projen-types.JavaServiceProjectOptions.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@xpertss/projen-types.JavaServiceProjectOptions.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaServiceProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.JavaServiceProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `sonarProjectKey`<sup>Optional</sup> <a name="sonarProjectKey" id="@xpertss/projen-types.JavaServiceProjectOptions.property.sonarProjectKey"></a>

```typescript
public readonly sonarProjectKey: string;
```

- *Type:* string

SonarQube project key.

If unset, the sonar scan step is skipped.

---

##### `version`<sup>Optional</sup> <a name="version" id="@xpertss/projen-types.JavaServiceProjectOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

---

##### `cdkDeployHook`<sup>Optional</sup> <a name="cdkDeployHook" id="@xpertss/projen-types.JavaServiceProjectOptions.property.cdkDeployHook"></a>

```typescript
public readonly cdkDeployHook: CdkDeployHookOptions;
```

- *Type:* <a href="#@xpertss/projen-types.CdkDeployHookOptions">CdkDeployHookOptions</a>
- *Default:* { enabled: true }

---

##### `dockerRegistry`<sup>Optional</sup> <a name="dockerRegistry" id="@xpertss/projen-types.JavaServiceProjectOptions.property.dockerRegistry"></a>

```typescript
public readonly dockerRegistry: string;
```

- *Type:* string
- *Default:* "docker.io"

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@xpertss/projen-types.JavaServiceProjectOptions.property.environments"></a>

```typescript
public readonly environments: (string | EnvironmentOptions)[];
```

- *Type:* string | <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]
- *Default:* ["prod"]

Deploy targets to offer on the `CdkDeployHook`'s manual-dispatch workflow, when the hook is enabled.

---

##### `useFlyway`<sup>Optional</sup> <a name="useFlyway" id="@xpertss/projen-types.JavaServiceProjectOptions.property.useFlyway"></a>

```typescript
public readonly useFlyway: boolean;
```

- *Type:* boolean
- *Default:* true

---

### MavenCentralPublishOptions <a name="MavenCentralPublishOptions" id="@xpertss/projen-types.MavenCentralPublishOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.MavenCentralPublishOptions.Initializer"></a>

```typescript
import { MavenCentralPublishOptions } from '@xpertss/projen-types'

const mavenCentralPublishOptions: MavenCentralPublishOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenCentralPublishOptions.property.mavenCentralOidc">mavenCentralOidc</a></code> | <code>boolean</code> | *No description.* |

---

##### `mavenCentralOidc`<sup>Optional</sup> <a name="mavenCentralOidc" id="@xpertss/projen-types.MavenCentralPublishOptions.property.mavenCentralOidc"></a>

```typescript
public readonly mavenCentralOidc: boolean;
```

- *Type:* boolean
- *Default:* false

---



