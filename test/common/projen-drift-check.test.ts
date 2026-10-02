import { typescript } from 'projen';
import { ProjenDriftCheckWorkflow } from '../../src';
import { synthSnapshot } from '../util';

describe('ProjenDriftCheckWorkflow', () => {
  test('synths a pull_request drift-check workflow', () => {
    const project = new typescript.TypeScriptProject({ name: 'drift-test' });
    new ProjenDriftCheckWorkflow(project);
    const snapshot = synthSnapshot(project);

    const wf = snapshot['.github/workflows/projen-drift-check.yml'];
    expect(wf).toBeDefined();
    expect(wf.on.pull_request).toBeDefined();
    expect(wf.jobs.check.name).toBe('Projen drift check');
    expect(wf.jobs.check.permissions.contents).toBe('read');

    const step = wf.jobs.check.steps.find(
      (s: { name: string }) => s.name === 'Check for projen drift',
    );
    expect(step.run).toContain('npx projen');
    expect(step.run).toContain('git diff --name-only');
  });

  test('honors custom projenCommand, token secret, and workflowName', () => {
    const project = new typescript.TypeScriptProject({ name: 'drift-test' });
    new ProjenDriftCheckWorkflow(project, {
      projenCommand: 'npx projen synth',
      gheTokenSecret: 'MY_TOKEN',
      workflowName: 'drift',
    });
    const snapshot = synthSnapshot(project);

    const wf = snapshot['.github/workflows/drift.yml'];
    expect(wf).toBeDefined();
    expect(wf.jobs.check.env.GH_TOKEN).toBe('${{ secrets.MY_TOKEN }}');
    const step = wf.jobs.check.steps.find(
      (s: { name: string }) => s.name === 'Check for projen drift',
    );
    expect(step.run).toContain('npx projen synth');
  });

  test('installs with npm ci, failing with a clear annotation when no lockfile is committed', () => {
    const project = new typescript.TypeScriptProject({ name: 'drift-test' });
    new ProjenDriftCheckWorkflow(project);
    const wf = synthSnapshot(project)['.github/workflows/projen-drift-check.yml'];
    const install = wf.jobs.check.steps.find(
      (s: { name: string }) => s.name === 'Install dependencies',
    );
    expect(install.run).toContain('if [ ! -f package-lock.json ]; then');
    expect(install.run).toContain('::error file=package.json::package-lock.json is not committed');
    expect(install.run).toContain('npm ci');
  });
});
