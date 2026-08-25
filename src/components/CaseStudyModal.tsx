import React, { useEffect, useRef } from 'react';
import { ProjectItem } from '../types';
import { 
  X, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Monitor,
  Smartphone,
  Terminal,
  ArrowRight
} from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenProjectInquiry: (initialSubject?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenProjectInquiry
}) => {
  if (!project) return null;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (modalRef.current) {
      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) {
        (focusable[0] as HTMLElement).focus();
      }
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl overflow-y-auto">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="casestudy-modal-title"
        className="bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-3xl max-w-4xl w-full my-8 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto apple-modal-content"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors apple-press focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8 pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-blue-950/80 text-blue-400 border border-blue-800/80 font-bold">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              // {project.industry}
            </span>
          </div>

          <h2 id="casestudy-modal-title" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Outcome Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 mb-8">
          {project.metricsOutcome.map((m, idx) => (
            <div key={idx} className="p-3 text-center rounded-xl bg-slate-900/60 border border-slate-800/50">
              <div className="text-2xl font-extrabold text-white font-mono">{m.value}</div>
              <div className="text-xs text-slate-400 mt-0.5 font-medium">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Deep Dive Content */}
        <div className="space-y-8">
          {/* Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest block">
                THE CHALLENGE & BOTTLENECKS
              </span>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
                DEVLOGIC SYSTEM SOLUTION
              </span>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {project.solutionBuilt}
              </p>
            </div>
          </div>

          {/* Technical Approach */}
          {project.approach && (
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/80 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                ENGINEERING ARCHITECTURE & APPROACH:
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.approach}
              </p>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3">
              PRODUCTION TECH STACK:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* System Interface / Module Previews */}
          {project.screens && project.screens.length > 0 && (
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-4">
                SYSTEM MODULE ARCHITECTURE & PREVIEWS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.screens.map((sc, i) => (
                  <div key={i} className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/80 p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {sc.type === 'mobile_screen' ? (
                          <Smartphone className="w-4 h-4 text-blue-400" />
                        ) : sc.type === 'console_view' ? (
                          <Terminal className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Monitor className="w-4 h-4 text-blue-400" />
                        )}
                        <span className="font-mono text-xs font-bold text-slate-200">{sc.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">{sc.subtitle}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {sc.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-800">
          <div className="text-xs font-mono text-slate-400">
            System Type: <span className="text-slate-200 font-semibold">{project.clientType}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white apple-press transition-colors"
            >
              Close Study
            </button>

            <button
              onClick={() => {
                const title = project.title;
                onClose();
                onOpenProjectInquiry(`Similar system build as: ${title}`);
              }}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md apple-press flex items-center gap-1.5"
            >
              <span>Build Similar System</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
