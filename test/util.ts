import { Project, Testing } from 'projen';
import * as YAML from 'yaml';

/**
 * Synthesizes a project in-memory and returns a map of filePath -> contents.
 * JSON files come back parsed as objects; YAML files are parsed here (projen
 * only auto-parses JSON-like files); everything else is a raw string.
 */
export function synthSnapshot(project: Project): Record<string, any> {
  const snapshot = Testing.synth(project);
  for (const [filePath, contents] of Object.entries(snapshot)) {
    if (
      (filePath.endsWith('.yml') || filePath.endsWith('.yaml')) &&
      typeof contents === 'string'
    ) {
      snapshot[filePath] = YAML.parse(contents);
    }
  }
  return snapshot;
}
