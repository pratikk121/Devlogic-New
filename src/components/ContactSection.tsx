import React, { useState, useEffect } from 'react';
import { ScopeInquiryState } from '../types';
import { 
  Send, 
  CheckCircle2, 
  Clock, 
  Mail, 
  Phone, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  RefreshCw,
  Download
} from 'lucide-react';

interface ContactSectionProps {
  prefilledSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledSubject }) => {
  const [formData, setFormData] = useState<ScopeInquiryState>({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectTypes: prefilledSubject ? ['Custom Software'] : ['Web Application'],
    budgetRange: '$15k - $30k',
    timeline: '1 - 2 Months',
    description: prefilledSubject ? `I would like to inquire about: ${prefilledSubject}` : '',
    existingSystemUrl: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        description: `Inquiry regarding: ${prefilledSubject}`
      }));
    }
  }, [prefilledSubject]);

  const projectTypeOptions = [
    'Website',
    'Web Application',
    'Mobile Application',
    'Custom Software',
    'Business System',
    'Automation',
    'AI Integration',
    'UI/UX Design',
    'Maintenance'
  ];

  const handleToggleProjectType = (type: string) => {
    setFormData((prev) => {
      const exists = prev.projectTypes.includes(type);
      return {
        ...prev,
        projectTypes: exists
          ? prev.projectTypes.filter((t) => t !== type)
          : [...prev.projectTypes, type]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleDownloadInquiryRecord = () => {
    const md = `# DEVLOGIC SYSTEMS - PROJECT INQUIRY RECORD
Timestamp: ${new Date().toISOString()}

## CONTACT DETAILS
- **Name**: ${formData.name}
- **Email**: ${formData.email}
- **Company**: ${formData.company || 'N/A'}
- **Phone**: ${formData.phone || 'N/A'}

## PROJECT SPECIFICATIONS
- **Selected System Types**: ${formData.projectTypes.join(', ')}
- **Budget Range**: ${formData.budgetRange}
- **Desired Timeline**: ${formData.timeline}
- **Description & Requirements**:
${formData.description}

---
Devlogic Systems Inc. - We build digital systems that work.
https://devlogicsystems.com
`;
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Devlogic_Inquiry_${formData.name.toLowerCase().replace(/\s+/g, '_')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact-section" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono text-xs mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>START A SYSTEM CONSULTATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have A Problem Worth Solving?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Tell us what you're trying to build, improve, or automate. We'll analyze your requirements and return a concrete architectural proposal.
          </p>
        </div>

        {submitted ? (
          <div className="glass-panel rounded-2xl p-8 sm:p-12 text-center border border-emerald-500/40 shadow-2xl animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">
              REQUEST SECURELY LOGGED
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Thank You, {formData.name || 'Partner'}.
            </h3>
            <p className="text-slate-300 text-sm max-w-lg mx-auto mb-8">
              Your system inquiry has been logged in our Devlogic CRM queue. Our principal engineers are reviewing your scope.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={handleDownloadInquiryRecord}
                className="px-6 py-3 rounded-xl text-xs font-semibold text-cyan-950 bg-cyan-400 hover:bg-cyan-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Scope Record (.md)</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    projectTypes: ['Web Application'],
                    budgetRange: '$15k - $30k',
                    timeline: '1 - 2 Months',
                    description: '',
                    existingSystemUrl: '',
                    preferredContact: 'email'
                  });
                }}
                className="px-6 py-3 rounded-xl font-mono text-xs text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800"
              >
                Submit Another Inquiry
              </button>
            </div>

            {/* Post Submission Roadmap */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-left max-w-xl mx-auto">
              <span className="font-mono text-xs text-cyan-400 uppercase font-bold block mb-4">
                NEXT STEPS ROADMAP:
              </span>
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3 p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="w-5 h-5 rounded-full bg-cyan-500 text-cyan-950 font-bold flex items-center justify-center text-[10px]">
                    1
                  </span>
                  <span>Scope Review by Lead Architect (Within 24 Hours)</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 font-bold flex items-center justify-center text-[10px]">
                    2
                  </span>
                  <span>Technical Discovery & Architecture Call</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 font-bold flex items-center justify-center text-[10px]">
                    3
                  </span>
                  <span>Fixed-Scope System Proposal & Milestones</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="glass-panel rounded-2xl p-6 sm:p-10 border border-slate-800/90 shadow-2xl space-y-8"
          >
            {/* Step 1: Select System Types */}
            <div>
              <label className="font-mono text-xs text-cyan-400 font-bold uppercase block mb-3">
                01. What type of system do you need built? (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {projectTypeOptions.map((type) => {
                  const isChecked = formData.projectTypes.includes(type);
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => handleToggleProjectType(type)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isChecked
                          ? 'bg-cyan-500 text-cyan-950 font-bold shadow-md'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '}{type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800/80">
              <div>
                <label className="font-mono text-xs text-slate-300 block mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-slate-300 block mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="s.jenkins@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-slate-300 block mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Nexus Logistics LLC"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-slate-300 block mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Step 3: Budget & Timeline Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800/80">
              <div>
                <label className="font-mono text-xs text-slate-300 block mb-2">
                  Estimated Budget Range
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option>$5k - $15k (Small Module / Site)</option>
                  <option>$15k - $30k (Web App / Automation)</option>
                  <option>$30k - $60k (Custom ERP / Full System)</option>
                  <option>$60k+ (Enterprise Ecosystem)</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-xs text-slate-300 block mb-2">
                  Desired Deployment Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option>&lt; 1 Month (Rapid Deployment)</option>
                  <option>1 - 2 Months (Standard Build)</option>
                  <option>2 - 4 Months (Comprehensive ERP)</option>
                  <option>Flexible / Exploratory</option>
                </select>
              </div>
            </div>

            {/* Step 4: System Description */}
            <div className="pt-4 border-t border-slate-800/80">
              <label className="font-mono text-xs text-slate-300 block mb-2">
                Project Overview & Core Bottlenecks
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe what you want to build, current manual workflows, or desired capabilities..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero spam guarantee. Full NDA protected.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold text-cyan-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-xl flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-cyan-950" />
                    <span>LOGGING INQUIRY...</span>
                  </>
                ) : (
                  <>
                    <span>Submit System Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
