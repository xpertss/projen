import { JavaServiceProject, JavaSpringBootProject, JavaSpringBootProjectOptions } from '../../src';
import { synthSnapshot } from '../util';

const BASE: JavaSpringBootProjectOptions = {
  name: 'boot-test',
  groupId: 'com.example',
  artifactId: 'boot-test',
};

describe('single-module', () => {
  const snapshot = synthSnapshot(new JavaSpringBootProject({ ...BASE }));
  const pom: string = snapshot['pom.xml'];

  test('imports the Spring Boot BOM (current line) instead of junit-bom', () => {
    expect(pom).toMatch(
      /<artifactId>spring-boot-dependencies<\/artifactId>\s*<version>4\.1\.1<\/version>\s*<type>pom<\/type>\s*<scope>import<\/scope>/,
    );
    expect(pom).not.toContain('junit-bom');
    expect(pom).toMatch(/<artifactId>junit-jupiter<\/artifactId>\s*<scope>test<\/scope>/);
  });

  test('repackages the root jar with a managed spring-boot-maven-plugin', () => {
    expect(pom).toMatch(/spring-boot-maven-plugin<\/artifactId>\s*<version>4\.1\.1<\/version>/);
    expect(pom).toMatch(/<id>repackage<\/id>\s*<goals>\s*<goal>repackage<\/goal>/);
  });

  test('failsafe tests against the classes, not the repackaged jar', () => {
    expect(pom).toContain('<classesDirectory>${project.build.outputDirectory}</classesDirectory>');
  });

  test('no Docker, Flyway or CDK, and no starters assumed', () => {
    expect(snapshot['.github/workflows/publish-docker.yml']).toBeUndefined();
    expect(snapshot['.github/workflows/deploy-cdk.yml']).toBeUndefined();
    expect(Object.keys(snapshot).filter((f) => f.includes('db/migration'))).toEqual([]);
    expect(pom).not.toContain('flyway');
    expect(pom).not.toContain('spring-boot-starter');
  });
});

describe('multi-module', () => {
  const project = new JavaSpringBootProject({ ...BASE, artifactId: 'parent', version: '0.1.0-SNAPSHOT' });
  const model = project.addModule({ dir: 'model', artifactId: 'model' });
  const server = project.addSpringBootModule({ dir: 'server', artifactId: 'server' });
  server.addModuleDependency(model);
  server.addDependency('org.springframework.boot/spring-boot-starter-web');
  project.addBom('org.testcontainers/testcontainers-bom@1.21.3');
  const snapshot = synthSnapshot(project);
  const parent: string = snapshot['pom.xml'];

  test('parent and Boot module pom snapshots', () => {
    expect(parent).toMatchSnapshot();
    expect(snapshot['server/pom.xml']).toMatchSnapshot();
  });

  test('Spring Boot BOM is the first BOM', () => {
    const boms = [...parent.matchAll(/<artifactId>([^<]+)<\/artifactId>\s*<version>[^<]+<\/version>\s*<type>pom<\/type>/g)].map(
      (m) => m[1],
    );
    expect(boms).toEqual(['spring-boot-dependencies', 'testcontainers-bom']);
  });

  test('only addSpringBootModule modules are repackaged; the parent is not', () => {
    expect(snapshot['server/pom.xml']).toMatch(/spring-boot-maven-plugin<\/artifactId>\s*<executions>/);
    expect(snapshot['model/pom.xml']).not.toContain('spring-boot-maven-plugin');
    expect(parent).not.toContain('<goal>repackage</goal>');
    const management = parent.slice(parent.indexOf('<pluginManagement>'), parent.indexOf('</pluginManagement>'));
    expect(management).toMatch(/spring-boot-maven-plugin<\/artifactId>\s*<version>4\.1\.1</);
  });

  test('Boot-managed starters stay versionless', () => {
    expect(snapshot['server/pom.xml']).toMatch(/spring-boot-starter-web<\/artifactId>\s*<\/dependency>/);
  });
});

describe('Spring Boot and the Java line', () => {
  test('javaVersion 1.8 defaults to the Spring Boot 2.7 line and JUnit from its BOM', () => {
    const pom = synthSnapshot(new JavaSpringBootProject({ ...BASE, javaVersion: '1.8' }))['pom.xml'];
    expect(pom).toMatch(/spring-boot-dependencies<\/artifactId>\s*<version>2\.7\.18</);
    expect(pom).toContain('<maven.compiler.source>1.8</maven.compiler.source>');
  });

  test('Spring Boot 3+ on javaVersion 1.8 fails with the conflict named', () => {
    expect(
      () => new JavaSpringBootProject({ ...BASE, javaVersion: '1.8', springBootVersion: '3.5.16' }),
    ).toThrow(/Spring Boot 3\.5\.16 does not run on javaVersion 1\.8/);
  });

  test('an explicit springBootVersion overrides the default; ranges fail', () => {
    const pom = synthSnapshot(new JavaSpringBootProject({ ...BASE, springBootVersion: '3.5.16' }))['pom.xml'];
    expect(pom).toMatch(/spring-boot-dependencies<\/artifactId>\s*<version>3\.5\.16</);
    expect(() => new JavaSpringBootProject({ ...BASE, springBootVersion: '^3' })).toThrow(/not an exact version/);
  });
});

describe('JavaServiceProject on top of JavaSpringBootProject', () => {
  test('is a JavaSpringBootProject with Docker, Flyway and the deploy hook', () => {
    const project = new JavaServiceProject({ ...BASE });
    expect(project).toBeInstanceOf(JavaSpringBootProject);
    const snapshot = synthSnapshot(project);
    const pom: string = snapshot['pom.xml'];
    expect(pom).toMatch(/spring-boot-starter-web<\/artifactId>\s*<\/dependency>/);
    // flyway-core is managed by the Boot BOM; the plugin (which it doesn't manage) is pinned
    expect(pom).toMatch(/flyway-core<\/artifactId>\s*<\/dependency>/);
    expect(pom).toMatch(/flyway-maven-plugin<\/artifactId>\s*<version>13\.9\.0</);
    expect(snapshot['.github/workflows/publish-docker.yml']).toBeDefined();
  });

  test('Flyway plugin follows the Java line', () => {
    const pom = synthSnapshot(new JavaServiceProject({ ...BASE, javaVersion: '1.8' }))['pom.xml'];
    expect(pom).toMatch(/flyway-maven-plugin<\/artifactId>\s*<version>9\.22\.3</);
  });

  test('is single-module: addModule fails and points to JavaSpringBootProject', () => {
    expect(() => new JavaServiceProject({ ...BASE }).addModule({ dir: 'a', artifactId: 'a' })).toThrow(
      /Use JavaSpringBootProject/,
    );
    expect(() => new JavaServiceProject({ ...BASE }).addSpringBootModule({ dir: 'a', artifactId: 'a' })).toThrow(
      /Use JavaSpringBootProject/,
    );
  });
});
