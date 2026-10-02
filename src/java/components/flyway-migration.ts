import { Component, TextFile } from 'projen';
import type { JavaSpringBootProject } from '../java-spring-boot-project';
import { FLYWAY_MAVEN_PLUGIN } from '../java-versions';

/**
 * Adds Flyway config/dependencies + a migrations directory for DB
 * migrations. `flyway-core` is versionless - Spring Boot's BOM manages it, so
 * it always matches what Boot's Flyway auto-configuration expects. The Maven
 * plugin (which Boot's BOM does not manage) is pinned for the Java line.
 */
export class FlywayMigration extends Component {
  constructor(project: JavaSpringBootProject) {
    super(project, 'FlywayMigration');

    project.addPlugin(`${FLYWAY_MAVEN_PLUGIN}@${project.pinnedVersion(FLYWAY_MAVEN_PLUGIN)}`);
    project.addDependency('org.flywaydb/flyway-core');

    new TextFile(project, 'src/main/resources/db/migration/V1__init.sql', {
      lines: ['-- Add your first migration here.'],
    });
  }
}
