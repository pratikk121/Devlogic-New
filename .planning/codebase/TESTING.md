# Testing Patterns

**Analysis Date:** 2026-08-25

## Test Framework

**Runner:**
- None - No test framework or test runner is currently installed in the project dependencies.

**Assertion Library:**
- None - No assertions are used in the codebase.

**Run Commands:**
- No test execution script exists in the `package.json` scripts block.

## Test File Organization

**Location:**
- Currently, no tests are defined.
- Recommended pattern for future development: Place unit tests alongside the components they cover in `src/components/` and utility files in `src/`.

**Naming:**
- Recommendation: Use `{component-name}.test.tsx` for React component tests and `{utility-name}.test.ts` for pure TypeScript logic tests.

## Test Structure

**Recommendation:**
If a testing framework like Vitest is introduced, organize suites using `describe` for components and nested `describe`/`it` blocks for individual behaviors or lifecycle actions:

```typescript
// Proposed Vitest Template
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Component', () => {
  it('should render main call-to-action button', () => {
    render(<Hero onOpenProjectInquiry={() => {}} onExploreWork={() => {}} />);
    expect(screen.getByText('Get Started')).toBeInVisible();
  });
});
```

## Mocking

- Currently unused. If unit testing is implemented, third-party libraries (such as the Gemini API or DOM window timers) must be mocked using standard mock interfaces (`vi.mock` for Vitest).

## Fixtures and Factories

- Static mock datasets reside inside `src/data/companyData.ts` and can be imported directly into test files to serve as test fixtures.
- Proposed pattern: Create helper factory functions for test inputs inside specific test suites to keep mock states isolated.

## Coverage

- No coverage target is established, and no test coverage tools are configured in the project.

## Verification & Manual Testing

Because the codebase lacks automated test suites, the following manual verification steps are performed:
1. Local Server Run: Run `npm run dev` to boot Vite dev server.
2. Console Verification: Inspect the browser's developer tools console to ensure no runtime errors, resource failures, or bundle warnings are present.
3. Interactive Testing: Click tabs to confirm state routing, select mock presets in the Lab section, toggle dark mode, and open/close modals to verify smooth animations.
4. Build Validation: Run `npm run build` to verify there are no TypeScript compiler errors or Vite bundler failures.

---

*Testing analysis: 2026-08-25*
*Update when test patterns change*
