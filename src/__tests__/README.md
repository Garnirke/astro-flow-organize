
# AstroNote Testing Guide

This directory contains all tests for the AstroNote application.

## Test Structure

- `/components`: Tests for individual UI components
- `/pages`: Tests for page components
- `/context`: Tests for React context providers
- `/integration`: Tests for user flows that span multiple components
- `/utils`: Tests for utility functions

## Running Tests

Run all tests with:

```bash
npm run test
```

Run a specific test file:

```bash
npm run test -- src/__tests__/components/ui/button.test.tsx
```

Run tests in watch mode (useful during development):

```bash
npm run test -- --watch
```

## Testing Guidelines

1. **Unit Tests**: Test individual components and functions in isolation
2. **Integration Tests**: Test how components work together
3. **Mock Dependencies**: Use Vitest's mocking capabilities for external dependencies
4. **Test User Interactions**: Use `userEvent` for realistic user interactions
5. **Accessibility Testing**: Include accessibility checks in your tests using our custom `runA11yTest` utility

## Accessibility Testing

We use `axe-core` for accessibility testing. To test a component for accessibility issues:

```typescript
import { runA11yTest, formatViolations } from "@/test/a11y-helper";

it("should have no accessibility violations", async () => {
  const results = await runA11yTest(<YourComponent />);
  
  if (results.violations.length > 0) {
    console.error(formatViolations(results));
  }
  
  expect(results.violations.length).toBe(0);
});
```

## Best Practices

- Test component rendering and appearance
- Test user interactions and event handling
- Test state changes and side effects
- Write descriptive test names that explain what is being tested
- Keep tests focused on one aspect of functionality
- Use setup and teardown functions for common test setup
- Always include accessibility tests for UI components

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library User Events](https://testing-library.com/docs/user-event/intro)
- [axe-core Documentation](https://github.com/dequelabs/axe-core)
