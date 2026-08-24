import React, { useState } from 'react';
import { 
  Zap, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Mail, 
  Sparkles, 
  Database, 
  Play, 
  RefreshCw,
  Cpu
} from 'lucide-react';

export const AiAutomationSection: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<'invoice' | 'lead' | 'support'>('invoice');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [simulationResult, setSimulationResult] = useState<string | null>(null);

  const workflows = {
    invoice: {
      title: 'Invoice & PDF Document Extraction',
      input: 'Unformatted PDF Invoice attached to incoming email from Supplier X.',
      aiStep: 'OCR OCR-Parses vendor name, tax ID, line items, and total amount ($4,850.00).',
      decisionStep: 'Validates against PO #8942; verifies vendor bank account matches database records.',
      actionStep: 'Automatically inserts payment record into Accounting ERP and triggers approval push alert.',
      result: 'Processing completed in 0.82 seconds with 99.8% field accuracy.'
    },
    lead: {
      title: 'Inbound Sales Lead Qualification',
      input: 'Contact form submission from enterprise prospect seeking custom logistics software.',
      aiStep: 'Analyzes project budget ($50k+), company size (250 employees), and urgency.',
      decisionStep: 'Calculates high intent score (94/100) and matches client industry to Senior Engineer Alex.',
      actionStep: 'Generates customized pre-discovery brief in CRM & schedules meeting invite automatically.',
      result: 'Prospect received personalized calendar link in 45 seconds.'
    },
    support: {
      title: 'Support Ticket Anomaly & Routing',
      input: 'Urgent customer support ticket: "Database connection timeout error on dashboard".',
      aiStep: 'Categorizes issue as Critical Infrastructure Error; extracts error stack trace.',
      decisionStep: 'Checks GCP Cloud Run telemetry logs for concurrent memory spikes.',
      actionStep: 'Pings on-call engineer via SMS & auto-triggers secondary container container pool.',
      result: 'Container auto-scaled in 12s; ticket resolved before SLA breach.'
    }
  };

  const currentWf = workflows[activeWorkflow];

  const handleRunSimulation = () => {
    setIsProcessing(true);
    setSimulationResult(null);
    setTimeout(() => {
      setIsProcessing(false);
      setSimulationResult(currentWf.result);
    }, 1200);
  };

  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/80 border border-purple-800/60 text-purple-400 font-mono text-xs mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>PRACTICAL AI & AUTOMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Make Your Business Work Smarter.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            We don't sell AI hype. We embed intelligent background workers directly into your daily operational workflows to eliminate repetitive manual labor.
          </p>
        </div>

        {/* Workflow Visual Architecture Bar */}
        <div className="mb-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 w-full md:w-auto justify-center">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="font-bold text-white">INPUT DATA</span>
            </div>
            <ArrowRight className="w-4 h-4 text-cyan-400 hidden md:block" />
            <div className="flex items-center gap-2 bg-purple-950/80 px-4 py-2 rounded-xl border border-purple-800 text-purple-300 w-full md:w-auto justify-center">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="font-bold">AI / AUTOMATION PARSER</span>
            </div>
            <ArrowRight className="w-4 h-4 text-purple-400 hidden md:block" />
            <div className="flex items-center gap-2 bg-indigo-950/80 px-4 py-2 rounded-xl border border-indigo-800 text-indigo-300 w-full md:w-auto justify-center">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span className="font-bold">DECISION ENGINE</span>
            </div>
            <ArrowRight className="w-4 h-4 text-indigo-400 hidden md:block" />
            <div className="flex items-center gap-2 bg-emerald-950/80 px-4 py-2 rounded-xl border border-emerald-800 text-emerald-300 w-full md:w-auto justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="font-bold">SYSTEM RESULT</span>
            </div>
          </div>
        </div>

        {/* Interactive Live Simulation Sandbox */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
            <span className="font-mono text-xs text-cyan-400 uppercase font-bold flex items-center gap-2">
              <Zap className="w-4 h-4" /> SELECT AN AUTOMATED WORKFLOW DEMO:
            </span>

            <div className="flex flex-wrap gap-2">
              {[
                { id: 'invoice', label: 'Document Extraction' },
                { id: 'lead', label: 'Inbound Lead Qualification' },
                { id: 'support', label: 'Support Anomaly Router' }
              ].map((wf) => (
                <button
                  key={wf.id}
                  onClick={() => {
                    setActiveWorkflow(wf.id as any);
                    setSimulationResult(null);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeWorkflow === wf.id
                      ? 'bg-purple-500 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {wf.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-mono text-[10px] text-cyan-400 uppercase font-bold block mb-1">
                  Step 1: Event Input
                </span>
                <p className="text-slate-200">{currentWf.input}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-mono text-[10px] text-purple-400 uppercase font-bold block mb-1">
                  Step 2: AI Parsing & Structuring
                </span>
                <p className="text-slate-200">{currentWf.aiStep}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-mono text-[10px] text-indigo-400 uppercase font-bold block mb-1">
                  Step 3: Decision & Logic Validation
                </span>
                <p className="text-slate-200">{currentWf.decisionStep}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold block mb-1">
                  Step 4: Automated Action Trigger
                </span>
                <p className="text-slate-200">{currentWf.actionStep}</p>
              </div>
            </div>
          </div>

          {/* Test Trigger Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
            <div className="text-xs font-mono text-slate-400">
              {simulationResult ? (
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> {simulationResult}
                </span>
              ) : (
                <span>Test run this automation worker live in your browser:</span>
              )}
            </div>

            <button
              onClick={handleRunSimulation}
              disabled={isProcessing}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-purple-400 to-cyan-300 hover:from-purple-300 hover:to-cyan-200 shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>EXECUTING WORKER PIPELINE...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>EXECUTE WORKFLOW SIMULATION</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
