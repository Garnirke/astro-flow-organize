
import { describe, it, expect } from "vitest";
import { Button } from "@/components/ui/button";
import { runA11yTest, formatViolations } from "@/test/a11y-helper";

describe("Button Accessibility", () => {
  it("should have no accessibility violations", async () => {
    const results = await runA11yTest(<Button>Accessible Button</Button>);
    
    // If there are violations, the test will fail with detailed information
    if (results.violations.length > 0) {
      console.error(formatViolations(results));
    }
    
    expect(results.violations.length).toBe(0);
  });

  it("should have proper ARIA attributes when disabled", async () => {
    const results = await runA11yTest(<Button disabled>Disabled Button</Button>);
    
    if (results.violations.length > 0) {
      console.error(formatViolations(results));
    }
    
    expect(results.violations.length).toBe(0);
  });
});
