import { CdkDeployHook } from './components/cdk-deploy-hook';
import { DockerPublish } from './components/docker-publish';
import { FlywayMigration } from './components/flyway-migration';
import { JavaSpringBootProject } from './java-spring-boot-project';
import { MavenModule } from './maven/maven-module';
import { JavaServiceProjectOptions, MavenModuleOptions } from './options';

/**
 * Spring Boot service application deployed as a container:
 * `JavaSpringBootProject` plus Docker publishing (Docker Hub by default -
 * never Maven Central), Flyway, and a CDK deploy hook. Publish and deploy
 * are both manual-dispatch, not on every merge.
 *
 * Single-module only: the Docker build, Flyway migrations and deploy hook
 * all assume one deployable at the repo root. For a multi-module Spring Boot
 * repo use `JavaSpringBootProject`.
 */
export class JavaServiceProject extends JavaSpringBootProject {
  constructor(options: JavaServiceProjectOptions) {
    super(options);

    this.addDependency('org.springframework.boot/spring-boot-starter-web');

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

  /**
   * Not supported: `JavaServiceProject` is single-module. Use
   * `JavaSpringBootProject` for a multi-module Spring Boot repo.
   */
  public addModule(_options: MavenModuleOptions): MavenModule {
    throw new Error(
      'JavaServiceProject is single-module (its Docker build, Flyway migrations and deploy hook assume one deployable at the repo root). Use JavaSpringBootProject for a multi-module Spring Boot repo.',
    );
  }
}
