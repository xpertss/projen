import { readFileSync, renameSync, writeFileSync } from 'node:fs';

/**
 * Makes a generated SCIP index independent of the machine that generated it,
 * so the same sources always give the same bytes (and a committed
 * `.xss/index.scip` does not change just because another developer, or CI,
 * rebuilt it).
 *
 * Two things differ by machine, and both are fixed here:
 *
 * - `Metadata.project_root` is the absolute path of the directory that was
 *   indexed. It is replaced with {@link NORMALIZED_PROJECT_ROOT}. A consumer
 *   that reads file contents joins `project_root` and `Document.relative_path`,
 *   so it has to substitute its own checkout path for this placeholder.
 * - `scip-typescript` writes `Document.relative_path` with the platform path
 *   separator, but the SCIP schema requires `/` "including on Windows". On
 *   Windows the backslashes are replaced with `/`.
 *
 * The index is edited at the protobuf wire level: only the two fields above
 * are re-encoded, every other byte is copied unchanged, so no schema or
 * protobuf library is needed.
 *
 * Run as a script: `node scip-index-normalizer.js <index.scip>`.
 */

/** Stands in for the absolute project root, which differs by machine. */
export const NORMALIZED_PROJECT_ROOT = 'file:///workspace/';

// Field numbers in scip.proto.
const INDEX_METADATA = 1;
const INDEX_DOCUMENTS = 2;
const METADATA_PROJECT_ROOT = 3;
const DOCUMENT_RELATIVE_PATH = 1;

const WIRE_VARINT = 0;
const WIRE_FIXED64 = 1;
const WIRE_LENGTH_DELIMITED = 2;
const WIRE_FIXED32 = 5;

const BACKSLASH = String.fromCharCode(92);

interface Field {
  readonly number: number;
  readonly wire: number;
  /** The payload of a length-delimited field (empty for the other wire types). */
  readonly payload: Buffer;
  /** The field exactly as it appears in the input, tag and length included. */
  readonly raw: Buffer;
}

function readVarint(buf: Buffer, pos: number): [number, number] {
  let value = 0;
  let scale = 1;
  for (let i = pos; i < buf.length; i++) {
    const byte = buf[i];
    value += (byte % 128) * scale;
    if (byte < 0x80) {
      return [value, i + 1];
    }
    scale *= 128;
  }
  throw new Error('Not a SCIP index: truncated varint');
}

function writeVarint(value: number): Buffer {
  const bytes: number[] = [];
  let rest = value;
  while (rest >= 0x80) {
    bytes.push((rest % 128) + 128);
    rest = Math.floor(rest / 0x80);
  }
  bytes.push(rest);
  return Buffer.from(bytes);
}

function* fields(buf: Buffer): Generator<Field> {
  let pos = 0;
  while (pos < buf.length) {
    const start = pos;
    const [tag, afterTag] = readVarint(buf, pos);
    const number = Math.floor(tag / 8);
    const wire = tag % 8;
    let payload: Buffer = Buffer.alloc(0);
    switch (wire) {
      case WIRE_VARINT:
        pos = readVarint(buf, afterTag)[1];
        break;
      case WIRE_FIXED64:
        pos = afterTag + 8;
        break;
      case WIRE_FIXED32:
        pos = afterTag + 4;
        break;
      case WIRE_LENGTH_DELIMITED: {
        const [length, afterLength] = readVarint(buf, afterTag);
        pos = afterLength + length;
        payload = buf.subarray(afterLength, pos);
        break;
      }
      default:
        throw new Error(`Not a SCIP index: unsupported wire type ${wire}`);
    }
    if (pos > buf.length) {
      throw new Error('Not a SCIP index: truncated field');
    }
    yield { number, wire, payload, raw: buf.subarray(start, pos) };
  }
}

function lengthDelimited(number: number, payload: Buffer): Buffer {
  return Buffer.concat([
    writeVarint(number * 8 + WIRE_LENGTH_DELIMITED),
    writeVarint(payload.length),
    payload,
  ]);
}

/** Copies `buf`, replacing each field for which `replace` returns a new encoding. */
function rewrite(buf: Buffer, replace: (field: Field) => Buffer | undefined): Buffer {
  const parts: Buffer[] = [];
  for (const field of fields(buf)) {
    parts.push(replace(field) ?? field.raw);
  }
  return Buffer.concat(parts);
}

export interface NormalizeOptions {
  /**
   * Replace `\` with `/` in document paths. Set it only when the index was
   * generated on Windows: on other platforms `\` is a legal file name
   * character.
   */
  readonly windowsPaths?: boolean;
}

/** Returns the normalized index; the input is not modified. */
export function normalizeScipIndex(index: Buffer, options: NormalizeOptions = {}): Buffer {
  const fixPath = (path: Buffer) =>
    options.windowsPaths ? Buffer.from(path.toString('utf8').split(BACKSLASH).join('/')) : path;

  return rewrite(index, (field) => {
    if (field.wire !== WIRE_LENGTH_DELIMITED) {
      return undefined;
    }
    if (field.number === INDEX_METADATA) {
      return lengthDelimited(
        INDEX_METADATA,
        rewrite(field.payload, (meta) =>
          meta.number === METADATA_PROJECT_ROOT && meta.wire === WIRE_LENGTH_DELIMITED
            ? lengthDelimited(METADATA_PROJECT_ROOT, Buffer.from(NORMALIZED_PROJECT_ROOT))
            : undefined,
        ),
      );
    }
    if (field.number === INDEX_DOCUMENTS) {
      return lengthDelimited(
        INDEX_DOCUMENTS,
        rewrite(field.payload, (doc) =>
          doc.number === DOCUMENT_RELATIVE_PATH && doc.wire === WIRE_LENGTH_DELIMITED
            ? lengthDelimited(DOCUMENT_RELATIVE_PATH, fixPath(doc.payload))
            : undefined,
        ),
      );
    }
    return undefined;
  });
}

/**
 * Normalizes the index file in place (the new content is written to a
 * neighbouring file first, then moved over the original).
 */
export function normalizeScipIndexFile(path: string, options: NormalizeOptions = {}): void {
  const normalized = normalizeScipIndex(readFileSync(path), options);
  const tmp = `${path}.tmp`;
  writeFileSync(tmp, normalized);
  renameSync(tmp, path);
}

if (require.main === module) {
  const path = process.argv[2];
  if (!path) {
    console.error('usage: node scip-index-normalizer.js <index.scip>');
    process.exit(2);
  }
  try {
    normalizeScipIndexFile(path, { windowsPaths: process.platform === 'win32' });
  } catch (error) {
    console.error(`${path}: ${(error as Error).message}`);
    process.exit(1);
  }
}
