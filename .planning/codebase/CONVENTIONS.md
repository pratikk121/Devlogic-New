# Coding Conventions

**Analysis Date:** 2026-08-25

## Naming Patterns

**Files:**
- `PascalCase.tsx` - React layout and presentational components (e.g. `Navbar.tsx`, `Hero.tsx`).
- `camelCase.ts` - Helper modules, data sources, and type definitions (e.g. `companyData.ts`, `types.ts`).
- `kebab-case` - Build scripts, configs, and directory structures.

**Functions:**
- `camelCase` for all functions.
- `handleEventName` for DOM event callbacks (e.g. `handleNavigate`, `handleRunWorkflow`).
- `toggleState` / `setToggle` for Boolean state modifier utilities.

**Variables:**
- `camelCase` for variable definitions.
- `UPPER_SNAKE_CASE` for global, static constants (e.g. `LAB_EXPERIMENTS` inside `companyData.ts`).

**Types:**
- `PascalCase` for type declarations, aliases, and interfaces (e.g. `PageId`, `SolutionItem`). No prefix `I` for interfaces.
- `UPPER_CASE` for union literals or mock status structures (e.g. `'ACTIVE DEVELOPMENT'`, `'QA & TESTING'`).

## Code Style

**Formatting:**
- Indentation: 2 spaces.
- Semicolons: Required at the end of statements.
- Quotes: Single quotes preferred for JavaScript/TypeScript imports and values; double quotes for HTML/JSX attributes.
- Line length: Kept under 120 characters to maintain readability.

**Linting:**
- TypeScript compiler verification script (`npm run lint` running `tsc --noEmit`).
- Strict type definitions with explicit return typing where applicable.

## Import Organization

**Order:**
1. React core hooks and modules (`useState`, `useEffect`, etc.).
2. External third-party libraries (e.g. `lucide-react`, `motion`).
3. Local type interfaces (`import { PageId } from '../types'`).
4. Data definitions (`import { LAB_EXPERIMENTS } from '../data/companyData'`).
5. CSS files (`import './index.css'`).

**Grouping:**
- Imports should be grouped cleanly with a single blank line separating third-party modules from local imports.

**Path Aliases:**
- `@/` maps to the project root directory `.`. Aliased paths can be used to reference files from the root context (e.g. `import App from '@/src/App'`).

## Error Handling

**Patterns:**
- Try/Catch blocks - Required when handling non-deterministic operations such as JSON serialization or user-supplied string parsing.
  ```typescript
  try {
    setParsedJson(JSON.parse(jsonInput));
  } catch {
    setParsedJson(null);
  }
  ```
- Graceful UI Degradation - Fallbacks should be displayed to the user rather than allowing components to crash (e.g. showing a validation error alert instead of throw blocks inside forms).
- Early returns / Guard clauses - Used to keep code flat and readable.

## Logging

**Patterns:**
- Minimal logs - Console logging is limited to critical lifecycle logs or simulated consoles in the lab sections.
- Simulated log streams - Structured logging outputs inside interactive developer consoles are mapped to mock log arrays displayed in UI boxes.

## Comments

**When to Comment:**
- Explain the "why" behind non-obvious configurations or browser support tweaks (e.g. explaining that reduced motion queries prevent layout shifts).
- Document keyboard accessibility hooks (`sr-only` skip links) or dynamic code-splitting.
- TODO Format: `// TODO: description` to mark future implementation areas.

## Module Design

**Exports:**
- Named exports are preferred for utilities and section components.
- Default exports are used exclusively for page level components like the primary orchestrator (`export default function App()`).

---

*Convention analysis: 2026-08-25*
*Update when patterns change*
