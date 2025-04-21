
/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

import "@testing-library/jest-dom";

declare global {
  namespace Vi {
    interface AsymmetricMatchersContaining {
      toBeInTheDocument(): void;
    }
    
    interface Assertion {
      toBeInTheDocument(): void;
      // Add other jest-dom matchers if needed
    }
  }
}
