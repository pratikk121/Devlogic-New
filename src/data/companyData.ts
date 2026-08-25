import { 
  ServiceItem, 
  SolutionItem, 
  ProjectItem, 
  ProcessStep, 
  TechCategory, 
  LabExperiment, 
  FaqItem,
  ClientPortalProject
} from '../types';

export const COMPANY_INFO = {
  name: "Devlogic Systems",
  tagline: "We build digital systems that move businesses forward.",
  shortDescription: "Devlogic Systems is a software engineering firm. We design, build, and maintain custom web applications, mobile apps, business software, and automation pipelines.",
  location: "India · Remote Engineering Team",
  founded: "2021",
  systemStatus: "ALL SYSTEMS OPERATIONAL (99.99%)",
  contactEmail: "engineering@devlogicsystems.in",
  stats: [
    { value: "100%", label: "TypeScript Type Safety" },
    { value: "100%", label: "Source Code IP Ownership" },
    { value: "Fixed-Scope", label: "Predictable Milestones" },
    { value: "90 Days", label: "Post-Launch Technical Warranty" }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-apps',
    title: 'Web Applications',
    shortDescription: 'Custom, high-performance web applications built for complex workflows, multi-role user management, and real-time data handling.',
    fullDescription: 'We build responsive, type-safe web applications using React, TypeScript, and modern backend services. Designed for speed, accessibility, and smooth user interactions across desktop and mobile browsers.',
    iconName: 'Globe',
    category: 'core',
    deliverables: [
      'Single-Page & Multi-Page React Applications',
      'Role-Based Access Control (RBAC)',
      'Real-Time WebSocket & Server-Sent Events',
      'RESTful & GraphQL API Integration'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
    sampleArchitecture: 'React SPA + Vite + Node.js/Express + PostgreSQL + Redis Cache',
    idealFor: 'Businesses needing custom portals, SaaS platforms, or internal operations tools.'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    shortDescription: 'Cross-platform mobile applications for iOS and Android, built with native performance, offline capabilities, and hardware access.',
    fullDescription: 'We build cross-platform mobile apps using React Native. Perfect for field operations, customer-facing portals, and mobile-first workforce applications with local offline data sync.',
    iconName: 'Smartphone',
    category: 'core',
    deliverables: [
      'iOS & Android Cross-Platform Builds',
      'Offline-First Local SQLite Storage',
      'Push Notifications & Telemetry',
      'Camera, GPS & Bluetooth Integration'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Firebase Auth'],
    sampleArchitecture: 'React Native + Expo + Local SQLite + Sync Worker + REST API',
    idealFor: 'Companies equipping field teams, mobile service crews, or customer mobile app users.'
  },
  {
    id: 'custom-software',
    title: 'Custom Software & ERPs',
    shortDescription: 'Tailored business operating software, inventory tracking, order management, and administrative dashboards.',
    fullDescription: 'When off-the-shelf software doesn\'t fit your workflows, we engineer purpose-built internal systems that consolidate spreadsheet sprawl, automate data entry, and streamline operations.',
    iconName: 'Building2',
    category: 'core',
    deliverables: [
      'Custom ERP & Resource Planning Systems',
      'Inventory & Fleet Tracking Dashboards',
      'Billing & Invoice Management Pipelines',
      'Audit Logging & Compliance Controls'
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Prisma / Drizzle', 'Docker'],
    sampleArchitecture: 'Express API Server + PostgreSQL DB + BullMQ Event Queue + React Client',
    idealFor: 'Mid-sized businesses seeking custom tools that match their exact operational logic.'
  },
  {
    id: 'automation-ai',
    title: 'Automation & AI Integration',
    shortDescription: 'Event-driven workflow automation, document parsing, webhook processing, and pragmatic LLM integrations.',
    fullDescription: 'We replace repetitive manual tasks with reliable background automation pipelines, AI-assisted document extraction, and seamless multi-app data synchronization.',
    iconName: 'Zap',
    category: 'specialized',
    deliverables: [
      'Automated Webhook & Ingestion Pipelines',
      'LLM Document Parsing & Data Extraction',
      'Multi-Service API Integration (Stripe, HubSpot, QuickBooks)',
      'Scheduled Background Jobs & BullMQ Queues'
    ],
    techStack: ['Python', 'Node.js', 'Gemini API', 'Redis BullMQ', 'Docker'],
    sampleArchitecture: 'Webhook Ingest Server + Redis Queue + AI Processing Worker + DB Ingest',
    idealFor: 'Teams spending hours on manual data entry, PDF parsing, or cross-system copy-pasting.'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure & Maintenance',
    shortDescription: 'Containerized cloud deployments, database optimization, CI/CD pipelines, and ongoing system maintenance.',
    fullDescription: 'We set up secure, scalable cloud infrastructure on Cloud Run or AWS, configure automated deployments, and provide long-term technical maintenance to keep your software running reliably.',
    iconName: 'Server',
    category: 'operations',
    deliverables: [
      'Containerized Cloud Run & AWS Deployments',
      'Automated GitHub Actions CI/CD Pipelines',
      'PostgreSQL Database Indexing & Optimization',
      'Uptime Monitoring & Security Patching'
    ],
    techStack: ['Docker', 'Google Cloud Run', 'AWS', 'PostgreSQL', 'GitHub Actions'],
    sampleArchitecture: 'GitHub Repo -> Automated CI Test -> Docker Build -> Cloud Run Container',
    idealFor: 'Organizations requiring reliable production hosting and peace of mind.'
  }
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'sol-spreadsheets',
    problemTitle: 'Outgrowing Spreadsheets & Disconnected Systems',
    targetRole: 'Operations Directors & Business Owners',
    symptoms: [
      'Critical business data is scattered across 15+ disconnected spreadsheets',
      'Version control nightmares and accidental formula overrides',
      'Manual copy-pasting between accounting, inventory, and customer tools',
      'Zero real-time visibility into operational metrics'
    ],
    devlogicSolution: 'We replace fragmented spreadsheets with a single, unified internal web portal. Data is stored safely in a relational database with role-based access, automated calculations, and real-time status dashboards.',
    componentsInvolved: [
      'Unified Relational Database (PostgreSQL)',
      'Role-Based Admin Portal',
      'Automated Migration Script for Legacy Excel Files',
      'Real-Time Reporting Dashboard'
    ],
    recommendedArchitecture: 'React Admin Frontend + Express API + PostgreSQL Database',
    estimatedTimeline: '4 to 8 Weeks',
    ctaText: 'Discuss Replacing Your Spreadsheets'
  },
  {
    id: 'sol-manual-workflows',
    problemTitle: 'High Manual Effort & Slow Order Processing',
    targetRole: 'Logistics, Field Ops, & Admin Teams',
    symptoms: [
      'Employees spend 10+ hours a week re-entering invoice data',
      'Customer order updates require manual email replies',
      'Delayed field reports lead to scheduling bottlenecks',
      'Frequent human data-entry errors cost time and money'
    ],
    devlogicSolution: 'We build event-driven background automation and webhook pipelines that handle data ingestion, email triggers, and status updates instantly without human intervention.',
    componentsInvolved: [
      'Webhook Receiver & Data Normalizer',
      'Background Task Queue (Redis / BullMQ)',
      'Automated Email & SMS Notification Engine',
      'AI-Assisted PDF / Invoice Parser'
    ],
    recommendedArchitecture: 'Express Ingest Service + Redis Event Queue + AI Processing Worker',
    estimatedTimeline: '3 to 6 Weeks',
    ctaText: 'Explore Workflow Automation'
  },
  {
    id: 'sol-legacy-refactor',
    problemTitle: 'Outdated, Fragile Legacy Software',
    targetRole: 'CTOs & Technical Leaders',
    symptoms: [
      'Current codebase is slow, brittle, and difficult to update',
      'Lack of documentation makes hiring new developers risky',
      'Frequent server crashes during peak usage times',
      'Inability to integrate with modern third-party APIs'
    ],
    devlogicSolution: 'We refactor or modernize legacy codebases incrementally—preserving business logic while migrating to clean TypeScript, modular component structures, and containerized cloud hosting.',
    componentsInvolved: [
      'Incremental Architecture Migration Plan',
      'TypeScript Type-Safety Layer',
      'Automated Testing & CI/CD Pipeline',
      'Containerized Cloud Hosting Deployment'
    ],
    recommendedArchitecture: 'Modernized React Frontend + Microservices API + Cloud Run',
    estimatedTimeline: '6 to 12 Weeks',
    ctaText: 'Schedule Technical Architecture Review'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fleet-telemetry-system',
    title: 'Fleet Operations & Telemetry System',
    category: 'Enterprise ERP',
    tagline: 'Real-time vehicle tracking, driver dispatch, and maintenance scheduling system.',
    clientType: 'Representative System / Internal Demo',
    industry: 'Logistics & Transportation',
    challenge: 'Logistics operators needed a single dashboard to monitor vehicle telemetry, assign dispatch routes, and track vehicle maintenance without relying on three separate disconnected SaaS platforms.',
    approach: 'Devlogic designed a unified web application using React and Tailwind for the dispatcher UI, backed by a Node.js server streaming WebSocket location updates from vehicle GPS units into a PostgreSQL database.',
    solutionBuilt: 'A high-density operational dashboard featuring interactive maps, route optimization, driver shift logs, automated SMS dispatch alerts, and predictive maintenance scheduling.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'WebSockets', 'Tailwind CSS'],
    metricsOutcome: [
      { label: 'Architecture Type', value: 'Full-Stack ERP' },
      { label: 'Data Ingestion', value: 'Real-Time WS' },
      { label: 'Security Model', value: 'RBAC Auth' }
    ],
    screens: [
      {
        title: 'Fleet Live Telemetry Map',
        subtitle: 'Interactive Dispatch Center',
        description: 'Displays active vehicle status, driver status, speed alerts, and route progress in real time.',
        type: 'web_dashboard'
      },
      {
        title: 'Maintenance Log & Service Queue',
        subtitle: 'Automated Service Triggers',
        description: 'Calculates vehicle mileage thresholds and generates work orders automatically.',
        type: 'data_table'
      }
    ],
    featured: true
  },
  {
    id: 'field-inspection-mobile-app',
    title: 'Cross-Platform Field Inspection Application',
    category: 'Mobile App',
    tagline: 'Offline-first tablet & mobile inspection tool for site engineers and auditors.',
    clientType: 'Representative System / Internal Demo',
    industry: 'Construction & Field Engineering',
    challenge: 'Inspectors operating at remote job sites with zero cellular connectivity required a mobile app to record safety audits, attach photos, and sync data when connection was restored.',
    approach: 'Devlogic engineered a React Native mobile application using local SQLite storage for offline persistence, with an automated background sync engine that pushes queued inspections to the server when online.',
    solutionBuilt: 'An intuitive mobile interface with offline photo annotation, digital signature capture, PDF audit report generation, and automated cloud sync.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Node.js', 'AWS S3'],
    metricsOutcome: [
      { label: 'Sync Mechanism', value: 'Offline SQLite' },
      { label: 'Platform Scope', value: 'iOS & Android' },
      { label: 'Export Output', value: 'PDF Audit Reports' }
    ],
    screens: [
      {
        title: 'Inspection Checklist Interface',
        subtitle: 'Touch-Optimized Form',
        description: 'Allows field auditors to complete 50+ compliance checks with single-tap controls.',
        type: 'mobile_screen'
      },
      {
        title: 'Offline Sync Status Manager',
        subtitle: 'Background Queue',
        description: 'Shows cached audit logs and sync status with visual progress indicators.',
        type: 'mobile_screen'
      }
    ],
    featured: true
  },
  {
    id: 'b2b-customer-portal',
    title: 'Multi-Tenant B2B Order & Billing Portal',
    category: 'Web System',
    tagline: 'Self-service customer portal for custom orders, invoice downloads, and account management.',
    clientType: 'Representative System / Internal Demo',
    industry: 'Wholesale & B2B Distribution',
    challenge: 'Wholesale buyers required a fast, self-service web portal to place bulk orders, view custom contract pricing, download past invoices, and track shipment status without calling account reps.',
    approach: 'Devlogic built a secure multi-tenant web portal integrated with Stripe Billing and a PostgreSQL order database, featuring role-based team management for customer accounts.',
    solutionBuilt: 'A clean, responsive customer portal with instant product search, CSV bulk ordering, recurring subscription billing, and downloadable PDF invoices.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe API', 'Tailwind CSS'],
    metricsOutcome: [
      { label: 'Auth Model', value: 'Multi-Tenant' },
      { label: 'Billing Engine', value: 'Stripe API' },
      { label: 'Performance', value: 'Sub-100ms API' }
    ],
    screens: [
      {
        title: 'Customer Order Dashboard',
        subtitle: 'Self-Service Portal',
        description: 'Displays order history, tracking numbers, and instant re-order shortcuts.',
        type: 'web_dashboard'
      },
      {
        title: 'Contract Pricing Catalog',
        subtitle: 'Dynamic Pricing Engine',
        description: 'Applies volume discounts and client-specific pricing tiers automatically.',
        type: 'data_table'
      }
    ],
    featured: true
  },
  {
    id: 'automated-webhook-pipeline',
    title: 'Automated Data Ingestion & Webhook Pipeline',
    category: 'AI Automation',
    tagline: 'Event-driven background pipeline for high-volume data ingestion and processing.',
    clientType: 'Representative System / Internal Demo',
    industry: 'Financial Technology & E-Commerce',
    challenge: 'A growing e-commerce system needed to process incoming webhooks from multiple payment gateways and inventory providers without blocking web server request threads.',
    approach: 'Devlogic designed an event-driven architecture using Express as an API gateway, Redis with BullMQ for message queuing, and background worker nodes to process tasks asynchronously.',
    solutionBuilt: 'A resilient webhook processing service with automatic retry logic, HMAC signature verification, dead-letter queues, and real-time operational monitoring.',
    techStack: ['Node.js', 'Express', 'TypeScript', 'Redis', 'BullMQ', 'PostgreSQL', 'Docker'],
    metricsOutcome: [
      { label: 'Queue Engine', value: 'Redis BullMQ' },
      { label: 'Fault Tolerance', value: 'Retry Queues' },
      { label: 'Containerization', value: 'Docker Engine' }
    ],
    screens: [
      {
        title: 'Webhook Stream Monitor',
        subtitle: 'Real-Time Event Console',
        description: 'Displays incoming payload velocity, processing status, and error logs.',
        type: 'console_view'
      }
    ],
    featured: false
  }
];

export const PROCESS_STEPS_DATA: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding Requirements",
    description: "We review your operational workflows, technical goals, and system requirements during a focused discovery session. No sales pitches—just technical inquiry.",
    deliverables: [
      "Technical Scope Document",
      "System Architecture Outline",
      "Fixed-Price Proposal & Timeline"
    ],
    duration: "1 Week",
    iconName: "Search"
  },
  {
    number: "02",
    title: "Architect",
    subtitle: "System & Database Design",
    description: "We design the relational database schema, API endpoints, user access models, and cloud infrastructure before writing application code.",
    deliverables: [
      "Database Schema Specification (ERD)",
      "API Endpoint Contract Specification",
      "UI/UX Wireframes & Screen Layouts"
    ],
    duration: "1 to 2 Weeks",
    iconName: "Cpu"
  },
  {
    number: "03",
    title: "Design",
    subtitle: "User Interface & Experience",
    description: "We design clear, accessible user interfaces focused on task efficiency, legibility, and high visual standards—avoiding artificial clutter.",
    deliverables: [
      "Interactive Figma / UI Prototypes",
      "Design System Component Library",
      "Responsive Layout Specs"
    ],
    duration: "1 to 2 Weeks",
    iconName: "Layout"
  },
  {
    number: "04",
    title: "Build",
    subtitle: "Iterative Engineering",
    description: "We develop your application in 2-week sprints, deploying working code to a staging environment so you can review progress at every milestone.",
    deliverables: [
      "Live Staging Environment Access",
      "Weekly Sprint Demos & Video Updates",
      "Clean, Type-Safe TypeScript Codebase"
    ],
    duration: "3 to 8 Weeks",
    iconName: "Code2"
  },
  {
    number: "05",
    title: "Deploy",
    subtitle: "Production Launch",
    description: "We configure containerized cloud hosting, SSL certificates, automated database backups, and CI/CD deployment scripts.",
    deliverables: [
      "Production Cloud Environment Deployment",
      "Automated CI/CD Deployment Pipeline",
      "100% IP & Source Code Transfer"
    ],
    duration: "1 Week",
    iconName: "Rocket"
  },
  {
    number: "06",
    title: "Support",
    subtitle: "Warranty & Evolution",
    description: "Every build includes a 90-day technical warranty for bug fixes, along with options for ongoing maintenance and feature development.",
    deliverables: [
      "90-Day Bug-Free Technical Warranty",
      "System Documentation & Maintenance Guide",
      "Optional Ongoing Maintenance Agreement"
    ],
    duration: "Ongoing",
    iconName: "ShieldCheck"
  }
];

export const TECH_CATEGORIES_DATA: TechCategory[] = [
  {
    name: "Frontend & Web Application",
    description: "Modern, responsive client architectures optimized for performance and accessibility.",
    items: [
      { name: "React 18+", tag: "UI Framework", description: "Standard component architecture", popular: true },
      { name: "TypeScript", tag: "Language", description: "Strict compile-time type safety", popular: true },
      { name: "Tailwind CSS", tag: "Styling", description: "Utility-first design system", popular: true },
      { name: "Vite / Next.js", tag: "Build Tool", description: "Ultra-fast frontend tooling", popular: true }
    ]
  },
  {
    name: "Backend & API Services",
    description: "Server-side architectures for real-time data handling, authorization, and logic execution.",
    items: [
      { name: "Node.js & Express", tag: "Runtime", description: "Fast, asynchronous server framework", popular: true },
      { name: "Python", tag: "AI & Scripts", description: "Data processing & LLM pipelines", popular: true },
      { name: "PostgreSQL", tag: "Relational DB", description: "ACID-compliant reliable database", popular: true },
      { name: "Redis & BullMQ", tag: "Task Queue", description: "High-performance event background worker", popular: true }
    ]
  },
  {
    name: "Mobile & Cloud Infrastructure",
    description: "Cross-platform mobile deployment and cloud hosting environments.",
    items: [
      { name: "React Native & Expo", tag: "Mobile", description: "iOS & Android cross-platform apps", popular: true },
      { name: "Google Cloud Run", tag: "Cloud", description: "Serverless containerized hosting", popular: true },
      { name: "AWS S3 & CloudFront", tag: "Storage & CDN", description: "Encrypted file vault & edge distribution", popular: true },
      { name: "Docker", tag: "Containerization", description: "Reproducible deployment builds", popular: true }
    ]
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-01',
    category: 'Pricing & Engagement',
    question: 'How do you structure project pricing?',
    answer: 'We provide clear, fixed-scope proposals based on detailed technical discovery. You receive a fixed-price statement of work with milestone-based payment schedules. No unexpected hourly billing surprises.'
  },
  {
    id: 'faq-02',
    category: 'Technical',
    question: 'Who owns the source code and intellectual property?',
    answer: 'You retain 100% ownership of all source code, design assets, database schemas, and intellectual property upon completion of the project. We place zero proprietary vendor lock-in code in your project.'
  },
  {
    id: 'faq-03',
    category: 'Process',
    question: 'How do we track project progress during development?',
    answer: 'We deploy working code to a private staging environment from week one. You receive weekly video updates, sprint task reports, and direct access to your lead engineer.'
  },
  {
    id: 'faq-04',
    category: 'Process',
    question: 'What happens after the software is launched?',
    answer: 'Every project includes a 90-day technical warranty covering bug fixes and adjustments. Following the warranty, we offer optional ongoing maintenance agreements for updates, server monitoring, and feature additions.'
  },
  {
    id: 'faq-05',
    category: 'General',
    question: 'Can you work with our existing development team?',
    answer: 'Yes. We frequently build standalone modules or microservices designed to integrate cleanly with an existing codebase, or partner directly with internal engineering teams during major builds.'
  }
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'exp-01',
    title: 'Webhook Payload Normalizer',
    tagline: 'Sanitize incoming API payloads, auto-generate TypeScript interfaces, and build SQL schemas.',
    category: 'AI Pipeline',
    status: 'ACTIVE EXPERIMENT',
    version: 'v2.1',
    objective: 'Demonstrate automated data parsing and schema creation directly in the browser.',
    techUsed: ['TypeScript', 'JSON Parser', 'AST Generator'],
    interactiveType: 'json_pipeline'
  },
  {
    id: 'exp-02',
    title: 'Visual Workflow Executor',
    tagline: 'Construct event-driven automation rules and test execution pipelines in real time.',
    category: 'Automation',
    status: 'PROTOTYPE',
    version: 'v1.4',
    objective: 'Illustrate event-driven background task processing and notification pipelines.',
    techUsed: ['Event Loop', 'Rule Engine', 'BullMQ Simulator'],
    interactiveType: 'automation_rule'
  },
  {
    id: 'exp-03',
    title: 'System Topology Visualizer',
    tagline: 'Interactive canvas rendering microservice nodes and data packet flows under load.',
    category: 'Graph Engine',
    status: 'BENCHMARK',
    version: 'v3.0',
    objective: 'Visualize system architecture throughput and node latency on HTML5 Canvas.',
    techUsed: ['HTML5 Canvas', '2D Math Engine', 'Performance API'],
    interactiveType: 'graph_visualizer'
  },
  {
    id: 'exp-04',
    title: 'Real-Time Log Analyzer',
    tagline: 'Filter live server log streams by severity, run regex searches, and export audit reports.',
    category: 'Micro-Service',
    status: 'ALPHA',
    version: 'v1.0',
    objective: 'Showcase client-side log parsing and anomaly detection algorithms.',
    techUsed: ['Regex Processing', 'Stream Parser', 'Markdown Export'],
    interactiveType: 'log_analyzer'
  }
];

export const MOCK_CLIENT_PORTAL_PROJECT: ClientPortalProject = {
  id: 'proj-demo-902',
  name: 'Fleet Operations & Telemetry System',
  status: 'ACTIVE DEVELOPMENT',
  completionPercent: 78,
  nextMilestone: 'Sprint #4: Stripe Invoicing & Export Tools',
  estimatedCompletion: 'October 24, 2026',
  leadEngineer: 'Devlogic Lead Architect',
  activeSprint: 'Sprint #4 of 5 (Backend Integration)',
  recentActivity: [
    { date: 'Today, 09:30 AM', text: 'Deployed API Gateway update to staging environment', tag: 'DEPLOYMENT' },
    { date: 'Yesterday', text: 'Passed automated end-to-end integration test suite (42/42 tests)', tag: 'QA PASSED' },
    { date: 'Oct 12', text: 'Completed PostgreSQL database index optimization for telemetry table', tag: 'DATABASE' }
  ],
  deliverables: [
    { title: 'System Architecture Specification (v2.0)', size: '2.4 MB', type: 'PDF Document', date: 'Oct 01, 2026' },
    { title: 'Database Entity Relationship Diagram (ERD)', size: '1.1 MB', type: 'Figma / SVG', date: 'Oct 04, 2026' },
    { title: 'REST API Endpoint Documentation', size: '890 KB', type: 'OpenAPI Spec', date: 'Oct 08, 2026' }
  ]
};
