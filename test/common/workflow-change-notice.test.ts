import { typescript } from 'projen';
import { WorkflowChangeNoticeWorkflow } from '../../src';
import { synthSnapshot } from '../util';

describe('WorkflowChangeNoticeWorkflow', () => {
  test('synths a pull_request_target notice workflow that never checks out', () => {
    const project = new typescript.TypeScriptProject({ name: 'notice-test' });
    new WorkflowChangeNoticeWorkflow(project);
    const snapshot = synthSnapshot(project);

    const wf = snapshot['.github/workflows/workflow-change-notice.yml'];
    expect(wf).toBeDefined();
    expect(wf.on.pull_request_target).toBeDefined();

    const job = wf.jobs.check;
    expect(job.env.GH_TOKEN).toBe('${{ github.token }}');
    expect(job.permissions['pull-requests']).toBe('write');
    expect(job.env.WATCH_PATHS).toBe(
      '.github/workflows/** .github/actions/**',
    );

    // the job must never check out the PR branch
    expect(
      job.steps.some((s: { uses?: string }) =>
        (s.uses ?? '').includes('actions/checkout'),
      ),
    ).toBe(false);

    const step = job.steps.find(
      (s: { name: string }) =>
        s.name === 'Check for workflow/action changes',
    );
    expect(step.run).toContain('gh api');
    expect(step.run).toContain('gh pr comment');
  });

  test('honors custom watchPaths and workflowName', () => {
    const project = new typescript.TypeScriptProject({ name: 'notice-test' });
    new WorkflowChangeNoticeWorkflow(project, {
      watchPaths: ['deploy/**'],
      workflowName: 'wf-notice',
    });
    const snapshot = synthSnapshot(project);

    const wf = snapshot['.github/workflows/wf-notice.yml'];
    expect(wf).toBeDefined();
    expect(wf.jobs.check.env.WATCH_PATHS).toBe('deploy/**');
  });
});
