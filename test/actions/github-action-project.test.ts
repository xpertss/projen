import { GitHubActionProject } from '../../src';
import { synthSnapshot } from '../util';

function baseOptions() {
  return {
    name: 'create-pull-request',
    description: 'Idempotent create-or-update a GitHub Pull Request',
    sonarHostUrl: 'https://sonar.example.org',
    dogfood: {
      scenario: [
        {
          name: 'Create PR (fresh)',
          fixtureSteps: ['echo "$(date -u +%Y%m%dT%H%M%SZ)" >> test/fixtures/dogfood-state.txt'],
          inputs: {
            token: '${{ secrets.PROJEN_GITHUB_TOKEN }}',
            branch: 'test/dogfood',
          },
          assertions: [
            'gh pr view test/dogfood --json state -q .state | grep -qx OPEN',
          ],
        },
        {
          name: 'Create PR (re-run, reuse)',
          inputs: {
            token: '${{ secrets.PROJEN_GITHUB_TOKEN }}',
            branch: 'test/dogfood',
          },
          assertions: [
            'gh pr view test/dogfood --json number -q .number',
          ],
        },
      ],
      cleanup: [
        'gh pr close test/dogfood --repo "$GITHUB_REPOSITORY" || true',
        'git push origin --delete test/dogfood || true',
      ],
    },
  };
}

const GENERATED_WORKFLOW_FILES = [
  '.github/workflows/build.yml',
  '.github/workflows/test-dogfood.yml',
  '.github/workflows/sonar.yml',
  '.github/workflows/release.yml',
];

// Scoped to this type's own generated workflows - F003/F009 are pre-existing
// shared components with their own test coverage (e.g. ProjenDriftCheckWorkflow
// intentionally checks out the PR head via a floating `actions/checkout@v4`,
// unrelated to this type's trust-surface guarantees).
function allWorkflowUses(snapshot: Record<string, any>): string[] {
  const uses: string[] = [];
  for (const path of GENERATED_WORKFLOW_FILES) {
    const jobs = snapshot[path]?.jobs ?? {};
    for (const job of Object.values<any>(jobs)) {
      for (const step of job.steps ?? []) {
        if (step.uses) uses.push(step.uses);
      }
    }
  }
  return uses;
}

test('synthesizes the full AD-001 file tree', () => {
  const snapshot = synthSnapshot(new GitHubActionProject(baseOptions()));

  for (const file of [
    '.github/workflows/build.yml',
    '.github/workflows/test-dogfood.yml',
    '.github/workflows/sonar.yml',
    '.github/workflows/release.yml',
    '.github/workflows/projen-drift-check.yml',
    '.github/workflows/workflow-change-notice.yml',
    '.github/workflows/actions-allowlist-guard.yml',
    'package.json',
    'tsconfig.json',
    '.yamllint',
    'LICENSE',
    'README.md',
  ]) {
    expect(snapshot[file]).toBeDefined();
  }
});

test('every uses: is actions/* pinned (SHA or immutable exact version), or the local dogfood reference', () => {
  const snapshot = synthSnapshot(new GitHubActionProject(baseOptions()));
  const uses = allWorkflowUses(snapshot);

  expect(uses.length).toBeGreaterThan(0);
  for (const ref of uses) {
    if (ref === '.') continue;
    expect(ref).toMatch(/^actions\//);
    expect(ref).not.toMatch(/@latest/);
    // Pinned means either a 40-char commit SHA, or an immutable exact
    // three-part version tag (GitHub's immutable-release tags, e.g.
    // projen's own `actions/setup-node@v7.0.0`) - never a floating major
    // tag like `@v4`.
    expect(ref).toMatch(/@([0-9a-f]{40}|v\d+\.\d+\.\d+)$/);
  }
});

test('build.yml: triggers, permissions, npm ci preBuildStep', () => {
  const build = synthSnapshot(new GitHubActionProject(baseOptions()))[
    '.github/workflows/build.yml'
  ];

  expect(build.on.push.branches).toEqual(['main']);
  expect(build.on.pull_request).toBeDefined();
  expect(build.jobs.build.permissions.contents).toBe('read');

  const steps = JSON.stringify(build.jobs.build.steps);
  expect(steps).toContain('npm ci');
  expect(steps).toContain('npx projen@');
  expect(steps).toContain(' lint');
});

test('lint task: shellcheck, yamllint, pinned actionlint', () => {
  const tasks = synthSnapshot(new GitHubActionProject(baseOptions()))[
    '.projen/tasks.json'
  ];

  const steps = JSON.stringify(tasks.tasks.lint.steps);
  expect(steps).toContain('shellcheck');
  expect(steps).toContain('yamllint');
  expect(steps).toContain('actionlint_1.7.12_linux_amd64.tar.gz');
  expect(steps).toContain(
    '8aca8db96f1b94770f1b0d72b6dddcb1ebb8123cb3712530b08cc387b349a3d8',
  );
});

test('test-dogfood.yml: scenario steps round-trip in order, cleanup always runs', () => {
  const dogfood = synthSnapshot(new GitHubActionProject(baseOptions()))[
    '.github/workflows/test-dogfood.yml'
  ];

  expect(dogfood.on.workflow_dispatch).toBeDefined();
  expect(dogfood.on.pull_request.branches).toEqual(['main']);
  expect(dogfood.on.schedule).toEqual([{ cron: '17 3 * * *' }]);
  expect(dogfood.jobs.dogfood.permissions).toEqual({
    'contents': 'write',
    'pull-requests': 'write',
  });

  const steps = dogfood.jobs.dogfood.steps;
  const names = steps.map((s: any) => s.name);
  expect(names).toEqual([
    'Checkout',
    'Create PR (fresh): fixture',
    'Create PR (fresh): run the action',
    'Create PR (fresh): assert',
    'Create PR (re-run, reuse): run the action',
    'Create PR (re-run, reuse): assert',
    'Cleanup',
  ]);

  const first = steps.find((s: any) => s.name === 'Create PR (fresh): run the action');
  expect(first.uses).toBe('.');
  expect(first.with).toEqual({
    token: '${{ secrets.PROJEN_GITHUB_TOKEN }}',
    branch: 'test/dogfood',
  });
  expect(first.id).toBe('create-pr-fresh-0');

  const second = steps.find(
    (s: any) => s.name === 'Create PR (re-run, reuse): run the action',
  );
  expect(second.uses).toBe('.');
  expect(second.id).toBe('create-pr-re-run-reuse-1');
  expect(second.id).not.toBe(first.id);

  const cleanup = steps[steps.length - 1];
  expect(cleanup.name).toBe('Cleanup');
  expect(cleanup.if).toBe('always()');
  expect(cleanup.run).toContain('gh pr close');
});

test('dogfood step id: explicit id overrides the default slug, so assertions can reference outputs', () => {
  const options = baseOptions();
  (options.dogfood.scenario[0] as any).id = 'committed-check';

  const dogfood = synthSnapshot(new GitHubActionProject(options))[
    '.github/workflows/test-dogfood.yml'
  ];
  const step = dogfood.jobs.dogfood.steps.find(
    (s: any) => s.name === 'Create PR (fresh): run the action',
  );
  expect(step.id).toBe('committed-check');
});

test('sonar.yml: no marketplace action, explicit inclusions, quality gate wait, pull_request toggle', () => {
  const withGate = synthSnapshot(new GitHubActionProject(baseOptions()))[
    '.github/workflows/sonar.yml'
  ];
  expect(withGate.on.push.branches).toEqual(['main']);
  expect(withGate.on.pull_request).toBeDefined();
  expect(withGate.jobs.sonar.permissions.contents).toBe('read');

  const steps = JSON.stringify(withGate.jobs.sonar.steps);
  expect(steps).not.toContain('sonarqube-scan-action');
  expect(steps).toContain('sonar.inclusions=.github/workflows/**,action.yml,**/*.sh');
  expect(steps).toContain('sonar.qualitygate.wait=true');
  expect(steps).toContain('sonar.host.url=https://sonar.example.org');
  expect(steps).toContain('sonar-scanner-cli-8.1.0.6389-linux-x64.zip');
  expect(steps).toContain(
    'bb8f709f9cb73352f8d1260a3b3c506c0f41146754bc630762c126d795499d0b',
  );

  const noGate = synthSnapshot(
    new GitHubActionProject({
      ...baseOptions(),
      sonarPullRequestGate: false,
    }),
  )['.github/workflows/sonar.yml'];
  expect(noGate.on.pull_request).toBeUndefined();
});

test('release.yml: continuous trigger, write permissions, npm ci, no npm publish, tag prefix v', () => {
  const release = synthSnapshot(new GitHubActionProject(baseOptions()))[
    '.github/workflows/release.yml'
  ];

  expect(release.on.push.branches).toEqual(['main']);
  expect(release.on.workflow_dispatch.inputs.dry_run).toBeDefined();

  const releaseJob = release.jobs.release ?? release.jobs.release_main;
  expect(releaseJob.permissions.contents).toBe('write');

  const full = JSON.stringify(release);
  expect(full).toContain('npm ci');
  expect(full).not.toContain('npm publish');
  expect(full).not.toContain('NPM_REGISTRY');
  expect(full).not.toMatch(/actions\/checkout@v\d/);
});

test('package.json: private version source with exact-pinned devDeps', () => {
  const pkg = synthSnapshot(new GitHubActionProject(baseOptions()))['package.json'];

  expect(pkg.private).toBe(true);
  expect(pkg.version).toBe('0.0.0');

  const devDeps = pkg.devDependencies;
  expect(Object.keys(devDeps).sort()).toEqual([
    '@xpertss/projen-types',
    'commit-and-tag-version',
    'projen',
    'ts-node',
    'typescript',
  ]);
  for (const version of Object.values<string>(devDeps)) {
    expect(version).not.toMatch(/[\^~]/);
    expect(version).not.toBe('latest');
  }
});

test('F003/F009 components are present', () => {
  const snapshot = synthSnapshot(new GitHubActionProject(baseOptions()));

  expect(snapshot['.github/workflows/projen-drift-check.yml']).toBeDefined();
  expect(snapshot['.github/workflows/workflow-change-notice.yml']).toBeDefined();
  expect(snapshot['.github/workflows/actions-allowlist-guard.yml']).toBeDefined();
});

test('license defaults to MIT and honors override', () => {
  const defaultLicense = synthSnapshot(new GitHubActionProject(baseOptions())).LICENSE;
  expect(defaultLicense).toContain('Permission is hereby granted');

  const apache = synthSnapshot(
    new GitHubActionProject({ ...baseOptions(), license: 'Apache-2.0' }),
  ).LICENSE;
  expect(apache).toContain('Apache License');
});

test('gheTokenSecret overrides round-trip into F003/F009', () => {
  const snapshot = synthSnapshot(
    new GitHubActionProject({
      ...baseOptions(),
      gheTokenSecret: 'CUSTOM_TOKEN',
    }),
  );

  const drift = snapshot['.github/workflows/projen-drift-check.yml'];
  expect(JSON.stringify(drift)).toContain('CUSTOM_TOKEN');
});

test('sonarHostUrl is required', () => {
  const options = baseOptions();
  delete (options as any).sonarHostUrl;
  expect(() => new GitHubActionProject(options as any)).toThrow(/sonarHostUrl/);
});

test('dogfood.scenario and dogfood.cleanup are required', () => {
  const withoutScenario = baseOptions();
  (withoutScenario as any).dogfood.scenario = [];
  expect(() => new GitHubActionProject(withoutScenario as any)).toThrow(/scenario/);

  const withoutCleanup = baseOptions();
  (withoutCleanup as any).dogfood.cleanup = [];
  expect(() => new GitHubActionProject(withoutCleanup as any)).toThrow(/cleanup/);
});

test('readme.contents override round-trips', () => {
  const snapshot = synthSnapshot(
    new GitHubActionProject({
      ...baseOptions(),
      readme: { contents: '# Custom Readme\n' },
    }),
  );

  expect(snapshot['README.md']).toContain('# Custom Readme');
});
