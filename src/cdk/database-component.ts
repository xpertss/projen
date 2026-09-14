import { Component, SourceCode, javascript } from 'projen';
import { DatabaseOptions } from './options';

/**
 * DB provisioning construct + migration tooling wiring. The migration tool
 * itself is left fully pluggable per the spec's open question - if
 * `migrationTool` is provided it's added as a dev dependency and left for
 * the consuming team to wire up; no opinionated default is imposed.
 */
export class DatabaseComponent extends Component {
  constructor(project: javascript.NodeProject, options: DatabaseOptions = {}) {
    super(project, 'DatabaseComponent');

    const engine = options.engine ?? 'postgres';

    if (options.migrationTool) {
      project.addDevDeps(options.migrationTool);
    }

    const src = new SourceCode(project, 'src/constructs/database.ts');
    src.line('import { Construct } from "constructs";');
    if (engine === 'dynamodb') {
      src.line('import * as dynamodb from "aws-cdk-lib/aws-dynamodb";');
    } else {
      src.line('import * as rds from "aws-cdk-lib/aws-rds";');
    }
    src.line();
    src.open('export class Database extends Construct {');
    src.line(
      engine === 'dynamodb'
        ? 'public readonly table!: dynamodb.Table;'
        : 'public readonly instance!: rds.DatabaseInstance;',
    );
    src.line();
    src.open('constructor(scope: Construct, id: string) {');
    src.line('super(scope, id);');
    src.line(
      `// TODO: provision a ${engine} ${
        engine === 'dynamodb' ? 'table' : 'instance'
      }${
        options.migrationTool
          ? ` and wire up migrations via ${options.migrationTool}`
          : ''
      }`,
    );
    src.close('}');
    src.close('}');
  }
}
