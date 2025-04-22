
import "@testing-library/jest-dom";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// Extend Vitest's expect method with jest-dom matchers
expect.extend(matchers);

// Set up console warnings for a11y issues during all tests
const originalWarn = console.warn;
console.warn = (...args) => {
  // Filter out React-specific warnings that we don't care about in tests
  if (
    typeof args[0] === 'string' && 
    (args[0].includes('React does not recognize the') || 
     args[0].includes('Warning: react-dom'))
  ) {
    return;
  }
  originalWarn(...args);
};

// Automatically clean up after each test
afterEach(() => {
  cleanup();
});
