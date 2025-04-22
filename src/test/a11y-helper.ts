
import { AxeResults, Rule, RunOptions, source } from 'axe-core';
import React from 'react';
import { render } from '@testing-library/react';

// Import axe-core dynamically to avoid ESM/CJS issues
const axePromise = import('axe-core').then(module => module.default || module);

/**
 * Custom function to run accessibility tests on a React component
 * 
 * @param ui The React component to test
 * @param options Optional axe-core configuration
 * @returns Promise that resolves to axe results
 */
export async function runA11yTest(
  ui: React.ReactElement,
  options?: RunOptions
): Promise<AxeResults> {
  const axe = await axePromise;
  const container = render(ui).container;
  
  return await axe.run(container, options);
}

/**
 * Check if the component has any accessibility violations
 * 
 * @param results The results from runA11yTest
 * @returns True if there are no violations
 */
export function hasNoViolations(results: AxeResults): boolean {
  return results.violations.length === 0;
}

/**
 * Format accessibility violations for better readability in test output
 * 
 * @param results The results from runA11yTest
 * @returns Formatted string with violation details
 */
export function formatViolations(results: AxeResults): string {
  if (results.violations.length === 0) {
    return 'No accessibility violations found.';
  }

  return results.violations
    .map(violation => {
      const nodeInfo = violation.nodes
        .map(node => {
          const selector = node.target.join(', ');
          const html = node.html;
          return `\n  - Element: ${selector}\n    HTML: ${html}\n    Fix: ${node.failureSummary}`;
        })
        .join('\n');

      return `\nRule: ${violation.id} - ${violation.help}\nImpact: ${violation.impact}\nDescription: ${violation.description}\nElements:${nodeInfo}\n`;
    })
    .join('\n');
}

/**
 * Custom Vitest matcher for accessibility testing
 */
export const toHaveNoViolations = {
  async compare(results: AxeResults) {
    const pass = hasNoViolations(results);
    const message = pass
      ? () => 'Expected accessibility violations but none were found.'
      : () => formatViolations(results);

    return {
      pass,
      message,
    };
  },
};
