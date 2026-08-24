import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Globe, 
  UserCheck, 
  LayoutDashboard, 
  Users, 
  Database, 
  Zap, 
  BarChart3, 
  Layers, 
  ArrowDown, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Server
} from 'lucide-react';

interface EcosystemSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenProjectInquiry: () => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({
  onNavigate,
  onOpenProjectInquiry
}) => {
  const [activeLayerId, setActiveLayerId] = useState<string>('all');

  const ecosystemLayers = [
    {
      id: 'website',
      title: '01. Public Website Platform',
      role: 'Client Acquisition & Brand Flagship',
      icon: Globe,
      color: 'text-cyan-400',
      description: 'High-speed corporate website capturing inbound prospects and presenting offerings cleanly.'
    },
    {
      id: 'portal',
      title: '02. Customer Portal',
      role: 'Self-Service & Client Interface',
      icon: UserCheck,
      color: 'text-sky-400',
      description: 'Role-protected client portal for tracking orders, downloading documents, and making payments.'
    },
    {
      id: 'admin',
      title: '03. Executive Admin Dashboard',
      role: 'Internal Control Center',
      icon: LayoutDashboard,
      color: 'text-indigo-400',
      description: 'Centralized management portal providing live operational metrics, user controls, and reporting.'
    },
    {
      id: 'crm',
      title: '04. Custom CRM Engine',
      role: 'Lead & Client Management',
      icon: Users,
      color: 'text-purple-400',
      description: 'Tailored lead pipeline tracking sales stages, automated follow-ups, and customer communication history.'
    },
    {
      id: 'erp',
      title: '05. Operations & ERP System',
      role: 'Resource & Inventory Hub',
      icon: Layers,
      color: 'text-emerald-400',
      description: 'Core operational engine managing inventory, dispatch, resource allocation, and billing.'
    },
    {
      id: 'automation',
      title: '06. Automation Engine',
      role: 'Event Workers & AI Jobs',
      icon: Zap,
      color: 'text-amber-400',
      description: 'Background workers executing webhooks, automated invoicing, SMS/email alerts, and data sync.'
    },
    {
      id: 'analytics',
      title: '07. Real-Time Analytics',
      role: 'Executive Intelligence',
      icon: BarChart3,
      color: 'text-teal-400',
      description: 'Consolidated performance dashboards calculating live EBITDA, inventory turn rate, and SLA metrics.'
    },
    {
      id: 'database',
      title: '08. Unified API & Database Layer',
      role: 'ACID Data & Storage Security',
      icon: Database,
      color: 'text-cyan-300',
      description: 'Enterprise PostgreSQL database cluster with encrypted backups, Redis cache, and REST/gRPC API.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono text-xs mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>DEVLOGIC ECOSYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            One Business → Multiple Digital Systems.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            We can build individual components—or connect them into a single, seamless digital operating system.
          </p>
        </div>

        {/* Central Ecosystem Diagram Container */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {ecosystemLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div
                  key={layer.id}
                  className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/50 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-slate-950 ${layer.color} border border-slate-800`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 font-bold">
                      SYSTEM 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-mono text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {layer.title}
                  </h3>
                  <p className="font-mono text-[11px] text-cyan-400 mb-2">
                    {layer.role}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interconnected Flow Banner */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                All components communicate securely via encrypted API gateways and unified database access.
              </span>
            </div>

            <button
              onClick={onOpenProjectInquiry}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-lg shadow-cyan-500/20 flex items-center gap-2"
            >
              <span>Architect Your Ecosystem</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
