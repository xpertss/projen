import { GitHubPackagesPublish } from './components/github-packages-publish';
import { JavaMavenProject } from './java-maven-base';
import { JavaAppProjectOptions } from './options';

/**
 * GUI/TUI/CLI Java application. Publishes to GitHub Packages only -
 * explicitly excludes Maven Central, Docker, and CDK deploy hooks.
 */
export class JavaAppProject extends JavaMavenProject {
  constructor(options: JavaAppProjectOptions) {
    super(options);

    new GitHubPackagesPublish(this, {
      ghPackagesRegistry: options.ghPackagesRegistry,
    });
  }
}
