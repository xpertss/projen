import * as fs from 'fs';
import * as path from 'path';
import { Project, TextFile } from 'projen';

const LICENSE_NAMES: Record<string, string> = {
  MIT: 'MIT License',
};

/**
 * Write a `LICENSE` file that prepends a human-readable license name header
 * (e.g. `MIT License`) before the standard SPDX copyright + grant text.
 */
export function addLicenseFile(
  project: Project,
  options: {
    readonly spdx: string;
    readonly copyrightOwner?: string;
    readonly copyrightPeriod?: string;
  },
): void {
  const spdx = options.spdx;
  const licenseDir = path.join(path.dirname(require.resolve('projen')), '..', 'license-text');
  const templatePath = path.join(licenseDir, `${spdx}.txt`);

  if (!fs.existsSync(templatePath)) {
    throw new Error(`unsupported license ${spdx}`);
  }

  const years = options.copyrightPeriod ?? new Date().getFullYear().toString();
  const owner = options.copyrightOwner;

  let text = fs.readFileSync(templatePath, 'utf-8');
  text = text.replace(/\$copyright_period/g, years);

  if (text.indexOf('$copyright_owner') !== -1) {
    if (!owner) {
      throw new Error(`The ${spdx} license requires "copyrightOwner" to be specified`);
    }
    text = text.replace(/\$copyright_owner/g, owner);
  }

  const header = LICENSE_NAMES[spdx] ?? spdx;
  const lines = text.trim().split('\n');

  new TextFile(project, 'LICENSE', {
    marker: false,
    committed: true,
    lines: [header, '', ...lines],
  });
}
