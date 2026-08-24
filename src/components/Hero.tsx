import React from 'react';
import { EnterpriseProductPreview } from './EnterpriseProductPreview';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenProjectInquiry: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenProjectInquiry,
  onExploreWork
}) => {
  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white dark:bg-slate-950 relative text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            Custom Software & Digital Systems <span className="text-cyan-700 dark:text-blue-400">Engineered for Impact.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            We design, build, and maintain web applications, mobile apps, custom business software, and automation pipelines for growing companies. Built with clean code, fixed-scope milestones, and full IP ownership.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenProjectInquiry}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 dark:text-blue-200 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onExploreWork}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200/90 dark:border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Selected Work</span>
            </button>
          </div>

          {/* Trust Guarantees Row */}
          <div className="mt-8 flex items-center justify-center flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400 tracking-wide">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>100% IP & Source Code Ownership</span>
            </span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Fixed-Price Scope Estimates</span>
            </span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Strict TypeScript Standards</span>
            </span>
          </div>
        </div>

        {/* Software Interface Preview Block */}
        <div className="mt-6 sm:mt-10">
          <div className="text-center mb-3">
            <span className="font-semibold text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              SAMPLE SOFTWARE INTERFACE ARCHITECTURE // LIVE INTERACTIVE DEMO
            </span>
          </div>
          <EnterpriseProductPreview onOpenProjectInquiry={onOpenProjectInquiry} />
        </div>

      </div>
    </section>
  );
};
