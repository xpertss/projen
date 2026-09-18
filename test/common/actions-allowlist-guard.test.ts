import { typescript } from 'projen';
import { ActionsAllowlistGuard } from '../../src';
import { synthSnapshot } from '../util';

describe('ActionsAllowlistGuard', () => {
  test('synths a pull_request_target guard that never checks out', () => {
    const project = new typescript.TypeScriptProject({ name: 'guard-test' });
    new ActionsAllowlistGuard(project);
    const snapshot = synthSnapshot(project);

    const wf = snapshot['.github/workflows/actions-allowlist-guard.yml'];
    expect(wf).toBeDefined();
    expect(wf.on.pull_request_target).toBeDefined();

    const job = wf.jobs.check;
    expect(job.env.GH_TOKEN).toBe('${{ secrets.PROJEN_GITHUB_TOKEN }}');
    expect(job.permissions.contents).toBe('read');
    expect(job.permissions['pull-requests']).toBe('write');

    // the job must never check out the PR branch
    expect(
      job.steps.some((s: { uses?: string }) =>
        (s.uses ?? '').includes('actions/checkout'),
      ),
    ).toBe(false);

    const step = job.steps.find(
      (s: { name: string }) => s.name === 'Enforce action allow-list',
    );
    expect(step.run).toContain('git/trees');
    expect(step.run).toContain('xpertss/');
    expect(step.run).toContain('gh pr comment');
    expect(step.run).toContain('exit 1');
  });

  test('honors custom gheTokenSecret and workflowName', () => {
    const project = new typescript.TypeScriptProject({ name: 'guard-test' });
    new ActionsAllowlistGuard(project, {
      gheTokenSecret: 'MY_TOKEN',
      workflowName: 'guard',
    });
    const snapshot = synthSnapshot(project);

    const wf = snapshot['.github/workflows/guard.yml'];
    expect(wf).toBeDefined();
    expect(wf.jobs.check.env.GH_TOKEN).toBe('${{ secrets.MY_TOKEN }}');
  });
});
