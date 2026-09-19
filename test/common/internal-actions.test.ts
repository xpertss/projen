import { github, typescript } from 'projen';
import { applyInternalActionOverrides } from '../../src';
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
      ],
    });
    applyInternalActionOverrides(project.github!);
    const snapshot = synthSnapshot(project);

    const steps = snapshot['.github/workflows/override-test.yml'].jobs.job.steps;
    expect(steps[0].uses).toBe('xpertss/create-pull-request@PLACEHOLDER_SHA');
    expect(steps[1].uses).toBe('xpertss/auto-commit@PLACEHOLDER_SHA');
    expect(steps[2].uses).toBe('xpertss/semantic-pull-request@v0.1.0');
    // in-policy actions are left untouched
    expect(steps[3].uses).toBe('actions/checkout@v4');
  });
});
