import React from 'react';
import { ProjectItem } from '../types';
import { 
  X, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Code2, 
  Cpu, 
  Database, 
  ExternalLink,
  ShieldCheck,
  Building2,
  FileText
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full my-8 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8 pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800 font-bold">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              // {project.industry}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Measurable Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-4 rounded-xl bg-slate-950 border border-slate-800">
          {project.metricsOutcome.map((m, i) => (
            <div key={i} className="text-center p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
              <div className="font-mono text-2xl font-extrabold text-cyan-400">
                {m.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Case Study Sections */}
        <div className="space-y-8 text-sm">
          {/* Section 1: The Challenge */}
          <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase mb-2">
              <FileText className="w-4 h-4" /> 01 — THE CHALLENGE
            </div>
            <p className="text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Section 2: Devlogic Approach */}
          <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold uppercase mb-2">
              <Cpu className="w-4 h-4" /> 02 — THE DEVLOGIC APPROACH
            </div>
            <p className="text-slate-300 leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* Section 3: The System Built */}
          <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-bold uppercase mb-2">
              <CheckCircle2 className="w-4 h-4" /> 03 — THE SYSTEM BUILT
            </div>
            <p className="text-slate-300 leading-relaxed">
              {project.solutionBuilt}
            </p>
          </div>

          {/* Technology Stack Tags */}
          <div>
            <div className="font-mono text-xs text-slate-400 uppercase font-semibold mb-3">
              TECHNOLOGY STACK ARCHITECTURE:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interface Previews */}
          {project.screens && project.screens.length > 0 && (
            <div>
              <div className="font-mono text-xs text-slate-400 uppercase font-semibold mb-3">
                INTERFACE & SYSTEM PREVIEWS:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.screens.map((sc, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="font-mono text-xs font-bold text-cyan-400 mb-1">
                      {sc.title}
                    </div>
                    <div className="text-xs font-mono text-slate-400 mb-2">
                      {sc.subtitle}
                    </div>
                    <p className="text-xs text-slate-300">
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
            Client Type: <span className="text-slate-200">{project.clientType}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white"
            >
              Close Study
            </button>

            <button
              onClick={() => {
                const title = project.title;
                onClose();
                onOpenProjectInquiry(`Similar system build as: ${title}`);
              }}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-lg shadow-cyan-500/20"
            >
              Build Similar System
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
