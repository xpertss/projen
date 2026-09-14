import { Component, TextFile } from 'projen';
import type { java } from 'projen';

/** Adds Flyway config/dependencies + a migrations directory for DB migrations. */
export class FlywayMigration extends Component {
  constructor(project: java.JavaProject) {
    super(project, 'FlywayMigration');

    project.pom.addPlugin('org.flywaydb/flyway-maven-plugin@^10');
    project.pom.addDependency('org.flywaydb/flyway-core@^10');

    new TextFile(project, 'src/main/resources/db/migration/V1__init.sql', {
      lines: ['-- Add your first migration here.'],
    });
  }
}
