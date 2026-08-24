import React, { useState } from 'react';
import { TECH_CATEGORIES_DATA } from '../data/companyData';
import { 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Code2, 
  ArrowRight
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const activeCategory = TECH_CATEGORIES_DATA[selectedCategoryIndex];

  return (
    <section className="py-20 md:py-28 bg-slate-900/60 relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono text-xs mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNOLOGY ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Modern Stacks Engine-Matched to Purpose.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            We pick battle-tested, high-speed open standards to guarantee type safety, long-term vendor independence, and extreme scalability.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {TECH_CATEGORIES_DATA.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategoryIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategoryIndex === idx
                  ? 'bg-cyan-500 text-cyan-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Selected Tech Category Grid */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
          <div className="mb-6 pb-4 border-b border-slate-800/80">
            <h3 className="text-xl font-bold text-white font-mono">
              {activeCategory.name} Architecture
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategory.items.map((tech, idx) => (
              <div
                key={tech.name}
                className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-extrabold text-white">
                      {tech.name}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-cyan-400 border border-slate-800">
                      {tech.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {tech.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 pt-2 border-t border-slate-800/60">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>PRODUCTION READY</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
