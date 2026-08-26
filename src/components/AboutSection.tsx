import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Users, 
  Lock, 
  FileCode,
  Github,
  Linkedin,
  Mail,
  UserCheck
} from 'lucide-react';
import { FOUNDER_INFO } from '../data/companyData';

interface AboutSectionProps {
  onOpenProjectInquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenProjectInquiry }) => {
  const engineeringStandards = [
    {
      title: "Direct Engineer Access",
      icon: Users,
      description: "You work directly with senior software architects and lead developers who write your code. No layers of account managers relaying messages."
    },
    {
      title: "100% IP & Source Code Ownership",
      icon: Lock,
      description: "You retain full ownership of all source code, repository commits, database schemas, and design assets upon completion. Zero vendor lock-in."
    },
    {
      title: "Fixed-Scope Proposals",
      icon: ShieldCheck,
      description: "We provide clear, fixed-price proposals based on technical discovery. You know exact deliverables and costs before any code is written."
    },
    {
      title: "Strict TypeScript & Type Safety",
      icon: FileCode,
      description: "We build all web and mobile software with strict TypeScript to eliminate runtime bugs, simplify refactoring, and maintain long-term quality."
    }
  ];

  return (
    <section id="about-section" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs mb-3 shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>ABOUT DEVLOGIC SYSTEMS // ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-[-0.03em]">
            Software Engineered with Technical Integrity.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-3 leading-relaxed tracking-[-0.01em]">
            Devlogic Systems is a digital engineering firm based in India with a distributed team of experienced software developers, system architects, and UI engineers. We build software that works reliably for the long term.
          </p>
        </div>

        {/* Founder / Leadership Trust Card */}
        <div className="light-card rounded-2xl p-6 sm:p-8 mb-12 border border-slate-200/80 dark:border-slate-800/90 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 font-mono text-[11px] font-semibold border border-blue-200/60 dark:border-blue-900/60">
                <UserCheck className="w-3.5 h-3.5" />
                <span>LEADERSHIP &amp; ACCOUNTABILITY</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {FOUNDER_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                  {FOUNDER_INFO.title}
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                {FOUNDER_INFO.shortDescription}
              </p>
            </div>

            {/* Direct Verified Links */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800/80">
              <a
                href={`mailto:${FOUNDER_INFO.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono transition-colors border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Send direct business email to ${FOUNDER_INFO.name}`}
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{FOUNDER_INFO.email}</span>
              </a>

              <a
                href={FOUNDER_INFO.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono transition-colors border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`${FOUNDER_INFO.name} LinkedIn Profile (opens in new tab)`}
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{FOUNDER_INFO.linkedin.label}</span>
              </a>

              <div className="flex flex-wrap items-center gap-2">
                {FOUNDER_INFO.github.map((gh, idx) => (
                  <a
                    key={idx}
                    href={gh.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono transition-colors border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`${FOUNDER_INFO.name} GitHub Profile: ${gh.label} (opens in new tab)`}
                  >
                    <Github className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300 shrink-0" />
                    <span>{gh.label.replace('github.com/', '')}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {engineeringStandards.map((std, idx) => {
            const IconComp = std.icon;
            return (
              <div
                key={idx}
                className="light-card rounded-2xl p-7 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-slate-900 dark:bg-blue-950/70 text-blue-400 font-mono flex items-center justify-center mb-4 border border-transparent dark:border-blue-800/50 shadow-xs">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                    {std.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {std.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center gap-1 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>CORE DEVLOGIC GUARANTEE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architectural Consultation Card */}
        <div className="p-7 sm:p-9 rounded-2xl light-card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
              Need a custom system built by experienced engineers?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Book a 30-minute technical scope review directly with our lead engineering team.
            </p>
          </div>

          <button
            onClick={onOpenProjectInquiry}
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-xs transition-all shrink-0 flex items-center gap-2 apple-press shadow-md"
          >
            <span>Book Scope Review</span>
            <ArrowRight className="w-4 h-4 text-blue-400 dark:text-blue-200" />
          </button>
        </div>

      </div>
    </section>
  );
};

