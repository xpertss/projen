import { cdk, javascript } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Chris Floersch',
  authorAddress: 'cfloersch@xpertss.org',
  authorOrganization: false,
  description: 'Projen project types for CDK/TypeScript and Java/Maven projects',
  jsiiVersion: '~6.0.0',
  keywords: ['projen', 'cdk', 'java', 'aws', 'maven'],
  license: 'Apache-2.0',
  name: 'projen-types',
  packageManager: javascript.NodePackageManager.NPM,
  packageName: '@xpertss/projen-types',
  devDeps: ['yaml'],
  gitignore: ['.idea', '/spec/', 'package-lock.json'],
  peerDeps: ['projen', 'constructs'],
  projenrcTs: true,
  repositoryUrl: 'git@github.com:xpertss/projen',
  sampleCode: false,
  stability: 'experimental',
});
project.synth();