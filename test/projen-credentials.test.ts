/**
 * F020 — builder-app-migration.
 *
 * Core projen's own automation (the dependency-upgrade PR, the self-mutation
 * push) authenticates with the org's `builder` GitHub App **by default**
 * instead of a long-lived PAT. This suite asserts the generated shape for
 * every project type this package emits:
 *
 *   (a) no generated file references the old `PROJEN_GITHUB_TOKEN` PAT secret
 *       (no PAT leakage), and
 *   (b)/(c) every type that opens a core-projen dependency-upgrade pull
 *       request mints a GitHub App token (a `Generate token` step, emitted by
 *       projen core from `GithubCredentials.fromApp()`) and references its
 *       output in the PR's `token` input.
 *
 * Types that emit no core-projen PR (the Java `GitHubProject` family and the
 * `GitHubActionProject`) carry no token at all in their generated workflows
 * (their code-index / drift-check / release steps run on the ambient
 * `GITHUB_TOKEN`), so only (a) applies to them.
 */
import {
  CdkAppProject,
  CdkInfraProject,
  GitHubActionProject,
  JavaAppProject,
  JavaLibraryProject,
  JavaMavenProject,
  JavaServiceProject,
  JavaSpringBootProject,
} from '../src';
import { synthSnapshot } from './util';

const JAVA_BASE = {
  name: 'java-creds',
  groupId: 'com.example',
  artifactId: 'java-creds',
};

/** [label, make] */
const TYPES: Array<[string, () => any]> = [
  ['CdkInfraProject', () => new CdkInfraProject({ name: 'cdk-creds', environments: [] })],
  ['CdkAppProject', () => new CdkAppProject({ name: 'cdk-app-creds', environments: [] })],
  ['JavaMavenProject', () => new JavaMavenProject(JAVA_BASE)],
  ['JavaSpringBootProject', () => new JavaSpringBootProject(JAVA_BASE)],
  ['JavaServiceProject', () => new JavaServiceProject(JAVA_BASE)],
  ['JavaLibraryProject', () => new JavaLibraryProject(JAVA_BASE)],
  ['JavaAppProject', () => new JavaAppProject(JAVA_BASE)],
  ['GitHubActionProject', () => new GitHubActionProject({ name: 'action-creds', description: 'test' })],
];

test('every project type: no generated file references the old PROJEN_GITHUB_TOKEN PAT secret', () => {
  const offendersByType: Record<string, string[]> = {};
  for (const [label, make] of TYPES) {
    const snapshot = synthSnapshot(make());
    offendersByType[label] = Object.entries(snapshot)
      .filter(([, contents]) => JSON.stringify(contents).includes('PROJEN_GITHUB_TOKEN'))
      .map(([path]) => path);
  }
  // Failures show exactly which type(s) leaked the old PAT secret and in
  // which generated file(s): { CdkInfraProject: ['.github/.../upgrade.yml'] }.
  expect(
    Object.fromEntries(
      Object.entries(offendersByType).filter(([, files]) => files.length > 0),
    ),
  ).toEqual({});
});

// Only the CDK types open a core-projen dependency-upgrade PR (they extend
// `NodeProject`, which emits `upgrade.yml`); the Java and GitHub-Action
// types emit no such PR, so this assertion applies to the CDK types alone.
test('CDK types: the core-projen upgrade PR is minted with a GitHub App token', () => {
  for (const make of [
    () => new CdkInfraProject({ name: 'cdk-creds', environments: [] }),
    () => new CdkAppProject({ name: 'cdk-app-creds', environments: [] }),
  ]) {
    const upgrade = synthSnapshot(make())['.github/workflows/upgrade.yml'];
    const prSteps = upgrade.jobs.pr.steps;

    // The `Generate token` step is emitted by projen core (not this package).
    const genToken = prSteps.find((s: { name: string }) => s.name === 'Generate token');
    expect(genToken).toBeDefined();
    expect(genToken.id).toBe('generate_token');
    expect(genToken.uses).toMatch(/^actions\/create-github-app-token@/);
    expect(genToken.with['app-id']).toBe('${{ secrets.PROJEN_APP_ID }}');
    expect(genToken.with['private-key']).toBe('${{ secrets.PROJEN_APP_PRIVATE_KEY }}');

    const prStep = prSteps.find((s: { name: string }) => s.name === 'Create Pull Request');
    expect(prStep.with.token).toBe('${{ steps.generate_token.outputs.token }}');
  }
});
