# Technology Stack

**Analysis Date:** 2026-08-25

## Languages

**Primary:**
- TypeScript 5.8 - All application code and type safety definitions (`src/`, `vite.config.ts`)

**Secondary:**
- JavaScript - Build scripts, helper tools, and dependency configuration (`node_modules`)
- HTML5 - Entry template structure (`index.html`)
- CSS3 - Core styles and design system base (`src/index.css`)

## Runtime

**Environment:**
- Node.js v24.12.0 (configured as ESM via `"type": "module"` in `package.json`)
- Modern Browser Runtimes - Chrome, Safari, Firefox, Edge

**Package Manager:**
- npm 10.x
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- React 19.0.1 - Component model, UI lifecycle, hooks, and client-side page rendering
- Tailwind CSS 4.1.14 - Utility-first styling framework integrated via `@tailwindcss/vite`

**Testing:**
- None - No test framework or runner is currently installed in the workspace

**Build/Dev:**
- Vite 6.2.3 - High-performance bundler and dev server
- tsx 4.21.0 - TypeScript execution without build step for local scripts
- esbuild 0.25.0 - Lightweight compiler utilized by bundler

## Key Dependencies

**Critical:**
- `react` 19.0.1 - core UI library
- `react-dom` 19.0.1 - DOM renderer for React
- `@google/genai` 2.4.0 - Gemini AI SDK (currently unused in source, but present in package dependencies)
- `motion` 12.23.24 - Core animation library (formerly framer-motion) for spring physics and transitions
- `lucide-react` 0.546.0 - Icon library providing modern vector graphics

**Infrastructure:**
- `express` 4.21.2 - Node.js HTTP framework (present in dependencies, unused in active frontend source)
- `dotenv` 17.2.3 - Environment variable loader

## Configuration

**Environment:**
- `.env.example` - Standard template indicating expected environment variables (`GEMINI_API_KEY`, `APP_URL`)
- Process env variables injected via bundler configurations

**Build:**
- `vite.config.ts` - Bundle orchestration, React plugin injection, and Tailwind CSS v4 compiler integration
- `tsconfig.json` - TypeScript compiler parameters (`target`, `moduleResolution`, `strict` checks)

## Platform Requirements

**Development:**
- Windows / macOS / Linux (Node.js runtime environment installed)
- Command line terminal access (cmd, PowerShell, or bash)

**Production:**
- Static Hosting Platform (e.g. Vercel, Netlify, AWS S3, Cloud Run static asset hosting)
- Vite production build artifact (`dist/` folder) output

---

*Stack analysis: 2026-08-25*
*Update after major dependency changes*
