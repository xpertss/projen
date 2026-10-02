import { github } from 'projen';

/**
 * Node setup for workflows that run `npx projen`. Pinned, not `lts/*` - a
 * floating version can resolve a different npm than whatever generated the
 * committed package-lock.json, and `npm ci` then fails on optional-
 * dependency drift that isn't a real dependency bug.
 */
export const SETUP_NODE_STEP: github.workflows.JobStep = {
  name: 'Setup Node',
  uses: 'actions/setup-node@v7',
  with: { 'node-version': '24' },
};

/**
 * `npm ci`, which needs a committed `package-lock.json`. Without one, `npm
 * ci` fails with a message that doesn't say what to do, so the missing
 * lockfile is reported first, as an annotation. `--ignore-scripts` keeps
 * dependency lifecycle scripts from running on PR code; projen synth
 * doesn't need them.
 */
export const NPM_CI_STEP: github.workflows.JobStep = {
  name: 'Install dependencies',
  run: [
    'if [ ! -f package-lock.json ]; then',
    '  echo "::error file=package.json::package-lock.json is not committed. Run npm install, commit package-lock.json, and push."',
    '  exit 1',
    'fi',
    'npm ci --ignore-scripts',
  ].join('\n'),
};
