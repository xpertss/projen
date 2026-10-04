# @xpertss/projen-types

Projen project types for CDK/TypeScript and Java/Maven projects.

Instead of hand-maintaining `pom.xml`, `cdk.json`, and GitHub workflows, you declare a project type in a `.projenrc.ts` file and let [projen](https://github.com/projen/projen) generate (and keep up to date) the whole scaffold: build files, source skeletons, CI workflows, and deploy pipelines.

## Project types at a glance

| Type | What it is | Publishes to | Generated workflows |
| --- | --- | --- | --- |
| `CdkInfraProject` | Pure-infrastructure CDK stacks (CloudFront, Route53, SQS, API Gateway, Cognito, ECR/ECS for externally-built images) | - | `build` (PR checks), `deploy` (manual dispatch) |
| `CdkAppProject` | Full TypeScript service behind API Gateway: infra + app source + database | - | `build`, `deploy`, `app-build` (PR checks) |
| `JavaMavenProject` | Plain Maven project, single- or multi-module, no framework | - | `build`, `upgrade` (nightly report) |
| `JavaLibraryProject` | Reusable Java library | Maven Central | `build`, `upgrade` (nightly report), `publish-maven-central`, `codeindex` |
| `JavaAppProject` | GUI/TUI/CLI Java application | GitHub Packages | `build`, `upgrade` (nightly report), `publish-ghpackages` |
| `JavaSpringBootProject` | Spring Boot on Maven, single- or multi-module, **no Docker** | - | `build`, `upgrade` (nightly report) |
| `JavaServiceProject` | Spring Boot service deployed as a container | Docker Hub | `build`, `upgrade` (nightly report), `publish-docker`, `deploy-cdk` |
| `GitHubActionProject` | Reusable GitHub Action or Workflow | GitHub Releases | `build`, `test-dogfood`, `sonar`, `release` |

The Java types are layered, so pick the lowest layer that does what you need:

```text
JavaMavenProject            java_maven         Maven only; single- or multi-module; any supported Java line
├── JavaLibraryProject      java_library       + Maven Central publish, source/javadoc jars, code index
├── JavaAppProject          java_app           + GitHub Packages publish
└── JavaSpringBootProject   java_spring_boot   + Spring Boot BOM and executable-jar repackaging; no Docker/Flyway/CDK
    └── JavaServiceProject  java_service       + Docker publish, Flyway, CDK deploy hook (single-module)
```

Every Java type targets a configurable Java line (`javaVersion`: `1.8`, `17`, `21` or `25`; see [Java version support](#java-version-support)), and every one except `JavaServiceProject` can be a multi-module Maven reactor (see [JavaMavenProject](#javamavenproject)).

One foundation class is also exported for advanced use: `CdkTypescriptProject` (shared CDK + TypeScript base for the CDK types).

All project types:

- run a **drift check** in PR builds - a job that re-runs projen and fails if generated files were hand-edited. Edit `.projenrc.ts`, then run `npx projen`; never edit generated files directly.
- use the GitHub secret `PROJEN_GITHUB_TOKEN` (a fine-grained PAT) for projen's automation. Override with `gheTokenSecret`.
- make all publishing/deploying **manual** (workflow_dispatch) rather than on every merge.

## Getting started

How you start depends on what is already in the directory:

| Starting point | Do this |
| --- | --- |
| Empty directory | `projen new --from` (below) |
| Existing repo, no `.projenrc.ts` | `projen new --from ... --no-git` (below) |
| A `.projenrc.ts` but no `.projen/` directory - copied from another repo, or one of the [examples](#examples) pasted into a fresh repo | [Starting from an existing `.projenrc.ts`](#starting-from-an-existing-projenrcts) |

Scaffold the repo with projen's own bootstrap, pointed at this package:

```bash
mkdir my-project && cd my-project
git init
npx projen new --from @xpertss/projen-types cdk_infra --name my-project
```

That writes a starter `.projenrc.ts`, synthesizes the whole scaffold and
installs dependencies. The type names `projen new` accepts are `cdk_infra`,
`cdk_app`, `java_maven`, `java_library`, `java_app`, `java_spring_boot`,
`java_service` and `git_hub_action`; pass a bogus one to have it list them.
Required options become flags: `--name` for every type, plus
`--group-id`/`--artifact-id` (Java) and `--sonar-host-url`
(`git_hub_action`). Any other plainly-typed option can be passed the same
way - `--java-version 1.8`, `--cdk-deploy-target-repo owner/repo`,
`--docker-registry ghcr.io`, `--no-use-flyway`, and so on. Modules can't be
passed on the command line; add them to `.projenrc.ts` afterwards (see
[JavaMavenProject](#javamavenproject)).

**Adding projen to a repo that already has content.** `projen new` runs
`git init` and commits the scaffold by default. In a repo with existing work,
pass `--no-git` so it writes the files and leaves committing to you:

```bash
cd existing-repo
npx projen new --from @xpertss/projen-types java_spring_boot --name obeya --group-id org.xpertss.obeya --artifact-id obeya-parent --no-git
```

**Commit a lockfile.** The generated `build.yml` and drift check install the
toolchain with `npm ci`, which needs a committed `package-lock.json`, and
`projen new` doesn't always leave one behind. Run `npm install` once and
commit `package-lock.json` along with the scaffold. Without it those
workflows fail with an `::error::` that says exactly this. For the Java
types, `package.json` is generated, and it pins `projen` and
`@xpertss/projen-types` to **exact** versions (no `^`), so every machine and
CI run uses the same generator. A floating range would make the drift check
report the differences between generator versions as drift.

Commit the result. From then on, every change to the scaffold goes through
`.projenrc.ts` followed by `npx projen`:

```bash
npx projen
```

Every type scaffolds from that one command; no option is *required* that
`projen new` cannot pass. The structured options - `environments` and
`GitHubActionProject`'s `dogfood` - are ones projen's CLI cannot render
into a projenrc, so they are added afterwards by editing `.projenrc.ts` and
re-running `npx projen`. Leaving `environments` out simply generates no
deploy workflow; leaving `dogfood` out (or a service's
`cdkDeployTargetRepo`) still generates the workflow, with one step that
fails and tells you what to add - a gate this package considers load-bearing
is allowed to be missing loudly, never silently.

The `name` option must match the `name` field in the project's `package.json` (for the CDK types). For the Java types it becomes the root pom's `<name>` and the generated `package.json` name.

> **Never write projen's generated-file marker text literally in `.projenrc.ts`.** projen deletes, as an orphaned generated file, any file containing the marker line (`~~ Generated by projen. To modify, ...`), and that includes `.projenrc.ts` itself. When you generate a file yourself (for example with `TextFile`), insert the marker through the file's `marker` property: ``file.addLine(`# ${file.marker}`)``.

## Starting from an existing `.projenrc.ts`

A directory that has a `.projenrc.ts` but no `.projen/` directory has never
been synthesized. This happens when you copy the rc from another repo, or paste
one of the [examples](#examples) into a fresh repo. In that state `npx projen`
fails with:

```
👾 Unable to find projen project. Use "projen new" to create a new project.
```

`npx projen` doesn't run `.projenrc.ts` itself. It runs the `default` task
listed in `.projen/tasks.json`, and that file is written by the first synth.
Do the first synth one of these two ways. After that, `npx projen` works as
usual.

**Option 1 (recommended): run `projen new` over the existing rc.** `projen
new` leaves an existing `.projenrc.ts` untouched and writes the rest of the
scaffold, `.projen/` included. Pass the type and its required flags as you
would for a new repo. Their values don't have to match your rc, because the
`npx projen` that follows re-synthesizes everything from the rc:

```bash
npx projen new --from @xpertss/projen-types git_hub_action --name pull-request --sonar-host-url https://sonarcloud.io --no-git
npx projen
```

The first command's output reflects only the flags. For example, a
`GitHubActionProject`'s `test-dogfood.yml` is still the failing placeholder.
The second command applies everything in the rc (`dogfood`, `environments`,
modules, and so on).

**Option 2 (Java types and `GitHubActionProject`): run the rc directly,
once.** The CDK types run their rc differently, so for those use option 1.
Install what the rc imports, give
ts-node a placeholder `tsconfig.projen.json` (the synth overwrites it with the
generated one), and run the same command the generated `default` task runs:

```bash
npm i -D projen @xpertss/projen-types constructs
echo '{}' > tsconfig.projen.json
npx -y -p ts-node@10.9.2 -p typescript@6.0.3 ts-node --project tsconfig.projen.json .projenrc.ts
npx projen
```

The `echo` line works in bash and PowerShell. Don't drop `--project`: without
a tsconfig, ts-node fails on Node 22+ with `Unknown file extension ".ts"`.

Either way, commit `.projen/` along with the rest of the scaffold. A fresh
clone then has its `tasks.json`, and `npx projen` works there straight away.

## Updating an existing project when this package changes

Your generated scaffold reflects the *installed* version of `@xpertss/projen-types` - `npx projen` reads your project type from the package in `node_modules`, not from this repository. So when this package ships a change (a bug fix, a new generated file, or altered workflow behavior), an existing project picks it up by bumping the dependency and re-synthesizing. A stale `node_modules` silently regenerates with the old behavior, so the bump is the load-bearing step.

Using the [`auto-commit` action](#githubactionproject) as a running example, say a new release adds the `# Purpose:` workflow header and SonarCloud wording. In the `auto-commit` repo:

```bash
npm view @xpertss/projen-types version        # what's the newest release?
npm i -D @xpertss/projen-types@latest         # bump the installed project type
npx projen                                    # re-synthesize every generated file
git diff                                      # review before committing
```

The diff here is the workflows gaining a `# Purpose:` comment and `sonar.yml` reflecting the SonarCloud wording. Commit the result with a normal `chore:` or `fix:` message - you never hand-edit the generated files themselves.

## Examples

Each example shows the `projen new` command first, then a fuller
`.projenrc.ts`. Run the command first, then replace the generated
`.projenrc.ts` with the example (or merge it in) and run `npx projen`. If you
pasted the example into a fresh repo first instead, see
[Starting from an existing `.projenrc.ts`](#starting-from-an-existing-projenrcts).

### CdkInfraProject

Pure infrastructure stacks with optional ECR/ECS and edge-networking constructs.

Scaffold it with the `cdk_infra` type:

```bash
npx projen new --from @xpertss/projen-types cdk_infra --name media-edge-infra
```

```typescript
// .projenrc.ts
import { CdkInfraProject } from '@xpertss/projen-types';

const project = new CdkInfraProject({
  name: 'media-edge-infra',
  environments: [
    'dev',
    { name: 'stage', accountId: '111111111111', region: 'eu-central-1' },
    { name: 'prod', accountId: '222222222222', region: 'eu-central-1', requiresApproval: true },
  ],
  edgeResources: ['cloudfront', 'route53', 'sqs'],
  ecrEcs: { enabled: true, externalImageSource: true },
});

project.synth();
```

You get:

- `cdk.json`, `cdk synth` / `cdk diff` / `cdk deploy` tasks, and the standard `AwsCdkTypeScriptApp` layout (CDK 2.189.1 by default).
- `.github/workflows/build.yml` - PR build that hard-fails on projen drift.
- `.github/workflows/deploy.yml` - manual dispatch with one `deploy-<env>` job per environment (runs `cdk deploy --all` with `--context environment=<env>`); `requiresApproval` environments get a GitHub Environment approval gate.
- `src/constructs/edge-networking.ts` - helper constructs only for the requested `edgeResources` (`cloudfront`, `route53`, `apigateway`, `cognito`, `sqs`).
- `src/constructs/ecr-ecs.ts` when `ecrEcs.enabled` - ECR repo + Fargate service; `externalImageSource: true` (default) means the service pulls an image built outside this repo.

### CdkAppProject

`CdkInfraProject` plus application source, a database construct, and an app-level build workflow.

Scaffold it with the `cdk_app` type:

```bash
npx projen new --from @xpertss/projen-types cdk_app --name video-api
```

```typescript
// .projenrc.ts
import { CdkAppProject } from '@xpertss/projen-types';

const project = new CdkAppProject({
  name: 'video-api',
  environments: ['dev', 'prod'],
  edgeResources: ['apigateway'],
  database: { engine: 'postgres', migrationTool: 'flyway' },
  appEntryPoint: 'src/app.ts',
});

project.synth();
```

Everything from `CdkInfraProject`, plus:

- `src/app.ts` - application entrypoint stub (`export function handler()`).
- `src/handlers/example.ts` - API Gateway proxy handler stub, with `@types/aws-lambda` added as a dev dependency.
- `src/constructs/database.ts` - a `Database` construct stub for the chosen engine (`postgres`/`mysql` -> RDS, `dynamodb` -> DynamoDB). `migrationTool` (no default, intentionally) is added as a dev dependency and referenced in the stub - wiring it up is left to you.
- `.github/workflows/app-build.yml` - runs the project's test task on every PR, then checks for projen drift.

### JavaMavenProject

A plain Maven build with no framework and no publish target. It's the base of every other Java type, and it's usable on its own. It's single-module until you add a module, then it's a multi-module reactor.

Scaffold it with the `java_maven` type:

```bash
npx projen new --from @xpertss/projen-types java_maven --name legacy-tools --group-id org.xpertss --artifact-id legacy-tools --java-version 1.8
```

**Single module:**

```typescript
// .projenrc.ts
import { JavaMavenProject } from '@xpertss/projen-types';

const project = new JavaMavenProject({
  name: 'legacy-tools',
  groupId: 'org.xpertss',
  artifactId: 'legacy-tools',
  javaVersion: '1.8',
});

project.addDependency('commons-io/commons-io@2.20.0');    // exact version
project.addTestDependency('org.assertj/assertj-core@3.27.3');

project.synth();
```

**Multi-module:** each `addModule()` call adds a module directory with its own generated `pom.xml`. The root pom becomes the `pom`-packaged reactor parent. Everything stays one projen project, with one `.projen/`, one `.gitignore` and one `tasks.json`.

```typescript
// .projenrc.ts
import { JavaMavenProject } from '@xpertss/projen-types';

const project = new JavaMavenProject({
  name: 'toolkit',
  groupId: 'org.xpertss.toolkit',
  artifactId: 'toolkit-parent',
  version: '0.1.0-SNAPSHOT',
  javaVersion: '17',
});

const model = project.addModule({ dir: 'toolkit-model', artifactId: 'toolkit-model', description: 'Domain model' });
const stub = project.addModule({ dir: 'tools/stub-model', artifactId: 'toolkit-stub-model' }); // nested dirs are fine
const cli = project.addModule({ dir: 'toolkit-cli', artifactId: 'toolkit-cli' });

stub.addModuleDependency(model);                     // sibling module: versionless
cli.addModuleDependency(model);
cli.addDependency('info.picocli/picocli@4.7.7');     // pinned: the version moves to the parent
cli.addDependency('org.yaml/snakeyaml');             // versionless: managed below
project.addManagedDependency('org.yaml/snakeyaml@2.4');
project.addBom('org.testcontainers/testcontainers-bom@1.21.3');

project.synth();
```

What the reactor looks like:

- **Root `pom.xml`:**
  - `<packaging>pom</packaging>`, with `<modules>` in `addModule` order.
  - `<dependencyManagement>` holds the BOM imports first (`type=pom`, `scope=import`), then every module at `${project.version}`, then every pinned version.
  - `<pluginManagement>` holds the plugin versions, and versionless `<plugins>` are inherited by every module: compiler, surefire, failsafe, jar, and enforcer.
  - `junit-jupiter` is a test dependency every module inherits. Its version comes from `junit-bom`, or from the Spring Boot BOM in the Spring Boot types.
- **Module `pom.xml`:** `<parent>` with the right `relativePath` (`tools/stub-model` → `../../pom.xml`), then `artifactId`, `name`, `description`, and versionless `<dependencies>`. Nothing else, unless the module adds plugins.
- A version given to `module.addDependency`/`addTestDependency`/`addPlugin` is moved into the parent's `<dependencyManagement>`/`<pluginManagement>`, so every module that uses an artifact gets the same version. Pinning one artifact at two different versions fails the synth.
- The synth fails with a clear message on:
  - two modules with the same `artifactId`
  - two modules with the same `dir`, or one `dir` nested inside another
  - a `dir` outside the repo
  - a module depending on itself
  - `packaging` set to anything but `pom` on a project with modules

You get:

- the root `pom.xml` (and one per module), written by this package:
  - **exact versions only**: a range such as `^1`, `~1.2` or `[1,2)` fails the synth
  - the compiler level, enforcer rule and JUnit line all follow `javaVersion`
- one Maven run per build. `npx projen build` synthesizes, then runs `mvn -B verify`: compile, unit tests (surefire), package, and `*IT` integration tests (failsafe). There is no `mvn deploy` and no `dist/`.
- `.github/workflows/build.yml`: a PR build that installs the pinned Node toolchain (`npm ci`) and the project's JDK (`actions/setup-java`, Maven cache), then runs `npx projen build`, plus a SonarQube step when `sonarProjectKey` is set. See [Adding CI jobs](#adding-ci-jobs-to-a-java-project).
- `.github/workflows/upgrade.yml`: a nightly (03:00 UTC) **report** of available dependency and plugin updates in the job summary. It changes nothing, because every version comes from `.projenrc.ts`; apply an update there. Turn it off with `upgradeWorkflow: false`. The same report runs locally with `npx projen upgrade`.
- the projen drift check, `LICENSE` (MIT by default), `.editorconfig`, and a generated `package.json` that pins the projen toolchain exactly.
- no sample code, unless `sample: true` on a single-module project.

### JavaLibraryProject

A reusable Java library published to Maven Central.

Scaffold it with the `java_library` type:

```bash
npx projen new --from @xpertss/projen-types java_library --name common-utils --group-id org.xpertss --artifact-id common-utils
```

```typescript
// .projenrc.ts
import { JavaLibraryProject } from '@xpertss/projen-types';

const project = new JavaLibraryProject({
  name: 'common-utils',
  groupId: 'org.xpertss',
  artifactId: 'common-utils',
  version: '1.0.0',
  sonarProjectKey: 'org.xpertss:common-utils',
  mavenCentralOidc: true,
});

project.synth();
```

You get everything from [`JavaMavenProject`](#javamavenproject), so modules work here too, plus:

- `maven-source-plugin` and `maven-javadoc-plugin`, attaching the `-sources`/`-javadoc` jars Maven Central requires. In a multi-module library every module attaches them.
- `.github/workflows/publish-maven-central.yml` - manual dispatch running `mvn -B deploy -P release`. With `mavenCentralOidc: true` it uses Maven Central's OIDC trusted publishing (no GPG secrets needed); otherwise it expects the secrets `MAVEN_GPG_PRIVATE_KEY`, `MAVEN_GPG_PASSPHRASE`, `MAVEN_CENTRAL_USERNAME`, `MAVEN_CENTRAL_PASSWORD`.
- `.github/workflows/codeindex.yml` - on push to `main`, generates a Java source index under `.cai/` covering every module (disable with `publishCodeIndex: false`).

### JavaSpringBootProject

Spring Boot on Maven, single- or multi-module, **without** Docker, Flyway or a deploy hook. It's [`JavaMavenProject`](#javamavenproject) plus Spring Boot dependency management. Use it for a Spring Boot repo that ships something other than this package's container image, such as a multi-module control plane, or for a Boot app you deploy your own way.

Scaffold it with the `java_spring_boot` type:

```bash
npx projen new --from @xpertss/projen-types java_spring_boot --name obeya --group-id org.xpertss.obeya --artifact-id obeya-parent
```

```typescript
// .projenrc.ts
import { JavaSpringBootProject } from '@xpertss/projen-types';

const project = new JavaSpringBootProject({
  name: 'obeya',
  groupId: 'org.xpertss.obeya',
  artifactId: 'obeya-parent',
  version: '0.1.0-SNAPSHOT',
  javaVersion: '21',
  copyrightOwner: 'Xpert Software',
});

// plain jar modules: shared libraries, clients, tools
const model = project.addModule({ dir: 'obeya-model', artifactId: 'obeya-model' });
const client = project.addModule({ dir: 'obeya-api-client', artifactId: 'obeya-api-client' });
client.addModuleDependency(model);

// a Spring Boot application module, repackaged into an executable jar
const server = project.addSpringBootModule({ dir: 'obeya-server', artifactId: 'obeya-server' });
server.addModuleDependency(model);
server.addDependency('org.springframework.boot/spring-boot-starter-web');      // versionless: Boot's BOM manages it
server.addTestDependency('org.springframework.boot/spring-boot-starter-test');

project.addBom('org.testcontainers/testcontainers-bom@1.21.3');

project.synth();
```

You get everything from [`JavaMavenProject`](#javamavenproject), plus:

- `spring-boot-dependencies` imported as the **first** BOM, so starters and every library Boot manages (JUnit included) are added without a version. `springBootVersion` sets it; the default is the newest release of the line that supports `javaVersion` (see [Java version support](#java-version-support)).
- `spring-boot-maven-plugin`, versioned in `<pluginManagement>`:
  - In a **single-module** project the root jar is repackaged into an executable jar.
  - In a **multi-module** project only modules added with `addSpringBootModule()` are repackaged; `addModule()` modules stay plain jars.
  - A repackaged module needs its `@SpringBootApplication` class before `mvn verify` passes, because `repackage` fails with `Unable to find main class` until one exists. Add a module as a plain `addModule()` while it's still empty.
- failsafe configured to run integration tests against the compiled classes rather than the repackaged jar (as `spring-boot-starter-parent` does).
- no starters, no Docker, no Flyway, no CDK. Add the starters you need with `addDependency`.

### JavaServiceProject

A Spring Boot service that publishes a Docker image and can trigger deploys in a companion CDK repo. It is [`JavaSpringBootProject`](#javaspringbootproject) plus Docker, Flyway and a deploy hook. It is **single-module**, because the Docker build, the migrations and the deploy hook all assume one deployable at the repo root; `addModule()` fails and points you to `JavaSpringBootProject`.

Scaffold it with the `java_service` type:

```bash
npx projen new --from @xpertss/projen-types java_service --name stream-processor --group-id org.xpertss --artifact-id stream-processor
```

```typescript
// .projenrc.ts
import { JavaServiceProject } from '@xpertss/projen-types';

const project = new JavaServiceProject({
  name: 'stream-processor',
  groupId: 'org.xpertss',
  artifactId: 'stream-processor',
  dockerRegistry: 'docker.io/xpertss',
  cdkDeployTargetRepo: 'xpertss/stream-infra',
  environments: ['dev', { name: 'prod', requiresApproval: true }],
});

project.synth();
```

You get everything from [`JavaSpringBootProject`](#javaspringbootproject) (and so from `JavaMavenProject`), plus:

- `spring-boot-starter-web` added to the pom (versionless; Boot's BOM manages it).
- `.github/workflows/publish-docker.yml` - manual dispatch: `mvn -B package && docker build -t <registry>/<name>:<sha>`, logged in with the `DOCKER_USERNAME` / `DOCKER_PASSWORD` secrets. `dockerRegistry` defaults to `docker.io`.
- Flyway wiring when `useFlyway` (default `true`): `flyway-core` (versionless, so it matches what Boot's Flyway auto-configuration expects), `flyway-maven-plugin` pinned for the Java line, and `src/main/resources/db/migration/V1__init.sql`.
- `.github/workflows/deploy-cdk.yml` (the `CdkDeployHook`, generated by default) - manual dispatch with an environment selector; each job sends a `workflow_dispatch` to `deploy.yml` in the companion `cdkDeployTargetRepo` (a `CdkInfraProject`/`CdkAppProject` repo). With no `cdkDeployTargetRepo` set, the workflow is still generated but each job's only step fails with instructions - it is dispatch-only, so that lands on whoever tries to deploy rather than on every PR. Turn the workflow off entirely with `cdkDeployHook: false`. `environments` defaults to `['prod']`.

### JavaAppProject

A GUI/TUI/CLI Java application published to GitHub Packages only - no Maven Central, no Docker, no CDK deploy hook.

Scaffold it with the `java_app` type:

```bash
npx projen new --from @xpertss/projen-types java_app --name studio-cli --group-id org.xpertss --artifact-id studio-cli
```

```typescript
// .projenrc.ts
import { JavaAppProject } from '@xpertss/projen-types';

const project = new JavaAppProject({
  name: 'studio-cli',
  groupId: 'org.xpertss',
  artifactId: 'studio-cli',
  ghPackagesRegistry: 'https://maven.pkg.github.com/xpertss/studio-cli',
});

project.synth();
```

You get everything from [`JavaMavenProject`](#javamavenproject) (modules included), plus `.github/workflows/publish-ghpackages.yml` - manual dispatch running `mvn -B deploy -DaltDeploymentRepository=github::<registry>`, authenticated with `GITHUB_TOKEN`. `ghPackagesRegistry` defaults to `https://maven.pkg.github.com/<repo>` derived from the repository URL.

### GitHubActionProject

A reusable GitHub Action or Workflow. This example scaffolds an action that stages a folder and, only if it changed, commits and pushes it.

Scaffold it with the `git_hub_action` type:

```bash
npx projen new --from @xpertss/projen-types git_hub_action --name auto-commit --sonar-host-url https://sonarcloud.io
```

```typescript
// .projenrc.ts
import { GitHubActionProject } from '@xpertss/projen-types';

const project = new GitHubActionProject({
  name: 'auto-commit',
  description: 'Stage a folder and, only if it changed, commit and push it',
  sonarHostUrl: 'https://sonarcloud.io',       // required, no default - your SonarCloud URL
  dogfood: {
    // Two scenario steps: the "changed" path and the "no-op" path are both
    // load-bearing behavior for this action (a double-commit or a
    // push-when-empty bug is the failure mode a hand-rolled inline-shell
    // alternative is most likely to introduce).
    scenario: [
      {
        name: 'Changed path',
        fixtureSteps: [
          'echo "$(date -u +%Y%m%dT%H%M%SZ)" >> test/fixtures/dogfood-state.txt',
        ],
        inputs: {
          commit_message: 'test: dogfood',
          branches: 'test/dogfood',
        },
        assertions: [
          // step id defaults to a slug of `name` - here "changed-path-0"
          '[ "${{ steps.changed-path-0.outputs.committed }}" = "true" ]',
        ],
      },
      {
        // No fixture change this time - nothing new to commit.
        name: 'No-op path',
        id: 'no-op-check',            // pin an explicit id instead of relying on the default slug
        inputs: {
          commit_message: 'test: dogfood',
          branches: 'test/dogfood',
        },
        assertions: [
          '[ "${{ steps.no-op-check.outputs.committed }}" = "false" ]',
        ],
      },
    ],
    cleanup: [
      'git push origin --delete test/dogfood || true',
    ],
  },
});

project.synth();
```

You get:

- `action.yml` and `auto-commit.sh` are hand-written - this type only lints their content via `build.yml`'s shellcheck/yamllint/actionlint checks.
- `.github/workflows/build.yml` - lint gate: `apt`-installed shellcheck/yamllint plus a pinned, SHA-256-verified `actionlint` release binary. Gates `main` alongside `sonar.yml`.
- `.github/workflows/test-dogfood.yml` - runs the `dogfood.scenario` steps above against this repo's own `action.yml` (via `uses: ./`), then the shared `cleanup`, on `workflow_dispatch`, every `pull_request`, and nightly. Omit `dogfood` and the workflow still exists, with one step that fails on every PR until you declare a scenario - AD-001 allows a dogfood to be missing loudly, never silently. A *partial* `dogfood` (a scenario with no cleanup) is a synth error.
- `.github/workflows/sonar.yml` - SonarCloud scan via the Scanner CLI (the quality gate blocks the PR), scanning `action.yml`/`.github/workflows/**`/`**/*.sh` explicitly.
- `.github/workflows/release.yml` - `feat:`/`fix:` commits on `main` bump the version, tag `vX.Y.Z`, and create a GitHub Release.
- `.github/workflows/projen-drift-check.yml` and `workflow-change-notice.yml` - drift detection and a change notice, always included.
- `package.json` (**private**, version source only), `.yamllint`, `LICENSE` (MIT by default), and a `README.md` template - all regenerated by `npx projen`.

Needs the same two secrets as everything else in this package: `PROJEN_GITHUB_TOKEN` (used for automated PR comments) and `SONAR_TOKEN` (the Sonar scan). Onboard a brand-new action repo by running the `projen new` command above first (see [Getting started](#getting-started)), then replace the generated `.projenrc.ts` with the one above and run `npx projen`, then hand-write `action.yml`/`auto-commit.sh`/`test/fixtures/`. If you wrote the `.projenrc.ts` before running `projen new`, see [Starting from an existing `.projenrc.ts`](#starting-from-an-existing-projenrcts).

## Java version support

`javaVersion` picks the Java line a Java project targets. It defaults to `21`; the supported lines are `1.8` (alias `8`), `17`, `21` and `25`, and any other value fails the synth with that list. **Nothing in the generated build is hard-coded to one Java line.** Everything that depends on it comes from one table in this package, grouped by line:

| | `1.8` | `17` | `21` | `25` |
| --- | --- | --- | --- | --- |
| Compiler level | `maven.compiler.source`/`target` = `1.8` (javac 8 has no `--release`) | `maven.compiler.release` = `17` | `release` = `21` | `release` = `25` |
| Enforcer `requireJavaVersion` | `[1.8,)` | `[17,)` | `[21,)` | `[25,)` |
| JUnit (`junit-bom`) | 5.14.4 (JUnit 6 needs Java 17) | 6.1.3 | 6.1.3 | 6.1.3 |
| Default Spring Boot (`JavaSpringBootProject`) | 2.7.18 (Boot 3+ needs Java 17; a 3.x+ `springBootVersion` fails the synth) | 4.1.1 | 4.1.1 | 4.1.1 |
| `flyway-maven-plugin` (`JavaServiceProject`) | 9.22.3 | 13.9.0 | 13.9.0 | 13.9.0 |
| CI JDK (`actions/setup-java` `java-version`) | `8` | `17` | `21` | `25` |

Maven plugins (the same on every line, because all of them run on JDK 8): `maven-compiler-plugin` 3.16.0, `maven-surefire-plugin`/`maven-failsafe-plugin` 3.6.0, `maven-jar-plugin` 3.5.1, `maven-enforcer-plugin` 3.6.3, `maven-source-plugin` 3.4.0 and `maven-javadoc-plugin` 3.12.0 (library only), `versions-maven-plugin` 2.22.0 (the `upgrade` report).

**The enforcer.** `maven-enforcer-plugin` fails the build at the start when the JDK or Maven running it is older than the project needs. Without it you get confusing compiler errors later, or a jar built for the wrong runtime. Its Java rule always follows `javaVersion`. The Maven rule defaults to `[3.9,)`; change it with `minMavenVersion`, or drop the plugin entirely with `enforcer: false`. CI installs the matching JDK through `setup-java`, so the rule only fires on a developer machine with the wrong JDK. A Java 1.8 project builds on any newer JDK (the rule is a minimum), but the JDK 8 runtime API is guaranteed only when you build on JDK 8.

**Overriding a version.** `pluginVersions` replaces any default in the table, keyed by `groupId/artifactId`, with an exact version:

```typescript
new JavaMavenProject({
  name: 'svc',
  groupId: 'org.xpertss',
  artifactId: 'svc',
  pluginVersions: {
    'org.apache.maven.plugins/maven-surefire-plugin': '3.5.6',
    'org.junit/junit-bom': '5.14.4',
  },
});
```

`project.pinnedVersion('org.apache.maven.plugins/maven-surefire-plugin')` returns the version in effect, for reuse in your own plugin config.

**New Java lines** are one new row in this package's version table and a release. Until a line is listed, `javaVersion` rejects it rather than guessing.

## Adding CI jobs to a Java project

`build.yml` is exposed as `project.buildVerifyWorkflow`, so jobs are added through projen's `addJob` rather than `addOverride`. `project.ciSetupSteps` holds the steps every Maven job here needs: pinned Node, `npm ci`, and the project's JDK with a Maven cache. Every job in `build.yml` can then be made a required check on `main`.

```typescript
import { github } from 'projen';

project.buildVerifyWorkflow.addJob('integration', {
  name: 'Container integration tests',
  runsOn: ['self-hosted', 'linux', 'fedora', 'podman'],
  permissions: { contents: github.workflows.JobPermission.READ },
  steps: [
    { name: 'Checkout', uses: 'actions/checkout@v7' },
    ...project.ciSetupSteps,
    { name: 'Integration tests', run: 'mvn -B verify -Pcontainer-its' },
  ],
});
```

## Common options

CDK project types (`CdkInfraProjectOptions` / `CdkAppProjectOptions`):

| Option | Default | Description |
| --- | --- | --- |
| `name` | - (required) | Project name; must match `package.json` |
| `cdkVersion` | `2.189.1` | AWS CDK version |
| `gheTokenSecret` | `PROJEN_GITHUB_TOKEN` | GitHub secret holding projen's PAT |
| `environments` | - (no `deploy` workflow) | Deploy targets for the `deploy` workflow; strings or `EnvironmentOptions` |
| `ecrEcs` | - | `EcrEcsOptions` - `enabled`, `externalImageSource` (default `true`) |
| `edgeResources` | - | Subset of `cloudfront`, `route53`, `apigateway`, `cognito`, `sqs` |
| `database` | - (app only) | `DatabaseOptions` - `engine` (`postgres`/`mysql`/`dynamodb`, default `postgres`), `migrationTool` |
| `appEntryPoint` | `src/app.ts` (app only) | Path of the generated application entrypoint |

Java project types (`JavaMavenProjectOptions` and everything built on it - `JavaLibraryProjectOptions`, `JavaAppProjectOptions`, `JavaSpringBootProjectOptions`, `JavaServiceProjectOptions`):

| Option | Default | Description |
| --- | --- | --- |
| `name` | - (required) | Project name |
| `groupId` | - (required) | Maven group id |
| `artifactId` | - (required) | Maven artifact id (of the reactor parent, in a multi-module project) |
| `version` | `0.1.0` | Maven version; must be exact |
| `description` / `url` | - | Written to the root pom |
| `javaVersion` | `21` | Java line: `1.8`, `17`, `21`, `25` - see [Java version support](#java-version-support) |
| `javaDistribution` | `temurin` | `actions/setup-java` distribution for CI |
| `packaging` | `jar` | Root packaging while the project has no modules; a project with modules is always `pom` |
| `sample` | `false` | Starter `Main` + test under the `groupId` package (single-module only) |
| `enforcer` | `true` | `maven-enforcer-plugin` with Maven and Java version rules |
| `minMavenVersion` | `3.9` | The enforcer's `requireMavenVersion` minimum |
| `pluginVersions` | - | Exact-version overrides for this package's defaults, keyed by `groupId/artifactId` |
| `licensed` | `true` | Write a `LICENSE` |
| `license` | `MIT` | SPDX identifier for the `LICENSE` |
| `copyrightOwner` / `copyrightPeriod` | `xpertss` / current year | Named in the `LICENSE` |
| `editorconfig` | `true` | Write a projen-managed `.editorconfig` (also on the CDK and action types) |
| `upgradeWorkflow` | `true` | Generate the nightly update report (`upgrade.yml`) |
| `sonarProjectKey` | - | SonarQube project key; the sonar step is skipped when unset |
| `gheTokenSecret` | `PROJEN_GITHUB_TOKEN` | GitHub secret holding projen's PAT |
| `springBootVersion` | newest Boot for `javaVersion` (Spring Boot types only) | Exact Spring Boot version: the BOM and `spring-boot-maven-plugin` |
| `cdkDeployTargetRepo` | - (service only; `deploy-cdk.yml` fails until set) | Companion CDK repo (`owner/repo`) whose `deploy.yml` the deploy hook dispatches |
| `cdkDeployHook` | `true` (service only) | Whether to generate `deploy-cdk.yml` at all |
| `dockerRegistry` | `docker.io` (service only) | Registry the Docker image is pushed to |
| `useFlyway` | `true` (service only) | Flyway plugin/dependency + `V1__init.sql` |

With the default MIT license, the generated `LICENSE` looks like:

```
MIT License

Copyright (c) 2024-2026 Xpert Software

Permission is hereby granted, ...
```

The header line (`MIT License`) is specific to the license type — an `Apache-2.0` project would instead show `Apache-2.0`.

Override the license type and copyright fields:

```typescript
new JavaMavenProject({
  name: 'my-lib',
  groupId: 'org.xpertss',
  artifactId: 'my-lib',
  license: 'Apache-2.0',            // any SPDX id projen ships a template for
  copyrightOwner: 'Xpert Software',
  copyrightPeriod: '2024-2026',
});
```

`EnvironmentOptions` for deploy targets:

```text
interface EnvironmentOptions {
  readonly name: string;              // e.g. "dev", "stage", "prod"
  readonly accountId?: string;        // AWS account id (CDK deploys)
  readonly region?: string;           // AWS region (CDK deploys)
  readonly requiresApproval?: boolean; // GitHub Environment approval gate (default false)
}
```

Plain strings (`'dev'`) are shorthand for `{ name: 'dev' }`.

`GitHubActionProjectOptions`:

| Option | Default | Description |
| --- | --- | --- |
| `name` | - (required) | Project name |
| `description` | - | One-line description; used in the default README template and recorded in the private `package.json` |
| `sonarHostUrl` | - (required) | URL of your SonarCloud instance (e.g. `https://sonarcloud.io`); must be reachable from github.com-hosted runners |
| `sonarTokenSecret` | `SONAR_TOKEN` | GitHub secret holding the Sonar token |
| `sonarPullRequestGate` | `true` | Whether `sonar.yml` also runs on `pull_request` as a pass/fail gate |
| `dogfood` | - (a `test-dogfood.yml` that fails until you declare one) | `ActionDogfoodOptions` - the scenario that exercises the action end-to-end via `uses: ./` |
| `license` | `MIT` | SPDX identifier for the generated `LICENSE` |
| `gheTokenSecret` | `PROJEN_GITHUB_TOKEN` | GitHub secret holding projen's PAT |

`ActionDogfoodOptions`/`ActionDogfoodStep` - the dogfood scenario (`test-dogfood.yml`):

```text
interface ActionDogfoodOptions {
  readonly scenario: ActionDogfoodStep[]; // one or more, run in order - required
  readonly cleanup: string[];             // shared, run once at the end with `if: always()` - required
}

interface ActionDogfoodStep {
  readonly name: string;                    // labels this step-group's generated workflow steps
  readonly id?: string;                     // step id for the `uses: ./` call; default: a slug of `name`
  readonly fixtureSteps?: string[];         // shell, before the invocation (default: none)
  readonly inputs?: Record<string, string>; // `with:` for this invocation (default: none)
  readonly assertions: string[];            // shell, after the invocation - required, job fails unless all exit 0
}
```

Most actions need exactly one `scenario` step. Actions with a re-run/no-op/idempotency behavior to verify (e.g. `auto-commit`'s no-op-on-no-change path, `create-pull-request`'s reuse-the-PR path) declare two - the second typically omits `fixtureSteps` so its invocation sees no new state, and its assertion checks the opposite outcome of the first. Reference an invocation's own outputs from a later assertion via `${{ steps.<id>.outputs.<name> }}`, using either the default slug or an explicit `id`.

## Required GitHub secrets

| Secret | Used by | Notes |
| --- | --- | --- |
| `PROJEN_GITHUB_TOKEN` | all types | PAT for projen's self-mutation/automation; override via `gheTokenSecret` |
| `SONAR_TOKEN` | Java types with `sonarProjectKey`; `GitHubActionProject` | SonarQube scan step in `build.yml` / `sonar.yml`; override via `sonarTokenSecret` on `GitHubActionProject` |
| `DOCKER_USERNAME` / `DOCKER_PASSWORD` | `JavaServiceProject` | Docker image push |
| `MAVEN_GPG_PRIVATE_KEY`, `MAVEN_GPG_PASSPHRASE`, `MAVEN_CENTRAL_USERNAME`, `MAVEN_CENTRAL_PASSWORD` | `JavaLibraryProject` without `mavenCentralOidc` | Not needed with OIDC trusted publishing |

## Customizing `.gitignore`

Every project type already ignores JetBrains IDE state (`/.idea/*`) and the `/spec/` directory with all of its subdirectories (local plans and specs, never committed). The Java types also ignore Maven `target/` output and Eclipse files. To ignore more, call the inherited `addGitIgnore()` method after constructing the project in your `.projenrc.ts`:

```typescript
// .projenrc.ts
import { CdkInfraProject } from '@xpertss/projen-types';

const project = new CdkInfraProject({
  name: 'my-infra',
});

project.addGitIgnore('*.log');
project.addGitIgnore('.env.*');
project.addGitIgnore('/build/');

project.synth();
```

The same works for every type - just swap the class (e.g. `JavaServiceProject`, `GitHubActionProject`). Each call takes one standard gitignore glob pattern. There is no `gitignore` constructor option: the project types' option interfaces do not expose one, so patterns go through `addGitIgnore()` instead.

Re-run `npx projen` after editing - `.gitignore` is a generated file, so hand-editing it is caught by the drift check.

## Troubleshooting

**`Unable to find projen project. Use "projen new" to create a new project.`**
If the directory already has a `.projenrc.ts`, this error means the rc has
never been synthesized (there's no `.projen/tasks.json`), not that you need a
new project. See [Starting from an existing `.projenrc.ts`](#starting-from-an-existing-projenrcts).

## Going further

The project types are composed from smaller components you can also attach to your own projects:

| Component | Applies to | Purpose |
| --- | --- | --- |
| `AppRuntimeScaffold` | `NodeProject` | App source skeleton (`app.ts` + handlers) |
| `DatabaseComponent` | `NodeProject` | Database construct stub + migration tool wiring |
| `EcrEcsConstructs` | `Project` | ECR + Fargate ECS construct helper |
| `EdgeNetworkingConstructs` | `Project` | Per-resource edge networking construct helpers |
| `MavenPom` | `Project` | A `pom.xml` with modules, BOM imports, dependency/plugin management, and exact versions only |
| `MavenModule` | `JavaMavenProject` | One module of a reactor (created by `addModule()`) |
| `MavenUpgradeReport` | `GitHubProject` | Nightly report-only `upgrade.yml` |
| `MavenCentralPublish` | `JavaMavenProject` | Manual-dispatch Maven Central publish workflow |
| `DockerPublish` | `JavaMavenProject` | Manual-dispatch Docker build+push workflow |
| `GitHubPackagesPublish` | `JavaMavenProject` | Manual-dispatch GitHub Packages publish workflow |
| `FlywayMigration` | `JavaSpringBootProject` | Flyway plugin/dependency + migrations directory |
| `CdkDeployHook` | `JavaMavenProject` | Manual-dispatch workflow that triggers `deploy.yml` in a companion CDK repo |
| `CodeIndexWorkflow` | `JavaMavenProject` | Code index generation on push to `main` |
| `ActionBuildWorkflow` | `GitHubProject` | The `lint` task (shellcheck/yamllint/pinned actionlint) + `build.yml` |
| `ActionDogfoodWorkflow` | `GitHubProject` | `test-dogfood.yml` from an `ActionDogfoodOptions` scenario |
| `ActionSonarWorkflow` | `GitHubProject` | `sonar.yml` (SonarCloud scan via the Scanner CLI) |

Example - adding a Docker publish to a `JavaMavenProject` (`JavaServiceProject` is the packaged version of this, with Spring Boot):

```typescript
import { DockerPublish, JavaMavenProject } from '@xpertss/projen-types';

const project = new JavaMavenProject({
  name: 'my-service',
  groupId: 'org.xpertss',
  artifactId: 'my-service',
});

new DockerPublish(project, { dockerRegistry: 'ghcr.io' });

project.synth();
```

The full API reference, including every option and property, is in [API.md](./API.md).
