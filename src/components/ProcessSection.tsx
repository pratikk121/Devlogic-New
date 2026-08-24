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
    <section id="process-section" className="py-20 md:py-28 bg-white dark:bg-slate-900/40 relative text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs mb-3 shadow-2xs">
            <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>HOW WE WORK // 6-STAGE ENGINEERING METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-[-0.03em]">
            Predictable Fixed-Scope Execution.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-3 leading-relaxed tracking-[-0.01em]">
            We follow a structured 6-stage engineering process designed to eliminate ambiguity, ensure technical accuracy, and deliver production-ready software on schedule.
          </p>
        </div>

        {/* 6-Stage Timeline Ordered List */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
          {PROCESS_STEPS_DATA.map((step) => {
            const IconComp = getStepIcon(step.iconName);
            return (
              <li
                key={step.number}
                className="light-card rounded-2xl p-6 flex flex-col justify-between group transition-all list-none"
              >
                <div>
                  {/* Step Number & Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-extrabold text-slate-900 dark:text-white">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-blue-950/70 text-blue-400 font-mono flex items-center justify-center border border-transparent dark:border-blue-800/50 shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[11px] font-semibold text-blue-700 dark:text-blue-400 block mb-3">
                    // {step.subtitle}
                  </span>

                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-5 font-normal">
                    {step.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
                    <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">
                      DELIVERABLES:
                    </span>
                    {step.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-5 flex items-center justify-between font-mono text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>TIMELINE:</span>
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {step.duration}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Process CTA Footer */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-950/95 backdrop-blur-xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800/90 shadow-2xl">
          <div>
            <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
              Ready to start Stage 01: Discover?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a 30-minute technical scope discovery call with our lead engineering team.
            </p>
          </div>

          <button
            onClick={onOpenProjectInquiry}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shrink-0 flex items-center gap-2 apple-press shadow-md"
          >
            <span>Book Scope Discovery</span>
            <ArrowRight className="w-4 h-4 text-blue-200" />
          </button>
        </div>

      </div>
    </section>
  );
};
