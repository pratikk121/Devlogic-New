import React from 'react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem } from '../types';
import { 
  FolderGit2, 
  ArrowRight
} from 'lucide-react';

interface FeaturedWorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenProjectInquiry: () => void;
}

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({
  onSelectProject,
}) => {
  return (
    <section id="work-section" className="py-20 md:py-28 bg-white dark:bg-slate-900/40 relative text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs mb-3 shadow-2xs">
              <FolderGit2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>SELECTED WORK // REPRESENTATIVE SYSTEM ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-[-0.03em]">
              Software We Know How to Build.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base mt-3 leading-relaxed tracking-[-0.01em]">
              Explore real system architectures and representative software applications built using Devlogic engineering standards.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-block px-3.5 py-1.5 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold">
              Note: All work below represents internal demos & functional architectures.
            </span>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => {
            const cardSpan = 
              index === 0 ? 'lg:col-span-2' : 
              index === 1 ? 'lg:col-span-1' : 
              'lg:col-span-3';
            const isWide = index === 0 || index === 2;
            return (
              <div
                key={project.id}
                className={`${cardSpan} light-card rounded-2xl p-7 flex flex-col justify-between group transition-all`}
              >
                <div className={isWide ? "grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full" : "w-full flex flex-col justify-between h-full"}>
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Header Tag */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 rounded-md font-semibold text-[11px] bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                          {project.category}
                        </span>
                        <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                          {project.industry}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Challenge & Solution Summary */}
                    <div className="bg-slate-50/90 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 mb-6 space-y-2 text-xs mt-auto">
                      <div>
                        <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">THE CHALLENGE:</span>
                        <p className="text-slate-700 dark:text-slate-300 line-clamp-2 mt-0.5">{project.challenge}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800">
                        <span className="font-mono text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider block">OUR SYSTEM SOLUTION:</span>
                        <p className="text-slate-700 dark:text-slate-300 line-clamp-2 mt-0.5">{project.solutionBuilt}</p>
                      </div>
                    </div>
                  </div>

                  <div className={`flex flex-col justify-between h-full pt-4 lg:pt-0 ${isWide ? "lg:border-l lg:pl-8 lg:border-slate-200/80 dark:lg:border-slate-800" : ""}`}>
                    {/* Metrics Badges */}
                    <div className="grid grid-cols-3 gap-2 mb-6 text-center font-mono text-[11px]">
                      {project.metricsOutcome.map((m, i) => (
                        <div key={i} className="p-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                          <div className="font-bold text-slate-900 dark:text-white">{m.value}</div>
                          <div className="text-[9px] text-slate-500 dark:text-slate-400 truncate mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack & Action Footer */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md text-[10px] bg-slate-100/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/80 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => onSelectProject(project)}
                        className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 group/btn apple-press shadow-md"
                      >
                        <span>View System Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 text-blue-400 dark:text-blue-200 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
