import { CodeIndexWorkflow } from './components/code-index-workflow';
import { MavenCentralPublish } from './components/maven-central-publish';
import { JavaMavenProject } from './java-maven-base';
import { JavaLibraryProjectOptions } from './options';

/** Reusable Java library, published to Maven Central. */
export class JavaLibraryProject extends JavaMavenProject {
  constructor(options: JavaLibraryProjectOptions) {
    super(options);

    new MavenCentralPublish(this, { mavenCentralOidc: options.mavenCentralOidc });

    if (options.publishCodeIndex ?? true) {
      new CodeIndexWorkflow(this);
    }
  }
}
