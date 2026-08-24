import React from 'react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem } from '../types';
import { 
  FolderGit2, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Terminal,
  ShieldCheck
} from 'lucide-react';

interface FeaturedWorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenProjectInquiry: () => void;
}

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({
  onSelectProject,
  onOpenProjectInquiry
}) => {
  return (
    <section id="work-section" className="py-20 md:py-28 bg-white relative text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs mb-3 shadow-2xs">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-600" />
              <span>SELECTED WORK // REPRESENTATIVE SYSTEM ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Software We Know How to Build.
            </h2>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              Explore real system architectures and representative software applications built using Devlogic engineering standards.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-block px-3.5 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 font-mono text-xs font-semibold">
              Note: All work below represents internal demos & functional architectures.
            </span>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="light-card rounded-2xl p-7 flex flex-col justify-between group hover:border-slate-300 transition-all shadow-2xs"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded font-mono text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">
                    {project.industry}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {project.tagline}
                </p>

                {/* Challenge & Solution Summary */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 mb-6 space-y-2 text-xs">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-slate-500 uppercase block">THE CHALLENGE:</span>
                    <p className="text-slate-700 line-clamp-2 mt-0.5">{project.challenge}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="font-mono text-[10px] font-bold text-cyan-700 uppercase block">OUR SYSTEM SOLUTION:</span>
                    <p className="text-slate-700 line-clamp-2 mt-0.5">{project.solutionBuilt}</p>
                  </div>
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 mb-6 text-center font-mono text-[11px]">
                  {project.metricsOutcome.map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-white border border-slate-200">
                      <div className="font-bold text-slate-900">{m.value}</div>
                      <div className="text-[9px] text-slate-500 truncate mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Action Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>View System Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
