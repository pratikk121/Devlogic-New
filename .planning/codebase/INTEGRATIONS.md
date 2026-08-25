# External Integrations

**Analysis Date:** 2026-08-25

## APIs & External Services

**Generative AI Capabilities:**
- Google Gemini API - Designed for AI assistant prompts and code analysis
  - SDK/Client: `@google/genai` npm package v2.4.0
  - Auth: API key expected in `GEMINI_API_KEY` environment variable
  - Integration state: Installed and configured in environment variables, but currently not imported or invoked in client-side code files

**Payments & Webhooks (Simulated):**
- Stripe Integration - Mocked in-browser simulation for demoing order flow, payments, and receipt generation
  - SDK/Client: None (purely simulated via React state in lab experiments)
  - File: `src/components/LabSection.tsx`
  - Presets: Stripe payload preset loaded on-demand for normalizer and TypeScript generation

## Data Storage

**Databases:**
- None - No persistent SQL or NoSQL database is currently integrated. All database schemas and mock queries are simulated client-side.
- File: `src/data/companyData.ts` holds static database mock items for projects, services, and testimonials.

**File Storage:**
- None - Static assets (SVGs, icons) are bundled locally in `/src/assets` or `/public`.

**Caching:**
- LocalStorage - Used for persistence of user theme state (`light` | `dark`).
- File: `src/App.tsx` (reads/writes `theme` key)

## Authentication & Identity

**Client Portal Auth (Simulated):**
- Mock Login Guard - Simulated user login for Client Portal demonstration
  - File: `src/components/ClientPortalModal.tsx`
  - Auth pattern: Local validation check against mock client accounts (e.g. `Devlogic Systems`, `Alpha Corp`).
  - Session state: Managed in component state, no real tokens or cookies are used.

## Monitoring & Observability

**Error Tracking:**
- None - No Sentry or similar observability tool configured.

**Logs:**
- Console Logging - Standard browser console outputs.
- Log Anomaly Analyzer (Simulated): Demo console logs and event filters running in the browser.
  - File: `src/components/LabSection.tsx` (contains hardcoded simulation logs for mock endpoints)

## CI/CD & Deployment

**Hosting:**
- Static Hosting Ready - Configured for Vite bundling and static production deployment.
- Deployment target: Local development running on port `3000`.

**CI Pipeline:**
- None - No GitHub actions or pipelines are defined.

## Environment Configuration

**Development:**
- Required env vars:
  - `GEMINI_API_KEY` - API token for Google GenAI models.
  - `APP_URL` - Endpoint where the applet/web page is hosted.
- Secrets location: Configured via external environment injection.

---

*Integration audit: 2026-08-25*
*Update when adding/removing external services*
