import { cdk, github, javascript, ReleasableCommits } from 'projen';
import {
  ProjenDriftCheckWorkflow,
  WorkflowChangeNoticeWorkflow,
  applyInternalActionOverrides,
} from './src';
const project = new cdk.JsiiProject({
  author: 'Chris Floersch',
  authorAddress: 'product@xpertss.org',
  authorOrganization: false,
  description: 'Projen project types for CDK/TypeScript and Java/Maven projects',
  jsiiVersion: '~6.0.0',
  // projen >= 0.105 imports `dax` (and its deps `@dsherret/shell`,
  // `console-static-text`), which ship ESM only. Jest's CommonJS module
  // system cannot `require()` them, so every suite that imports `projen`
  // failed to load. Compile projen's own nested node_modules to CommonJS with
  // ts-jest; everything else under node_modules stays untransformed. Matches
  // the npm layout where those deps are nested under `projen/node_modules/`.
  jestOptions: {
    jestConfig: {
      transformIgnorePatterns: [
        '^(?!.*/node_modules/projen/node_modules/).*/node_modules/',
      ],
      transform: {
        '/projen/node_modules/.+\\.js$': new javascript.Transform('ts-jest', {
          tsconfig: { allowJs: true, module: 'commonjs', esModuleInterop: true },
          isolatedModules: true,
        }),
      },
    },
  },
  // Pin the publib release tool (release.yml's `npx -p publib@... publib-npm`)
  // to an exact version; projen's default is the floating `latest` tag, so
  // every release would otherwise run whatever publib published last.
  jsiiReleaseVersion: '0.3.12',
  keywords: ['projen', 'cdk', 'java', 'aws', 'maven'],
  license: 'Apache-2.0',
  name: 'projen-types',
  npmTrustedPublishing: true,
  packageManager: javascript.NodePackageManager.NPM,
  packageName: '@xpertss/projen-types',
  devDeps: ['yaml'],
  githubOptions: { pullRequestLint: false },
  gitignore: ['.idea', '/spec/'],
  peerDeps: ['projen', 'constructs'],
  // Authenticate core projen's own automation (self-mutation push, dependency-
  // upgrade PR) with the org's `builder` GitHub App instead of a long-lived
  // PAT (F020). Tokens are minted per-run and expire after an hour; commits
  // and PRs are attributed to `builder[bot]`.
  projenCredentials: github.GithubCredentials.fromApp(),
  projenrcTs: true,
  projenVersion: '0.103.25',
  releasableCommits: ReleasableCommits.featuresAndFixes(),
  repositoryUrl: 'git@github.com:xpertss/projen',
  sampleCode: false,
  stability: 'experimental',
  // Pin CI's Node version instead of floating `lts/*` - a floating version
  // can resolve a different npm than whatever generated the committed
  // package-lock.json, and npm ci then fails on optional-dependency drift
  // (e.g. @emnapi/core/@emnapi/runtime) that isn't a real dependency bug.
  workflowNodeVersion: '24',
});
project.addFields({ publishConfig: { access: 'public' } });
if (project.github) {
  applyInternalActionOverrides(project.github);
}
new ProjenDriftCheckWorkflow(project);
new WorkflowChangeNoticeWorkflow(project);
project.synth();