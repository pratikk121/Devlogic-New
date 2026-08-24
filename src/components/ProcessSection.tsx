import React from 'react';
import { PROCESS_STEPS_DATA } from '../data/companyData';
import { 
  Search, 
  Cpu, 
  Layout, 
  Code2, 
  Rocket, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Terminal,
  Clock
} from 'lucide-react';

interface ProcessSectionProps {
  onOpenProjectInquiry: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenProjectInquiry }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return Search;
      case 'Cpu': return Cpu;
      case 'Layout': return Layout;
      case 'Code2': return Code2;
      case 'Rocket': return Rocket;
      case 'ShieldCheck': return ShieldCheck;
      default: return Code2;
    }
  };

  return (
    <section id="process-section" className="py-20 md:py-28 bg-white relative text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs mb-3 shadow-2xs">
            <Terminal className="w-3.5 h-3.5 text-cyan-600" />
            <span>HOW WE WORK // 6-STAGE ENGINEERING METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Predictable Fixed-Scope Execution.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            We follow a structured 6-stage engineering process designed to eliminate ambiguity, ensure technical accuracy, and deliver production-ready software on schedule.
          </p>
        </div>

        {/* 6-Stage Timeline List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS_DATA.map((step) => {
            const IconComp = getStepIcon(step.iconName);
            return (
              <div
                key={step.number}
                className="light-card rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs"
              >
                <div>
                  {/* Step Number & Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-extrabold text-slate-900">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[11px] font-semibold text-cyan-700 block mb-3">
                    // {step.subtitle}
                  </span>

                  <p className="text-slate-600 text-xs leading-relaxed mb-5 font-normal">
                    {step.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 text-xs">
                    <span className="font-mono text-[10px] font-bold text-slate-500 uppercase block mb-1">
                      DELIVERABLES:
                    </span>
                    {step.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="pt-4 border-t border-slate-100 mt-5 flex items-center justify-between font-mono text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>TIMELINE:</span>
                  </span>
                  <span className="font-bold text-slate-900 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                    {step.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process CTA Footer */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Ready to start Stage 01: Discover?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a 30-minute technical scope discovery call with our lead engineering team.
            </p>
          </div>

          <button
            onClick={onOpenProjectInquiry}
            className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-cyan-950 text-xs font-semibold transition-all shrink-0 flex items-center gap-2"
          >
            <span>Book Scope Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
