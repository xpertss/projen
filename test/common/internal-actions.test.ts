import { github, typescript } from 'projen';
import {
  AUTO_COMMIT_VERSION,
  CREATE_PULL_REQUEST_VERSION,
  applyInternalActionOverrides,
} from '../../src';
import { synthSnapshot } from '../util';

describe('applyInternalActionOverrides', () => {
  test('redirects every out-of-policy action reference to xpertss/*', () => {
    const project = new typescript.TypeScriptProject({ name: 'override-test' });
    const wf = new github.GithubWorkflow(project.github!, 'override-test');
    wf.on({ workflowDispatch: {} });
    wf.addJob('job', {
      runsOn: ['ubuntu-latest'],
      permissions: { contents: 'read' },
      steps: [
        { name: 'a', uses: 'peter-evans/create-pull-request@v7' },
        { name: 'b', uses: 'stefanzweifel/git-auto-commit-action@v5' },
        { name: 'c', uses: 'amannn/action-semantic-pull-request@v4' },
        { name: 'd', uses: 'actions/checkout@v4' },
        { name: 'e', uses: github.ActionRefs.ACTIONS_CHECKOUT },
        {
          name: 'f',
          uses: github.ActionRefs.ACTIONS_UPLOAD_ARTIFACT,
        },
        {
          name: 'g',
          uses: github.ActionRefs.ACTIONS_DOWNLOAD_ARTIFACT,
        },
        {
          name: 'h',
          uses: github.ActionRefs.PETER_EVANS_CREATE_PULL_REQUEST,
        },
      ],
    });
    applyInternalActionOverrides(project.github!);
    const snapshot = synthSnapshot(project);

    const steps = snapshot['.github/workflows/override-test.yml'].jobs.job.steps;
    // The internal pins are exact release versions, not placeholders or SHAs.
    expect(CREATE_PULL_REQUEST_VERSION).toMatch(/^v\d+\.\d+\.\d+$/);
    expect(AUTO_COMMIT_VERSION).toMatch(/^v\d+\.\d+\.\d+$/);
    expect(steps[0].uses).toBe(
      `xpertss/create-pull-request@${CREATE_PULL_REQUEST_VERSION}`,
    );
    expect(steps[1].uses).toBe(`xpertss/auto-commit@${AUTO_COMMIT_VERSION}`);
    expect(steps[2].uses).toBe('xpertss/semantic-pull-request@v0.1.0');
    // this package's own actions/checkout literal is redirected to the
    // current major line
    expect(steps[3].uses).toBe('actions/checkout@v7');
    // projen's built-in commit-SHA refs (the live ActionRefs constants) are
    // re-pinned to the floating major ref of the current major line
    expect(steps[4].uses).toBe('actions/checkout@v7');
    expect(steps[5].uses).toBe('actions/upload-artifact@v7');
    expect(steps[6].uses).toBe('actions/download-artifact@v8');
    // projen's built-in create-pull-request ref (ActionRefs) is redirected by
    // the same name-keyed entry as this package's own @v7 literal
    expect(steps[7].uses).toBe(
      `xpertss/create-pull-request@${CREATE_PULL_REQUEST_VERSION}`,
    );
  });
});
