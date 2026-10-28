import { Component, github } from 'projen';
import { AUTO_COMMIT_VERSION } from './internal-actions';
import { noteWorkflowPurpose } from './workflow-purpose';

export interface CodeIndexWorkflowOptions {
  /**
   * The commands of the `codeindex` task, run in order. Together they write
   * the index under `.xss/`.
   */
  readonly exec: string[];

  /**
   * Git pathspecs of the project's source files. A push that changes none of
   * them does not regenerate the index.
   */
  readonly sourcePathspecs: string[];

  /** Steps that install what the `codeindex` task needs (runtimes, dependencies). */
  readonly setupSteps: github.workflows.JobStep[];
}

const GATE_STEP_ID = 'changes';
const RUN_INDEXER = `steps.${GATE_STEP_ID}.outputs.run == 'true'`;

/**
 * Generates a code index and publishes it to `.xss/` on checkin.
 *
 * On a push to `main` the workflow lists the files the push changed and stops
 * without indexing when no source file changed, or when `.xss/` is among the
 * changed files (the index is already part of the push). A push with no usable
 * `before` commit (a new branch, a force push, a manual run) always indexes.
 */
export class CodeIndexWorkflow extends Component {
  constructor(project: github.GitHubProject, options: CodeIndexWorkflowOptions) {
    super(project, 'CodeIndexWorkflow');

    const gh = project.github;
    if (!gh) {
      throw new Error('CodeIndexWorkflow requires GitHub integration');
    }

    project.addTask('codeindex', {
      steps: options.exec.map((exec) => ({ exec })),
    });
    // The index is binary: `* text=auto eol=lf` must never rewrite it, and a
    // diff or merge of it is meaningless.
    project.gitattributes.addAttributes('/.xss/index.scip', 'binary', 'linguist-generated');

    const workflow = new github.GithubWorkflow(gh, 'codeindex');
    workflow.on({ push: { branches: ['main'] }, workflowDispatch: {} });
    // A newer push supersedes an index run still in progress.
    workflow.file?.addOverride('concurrency', {
      'group': 'codeindex',
      'cancel-in-progress': true,
    });
    workflow.addJob('codeindex', {
      runsOn: ['ubuntu-latest'],
      permissions: { contents: github.workflows.JobPermission.WRITE },
      steps: [
        { name: 'Checkout', uses: 'actions/checkout@v7' },
        {
          name: 'Find changed files',
          id: GATE_STEP_ID,
          env: { BEFORE: '${{ github.event.before }}' },
          run: gateScript(options.sourcePathspecs),
        },
        ...options.setupSteps.map((step) => ({ ...step, if: RUN_INDEXER })),
        { name: 'Generate code index', if: RUN_INDEXER, run: 'npx projen codeindex' },
        {
          name: 'Commit code index',
          if: RUN_INDEXER,
          uses: `xpertss/auto-commit@${AUTO_COMMIT_VERSION}`,
          // No token input: the push uses the checkout's GITHUB_TOKEN, so the
          // index commit starts no further workflows. `if_behind: skip` lets a
          // run that lost the push race to a newer merge succeed - the newer
          // run regenerates the index.
          with: {
            commit_message: 'chore: update code index',
            folder: '.xss',
            if_behind: 'skip',
          },
        },
      ],
    });
    noteWorkflowPurpose(
      workflow.file,
      'Regenerate and commit the code index on push to main.',
    );
  }
}

/**
 * Sets `run=false` when the push changed no source file or already changed
 * `.xss/`. Fetches the `before` commit by SHA (depth 1), so the checkout needs
 * no history; a `before` that cannot be fetched (all-zero SHA, force push,
 * manual run) leaves `run=true`.
 */
function gateScript(sourcePathspecs: string[]): string {
  const pathspecs = sourcePathspecs.map((p) => `'${p}'`).join(' ');
  return [
    'run=true',
    `zero="${'0'.repeat(40)}"`,
    'if [ -n "$BEFORE" ] && [ "$BEFORE" != "$zero" ] && git fetch --no-tags --depth=1 origin "$BEFORE"; then',
    '  changed=$(git diff --name-only "$BEFORE" "$GITHUB_SHA")',
    `  sources=$(git diff --name-only "$BEFORE" "$GITHUB_SHA" -- ${pathspecs})`,
    '  if grep -q "^[.]xss/" <<< "$changed"; then',
    '    echo "The push already changes .xss/; not regenerating the code index."',
    '    run=false',
    '  elif [ -z "$sources" ]; then',
    '    echo "The push changes no source file; not regenerating the code index."',
    '    run=false',
    '  fi',
    'fi',
    'echo "run=$run" >> "$GITHUB_OUTPUT"',
  ].join('\n');
}
