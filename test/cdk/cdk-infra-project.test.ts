import { github, Testing } from 'projen';
import { CREATE_PULL_REQUEST_VERSION, CdkInfraProject } from '../../src';
import { synthSnapshot } from '../util';

test('synthesizes cdk.json and a PR-check build workflow', () => {
  const project = new CdkInfraProject({
    name: 'infra-test',
  });

  const snapshot = synthSnapshot(project);

  expect(snapshot['cdk.json']).toBeDefined();
  expect(snapshot['.github/workflows/build.yml']).toBeDefined();
  expect(snapshot['.github/workflows/deploy.yml']).toBeDefined();
  expect(snapshot['.github/workflows/projen-drift-check.yml']).toBeDefined();
  expect(snapshot['.github/workflows/workflow-change-notice.yml']).toBeDefined();
});

test('ecr/ecs constructs are opt-in', () => {
  const withEcr = synthSnapshot(
    new CdkInfraProject({
      name: 'infra-test',
      ecrEcs: { enabled: true },
    }),
  );
  const withoutEcr = synthSnapshot(
    new CdkInfraProject({ name: 'infra-test' }),
  );

  expect(withEcr['src/constructs/ecr-ecs.ts']).toBeDefined();
  expect(withoutEcr['src/constructs/ecr-ecs.ts']).toBeUndefined();
});

test('edge networking constructs are generated per requested resource', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({
      name: 'infra-test',
      edgeResources: ['cloudfront', 'sqs'],
    }),
  );

  const source = snapshot['src/constructs/edge-networking.ts'];
  expect(source).toContain('aws-cloudfront');
  expect(source).toContain('aws-sqs');
  expect(source).not.toContain('aws-cognito');
});

test('deploy workflow no longer references Slack', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({
      name: 'infra-test',
    }),
  );
  const deploy = JSON.stringify(snapshot['.github/workflows/deploy.yml']);
  expect(deploy).not.toContain('slackapi');
  expect(deploy).not.toContain('SLACK_WEBHOOK');
});

test('default task re-runs .projenrc.ts - the repo is configured in TypeScript', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({ name: 'infra-test' }),
  );

  expect(snapshot['.projen/tasks.json'].tasks.default.steps).toEqual([
    { execArgs: ['ts-node', '--project', 'projenrc/tsconfig.json', '.projenrc.ts'] },
  ]);
  expect(snapshot['package.json'].devDependencies['ts-node']).toBeDefined();
});

test('gitignore excludes JetBrains IDE state and /spec/', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({ name: 'infra-test' }),
  );
  expect(snapshot['.gitignore']).toContain('/.idea/*');
  expect(snapshot['.gitignore']).toContain('/spec/');
});

test('the deps-upgrade workflow mints a GitHub App token (default) and opens the PR with it', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({ name: 'infra-test' }),
  );
  const prSteps = snapshot['.github/workflows/upgrade.yml'].jobs.pr.steps;

  // Core projen emits a "Generate token" step (from the default
  // `GithubCredentials.fromApp()`) at the top of the `pr` job; the Create
  // Pull Request step consumes its output instead of reading a PAT secret.
  const genToken = prSteps.find(
    (s: { name: string }) => s.name === 'Generate token',
  );
  expect(genToken).toBeDefined();
  expect(genToken.id).toBe('generate_token');
  expect(genToken.with['app-id']).toBe('${{ secrets.PROJEN_APP_ID }}');
  expect(genToken.with['private-key']).toBe('${{ secrets.PROJEN_APP_PRIVATE_KEY }}');

  const prStep = prSteps.find(
    (s: { name: string }) => s.name === 'Create Pull Request',
  );
  expect(prStep.uses).toBe(
    `xpertss/create-pull-request@${CREATE_PULL_REQUEST_VERSION}`,
  );
  expect(prStep.with.token).toBe('${{ steps.generate_token.outputs.token }}');
});

test('projenCredentials: a custom App uses its own secret names; a PAT reverts to the PAT secret', () => {
  const customApp = synthSnapshot(
    new CdkInfraProject({
      name: 'infra-test',
      projenCredentials: github.GithubCredentials.fromApp({
        appIdSecret: 'MY_APP_ID',
        privateKeySecret: 'MY_APP_PRIVATE_KEY',
      }),
    }),
  );
  const customPrSteps = customApp['.github/workflows/upgrade.yml'].jobs.pr.steps;
  const genToken = customPrSteps.find(
    (s: { name: string }) => s.name === 'Generate token',
  );
  expect(genToken.with['app-id']).toBe('${{ secrets.MY_APP_ID }}');
  expect(genToken.with['private-key']).toBe('${{ secrets.MY_APP_PRIVATE_KEY }}');
  const prStep = customPrSteps.find(
    (s: { name: string }) => s.name === 'Create Pull Request',
  );
  expect(prStep.with.token).toBe('${{ steps.generate_token.outputs.token }}');

  // PAT fallback: no Generate token step; the token is the secret directly.
  const pat = synthSnapshot(
    new CdkInfraProject({
      name: 'infra-test',
      projenCredentials: github.GithubCredentials.fromPersonalAccessToken({
        secret: 'MY_GHE_TOKEN',
      }),
    }),
  );
  const patPrSteps = pat['.github/workflows/upgrade.yml'].jobs.pr.steps;
  expect(
    patPrSteps.find((s: { name: string }) => s.name === 'Generate token'),
  ).toBeUndefined();
  const patPrStep = patPrSteps.find(
    (s: { name: string }) => s.name === 'Create Pull Request',
  );
  expect(patPrStep.with.token).toBe('${{ secrets.MY_GHE_TOKEN }}');
});

test('.editorconfig is written by default and can be turned off', () => {
  expect(synthSnapshot(new CdkInfraProject({ name: 'infra-test' }))['.editorconfig']).toContain(
    'root = true',
  );
  expect(
    synthSnapshot(new CdkInfraProject({ name: 'infra-test', editorconfig: false }))['.editorconfig'],
  ).toBeUndefined();
});

describe('deploy workflow', () => {
  const deployYml = () =>
    synthSnapshot(new CdkInfraProject({ name: 'infra-test' }))['.github/workflows/deploy.yml'];

  test('deploys on push to main and on manual dispatch only', () => {
    expect(deployYml().on).toEqual({
      push: { branches: ['main'] },
      workflow_dispatch: {},
    });
  });

  test('one deploy job with exactly id-token: write + contents: read, and no environment', () => {
    const jobs = deployYml().jobs;
    expect(Object.keys(jobs)).toEqual(['deploy']);
    expect(jobs.deploy.permissions).toEqual({ 'id-token': 'write', 'contents': 'read' });
    // An environment would change the OIDC sub away from ref:refs/heads/main.
    expect(jobs.deploy.environment).toBeUndefined();
  });

  test('assumes gha-cdk-deploy via the AWS_ACCOUNT_ID secret in us-east-2, then npm ci + cdk deploy --all', () => {
    const steps = deployYml().jobs.deploy.steps;
    expect(steps.map((s: { uses?: string; run?: string }) => s.uses ?? s.run)).toEqual([
      'actions/checkout@v7',
      'aws-actions/configure-aws-credentials@v6',
      'actions/setup-node@v7',
      'npm ci',
      'npx cdk deploy --all --require-approval never',
    ]);
    expect(steps[1].with).toEqual({
      'role-to-assume': 'arn:aws:iam::${{ secrets.AWS_ACCOUNT_ID }}:role/gha-cdk-deploy',
      'aws-region': 'us-east-2',
    });
  });

  test('no literal account id in the generated file', () => {
    const raw = Testing.synth(new CdkInfraProject({ name: 'infra-test' }))[
      '.github/workflows/deploy.yml'
    ];
    expect(raw).not.toMatch(/\d{12}/);
  });
});

test('deps, devDeps and context pass through to package.json and cdk.json', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({
      name: 'infra-test',
      deps: ['@cloudsnorkel/cdk-github-runners@0.17.1'],
      devDeps: ['@types/aws-lambda@8.10.150'],
      context: { obeyaRunnerAmiId: 'ami-0123456789abcdef0' },
    }),
  );
  expect(snapshot['package.json'].dependencies['@cloudsnorkel/cdk-github-runners']).toBe('0.17.1');
  expect(snapshot['package.json'].devDependencies['@types/aws-lambda']).toBe('8.10.150');
  expect(snapshot['cdk.json'].context.obeyaRunnerAmiId).toBe('ami-0123456789abcdef0');
});

test('cdkVersionPinning pins aws-cdk-lib exactly', () => {
  const snapshot = synthSnapshot(
    new CdkInfraProject({ name: 'infra-test', cdkVersionPinning: true }),
  );
  expect(snapshot['package.json'].dependencies['aws-cdk-lib']).toBe('2.273.0');
});

test('default cdkVersion satisfies the @cloudsnorkel/cdk-github-runners peer (aws-cdk-lib >= 2.239.0)', () => {
  const project = new CdkInfraProject({ name: 'infra-test' });
  expect(synthSnapshot(project)['package.json'].dependencies['aws-cdk-lib']).toBe('^2.273.0');
});

test('projen new --from renders devDeps; the exact @xpertss/projen-types pin still wins', () => {
  // `projen new --from <spec>` writes `devDeps: [<spec>]` into the projenrc
  // now that `devDeps` is an option; a bare spec must not unpin the generator.
  const pkg = synthSnapshot(
    new CdkInfraProject({ name: 'infra-test', devDeps: ['@xpertss/projen-types'] }),
  )['package.json'];
  expect(pkg.devDependencies['@xpertss/projen-types']).toMatch(/^\d+\.\d+\.\d+$/);
});
