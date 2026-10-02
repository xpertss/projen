import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';
import * as src from '../../src';
import { synthSnapshot } from '../util';

// Every Java `.projenrc.ts` example in the README is type-checked against
// this package's source and then synthesized, so the documentation cannot
// drift from the API it documents.

const ROOT = path.join(__dirname, '../..');
const JAVA_TYPES = /\b(JavaMavenProject|JavaLibraryProject|JavaAppProject|JavaSpringBootProject|JavaServiceProject)\b/;

const examples = [...fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8').matchAll(/```typescript\n([\s\S]*?)```/g)]
  .map((m) => m[1])
  .filter((code) => code.includes("from '@xpertss/projen-types'") && JAVA_TYPES.test(code));

test('the README has Java examples to check', () => {
  // single + multi-module JavaMavenProject, library, Spring Boot, service, app, DockerPublish
  expect(examples.length).toBeGreaterThanOrEqual(7);
});

test('every Java README example type-checks', () => {
  const files = new Map(examples.map((code, i) => [path.join(ROOT, `test/__readme_example_${i}.ts`), code]));
  const options: ts.CompilerOptions = {
    noEmit: true,
    strict: true,
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.CommonJS,
    moduleResolution: ts.ModuleResolutionKind.Node10,
    ignoreDeprecations: '6.0',
    skipLibCheck: true,
    types: [],
    baseUrl: ROOT,
    paths: { '@xpertss/projen-types': ['src/index.ts'] },
  };
  const host = ts.createCompilerHost(options);
  const getSourceFile = host.getSourceFile;
  host.getSourceFile = (name, version, ...rest) =>
    files.has(path.normalize(name))
      ? ts.createSourceFile(name, files.get(path.normalize(name))!, version)
      : getSourceFile(name, version, ...rest);
  const fileExists = host.fileExists;
  host.fileExists = (name) => files.has(path.normalize(name)) || fileExists(name);

  const program = ts.createProgram([...files.keys()], options, host);
  const errors = [...files.keys()].flatMap((name) =>
    ts.getPreEmitDiagnostics(program, program.getSourceFile(name)).map((d) => {
      const { line } = d.file!.getLineAndCharacterOfPosition(d.start ?? 0);
      return `example ${path.basename(name)} line ${line + 1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`;
    }),
  );
  expect(errors).toEqual([]);
});

test.each(examples.map((code, i) => [i, code]))('README Java example %i synthesizes', (_i, code) => {
  const js = ts.transpileModule((code as string).replace(/project\.synth\(\);/g, '__synth(project);'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  // the examples' own imports, with this package resolved to its source
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const requireShim = (name: string) => (name === '@xpertss/projen-types' ? src : require(name));
  let synthesized: Record<string, any> | undefined;
  new Function('require', 'exports', '__synth', js)(requireShim, {}, (p: any) => {
    synthesized = synthSnapshot(p);
  });
  expect(synthesized?.['pom.xml']).toContain('<modelVersion>4.0.0</modelVersion>');
});
