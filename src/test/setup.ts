
import "@testing-library/jest-dom";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Extend Vitest's expect method with jest-dom matchers
expect.extend(await import("@testing-library/jest-dom").then(mod => mod.default || mod));

// Automatically clean up after each test
afterEach(() => {
  cleanup();
});
