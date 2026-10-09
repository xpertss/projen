import {
  CdkAppProject,
  CdkInfraProject,
  GitHubActionProject,
  JavaAppProject,
  JavaLibraryProject,
  JavaMavenProject,
  JavaServiceProject,
  JavaSpringBootProject,
} from '../../src';
import { synthSnapshot } from '../util';

const JAVA_BASE = { name: 'maven-test', groupId: 'com.example', artifactId: 'maven-test' };

// Every `uses:` this package generates must resolve: no placeholder refs and
// no third-party action left unredirected, in any project type.
const TYPES: Record<string, () => any> = {
  CdkInfraProject: () => new CdkInfraProject({ name: 'infra-test', environments: [] }),
  CdkAppProject: () => new CdkAppProject({ name: 'app-test', environments: [] }),
  JavaMavenProject: () => new JavaMavenProject(JAVA_BASE),
  JavaServiceProject: () => new JavaServiceProject(JAVA_BASE),
  JavaAppProject: () => new JavaAppProject(JAVA_BASE),
  JavaSpringBootProject: () => new JavaSpringBootProject(JAVA_BASE),
  JavaLibraryProject: () => new JavaLibraryProject(JAVA_BASE),
  GitHubActionProject: () => new GitHubActionProject({ name: 'action-test' }),
};

describe.each(Object.keys(TYPES))('%s', (type) => {
  test('synthesizes no placeholder or third-party action ref', () => {
    const all = JSON.stringify(synthSnapshot(TYPES[type]()));
    expect(all).not.toContain('PLACEHOLDER_SHA');
    expect(all).not.toContain('peter-evans/');
    expect(all).not.toContain('stefanzweifel/');
  });
});
