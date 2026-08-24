import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Server, 
  Database, 
  Zap, 
  Building2, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  ArrowRight,
  Cpu,
  RefreshCw
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  label: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  bgGlow: string;
  protocol: string;
  latency: string;
  security: string;
  description: string;
  activePayload: string;
}

const NODES: ArchitectureNode[] = [
  {
    id: 'client',
    label: 'CLIENT',
    subtitle: 'Web, Mobile & Portals',
    icon: Monitor,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/40',
    bgGlow: 'shadow-cyan-500/20',
    protocol: 'HTTPS / TLS 1.3',
    latency: '18ms Edge',
    security: 'WAF + DDoS Guard',
    description: 'High-speed React/Next.js frontend applications, native mobile apps, and client self-service portals.',
    activePayload: '{ "event": "ORDER_SUBMITTED", "userId": "usr_942" }'
  },
  {
    id: 'app',
    label: 'APPLICATION',
    subtitle: 'Microservice Layer',
    icon: Server,
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/40',
    bgGlow: 'shadow-indigo-500/20',
    protocol: 'gRPC / Node.js',
    latency: '8ms Internal',
    security: 'JWT / OAuth 2.0',
    description: 'Core application logic, business rules enforcement, state management, and real-time state synchronization.',
    activePayload: '{ "status": "VALIDATED", "ruleCheck": "PASSED" }'
  },
  {
    id: 'api',
    label: 'API GATEWAY',
    subtitle: 'REST / GraphQL / Auth',
    icon: Cpu,
    color: 'text-blue-400',
    borderColor: 'border-blue-500/40',
    bgGlow: 'shadow-blue-500/20',
    protocol: 'REST / WebSocket',
    latency: '4ms Gateway',
    security: 'Rate Limit + CORS',
    description: 'Secure entry point orchestrating external client requests, payload validation, rate-limiting, and load balancing.',
    activePayload: 'POST /v1/system/process 200 OK'
  },
  {
    id: 'database',
    label: 'DATABASE',
    subtitle: 'Relational & Cache',
    icon: Database,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    bgGlow: 'shadow-emerald-500/20',
    protocol: 'PostgreSQL + Redis',
    latency: '< 2ms Query',
    security: 'AES-256 Encrypted',
    description: 'ACID-compliant relational database with automated point-in-time recovery, index optimization, and in-memory cache.',
    activePayload: 'UPDATE inventory SET stock = stock - 1 RETURNING id;'
  },
  {
    id: 'automation',
    label: 'AUTOMATION',
    subtitle: 'AI & Event Workers',
    icon: Zap,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/40',
    bgGlow: 'shadow-purple-500/20',
    protocol: 'Redis BullMQ / Webhook',
    latency: 'Async Queue',
    security: 'Hmac Signature',
    description: 'Intelligent event-driven queue workers processing background tasks, automated notifications, and AI document parsing.',
    activePayload: 'QUEUE: [SendInvoiceSMS, SyncHubSpotCRM, IndexSearch]'
  },
  {
    id: 'business',
    label: 'BUSINESS',
    subtitle: 'Operations & Results',
    icon: Building2,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    bgGlow: 'shadow-amber-500/20',
    protocol: 'Real-Time Telemetry',
    latency: 'Instant Sync',
    security: 'Audit Logging',
    description: 'Actionable business outcomes: automated invoices, zero manual data entry, live management dashboards, and scaled growth.',
    activePayload: '{ "outcome": "INVOICE_PAID", "timeSaved": "45 Mins" }'
  }
];

export const SystemArchitectureDiagram: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('app');
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % NODES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [isSimulating]);

  const selectedNode = NODES.find((n) => n.id === selectedNodeId) || NODES[1];

  return (
    <div className="w-full glass-panel rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-800/80 shadow-2xl relative overflow-hidden">
      {/* Subtle top glow bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500"></div>

      {/* Diagram Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-mono text-xs text-emerald-400 tracking-wider uppercase font-semibold">
              DEVLOGIC ARCHITECTURE ENGINE // LIVE TELEMETRY
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Interconnected System Ecosystem
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Click any node to inspect protocol, security layer, and active payload execution.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
              isSimulating
                ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80 hover:bg-cyan-900/60'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin text-cyan-400' : ''}`} />
            {isSimulating ? 'PAUSE PACKET FLOW' : 'RESUME FLOW'}
          </button>
        </div>
      </div>

      {/* System Flow Diagram Grid */}
      <div className="py-8 relative">
        {/* Desktop Pipeline Flow */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
          {NODES.map((node, index) => {
            const Icon = node.icon;
            const isSelected = node.id === selectedNodeId;
            const isCurrentStep = activeStep === index && isSimulating;

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                className={`relative group cursor-pointer p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between min-h-[140px] ${
                  isSelected
                    ? `bg-slate-900/90 ${node.borderColor} shadow-lg ${node.bgGlow} ring-1 ring-cyan-500/50`
                    : 'bg-slate-900/40 border-slate-800/90 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                {/* Active Simulation Step Pulse Ring */}
                {isCurrentStep && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-slate-800/90 ${node.color} border border-slate-700/50`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 uppercase font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="font-mono text-xs font-bold text-slate-200 tracking-wider">
                    {node.label}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {node.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-400">{node.latency}</span>
                  <span className={`text-[10px] font-mono ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {isSelected ? 'INSPECTING' : 'CLICK'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Connecting Data Stream Indicator */}
        <div className="hidden lg:block my-4 px-2">
          <div className="relative flex items-center justify-between h-1 bg-slate-800/80 rounded-full overflow-hidden">
            <div 
              className="absolute h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 transition-all duration-500 rounded-full"
              style={{
                left: `${(activeStep / (NODES.length - 1)) * 80}%`,
                width: '20%'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Selected Node Inspection Drawer */}
      <div className="mt-2 bg-slate-950/80 border border-slate-800 rounded-xl p-4 sm:p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-lg bg-slate-900 border border-slate-800 ${selectedNode.color}`}>
              {React.createElement(selectedNode.icon, { className: 'w-6 h-6' })}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-white tracking-wide">
                  {selectedNode.label} NODE INSPECTION
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  {selectedNode.protocol}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{selectedNode.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-500">Latency: </span>
              <span className="text-emerald-400 font-semibold">{selectedNode.latency}</span>
            </div>
            <div className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="text-slate-500">Security: </span>
              <span className="text-cyan-400 font-semibold">{selectedNode.security}</span>
            </div>
          </div>
        </div>

        {/* Live Payload Preview */}
        <div className="mt-4 pt-1">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              LIVE EXECUTED PAYLOAD STREAM
            </span>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> VERIFIED ZERO ERROR
            </span>
          </div>
          <div className="bg-slate-900/90 border border-slate-800/80 rounded-lg p-3 font-mono text-xs text-cyan-300 overflow-x-auto">
            <code>{selectedNode.activePayload}</code>
          </div>
        </div>
      </div>
    </div>
  );
};
