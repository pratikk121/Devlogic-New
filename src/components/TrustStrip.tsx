import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Cpu } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const capabilities = [
    'Web & Mobile Apps',
    'Custom Business Software',
    'Workflow & AI Automation',
    'Cloud & API Infrastructure'
  ];

  return (
    <div className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-8 relative text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Capabilities Row */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-4 mb-6 text-xs font-mono text-slate-700 dark:text-slate-300">
          <span className="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 mr-2">
            <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> CORE CAPABILITIES:
          </span>
          {capabilities.map((cap, i) => (
            <React.Fragment key={i}>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium shadow-2xs">
                {cap}
              </span>
              {i < capabilities.length - 1 && <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Technical Standards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center">
              <div className="font-mono text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
