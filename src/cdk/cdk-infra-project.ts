import { CdkTypescriptProject } from './cdk-typescript-base';
import { EcrEcsConstructs } from './components/ecr-ecs-constructs';
import { EdgeNetworkingConstructs } from './components/edge-networking-constructs';
import { CdkInfraProjectOptions } from './options';

/**
 * Pure infrastructure CDK stacks - little or no application code
 * (CloudFront, Route53, SQS, API Gateway, Cognito, ECR/ECS standing up
 * externally-built images). Reference example: SimulcastAVDelivery.
 */
export class CdkInfraProject extends CdkTypescriptProject {
  constructor(options: CdkInfraProjectOptions) {
    super(options);

    if (options.ecrEcs?.enabled) {
      new EcrEcsConstructs(this, options.ecrEcs);
    }

    if (options.edgeResources && options.edgeResources.length > 0) {
      new EdgeNetworkingConstructs(this, options.edgeResources);
    }
  }
}
