import { CodeIndexWorkflow } from './components/code-index-workflow';
import { MavenCentralPublish } from './components/maven-central-publish';
import { JavaMavenProject } from './java-maven-base';
import { MAVEN_JAVADOC_PLUGIN, MAVEN_SOURCE_PLUGIN } from './java-versions';
import { JavaLibraryProjectOptions } from './options';

/**
 * Reusable Java library, published to Maven Central. Single- or
 * multi-module; attaches the source and javadoc jars Central requires (in a
 * reactor, every module inherits them).
 */
export class JavaLibraryProject extends JavaMavenProject {
  constructor(options: JavaLibraryProjectOptions) {
    super(options);

    this.addPlugin(`${MAVEN_SOURCE_PLUGIN}@${this.pinnedVersion(MAVEN_SOURCE_PLUGIN)}`, {
      executions: [{ id: 'attach-sources', goals: ['jar-no-fork'] }],
    });
    this.addPlugin(`${MAVEN_JAVADOC_PLUGIN}@${this.pinnedVersion(MAVEN_JAVADOC_PLUGIN)}`, {
      executions: [{ id: 'attach-javadocs', goals: ['jar'] }],
    });

    new MavenCentralPublish(this, { mavenCentralOidc: options.mavenCentralOidc });

    if (options.publishCodeIndex ?? true) {
      new CodeIndexWorkflow(this);
    }
  }
}
