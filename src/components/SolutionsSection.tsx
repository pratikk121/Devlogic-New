import React from 'react';
import { SOLUTIONS_DATA } from '../data/companyData';
import { 
  Target, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Terminal,
  Cpu,
  Clock,
  Layers
} from 'lucide-react';

interface SolutionsSectionProps {
  onOpenProjectInquiry: (initialSubject?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenProjectInquiry }) => {
  return (
    <section id="solutions-section" className="py-20 md:py-28 bg-slate-50 relative text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-mono text-xs mb-3 shadow-2xs">
            <Target className="w-3.5 h-3.5 text-cyan-600" />
            <span>BUSINESS PROBLEMS WE SOLVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Engineered to Fix Operational Bottlenecks.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Software should eliminate manual toil, unite fragmented data, and make your business faster. Here is how we address common operational challenges.
          </p>
        </div>

        {/* Solutions List Stack */}
        <div className="space-y-8">
          {SOLUTIONS_DATA.map((sol, index) => (
            <div
              key={sol.id}
              className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Problem Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-cyan-700 px-2.5 py-0.5 rounded bg-cyan-50 border border-cyan-200">
                    PROBLEM #{index + 1}
                  </span>
                  <span className="font-mono text-xs text-slate-500">// {sol.targetRole}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {sol.problemTitle}
                </h3>

                <div className="space-y-2 pt-2">
                  <span className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    COMMON SYMPTOMS:
                  </span>
                  {sol.symptoms.map((symptom, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Devlogic Solution Column */}
              <div className="lg:col-span-7 bg-slate-900 rounded-xl p-6 sm:p-7 text-white space-y-5">
                <div>
                  <span className="font-mono text-xs text-cyan-400 font-bold uppercase block mb-1">
                    DEVLOGIC ENGINEERING SOLUTION:
                  </span>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {sol.devlogicSolution}
                  </p>
                </div>

                {/* Technical Specification Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 font-mono text-xs">
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">RECOMMENDED STACK:</span>
                    <span className="text-cyan-300 font-medium">{sol.recommendedArchitecture}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">ESTIMATED DEPLOYMENT:</span>
                    <span className="text-emerald-400 font-medium">{sol.estimatedTimeline}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => onOpenProjectInquiry(sol.problemTitle)}
                    className="px-5 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold transition-all flex items-center gap-2"
                  >
                    <span>{sol.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
