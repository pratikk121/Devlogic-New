import React, { useState, useEffect, useRef } from 'react';
import { 
  Calculator, 
  X, 
  CheckCircle2, 
  Layers, 
  Clock, 
  DollarSign, 
  Cpu, 
  FileText, 
  Download, 
  Copy, 
  Check, 
  ArrowRight,
  Zap,
  ShieldCheck,
  Server
} from 'lucide-react';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToInquiry: (summary: string) => void;
}

interface ScopeOption {
  id: string;
  name: string;
  hours: number;
  cost: number;
  category: 'platform' | 'feature' | 'integration' | 'sla';
  description: string;
}

const SCOPE_OPTIONS: ScopeOption[] = [
  // Platforms
  { id: 'web_app', name: 'Custom Web Application', hours: 80, cost: 8000, category: 'platform', description: 'React/TypeScript SPA + Express Node.js Backend' },
  { id: 'mobile_app', name: 'Cross-Platform Mobile App', hours: 100, cost: 10000, category: 'platform', description: 'React Native iOS & Android application' },
  { id: 'business_erp', name: 'Internal Business ERP / Portal', hours: 120, cost: 12000, category: 'platform', description: 'Role-based admin portal, inventory, reporting' },
  { id: 'website_corp', name: 'Corporate Marketing Website', hours: 40, cost: 4000, category: 'platform', description: 'High-conversion Next.js/Vite site with CMS' },

  // Features
  { id: 'feat_auth', name: 'Role-Based Authentication (RBAC)', hours: 16, cost: 1600, category: 'feature', description: 'JWT / OAuth 2.0, MFA, granular permissions' },
  { id: 'feat_billing', name: 'Payment & Subscription Billing', hours: 24, cost: 2400, category: 'feature', description: 'Stripe Connect, invoices, multi-currency' },
  { id: 'feat_realtime', name: 'Real-Time WebSockets & Sync', hours: 20, cost: 2000, category: 'feature', description: 'Live notification engine, collaborative state' },
  { id: 'feat_ai', name: 'AI / LLM Integration', hours: 30, cost: 3000, category: 'feature', description: 'Gemini/OpenAI document parsing, smart search' },
  { id: 'feat_analytics', name: 'Custom Analytics & Reports', hours: 18, cost: 1800, category: 'feature', description: 'Interactive Recharts dashboards, PDF exports' },

  // Integrations
  { id: 'int_crm', name: 'CRM & ERP Sync (HubSpot / SAP)', hours: 16, cost: 1600, category: 'integration', description: 'Two-way bi-directional webhook data pipe' },
  { id: 'int_storage', name: 'S3 / Cloud File Vault', hours: 12, cost: 1200, category: 'integration', description: 'Encrypted document storage with signed URLs' },

  // SLA
  { id: 'sla_pro', name: 'Devlogic Enterprise SLA & Maintenance', hours: 20, cost: 2000, category: 'sla', description: '24/7 uptime monitoring & monthly updates' }
];

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToInquiry
}) => {
  if (!isOpen) return null;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (modalRef.current) {
      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) {
        (focusable[0] as HTMLElement).focus();
      }
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const [selectedIds, setSelectedIds] = useState<string[]>(['web_app', 'feat_auth', 'feat_billing']);
  const [copied, setCopied] = useState(false);

  const toggleOption = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length === 1) return; // keep at least 1
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedOptions = SCOPE_OPTIONS.filter((opt) => selectedIds.includes(opt.id));
  const totalHours = selectedOptions.reduce((acc, curr) => acc + curr.hours, 0);
  const totalCostMin = selectedOptions.reduce((acc, curr) => acc + curr.cost, 0);
  const totalCostMax = Math.round(totalCostMin * 1.25);
  const estimatedWeeksMin = Math.max(2, Math.ceil(totalHours / 35));
  const estimatedWeeksMax = estimatedWeeksMin + 2;

  const generateTechStack = () => {
    const stack = ['React 18', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'];
    if (selectedIds.includes('feat_realtime')) stack.push('WebSockets / Socket.io', 'Redis');
    if (selectedIds.includes('feat_billing')) stack.push('Stripe SDK');
    if (selectedIds.includes('feat_ai')) stack.push('Google Gemini AI SDK', 'Vector Embeddings');
    if (selectedIds.includes('mobile_app')) stack.push('React Native');
    return stack;
  };

  const generateMarkdownProposal = () => {
    const stack = generateTechStack();
    return `# DEVLOGIC SYSTEMS - ARCHITECTURE & SCOPE ESTIMATE
Date: ${new Date().toLocaleDateString()}
Generated via Devlogic Interactive Architect Tool

## 1. SELECTED SYSTEM MODULES
${selectedOptions.map((opt) => `- **${opt.name}**: ${opt.description} (~${opt.hours} hrs)`).join('\n')}

## 2. ESTIMATED SYSTEM METRICS
- **Estimated Development Effort**: ${totalHours} Engineering Hours
- **Budget Range**: $${totalCostMin.toLocaleString()} - $${totalCostMax.toLocaleString()} USD
- **Estimated Delivery Timeline**: ${estimatedWeeksMin} - ${estimatedWeeksMax} Weeks

## 3. RECOMMENDED TECHNICAL STACK
${stack.map((s) => `- ${s}`).join('\n')}

## 4. INCLUDED DEVLOGIC GUARANTEES
- 100% Strict TypeScript Type Safety
- Zero Vendor Lock-in (Full Source Code & IP Ownership)
- Live Staging Environment & Weekly Sprint Demos
- 60-Day Post-Launch Warranty
`;
  };

  const handleDownloadSpec = () => {
    const md = generateMarkdownProposal();
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Devlogic_Project_Estimate.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopySpec = () => {
    navigator.clipboard.writeText(generateMarkdownProposal());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApplyToInquiry = () => {
    if (selectedOptions.length === 0) return;
    const summary = `Estimate Summary: $${totalCostMin.toLocaleString()} - $${totalCostMax.toLocaleString()} (${totalHours} hrs). Modules: ${selectedOptions.map((o) => o.name).join(', ')}`;
    onProceedToInquiry(summary);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div ref={modalRef} className="bg-slate-900 border border-slate-800 rounded-2xl max-w-5xl w-full my-8 p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-cyan-400 font-bold uppercase">
                  INTERACTIVE SYSTEM ARCHITECTURE & COST CALCULATOR
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Estimate Your Custom Software Scope
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-6">
          {/* Options Selection Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="font-mono text-xs text-cyan-400 font-bold uppercase block mb-3">
                01. SELECT CORE PLATFORM TYPE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SCOPE_OPTIONS.filter((o) => o.category === 'platform').map((opt) => {
                  const isChecked = selectedIds.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleOption(opt.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        isChecked
                          ? 'bg-cyan-950/40 border-cyan-500/80 text-white ring-1 ring-cyan-500/40'
                          : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-xs text-slate-200">{opt.name}</span>
                          <span className="font-mono text-[10px] text-cyan-400">${opt.cost.toLocaleString()}</span>
                        </div>
                        <p className="text-[11px] text-slate-400">{opt.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="font-mono text-xs text-cyan-400 font-bold uppercase block mb-3">
                02. SELECT REQUIRED SYSTEM MODULES & FEATURES
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SCOPE_OPTIONS.filter((o) => o.category === 'feature' || o.category === 'integration' || o.category === 'sla').map((opt) => {
                  const isChecked = selectedIds.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      role="checkbox"
                      aria-checked={isChecked}
                      onClick={() => toggleOption(opt.id)}
                      className={`p-3 rounded-xl text-left border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                        isChecked
                          ? 'bg-slate-800 border-cyan-500/80 text-white'
                          : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-slate-200 flex items-center gap-2">
                          <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[9px] font-bold ${isChecked ? 'bg-cyan-400 text-cyan-950' : 'bg-slate-800 text-slate-500'}`}>
                            {isChecked ? '✓' : '+'}
                          </span>
                          {opt.name}
                        </span>
                        <span className="font-mono text-[10px] text-cyan-400">+${opt.cost.toLocaleString()}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 pl-5.5">{opt.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Calculation Breakdown Column */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <span className="font-mono text-xs text-cyan-400 font-bold uppercase">
                  CALCULATED ARCHITECTURE SPEC
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800">
                  REAL-TIME ESTIMATE
                </span>
              </div>

              {/* Price Banner */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6 text-center">
                <span className="text-xs text-slate-400 font-mono block mb-1">ESTIMATED INVESTMENT</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  ${totalCostMin.toLocaleString()} – ${totalCostMax.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1">USD</span>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-slate-800 font-mono text-xs">
                  <div className="text-slate-300">
                    <span className="text-slate-500">Effort: </span>
                    <span className="text-cyan-400 font-bold">{totalHours} Hours</span>
                  </div>
                  <div className="text-slate-300">
                    <span className="text-slate-500">Time: </span>
                    <span className="text-emerald-400 font-bold">{estimatedWeeksMin}–{estimatedWeeksMax} Weeks</span>
                  </div>
                </div>
              </div>

              {/* Stack Preview */}
              <div className="mb-6">
                <span className="font-mono text-[11px] text-slate-400 block mb-2">RECOMMENDED TECH STACK:</span>
                <div className="flex flex-wrap gap-1.5">
                  {generateTechStack().map((st, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-cyan-300">
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              {/* Included Benefits */}
              <div className="space-y-2 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Full IP & Source Code Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Strict TypeScript & Modular Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>60-Day Post-Launch Technical Warranty</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-800 space-y-3 mt-6">
              <button
                onClick={handleApplyToInquiry}
                className="w-full py-3.5 rounded-xl font-bold text-xs text-cyan-950 bg-gradient-to-r from-cyan-400 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-lg flex items-center justify-center gap-2"
              >
                <span>Proceed To Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadSpec}
                  className="flex-1 py-2.5 rounded-xl font-mono text-xs text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Download Spec (.md)</span>
                </button>

                <button
                  onClick={handleCopySpec}
                  className="px-4 py-2.5 rounded-xl font-mono text-xs text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
