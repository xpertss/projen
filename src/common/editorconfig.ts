import { Project, TextFile } from 'projen';

/**
 * Writes the projen-managed `.editorconfig` every project type shares:
 * UTF-8, LF, final newline, trimmed trailing whitespace, 4-space indent,
 * 2-space for web/config formats, no trimming in Markdown (trailing spaces
 * are a line break there), and tabs in Makefiles (which require them).
 *
 * The generated-file marker comes from `file.marker`: never write projen's
 * marker text literally in `.projenrc.ts`, because projen deletes any file
 * containing it as an orphaned generated file - including the projenrc.
 */
export function addEditorConfig(project: Project): TextFile {
  const file = new TextFile(project, '.editorconfig');
  if (file.marker) {
    file.addLine(`# ${file.marker}`);
  }
  for (const line of [
    'root = true',
    '',
    '[*]',
    'charset = utf-8',
    'end_of_line = lf',
    'insert_final_newline = true',
    'trim_trailing_whitespace = true',
    'indent_style = space',
    'indent_size = 4',
    '',
    '[*.{ts,js,json,yml,yaml,vue,css,html}]',
    'indent_size = 2',
    '',
    '[*.md]',
    'trim_trailing_whitespace = false',
    '',
    '[Makefile]',
    'indent_style = tab',
  ]) {
    file.addLine(line);
  }
  return file;
}
