import { Component, SourceCode, javascript } from 'projen';

/**
 * Full TypeScript application source structure (handlers/business logic),
 * layered on top of `CdkTypescriptProject`'s pure-infra scaffold.
 */
export class AppRuntimeScaffold extends Component {
  constructor(project: javascript.NodeProject, appEntryPoint = 'src/app.ts') {
    super(project, 'AppRuntimeScaffold');

    const app = new SourceCode(project, appEntryPoint);
    app.line('export function handler() {');
    app.line('  // TODO: implement application entrypoint');
    app.line('}');

    const handler = new SourceCode(project, 'src/handlers/example.ts');
    handler.line(
      'import type { APIGatewayProxyHandler } from "aws-lambda";',
    );
    handler.line();
    handler.open('export const exampleHandler: APIGatewayProxyHandler = async (event) => {');
    handler.line('return {');
    handler.line('  statusCode: 200,');
    handler.line('  body: JSON.stringify({ message: "ok" }),');
    handler.line('};');
    handler.close('};');

    project.addDevDeps('@types/aws-lambda');
  }
}
