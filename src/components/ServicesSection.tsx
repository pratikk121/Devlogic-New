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
  Terminal,
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
    <section id="services-section" className="py-20 md:py-28 bg-slate-50 relative text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Digital Systems Built to Fit Your Operations.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            We don't sell generic website templates or rigid SaaS subscriptions. We engineer custom web applications, mobile platforms, internal business software, and background automation pipelines designed specifically around your requirements.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComp = getIconComponent(service.iconName);
            return (
              <div
                key={service.id}
                className="light-card rounded-2xl p-7 flex flex-col justify-between group hover:border-slate-300 transition-all shadow-2xs"
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {service.category.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {service.fullDescription}
                  </p>

                  {/* Core Deliverables List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      KEY DELIVERABLES:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tech Stack & CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-1 max-w-[70%]">
                    {service.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-600 border border-slate-200 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenProjectInquiry(service.title)}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 group-hover:text-cyan-700 transition-colors"
                    title={`Inquire about ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Scope Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Have a specific system requirement not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              We specialize in custom software engineering. Contact our principal architects to review your technical specifications.
            </p>
          </div>

          <button
            onClick={() => onOpenProjectInquiry('Custom System Engineering')}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shrink-0 flex items-center gap-2"
          >
            <span>Request Custom Scope Review</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
