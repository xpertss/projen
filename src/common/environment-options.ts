/**
 * A single named deployment target used by manual-dispatch deploy workflows.
 */
export interface EnvironmentOptions {
  /** Environment name, e.g. "dev", "stage", "prod". */
  readonly name: string;

  /** AWS account id to deploy into, if relevant to the deploy steps used. */
  readonly accountId?: string;

  /** AWS region to deploy into, if relevant to the deploy steps used. */
  readonly region?: string;

  /**
   * Whether this environment requires a GitHub Environment approval gate
   * before the deploy job is allowed to run.
   *
   * @default false
   */
  readonly requiresApproval?: boolean;
}

export function normalizeEnvironments(
  environments: (string | EnvironmentOptions)[],
): EnvironmentOptions[] {
  return environments.map((env) =>
    typeof env === 'string' ? { name: env } : env,
  );
}
