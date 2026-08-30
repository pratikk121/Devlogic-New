# Devlogic Systems — Business Website & Interactive Scope Engine

**Official Web Platform for [Devlogic Systems](https://devlogicsystems.in)**  
*Engineered with strict TypeScript, React 19, Vite 6, Tailwind CSS v4, and dynamic scoping models.*

---

## ⚡ Overview

`Devlogic-New` is the production-facing public web platform and central digital hub for **Devlogic Systems**. It showcases Devlogic's engineering standards, service offerings, commercial client case studies, and interactive business tools.

* **Production URL:** [https://devlogicsystems.in](https://devlogicsystems.in)
* **Founder & CEO:** Pratik Kadole ([@pratikk121](https://github.com/pratikk121))
* **Inquiries:** [devlogicsystems@gmail.com](mailto:devlogicsystems@gmail.com)

---

## 🛠️ Technology Stack

* **Core Language:** TypeScript (~5.8.2) with strict type checking
* **UI Framework:** React 19 (React DOM 19)
* **Build Tooling:** Vite 6 (`@vitejs/plugin-react`)
* **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) + Custom CSS Design System
* **Icons & Animation:** Lucide React (`lucide-react`), Motion (`motion`)
* **Deployment:** Vercel Edge Network

---

## 🚀 Key Interactive Capabilities

### 1. Interactive Scope & Cost Estimation Engine
A real-time mathematical estimation model allowing prospective clients to configure project scopes (MVPs, full platforms, enterprise systems, timelines, and integrations) with dynamic cost and timeline projections.

### 2. Canvas Telemetry & System Diagnostics
High-performance visual canvas simulations rendering real-time telemetry particles, system metrics, and architectural data flows without layout shift.

### 3. Responsive Theme Architecture
Accessible dark and light theme switching with persistent local storage state, WCAG-compliant color contrasts, and calibrated CSS variables.

### 4. Direct Inquiry & Client Portal Shell
Interactive onboarding flow and client portal dialog for instant project scope submission and telemetry consultation.

---

## 📁 Repository Structure

```
Devlogic-New/
├── public/                      # Static web assets, branding icons, sitemap.xml, robots.txt
├── src/
│   ├── components/              # Modular UI sections & interactive modals
│   │   ├── Navbar.tsx           # Responsive navigation & theme switcher
│   │   ├── Hero.tsx             # Interactive hero & value proposition
│   │   ├── ServicesSection.tsx  # Engineering services breakdown
│   │   ├── FeaturedWorkSection.tsx # Case studies (InvenQrise, Swara PG, Seed PWA)
│   │   ├── AboutSection.tsx     # Founder trust layer & engineering standards
│   │   ├── ProjectEstimatorModal.tsx # Interactive cost scoping engine
│   │   └── ContactSection.tsx   # Direct inquiry pipeline
│   ├── data/                    # Typed company information & case study datasets
│   ├── types.ts                 # Strict TypeScript domain interfaces
│   ├── index.css                # Custom CSS design system & dark mode variables
│   ├── App.tsx                  # Root application orchestrator & theme state
│   └── main.tsx                 # React 19 entry mount point
│
├── docs/                        # Durable Architectural Knowledge & Specifications
├── prompts/                     # Reusable AI & Design Directives
├── index.html                   # SEO metadata, OpenGraph tags, font preloading
├── vite.config.ts               # Vite 6 bundler config & path aliases
└── tsconfig.json                # Strict TypeScript configuration
```

---

## 💻 Local Development

### Prerequisites
* **Node.js:** `v18.0.0` or higher
* **NPM:** `v9.0.0` or higher

### Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/pratikk121/Devlogic-New.git

# 2. Navigate to project root
cd Devlogic-New

# 3. Install dependencies
npm install

# 4. Start development server (runs on port 3000)
npm run dev

# 5. Run TypeScript type checks
npm run lint

# 6. Build for production
npm run build
```

---

## 📄 License & Attribution

Copyright © 2026 Devlogic Systems. All rights reserved.  
Founded by **Pratik Kadole** — [devlogicsystems.in](https://devlogicsystems.in)
