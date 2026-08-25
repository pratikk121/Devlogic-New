import React, { useState } from 'react';
import { FAQ_DATA } from '../data/companyData';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = FAQ_DATA.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 md:py-28 bg-slate-950 relative border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-950/80 border border-blue-800/60 text-blue-400 font-mono text-xs mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clear Answers Before We Start.
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-normal">
            Everything you need to know about engaging Devlogic Systems for your next software build.
          </p>
        </div>

        {/* FAQ Quick Search Bar */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            aria-label="Search frequently asked questions"
            placeholder="Search questions (e.g., pricing, MVP, maintenance, IP ownership)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Live Region for Screen Readers */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'}
        </div>

        {/* Empty State */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 px-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-400 font-mono text-xs">
            No matching questions found for "{searchQuery}".
          </div>
        )}

        {/* Accordion List with Fluid CSS Grid Height Animation */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-blue-300 apple-press"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-blue-400 px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-blue-400 shrink-0 transition-transform duration-200 ease-out ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* GPU-Friendly Fluid Accordion Expand */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                      <p>{faq.answer}</p>
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
