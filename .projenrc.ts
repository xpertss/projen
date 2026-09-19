import { cdk, javascript, ReleasableCommits } from 'projen';
import {
  ActionsAllowlistGuard,
  ProjenDriftCheckWorkflow,
  WorkflowChangeNoticeWorkflow,
  applyInternalActionOverrides,
} from './src';
const project = new cdk.JsiiProject({
  author: 'Chris Floersch',
  authorAddress: 'cfloersch@xpertss.org',
  authorOrganization: false,
  description: 'Projen project types for CDK/TypeScript and Java/Maven projects',
  jsiiVersion: '~6.0.0',
  keywords: ['projen', 'cdk', 'java', 'aws', 'maven'],
  license: 'Apache-2.0',
  name: 'projen-types',
  npmTrustedPublishing: true,
  packageManager: javascript.NodePackageManager.NPM,
  packageName: '@xpertss/projen-types',
  devDeps: ['yaml'],
  gitignore: ['.idea', '/spec/'],
  peerDeps: ['projen', 'constructs'],
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
new ActionsAllowlistGuard(project);
project.synth();