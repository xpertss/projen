# @xpertss/projen-types

Projen project types for CDK/TypeScript and Java/Maven projects.

Instead of hand-maintaining `pom.xml`, `cdk.json`, and GitHub workflows, you declare a project type in a `.projenrc.ts` file and let [projen](https://github.com/projen/projen) generate (and keep up to date) the whole scaffold: build files, source skeletons, CI workflows, and deploy pipelines.

## Project types at a glance

| Type | What it is | Publishes to | Generated workflows |
| --- | --- | --- | --- |
| `CdkInfraProject` | Pure-infrastructure CDK stacks (CloudFront, Route53, SQS, API Gateway, Cognito, ECR/ECS for externally-built images) | - | `build` (PR checks), `deploy` (manual dispatch) |
| `CdkAppProject` | Full TypeScript service behind API Gateway: infra + app source + database | - | `build`, `deploy`, `app-build` (PR checks) |
| `JavaLibraryProject` | Reusable Java library | Maven Central | `build`, `upgrade` (nightly), `publish-maven-central`, `codeindex` |
| `JavaServiceProject` | Spring Boot service | Docker Hub | `build`, `upgrade` (nightly), `publish-docker`, `deploy-cdk` |
| `JavaAppProject` | GUI/TUI/CLI Java application | GitHub Packages | `build`, `upgrade` (nightly), `publish-ghpackages` |

Two foundation classes are also exported for advanced use: `CdkTypescriptProject` (shared CDK + TypeScript base for the CDK types) and `JavaMavenProject` (shared Maven base for the Java types).

All project types:

- run a **drift check** in PR builds - a job that re-runs projen and fails if generated files were hand-edited. Edit `.projenrc.ts`, then run `npx projen`; never edit generated files directly.
- use the GitHub secret `PROJEN_GITHUB_TOKEN` (a fine-grained PAT) for projen's automation. Override with `gheTokenSecret`.
- make all publishing/deploying **manual** (workflow_dispatch) rather than on every merge.

## Getting started

Create a new git repository and install the dependencies:

```bash
mkdir my-project && cd my-project
git init
npm install -D projen constructs @xpertss/projen-types
```

Write a `.projenrc.ts` (see examples below), then generate the project:

```bash
npx projen
```

Commit the result. From then on, every change to the scaffold goes through `.projenrc.ts` followed by `npx projen`.

The `name` option must match the `name` field in the project's `package.json` (for the CDK types) or the project name used by projen's `java.JavaProject` (for the Java types).

## Examples

### CdkInfraProject

Pure infrastructure stacks with optional ECR/ECS and edge-networking constructs.

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
  slackWebhookSecret: 'SLACK_DEPLOY_WEBHOOK',
});

project.synth();
```

You get:

- `cdk.json`, `cdk synth` / `cdk diff` / `cdk deploy` tasks, and the standard `AwsCdkTypeScriptApp` layout (CDK 2.189.1 by default).
- `.github/workflows/build.yml` - PR build that hard-fails on projen drift.
- `.github/workflows/deploy.yml` - manual dispatch with one `deploy-<env>` job per environment (runs `cdk deploy --all` with `--context environment=<env>`); `requiresApproval` environments get a GitHub Environment approval gate; a Slack notification step is added when `slackWebhookSecret` is set.
- `src/constructs/edge-networking.ts` - helper constructs only for the requested `edgeResources` (`cloudfront`, `route53`, `apigateway`, `cognito`, `sqs`).
- `src/constructs/ecr-ecs.ts` when `ecrEcs.enabled` - ECR repo + Fargate service; `externalImageSource: true` (default) means the service pulls an image built outside this repo.

### CdkAppProject

`CdkInfraProject` plus application source, a database construct, and an app-level build workflow.

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

### JavaLibraryProject

A reusable Java library published to Maven Central.

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

You get:

- `pom.xml` (via projen's `java.JavaProject`) with the given GAV coordinates.
- `.github/workflows/build.yml` - PR build + projen drift check, plus a SonarQube scan step when `sonarProjectKey` is set (needs a `SONAR_TOKEN` secret).
- `.github/workflows/upgrade.yml` - nightly (03:00 UTC) PR running `mvn versions:use-latest-releases versions:update-properties`.
- `.github/workflows/publish-maven-central.yml` - manual dispatch running `mvn -B deploy -P release`. With `mavenCentralOidc: true` it uses Maven Central's OIDC trusted publishing (no GPG secrets needed); otherwise it expects the secrets `MAVEN_GPG_PRIVATE_KEY`, `MAVEN_GPG_PASSPHRASE`, `MAVEN_CENTRAL_USERNAME`, `MAVEN_CENTRAL_PASSWORD`.
- `.github/workflows/codeindex.yml` - on push to `main`, generates a Java source index under `.cai/` (disable with `publishCodeIndex: false`).

### JavaServiceProject

A Spring Boot service that publishes a Docker image and can trigger deploys in a companion CDK repo.

```typescript
// .projenrc.ts
import { JavaServiceProject } from '@xpertss/projen-types';

const project = new JavaServiceProject({
  name: 'stream-processor',
  groupId: 'org.xpertss',
  artifactId: 'stream-processor',
  dockerRegistry: 'docker.io/xpertss',
  cdkDeployHook: { targetRepo: 'xpertss/stream-infra' },
  environments: ['dev', { name: 'prod', requiresApproval: true }],
});

project.synth();
```

You get (everything from `JavaMavenProject` - `pom.xml`, `build` + drift check, nightly `upgrade` - plus):

- `spring-boot-starter-web` added to the pom.
- `.github/workflows/publish-docker.yml` - manual dispatch: `mvn -B package && docker build -t <registry>/<name>:<sha>`, logged in with the `DOCKER_USERNAME` / `DOCKER_PASSWORD` secrets. `dockerRegistry` defaults to `docker.io`.
- Flyway wiring when `useFlyway` (default `true`): `flyway-maven-plugin` ^10 + `flyway-core` ^10 in the pom, and `src/main/resources/db/migration/V1__init.sql`.
- `.github/workflows/deploy-cdk.yml` (the `CdkDeployHook`, enabled by default) - manual dispatch with an environment selector; each job sends a `workflow_dispatch` to `deploy.yml` in the companion `targetRepo` (a `CdkInfraProject`/`CdkAppProject` repo). `targetRepo` is required when the hook is enabled; disable it with `cdkDeployHook: { enabled: false }`. `environments` defaults to `['prod']`.

### JavaAppProject

A GUI/TUI/CLI Java application published to GitHub Packages only - no Maven Central, no Docker, no CDK deploy hook.

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

You get everything from `JavaMavenProject`, plus `.github/workflows/publish-ghpackages.yml` - manual dispatch running `mvn -B deploy -DaltDeploymentRepository=github::<registry>`, authenticated with `GITHUB_TOKEN`. `ghPackagesRegistry` defaults to `https://maven.pkg.github.com/<repo>` derived from the repository URL.

## Common options

CDK project types (`CdkInfraProjectOptions` / `CdkAppProjectOptions`):

| Option | Default | Description |
| --- | --- | --- |
| `name` | - (required) | Project name; must match `package.json` |
| `cdkVersion` | `2.189.1` | AWS CDK version |
| `gheTokenSecret` | `PROJEN_GITHUB_TOKEN` | GitHub secret holding projen's PAT |
| `slackWebhookSecret` | - | GitHub secret with a Slack webhook URL for deploy notifications |
| `environments` | - (required) | Deploy targets for the `deploy` workflow; strings or `EnvironmentOptions` |
| `ecrEcs` | - | `EcrEcsOptions` - `enabled`, `externalImageSource` (default `true`) |
| `edgeResources` | - | Subset of `cloudfront`, `route53`, `apigateway`, `cognito`, `sqs` |
| `database` | - (app only) | `DatabaseOptions` - `engine` (`postgres`/`mysql`/`dynamodb`, default `postgres`), `migrationTool` |
| `appEntryPoint` | `src/app.ts` (app only) | Path of the generated application entrypoint |

Java project types (`JavaLibraryProjectOptions` / `JavaServiceProjectOptions` / `JavaAppProjectOptions`):

| Option | Default | Description |
| --- | --- | --- |
| `name` | - (required) | Project name |
| `groupId` | - (required) | Maven group id |
| `artifactId` | - (required) | Maven artifact id |
| `version` | `0.1.0` | Maven version |
| `sonarProjectKey` | - | SonarQube project key; the sonar step is skipped when unset |
| `gheTokenSecret` | `PROJEN_GITHUB_TOKEN` | GitHub secret holding projen's PAT |

`EnvironmentOptions` for deploy targets:

```typescript
interface EnvironmentOptions {
  readonly name: string;              // e.g. "dev", "stage", "prod"
  readonly accountId?: string;        // AWS account id (CDK deploys)
  readonly region?: string;           // AWS region (CDK deploys)
  readonly requiresApproval?: boolean; // GitHub Environment approval gate (default false)
}
```

Plain strings (`'dev'`) are shorthand for `{ name: 'dev' }`.

## Required GitHub secrets

| Secret | Used by | Notes |
| --- | --- | --- |
| `PROJEN_GITHUB_TOKEN` | all types | PAT for projen's self-mutation/automation; override via `gheTokenSecret` |
| `SONAR_TOKEN` | Java types with `sonarProjectKey` | SonarQube scan step in `build.yml` |
| `DOCKER_USERNAME` / `DOCKER_PASSWORD` | `JavaServiceProject` | Docker image push |
| `MAVEN_GPG_PRIVATE_KEY`, `MAVEN_GPG_PASSPHRASE`, `MAVEN_CENTRAL_USERNAME`, `MAVEN_CENTRAL_PASSWORD` | `JavaLibraryProject` without `mavenCentralOidc` | Not needed with OIDC trusted publishing |
| (your Slack webhook secret) | CDK types with `slackWebhookSecret` | Deploy notifications |

## Going further

The project types are composed from smaller components you can also attach to your own projects:

| Component | Applies to | Purpose |
| --- | --- | --- |
| `AppRuntimeScaffold` | `NodeProject` | App source skeleton (`app.ts` + handlers) |
| `DatabaseComponent` | `NodeProject` | Database construct stub + migration tool wiring |
| `EcrEcsConstructs` | `Project` | ECR + Fargate ECS construct helper |
| `EdgeNetworkingConstructs` | `Project` | Per-resource edge networking construct helpers |
| `MavenCentralPublish` | `JavaProject` | Manual-dispatch Maven Central publish workflow |
| `DockerPublish` | `JavaProject` | Manual-dispatch Docker build+push workflow |
| `GitHubPackagesPublish` | `JavaProject` | Manual-dispatch GitHub Packages publish workflow |
| `FlywayMigration` | `JavaProject` | Flyway plugin/dependency + migrations directory |
| `CdkDeployHook` | `JavaProject` | Manual-dispatch workflow that triggers `deploy.yml` in a companion CDK repo |
| `CodeIndexWorkflow` | `JavaProject` | Code index generation on push to `main` |

Example - adding a Docker publish to a plain projen `JavaProject`:

```typescript
import { java } from 'projen';
import { DockerPublish } from '@xpertss/projen-types';

const project = new java.JavaProject({
  name: 'my-service',
  groupId: 'org.xpertss',
  artifactId: 'my-service',
});

new DockerPublish(project, { dockerRegistry: 'ghcr.io' });

project.synth();
```

The full API reference, including every option and property, is in [API.md](./API.md).
