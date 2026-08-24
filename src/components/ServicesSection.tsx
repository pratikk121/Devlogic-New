import React from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { 
  Globe, 
  Smartphone, 
  Building2, 
  Zap, 
  Server, 
  CheckCircle2, 
  ArrowRight,
  Cpu
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenProjectInquiry: (initialSubject?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenProjectInquiry }) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return Globe;
      case 'Smartphone': return Smartphone;
      case 'Building2': return Building2;
      case 'Zap': return Zap;
      case 'Server': return Server;
      default: return Cpu;
    }
  };

  return (
    <section id="services-section" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-[-0.03em]">
            Digital Systems Built to Fit Your Operations.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-3 leading-relaxed tracking-[-0.01em]">
            We don't sell generic website templates or rigid SaaS subscriptions. We engineer custom web applications, mobile platforms, internal business software, and background automation pipelines designed specifically around your requirements.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComp = getIconComponent(service.iconName);
            const cardSpan = 
              index === 0 ? 'lg:col-span-2' : 
              index === 1 ? 'lg:col-span-1' : 
              index === 2 ? 'lg:col-span-1' : 
              index === 3 ? 'lg:col-span-2' : 
              'lg:col-span-3';
            const isWide = index === 0 || index === 3 || index === 4;
            return (
              <div
                key={service.id}
                className={`${cardSpan} light-card rounded-2xl p-7 flex flex-col justify-between group transition-all`}
              >
                <div className={isWide ? "grid grid-cols-1 lg:grid-cols-2 gap-6 w-full" : "w-full"}>
                  <div>
                    {/* Card Header & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-blue-950/70 text-blue-400 font-mono flex items-center justify-center shadow-xs border border-transparent dark:border-blue-800/50">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {service.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Core Deliverables List */}
                  <div className={`space-y-2.5 mb-6 ${isWide ? "lg:pt-0 lg:border-t-0 lg:border-l lg:pl-6 lg:border-slate-200/80 dark:lg:border-slate-800" : "pt-4 border-t border-slate-100 dark:border-slate-800"}`}>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2">
                      KEY DELIVERABLES:
                    </span>
                    <div className="space-y-2.5">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Tech Stack & CTA */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between mt-4 w-full">
                  <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                    {service.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md text-[10px] bg-slate-100/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/80 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenProjectInquiry(service.title)}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors apple-press"
                    title={`Inquire about ${service.title}`}
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Scope Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl light-card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Have a specific system requirement not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              We specialize in custom software engineering. Contact our principal architects to review your technical specifications.
            </p>
          </div>

          <button
            onClick={() => onOpenProjectInquiry('Custom System Engineering')}
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold transition-all shrink-0 flex items-center gap-2 apple-press shadow-md"
          >
            <span>Request Custom Scope Review</span>
            <ArrowRight className="w-4 h-4 text-blue-400 dark:text-blue-200" />
          </button>
        </div>

      </div>
    </section>
  );
};
