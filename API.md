# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionBuildWorkflow <a name="ActionBuildWorkflow" id="@xpertss/projen-types.ActionBuildWorkflow"></a>

The AD-001 Layer-1 lint gate for a composite-action repo: shellcheck, yamllint, and a pinned `actionlint` release binary (verified by SHA-256, never a marketplace action - org policy).

Creates a dedicated `lint` task
(named to avoid colliding with projen's own reserved `build` task, which
spawns the unrelated default/pre-compile/compile/post-compile/test/package
chain - including `default`, i.e. re-running `.projenrc.ts`, which is not
what this gate is for) and wraps it in a `TaskWorkflow` (`build.yml`)
triggered on push-to-`main` and `pull_request`. The same task is reused by
the release build job, so the lint commands exist in exactly one place.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.ActionBuildWorkflow.Initializer"></a>

```typescript
import { ActionBuildWorkflow } from '@xpertss/projen-types'

new ActionBuildWorkflow(scope: GitHubProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.Initializer.parameter.scope">scope</a></code> | <code>projen.github.GitHubProject</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@xpertss/projen-types.ActionBuildWorkflow.Initializer.parameter.scope"></a>

- *Type:* projen.github.GitHubProject

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.ActionBuildWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.ActionBuildWorkflow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.ActionBuildWorkflow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.ActionBuildWorkflow.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.ActionBuildWorkflow.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.ActionBuildWorkflow.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.ActionBuildWorkflow.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.ActionBuildWorkflow.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.ActionBuildWorkflow.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.ActionBuildWorkflow.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.ActionBuildWorkflow.isConstruct"></a>

```typescript
import { ActionBuildWorkflow } from '@xpertss/projen-types'

ActionBuildWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.ActionBuildWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.ActionBuildWorkflow.isComponent"></a>

```typescript
import { ActionBuildWorkflow } from '@xpertss/projen-types'

ActionBuildWorkflow.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.ActionBuildWorkflow.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.property.task">task</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.ActionBuildWorkflow.property.workflow">workflow</a></code> | <code>projen.github.TaskWorkflow</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.ActionBuildWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.ActionBuildWorkflow.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `task`<sup>Required</sup> <a name="task" id="@xpertss/projen-types.ActionBuildWorkflow.property.task"></a>

```typescript
public readonly task: Task;
```

- *Type:* projen.Task

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@xpertss/projen-types.ActionBuildWorkflow.property.workflow"></a>

```typescript
public readonly workflow: TaskWorkflow;
```

- *Type:* projen.github.TaskWorkflow

---


### ActionDogfoodWorkflow <a name="ActionDogfoodWorkflow" id="@xpertss/projen-types.ActionDogfoodWorkflow"></a>

Per AD-001's dogfood test: the composite action is run **against this repo**, end-to-end, via a local `uses: ./` reference - no external harness. Builds `test-dogfood.yml` from an ordered `scenario` of invocation steps (see `ActionDogfoodStep`) followed by a shared cleanup step.

Omitting `options` generates the workflow with a single failing step (see
`UNCONFIGURED_STEPS`). A *partially* declared dogfood is still a synth
error: if you wrote a scenario by hand, you can write its cleanup too.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.ActionDogfoodWorkflow.Initializer"></a>

```typescript
import { ActionDogfoodWorkflow } from '@xpertss/projen-types'

new ActionDogfoodWorkflow(scope: GitHubProject, options?: ActionDogfoodOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.Initializer.parameter.scope">scope</a></code> | <code>projen.github.GitHubProject</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.ActionDogfoodOptions">ActionDogfoodOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@xpertss/projen-types.ActionDogfoodWorkflow.Initializer.parameter.scope"></a>

- *Type:* projen.github.GitHubProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.ActionDogfoodWorkflow.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.ActionDogfoodOptions">ActionDogfoodOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.ActionDogfoodWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.ActionDogfoodWorkflow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.ActionDogfoodWorkflow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.ActionDogfoodWorkflow.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.ActionDogfoodWorkflow.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.ActionDogfoodWorkflow.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.ActionDogfoodWorkflow.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.ActionDogfoodWorkflow.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.ActionDogfoodWorkflow.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.ActionDogfoodWorkflow.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.ActionDogfoodWorkflow.isConstruct"></a>

```typescript
import { ActionDogfoodWorkflow } from '@xpertss/projen-types'

ActionDogfoodWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.ActionDogfoodWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.ActionDogfoodWorkflow.isComponent"></a>

```typescript
import { ActionDogfoodWorkflow } from '@xpertss/projen-types'

ActionDogfoodWorkflow.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.ActionDogfoodWorkflow.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow.property.workflow">workflow</a></code> | <code>projen.github.GithubWorkflow</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.ActionDogfoodWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.ActionDogfoodWorkflow.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@xpertss/projen-types.ActionDogfoodWorkflow.property.workflow"></a>

```typescript
public readonly workflow: GithubWorkflow;
```

- *Type:* projen.github.GithubWorkflow

---


### ActionSonarWorkflow <a name="ActionSonarWorkflow" id="@xpertss/projen-types.ActionSonarWorkflow"></a>

AD-001 Layer 2: SonarCloud via the Scanner CLI only (never `SonarSource/sonarqube-scan-action` - third-party, and it carried a security advisory).

`sonar.inclusions` is set explicitly since default
inclusions may skip `action.yml` outside `.github/`.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.ActionSonarWorkflow.Initializer"></a>

```typescript
import { ActionSonarWorkflow } from '@xpertss/projen-types'

new ActionSonarWorkflow(scope: GitHubProject, options: ActionSonarWorkflowOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.Initializer.parameter.scope">scope</a></code> | <code>projen.github.GitHubProject</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.ActionSonarWorkflowOptions">ActionSonarWorkflowOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@xpertss/projen-types.ActionSonarWorkflow.Initializer.parameter.scope"></a>

- *Type:* projen.github.GitHubProject

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.ActionSonarWorkflow.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.ActionSonarWorkflowOptions">ActionSonarWorkflowOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.ActionSonarWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.ActionSonarWorkflow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.ActionSonarWorkflow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.ActionSonarWorkflow.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.ActionSonarWorkflow.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.ActionSonarWorkflow.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.ActionSonarWorkflow.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.ActionSonarWorkflow.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.ActionSonarWorkflow.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.ActionSonarWorkflow.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.ActionSonarWorkflow.isConstruct"></a>

```typescript
import { ActionSonarWorkflow } from '@xpertss/projen-types'

ActionSonarWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.ActionSonarWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.ActionSonarWorkflow.isComponent"></a>

```typescript
import { ActionSonarWorkflow } from '@xpertss/projen-types'

ActionSonarWorkflow.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.ActionSonarWorkflow.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflow.property.workflow">workflow</a></code> | <code>projen.github.GithubWorkflow</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.ActionSonarWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.ActionSonarWorkflow.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@xpertss/projen-types.ActionSonarWorkflow.property.workflow"></a>

```typescript
public readonly workflow: GithubWorkflow;
```

- *Type:* projen.github.GithubWorkflow

---


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

With no `targetRepo` the workflow is still generated, but every job's
only step fails with instructions. Synthesizing is not the place to
enforce this: it would make the project type unscaffoldable by
`projen new` (which cannot supply the value), and it is a dispatch-only
workflow - nobody hits the failure until they actually try to deploy,
which is exactly when "this repo has no deploy target" needs saying.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.CdkDeployHook.Initializer"></a>

```typescript
import { CdkDeployHook } from '@xpertss/projen-types'

new CdkDeployHook(project: JavaMavenProject, environments: (string | EnvironmentOptions)[], options?: CdkDeployHookOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.Initializer.parameter.project">project</a></code> | <code><a href="#@xpertss/projen-types.JavaMavenProject">JavaMavenProject</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.Initializer.parameter.environments">environments</a></code> | <code>string \| <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkDeployHook.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.CdkDeployHookOptions">CdkDeployHookOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.CdkDeployHook.Initializer.parameter.project"></a>

- *Type:* <a href="#@xpertss/projen-types.JavaMavenProject">JavaMavenProject</a>

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

new CodeIndexWorkflow(project: JavaMavenProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.CodeIndexWorkflow.Initializer.parameter.project">project</a></code> | <code><a href="#@xpertss/projen-types.JavaMavenProject">JavaMavenProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.CodeIndexWorkflow.Initializer.parameter.project"></a>

- *Type:* <a href="#@xpertss/projen-types.JavaMavenProject">JavaMavenProject</a>

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

new DockerPublish(project: JavaMavenProject, options?: DockerPublishOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.DockerPublish.Initializer.parameter.project">project</a></code> | <code><a href="#@xpertss/projen-types.JavaMavenProject">JavaMavenProject</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.DockerPublish.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.DockerPublishOptions">DockerPublishOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.DockerPublish.Initializer.parameter.project"></a>

- *Type:* <a href="#@xpertss/projen-types.JavaMavenProject">JavaMavenProject</a>

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

`flyway-core` is versionless - Spring Boot's BOM manages it, so
it always matches what Boot's Flyway auto-configuration expects. The Maven
plugin (which Boot's BOM does not manage) is pinned for the Java line.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.FlywayMigration.Initializer"></a>

```typescript
import { FlywayMigration } from '@xpertss/projen-types'

new FlywayMigration(project: JavaSpringBootProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.FlywayMigration.Initializer.parameter.project">project</a></code> | <code><a href="#@xpertss/projen-types.JavaSpringBootProject">JavaSpringBootProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.FlywayMigration.Initializer.parameter.project"></a>

- *Type:* <a href="#@xpertss/projen-types.JavaSpringBootProject">JavaSpringBootProject</a>

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


### GitHubActionProject <a name="GitHubActionProject" id="@xpertss/projen-types.GitHubActionProject"></a>

Scaffolds the repo lifecycle (AD-001) around a hand-committed, composite (shell) GitHub Action: the `build`/`test-dogfood`/`sonar`/`release`  workflows, versioning and release discipline, the F003 verify components,  and repo boilerplate (a private version-source `package.json`, `.yamllint`,  `LICENSE`, and a `README.md` template). The action's own content (`action.yml`, its shell scripts, `test/` fixtures) is authored by hand per the action's own F### spec - this type only lints it.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.GitHubActionProject.Initializer"></a>

```typescript
import { GitHubActionProject } from '@xpertss/projen-types'

new GitHubActionProject(options: GitHubActionProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions">GitHubActionProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.GitHubActionProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.GitHubActionProjectOptions">GitHubActionProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.GitHubActionProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.GitHubActionProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.GitHubActionProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@xpertss/projen-types.GitHubActionProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@xpertss/projen-types.GitHubActionProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@xpertss/projen-types.GitHubActionProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@xpertss/projen-types.GitHubActionProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@xpertss/projen-types.GitHubActionProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@xpertss/projen-types.GitHubActionProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@xpertss/projen-types.GitHubActionProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.GitHubActionProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@xpertss/projen-types.GitHubActionProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@xpertss/projen-types.GitHubActionProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@xpertss/projen-types.GitHubActionProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.GitHubActionProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.GitHubActionProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@xpertss/projen-types.GitHubActionProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.GitHubActionProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@xpertss/projen-types.GitHubActionProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@xpertss/projen-types.GitHubActionProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@xpertss/projen-types.GitHubActionProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@xpertss/projen-types.GitHubActionProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.GitHubActionProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@xpertss/projen-types.GitHubActionProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.GitHubActionProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@xpertss/projen-types.GitHubActionProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.GitHubActionProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.GitHubActionProject.isConstruct"></a>

```typescript
import { GitHubActionProject } from '@xpertss/projen-types'

GitHubActionProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.GitHubActionProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@xpertss/projen-types.GitHubActionProject.isProject"></a>

```typescript
import { GitHubActionProject } from '@xpertss/projen-types'

GitHubActionProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.GitHubActionProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@xpertss/projen-types.GitHubActionProject.of"></a>

```typescript
import { GitHubActionProject } from '@xpertss/projen-types'

GitHubActionProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@xpertss/projen-types.GitHubActionProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.buildWorkflow">buildWorkflow</a></code> | <code><a href="#@xpertss/projen-types.ActionBuildWorkflow">ActionBuildWorkflow</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.dogfoodWorkflow">dogfoodWorkflow</a></code> | <code><a href="#@xpertss/projen-types.ActionDogfoodWorkflow">ActionDogfoodWorkflow</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.release">release</a></code> | <code>projen.release.Release</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.sonarWorkflow">sonarWorkflow</a></code> | <code><a href="#@xpertss/projen-types.ActionSonarWorkflow">ActionSonarWorkflow</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.GitHubActionProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@xpertss/projen-types.GitHubActionProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@xpertss/projen-types.GitHubActionProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@xpertss/projen-types.GitHubActionProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@xpertss/projen-types.GitHubActionProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.GitHubActionProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@xpertss/projen-types.GitHubActionProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@xpertss/projen-types.GitHubActionProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@xpertss/projen-types.GitHubActionProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@xpertss/projen-types.GitHubActionProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@xpertss/projen-types.GitHubActionProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.GitHubActionProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@xpertss/projen-types.GitHubActionProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@xpertss/projen-types.GitHubActionProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@xpertss/projen-types.GitHubActionProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@xpertss/projen-types.GitHubActionProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@xpertss/projen-types.GitHubActionProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@xpertss/projen-types.GitHubActionProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@xpertss/projen-types.GitHubActionProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@xpertss/projen-types.GitHubActionProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@xpertss/projen-types.GitHubActionProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@xpertss/projen-types.GitHubActionProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@xpertss/projen-types.GitHubActionProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@xpertss/projen-types.GitHubActionProject.property.initProject"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="@xpertss/projen-types.GitHubActionProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@xpertss/projen-types.GitHubActionProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@xpertss/projen-types.GitHubActionProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@xpertss/projen-types.GitHubActionProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@xpertss/projen-types.GitHubActionProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@xpertss/projen-types.GitHubActionProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `buildWorkflow`<sup>Required</sup> <a name="buildWorkflow" id="@xpertss/projen-types.GitHubActionProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: ActionBuildWorkflow;
```

- *Type:* <a href="#@xpertss/projen-types.ActionBuildWorkflow">ActionBuildWorkflow</a>

---

##### `dogfoodWorkflow`<sup>Required</sup> <a name="dogfoodWorkflow" id="@xpertss/projen-types.GitHubActionProject.property.dogfoodWorkflow"></a>

```typescript
public readonly dogfoodWorkflow: ActionDogfoodWorkflow;
```

- *Type:* <a href="#@xpertss/projen-types.ActionDogfoodWorkflow">ActionDogfoodWorkflow</a>

---

##### `release`<sup>Required</sup> <a name="release" id="@xpertss/projen-types.GitHubActionProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

---

##### `sonarWorkflow`<sup>Required</sup> <a name="sonarWorkflow" id="@xpertss/projen-types.GitHubActionProject.property.sonarWorkflow"></a>

```typescript
public readonly sonarWorkflow: ActionSonarWorkflow;
```

- *Type:* <a href="#@xpertss/projen-types.ActionSonarWorkflow">ActionSonarWorkflow</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.GitHubActionProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@xpertss/projen-types.GitHubActionProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### GitHubPackagesPublish <a name="GitHubPackagesPublish" id="@xpertss/projen-types.GitHubPackagesPublish"></a>

On-demand publish to GitHub Packages.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.GitHubPackagesPublish.Initializer"></a>

```typescript
import { GitHubPackagesPublish } from '@xpertss/projen-types'

new GitHubPackagesPublish(project: JavaMavenProject, options?: GitHubPackagesPublishOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.Initializer.parameter.project">project</a></code> | <code><a href="#@xpertss/projen-types.JavaMavenProject">JavaMavenProject</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.GitHubPackagesPublish.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.GitHubPackagesPublishOptions">GitHubPackagesPublishOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.GitHubPackagesPublish.Initializer.parameter.project"></a>

- *Type:* <a href="#@xpertss/projen-types.JavaMavenProject">JavaMavenProject</a>

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
| <code><a href="#@xpertss/projen-types.JavaAppProject.addBom">addBom</a></code> | Imports a BOM into the root `<dependencyManagement>` (`type=pom`, `scope=import`). |
| <code><a href="#@xpertss/projen-types.JavaAppProject.addDependency">addDependency</a></code> | Adds a compile-scope dependency to the root pom. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.addManagedDependency">addManagedDependency</a></code> | Pins a version in the root `<dependencyManagement>` without adding the dependency, so modules (or the root) can use it versionless. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.addModule">addModule</a></code> | Adds a Maven module in `dir` (relative to the repo root; |
| <code><a href="#@xpertss/projen-types.JavaAppProject.addPlugin">addPlugin</a></code> | Adds a build plugin to the root pom (inherited by every module). |
| <code><a href="#@xpertss/projen-types.JavaAppProject.addTestDependency">addTestDependency</a></code> | Adds a test-scope dependency to the root pom (inherited by every module). |
| <code><a href="#@xpertss/projen-types.JavaAppProject.pinnedVersion">pinnedVersion</a></code> | The exact version this project uses for a `groupId/artifactId` it pins by default: the `pluginVersions` override if set, otherwise the default for `javaVersion`. |

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

##### `addBom` <a name="addBom" id="@xpertss/projen-types.JavaAppProject.addBom"></a>

```typescript
public addBom(spec: string): void
```

Imports a BOM into the root `<dependencyManagement>` (`type=pom`, `scope=import`).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaAppProject.addBom.parameter.spec"></a>

- *Type:* string

`groupId/artifactId@version`.

---

##### `addDependency` <a name="addDependency" id="@xpertss/projen-types.JavaAppProject.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a compile-scope dependency to the root pom.

In a multi-module
project every module inherits it; use `MavenModule.addDependency` for
one module.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaAppProject.addDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId[@version]` - exact version, or none when a BOM manages it.

---

##### `addManagedDependency` <a name="addManagedDependency" id="@xpertss/projen-types.JavaAppProject.addManagedDependency"></a>

```typescript
public addManagedDependency(spec: string): void
```

Pins a version in the root `<dependencyManagement>` without adding the dependency, so modules (or the root) can use it versionless.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaAppProject.addManagedDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId@version`.

---

##### `addModule` <a name="addModule" id="@xpertss/projen-types.JavaAppProject.addModule"></a>

```typescript
public addModule(options: MavenModuleOptions): MavenModule
```

Adds a Maven module in `dir` (relative to the repo root;

may be nested,
e.g. `tools/stub-model`) and turns the root pom into the reactor parent
(`packaging=pom`, `<modules>` in the order added). The parent manages
every module at `${project.version}`, so modules depend on each other
with `addModuleDependency()`, versionless.

###### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.JavaAppProject.addModule.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenModuleOptions">MavenModuleOptions</a>

---

##### `addPlugin` <a name="addPlugin" id="@xpertss/projen-types.JavaAppProject.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): void
```

Adds a build plugin to the root pom (inherited by every module).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaAppProject.addPlugin.parameter.spec"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.JavaAppProject.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

---

##### `addTestDependency` <a name="addTestDependency" id="@xpertss/projen-types.JavaAppProject.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a test-scope dependency to the root pom (inherited by every module).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaAppProject.addTestDependency.parameter.spec"></a>

- *Type:* string

---

##### `pinnedVersion` <a name="pinnedVersion" id="@xpertss/projen-types.JavaAppProject.pinnedVersion"></a>

```typescript
public pinnedVersion(coordinates: string): string
```

The exact version this project uses for a `groupId/artifactId` it pins by default: the `pluginVersions` override if set, otherwise the default for `javaVersion`.

###### `coordinates`<sup>Required</sup> <a name="coordinates" id="@xpertss/projen-types.JavaAppProject.pinnedVersion.parameter.coordinates"></a>

- *Type:* string

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
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.buildVerifyWorkflow">buildVerifyWorkflow</a></code> | <code>projen.github.TaskWorkflow</code> | The PR build workflow (`build.yml`). Add jobs to it with `buildVerifyWorkflow.addJob(id, job)`; use `ciSetupSteps` for a job that needs Node, the projen toolchain, and the JDK. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.ciSetupSteps">ciSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps that install Node (pinned), `npm ci`, and the project's JDK with a Maven cache - the setup every Maven CI job in this repo needs. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.javaVersion">javaVersion</a></code> | <code>string</code> | The canonical Java line the build targets (`1.8`, `17`, `21`, `25`). |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.modules">modules</a></code> | <code><a href="#@xpertss/projen-types.MavenModule">MavenModule</a>[]</code> | The modules added with `addModule()`, in order. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.pom">pom</a></code> | <code><a href="#@xpertss/projen-types.MavenPom">MavenPom</a></code> | The root `pom.xml`. |
| <code><a href="#@xpertss/projen-types.JavaAppProject.property.upgradeTask">upgradeTask</a></code> | <code>projen.Task</code> | Prints available dependency/plugin updates (`npx projen upgrade`). |

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

##### `buildVerifyWorkflow`<sup>Required</sup> <a name="buildVerifyWorkflow" id="@xpertss/projen-types.JavaAppProject.property.buildVerifyWorkflow"></a>

```typescript
public readonly buildVerifyWorkflow: TaskWorkflow;
```

- *Type:* projen.github.TaskWorkflow

The PR build workflow (`build.yml`). Add jobs to it with `buildVerifyWorkflow.addJob(id, job)`; use `ciSetupSteps` for a job that needs Node, the projen toolchain, and the JDK.

---

##### `ciSetupSteps`<sup>Required</sup> <a name="ciSetupSteps" id="@xpertss/projen-types.JavaAppProject.property.ciSetupSteps"></a>

```typescript
public readonly ciSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

Steps that install Node (pinned), `npm ci`, and the project's JDK with a Maven cache - the setup every Maven CI job in this repo needs.

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@xpertss/projen-types.JavaAppProject.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

The canonical Java line the build targets (`1.8`, `17`, `21`, `25`).

---

##### `modules`<sup>Required</sup> <a name="modules" id="@xpertss/projen-types.JavaAppProject.property.modules"></a>

```typescript
public readonly modules: MavenModule[];
```

- *Type:* <a href="#@xpertss/projen-types.MavenModule">MavenModule</a>[]

The modules added with `addModule()`, in order.

---

##### `pom`<sup>Required</sup> <a name="pom" id="@xpertss/projen-types.JavaAppProject.property.pom"></a>

```typescript
public readonly pom: MavenPom;
```

- *Type:* <a href="#@xpertss/projen-types.MavenPom">MavenPom</a>

The root `pom.xml`.

---

##### `upgradeTask`<sup>Required</sup> <a name="upgradeTask" id="@xpertss/projen-types.JavaAppProject.property.upgradeTask"></a>

```typescript
public readonly upgradeTask: Task;
```

- *Type:* projen.Task

Prints available dependency/plugin updates (`npx projen upgrade`).

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

Single- or
multi-module; attaches the source and javadoc jars Central requires (in a
reactor, every module inherits them).

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
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addBom">addBom</a></code> | Imports a BOM into the root `<dependencyManagement>` (`type=pom`, `scope=import`). |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addDependency">addDependency</a></code> | Adds a compile-scope dependency to the root pom. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addManagedDependency">addManagedDependency</a></code> | Pins a version in the root `<dependencyManagement>` without adding the dependency, so modules (or the root) can use it versionless. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addModule">addModule</a></code> | Adds a Maven module in `dir` (relative to the repo root; |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addPlugin">addPlugin</a></code> | Adds a build plugin to the root pom (inherited by every module). |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.addTestDependency">addTestDependency</a></code> | Adds a test-scope dependency to the root pom (inherited by every module). |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.pinnedVersion">pinnedVersion</a></code> | The exact version this project uses for a `groupId/artifactId` it pins by default: the `pluginVersions` override if set, otherwise the default for `javaVersion`. |

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

##### `addBom` <a name="addBom" id="@xpertss/projen-types.JavaLibraryProject.addBom"></a>

```typescript
public addBom(spec: string): void
```

Imports a BOM into the root `<dependencyManagement>` (`type=pom`, `scope=import`).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaLibraryProject.addBom.parameter.spec"></a>

- *Type:* string

`groupId/artifactId@version`.

---

##### `addDependency` <a name="addDependency" id="@xpertss/projen-types.JavaLibraryProject.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a compile-scope dependency to the root pom.

In a multi-module
project every module inherits it; use `MavenModule.addDependency` for
one module.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaLibraryProject.addDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId[@version]` - exact version, or none when a BOM manages it.

---

##### `addManagedDependency` <a name="addManagedDependency" id="@xpertss/projen-types.JavaLibraryProject.addManagedDependency"></a>

```typescript
public addManagedDependency(spec: string): void
```

Pins a version in the root `<dependencyManagement>` without adding the dependency, so modules (or the root) can use it versionless.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaLibraryProject.addManagedDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId@version`.

---

##### `addModule` <a name="addModule" id="@xpertss/projen-types.JavaLibraryProject.addModule"></a>

```typescript
public addModule(options: MavenModuleOptions): MavenModule
```

Adds a Maven module in `dir` (relative to the repo root;

may be nested,
e.g. `tools/stub-model`) and turns the root pom into the reactor parent
(`packaging=pom`, `<modules>` in the order added). The parent manages
every module at `${project.version}`, so modules depend on each other
with `addModuleDependency()`, versionless.

###### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.JavaLibraryProject.addModule.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenModuleOptions">MavenModuleOptions</a>

---

##### `addPlugin` <a name="addPlugin" id="@xpertss/projen-types.JavaLibraryProject.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): void
```

Adds a build plugin to the root pom (inherited by every module).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaLibraryProject.addPlugin.parameter.spec"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.JavaLibraryProject.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

---

##### `addTestDependency` <a name="addTestDependency" id="@xpertss/projen-types.JavaLibraryProject.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a test-scope dependency to the root pom (inherited by every module).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaLibraryProject.addTestDependency.parameter.spec"></a>

- *Type:* string

---

##### `pinnedVersion` <a name="pinnedVersion" id="@xpertss/projen-types.JavaLibraryProject.pinnedVersion"></a>

```typescript
public pinnedVersion(coordinates: string): string
```

The exact version this project uses for a `groupId/artifactId` it pins by default: the `pluginVersions` override if set, otherwise the default for `javaVersion`.

###### `coordinates`<sup>Required</sup> <a name="coordinates" id="@xpertss/projen-types.JavaLibraryProject.pinnedVersion.parameter.coordinates"></a>

- *Type:* string

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
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.buildVerifyWorkflow">buildVerifyWorkflow</a></code> | <code>projen.github.TaskWorkflow</code> | The PR build workflow (`build.yml`). Add jobs to it with `buildVerifyWorkflow.addJob(id, job)`; use `ciSetupSteps` for a job that needs Node, the projen toolchain, and the JDK. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.ciSetupSteps">ciSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps that install Node (pinned), `npm ci`, and the project's JDK with a Maven cache - the setup every Maven CI job in this repo needs. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.javaVersion">javaVersion</a></code> | <code>string</code> | The canonical Java line the build targets (`1.8`, `17`, `21`, `25`). |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.modules">modules</a></code> | <code><a href="#@xpertss/projen-types.MavenModule">MavenModule</a>[]</code> | The modules added with `addModule()`, in order. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.pom">pom</a></code> | <code><a href="#@xpertss/projen-types.MavenPom">MavenPom</a></code> | The root `pom.xml`. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProject.property.upgradeTask">upgradeTask</a></code> | <code>projen.Task</code> | Prints available dependency/plugin updates (`npx projen upgrade`). |

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

##### `buildVerifyWorkflow`<sup>Required</sup> <a name="buildVerifyWorkflow" id="@xpertss/projen-types.JavaLibraryProject.property.buildVerifyWorkflow"></a>

```typescript
public readonly buildVerifyWorkflow: TaskWorkflow;
```

- *Type:* projen.github.TaskWorkflow

The PR build workflow (`build.yml`). Add jobs to it with `buildVerifyWorkflow.addJob(id, job)`; use `ciSetupSteps` for a job that needs Node, the projen toolchain, and the JDK.

---

##### `ciSetupSteps`<sup>Required</sup> <a name="ciSetupSteps" id="@xpertss/projen-types.JavaLibraryProject.property.ciSetupSteps"></a>

```typescript
public readonly ciSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

Steps that install Node (pinned), `npm ci`, and the project's JDK with a Maven cache - the setup every Maven CI job in this repo needs.

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@xpertss/projen-types.JavaLibraryProject.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

The canonical Java line the build targets (`1.8`, `17`, `21`, `25`).

---

##### `modules`<sup>Required</sup> <a name="modules" id="@xpertss/projen-types.JavaLibraryProject.property.modules"></a>

```typescript
public readonly modules: MavenModule[];
```

- *Type:* <a href="#@xpertss/projen-types.MavenModule">MavenModule</a>[]

The modules added with `addModule()`, in order.

---

##### `pom`<sup>Required</sup> <a name="pom" id="@xpertss/projen-types.JavaLibraryProject.property.pom"></a>

```typescript
public readonly pom: MavenPom;
```

- *Type:* <a href="#@xpertss/projen-types.MavenPom">MavenPom</a>

The root `pom.xml`.

---

##### `upgradeTask`<sup>Required</sup> <a name="upgradeTask" id="@xpertss/projen-types.JavaLibraryProject.property.upgradeTask"></a>

```typescript
public readonly upgradeTask: Task;
```

- *Type:* projen.Task

Prints available dependency/plugin updates (`npx projen upgrade`).

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

Baseline Maven project, single- or multi-module, with no framework assumptions.

It is the base of every Java type in this package and is
usable on its own (`projen new ... java_maven`).

- The pom is written by this package (`MavenPom`), not projen's
  `java.Pom`: exact versions only, BOM imports, `<modules>`,
  `<dependencyManagement>`, `<pluginManagement>`.
- Everything Java-version-dependent (compiler level, enforcer rule, JUnit
  line, CI JDK) follows `javaVersion`.
- With no `addModule()` calls the root pom is the artifact. After the
  first `addModule()` it is a `pom`-packaged reactor parent and the
  modules inherit its plugins and test dependencies.
- `npx projen build` synthesizes, then runs Maven once: `mvn -B verify`
  (unit tests via surefire, `*IT` tests via failsafe).
- CI: a PR build (with an optional SonarQube scan), the projen drift
  check, and a nightly report-only update check.

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
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addBom">addBom</a></code> | Imports a BOM into the root `<dependencyManagement>` (`type=pom`, `scope=import`). |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addDependency">addDependency</a></code> | Adds a compile-scope dependency to the root pom. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addManagedDependency">addManagedDependency</a></code> | Pins a version in the root `<dependencyManagement>` without adding the dependency, so modules (or the root) can use it versionless. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addModule">addModule</a></code> | Adds a Maven module in `dir` (relative to the repo root; |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addPlugin">addPlugin</a></code> | Adds a build plugin to the root pom (inherited by every module). |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.addTestDependency">addTestDependency</a></code> | Adds a test-scope dependency to the root pom (inherited by every module). |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.pinnedVersion">pinnedVersion</a></code> | The exact version this project uses for a `groupId/artifactId` it pins by default: the `pluginVersions` override if set, otherwise the default for `javaVersion`. |

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

##### `addBom` <a name="addBom" id="@xpertss/projen-types.JavaMavenProject.addBom"></a>

```typescript
public addBom(spec: string): void
```

Imports a BOM into the root `<dependencyManagement>` (`type=pom`, `scope=import`).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaMavenProject.addBom.parameter.spec"></a>

- *Type:* string

`groupId/artifactId@version`.

---

##### `addDependency` <a name="addDependency" id="@xpertss/projen-types.JavaMavenProject.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a compile-scope dependency to the root pom.

In a multi-module
project every module inherits it; use `MavenModule.addDependency` for
one module.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaMavenProject.addDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId[@version]` - exact version, or none when a BOM manages it.

---

##### `addManagedDependency` <a name="addManagedDependency" id="@xpertss/projen-types.JavaMavenProject.addManagedDependency"></a>

```typescript
public addManagedDependency(spec: string): void
```

Pins a version in the root `<dependencyManagement>` without adding the dependency, so modules (or the root) can use it versionless.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaMavenProject.addManagedDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId@version`.

---

##### `addModule` <a name="addModule" id="@xpertss/projen-types.JavaMavenProject.addModule"></a>

```typescript
public addModule(options: MavenModuleOptions): MavenModule
```

Adds a Maven module in `dir` (relative to the repo root;

may be nested,
e.g. `tools/stub-model`) and turns the root pom into the reactor parent
(`packaging=pom`, `<modules>` in the order added). The parent manages
every module at `${project.version}`, so modules depend on each other
with `addModuleDependency()`, versionless.

###### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.JavaMavenProject.addModule.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenModuleOptions">MavenModuleOptions</a>

---

##### `addPlugin` <a name="addPlugin" id="@xpertss/projen-types.JavaMavenProject.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): void
```

Adds a build plugin to the root pom (inherited by every module).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaMavenProject.addPlugin.parameter.spec"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.JavaMavenProject.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

---

##### `addTestDependency` <a name="addTestDependency" id="@xpertss/projen-types.JavaMavenProject.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a test-scope dependency to the root pom (inherited by every module).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaMavenProject.addTestDependency.parameter.spec"></a>

- *Type:* string

---

##### `pinnedVersion` <a name="pinnedVersion" id="@xpertss/projen-types.JavaMavenProject.pinnedVersion"></a>

```typescript
public pinnedVersion(coordinates: string): string
```

The exact version this project uses for a `groupId/artifactId` it pins by default: the `pluginVersions` override if set, otherwise the default for `javaVersion`.

###### `coordinates`<sup>Required</sup> <a name="coordinates" id="@xpertss/projen-types.JavaMavenProject.pinnedVersion.parameter.coordinates"></a>

- *Type:* string

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
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.buildVerifyWorkflow">buildVerifyWorkflow</a></code> | <code>projen.github.TaskWorkflow</code> | The PR build workflow (`build.yml`). Add jobs to it with `buildVerifyWorkflow.addJob(id, job)`; use `ciSetupSteps` for a job that needs Node, the projen toolchain, and the JDK. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.ciSetupSteps">ciSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps that install Node (pinned), `npm ci`, and the project's JDK with a Maven cache - the setup every Maven CI job in this repo needs. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.javaVersion">javaVersion</a></code> | <code>string</code> | The canonical Java line the build targets (`1.8`, `17`, `21`, `25`). |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.modules">modules</a></code> | <code><a href="#@xpertss/projen-types.MavenModule">MavenModule</a>[]</code> | The modules added with `addModule()`, in order. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.pom">pom</a></code> | <code><a href="#@xpertss/projen-types.MavenPom">MavenPom</a></code> | The root `pom.xml`. |
| <code><a href="#@xpertss/projen-types.JavaMavenProject.property.upgradeTask">upgradeTask</a></code> | <code>projen.Task</code> | Prints available dependency/plugin updates (`npx projen upgrade`). |

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

##### `buildVerifyWorkflow`<sup>Required</sup> <a name="buildVerifyWorkflow" id="@xpertss/projen-types.JavaMavenProject.property.buildVerifyWorkflow"></a>

```typescript
public readonly buildVerifyWorkflow: TaskWorkflow;
```

- *Type:* projen.github.TaskWorkflow

The PR build workflow (`build.yml`). Add jobs to it with `buildVerifyWorkflow.addJob(id, job)`; use `ciSetupSteps` for a job that needs Node, the projen toolchain, and the JDK.

---

##### `ciSetupSteps`<sup>Required</sup> <a name="ciSetupSteps" id="@xpertss/projen-types.JavaMavenProject.property.ciSetupSteps"></a>

```typescript
public readonly ciSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

Steps that install Node (pinned), `npm ci`, and the project's JDK with a Maven cache - the setup every Maven CI job in this repo needs.

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@xpertss/projen-types.JavaMavenProject.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

The canonical Java line the build targets (`1.8`, `17`, `21`, `25`).

---

##### `modules`<sup>Required</sup> <a name="modules" id="@xpertss/projen-types.JavaMavenProject.property.modules"></a>

```typescript
public readonly modules: MavenModule[];
```

- *Type:* <a href="#@xpertss/projen-types.MavenModule">MavenModule</a>[]

The modules added with `addModule()`, in order.

---

##### `pom`<sup>Required</sup> <a name="pom" id="@xpertss/projen-types.JavaMavenProject.property.pom"></a>

```typescript
public readonly pom: MavenPom;
```

- *Type:* <a href="#@xpertss/projen-types.MavenPom">MavenPom</a>

The root `pom.xml`.

---

##### `upgradeTask`<sup>Required</sup> <a name="upgradeTask" id="@xpertss/projen-types.JavaMavenProject.property.upgradeTask"></a>

```typescript
public readonly upgradeTask: Task;
```

- *Type:* projen.Task

Prints available dependency/plugin updates (`npx projen upgrade`).

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

Spring Boot service application deployed as a container: `JavaSpringBootProject` plus Docker publishing (Docker Hub by default - never Maven Central), Flyway, and a CDK deploy hook.

Publish and deploy
are both manual-dispatch, not on every merge.

Single-module only: the Docker build, Flyway migrations and deploy hook
all assume one deployable at the repo root. For a multi-module Spring Boot
repo use `JavaSpringBootProject`.

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
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addBom">addBom</a></code> | Imports a BOM into the root `<dependencyManagement>` (`type=pom`, `scope=import`). |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addDependency">addDependency</a></code> | Adds a compile-scope dependency to the root pom. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addManagedDependency">addManagedDependency</a></code> | Pins a version in the root `<dependencyManagement>` without adding the dependency, so modules (or the root) can use it versionless. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addModule">addModule</a></code> | Not supported: `JavaServiceProject` is single-module. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addPlugin">addPlugin</a></code> | Adds a build plugin to the root pom (inherited by every module). |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addTestDependency">addTestDependency</a></code> | Adds a test-scope dependency to the root pom (inherited by every module). |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.pinnedVersion">pinnedVersion</a></code> | The exact version this project uses for a `groupId/artifactId` it pins by default: the `pluginVersions` override if set, otherwise the default for `javaVersion`. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.addSpringBootModule">addSpringBootModule</a></code> | Adds a module that is a Spring Boot application: like `addModule()`, plus `spring-boot-maven-plugin`'s `repackage`, which turns the module's jar into an executable one. |

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

##### `addBom` <a name="addBom" id="@xpertss/projen-types.JavaServiceProject.addBom"></a>

```typescript
public addBom(spec: string): void
```

Imports a BOM into the root `<dependencyManagement>` (`type=pom`, `scope=import`).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaServiceProject.addBom.parameter.spec"></a>

- *Type:* string

`groupId/artifactId@version`.

---

##### `addDependency` <a name="addDependency" id="@xpertss/projen-types.JavaServiceProject.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a compile-scope dependency to the root pom.

In a multi-module
project every module inherits it; use `MavenModule.addDependency` for
one module.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaServiceProject.addDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId[@version]` - exact version, or none when a BOM manages it.

---

##### `addManagedDependency` <a name="addManagedDependency" id="@xpertss/projen-types.JavaServiceProject.addManagedDependency"></a>

```typescript
public addManagedDependency(spec: string): void
```

Pins a version in the root `<dependencyManagement>` without adding the dependency, so modules (or the root) can use it versionless.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaServiceProject.addManagedDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId@version`.

---

##### `addModule` <a name="addModule" id="@xpertss/projen-types.JavaServiceProject.addModule"></a>

```typescript
public addModule(_options: MavenModuleOptions): MavenModule
```

Not supported: `JavaServiceProject` is single-module.

Use
`JavaSpringBootProject` for a multi-module Spring Boot repo.

###### `_options`<sup>Required</sup> <a name="_options" id="@xpertss/projen-types.JavaServiceProject.addModule.parameter._options"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenModuleOptions">MavenModuleOptions</a>

---

##### `addPlugin` <a name="addPlugin" id="@xpertss/projen-types.JavaServiceProject.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): void
```

Adds a build plugin to the root pom (inherited by every module).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaServiceProject.addPlugin.parameter.spec"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.JavaServiceProject.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

---

##### `addTestDependency` <a name="addTestDependency" id="@xpertss/projen-types.JavaServiceProject.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a test-scope dependency to the root pom (inherited by every module).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaServiceProject.addTestDependency.parameter.spec"></a>

- *Type:* string

---

##### `pinnedVersion` <a name="pinnedVersion" id="@xpertss/projen-types.JavaServiceProject.pinnedVersion"></a>

```typescript
public pinnedVersion(coordinates: string): string
```

The exact version this project uses for a `groupId/artifactId` it pins by default: the `pluginVersions` override if set, otherwise the default for `javaVersion`.

###### `coordinates`<sup>Required</sup> <a name="coordinates" id="@xpertss/projen-types.JavaServiceProject.pinnedVersion.parameter.coordinates"></a>

- *Type:* string

---

##### `addSpringBootModule` <a name="addSpringBootModule" id="@xpertss/projen-types.JavaServiceProject.addSpringBootModule"></a>

```typescript
public addSpringBootModule(options: MavenModuleOptions): MavenModule
```

Adds a module that is a Spring Boot application: like `addModule()`, plus `spring-boot-maven-plugin`'s `repackage`, which turns the module's jar into an executable one.

###### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.JavaServiceProject.addSpringBootModule.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenModuleOptions">MavenModuleOptions</a>

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
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.buildVerifyWorkflow">buildVerifyWorkflow</a></code> | <code>projen.github.TaskWorkflow</code> | The PR build workflow (`build.yml`). Add jobs to it with `buildVerifyWorkflow.addJob(id, job)`; use `ciSetupSteps` for a job that needs Node, the projen toolchain, and the JDK. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.ciSetupSteps">ciSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps that install Node (pinned), `npm ci`, and the project's JDK with a Maven cache - the setup every Maven CI job in this repo needs. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.javaVersion">javaVersion</a></code> | <code>string</code> | The canonical Java line the build targets (`1.8`, `17`, `21`, `25`). |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.modules">modules</a></code> | <code><a href="#@xpertss/projen-types.MavenModule">MavenModule</a>[]</code> | The modules added with `addModule()`, in order. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.pom">pom</a></code> | <code><a href="#@xpertss/projen-types.MavenPom">MavenPom</a></code> | The root `pom.xml`. |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.upgradeTask">upgradeTask</a></code> | <code>projen.Task</code> | Prints available dependency/plugin updates (`npx projen upgrade`). |
| <code><a href="#@xpertss/projen-types.JavaServiceProject.property.springBootVersion">springBootVersion</a></code> | <code>string</code> | The Spring Boot version (BOM and Maven plugin). |

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

##### `buildVerifyWorkflow`<sup>Required</sup> <a name="buildVerifyWorkflow" id="@xpertss/projen-types.JavaServiceProject.property.buildVerifyWorkflow"></a>

```typescript
public readonly buildVerifyWorkflow: TaskWorkflow;
```

- *Type:* projen.github.TaskWorkflow

The PR build workflow (`build.yml`). Add jobs to it with `buildVerifyWorkflow.addJob(id, job)`; use `ciSetupSteps` for a job that needs Node, the projen toolchain, and the JDK.

---

##### `ciSetupSteps`<sup>Required</sup> <a name="ciSetupSteps" id="@xpertss/projen-types.JavaServiceProject.property.ciSetupSteps"></a>

```typescript
public readonly ciSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

Steps that install Node (pinned), `npm ci`, and the project's JDK with a Maven cache - the setup every Maven CI job in this repo needs.

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@xpertss/projen-types.JavaServiceProject.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

The canonical Java line the build targets (`1.8`, `17`, `21`, `25`).

---

##### `modules`<sup>Required</sup> <a name="modules" id="@xpertss/projen-types.JavaServiceProject.property.modules"></a>

```typescript
public readonly modules: MavenModule[];
```

- *Type:* <a href="#@xpertss/projen-types.MavenModule">MavenModule</a>[]

The modules added with `addModule()`, in order.

---

##### `pom`<sup>Required</sup> <a name="pom" id="@xpertss/projen-types.JavaServiceProject.property.pom"></a>

```typescript
public readonly pom: MavenPom;
```

- *Type:* <a href="#@xpertss/projen-types.MavenPom">MavenPom</a>

The root `pom.xml`.

---

##### `upgradeTask`<sup>Required</sup> <a name="upgradeTask" id="@xpertss/projen-types.JavaServiceProject.property.upgradeTask"></a>

```typescript
public readonly upgradeTask: Task;
```

- *Type:* projen.Task

Prints available dependency/plugin updates (`npx projen upgrade`).

---

##### `springBootVersion`<sup>Required</sup> <a name="springBootVersion" id="@xpertss/projen-types.JavaServiceProject.property.springBootVersion"></a>

```typescript
public readonly springBootVersion: string;
```

- *Type:* string

The Spring Boot version (BOM and Maven plugin).

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

### JavaSpringBootProject <a name="JavaSpringBootProject" id="@xpertss/projen-types.JavaSpringBootProject"></a>

Spring Boot on Maven, single- or multi-module, with no Docker, Flyway or CDK - `JavaMavenProject` plus Spring Boot dependency management.

`spring-boot-dependencies` is imported as the first BOM, so starters and
  the libraries Boot manages (JUnit included) are added versionless.
- `spring-boot-maven-plugin` is versioned in `<pluginManagement>`. A
  single-module project repackages its root jar into an executable one.
  In a multi-module project only modules added with
  `addSpringBootModule()` are repackaged; `addModule()` modules stay plain
  jars (shared libraries, clients, ...).

`JavaServiceProject` builds on this and adds Docker publishing, Flyway,
and a CDK deploy hook.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.JavaSpringBootProject.Initializer"></a>

```typescript
import { JavaSpringBootProject } from '@xpertss/projen-types'

new JavaSpringBootProject(options: JavaSpringBootProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions">JavaSpringBootProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.JavaSpringBootProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.JavaSpringBootProjectOptions">JavaSpringBootProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.addBom">addBom</a></code> | Imports a BOM into the root `<dependencyManagement>` (`type=pom`, `scope=import`). |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.addDependency">addDependency</a></code> | Adds a compile-scope dependency to the root pom. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.addManagedDependency">addManagedDependency</a></code> | Pins a version in the root `<dependencyManagement>` without adding the dependency, so modules (or the root) can use it versionless. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.addModule">addModule</a></code> | Adds a Maven module in `dir` (relative to the repo root; |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.addPlugin">addPlugin</a></code> | Adds a build plugin to the root pom (inherited by every module). |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.addTestDependency">addTestDependency</a></code> | Adds a test-scope dependency to the root pom (inherited by every module). |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.pinnedVersion">pinnedVersion</a></code> | The exact version this project uses for a `groupId/artifactId` it pins by default: the `pluginVersions` override if set, otherwise the default for `javaVersion`. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.addSpringBootModule">addSpringBootModule</a></code> | Adds a module that is a Spring Boot application: like `addModule()`, plus `spring-boot-maven-plugin`'s `repackage`, which turns the module's jar into an executable one. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.JavaSpringBootProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.JavaSpringBootProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.JavaSpringBootProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@xpertss/projen-types.JavaSpringBootProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@xpertss/projen-types.JavaSpringBootProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@xpertss/projen-types.JavaSpringBootProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@xpertss/projen-types.JavaSpringBootProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@xpertss/projen-types.JavaSpringBootProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@xpertss/projen-types.JavaSpringBootProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@xpertss/projen-types.JavaSpringBootProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaSpringBootProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@xpertss/projen-types.JavaSpringBootProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@xpertss/projen-types.JavaSpringBootProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@xpertss/projen-types.JavaSpringBootProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.JavaSpringBootProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.JavaSpringBootProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@xpertss/projen-types.JavaSpringBootProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaSpringBootProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@xpertss/projen-types.JavaSpringBootProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@xpertss/projen-types.JavaSpringBootProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@xpertss/projen-types.JavaSpringBootProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@xpertss/projen-types.JavaSpringBootProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaSpringBootProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@xpertss/projen-types.JavaSpringBootProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaSpringBootProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@xpertss/projen-types.JavaSpringBootProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.JavaSpringBootProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBom` <a name="addBom" id="@xpertss/projen-types.JavaSpringBootProject.addBom"></a>

```typescript
public addBom(spec: string): void
```

Imports a BOM into the root `<dependencyManagement>` (`type=pom`, `scope=import`).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaSpringBootProject.addBom.parameter.spec"></a>

- *Type:* string

`groupId/artifactId@version`.

---

##### `addDependency` <a name="addDependency" id="@xpertss/projen-types.JavaSpringBootProject.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a compile-scope dependency to the root pom.

In a multi-module
project every module inherits it; use `MavenModule.addDependency` for
one module.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaSpringBootProject.addDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId[@version]` - exact version, or none when a BOM manages it.

---

##### `addManagedDependency` <a name="addManagedDependency" id="@xpertss/projen-types.JavaSpringBootProject.addManagedDependency"></a>

```typescript
public addManagedDependency(spec: string): void
```

Pins a version in the root `<dependencyManagement>` without adding the dependency, so modules (or the root) can use it versionless.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaSpringBootProject.addManagedDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId@version`.

---

##### `addModule` <a name="addModule" id="@xpertss/projen-types.JavaSpringBootProject.addModule"></a>

```typescript
public addModule(options: MavenModuleOptions): MavenModule
```

Adds a Maven module in `dir` (relative to the repo root;

may be nested,
e.g. `tools/stub-model`) and turns the root pom into the reactor parent
(`packaging=pom`, `<modules>` in the order added). The parent manages
every module at `${project.version}`, so modules depend on each other
with `addModuleDependency()`, versionless.

###### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.JavaSpringBootProject.addModule.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenModuleOptions">MavenModuleOptions</a>

---

##### `addPlugin` <a name="addPlugin" id="@xpertss/projen-types.JavaSpringBootProject.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): void
```

Adds a build plugin to the root pom (inherited by every module).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaSpringBootProject.addPlugin.parameter.spec"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.JavaSpringBootProject.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

---

##### `addTestDependency` <a name="addTestDependency" id="@xpertss/projen-types.JavaSpringBootProject.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a test-scope dependency to the root pom (inherited by every module).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.JavaSpringBootProject.addTestDependency.parameter.spec"></a>

- *Type:* string

---

##### `pinnedVersion` <a name="pinnedVersion" id="@xpertss/projen-types.JavaSpringBootProject.pinnedVersion"></a>

```typescript
public pinnedVersion(coordinates: string): string
```

The exact version this project uses for a `groupId/artifactId` it pins by default: the `pluginVersions` override if set, otherwise the default for `javaVersion`.

###### `coordinates`<sup>Required</sup> <a name="coordinates" id="@xpertss/projen-types.JavaSpringBootProject.pinnedVersion.parameter.coordinates"></a>

- *Type:* string

---

##### `addSpringBootModule` <a name="addSpringBootModule" id="@xpertss/projen-types.JavaSpringBootProject.addSpringBootModule"></a>

```typescript
public addSpringBootModule(options: MavenModuleOptions): MavenModule
```

Adds a module that is a Spring Boot application: like `addModule()`, plus `spring-boot-maven-plugin`'s `repackage`, which turns the module's jar into an executable one.

###### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.JavaSpringBootProject.addSpringBootModule.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenModuleOptions">MavenModuleOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.JavaSpringBootProject.isConstruct"></a>

```typescript
import { JavaSpringBootProject } from '@xpertss/projen-types'

JavaSpringBootProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.JavaSpringBootProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@xpertss/projen-types.JavaSpringBootProject.isProject"></a>

```typescript
import { JavaSpringBootProject } from '@xpertss/projen-types'

JavaSpringBootProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.JavaSpringBootProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@xpertss/projen-types.JavaSpringBootProject.of"></a>

```typescript
import { JavaSpringBootProject } from '@xpertss/projen-types'

JavaSpringBootProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@xpertss/projen-types.JavaSpringBootProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.buildVerifyWorkflow">buildVerifyWorkflow</a></code> | <code>projen.github.TaskWorkflow</code> | The PR build workflow (`build.yml`). Add jobs to it with `buildVerifyWorkflow.addJob(id, job)`; use `ciSetupSteps` for a job that needs Node, the projen toolchain, and the JDK. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.ciSetupSteps">ciSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps that install Node (pinned), `npm ci`, and the project's JDK with a Maven cache - the setup every Maven CI job in this repo needs. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.javaVersion">javaVersion</a></code> | <code>string</code> | The canonical Java line the build targets (`1.8`, `17`, `21`, `25`). |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.modules">modules</a></code> | <code><a href="#@xpertss/projen-types.MavenModule">MavenModule</a>[]</code> | The modules added with `addModule()`, in order. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.pom">pom</a></code> | <code><a href="#@xpertss/projen-types.MavenPom">MavenPom</a></code> | The root `pom.xml`. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.upgradeTask">upgradeTask</a></code> | <code>projen.Task</code> | Prints available dependency/plugin updates (`npx projen upgrade`). |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.springBootVersion">springBootVersion</a></code> | <code>string</code> | The Spring Boot version (BOM and Maven plugin). |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.JavaSpringBootProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@xpertss/projen-types.JavaSpringBootProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@xpertss/projen-types.JavaSpringBootProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@xpertss/projen-types.JavaSpringBootProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@xpertss/projen-types.JavaSpringBootProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@xpertss/projen-types.JavaSpringBootProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@xpertss/projen-types.JavaSpringBootProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@xpertss/projen-types.JavaSpringBootProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@xpertss/projen-types.JavaSpringBootProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@xpertss/projen-types.JavaSpringBootProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@xpertss/projen-types.JavaSpringBootProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaSpringBootProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@xpertss/projen-types.JavaSpringBootProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@xpertss/projen-types.JavaSpringBootProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@xpertss/projen-types.JavaSpringBootProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@xpertss/projen-types.JavaSpringBootProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@xpertss/projen-types.JavaSpringBootProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@xpertss/projen-types.JavaSpringBootProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@xpertss/projen-types.JavaSpringBootProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@xpertss/projen-types.JavaSpringBootProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@xpertss/projen-types.JavaSpringBootProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@xpertss/projen-types.JavaSpringBootProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@xpertss/projen-types.JavaSpringBootProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@xpertss/projen-types.JavaSpringBootProject.property.initProject"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="@xpertss/projen-types.JavaSpringBootProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@xpertss/projen-types.JavaSpringBootProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@xpertss/projen-types.JavaSpringBootProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@xpertss/projen-types.JavaSpringBootProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@xpertss/projen-types.JavaSpringBootProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@xpertss/projen-types.JavaSpringBootProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `buildVerifyWorkflow`<sup>Required</sup> <a name="buildVerifyWorkflow" id="@xpertss/projen-types.JavaSpringBootProject.property.buildVerifyWorkflow"></a>

```typescript
public readonly buildVerifyWorkflow: TaskWorkflow;
```

- *Type:* projen.github.TaskWorkflow

The PR build workflow (`build.yml`). Add jobs to it with `buildVerifyWorkflow.addJob(id, job)`; use `ciSetupSteps` for a job that needs Node, the projen toolchain, and the JDK.

---

##### `ciSetupSteps`<sup>Required</sup> <a name="ciSetupSteps" id="@xpertss/projen-types.JavaSpringBootProject.property.ciSetupSteps"></a>

```typescript
public readonly ciSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

Steps that install Node (pinned), `npm ci`, and the project's JDK with a Maven cache - the setup every Maven CI job in this repo needs.

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@xpertss/projen-types.JavaSpringBootProject.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

The canonical Java line the build targets (`1.8`, `17`, `21`, `25`).

---

##### `modules`<sup>Required</sup> <a name="modules" id="@xpertss/projen-types.JavaSpringBootProject.property.modules"></a>

```typescript
public readonly modules: MavenModule[];
```

- *Type:* <a href="#@xpertss/projen-types.MavenModule">MavenModule</a>[]

The modules added with `addModule()`, in order.

---

##### `pom`<sup>Required</sup> <a name="pom" id="@xpertss/projen-types.JavaSpringBootProject.property.pom"></a>

```typescript
public readonly pom: MavenPom;
```

- *Type:* <a href="#@xpertss/projen-types.MavenPom">MavenPom</a>

The root `pom.xml`.

---

##### `upgradeTask`<sup>Required</sup> <a name="upgradeTask" id="@xpertss/projen-types.JavaSpringBootProject.property.upgradeTask"></a>

```typescript
public readonly upgradeTask: Task;
```

- *Type:* projen.Task

Prints available dependency/plugin updates (`npx projen upgrade`).

---

##### `springBootVersion`<sup>Required</sup> <a name="springBootVersion" id="@xpertss/projen-types.JavaSpringBootProject.property.springBootVersion"></a>

```typescript
public readonly springBootVersion: string;
```

- *Type:* string

The Spring Boot version (BOM and Maven plugin).

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@xpertss/projen-types.JavaSpringBootProject.property.DEFAULT_TASK"></a>

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

new MavenCentralPublish(project: JavaMavenProject, options?: MavenCentralPublishOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.Initializer.parameter.project">project</a></code> | <code><a href="#@xpertss/projen-types.JavaMavenProject">JavaMavenProject</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenCentralPublish.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.MavenCentralPublishOptions">MavenCentralPublishOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.MavenCentralPublish.Initializer.parameter.project"></a>

- *Type:* <a href="#@xpertss/projen-types.JavaMavenProject">JavaMavenProject</a>

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


### MavenModule <a name="MavenModule" id="@xpertss/projen-types.MavenModule"></a>

One module of a Maven reactor: a `<dir>/pom.xml` owned by the root project (not a projen subproject - there is still one `.projen/`, one `.gitignore` and one `tasks.json`). Created by `JavaMavenProject.addModule()`.

The module pom holds `<parent>`, `artifactId`, `name`, `description` and
versionless dependencies/plugins. Any version given to `addDependency`,
`addTestDependency` or `addPlugin` is moved into the parent pom's
`<dependencyManagement>`/`<pluginManagement>`, so every module that uses
an artifact gets the same version.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.MavenModule.Initializer"></a>

```typescript
import { MavenModule } from '@xpertss/projen-types'

new MavenModule(project: Project, parentPom: MavenPom, options: MavenModuleOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenModule.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenModule.Initializer.parameter.parentPom">parentPom</a></code> | <code><a href="#@xpertss/projen-types.MavenPom">MavenPom</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenModule.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.MavenModuleOptions">MavenModuleOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.MavenModule.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `parentPom`<sup>Required</sup> <a name="parentPom" id="@xpertss/projen-types.MavenModule.Initializer.parameter.parentPom"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenPom">MavenPom</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.MavenModule.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenModuleOptions">MavenModuleOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.MavenModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.MavenModule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.MavenModule.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.MavenModule.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.MavenModule.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.MavenModule.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.MavenModule.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@xpertss/projen-types.MavenModule.addDependency">addDependency</a></code> | Adds a compile-scope dependency. |
| <code><a href="#@xpertss/projen-types.MavenModule.addModuleDependency">addModuleDependency</a></code> | Depends on a sibling module. |
| <code><a href="#@xpertss/projen-types.MavenModule.addPlugin">addPlugin</a></code> | Adds a build plugin. |
| <code><a href="#@xpertss/projen-types.MavenModule.addTestDependency">addTestDependency</a></code> | Adds a `test`-scoped dependency; |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.MavenModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.MavenModule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.MavenModule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.MavenModule.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.MavenModule.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.MavenModule.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.MavenModule.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.MavenModule.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.MavenModule.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.MavenModule.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addDependency` <a name="addDependency" id="@xpertss/projen-types.MavenModule.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a compile-scope dependency.

A version, if given, is pinned in the
parent's `<dependencyManagement>` and the module entry stays versionless.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.MavenModule.addDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId[@version]`.

---

##### `addModuleDependency` <a name="addModuleDependency" id="@xpertss/projen-types.MavenModule.addModuleDependency"></a>

```typescript
public addModuleDependency(module: MavenModule, scope?: string): void
```

Depends on a sibling module.

The dependency is versionless here; the
parent manages every module at `${project.version}`.

###### `module`<sup>Required</sup> <a name="module" id="@xpertss/projen-types.MavenModule.addModuleDependency.parameter.module"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenModule">MavenModule</a>

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@xpertss/projen-types.MavenModule.addModuleDependency.parameter.scope"></a>

- *Type:* string

Maven scope (`test`, `provided`, ...).

---

##### `addPlugin` <a name="addPlugin" id="@xpertss/projen-types.MavenModule.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): void
```

Adds a build plugin.

A version, if given, is pinned in the parent's
`<pluginManagement>` and the module entry stays versionless.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.MavenModule.addPlugin.parameter.spec"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.MavenModule.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

---

##### `addTestDependency` <a name="addTestDependency" id="@xpertss/projen-types.MavenModule.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a `test`-scoped dependency;

versions are hoisted like `addDependency`.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.MavenModule.addTestDependency.parameter.spec"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.MavenModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.MavenModule.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.MavenModule.isConstruct"></a>

```typescript
import { MavenModule } from '@xpertss/projen-types'

MavenModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.MavenModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.MavenModule.isComponent"></a>

```typescript
import { MavenModule } from '@xpertss/projen-types'

MavenModule.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.MavenModule.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.MavenModule.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenModule.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenModule.property.dir">dir</a></code> | <code>string</code> | Module directory, relative to the repo root. |
| <code><a href="#@xpertss/projen-types.MavenModule.property.pom">pom</a></code> | <code><a href="#@xpertss/projen-types.MavenPom">MavenPom</a></code> | The module's own `pom.xml`. |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.MavenModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.MavenModule.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@xpertss/projen-types.MavenModule.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `dir`<sup>Required</sup> <a name="dir" id="@xpertss/projen-types.MavenModule.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

Module directory, relative to the repo root.

---

##### `pom`<sup>Required</sup> <a name="pom" id="@xpertss/projen-types.MavenModule.property.pom"></a>

```typescript
public readonly pom: MavenPom;
```

- *Type:* <a href="#@xpertss/projen-types.MavenPom">MavenPom</a>

The module's own `pom.xml`.

---


### MavenPom <a name="MavenPom" id="@xpertss/projen-types.MavenPom"></a>

A `pom.xml` written by this package (rather than projen's `java.Pom`).

Supports `<modules>`, `<dependencyManagement>` (including BOM imports),
`<pluginManagement>`, and versionless dependencies/plugins - what a Maven
reactor needs and `java.Pom` cannot express. Every version it writes is
exact; a spec carrying a range throws. Plugin executions render one
`<goals>` element per execution (projen's `java.Pom` repeats `<goals>`,
which Maven 3.9 rejects as non-parseable).

Adding the same `groupId/artifactId` twice merges: a later version
replaces an earlier one only if the earlier had none (two different
versions throw), and plugin options are merged - `configuration` shallowly,
`executions` and `dependencies` appended.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.MavenPom.Initializer"></a>

```typescript
import { MavenPom } from '@xpertss/projen-types'

new MavenPom(project: Project, options: MavenPomOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenPom.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPom.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.MavenPomOptions">MavenPomOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.MavenPom.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.MavenPom.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenPomOptions">MavenPomOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.MavenPom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.MavenPom.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.MavenPom.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.MavenPom.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.MavenPom.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.MavenPom.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.MavenPom.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@xpertss/projen-types.MavenPom.addBom">addBom</a></code> | Imports a BOM into `<dependencyManagement>` (`type=pom`, `scope=import`). |
| <code><a href="#@xpertss/projen-types.MavenPom.addDependency">addDependency</a></code> | Adds a dependency (compile scope unless `scope` is given). |
| <code><a href="#@xpertss/projen-types.MavenPom.addManagedDependency">addManagedDependency</a></code> | Pins a version in `<dependencyManagement>` without adding the dependency itself. |
| <code><a href="#@xpertss/projen-types.MavenPom.addManagedPlugin">addManagedPlugin</a></code> | Adds a plugin to `<build><pluginManagement>` only: it pins the version (and optional default configuration) for this pom and its modules without running the plugin here. |
| <code><a href="#@xpertss/projen-types.MavenPom.addModule">addModule</a></code> | Adds a `<module>` (a path relative to this pom's directory). |
| <code><a href="#@xpertss/projen-types.MavenPom.addPlugin">addPlugin</a></code> | Adds a build plugin to `<build><plugins>`. |
| <code><a href="#@xpertss/projen-types.MavenPom.addPluginRepository">addPluginRepository</a></code> | Adds a `<pluginRepository>`. |
| <code><a href="#@xpertss/projen-types.MavenPom.addProperty">addProperty</a></code> | Sets a `<properties>` entry. |
| <code><a href="#@xpertss/projen-types.MavenPom.addRepository">addRepository</a></code> | Adds a `<repository>`. |
| <code><a href="#@xpertss/projen-types.MavenPom.addTestDependency">addTestDependency</a></code> | Adds a `test`-scoped dependency. |
| <code><a href="#@xpertss/projen-types.MavenPom.hasPlugin">hasPlugin</a></code> | True if a plugin with these `groupId/artifactId` coordinates is in `<plugins>`. |
| <code><a href="#@xpertss/projen-types.MavenPom.removeBom">removeBom</a></code> | Removes a BOM import added by `addBom`, if present. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.MavenPom.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.MavenPom.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.MavenPom.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.MavenPom.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.MavenPom.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.MavenPom.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.MavenPom.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.MavenPom.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.MavenPom.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.MavenPom.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addBom` <a name="addBom" id="@xpertss/projen-types.MavenPom.addBom"></a>

```typescript
public addBom(spec: string): void
```

Imports a BOM into `<dependencyManagement>` (`type=pom`, `scope=import`).

BOMs are written in the order added, before every other
managed dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.MavenPom.addBom.parameter.spec"></a>

- *Type:* string

`groupId/artifactId@version` - the version is required.

---

##### `addDependency` <a name="addDependency" id="@xpertss/projen-types.MavenPom.addDependency"></a>

```typescript
public addDependency(spec: string, scope?: string): void
```

Adds a dependency (compile scope unless `scope` is given).

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.MavenPom.addDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId[@version]` - omit the version when a BOM or the parent's `<dependencyManagement>` manages it.

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@xpertss/projen-types.MavenPom.addDependency.parameter.scope"></a>

- *Type:* string

Maven scope (`test`, `provided`, `runtime`, ...).

---

##### `addManagedDependency` <a name="addManagedDependency" id="@xpertss/projen-types.MavenPom.addManagedDependency"></a>

```typescript
public addManagedDependency(spec: string): void
```

Pins a version in `<dependencyManagement>` without adding the dependency itself.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.MavenPom.addManagedDependency.parameter.spec"></a>

- *Type:* string

`groupId/artifactId@version` - the version is required.

---

##### `addManagedPlugin` <a name="addManagedPlugin" id="@xpertss/projen-types.MavenPom.addManagedPlugin"></a>

```typescript
public addManagedPlugin(spec: string, options?: PluginOptions): void
```

Adds a plugin to `<build><pluginManagement>` only: it pins the version (and optional default configuration) for this pom and its modules without running the plugin here.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.MavenPom.addManagedPlugin.parameter.spec"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.MavenPom.addManagedPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

---

##### `addModule` <a name="addModule" id="@xpertss/projen-types.MavenPom.addModule"></a>

```typescript
public addModule(path: string): void
```

Adds a `<module>` (a path relative to this pom's directory).

###### `path`<sup>Required</sup> <a name="path" id="@xpertss/projen-types.MavenPom.addModule.parameter.path"></a>

- *Type:* string

---

##### `addPlugin` <a name="addPlugin" id="@xpertss/projen-types.MavenPom.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): void
```

Adds a build plugin to `<build><plugins>`.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.MavenPom.addPlugin.parameter.spec"></a>

- *Type:* string

`groupId/artifactId[@version]` - omit the version when `<pluginManagement>` (here or in the parent) manages it.

---

###### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.MavenPom.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

---

##### `addPluginRepository` <a name="addPluginRepository" id="@xpertss/projen-types.MavenPom.addPluginRepository"></a>

```typescript
public addPluginRepository(repository: MavenRepository): void
```

Adds a `<pluginRepository>`.

###### `repository`<sup>Required</sup> <a name="repository" id="@xpertss/projen-types.MavenPom.addPluginRepository.parameter.repository"></a>

- *Type:* projen.java.MavenRepository

---

##### `addProperty` <a name="addProperty" id="@xpertss/projen-types.MavenPom.addProperty"></a>

```typescript
public addProperty(name: string, value: string): void
```

Sets a `<properties>` entry.

###### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.MavenPom.addProperty.parameter.name"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@xpertss/projen-types.MavenPom.addProperty.parameter.value"></a>

- *Type:* string

---

##### `addRepository` <a name="addRepository" id="@xpertss/projen-types.MavenPom.addRepository"></a>

```typescript
public addRepository(repository: MavenRepository): void
```

Adds a `<repository>`.

###### `repository`<sup>Required</sup> <a name="repository" id="@xpertss/projen-types.MavenPom.addRepository.parameter.repository"></a>

- *Type:* projen.java.MavenRepository

---

##### `addTestDependency` <a name="addTestDependency" id="@xpertss/projen-types.MavenPom.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a `test`-scoped dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@xpertss/projen-types.MavenPom.addTestDependency.parameter.spec"></a>

- *Type:* string

---

##### `hasPlugin` <a name="hasPlugin" id="@xpertss/projen-types.MavenPom.hasPlugin"></a>

```typescript
public hasPlugin(coordinates: string): boolean
```

True if a plugin with these `groupId/artifactId` coordinates is in `<plugins>`.

###### `coordinates`<sup>Required</sup> <a name="coordinates" id="@xpertss/projen-types.MavenPom.hasPlugin.parameter.coordinates"></a>

- *Type:* string

---

##### `removeBom` <a name="removeBom" id="@xpertss/projen-types.MavenPom.removeBom"></a>

```typescript
public removeBom(coordinates: string): void
```

Removes a BOM import added by `addBom`, if present.

###### `coordinates`<sup>Required</sup> <a name="coordinates" id="@xpertss/projen-types.MavenPom.removeBom.parameter.coordinates"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.MavenPom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.MavenPom.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.MavenPom.isConstruct"></a>

```typescript
import { MavenPom } from '@xpertss/projen-types'

MavenPom.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.MavenPom.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.MavenPom.isComponent"></a>

```typescript
import { MavenPom } from '@xpertss/projen-types'

MavenPom.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.MavenPom.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenPom.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.MavenPom.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPom.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPom.property.filePath">filePath</a></code> | <code>string</code> | Path of the pom, relative to the project root. |
| <code><a href="#@xpertss/projen-types.MavenPom.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPom.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPom.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPom.property.parent">parent</a></code> | <code>projen.java.ParentPom</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPom.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPom.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPom.property.managePluginVersions">managePluginVersions</a></code> | <code>boolean</code> | When true, the versions of `<plugins>` entries are written into `<pluginManagement>` and the `<plugins>` entries stay versionless - the shape a reactor parent wants, so modules can redeclare a plugin without repeating its version. |
| <code><a href="#@xpertss/projen-types.MavenPom.property.packaging">packaging</a></code> | <code>string</code> | Maven packaging (`jar`, `pom`, ...). |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.MavenPom.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.MavenPom.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@xpertss/projen-types.MavenPom.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@xpertss/projen-types.MavenPom.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

Path of the pom, relative to the project root.

---

##### `description`<sup>Optional</sup> <a name="description" id="@xpertss/projen-types.MavenPom.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@xpertss/projen-types.MavenPom.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="@xpertss/projen-types.MavenPom.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@xpertss/projen-types.MavenPom.property.parent"></a>

```typescript
public readonly parent: ParentPom;
```

- *Type:* projen.java.ParentPom

---

##### `url`<sup>Optional</sup> <a name="url" id="@xpertss/projen-types.MavenPom.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `version`<sup>Optional</sup> <a name="version" id="@xpertss/projen-types.MavenPom.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `managePluginVersions`<sup>Required</sup> <a name="managePluginVersions" id="@xpertss/projen-types.MavenPom.property.managePluginVersions"></a>

```typescript
public readonly managePluginVersions: boolean;
```

- *Type:* boolean

When true, the versions of `<plugins>` entries are written into `<pluginManagement>` and the `<plugins>` entries stay versionless - the shape a reactor parent wants, so modules can redeclare a plugin without repeating its version.

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="@xpertss/projen-types.MavenPom.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string

Maven packaging (`jar`, `pom`, ...).

---


### MavenUpgradeReport <a name="MavenUpgradeReport" id="@xpertss/projen-types.MavenUpgradeReport"></a>

Nightly, report-only dependency check for the Maven types: runs the `upgrade` task (`versions:display-dependency-updates` and `display-plugin-updates`) and writes the available updates into the job summary.

It deliberately changes nothing. Every version in a generated pom comes
from `.projenrc.ts` (or this package's defaults), so rewriting `pom.xml`
would just be reverted by the next `npx projen` and flagged by the drift
check. Apply an update by changing the version in `.projenrc.ts`.

#### Initializers <a name="Initializers" id="@xpertss/projen-types.MavenUpgradeReport.Initializer"></a>

```typescript
import { MavenUpgradeReport } from '@xpertss/projen-types'

new MavenUpgradeReport(scope: GitHubProject, options: MavenUpgradeReportOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.Initializer.parameter.scope">scope</a></code> | <code>projen.github.GitHubProject</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.MavenUpgradeReportOptions">MavenUpgradeReportOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@xpertss/projen-types.MavenUpgradeReport.Initializer.parameter.scope"></a>

- *Type:* projen.github.GitHubProject

---

##### `options`<sup>Required</sup> <a name="options" id="@xpertss/projen-types.MavenUpgradeReport.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.MavenUpgradeReportOptions">MavenUpgradeReportOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.MavenUpgradeReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.MavenUpgradeReport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.MavenUpgradeReport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.MavenUpgradeReport.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.MavenUpgradeReport.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.MavenUpgradeReport.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.MavenUpgradeReport.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.MavenUpgradeReport.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.MavenUpgradeReport.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.MavenUpgradeReport.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.MavenUpgradeReport.isConstruct"></a>

```typescript
import { MavenUpgradeReport } from '@xpertss/projen-types'

MavenUpgradeReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.MavenUpgradeReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.MavenUpgradeReport.isComponent"></a>

```typescript
import { MavenUpgradeReport } from '@xpertss/projen-types'

MavenUpgradeReport.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.MavenUpgradeReport.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReport.property.workflow">workflow</a></code> | <code>projen.github.GithubWorkflow</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.MavenUpgradeReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.MavenUpgradeReport.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@xpertss/projen-types.MavenUpgradeReport.property.workflow"></a>

```typescript
public readonly workflow: GithubWorkflow;
```

- *Type:* projen.github.GithubWorkflow

---


### ProjenDriftCheckWorkflow <a name="ProjenDriftCheckWorkflow" id="@xpertss/projen-types.ProjenDriftCheckWorkflow"></a>

#### Initializers <a name="Initializers" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.Initializer"></a>

```typescript
import { ProjenDriftCheckWorkflow } from '@xpertss/projen-types'

new ProjenDriftCheckWorkflow(scope: GitHubProject, options?: ProjenDriftCheckWorkflowOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.Initializer.parameter.scope">scope</a></code> | <code>projen.github.GitHubProject</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflowOptions">ProjenDriftCheckWorkflowOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.Initializer.parameter.scope"></a>

- *Type:* projen.github.GitHubProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.ProjenDriftCheckWorkflowOptions">ProjenDriftCheckWorkflowOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.isConstruct"></a>

```typescript
import { ProjenDriftCheckWorkflow } from '@xpertss/projen-types'

ProjenDriftCheckWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.isComponent"></a>

```typescript
import { ProjenDriftCheckWorkflow } from '@xpertss/projen-types'

ProjenDriftCheckWorkflow.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflow.property.workflow">workflow</a></code> | <code>projen.github.GithubWorkflow</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@xpertss/projen-types.ProjenDriftCheckWorkflow.property.workflow"></a>

```typescript
public readonly workflow: GithubWorkflow;
```

- *Type:* projen.github.GithubWorkflow

---


### WorkflowChangeNoticeWorkflow <a name="WorkflowChangeNoticeWorkflow" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow"></a>

#### Initializers <a name="Initializers" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.Initializer"></a>

```typescript
import { WorkflowChangeNoticeWorkflow } from '@xpertss/projen-types'

new WorkflowChangeNoticeWorkflow(scope: GitHubProject, options?: WorkflowChangeNoticeWorkflowOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.Initializer.parameter.scope">scope</a></code> | <code>projen.github.GitHubProject</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.Initializer.parameter.options">options</a></code> | <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflowOptions">WorkflowChangeNoticeWorkflowOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.Initializer.parameter.scope"></a>

- *Type:* projen.github.GitHubProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.Initializer.parameter.options"></a>

- *Type:* <a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflowOptions">WorkflowChangeNoticeWorkflowOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.isConstruct"></a>

```typescript
import { WorkflowChangeNoticeWorkflow } from '@xpertss/projen-types'

WorkflowChangeNoticeWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.isComponent"></a>

```typescript
import { WorkflowChangeNoticeWorkflow } from '@xpertss/projen-types'

WorkflowChangeNoticeWorkflow.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflow.property.workflow">workflow</a></code> | <code>projen.github.GithubWorkflow</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflow.property.workflow"></a>

```typescript
public readonly workflow: GithubWorkflow;
```

- *Type:* projen.github.GithubWorkflow

---


## Structs <a name="Structs" id="Structs"></a>

### ActionDogfoodOptions <a name="ActionDogfoodOptions" id="@xpertss/projen-types.ActionDogfoodOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.ActionDogfoodOptions.Initializer"></a>

```typescript
import { ActionDogfoodOptions } from '@xpertss/projen-types'

const actionDogfoodOptions: ActionDogfoodOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.ActionDogfoodOptions.property.cleanup">cleanup</a></code> | <code>string[]</code> | Shell cleanup, run once at the end with `if: always()` so repeated runs start clean. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodOptions.property.scenario">scenario</a></code> | <code><a href="#@xpertss/projen-types.ActionDogfoodStep">ActionDogfoodStep</a>[]</code> | One or more scenario steps, run in order, in the dogfood job. |

---

##### `cleanup`<sup>Required</sup> <a name="cleanup" id="@xpertss/projen-types.ActionDogfoodOptions.property.cleanup"></a>

```typescript
public readonly cleanup: string[];
```

- *Type:* string[]

Shell cleanup, run once at the end with `if: always()` so repeated runs start clean.

Intentionally **best-effort**: unlike the assert step it does
*not* run under `set -e`, so a failing line (e.g. deleting an already
deleted ref) does not fail the job.

---

##### `scenario`<sup>Required</sup> <a name="scenario" id="@xpertss/projen-types.ActionDogfoodOptions.property.scenario"></a>

```typescript
public readonly scenario: ActionDogfoodStep[];
```

- *Type:* <a href="#@xpertss/projen-types.ActionDogfoodStep">ActionDogfoodStep</a>[]

One or more scenario steps, run in order, in the dogfood job.

---

### ActionDogfoodStep <a name="ActionDogfoodStep" id="@xpertss/projen-types.ActionDogfoodStep"></a>

One invocation of the action within the dogfood scenario: optional fixture setup, the `uses: ./` call with this step's inputs, then this step's assertions. Most actions need exactly one; actions with a re-run/no-op behavior to verify (e.g. F006's reuse-the-PR path, F007's no-op-commit path) declare two.

#### Initializer <a name="Initializer" id="@xpertss/projen-types.ActionDogfoodStep.Initializer"></a>

```typescript
import { ActionDogfoodStep } from '@xpertss/projen-types'

const actionDogfoodStep: ActionDogfoodStep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.ActionDogfoodStep.property.assertions">assertions</a></code> | <code>string[]</code> | Shell assertions after this invocation - the job fails unless every one exits 0. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodStep.property.name">name</a></code> | <code>string</code> | Label used to name this step-group's generated workflow steps. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodStep.property.fixtureSteps">fixtureSteps</a></code> | <code>string[]</code> | Shell steps executed before this invocation, to produce or alter fixture state. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodStep.property.id">id</a></code> | <code>string</code> | Step id for the `uses: ./` invocation, so a later assertion can reference this step's outputs via `${{ steps.<id>.outputs.<name> }}`. |
| <code><a href="#@xpertss/projen-types.ActionDogfoodStep.property.inputs">inputs</a></code> | <code>{[ key: string ]: string}</code> | `with:` inputs for this invocation's local `uses: ./` call. |

---

##### `assertions`<sup>Required</sup> <a name="assertions" id="@xpertss/projen-types.ActionDogfoodStep.property.assertions"></a>

```typescript
public readonly assertions: string[];
```

- *Type:* string[]

Shell assertions after this invocation - the job fails unless every one exits 0.

The generated step runs under `set -euo pipefail`, so a failing
assertion fails the step immediately rather than being masked by a later,
passing one.

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.ActionDogfoodStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Label used to name this step-group's generated workflow steps.

---

##### `fixtureSteps`<sup>Optional</sup> <a name="fixtureSteps" id="@xpertss/projen-types.ActionDogfoodStep.property.fixtureSteps"></a>

```typescript
public readonly fixtureSteps: string[];
```

- *Type:* string[]
- *Default:* []

Shell steps executed before this invocation, to produce or alter fixture state.

---

##### `id`<sup>Optional</sup> <a name="id" id="@xpertss/projen-types.ActionDogfoodStep.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string
- *Default:* a slug derived from `name`, disambiguated by position

Step id for the `uses: ./` invocation, so a later assertion can reference this step's outputs via `${{ steps.<id>.outputs.<name> }}`.

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@xpertss/projen-types.ActionDogfoodStep.property.inputs"></a>

```typescript
public readonly inputs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

`with:` inputs for this invocation's local `uses: ./` call.

---

### ActionSonarWorkflowOptions <a name="ActionSonarWorkflowOptions" id="@xpertss/projen-types.ActionSonarWorkflowOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.ActionSonarWorkflowOptions.Initializer"></a>

```typescript
import { ActionSonarWorkflowOptions } from '@xpertss/projen-types'

const actionSonarWorkflowOptions: ActionSonarWorkflowOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflowOptions.property.sonarHostUrl">sonarHostUrl</a></code> | <code>string</code> | URL of the org's SonarCloud instance (e.g. `https://sonarcloud.io`). Required, no default - a guessed server is worse than a loud failure. |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflowOptions.property.sonarOrganization">sonarOrganization</a></code> | <code>string</code> | SonarCloud organization key (`sonar.organization`). Mandatory for the Scanner CLI on SonarCloud - it is not derived from the token, so a scan without it always fails. |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflowOptions.property.sonarPullRequestGate">sonarPullRequestGate</a></code> | <code>boolean</code> | Whether `sonar.yml` also runs on `pull_request` as a pass/fail gate. |
| <code><a href="#@xpertss/projen-types.ActionSonarWorkflowOptions.property.sonarTokenSecret">sonarTokenSecret</a></code> | <code>string</code> | *No description.* |

---

##### `sonarHostUrl`<sup>Required</sup> <a name="sonarHostUrl" id="@xpertss/projen-types.ActionSonarWorkflowOptions.property.sonarHostUrl"></a>

```typescript
public readonly sonarHostUrl: string;
```

- *Type:* string

URL of the org's SonarCloud instance (e.g. `https://sonarcloud.io`). Required, no default - a guessed server is worse than a loud failure.

---

##### `sonarOrganization`<sup>Optional</sup> <a name="sonarOrganization" id="@xpertss/projen-types.ActionSonarWorkflowOptions.property.sonarOrganization"></a>

```typescript
public readonly sonarOrganization: string;
```

- *Type:* string
- *Default:* "xpertss"

SonarCloud organization key (`sonar.organization`). Mandatory for the Scanner CLI on SonarCloud - it is not derived from the token, so a scan without it always fails.

---

##### `sonarPullRequestGate`<sup>Optional</sup> <a name="sonarPullRequestGate" id="@xpertss/projen-types.ActionSonarWorkflowOptions.property.sonarPullRequestGate"></a>

```typescript
public readonly sonarPullRequestGate: boolean;
```

- *Type:* boolean
- *Default:* true

Whether `sonar.yml` also runs on `pull_request` as a pass/fail gate.

---

##### `sonarTokenSecret`<sup>Optional</sup> <a name="sonarTokenSecret" id="@xpertss/projen-types.ActionSonarWorkflowOptions.property.sonarTokenSecret"></a>

```typescript
public readonly sonarTokenSecret: string;
```

- *Type:* string
- *Default:* "SONAR_TOKEN"

---

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
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | Copyright owner named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | Copyright period named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.editorconfig">editorconfig</a></code> | <code>boolean</code> | Write a projen-managed `.editorconfig`. |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.license">license</a></code> | <code>string</code> | SPDX identifier for the generated `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Write a `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.ecrEcs">ecrEcs</a></code> | <code><a href="#@xpertss/projen-types.EcrEcsOptions">EcrEcsOptions</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.edgeResources">edgeResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkAppProjectOptions.property.environments">environments</a></code> | <code>string \| <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]</code> | Deploy targets for the manual-dispatch deploy workflow, e.g. ["dev", "stage", "prod"]. No `deploy` workflow is generated when this is empty or omitted. |
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

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@xpertss/projen-types.CdkAppProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* "Xpert Software"

Copyright owner named in the `LICENSE`.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@xpertss/projen-types.CdkAppProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* the current year

Copyright period named in the `LICENSE`.

---

##### `editorconfig`<sup>Optional</sup> <a name="editorconfig" id="@xpertss/projen-types.CdkAppProjectOptions.property.editorconfig"></a>

```typescript
public readonly editorconfig: boolean;
```

- *Type:* boolean
- *Default:* true

Write a projen-managed `.editorconfig`.

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.CdkAppProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `license`<sup>Optional</sup> <a name="license" id="@xpertss/projen-types.CdkAppProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "MIT"

SPDX identifier for the generated `LICENSE`.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@xpertss/projen-types.CdkAppProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Write a `LICENSE`.

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

##### `environments`<sup>Optional</sup> <a name="environments" id="@xpertss/projen-types.CdkAppProjectOptions.property.environments"></a>

```typescript
public readonly environments: (string | EnvironmentOptions)[];
```

- *Type:* string | <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]
- *Default:* no deploy workflow

Deploy targets for the manual-dispatch deploy workflow, e.g. ["dev", "stage", "prod"]. No `deploy` workflow is generated when this is empty or omitted.

Optional rather than required so that `projen new --from` can scaffold
the repo: its union type (`string | EnvironmentOptions`) is not
"JSON-like", so projen's CLI cannot render a value for it into the
initial `.projenrc.ts` - and a *required* option it cannot render leaves
behind a projenrc that does not type-check.

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
| <code><a href="#@xpertss/projen-types.CdkDeployHookOptions.property.targetRepo">targetRepo</a></code> | <code>string</code> | The companion CDK infra/app repo (owner/repo) that owns the actual infrastructure. |

---

##### `targetRepo`<sup>Optional</sup> <a name="targetRepo" id="@xpertss/projen-types.CdkDeployHookOptions.property.targetRepo"></a>

```typescript
public readonly targetRepo: string;
```

- *Type:* string
- *Default:* the workflow is still generated, but its only step fails with instructions (see `CdkDeployHook`)

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
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | Copyright owner named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | Copyright period named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.editorconfig">editorconfig</a></code> | <code>boolean</code> | Write a projen-managed `.editorconfig`. |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.license">license</a></code> | <code>string</code> | SPDX identifier for the generated `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Write a `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.ecrEcs">ecrEcs</a></code> | <code><a href="#@xpertss/projen-types.EcrEcsOptions">EcrEcsOptions</a></code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.edgeResources">edgeResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkInfraProjectOptions.property.environments">environments</a></code> | <code>string \| <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]</code> | Deploy targets for the manual-dispatch deploy workflow, e.g. ["dev", "stage", "prod"]. No `deploy` workflow is generated when this is empty or omitted. |

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

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@xpertss/projen-types.CdkInfraProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* "Xpert Software"

Copyright owner named in the `LICENSE`.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@xpertss/projen-types.CdkInfraProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* the current year

Copyright period named in the `LICENSE`.

---

##### `editorconfig`<sup>Optional</sup> <a name="editorconfig" id="@xpertss/projen-types.CdkInfraProjectOptions.property.editorconfig"></a>

```typescript
public readonly editorconfig: boolean;
```

- *Type:* boolean
- *Default:* true

Write a projen-managed `.editorconfig`.

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.CdkInfraProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `license`<sup>Optional</sup> <a name="license" id="@xpertss/projen-types.CdkInfraProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "MIT"

SPDX identifier for the generated `LICENSE`.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@xpertss/projen-types.CdkInfraProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Write a `LICENSE`.

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

##### `environments`<sup>Optional</sup> <a name="environments" id="@xpertss/projen-types.CdkInfraProjectOptions.property.environments"></a>

```typescript
public readonly environments: (string | EnvironmentOptions)[];
```

- *Type:* string | <a href="#@xpertss/projen-types.EnvironmentOptions">EnvironmentOptions</a>[]
- *Default:* no deploy workflow

Deploy targets for the manual-dispatch deploy workflow, e.g. ["dev", "stage", "prod"]. No `deploy` workflow is generated when this is empty or omitted.

Optional rather than required so that `projen new --from` can scaffold
the repo: its union type (`string | EnvironmentOptions`) is not
"JSON-like", so projen's CLI cannot render a value for it into the
initial `.projenrc.ts` - and a *required* option it cannot render leaves
behind a projenrc that does not type-check.

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
| <code><a href="#@xpertss/projen-types.CdkTypescriptProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | Copyright owner named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | Copyright period named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProjectOptions.property.editorconfig">editorconfig</a></code> | <code>boolean</code> | Write a projen-managed `.editorconfig`. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProjectOptions.property.license">license</a></code> | <code>string</code> | SPDX identifier for the generated `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CdkTypescriptProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Write a `LICENSE`. |
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

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@xpertss/projen-types.CdkTypescriptProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* "Xpert Software"

Copyright owner named in the `LICENSE`.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@xpertss/projen-types.CdkTypescriptProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* the current year

Copyright period named in the `LICENSE`.

---

##### `editorconfig`<sup>Optional</sup> <a name="editorconfig" id="@xpertss/projen-types.CdkTypescriptProjectOptions.property.editorconfig"></a>

```typescript
public readonly editorconfig: boolean;
```

- *Type:* boolean
- *Default:* true

Write a projen-managed `.editorconfig`.

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.CdkTypescriptProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `license`<sup>Optional</sup> <a name="license" id="@xpertss/projen-types.CdkTypescriptProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "MIT"

SPDX identifier for the generated `LICENSE`.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@xpertss/projen-types.CdkTypescriptProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Write a `LICENSE`.

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
| <code><a href="#@xpertss/projen-types.CommonCdkOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | Copyright owner named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CommonCdkOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | Copyright period named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CommonCdkOptions.property.editorconfig">editorconfig</a></code> | <code>boolean</code> | Write a projen-managed `.editorconfig`. |
| <code><a href="#@xpertss/projen-types.CommonCdkOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CommonCdkOptions.property.license">license</a></code> | <code>string</code> | SPDX identifier for the generated `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CommonCdkOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Write a `LICENSE`. |

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

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@xpertss/projen-types.CommonCdkOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* "Xpert Software"

Copyright owner named in the `LICENSE`.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@xpertss/projen-types.CommonCdkOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* the current year

Copyright period named in the `LICENSE`.

---

##### `editorconfig`<sup>Optional</sup> <a name="editorconfig" id="@xpertss/projen-types.CommonCdkOptions.property.editorconfig"></a>

```typescript
public readonly editorconfig: boolean;
```

- *Type:* boolean
- *Default:* true

Write a projen-managed `.editorconfig`.

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.CommonCdkOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `license`<sup>Optional</sup> <a name="license" id="@xpertss/projen-types.CommonCdkOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "MIT"

SPDX identifier for the generated `LICENSE`.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@xpertss/projen-types.CommonCdkOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Write a `LICENSE`.

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
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | Copyright owner named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | Copyright period named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.description">description</a></code> | <code>string</code> | Project description, written to the root pom. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.editorconfig">editorconfig</a></code> | <code>boolean</code> | Write a projen-managed `.editorconfig`. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.enforcer">enforcer</a></code> | <code>boolean</code> | Add `maven-enforcer-plugin`, which fails the build up front when the JDK or Maven running it is older than the project needs (rather than later, with confusing compiler errors). |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.javaDistribution">javaDistribution</a></code> | <code>string</code> | `actions/setup-java` distribution CI installs the JDK from. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.javaVersion">javaVersion</a></code> | <code>string</code> | Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.license">license</a></code> | <code>string</code> | SPDX identifier for the generated `LICENSE`. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Write a `LICENSE` file. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.minMavenVersion">minMavenVersion</a></code> | <code>string</code> | Lowest Maven version the enforcer accepts (`requireMavenVersion [<this>,)`). |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.packaging">packaging</a></code> | <code>string</code> | Maven packaging of the root pom while the project has no modules. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.pluginVersions">pluginVersions</a></code> | <code>{[ key: string ]: string}</code> | Overrides for the plugin/BOM versions this package pins by default, keyed by `groupId/artifactId`, e.g. `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values must be exact versions. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.sample">sample</a></code> | <code>boolean</code> | Write a starter `Main` class and test under the `groupId` package, if `src/` does not exist yet. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.sonarProjectKey">sonarProjectKey</a></code> | <code>string</code> | SonarCloud project key. |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>boolean</code> | Generate the nightly `upgrade.yml` workflow, which reports available dependency and plugin updates in the job summary (it never edits files - versions are changed in `.projenrc.ts`). |
| <code><a href="#@xpertss/projen-types.CommonJavaOptions.property.url">url</a></code> | <code>string</code> | Project URL, written to the root pom. |
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

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@xpertss/projen-types.CommonJavaOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* "Xpert Software"

Copyright owner named in the `LICENSE`.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@xpertss/projen-types.CommonJavaOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* the current year

Copyright period named in the `LICENSE`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@xpertss/projen-types.CommonJavaOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* none

Project description, written to the root pom.

---

##### `editorconfig`<sup>Optional</sup> <a name="editorconfig" id="@xpertss/projen-types.CommonJavaOptions.property.editorconfig"></a>

```typescript
public readonly editorconfig: boolean;
```

- *Type:* boolean
- *Default:* true

Write a projen-managed `.editorconfig`.

---

##### `enforcer`<sup>Optional</sup> <a name="enforcer" id="@xpertss/projen-types.CommonJavaOptions.property.enforcer"></a>

```typescript
public readonly enforcer: boolean;
```

- *Type:* boolean
- *Default:* true

Add `maven-enforcer-plugin`, which fails the build up front when the JDK or Maven running it is older than the project needs (rather than later, with confusing compiler errors).

Its Java rule always follows
`javaVersion`.

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.CommonJavaOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `javaDistribution`<sup>Optional</sup> <a name="javaDistribution" id="@xpertss/projen-types.CommonJavaOptions.property.javaDistribution"></a>

```typescript
public readonly javaDistribution: string;
```

- *Type:* string
- *Default:* "temurin"

`actions/setup-java` distribution CI installs the JDK from.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@xpertss/projen-types.CommonJavaOptions.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string
- *Default:* "21"

Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`.

Drives every Java-dependent part of the generated build: the compiler
level (`maven.compiler.release`, or `source`/`target` for 1.8, which has
no `--release`), the enforcer's `requireJavaVersion` rule, the JUnit line,
the default Spring Boot line, and the JDK CI installs. Any other value
fails at synth and lists the supported lines.

---

##### `license`<sup>Optional</sup> <a name="license" id="@xpertss/projen-types.CommonJavaOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "MIT"

SPDX identifier for the generated `LICENSE`.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@xpertss/projen-types.CommonJavaOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Write a `LICENSE` file.

---

##### `minMavenVersion`<sup>Optional</sup> <a name="minMavenVersion" id="@xpertss/projen-types.CommonJavaOptions.property.minMavenVersion"></a>

```typescript
public readonly minMavenVersion: string;
```

- *Type:* string
- *Default:* "3.9"

Lowest Maven version the enforcer accepts (`requireMavenVersion [<this>,)`).

Ignored when `enforcer` is false.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@xpertss/projen-types.CommonJavaOptions.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string
- *Default:* "jar"

Maven packaging of the root pom while the project has no modules.

Once
`addModule()` is called the root pom is always `pom`-packaged (and
setting anything other than `pom` here is a synth error).

---

##### `pluginVersions`<sup>Optional</sup> <a name="pluginVersions" id="@xpertss/projen-types.CommonJavaOptions.property.pluginVersions"></a>

```typescript
public readonly pluginVersions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* the defaults for `javaVersion`

Overrides for the plugin/BOM versions this package pins by default, keyed by `groupId/artifactId`, e.g. `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values must be exact versions.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="@xpertss/projen-types.CommonJavaOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* false

Write a starter `Main` class and test under the `groupId` package, if `src/` does not exist yet.

Never written for a multi-module project.

---

##### `sonarProjectKey`<sup>Optional</sup> <a name="sonarProjectKey" id="@xpertss/projen-types.CommonJavaOptions.property.sonarProjectKey"></a>

```typescript
public readonly sonarProjectKey: string;
```

- *Type:* string

SonarCloud project key.

If unset, the sonar scan step is skipped.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@xpertss/projen-types.CommonJavaOptions.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true

Generate the nightly `upgrade.yml` workflow, which reports available dependency and plugin updates in the job summary (it never edits files - versions are changed in `.projenrc.ts`).

---

##### `url`<sup>Optional</sup> <a name="url" id="@xpertss/projen-types.CommonJavaOptions.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string
- *Default:* none

Project URL, written to the root pom.

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

### GitHubActionProjectOptions <a name="GitHubActionProjectOptions" id="@xpertss/projen-types.GitHubActionProjectOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.GitHubActionProjectOptions.Initializer"></a>

```typescript
import { GitHubActionProjectOptions } from '@xpertss/projen-types'

const gitHubActionProjectOptions: GitHubActionProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.projectTree">projectTree</a></code> | <code>boolean</code> | Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.sonarHostUrl">sonarHostUrl</a></code> | <code>string</code> | URL of the org's SonarCloud instance (e.g. `https://sonarcloud.io`). MUST be reachable from github.com-hosted (public) runners (AD-001). Required, no default: a guessed server is worse than a loud failure. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | Copyright owner named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | Copyright period named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.description">description</a></code> | <code>string</code> | One-line description of the action. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.dogfood">dogfood</a></code> | <code><a href="#@xpertss/projen-types.ActionDogfoodOptions">ActionDogfoodOptions</a></code> | The dogfood scenario (AD-001). |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.editorconfig">editorconfig</a></code> | <code>boolean</code> | Write a projen-managed `.editorconfig`. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | Name of the GitHub Actions secret holding the PAT used for projen-automation PR comments (F003) and the drift-check's PR comments. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.license">license</a></code> | <code>string</code> | SPDX identifier for the generated `LICENSE`. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.sonarOrganization">sonarOrganization</a></code> | <code>string</code> | SonarCloud organization key (`sonar.organization`), required by the Scanner CLI on SonarCloud. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.sonarPullRequestGate">sonarPullRequestGate</a></code> | <code>boolean</code> | Whether `sonar.yml` also runs on `pull_request` as a pass/fail gate. |
| <code><a href="#@xpertss/projen-types.GitHubActionProjectOptions.property.sonarTokenSecret">sonarTokenSecret</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.GitHubActionProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@xpertss/projen-types.GitHubActionProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@xpertss/projen-types.GitHubActionProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@xpertss/projen-types.GitHubActionProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@xpertss/projen-types.GitHubActionProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@xpertss/projen-types.GitHubActionProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@xpertss/projen-types.GitHubActionProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projectTree`<sup>Optional</sup> <a name="projectTree" id="@xpertss/projen-types.GitHubActionProjectOptions.property.projectTree"></a>

```typescript
public readonly projectTree: boolean;
```

- *Type:* boolean
- *Default:* false

Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@xpertss/projen-types.GitHubActionProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Inserted verbatim into task steps, workflows and IDE configuration, and run
by each of their shells - locally, in CI and in dev containers. Keep it a
plain unquoted command, since shell syntax in it executes in all of them.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@xpertss/projen-types.GitHubActionProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@xpertss/projen-types.GitHubActionProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@xpertss/projen-types.GitHubActionProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@xpertss/projen-types.GitHubActionProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@xpertss/projen-types.GitHubActionProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@xpertss/projen-types.GitHubActionProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@xpertss/projen-types.GitHubActionProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@xpertss/projen-types.GitHubActionProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@xpertss/projen-types.GitHubActionProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@xpertss/projen-types.GitHubActionProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@xpertss/projen-types.GitHubActionProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@xpertss/projen-types.GitHubActionProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@xpertss/projen-types.GitHubActionProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@xpertss/projen-types.GitHubActionProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@xpertss/projen-types.GitHubActionProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@xpertss/projen-types.GitHubActionProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@xpertss/projen-types.GitHubActionProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `sonarHostUrl`<sup>Required</sup> <a name="sonarHostUrl" id="@xpertss/projen-types.GitHubActionProjectOptions.property.sonarHostUrl"></a>

```typescript
public readonly sonarHostUrl: string;
```

- *Type:* string

URL of the org's SonarCloud instance (e.g. `https://sonarcloud.io`). MUST be reachable from github.com-hosted (public) runners (AD-001). Required, no default: a guessed server is worse than a loud failure.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@xpertss/projen-types.GitHubActionProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* "Xpert Software"

Copyright owner named in the `LICENSE`.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@xpertss/projen-types.GitHubActionProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* the current year

Copyright period named in the `LICENSE`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@xpertss/projen-types.GitHubActionProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

One-line description of the action.

Used in the default README
template and recorded in the private `package.json`.

---

##### `dogfood`<sup>Optional</sup> <a name="dogfood" id="@xpertss/projen-types.GitHubActionProjectOptions.property.dogfood"></a>

```typescript
public readonly dogfood: ActionDogfoodOptions;
```

- *Type:* <a href="#@xpertss/projen-types.ActionDogfoodOptions">ActionDogfoodOptions</a>
- *Default:* `test-dogfood.yml` runs one failing step that tells you to declare a scenario

The dogfood scenario (AD-001).

What fixture state, what to assert, and
how to clean up are specified by the action's own F### spec - the
highest-risk behavior of that action.

Its type is a struct, which projen's CLI cannot render into a projenrc,
so it can only be written by hand - it is therefore optional, because a
*required* option `projen new` cannot supply would make this project
type impossible to scaffold. AD-001's "never a silent no-op dogfood"
rule is enforced instead by the workflow it generates in that case: a
single step that fails on every PR until a scenario is declared.

---

##### `editorconfig`<sup>Optional</sup> <a name="editorconfig" id="@xpertss/projen-types.GitHubActionProjectOptions.property.editorconfig"></a>

```typescript
public readonly editorconfig: boolean;
```

- *Type:* boolean
- *Default:* true

Write a projen-managed `.editorconfig`.

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.GitHubActionProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

Name of the GitHub Actions secret holding the PAT used for projen-automation PR comments (F003) and the drift-check's PR comments.

It is **not** wired into the dogfood automatically: a dogfood that invokes
an action with a `token` input must reference this secret in the step's
`inputs` (e.g. `token: '${{ secrets.PROJEN_GITHUB_TOKEN }}'`).

---

##### `license`<sup>Optional</sup> <a name="license" id="@xpertss/projen-types.GitHubActionProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "MIT"

SPDX identifier for the generated `LICENSE`.

---

##### `sonarOrganization`<sup>Optional</sup> <a name="sonarOrganization" id="@xpertss/projen-types.GitHubActionProjectOptions.property.sonarOrganization"></a>

```typescript
public readonly sonarOrganization: string;
```

- *Type:* string
- *Default:* "xpertss"

SonarCloud organization key (`sonar.organization`), required by the Scanner CLI on SonarCloud.

---

##### `sonarPullRequestGate`<sup>Optional</sup> <a name="sonarPullRequestGate" id="@xpertss/projen-types.GitHubActionProjectOptions.property.sonarPullRequestGate"></a>

```typescript
public readonly sonarPullRequestGate: boolean;
```

- *Type:* boolean
- *Default:* true

Whether `sonar.yml` also runs on `pull_request` as a pass/fail gate.

---

##### `sonarTokenSecret`<sup>Optional</sup> <a name="sonarTokenSecret" id="@xpertss/projen-types.GitHubActionProjectOptions.property.sonarTokenSecret"></a>

```typescript
public readonly sonarTokenSecret: string;
```

- *Type:* string
- *Default:* "SONAR_TOKEN"

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
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | Copyright owner named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | Copyright period named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.description">description</a></code> | <code>string</code> | Project description, written to the root pom. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.editorconfig">editorconfig</a></code> | <code>boolean</code> | Write a projen-managed `.editorconfig`. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.enforcer">enforcer</a></code> | <code>boolean</code> | Add `maven-enforcer-plugin`, which fails the build up front when the JDK or Maven running it is older than the project needs (rather than later, with confusing compiler errors). |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.javaDistribution">javaDistribution</a></code> | <code>string</code> | `actions/setup-java` distribution CI installs the JDK from. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.javaVersion">javaVersion</a></code> | <code>string</code> | Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.license">license</a></code> | <code>string</code> | SPDX identifier for the generated `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Write a `LICENSE` file. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.minMavenVersion">minMavenVersion</a></code> | <code>string</code> | Lowest Maven version the enforcer accepts (`requireMavenVersion [<this>,)`). |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.packaging">packaging</a></code> | <code>string</code> | Maven packaging of the root pom while the project has no modules. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.pluginVersions">pluginVersions</a></code> | <code>{[ key: string ]: string}</code> | Overrides for the plugin/BOM versions this package pins by default, keyed by `groupId/artifactId`, e.g. `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values must be exact versions. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.sample">sample</a></code> | <code>boolean</code> | Write a starter `Main` class and test under the `groupId` package, if `src/` does not exist yet. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.sonarProjectKey">sonarProjectKey</a></code> | <code>string</code> | SonarCloud project key. |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>boolean</code> | Generate the nightly `upgrade.yml` workflow, which reports available dependency and plugin updates in the job summary (it never edits files - versions are changed in `.projenrc.ts`). |
| <code><a href="#@xpertss/projen-types.JavaAppProjectOptions.property.url">url</a></code> | <code>string</code> | Project URL, written to the root pom. |
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

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@xpertss/projen-types.JavaAppProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* "Xpert Software"

Copyright owner named in the `LICENSE`.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@xpertss/projen-types.JavaAppProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* the current year

Copyright period named in the `LICENSE`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@xpertss/projen-types.JavaAppProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* none

Project description, written to the root pom.

---

##### `editorconfig`<sup>Optional</sup> <a name="editorconfig" id="@xpertss/projen-types.JavaAppProjectOptions.property.editorconfig"></a>

```typescript
public readonly editorconfig: boolean;
```

- *Type:* boolean
- *Default:* true

Write a projen-managed `.editorconfig`.

---

##### `enforcer`<sup>Optional</sup> <a name="enforcer" id="@xpertss/projen-types.JavaAppProjectOptions.property.enforcer"></a>

```typescript
public readonly enforcer: boolean;
```

- *Type:* boolean
- *Default:* true

Add `maven-enforcer-plugin`, which fails the build up front when the JDK or Maven running it is older than the project needs (rather than later, with confusing compiler errors).

Its Java rule always follows
`javaVersion`.

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.JavaAppProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `javaDistribution`<sup>Optional</sup> <a name="javaDistribution" id="@xpertss/projen-types.JavaAppProjectOptions.property.javaDistribution"></a>

```typescript
public readonly javaDistribution: string;
```

- *Type:* string
- *Default:* "temurin"

`actions/setup-java` distribution CI installs the JDK from.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@xpertss/projen-types.JavaAppProjectOptions.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string
- *Default:* "21"

Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`.

Drives every Java-dependent part of the generated build: the compiler
level (`maven.compiler.release`, or `source`/`target` for 1.8, which has
no `--release`), the enforcer's `requireJavaVersion` rule, the JUnit line,
the default Spring Boot line, and the JDK CI installs. Any other value
fails at synth and lists the supported lines.

---

##### `license`<sup>Optional</sup> <a name="license" id="@xpertss/projen-types.JavaAppProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "MIT"

SPDX identifier for the generated `LICENSE`.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@xpertss/projen-types.JavaAppProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Write a `LICENSE` file.

---

##### `minMavenVersion`<sup>Optional</sup> <a name="minMavenVersion" id="@xpertss/projen-types.JavaAppProjectOptions.property.minMavenVersion"></a>

```typescript
public readonly minMavenVersion: string;
```

- *Type:* string
- *Default:* "3.9"

Lowest Maven version the enforcer accepts (`requireMavenVersion [<this>,)`).

Ignored when `enforcer` is false.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@xpertss/projen-types.JavaAppProjectOptions.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string
- *Default:* "jar"

Maven packaging of the root pom while the project has no modules.

Once
`addModule()` is called the root pom is always `pom`-packaged (and
setting anything other than `pom` here is a synth error).

---

##### `pluginVersions`<sup>Optional</sup> <a name="pluginVersions" id="@xpertss/projen-types.JavaAppProjectOptions.property.pluginVersions"></a>

```typescript
public readonly pluginVersions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* the defaults for `javaVersion`

Overrides for the plugin/BOM versions this package pins by default, keyed by `groupId/artifactId`, e.g. `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values must be exact versions.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="@xpertss/projen-types.JavaAppProjectOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* false

Write a starter `Main` class and test under the `groupId` package, if `src/` does not exist yet.

Never written for a multi-module project.

---

##### `sonarProjectKey`<sup>Optional</sup> <a name="sonarProjectKey" id="@xpertss/projen-types.JavaAppProjectOptions.property.sonarProjectKey"></a>

```typescript
public readonly sonarProjectKey: string;
```

- *Type:* string

SonarCloud project key.

If unset, the sonar scan step is skipped.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@xpertss/projen-types.JavaAppProjectOptions.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true

Generate the nightly `upgrade.yml` workflow, which reports available dependency and plugin updates in the job summary (it never edits files - versions are changed in `.projenrc.ts`).

---

##### `url`<sup>Optional</sup> <a name="url" id="@xpertss/projen-types.JavaAppProjectOptions.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string
- *Default:* none

Project URL, written to the root pom.

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
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | Copyright owner named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | Copyright period named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.description">description</a></code> | <code>string</code> | Project description, written to the root pom. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.editorconfig">editorconfig</a></code> | <code>boolean</code> | Write a projen-managed `.editorconfig`. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.enforcer">enforcer</a></code> | <code>boolean</code> | Add `maven-enforcer-plugin`, which fails the build up front when the JDK or Maven running it is older than the project needs (rather than later, with confusing compiler errors). |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.javaDistribution">javaDistribution</a></code> | <code>string</code> | `actions/setup-java` distribution CI installs the JDK from. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.javaVersion">javaVersion</a></code> | <code>string</code> | Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.license">license</a></code> | <code>string</code> | SPDX identifier for the generated `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Write a `LICENSE` file. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.minMavenVersion">minMavenVersion</a></code> | <code>string</code> | Lowest Maven version the enforcer accepts (`requireMavenVersion [<this>,)`). |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.packaging">packaging</a></code> | <code>string</code> | Maven packaging of the root pom while the project has no modules. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.pluginVersions">pluginVersions</a></code> | <code>{[ key: string ]: string}</code> | Overrides for the plugin/BOM versions this package pins by default, keyed by `groupId/artifactId`, e.g. `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values must be exact versions. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.sample">sample</a></code> | <code>boolean</code> | Write a starter `Main` class and test under the `groupId` package, if `src/` does not exist yet. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.sonarProjectKey">sonarProjectKey</a></code> | <code>string</code> | SonarCloud project key. |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>boolean</code> | Generate the nightly `upgrade.yml` workflow, which reports available dependency and plugin updates in the job summary (it never edits files - versions are changed in `.projenrc.ts`). |
| <code><a href="#@xpertss/projen-types.JavaLibraryProjectOptions.property.url">url</a></code> | <code>string</code> | Project URL, written to the root pom. |
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

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* "Xpert Software"

Copyright owner named in the `LICENSE`.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* the current year

Copyright period named in the `LICENSE`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* none

Project description, written to the root pom.

---

##### `editorconfig`<sup>Optional</sup> <a name="editorconfig" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.editorconfig"></a>

```typescript
public readonly editorconfig: boolean;
```

- *Type:* boolean
- *Default:* true

Write a projen-managed `.editorconfig`.

---

##### `enforcer`<sup>Optional</sup> <a name="enforcer" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.enforcer"></a>

```typescript
public readonly enforcer: boolean;
```

- *Type:* boolean
- *Default:* true

Add `maven-enforcer-plugin`, which fails the build up front when the JDK or Maven running it is older than the project needs (rather than later, with confusing compiler errors).

Its Java rule always follows
`javaVersion`.

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `javaDistribution`<sup>Optional</sup> <a name="javaDistribution" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.javaDistribution"></a>

```typescript
public readonly javaDistribution: string;
```

- *Type:* string
- *Default:* "temurin"

`actions/setup-java` distribution CI installs the JDK from.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string
- *Default:* "21"

Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`.

Drives every Java-dependent part of the generated build: the compiler
level (`maven.compiler.release`, or `source`/`target` for 1.8, which has
no `--release`), the enforcer's `requireJavaVersion` rule, the JUnit line,
the default Spring Boot line, and the JDK CI installs. Any other value
fails at synth and lists the supported lines.

---

##### `license`<sup>Optional</sup> <a name="license" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "MIT"

SPDX identifier for the generated `LICENSE`.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Write a `LICENSE` file.

---

##### `minMavenVersion`<sup>Optional</sup> <a name="minMavenVersion" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.minMavenVersion"></a>

```typescript
public readonly minMavenVersion: string;
```

- *Type:* string
- *Default:* "3.9"

Lowest Maven version the enforcer accepts (`requireMavenVersion [<this>,)`).

Ignored when `enforcer` is false.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string
- *Default:* "jar"

Maven packaging of the root pom while the project has no modules.

Once
`addModule()` is called the root pom is always `pom`-packaged (and
setting anything other than `pom` here is a synth error).

---

##### `pluginVersions`<sup>Optional</sup> <a name="pluginVersions" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.pluginVersions"></a>

```typescript
public readonly pluginVersions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* the defaults for `javaVersion`

Overrides for the plugin/BOM versions this package pins by default, keyed by `groupId/artifactId`, e.g. `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values must be exact versions.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* false

Write a starter `Main` class and test under the `groupId` package, if `src/` does not exist yet.

Never written for a multi-module project.

---

##### `sonarProjectKey`<sup>Optional</sup> <a name="sonarProjectKey" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.sonarProjectKey"></a>

```typescript
public readonly sonarProjectKey: string;
```

- *Type:* string

SonarCloud project key.

If unset, the sonar scan step is skipped.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true

Generate the nightly `upgrade.yml` workflow, which reports available dependency and plugin updates in the job summary (it never edits files - versions are changed in `.projenrc.ts`).

---

##### `url`<sup>Optional</sup> <a name="url" id="@xpertss/projen-types.JavaLibraryProjectOptions.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string
- *Default:* none

Project URL, written to the root pom.

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

Options for `JavaMavenProject`.

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
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | Copyright owner named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | Copyright period named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.description">description</a></code> | <code>string</code> | Project description, written to the root pom. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.editorconfig">editorconfig</a></code> | <code>boolean</code> | Write a projen-managed `.editorconfig`. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.enforcer">enforcer</a></code> | <code>boolean</code> | Add `maven-enforcer-plugin`, which fails the build up front when the JDK or Maven running it is older than the project needs (rather than later, with confusing compiler errors). |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.javaDistribution">javaDistribution</a></code> | <code>string</code> | `actions/setup-java` distribution CI installs the JDK from. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.javaVersion">javaVersion</a></code> | <code>string</code> | Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.license">license</a></code> | <code>string</code> | SPDX identifier for the generated `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Write a `LICENSE` file. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.minMavenVersion">minMavenVersion</a></code> | <code>string</code> | Lowest Maven version the enforcer accepts (`requireMavenVersion [<this>,)`). |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.packaging">packaging</a></code> | <code>string</code> | Maven packaging of the root pom while the project has no modules. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.pluginVersions">pluginVersions</a></code> | <code>{[ key: string ]: string}</code> | Overrides for the plugin/BOM versions this package pins by default, keyed by `groupId/artifactId`, e.g. `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values must be exact versions. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.sample">sample</a></code> | <code>boolean</code> | Write a starter `Main` class and test under the `groupId` package, if `src/` does not exist yet. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.sonarProjectKey">sonarProjectKey</a></code> | <code>string</code> | SonarCloud project key. |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>boolean</code> | Generate the nightly `upgrade.yml` workflow, which reports available dependency and plugin updates in the job summary (it never edits files - versions are changed in `.projenrc.ts`). |
| <code><a href="#@xpertss/projen-types.JavaMavenProjectOptions.property.url">url</a></code> | <code>string</code> | Project URL, written to the root pom. |
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

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@xpertss/projen-types.JavaMavenProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* "Xpert Software"

Copyright owner named in the `LICENSE`.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@xpertss/projen-types.JavaMavenProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* the current year

Copyright period named in the `LICENSE`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@xpertss/projen-types.JavaMavenProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* none

Project description, written to the root pom.

---

##### `editorconfig`<sup>Optional</sup> <a name="editorconfig" id="@xpertss/projen-types.JavaMavenProjectOptions.property.editorconfig"></a>

```typescript
public readonly editorconfig: boolean;
```

- *Type:* boolean
- *Default:* true

Write a projen-managed `.editorconfig`.

---

##### `enforcer`<sup>Optional</sup> <a name="enforcer" id="@xpertss/projen-types.JavaMavenProjectOptions.property.enforcer"></a>

```typescript
public readonly enforcer: boolean;
```

- *Type:* boolean
- *Default:* true

Add `maven-enforcer-plugin`, which fails the build up front when the JDK or Maven running it is older than the project needs (rather than later, with confusing compiler errors).

Its Java rule always follows
`javaVersion`.

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.JavaMavenProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `javaDistribution`<sup>Optional</sup> <a name="javaDistribution" id="@xpertss/projen-types.JavaMavenProjectOptions.property.javaDistribution"></a>

```typescript
public readonly javaDistribution: string;
```

- *Type:* string
- *Default:* "temurin"

`actions/setup-java` distribution CI installs the JDK from.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@xpertss/projen-types.JavaMavenProjectOptions.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string
- *Default:* "21"

Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`.

Drives every Java-dependent part of the generated build: the compiler
level (`maven.compiler.release`, or `source`/`target` for 1.8, which has
no `--release`), the enforcer's `requireJavaVersion` rule, the JUnit line,
the default Spring Boot line, and the JDK CI installs. Any other value
fails at synth and lists the supported lines.

---

##### `license`<sup>Optional</sup> <a name="license" id="@xpertss/projen-types.JavaMavenProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "MIT"

SPDX identifier for the generated `LICENSE`.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@xpertss/projen-types.JavaMavenProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Write a `LICENSE` file.

---

##### `minMavenVersion`<sup>Optional</sup> <a name="minMavenVersion" id="@xpertss/projen-types.JavaMavenProjectOptions.property.minMavenVersion"></a>

```typescript
public readonly minMavenVersion: string;
```

- *Type:* string
- *Default:* "3.9"

Lowest Maven version the enforcer accepts (`requireMavenVersion [<this>,)`).

Ignored when `enforcer` is false.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@xpertss/projen-types.JavaMavenProjectOptions.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string
- *Default:* "jar"

Maven packaging of the root pom while the project has no modules.

Once
`addModule()` is called the root pom is always `pom`-packaged (and
setting anything other than `pom` here is a synth error).

---

##### `pluginVersions`<sup>Optional</sup> <a name="pluginVersions" id="@xpertss/projen-types.JavaMavenProjectOptions.property.pluginVersions"></a>

```typescript
public readonly pluginVersions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* the defaults for `javaVersion`

Overrides for the plugin/BOM versions this package pins by default, keyed by `groupId/artifactId`, e.g. `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values must be exact versions.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="@xpertss/projen-types.JavaMavenProjectOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* false

Write a starter `Main` class and test under the `groupId` package, if `src/` does not exist yet.

Never written for a multi-module project.

---

##### `sonarProjectKey`<sup>Optional</sup> <a name="sonarProjectKey" id="@xpertss/projen-types.JavaMavenProjectOptions.property.sonarProjectKey"></a>

```typescript
public readonly sonarProjectKey: string;
```

- *Type:* string

SonarCloud project key.

If unset, the sonar scan step is skipped.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@xpertss/projen-types.JavaMavenProjectOptions.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true

Generate the nightly `upgrade.yml` workflow, which reports available dependency and plugin updates in the job summary (it never edits files - versions are changed in `.projenrc.ts`).

---

##### `url`<sup>Optional</sup> <a name="url" id="@xpertss/projen-types.JavaMavenProjectOptions.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string
- *Default:* none

Project URL, written to the root pom.

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
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | Copyright owner named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | Copyright period named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.description">description</a></code> | <code>string</code> | Project description, written to the root pom. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.editorconfig">editorconfig</a></code> | <code>boolean</code> | Write a projen-managed `.editorconfig`. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.enforcer">enforcer</a></code> | <code>boolean</code> | Add `maven-enforcer-plugin`, which fails the build up front when the JDK or Maven running it is older than the project needs (rather than later, with confusing compiler errors). |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.javaDistribution">javaDistribution</a></code> | <code>string</code> | `actions/setup-java` distribution CI installs the JDK from. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.javaVersion">javaVersion</a></code> | <code>string</code> | Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.license">license</a></code> | <code>string</code> | SPDX identifier for the generated `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Write a `LICENSE` file. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.minMavenVersion">minMavenVersion</a></code> | <code>string</code> | Lowest Maven version the enforcer accepts (`requireMavenVersion [<this>,)`). |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.packaging">packaging</a></code> | <code>string</code> | Maven packaging of the root pom while the project has no modules. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.pluginVersions">pluginVersions</a></code> | <code>{[ key: string ]: string}</code> | Overrides for the plugin/BOM versions this package pins by default, keyed by `groupId/artifactId`, e.g. `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values must be exact versions. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.sample">sample</a></code> | <code>boolean</code> | Write a starter `Main` class and test under the `groupId` package, if `src/` does not exist yet. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.sonarProjectKey">sonarProjectKey</a></code> | <code>string</code> | SonarCloud project key. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>boolean</code> | Generate the nightly `upgrade.yml` workflow, which reports available dependency and plugin updates in the job summary (it never edits files - versions are changed in `.projenrc.ts`). |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.url">url</a></code> | <code>string</code> | Project URL, written to the root pom. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.springBootVersion">springBootVersion</a></code> | <code>string</code> | Spring Boot version: imports `spring-boot-dependencies` as the first BOM, and versions `spring-boot-maven-plugin`. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.cdkDeployHook">cdkDeployHook</a></code> | <code>boolean</code> | Whether to generate the `deploy-cdk` workflow at all. |
| <code><a href="#@xpertss/projen-types.JavaServiceProjectOptions.property.cdkDeployTargetRepo">cdkDeployTargetRepo</a></code> | <code>string</code> | The companion CDK infra/app repo (`owner/repo`) whose `deploy.yml` the `deploy-cdk` workflow dispatches. |
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

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@xpertss/projen-types.JavaServiceProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* "Xpert Software"

Copyright owner named in the `LICENSE`.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@xpertss/projen-types.JavaServiceProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* the current year

Copyright period named in the `LICENSE`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@xpertss/projen-types.JavaServiceProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* none

Project description, written to the root pom.

---

##### `editorconfig`<sup>Optional</sup> <a name="editorconfig" id="@xpertss/projen-types.JavaServiceProjectOptions.property.editorconfig"></a>

```typescript
public readonly editorconfig: boolean;
```

- *Type:* boolean
- *Default:* true

Write a projen-managed `.editorconfig`.

---

##### `enforcer`<sup>Optional</sup> <a name="enforcer" id="@xpertss/projen-types.JavaServiceProjectOptions.property.enforcer"></a>

```typescript
public readonly enforcer: boolean;
```

- *Type:* boolean
- *Default:* true

Add `maven-enforcer-plugin`, which fails the build up front when the JDK or Maven running it is older than the project needs (rather than later, with confusing compiler errors).

Its Java rule always follows
`javaVersion`.

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.JavaServiceProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `javaDistribution`<sup>Optional</sup> <a name="javaDistribution" id="@xpertss/projen-types.JavaServiceProjectOptions.property.javaDistribution"></a>

```typescript
public readonly javaDistribution: string;
```

- *Type:* string
- *Default:* "temurin"

`actions/setup-java` distribution CI installs the JDK from.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@xpertss/projen-types.JavaServiceProjectOptions.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string
- *Default:* "21"

Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`.

Drives every Java-dependent part of the generated build: the compiler
level (`maven.compiler.release`, or `source`/`target` for 1.8, which has
no `--release`), the enforcer's `requireJavaVersion` rule, the JUnit line,
the default Spring Boot line, and the JDK CI installs. Any other value
fails at synth and lists the supported lines.

---

##### `license`<sup>Optional</sup> <a name="license" id="@xpertss/projen-types.JavaServiceProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "MIT"

SPDX identifier for the generated `LICENSE`.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@xpertss/projen-types.JavaServiceProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Write a `LICENSE` file.

---

##### `minMavenVersion`<sup>Optional</sup> <a name="minMavenVersion" id="@xpertss/projen-types.JavaServiceProjectOptions.property.minMavenVersion"></a>

```typescript
public readonly minMavenVersion: string;
```

- *Type:* string
- *Default:* "3.9"

Lowest Maven version the enforcer accepts (`requireMavenVersion [<this>,)`).

Ignored when `enforcer` is false.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@xpertss/projen-types.JavaServiceProjectOptions.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string
- *Default:* "jar"

Maven packaging of the root pom while the project has no modules.

Once
`addModule()` is called the root pom is always `pom`-packaged (and
setting anything other than `pom` here is a synth error).

---

##### `pluginVersions`<sup>Optional</sup> <a name="pluginVersions" id="@xpertss/projen-types.JavaServiceProjectOptions.property.pluginVersions"></a>

```typescript
public readonly pluginVersions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* the defaults for `javaVersion`

Overrides for the plugin/BOM versions this package pins by default, keyed by `groupId/artifactId`, e.g. `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values must be exact versions.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="@xpertss/projen-types.JavaServiceProjectOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* false

Write a starter `Main` class and test under the `groupId` package, if `src/` does not exist yet.

Never written for a multi-module project.

---

##### `sonarProjectKey`<sup>Optional</sup> <a name="sonarProjectKey" id="@xpertss/projen-types.JavaServiceProjectOptions.property.sonarProjectKey"></a>

```typescript
public readonly sonarProjectKey: string;
```

- *Type:* string

SonarCloud project key.

If unset, the sonar scan step is skipped.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@xpertss/projen-types.JavaServiceProjectOptions.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true

Generate the nightly `upgrade.yml` workflow, which reports available dependency and plugin updates in the job summary (it never edits files - versions are changed in `.projenrc.ts`).

---

##### `url`<sup>Optional</sup> <a name="url" id="@xpertss/projen-types.JavaServiceProjectOptions.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string
- *Default:* none

Project URL, written to the root pom.

---

##### `version`<sup>Optional</sup> <a name="version" id="@xpertss/projen-types.JavaServiceProjectOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

---

##### `springBootVersion`<sup>Optional</sup> <a name="springBootVersion" id="@xpertss/projen-types.JavaServiceProjectOptions.property.springBootVersion"></a>

```typescript
public readonly springBootVersion: string;
```

- *Type:* string
- *Default:* the newest release of the line supporting `javaVersion` (2.7.x for 1.8, otherwise the current major)

Spring Boot version: imports `spring-boot-dependencies` as the first BOM, and versions `spring-boot-maven-plugin`.

Must be an exact version.
Spring Boot 3 and later need Java 17+, so with `javaVersion: '1.8'` only
a 2.x version is accepted.

---

##### `cdkDeployHook`<sup>Optional</sup> <a name="cdkDeployHook" id="@xpertss/projen-types.JavaServiceProjectOptions.property.cdkDeployHook"></a>

```typescript
public readonly cdkDeployHook: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to generate the `deploy-cdk` workflow at all.

---

##### `cdkDeployTargetRepo`<sup>Optional</sup> <a name="cdkDeployTargetRepo" id="@xpertss/projen-types.JavaServiceProjectOptions.property.cdkDeployTargetRepo"></a>

```typescript
public readonly cdkDeployTargetRepo: string;
```

- *Type:* string
- *Default:* `deploy-cdk.yml` is generated with a single failing step that tells you to set this

The companion CDK infra/app repo (`owner/repo`) whose `deploy.yml` the `deploy-cdk` workflow dispatches.

A plain string rather than a nested struct so that
`projen new --from

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

### JavaSpringBootProjectOptions <a name="JavaSpringBootProjectOptions" id="@xpertss/projen-types.JavaSpringBootProjectOptions"></a>

Options for `JavaSpringBootProject`.

#### Initializer <a name="Initializer" id="@xpertss/projen-types.JavaSpringBootProjectOptions.Initializer"></a>

```typescript
import { JavaSpringBootProjectOptions } from '@xpertss/projen-types'

const javaSpringBootProjectOptions: JavaSpringBootProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | Copyright owner named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | Copyright period named in the `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.description">description</a></code> | <code>string</code> | Project description, written to the root pom. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.editorconfig">editorconfig</a></code> | <code>boolean</code> | Write a projen-managed `.editorconfig`. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.enforcer">enforcer</a></code> | <code>boolean</code> | Add `maven-enforcer-plugin`, which fails the build up front when the JDK or Maven running it is older than the project needs (rather than later, with confusing compiler errors). |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.javaDistribution">javaDistribution</a></code> | <code>string</code> | `actions/setup-java` distribution CI installs the JDK from. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.javaVersion">javaVersion</a></code> | <code>string</code> | Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.license">license</a></code> | <code>string</code> | SPDX identifier for the generated `LICENSE`. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Write a `LICENSE` file. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.minMavenVersion">minMavenVersion</a></code> | <code>string</code> | Lowest Maven version the enforcer accepts (`requireMavenVersion [<this>,)`). |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.packaging">packaging</a></code> | <code>string</code> | Maven packaging of the root pom while the project has no modules. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.pluginVersions">pluginVersions</a></code> | <code>{[ key: string ]: string}</code> | Overrides for the plugin/BOM versions this package pins by default, keyed by `groupId/artifactId`, e.g. `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values must be exact versions. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.sample">sample</a></code> | <code>boolean</code> | Write a starter `Main` class and test under the `groupId` package, if `src/` does not exist yet. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.sonarProjectKey">sonarProjectKey</a></code> | <code>string</code> | SonarCloud project key. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>boolean</code> | Generate the nightly `upgrade.yml` workflow, which reports available dependency and plugin updates in the job summary (it never edits files - versions are changed in `.projenrc.ts`). |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.url">url</a></code> | <code>string</code> | Project URL, written to the root pom. |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.JavaSpringBootProjectOptions.property.springBootVersion">springBootVersion</a></code> | <code>string</code> | Spring Boot version: imports `spring-boot-dependencies` as the first BOM, and versions `spring-boot-maven-plugin`. |

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* "Xpert Software"

Copyright owner named in the `LICENSE`.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* the current year

Copyright period named in the `LICENSE`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* none

Project description, written to the root pom.

---

##### `editorconfig`<sup>Optional</sup> <a name="editorconfig" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.editorconfig"></a>

```typescript
public readonly editorconfig: boolean;
```

- *Type:* boolean
- *Default:* true

Write a projen-managed `.editorconfig`.

---

##### `enforcer`<sup>Optional</sup> <a name="enforcer" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.enforcer"></a>

```typescript
public readonly enforcer: boolean;
```

- *Type:* boolean
- *Default:* true

Add `maven-enforcer-plugin`, which fails the build up front when the JDK or Maven running it is older than the project needs (rather than later, with confusing compiler errors).

Its Java rule always follows
`javaVersion`.

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

---

##### `javaDistribution`<sup>Optional</sup> <a name="javaDistribution" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.javaDistribution"></a>

```typescript
public readonly javaDistribution: string;
```

- *Type:* string
- *Default:* "temurin"

`actions/setup-java` distribution CI installs the JDK from.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string
- *Default:* "21"

Java line the build targets: `1.8` (alias `8`), `17`, `21`, or `25`.

Drives every Java-dependent part of the generated build: the compiler
level (`maven.compiler.release`, or `source`/`target` for 1.8, which has
no `--release`), the enforcer's `requireJavaVersion` rule, the JUnit line,
the default Spring Boot line, and the JDK CI installs. Any other value
fails at synth and lists the supported lines.

---

##### `license`<sup>Optional</sup> <a name="license" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "MIT"

SPDX identifier for the generated `LICENSE`.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Write a `LICENSE` file.

---

##### `minMavenVersion`<sup>Optional</sup> <a name="minMavenVersion" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.minMavenVersion"></a>

```typescript
public readonly minMavenVersion: string;
```

- *Type:* string
- *Default:* "3.9"

Lowest Maven version the enforcer accepts (`requireMavenVersion [<this>,)`).

Ignored when `enforcer` is false.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string
- *Default:* "jar"

Maven packaging of the root pom while the project has no modules.

Once
`addModule()` is called the root pom is always `pom`-packaged (and
setting anything other than `pom` here is a synth error).

---

##### `pluginVersions`<sup>Optional</sup> <a name="pluginVersions" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.pluginVersions"></a>

```typescript
public readonly pluginVersions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* the defaults for `javaVersion`

Overrides for the plugin/BOM versions this package pins by default, keyed by `groupId/artifactId`, e.g. `{ 'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6' }`. Values must be exact versions.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* false

Write a starter `Main` class and test under the `groupId` package, if `src/` does not exist yet.

Never written for a multi-module project.

---

##### `sonarProjectKey`<sup>Optional</sup> <a name="sonarProjectKey" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.sonarProjectKey"></a>

```typescript
public readonly sonarProjectKey: string;
```

- *Type:* string

SonarCloud project key.

If unset, the sonar scan step is skipped.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true

Generate the nightly `upgrade.yml` workflow, which reports available dependency and plugin updates in the job summary (it never edits files - versions are changed in `.projenrc.ts`).

---

##### `url`<sup>Optional</sup> <a name="url" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string
- *Default:* none

Project URL, written to the root pom.

---

##### `version`<sup>Optional</sup> <a name="version" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

---

##### `springBootVersion`<sup>Optional</sup> <a name="springBootVersion" id="@xpertss/projen-types.JavaSpringBootProjectOptions.property.springBootVersion"></a>

```typescript
public readonly springBootVersion: string;
```

- *Type:* string
- *Default:* the newest release of the line supporting `javaVersion` (2.7.x for 1.8, otherwise the current major)

Spring Boot version: imports `spring-boot-dependencies` as the first BOM, and versions `spring-boot-maven-plugin`.

Must be an exact version.
Spring Boot 3 and later need Java 17+, so with `javaVersion: '1.8'` only
a 2.x version is accepted.

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

### MavenCoordinates <a name="MavenCoordinates" id="@xpertss/projen-types.MavenCoordinates"></a>

Parsed `groupId/artifactId[@version]` spec.

#### Initializer <a name="Initializer" id="@xpertss/projen-types.MavenCoordinates.Initializer"></a>

```typescript
import { MavenCoordinates } from '@xpertss/projen-types'

const mavenCoordinates: MavenCoordinates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenCoordinates.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenCoordinates.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenCoordinates.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@xpertss/projen-types.MavenCoordinates.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@xpertss/projen-types.MavenCoordinates.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `version`<sup>Optional</sup> <a name="version" id="@xpertss/projen-types.MavenCoordinates.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

### MavenModuleOptions <a name="MavenModuleOptions" id="@xpertss/projen-types.MavenModuleOptions"></a>

Options for `JavaMavenProject.addModule()`.

#### Initializer <a name="Initializer" id="@xpertss/projen-types.MavenModuleOptions.Initializer"></a>

```typescript
import { MavenModuleOptions } from '@xpertss/projen-types'

const mavenModuleOptions: MavenModuleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenModuleOptions.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenModuleOptions.property.dir">dir</a></code> | <code>string</code> | Module directory, relative to the repo root (may be nested, e.g. `tools/stub-model`). Its `pom.xml` is generated there. |
| <code><a href="#@xpertss/projen-types.MavenModuleOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenModuleOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenModuleOptions.property.packaging">packaging</a></code> | <code>string</code> | *No description.* |

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@xpertss/projen-types.MavenModuleOptions.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `dir`<sup>Required</sup> <a name="dir" id="@xpertss/projen-types.MavenModuleOptions.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

Module directory, relative to the repo root (may be nested, e.g. `tools/stub-model`). Its `pom.xml` is generated there.

---

##### `description`<sup>Optional</sup> <a name="description" id="@xpertss/projen-types.MavenModuleOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* none

---

##### `name`<sup>Optional</sup> <a name="name" id="@xpertss/projen-types.MavenModuleOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* the artifactId

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@xpertss/projen-types.MavenModuleOptions.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string
- *Default:* "jar"

---

### MavenPomOptions <a name="MavenPomOptions" id="@xpertss/projen-types.MavenPomOptions"></a>

Options for `MavenPom`.

#### Initializer <a name="Initializer" id="@xpertss/projen-types.MavenPomOptions.Initializer"></a>

```typescript
import { MavenPomOptions } from '@xpertss/projen-types'

const mavenPomOptions: MavenPomOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenPomOptions.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPomOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPomOptions.property.filePath">filePath</a></code> | <code>string</code> | Path of the pom, relative to the project root. |
| <code><a href="#@xpertss/projen-types.MavenPomOptions.property.groupId">groupId</a></code> | <code>string</code> | `groupId`. |
| <code><a href="#@xpertss/projen-types.MavenPomOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPomOptions.property.packaging">packaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPomOptions.property.parent">parent</a></code> | <code>projen.java.ParentPom</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPomOptions.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@xpertss/projen-types.MavenPomOptions.property.version">version</a></code> | <code>string</code> | `version`. |

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@xpertss/projen-types.MavenPomOptions.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="@xpertss/projen-types.MavenPomOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* none

---

##### `filePath`<sup>Optional</sup> <a name="filePath" id="@xpertss/projen-types.MavenPomOptions.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string
- *Default:* "pom.xml"

Path of the pom, relative to the project root.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@xpertss/projen-types.MavenPomOptions.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string
- *Default:* inherited from the parent

`groupId`.

Omit in a module pom to inherit it from `<parent>`.

---

##### `name`<sup>Optional</sup> <a name="name" id="@xpertss/projen-types.MavenPomOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* none

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@xpertss/projen-types.MavenPomOptions.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string
- *Default:* "jar"

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@xpertss/projen-types.MavenPomOptions.property.parent"></a>

```typescript
public readonly parent: ParentPom;
```

- *Type:* projen.java.ParentPom
- *Default:* no parent

---

##### `url`<sup>Optional</sup> <a name="url" id="@xpertss/projen-types.MavenPomOptions.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string
- *Default:* none

---

##### `version`<sup>Optional</sup> <a name="version" id="@xpertss/projen-types.MavenPomOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* inherited from the parent

`version`.

Omit in a module pom to inherit it from `<parent>`.

---

### MavenUpgradeReportOptions <a name="MavenUpgradeReportOptions" id="@xpertss/projen-types.MavenUpgradeReportOptions"></a>

#### Initializer <a name="Initializer" id="@xpertss/projen-types.MavenUpgradeReportOptions.Initializer"></a>

```typescript
import { MavenUpgradeReportOptions } from '@xpertss/projen-types'

const mavenUpgradeReportOptions: MavenUpgradeReportOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReportOptions.property.setupSteps">setupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps that install Node, the projen toolchain, and the JDK. |
| <code><a href="#@xpertss/projen-types.MavenUpgradeReportOptions.property.task">task</a></code> | <code>projen.Task</code> | The task that prints the available updates. |

---

##### `setupSteps`<sup>Required</sup> <a name="setupSteps" id="@xpertss/projen-types.MavenUpgradeReportOptions.property.setupSteps"></a>

```typescript
public readonly setupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

Steps that install Node, the projen toolchain, and the JDK.

---

##### `task`<sup>Required</sup> <a name="task" id="@xpertss/projen-types.MavenUpgradeReportOptions.property.task"></a>

```typescript
public readonly task: Task;
```

- *Type:* projen.Task

The task that prints the available updates.

---

### ProjenDriftCheckWorkflowOptions <a name="ProjenDriftCheckWorkflowOptions" id="@xpertss/projen-types.ProjenDriftCheckWorkflowOptions"></a>

PR-triggered check that rejects direct edits to projen-managed files.

Re-runs the project's synth command on the PR head and fails if the
regenerated output no longer matches what's committed - i.e. someone
hand-edited a generated file (package.json / pom.xml /
.github/workflows/*.yml / ...) instead of going through `.projenrc.ts`.

Runs on `pull_request` so it genuinely executes the PR's own code (the
only way to detect drift) - and therefore, by necessity, a PR author can
disable it within their own PR. That residual exposure is bounded by
`WorkflowChangeNoticeWorkflow` (Check 2), which is tamper-proof and flags
any touch to `.github/workflows/**`. See the F003 spec's Security section.

#### Initializer <a name="Initializer" id="@xpertss/projen-types.ProjenDriftCheckWorkflowOptions.Initializer"></a>

```typescript
import { ProjenDriftCheckWorkflowOptions } from '@xpertss/projen-types'

const projenDriftCheckWorkflowOptions: ProjenDriftCheckWorkflowOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflowOptions.property.gheTokenSecret">gheTokenSecret</a></code> | <code>string</code> | GitHub secret holding a token with permission to comment on PRs, used for the best-effort drift report comment. |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflowOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command that regenerates the project from `.projenrc.ts`. The default runs the projen that `npm ci` just installed (exact version from `package-lock.json`) rather than `npx`, which can install on demand. |
| <code><a href="#@xpertss/projen-types.ProjenDriftCheckWorkflowOptions.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |

---

##### `gheTokenSecret`<sup>Optional</sup> <a name="gheTokenSecret" id="@xpertss/projen-types.ProjenDriftCheckWorkflowOptions.property.gheTokenSecret"></a>

```typescript
public readonly gheTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

GitHub secret holding a token with permission to comment on PRs, used for the best-effort drift report comment.

The check still fails (and
emits `::error::` annotations) without it, so fork PRs - which get no
secrets - are only missing the extra comment.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@xpertss/projen-types.ProjenDriftCheckWorkflowOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "./node_modules/.bin/projen"

The command that regenerates the project from `.projenrc.ts`. The default runs the projen that `npm ci` just installed (exact version from `package-lock.json`) rather than `npx`, which can install on demand.

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="@xpertss/projen-types.ProjenDriftCheckWorkflowOptions.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string
- *Default:* "projen-drift-check"

---

### WorkflowChangeNoticeWorkflowOptions <a name="WorkflowChangeNoticeWorkflowOptions" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflowOptions"></a>

PR-triggered, tamper-proof notice that a PR touches GitHub Actions workflow or action files.

Runs on `pull_request_target` (NOT `pull_request`) so it always executes
the copy of this workflow committed on the base branch - a PR cannot edit
this file to disable or weaken the notice. It checks out and executes
nothing from the PR; it only lists the changed filenames via the GitHub
API and posts a non-blocking NOTE. Because `pull_request_target` runs with
the base repo's normal token even for fork-originated PRs, the comment
posts reliably with no degraded fallback.

This check NEVER fails the build - it is purely informational (reviewer
attention). It is the tamper-proof backstop that bounds Check 1's
(`ProjenDriftCheckWorkflow`) residual exposure. See the F003 spec's
Security section.

#### Initializer <a name="Initializer" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflowOptions.Initializer"></a>

```typescript
import { WorkflowChangeNoticeWorkflowOptions } from '@xpertss/projen-types'

const workflowChangeNoticeWorkflowOptions: WorkflowChangeNoticeWorkflowOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflowOptions.property.watchPaths">watchPaths</a></code> | <code>string[]</code> | Glob patterns (bash `[[ string == pattern ]]` semantics, where `*` also matches `/`) that trigger the notice when a changed PR file matches any of them. |
| <code><a href="#@xpertss/projen-types.WorkflowChangeNoticeWorkflowOptions.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |

---

##### `watchPaths`<sup>Optional</sup> <a name="watchPaths" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflowOptions.property.watchPaths"></a>

```typescript
public readonly watchPaths: string[];
```

- *Type:* string[]
- *Default:* [".github/workflows/**", ".github/actions/**"]

Glob patterns (bash `[[ string == pattern ]]` semantics, where `*` also matches `/`) that trigger the notice when a changed PR file matches any of them.

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="@xpertss/projen-types.WorkflowChangeNoticeWorkflowOptions.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string
- *Default:* "workflow-change-notice"

---



