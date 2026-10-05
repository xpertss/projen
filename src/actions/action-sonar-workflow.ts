import { github } from 'projen';
import { SonarWorkflow, SonarWorkflowOptions } from '../common/sonar-workflow';

/**
 * @deprecated Renamed to `SonarWorkflow` (now in `src/common/` and applied to
 * every project type, not just actions). Use `SonarWorkflow` instead; this
 * subclass is kept only so existing imports of `ActionSonarWorkflow` keep
 * compiling. It behaves identically to `SonarWorkflow`.
 */
export class ActionSonarWorkflow extends SonarWorkflow {
  constructor(scope: github.GitHubProject, options: SonarWorkflowOptions) {
    super(scope, options);
  }
}

/** @deprecated Renamed to `SonarWorkflowOptions`. */
export type ActionSonarWorkflowOptions = SonarWorkflowOptions;
