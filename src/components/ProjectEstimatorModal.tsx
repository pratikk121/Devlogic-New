import React, { useState, useEffect, useRef } from 'react';
import { 
  Calculator, 
  X, 
  CheckCircle2, 
  FileText, 
  Download, 
  Copy, 
  Check, 
  ArrowRight,
  IndianRupee,
  DollarSign
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
  costInr: number;
  costUsd: number;
  category: 'platform' | 'feature' | 'integration' | 'sla';
  description: string;
}

const SCOPE_OPTIONS: ScopeOption[] = [
  // Platforms
  { id: 'web_app', name: 'Custom Web Application', hours: 60, costInr: 35000, costUsd: 1200, category: 'platform', description: 'React + TypeScript frontend with Node.js/PostgreSQL backend' },
  { id: 'mobile_app', name: 'Cross-Platform Mobile App', hours: 80, costInr: 45000, costUsd: 1500, category: 'platform', description: 'React Native iOS & Android application with offline sync' },
  { id: 'business_erp', name: 'Internal Business ERP / Portal', hours: 100, costInr: 65000, costUsd: 2200, category: 'platform', description: 'Role-based admin dashboard, inventory, billing & team tracking' },
  { id: 'website_corp', name: 'Corporate Marketing Website', hours: 30, costInr: 18000, costUsd: 600, category: 'platform', description: 'High-conversion fast Vite/React site with modern animations' },

  // Features
  { id: 'feat_auth', name: 'Role-Based Auth & Permissions (RBAC)', hours: 14, costInr: 8000, costUsd: 250, category: 'feature', description: 'OTP / Google Login / JWT, granular admin/staff roles' },
  { id: 'feat_billing', name: 'Razorpay / UPI / Stripe Payments', hours: 18, costInr: 10000, costUsd: 350, category: 'feature', description: 'Instant UPI QR, Razorpay checkout, automated GST invoices' },
  { id: 'feat_realtime', name: 'Real-Time Sync & WebSockets', hours: 16, costInr: 9000, costUsd: 300, category: 'feature', description: 'Live order tracking, instant notifications, team chat' },
  { id: 'feat_ai', name: 'AI & Automation Pipelines', hours: 24, costInr: 14000, costUsd: 450, category: 'feature', description: 'Document parsing, automated WhatsApp triggers, smart search' },
  { id: 'feat_analytics', name: 'Custom Business Analytics', hours: 12, costInr: 7000, costUsd: 250, category: 'feature', description: 'Visual metrics charts, daily sales reports, Excel/PDF export' },

  // Integrations
  { id: 'int_crm', name: 'WhatsApp API & Zoho/Tally Sync', hours: 14, costInr: 8000, costUsd: 280, category: 'integration', description: 'Automated WhatsApp alerts and accounting/CRM data pipe' },
  { id: 'int_storage', name: 'Cloud File Vault & Documents', hours: 10, costInr: 5000, costUsd: 180, category: 'integration', description: 'Secure bill/document upload with cloud storage' },

  // SLA
  { id: 'sla_pro', name: 'Monthly Maintenance & Support SLA', hours: 15, costInr: 7500, costUsd: 250, category: 'sla', description: 'Server monitoring, bug fixes, weekly database backups' }
];

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToInquiry
}) => {
  if (!isOpen) return null;

  const modalRef = useRef<HTMLDivElement>(null);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [selectedIds, setSelectedIds] = useState<string[]>(['web_app', 'feat_auth']);
  const [copied, setCopied] = useState(false);

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

  const toggleOption = (id: string) => {
    setSelectedIds((prev) => {
      const isPlatform = SCOPE_OPTIONS.find((o) => o.id === id)?.category === 'platform';
      if (isPlatform) {
        // Keep single platform or replace
        const nonPlatforms = prev.filter((item) => SCOPE_OPTIONS.find((o) => o.id === item)?.category !== 'platform');
        return prev.includes(id) ? nonPlatforms : [...nonPlatforms, id];
      }
      return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };

  const selectedOptions = SCOPE_OPTIONS.filter((opt) => selectedIds.includes(opt.id));
  const totalHours = selectedOptions.reduce((acc, curr) => acc + curr.hours, 0);
  
  const totalCostMin = selectedOptions.reduce(
    (acc, curr) => acc + (currency === 'INR' ? curr.costInr : curr.costUsd), 
    0
  );
  const totalCostMax = Math.round(totalCostMin * 1.25);
  
  const estimatedWeeksMin = Math.max(2, Math.ceil(totalHours / 30));
  const estimatedWeeksMax = estimatedWeeksMin + 1;

  const currencySymbol = currency === 'INR' ? '₹' : '$';

  const formatAmount = (num: number) => {
    return currency === 'INR' ? num.toLocaleString('en-IN') : num.toLocaleString('en-US');
  };

  const generateTechStack = () => {
    const stack = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'];
    if (selectedIds.includes('feat_realtime')) stack.push('WebSockets', 'Redis');
    if (selectedIds.includes('feat_billing')) stack.push(currency === 'INR' ? 'Razorpay / UPI SDK' : 'Stripe SDK');
    if (selectedIds.includes('feat_ai')) stack.push('Gemini AI API', 'Python Worker');
    if (selectedIds.includes('mobile_app')) stack.push('React Native / Expo');
    return stack;
  };

  const generateMarkdownProposal = () => {
    const stack = generateTechStack();
    return `# DEVLOGIC SYSTEMS - ARCHITECTURE & SCOPE ESTIMATE
Date: ${new Date().toLocaleDateString()}
Generated via Devlogic Interactive Architect Tool (India Delivery)

## 1. SELECTED SYSTEM MODULES
${selectedOptions.map((opt) => `- **${opt.name}**: ${opt.description} (~${opt.hours} hrs)`).join('\n')}

## 2. ESTIMATED SYSTEM METRICS
- **Estimated Development Effort**: ${totalHours} Engineering Hours
- **Budget Range**: ${currencySymbol}${formatAmount(totalCostMin)} - ${currencySymbol}${formatAmount(totalCostMax)} ${currency}
- **Estimated Delivery Timeline**: ${estimatedWeeksMin} - ${estimatedWeeksMax} Weeks

## 3. RECOMMENDED TECHNICAL STACK
${stack.map((s) => `- ${s}`).join('\n')}

## 4. INCLUDED DEVLOGIC GUARANTEES
- 100% Strict TypeScript Type Safety
- Zero Vendor Lock-in (Full Source Code & IP Ownership)
- Milestone-based Transparent Payments
- 60-Day Post-Launch Technical Warranty
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
    const summary = `Estimate Summary: ${currencySymbol}${formatAmount(totalCostMin)} - ${currencySymbol}${formatAmount(totalCostMax)} ${currency} (${totalHours} hrs). Modules: ${selectedOptions.map((o) => o.name).join(', ')}`;
    onProceedToInquiry(summary);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl overflow-y-auto">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimator-modal-title"
        className="bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-3xl max-w-5xl w-full my-8 p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto apple-modal-content"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-950/70 text-blue-400 border border-blue-800/60 shadow-xs">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-wider">
                  INTERACTIVE SYSTEM ARCHITECTURE & COST CALCULATOR
                </span>
              </div>
              <h3 id="estimator-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Estimate Your Custom Software Scope
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Currency Switcher */}
            <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                aria-pressed={currency === 'INR'}
                className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                  currency === 'INR' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ₹ INR
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                aria-pressed={currency === 'USD'}
                className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                  currency === 'USD' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                $ USD
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Estimator"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-6">
          {/* Options Selection Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="font-mono text-xs text-blue-400 font-bold uppercase block mb-3">
                01. SELECT CORE PLATFORM TYPE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SCOPE_OPTIONS.filter((o) => o.category === 'platform').map((opt) => {
                  const isChecked = selectedIds.includes(opt.id);
                  const optCost = currency === 'INR' ? opt.costInr : opt.costUsd;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleOption(opt.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        isChecked
                          ? 'bg-blue-950/50 border-blue-500/80 text-white ring-1 ring-blue-500/40'
                          : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-xs text-slate-200">{opt.name}</span>
                          <span className="font-mono text-[11px] text-blue-400 font-semibold">{currencySymbol}{formatAmount(optCost)}</span>
                        </div>
                        <p className="text-[11px] text-slate-400">{opt.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="font-mono text-xs text-blue-400 font-bold uppercase block mb-3">
                02. SELECT REQUIRED SYSTEM MODULES & FEATURES
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SCOPE_OPTIONS.filter((o) => o.category === 'feature' || o.category === 'integration' || o.category === 'sla').map((opt) => {
                  const isChecked = selectedIds.includes(opt.id);
                  const optCost = currency === 'INR' ? opt.costInr : opt.costUsd;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      role="checkbox"
                      aria-checked={isChecked}
                      onClick={() => toggleOption(opt.id)}
                      className={`p-3 rounded-xl text-left border transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        isChecked
                          ? 'bg-slate-800 border-blue-500/80 text-white'
                          : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-slate-200 flex items-center gap-2">
                          <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[9px] font-bold ${isChecked ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                            {isChecked ? '✓' : '+'}
                          </span>
                          {opt.name}
                        </span>
                        <span className="font-mono text-[10px] text-blue-400 font-medium">+{currencySymbol}{formatAmount(optCost)}</span>
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
                <span className="font-mono text-xs text-blue-400 font-bold uppercase">
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
                  {currencySymbol}{formatAmount(totalCostMin)} – {currencySymbol}{formatAmount(totalCostMax)}
                  <span className="text-xs font-normal text-slate-400 ml-1.5">{currency}</span>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-slate-800 font-mono text-xs">
                  <div className="text-slate-300">
                    <span className="text-slate-500">Effort: </span>
                    <span className="text-blue-400 font-bold">{totalHours} Hours</span>
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
                    <span key={i} className="px-2 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-blue-300">
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
                className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center gap-2 transition-colors"
              >
                <span>Proceed To Project Inquiry</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadSpec}
                  className="flex-1 py-2.5 rounded-xl font-mono text-xs text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-blue-400" />
                  <span>Download Spec (.md)</span>
                </button>

                <button
                  onClick={handleCopySpec}
                  className="px-4 py-2.5 rounded-xl font-mono text-xs text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center gap-2 transition-colors"
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
