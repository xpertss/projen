import { Component, SourceCode } from 'projen';
import type { Project } from 'projen';
import { EdgeResource } from '../options';

const IMPORTS: Record<EdgeResource, string> = {
  cloudfront: 'import * as cloudfront from "aws-cdk-lib/aws-cloudfront";',
  route53: 'import * as route53 from "aws-cdk-lib/aws-route53";',
  apigateway: 'import * as apigateway from "aws-cdk-lib/aws-apigateway";',
  cognito: 'import * as cognito from "aws-cdk-lib/aws-cognito";',
  sqs: 'import * as sqs from "aws-cdk-lib/aws-sqs";',
};

const HELPERS: Record<EdgeResource, string[]> = {
  cloudfront: [
    'export function addDistribution(scope: Construct, id: string, props: cloudfront.DistributionProps) {',
    '  return new cloudfront.Distribution(scope, id, props);',
    '}',
  ],
  route53: [
    'export function importHostedZone(scope: Construct, id: string, zoneName: string) {',
    '  return route53.HostedZone.fromLookup(scope, id, { domainName: zoneName });',
    '}',
  ],
  apigateway: [
    'export function addRestApi(scope: Construct, id: string, props?: apigateway.RestApiProps) {',
    '  return new apigateway.RestApi(scope, id, props);',
    '}',
  ],
  cognito: [
    'export function addUserPool(scope: Construct, id: string, props?: cognito.UserPoolProps) {',
    '  return new cognito.UserPool(scope, id, props);',
    '}',
  ],
  sqs: [
    'export function addQueue(scope: Construct, id: string, props?: sqs.QueueProps) {',
    '  return new sqs.Queue(scope, id, props);',
    '}',
  ],
};

/**
 * Construct helpers for CloudFront/Route53/API Gateway/Cognito/SQS, scoped
 * to whichever `edgeResources` the consuming project type opts into.
 */
export class EdgeNetworkingConstructs extends Component {
  constructor(project: Project, resources: EdgeResource[]) {
    super(project, 'EdgeNetworkingConstructs');

    if (resources.length === 0) {
      return;
    }

    const src = new SourceCode(project, 'src/constructs/edge-networking.ts');
    src.line('import { Construct } from "constructs";');
    for (const resource of resources) {
      src.line(IMPORTS[resource]);
    }
    src.line();
    for (const resource of resources) {
      for (const line of HELPERS[resource]) {
        src.line(line);
      }
      src.line();
    }
  }
}
