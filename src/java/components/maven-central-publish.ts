import { Component, github } from 'projen';
import { noteWorkflowPurpose } from '../../common/workflow-purpose';
import type { JavaMavenProject } from '../java-maven-base';

export interface MavenCentralPublishOptions {
  /**
   * The version published first, when the repository has no `vX.Y.Z` tag yet.
   * @default "0.1.0"
   */
  readonly version?: string;

  /**
   * When the computed release version's major is below this, the release is
   * `<minMajorVersion>.0.0`.
   * @default - unset
   */
  readonly minMajorVersion?: number;
}

const RELEASING = "steps.version.outputs.release == 'true'";
const VERSION = '${{ steps.version.outputs.version }}';
const RELEASE_VERSION_SCRIPT = 'node_modules/@xpertss/projen-types/lib/java/release-version.js';

/**
 * On-demand publish workflow to Maven Central (F028). The version is computed
 * from the commits since the last `vX.Y.Z` tag and never committed; the run
 * signs with the GPG key and uploads with the Central token, both read from
 * GitHub secrets; after a successful upload it tags the commit and creates a
 * GitHub Release. Needs the pom's `release` profile (see `JavaLibraryProject`).
 */
export class MavenCentralPublish extends Component {
  constructor(project: JavaMavenProject, options: MavenCentralPublishOptions = {}) {
    super(project, 'MavenCentralPublish');

    const gh = project.github;
    if (!gh) {
      throw new Error('MavenCentralPublish requires GitHub integration');
    }

    const minMajor = options.minMajorVersion === undefined ? '' : ` --min-major ${options.minMajorVersion}`;
    project.addTask('release:version', {
      description: 'Compute the next release version from the commits since the last tag',
      exec: `node ${RELEASE_VERSION_SCRIPT} --baseline ${options.version ?? '0.1.0'}${minMajor}`,
    });
    // The version reaches Maven through MAVEN_ARGS (Maven 3.9+), so the task
    // is the same command a developer would run by hand.
    project.addTask('publish:maven-central', {
      description: 'Sign and upload to Maven Central (needs the release profile secrets)',
      exec: 'mvn -B deploy -P release',
    });
    project.addTask('publish:maven-central:dry-run', {
      description: 'Build and sign with the release profile; uploads nothing',
      exec: 'mvn -B verify -P release',
    });

    // The build's Node and JDK steps, with the settings.xml server and the key
    // import added to the JDK step.
    const isJava = (s: github.workflows.JobStep) => s.uses?.startsWith('actions/setup-java');
    const setupJava = project.ciSetupSteps.find(isJava)!;
    const javaWithServer: github.workflows.JobStep = {
      ...setupJava,
      with: {
        ...setupJava.with,
        'server-id': 'central',
        'server-username': 'MAVEN_CENTRAL_USERNAME',
        'server-password': 'MAVEN_CENTRAL_PASSWORD',
        'gpg-private-key': '${{ secrets.MAVEN_GPG_PRIVATE_KEY }}',
        // The NAME of the env var that holds the passphrase (setup-java v6 deprecated `gpg-passphrase`).
        'gpg-passphrase-env-var': 'MAVEN_GPG_PASSPHRASE',
      },
    };

    const workflow = new github.GithubWorkflow(gh, 'publish-maven-central');
    workflow.on({
      workflowDispatch: {
        inputs: {
          version: {
            description: 'Release this version instead of computing it from the commits',
            required: false,
            type: 'string',
          },
          dry_run: {
            description: 'Build and sign only: upload nothing, tag nothing',
            required: false,
            type: 'boolean',
            default: false as unknown as string, // typed string; a boolean input needs a YAML boolean
          },
          auto_publish: {
            description: 'Release the validated bundle automatically; off leaves it in the Central Portal to publish or drop',
            required: false,
            type: 'boolean',
            default: true as unknown as string,
          },
        },
      },
    });
    workflow.addJob('publish', {
      name: 'publish',
      runsOn: ['ubuntu-latest'],
      if: "github.ref == 'refs/heads/main'",
      // Holds no secrets: it is where the owner adds reviewers and a branch rule.
      environment: 'maven-central',
      permissions: { contents: github.workflows.JobPermission.WRITE },
      steps: [
        { name: 'Checkout', uses: 'actions/checkout@v7', with: { 'fetch-depth': 0 } },
        ...project.ciSetupSteps.map((s) => (isJava(s) ? javaWithServer : s)),
        {
          name: 'Compute release version',
          id: 'version',
          env: { VERSION_OVERRIDE: '${{ inputs.version }}' },
          run: 'npx projen release:version',
        },
        {
          name: 'Refuse a SNAPSHOT version',
          if: RELEASING,
          env: { VERSION },
          run: [
            'case "$VERSION" in',
            '  *-SNAPSHOT) echo "::error::$VERSION is a snapshot; Maven Central does not take snapshots."; exit 1 ;;',
            'esac',
          ].join('\n'),
        },
        {
          name: 'Build and sign (dry run)',
          if: `${RELEASING} && inputs.dry_run`,
          env: {
            MAVEN_ARGS: `-Drevision=${VERSION} -Dchangelist=`,
            MAVEN_GPG_PASSPHRASE: '${{ secrets.MAVEN_GPG_PASSPHRASE }}',
          },
          run: 'npx projen publish:maven-central:dry-run',
        },
        {
          name: 'Publish to Maven Central',
          id: 'publish',
          if: `${RELEASING} && !inputs.dry_run`,
          env: {
            MAVEN_ARGS: `-Drevision=${VERSION} -Dchangelist= -DautoPublish=\${{ inputs.auto_publish }} -DwaitUntil=\${{ inputs.auto_publish && 'published' || 'validated' }}`,
            MAVEN_GPG_PASSPHRASE: '${{ secrets.MAVEN_GPG_PASSPHRASE }}',
            MAVEN_CENTRAL_USERNAME: '${{ secrets.MAVEN_CENTRAL_USERNAME }}',
            MAVEN_CENTRAL_PASSWORD: '${{ secrets.MAVEN_CENTRAL_PASSWORD }}',
          },
          run: 'npx projen publish:maven-central',
        },
        // Only after the upload succeeded: a released version is permanent, and
        // a tag made first would make the next run skip it if the upload failed.
        {
          name: 'Tag and create the GitHub Release',
          if: `${RELEASING} && !inputs.dry_run && inputs.auto_publish`,
          env: { VERSION, GH_TOKEN: '${{ github.token }}' },
          run: [
            'git config user.name "github-actions[bot]"',
            'git config user.email "41898282+github-actions[bot]@users.noreply.github.com"',
            'git tag -a "v$VERSION" -m "v$VERSION" "$GITHUB_SHA"',
            'git push origin "v$VERSION"',
            'gh release create "v$VERSION" --verify-tag --title "v$VERSION" --generate-notes',
          ].join('\n'),
        },
        {
          name: 'Print the tag command',
          if: `${RELEASING} && !inputs.dry_run && !inputs.auto_publish`,
          env: { VERSION },
          run: [
            'echo "The bundle is validated, not released. Publish or drop it in the Central Portal."',
            'echo "After publishing, tag it:"',
            'echo "  git tag -a v$VERSION -m v$VERSION $GITHUB_SHA && git push origin v$VERSION"',
          ].join('\n'),
        },
      ],
    });
    noteWorkflowPurpose(
      workflow.file,
      'Publish the library to Maven Central on demand: sign, upload, then tag and create the GitHub Release.',
    );
  }
}
