import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Terminal, Lock, Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenClientPortal: () => void;
  onOpenProjectInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenClientPortal,
  onOpenProjectInquiry
}) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-12 text-xs text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-mono text-base font-extrabold tracking-tight text-white">
                DEVLOGIC SYSTEMS
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We build custom software, web platforms, business systems, and automation pipelines for modern enterprises and startups.
            </p>

            <div className="flex items-center gap-2 pt-2 text-[10px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>SYSTEM STATUS: {COMPANY_INFO.systemStatus}</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'solutions', label: 'Solutions' },
                { id: 'work', label: 'Work & Portfolio' },
                { id: 'process', label: 'Process' },
                { id: 'about', label: 'About Company' },
                { id: 'lab', label: 'Devlogic Lab' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id as PageId)}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              Core Systems
            </h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('services')} className="hover:text-cyan-400">Web Development</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-cyan-400">Web Applications</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-cyan-400">Mobile Applications</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-cyan-400">Custom Software</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-cyan-400">Business ERPs</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-cyan-400">Workflow Automation</button></li>
            </ul>
          </div>

          {/* Client Portal Utility */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              Client Utilities
            </h4>
            <button
              onClick={onOpenClientPortal}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300 transition-all font-mono"
            >
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Client Portal</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenProjectInquiry}
              className="w-full py-2.5 rounded-lg font-bold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-sm font-mono"
            >
              Start a Project
            </button>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Devlogic Systems Inc. All rights reserved. "Engineered rather than generated."
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Spec</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
