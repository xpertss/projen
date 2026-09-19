import { Project, typescript } from 'projen';

// The toolchain that runs `.projenrc.ts`, pinned exactly (AD-001): `ts-node`
// resolves `typescript` as a peer, and an unpinned `typescript` now installs
// 7.x, whose JS API no longer exposes `ts.sys` - ts-node 10.x then dies with
// `TypeError: Cannot read properties of undefined (reading 'fileExists')`.
const TS_NODE_VERSION = '10.9.2';
const TYPESCRIPT_VERSION = '6.0.3';

/**
 * Attaches a TypeScript projenrc (`.projenrc.ts`) to a project whose primary
 * language is not TypeScript - a Maven repo, a composite-action repo - so
 * that every project type this package ships is configured the same way:
 * edit `.projenrc.ts`, run `npx projen`.
 *
 * `typescript.ProjenrcTs` is explicitly language-agnostic and does the
 * projen-native part: it registers the project's `ProjenrcFile` component -
 * which is what makes `projen new --from @xpertss/projen-types <type>` write
 * the initial `.projenrc.ts` - and emits the `tsconfig.projen.json` the
 * runner compiles against.
 *
 * Only its default task is replaced. `ProjenrcTs` renders that task as
 * `npx -y -p ts-node -c "<command>"`, and projen POSIX-quotes the `-c`
 * payload; on Windows npx hands it to `cmd.exe`, which has no single-quote
 * syntax, so `npx projen` fails with `''ts-node'' is not recognized`
 * (projen 0.103.x). The `npx -p <pkg> <bin>` form has no such quoting
 * problem and lets both halves of the toolchain be pinned, so the step is
 * rewritten to use it.
 */
export function attachTypeScriptProjenrc(project: Project): typescript.ProjenrcTs {
  const projenrc = new typescript.ProjenrcTs(project);

  project.defaultTask?.reset(
    [
      'npx -y',
      `-p ts-node@${TS_NODE_VERSION}`,
      `-p typescript@${TYPESCRIPT_VERSION}`,
      'ts-node',
      `--project ${projenrc.tsconfig.fileName}`,
      projenrc.filePath,
    ].join(' '),
  );

  return projenrc;
}
