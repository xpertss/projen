import { Component, Task, github } from 'projen';

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
 * triggered on push-to-`main` and `pull_request`. The same task is reused by
 * the release build job, so the lint commands exist in exactly one place.
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
      `curl -fsSL -o /tmp/actionlint.tar.gz "https://github.com/rhysd/actionlint/releases/download/v${ACTIONLINT_VERSION}/actionlint_${ACTIONLINT_VERSION}_linux_amd64.tar.gz"`,
    );
    this.task.exec(
      `echo "${ACTIONLINT_SHA256}  /tmp/actionlint.tar.gz" | sha256sum -c -`,
    );
    this.task.exec('tar -xzf /tmp/actionlint.tar.gz -C /tmp actionlint');
    this.task.exec(
      'find . -path ./node_modules -prune -o -name "*.sh" -print0 | xargs -0 -r shellcheck',
    );
    this.task.exec('yamllint -c .yamllint action.yml .github/workflows/*.yml');
    this.task.exec('/tmp/actionlint action.yml .github/workflows/*.yml');

    this.workflow = new github.TaskWorkflow(gh, {
      name: 'build',
      jobId: 'build',
      task: this.task,
      triggers: { push: { branches: ['main'] }, pullRequest: {} },
      permissions: { contents: github.workflows.JobPermission.READ },
      preBuildSteps: [{ name: 'Install dependencies', run: 'npm ci' }],
    });
  }
}
