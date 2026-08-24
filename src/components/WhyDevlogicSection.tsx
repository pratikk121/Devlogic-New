import React from 'react';
import { 
  Target, 
  TrendingUp, 
  Eye, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal 
} from 'lucide-react';

export const WhyDevlogicSection: React.FC = () => {
  const principles = [
    {
      title: 'Built Around The Problem',
      subtitle: 'Business Needs First',
      icon: Target,
      description: 'Technology follows the business requirement—not the other way around. We don\'t force proprietary templates or trending stacks where simple, reliable code wins.'
    },
    {
      title: 'Designed To Scale',
      subtitle: 'Future-Proof Architecture',
      icon: TrendingUp,
      description: 'Systems should be capable of evolving effortlessly as your business grows from 10 users to 100,000 without requiring complete codebase rewrites.'
    },
    {
      title: 'Transparent Development',
      subtitle: 'Zero Black-Box Surprise',
      icon: Eye,
      description: 'Clients should understand what is being built, why technical choices were made, and see live staging code at every milestone.'
    },
    {
      title: 'Practical Technology',
      subtitle: 'Pragmatic & Reliable',
      icon: Wrench,
      description: 'We pick frameworks and cloud engines because they solve concrete problems reliably—not to pad technical resume buzzwords.'
    },
    {
      title: 'One Complete Partner',
      subtitle: 'End-to-End Ownership',
      icon: ShieldCheck,
      description: 'System design, core engineering, API integrations, cloud deployment, and long-term evolutionary maintenance under a single unified roof.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono text-xs mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>DEVLOGIC CORE PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            We Don't Just Build Software. We Build Systems That Work.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Engineered with modern competence, operational transparency, and long-term partnership in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {principles.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-[10px] text-cyan-400 uppercase font-semibold block mb-1">
                    {p.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1 text-[10px] font-mono text-slate-500">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>GUARANTEED STANDARD</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
