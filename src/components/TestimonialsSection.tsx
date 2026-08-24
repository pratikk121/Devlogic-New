import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, Terminal, FileCode } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const commitments = [
    {
      title: "100% IP & Source Code Ownership",
      description: "Upon project completion, all source code, database scripts, and design assets belong entirely to your company."
    },
    {
      title: "Fixed-Scope Predictability",
      description: "We provide explicit statement-of-work agreements with milestone deliverables so you never face unexpected budget overruns."
    },
    {
      title: "90-Day Technical Warranty",
      description: "Every deployment is backed by a 90-day technical warranty to ensure complete stability and peace of mind post-launch."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono text-xs mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DEVLOGIC COMMITMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Guarantees to Every Partner.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            How we protect your investment, timeline, and intellectual property throughout every engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((c, i) => (
            <div
              key={i}
              className="bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{c.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-6 font-mono text-[10px] text-cyan-400 flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-cyan-500" />
                <span>CONTRACTUALLY GUARANTEED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
