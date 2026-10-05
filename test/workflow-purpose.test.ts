import { Project, Testing } from 'projen';
import {
  CdkAppProject,
  CdkInfraProject,
  GitHubActionProject,
  JavaServiceProject,
} from '../src';

// Raw (unparsed) synth so the leading `# Purpose:` comment survives -
// `synthSnapshot` re-parses YAML and would strip it.
function rawWorkflows(project: Project): Record<string, string> {
  const raw = Testing.synth(project) as Record<string, unknown>;
  const workflows: Record<string, string> = {};
  for (const [path, value] of Object.entries(raw)) {
    if (
      path.startsWith('.github/workflows/') &&
      (path.endsWith('.yml') || path.endsWith('.yaml'))
    ) {
      if (typeof value !== 'string') {
        throw new Error(`expected raw YAML string for ${path}`);
      }
      workflows[path] = value;
    }
  }
  return workflows;
}

function expectEveryWorkflowHasPurpose(project: Project): string[] {
  const workflows = rawWorkflows(project);
  const files = Object.keys(workflows);
  expect(files.length).toBeGreaterThan(0);
  for (const file of files) {
    expect(workflows[file]).toContain('# Purpose: ');
  }
  return files;
}

test('every generated workflow carries a purpose note (GitHubActionProject)', () => {
  const files = expectEveryWorkflowHasPurpose(
    new GitHubActionProject({
      name: 'create-pull-request',
      sonarHostUrl: 'https://sonar.example.org',
    }),
  );
  expect(files).toEqual(
    expect.arrayContaining([
      '.github/workflows/build.yml',
      '.github/workflows/test-dogfood.yml',
      '.github/workflows/sonar.yml',
      '.github/workflows/release.yml',
      '.github/workflows/projen-drift-check.yml',
      '.github/workflows/workflow-change-notice.yml',
    ]),
  );
});

test('every generated workflow carries a purpose note (CdkInfraProject)', () => {
  const files = expectEveryWorkflowHasPurpose(
    new CdkInfraProject({ name: 'infra-test', environments: ['dev', 'prod'] }),
  );
  expect(files).toEqual(
    expect.arrayContaining(['.github/workflows/build.yml', '.github/workflows/deploy.yml']),
  );
});

test('every generated workflow carries a purpose note (CdkAppProject)', () => {
  expectEveryWorkflowHasPurpose(
    new CdkAppProject({
      name: 'app-test',
      environments: ['prod'],
      database: { engine: 'postgres' },
    }),
  );
});

test('every generated workflow carries a purpose note (JavaServiceProject)', () => {
  expectEveryWorkflowHasPurpose(
    new JavaServiceProject({
      name: 'svc-test',
      groupId: 'com.example',
      artifactId: 'svc-test',
      cdkDeployTargetRepo: 'example-org/infra-repo',
    }),
  );
});

test('sonar.yml is opt-in via sonarHostUrl for every base type and carries a purpose note', () => {
  const projects = [
    new GitHubActionProject({
      name: 'sonar-action',
      sonarHostUrl: 'https://sonar.example.org',
    }),
    new CdkInfraProject({
      name: 'sonar-infra',
      sonarHostUrl: 'https://sonar.example.org',
    }),
    new JavaServiceProject({
      name: 'sonar-svc',
      groupId: 'com.example',
      artifactId: 'sonar-svc',
      cdkDeployTargetRepo: 'example-org/infra-repo',
      sonarHostUrl: 'https://sonar.example.org',
    }),
  ];
  for (const project of projects) {
    // Single synth per project - projen forbids a second Testing.synth.
    const workflows = rawWorkflows(project);
    expect(Object.keys(workflows)).toContain('.github/workflows/sonar.yml');
    for (const file of Object.keys(workflows)) {
      expect(workflows[file]).toContain('# Purpose: ');
    }
  }
});

test('no PR-title lint workflow is generated (all base types)', () => {
  const projects = [
    new GitHubActionProject({
      name: 'lint-absent-action',
      sonarHostUrl: 'https://sonar.example.org',
    }),
    new JavaServiceProject({
      name: 'lint-absent-svc',
      groupId: 'com.example',
      artifactId: 'lint-absent-svc',
      cdkDeployTargetRepo: 'example-org/infra-repo',
    }),
    new CdkInfraProject({ name: 'lint-absent-infra' }),
  ];
  for (const project of projects) {
    const files = Object.keys(rawWorkflows(project));
    expect(files).not.toContain('.github/workflows/pull-request-lint.yml');
  }
});
