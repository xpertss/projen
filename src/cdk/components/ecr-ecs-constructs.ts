import { Component, SourceCode } from 'projen';
import type { Project } from 'projen';
import { EcrEcsOptions } from '../options';

/**
 * Reusable construct helper for an ECR repo + Fargate ECS cluster/service
 * standing up a container image. `externalImageSource` controls whether the
 * service pulls an externally-published image (infra-only projects) or one
 * built from this project's own source (app projects).
 */
export class EcrEcsConstructs extends Component {
  constructor(project: Project, options: EcrEcsOptions = {}) {
    super(project, 'EcrEcsConstructs');

    const externalImageSource = options.externalImageSource ?? true;
    const src = new SourceCode(project, 'src/constructs/ecr-ecs.ts');

    src.line('import { Construct } from "constructs";');
    src.line('import * as ecr from "aws-cdk-lib/aws-ecr";');
    src.line('import * as ecs from "aws-cdk-lib/aws-ecs";');
    src.line();
    src.open('export interface EcrEcsServiceProps {');
    src.line('readonly vpcId?: string;');
    src.line(
      externalImageSource
        ? 'readonly imageTag?: string; // externally-built image tag to deploy'
        : "readonly imageDirectory: string; // path to a Dockerfile built from this project's source",
    );
    src.close('}');
    src.line();
    src.open(
      'export class EcrEcsService extends Construct {',
    );
    src.line('public readonly repository: ecr.IRepository;');
    src.line('public readonly cluster: ecs.Cluster;');
    src.line();
    src.open('constructor(scope: Construct, id: string, props: EcrEcsServiceProps) {');
    src.line('super(scope, id);');
    src.line();
    src.line(
      externalImageSource
        ? 'this.repository = ecr.Repository.fromRepositoryName(this, "Repository", id);'
        : 'this.repository = new ecr.Repository(this, "Repository");',
    );
    src.line('this.cluster = new ecs.Cluster(this, "Cluster");');
    src.line('// TODO: wire up a FargateTaskDefinition/FargateService using this.repository');
    src.close('}');
    src.close('}');
  }
}
