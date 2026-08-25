# Architecture

**Analysis Date:** 2026-08-25

## Pattern Overview

**Overall:** React Single Page Application (SPA) with Client-Side Router State

**Key Characteristics:**
- Component-Driven UI - Modular sections built with React and TypeScript.
- State-Based Routing - Page routing state managed via React local state in the app orchestrator.
- Dynamic Code-Splitting - Heavy modals and interactive panels loaded lazily on-demand using `React.lazy` and `Suspense` to optimize bundle size and page load times.
- Apple-Grade Styling System - Micro-animations and spring transitions styled with vanilla Tailwind CSS v4.

## Layers

**Orchestration Layer:**
- Purpose: Root entry point, application shell mounting, theme initialization, global routing, and overlay modal control.
- Contains: Global state management, event routes, and layout skeleton.
- Files: `src/App.tsx`, `src/main.tsx`
- Depends on: Presentation layer components and lazy-loaded modules.

**Presentation Layer:**
- Purpose: Render UI layouts, capture user input events, and display interactive charts or log consoles.
- Contains: Layout sections (Hero, About, Contact), forms, visual graphs, and navigation bars.
- Files: `src/components/*.tsx`
- Depends on: Data layer, types definition, and React hooks.
- Used by: Orchestration layer (`src/App.tsx`)

**Data & Mock Layer:**
- Purpose: Centralized repository of company data, case studies, system architecture presets, FAQ items, and lab experiments.
- Contains: Large data structures and configurations representing system states.
- Files: `src/data/companyData.ts`
- Used by: Presentation layer components (e.g., `LabSection.tsx`, `FeaturedWorkSection.tsx`, `FaqSection.tsx`).

**Types Layer:**
- Purpose: Unified type mappings and schema interfaces ensuring compile-time safety.
- Contains: TypeScript interfaces mapping service items, project details, and forms state.
- Files: `src/types.ts`
- Used by: All application layers.

## Data Flow

**Page Navigation Flow:**
1. User clicks a navigation link in `<Navbar />`.
2. Navbar triggers the `onNavigate` handler passed from `<App />` with a new `PageId`.
3. `App` state `currentPage` is updated via `setCurrentPage()`.
4. The window is scrolled to the top smoothly (`window.scrollTo({ top: 0, behavior: 'smooth' })`).
5. React re-renders the appropriate page component corresponding to the selected tab.

**Lazy Modal Activation Flow:**
1. User clicks a button to view a case study, access the client portal, or open the project estimator.
2. State trigger (`selectedProject`, `isPortalOpen`, or `isEstimatorOpen`) is set to active.
3. React resolves the dynamic import using `React.lazy()` for the modal wrapper.
4. While loading, `Suspense` displays a fallback UI (null/hidden to prevent jarring shifts).
5. Once resolved, the modal renders with spring entry animations.

**State Management:**
- Theme: Theme state (`light` | `dark`) is saved to `localStorage` and synchronized with `document.documentElement.classList`.
- Modal / Routing: Kept in `<App />` root state to coordinate transitions and overlays.

## Entry Points

**HTML Entry:**
- Location: `index.html`
- Triggers: Browser loading the page.
- Responsibilities: Preloads typography fonts, sets metadata tags, and injects the TypeScript entry module (`/src/main.tsx`).

**JS/TS Entry:**
- Location: `src/main.tsx`
- Triggers: Loaded by index.html.
- Responsibilities: Renders the `<App />` root component inside `<div id="root">` wrapped in React's `StrictMode`.

## Error Handling

**Strategy:** Compile-time type checking, early guard returns, and lazy-loading safety nets.

**Patterns:**
- `StrictMode` wrapper helps detect side effects and lifecycle warnings.
- `Suspense` handles unresolved chunks for dynamically imported modals.
- Guard clauses check for valid object states in helper functions (e.g. `generateTsInterface` in `LabSection.tsx` returns early if JSON parsing fails).

## Cross-Cutting Concerns

**Accessibility (A11y):**
- Screen reader helper classes (`sr-only`) and focus indicators.
- Skip-to-main-content link (`#main-content`) for keyboard-only navigation bypass.
- Media queries respecting user's `prefers-reduced-motion` settings inside `src/index.css`.

**Styling & Theming:**
- Tailwind CSS v4 variables extending baseline colors and transitions.
- Glassmorphism effects (`.apple-glass`) and spring click animations (`.apple-press`) defined in `src/index.css`.

---

*Architecture analysis: 2026-08-25*
*Update when major patterns change*
