import { github } from 'projen';

/**
 * Steps that re-run projen and fail the job if the generated output no
 * longer matches what's committed - i.e. someone hand-edited a projen
 * managed file (package.json/pom.xml/.github/workflows/*.yml/...) without
 * going through .projenrc.
 */
export function driftCheckSteps(
  projenCommand = 'npx projen',
): github.workflows.JobStep[] {
  return [
    {
      name: 'Check for projen drift',
      run: `${projenCommand}\ngit diff --exit-code`,
    },
  ];
}
