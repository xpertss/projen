import { Component, Task, github } from 'projen';
import { noteWorkflowPurpose } from '../common/workflow-purpose';

// Pinned release + verified SHA-256 (linux_amd64) - upgrade is a reviewed
// diff of this constant, never a floating version (AD-001).
const ACTIONLINT_VERSION = '1.7.12';
const ACTIONLINT_SHA256 =
  '8aca8db96f1b94770f1b0d72b6dddcb1ebb8123cb3712530b08cc387b349a3d8';

/**
 * The AD-001 Layer-1 lint gate for a composite-action repo: shellcheck,
 * yamllint, and a pinned `actionlint` release binary (verified by SHA-256,
 * never a marketplace action - org policy). Creates a dedicated `lint` task
 * (named to avoid colliding with projen's own reserved `build` task, which
 * spawns the unrelated default/pre-compile/compile/post-compile/test/package
 * chain - including `default`, i.e. re-running `.projenrc.ts`, which is not
 * what this gate is for) and wraps it in a `TaskWorkflow` (`build.yml`)
 * triggered on `pull_request` (plus `TaskWorkflow`'s automatic
 * `workflow_dispatch`). `push: main` is deliberately not a trigger: the
 * release path already runs this same `lint` task inside the `release` job
 * (the `tasks` wiring in `GitHubActionProject`), before the tag and GitHub
 * Release are created - so a push-to-`main` run here would execute the lint
 * twice in parallel and gate nothing, because the release job never waits on
 * `build.yml`. The lint commands exist in exactly one place: the `lint`
 * task.
 */
export class ActionBuildWorkflow extends Component {
  public readonly task: Task;
  public readonly workflow: github.TaskWorkflow;

  constructor(scope: github.GitHubProject) {
    super(scope, 'ActionBuildWorkflow');

    const gh = scope.github;
    if (!gh) {
      throw new Error(
        'ActionBuildWorkflow requires GitHub integration to be enabled',
      );
    }

    this.task = scope.addTask('lint', {
      description: 'Lint the action (shellcheck, yamllint, actionlint)',
    });
    this.task.exec(
      'sudo apt-get update -y && sudo apt-get install -y shellcheck yamllint',
    );
    this.task.exec(
      'find . -path ./node_modules -prune -o -name "*.sh" -print0 | xargs -0 -r shellcheck',
    );
    // Hand-written YAML only: the workflows are projen-generated (and
    // drift-checked), and their long lines would fail `line-length`.
    this.task.exec('yamllint -c .yamllint action.yml');
    // One step, so the private `mktemp -d` dir carries from download through
    // execution - never the world-writable shared /tmp, where another local
    // user could plant the binary that gets run.
    // Workflows only: actionlint parses every file argument as a workflow,
    // so the composite `action.yml` is validated transitively via
    // `uses: ./` instead. `-shellcheck=` disables its incidental shellcheck
    // pass over generated `run:` scripts (e.g. projen's own `release.yml`);
    // hand-written `*.sh` files are covered by the shellcheck step above.
    this.task.exec(
      [
        'TMP="$(mktemp -d)"',
        `curl -fsSL -o "$TMP/actionlint.tar.gz" "https://github.com/rhysd/actionlint/releases/download/v${ACTIONLINT_VERSION}/actionlint_${ACTIONLINT_VERSION}_linux_amd64.tar.gz"`,
        `echo "${ACTIONLINT_SHA256}  $TMP/actionlint.tar.gz" | sha256sum -c -`,
        'tar -xzf "$TMP/actionlint.tar.gz" -C "$TMP" actionlint',
        '"$TMP/actionlint" -shellcheck= .github/workflows/*.yml',
      ].join(' && '),
    );

    this.workflow = new github.TaskWorkflow(gh, {
      name: 'build',
      jobId: 'build',
      task: this.task,
      triggers: { pullRequest: {} },
      permissions: { contents: github.workflows.JobPermission.READ },
      preBuildSteps: [{ name: 'Install dependencies', run: 'npm ci' }],
    });
    noteWorkflowPurpose(
      this.workflow.file,
      'Lint gate for the action (shellcheck, yamllint, actionlint).',
    );
  }
}
