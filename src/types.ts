export type PageId = 
  | 'home'
  | 'services'
  | 'solutions'
  | 'ecosystem'
  | 'work'
  | 'process'
  | 'about'
  | 'lab'
  | 'contact'
  | 'client-portal';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: 'core' | 'specialized' | 'operations';
  deliverables: string[];
  techStack: string[];
  sampleArchitecture: string;
  idealFor: string;
}

export interface SolutionItem {
  id: string;
  problemTitle: string;
  targetRole: string;
  symptoms: string[];
  devlogicSolution: string;
  componentsInvolved: string[];
  recommendedArchitecture: string;
  estimatedTimeline: string;
  ctaText: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web System' | 'Mobile App' | 'Enterprise ERP' | 'AI Automation' | 'SaaS Platform';
  tagline: string;
  clientType: string;
  industry: string;
  challenge: string;
  approach: string;
  solutionBuilt: string;
  techStack: string[];
  metricsOutcome: { label: string; value: string }[];
  screens: { title: string; subtitle: string; description: string; type: string }[];
  featured: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  iconName: string;
}

export interface TechCategory {
  name: string;
  description: string;
  items: { name: string; tag: string; description: string; popular: boolean }[];
}

export interface LabExperiment {
  id: string;
  title: string;
  tagline: string;
  category: 'AI Pipeline' | 'Graph Engine' | 'Automation' | 'Micro-Service';
  status: 'ACTIVE EXPERIMENT' | 'PROTOTYPE' | 'BENCHMARK' | 'ALPHA';
  version: string;
  objective: string;
  techUsed: string[];
  interactiveType: 'json_pipeline' | 'automation_rule' | 'graph_visualizer' | 'log_analyzer';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Technical' | 'Pricing & Engagement';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  industry: string;
  projectScope: string;
  avatarLetter: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  experience: string;
  github: string;
  linkedin: string;
  avatarInitials: string;
  gradient: string;
}

export interface ScopeInquiryState {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectTypes: string[];
  budgetRange: string;
  timeline: string;
  description: string;
  existingSystemUrl: string;
  preferredContact: 'email' | 'call' | 'async';
}

export interface ClientPortalProject {
  id: string;
  name: string;
  status: 'DISCOVERY' | 'ARCHITECTURE' | 'ACTIVE DEVELOPMENT' | 'QA & TESTING' | 'DEPLOYED';
  completionPercent: number;
  nextMilestone: string;
  estimatedCompletion: string;
  leadEngineer: string;
  activeSprint: string;
  recentActivity: { date: string; text: string; tag: string }[];
  deliverables: { title: string; size: string; type: string; date: string }[];
}
