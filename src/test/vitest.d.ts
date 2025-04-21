
/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

import "@testing-library/jest-dom";

declare global {
  namespace Vi {
    interface Assertion {
      toBeInTheDocument(): void;
      // Add other jest-dom matchers if needed
    }
  }
}
