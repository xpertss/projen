import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  NORMALIZED_PROJECT_ROOT,
  normalizeScipIndex,
  normalizeScipIndexFile,
} from '../../src/common/scip-index-normalizer';

const BACKSLASH = String.fromCharCode(92);

// A minimal protobuf writer, enough to build the parts of a SCIP index the
// normalizer reads: Index { metadata = 1, documents = 2 },
// Metadata { version = 1, tool_info = 2, project_root = 3, encoding = 4 },
// Document { relative_path = 1, occurrences = 2, symbols = 3, language = 4, text = 5 }.
function varint(value: number): Buffer {
  const bytes: number[] = [];
  let rest = value;
  while (rest >= 0x80) {
    bytes.push((rest % 128) + 128);
    rest = Math.floor(rest / 0x80);
  }
  bytes.push(rest);
  return Buffer.from(bytes);
}

function len(field: number, payload: Buffer | string): Buffer {
  const body = typeof payload === 'string' ? Buffer.from(payload) : payload;
  return Buffer.concat([varint(field * 8 + 2), varint(body.length), body]);
}

function num(field: number, value: number): Buffer {
  return Buffer.concat([varint(field * 8), varint(value)]);
}

function document(relativePath: string): Buffer {
  return len(
    2,
    Buffer.concat([
      len(1, relativePath),
      len(2, Buffer.from([0x08, 0x00, 0x10, 0x05])), // occurrences, copied through untouched
      len(3, `scip-typescript npm app 1.0.0 src${BACKSLASH}x.ts/Thing#`), // symbols: a `\` here is data
      len(4, 'TypeScript'),
      len(5, `const path = 'a${BACKSLASH}b';`), // source text: a `\` here is data
    ]),
  );
}

function index(projectRoot: string, paths: string[]): Buffer {
  const metadata = Buffer.concat([
    len(1, Buffer.from([0x08, 0x00])),
    len(2, Buffer.concat([len(1, 'scip-typescript'), len(2, '0.5.1')])),
    len(3, projectRoot),
    num(4, 1),
  ]);
  return Buffer.concat([len(1, metadata), ...paths.map(document)]);
}

const WINDOWS = { windowsPaths: true };

describe('normalizeScipIndex', () => {
  test('the same sources indexed in two different directories give identical bytes', () => {
    const paths = ['src/main.ts', 'src/lib/shape.ts'];
    const a = index('file:///C:/Users/dev/work/app/', paths);
    const b = index('file:///home/runner/work/app/app', paths);
    expect(a.equals(b)).toBe(false);
    expect(normalizeScipIndex(a).equals(normalizeScipIndex(b))).toBe(true);
  });

  test('only project_root changes, and every other byte is copied through', () => {
    const paths = ['src/main.ts', 'src/lib/shape.ts'];
    const expected = index(NORMALIZED_PROJECT_ROOT, paths);
    expect(normalizeScipIndex(index('file:///C:/Users/dev/app/', paths)).equals(expected)).toBe(true);
  });

  test('a root longer than 127 bytes (a two-byte length) normalizes the same way', () => {
    const longRoot = `file:///${'deeply/nested/'.repeat(30)}app/`;
    expect(longRoot.length).toBeGreaterThan(300);
    const paths = ['src/main.ts'];
    expect(normalizeScipIndex(index(longRoot, paths)).equals(index(NORMALIZED_PROJECT_ROOT, paths))).toBe(true);
  });

  test('on Windows, backslashes in document paths become /, and nowhere else', () => {
    const windows = index('file:///C:/Users/dev/app/', [`src${BACKSLASH}main.ts`, `src${BACKSLASH}lib${BACKSLASH}shape.ts`]);
    const expected = index(NORMALIZED_PROJECT_ROOT, ['src/main.ts', 'src/lib/shape.ts']);
    // Symbols and source text in the expected index keep their backslashes.
    expect(normalizeScipIndex(windows, WINDOWS).equals(expected)).toBe(true);
  });

  test('off Windows, a backslash in a document path is a file name character and is kept', () => {
    const paths = [`src${BACKSLASH}odd.ts`];
    const normalized = normalizeScipIndex(index('file:///home/dev/app/', paths));
    expect(normalized.equals(index(NORMALIZED_PROJECT_ROOT, paths))).toBe(true);
  });

  test('is idempotent', () => {
    const once = normalizeScipIndex(index('file:///C:/Users/dev/app/', [`src${BACKSLASH}main.ts`]), WINDOWS);
    expect(normalizeScipIndex(once, WINDOWS).equals(once)).toBe(true);
  });

  test('does not modify its input', () => {
    const input = index('file:///C:/Users/dev/app/', [`src${BACKSLASH}main.ts`]);
    const copy = Buffer.from(input);
    normalizeScipIndex(input, WINDOWS);
    expect(input.equals(copy)).toBe(true);
  });

  test('rejects input that is not a protobuf message', () => {
    expect(() => normalizeScipIndex(Buffer.from([0x0a, 0xff, 0x01]))).toThrow(/Not a SCIP index/);
    expect(() => normalizeScipIndex(Buffer.from([0x0b]))).toThrow(/Not a SCIP index/);
  });
});

describe('normalizeScipIndexFile', () => {
  test('rewrites the file in place and leaves no temporary file behind', () => {
    const dir = mkdtempSync(join(tmpdir(), 'scip-normalizer-'));
    try {
      const file = join(dir, 'index.scip');
      writeFileSync(file, index('file:///C:/Users/dev/app/', [`src${BACKSLASH}main.ts`]));
      normalizeScipIndexFile(file, WINDOWS);
      expect(readFileSync(file).equals(
        normalizeScipIndex(index('file:///C:/Users/dev/app/', [`src${BACKSLASH}main.ts`]), WINDOWS),
      )).toBe(true);
      expect(readdirSync(dir)).toEqual(['index.scip']);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
