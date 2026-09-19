import { CdkDeployHook } from './components/cdk-deploy-hook';
import { DockerPublish } from './components/docker-publish';
import { FlywayMigration } from './components/flyway-migration';
import { JavaMavenProject } from './java-maven-base';
import { JavaServiceProjectOptions } from './options';

/**
 * Springboot service application. Publishes to Docker Hub (never Maven
 * Central); publish and deploy are both manual-dispatch, not on every merge.
 */
export class JavaServiceProject extends JavaMavenProject {
  constructor(options: JavaServiceProjectOptions) {
    super(options);

    this.pom.addDependency('org.springframework.boot/spring-boot-starter-web@^3');

    new DockerPublish(this, { dockerRegistry: options.dockerRegistry });

    if (options.useFlyway ?? true) {
      new FlywayMigration(this);
    }

    if (options.cdkDeployHook ?? true) {
      new CdkDeployHook(this, options.environments ?? ['prod'], {
        targetRepo: options.cdkDeployTargetRepo,
      });
    }
  }
}
