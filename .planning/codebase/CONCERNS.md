# Codebase Concerns

**Analysis Date:** 2026-08-25

## Tech Debt

**Client-Side Only State Routing:**
- Issue: View changes are managed using React state variables rather than standard path routes.
- Files: `src/App.tsx`, `src/components/Navbar.tsx`
- Why: Implemented for quick assembly of a Single Page Application without adding router dependencies.
- Impact: No deep-linking capabilities (e.g. users cannot share a direct link to the About or Services tab). Refreshing the browser resets the view back to the homepage. The browser back/forward buttons do not function.
- Fix approach: Integrate a router solution (such as `react-router` or Vite-based filesystem routing) to map pages to paths.

**Monolithic Mock Data File:**
- Issue: All company listings, case studies, features, and calculator pricing rules are located in a single massive static file.
- Files: `src/data/companyData.ts`
- Why: Simple lookup database.
- Impact: Increased initial bundle size. Updates to any text copy require code edits.
- Fix approach: Extract static data to JSON assets, fetch them asynchronously, or migrate to a headless CMS / database API.

## Known Bugs

**Non-Functional Lead Capture Forms:**
- Symptoms: Submitting the contact form or estimator results does not record the lead or dispatch emails.
- Trigger: Submitting form inputs on any section.
- Files: `src/components/ContactSection.tsx`, `src/components/ProjectEstimatorModal.tsx`
- Workaround: The UI alerts the user with a mock success notification.
- Root cause: Missing API endpoints or server-side email dispatch integrations.
- Fix: Build a lightweight email dispatch service or plug in a third-party form provider.

## Security Considerations

**Exposed Client Credentials:**
- Risk: Mock portal logins utilize plain text, hardcoded comparisons.
- Files: `src/components/ClientPortalModal.tsx`
- Current mitigation: The client portal is a simulation.
- Recommendations: If this portal is deployed to production, replace it with a proper authentication flow (e.g., Supabase Auth or Auth0) using secure tokens and HTTP-only cookies.

## Performance Bottlenecks

**Interactive Canvas Rendering Loop:**
- Problem: The systems topology visualizer runs a continuous animation loop utilizing `requestAnimationFrame`.
- Files: `src/components/LabSection.tsx` (lines 124-203)
- Measurement: High CPU usage observed on lower-spec mobile devices when the high-traffic simulation is activated.
- Cause: Canvas drawing executes redrawing actions on every frame.
- Improvement path: Optimize draw operations or pause the animation loop when the Lab section is scrolled out of viewport.

## Scaling Limits

**Static SPA Limitations:**
- Current capacity: Fast load times for a static site, but cannot handle dynamic users, custom client portal profiles, or database transactions.
- Limit: Limited to client-side simulations.
- Symptoms: Changes made in the Estimator modal or Client Portal reset on refresh.
- Scaling path: Introduce an Express or Serverless API backend coupled with a database (e.g., PostgreSQL).

## Dependencies at Risk

**get-shit-done-cc:**
- Risk: Package marked as deprecated on npm registry.
- Impact: Potential compatibility issues with future version updates of node/npm or the Antigravity runtime.
- Migration plan: Monitor updates or transition configuration hook logic to stable native hooks.

## Test Coverage Gaps

**0% Automated Test Coverage:**
- What's not tested: Every component, form submission, and modal handler.
- Risk: Component updates or style modifications can break state routers or form handlers unnoticed.
- Priority: High
- Difficulty to test: Need to install Vitest, jsdom, and setup React testing utilities.

---

*Concerns audit: 2026-08-25*
*Update as issues are fixed or new ones discovered*
