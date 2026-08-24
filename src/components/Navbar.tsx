import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { 
  Terminal, 
  Menu, 
  X, 
  Lock, 
  ArrowRight, 
  Calculator
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenClientPortal: () => void;
  onOpenProjectInquiry: () => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenClientPortal,
  onOpenProjectInquiry,
  onOpenEstimator
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'work', label: 'Work' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
    { id: 'lab', label: 'Lab' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Company Brand Identity */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1 text-left"
            aria-label="Devlogic Systems Home"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-cyan-400 font-mono shadow-sm group-hover:bg-slate-800 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-extrabold tracking-tight text-slate-900 group-hover:text-cyan-700 transition-colors">
                DEVLOGIC
              </span>
              <span className="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 hidden sm:inline-block">
                SYSTEMS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-lg border border-slate-200/80">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white text-slate-900 font-semibold shadow-xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Utilities & CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenEstimator}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-700 hover:text-cyan-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all"
            >
              <Calculator className="w-3.5 h-3.5 text-cyan-600" />
              <span>Cost Estimator</span>
            </button>

            <button
              onClick={onOpenClientPortal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all"
            >
              <Lock className="w-3.5 h-3.5 text-slate-600" />
              <span>Client Portal</span>
            </button>

            <button
              onClick={onOpenProjectInquiry}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all hover:scale-[1.01]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenEstimator}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
              title="Estimator Tool"
            >
              <Calculator className="w-4 h-4 text-cyan-600" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="space-y-1 mb-6">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-slate-100 text-slate-900 font-semibold border border-slate-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                onOpenEstimator();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono text-slate-700 bg-slate-100 border border-slate-200"
            >
              <Calculator className="w-4 h-4 text-cyan-600" />
              <span>Project Cost Estimator Tool</span>
            </button>

            <button
              onClick={() => {
                onOpenClientPortal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono text-slate-700 bg-slate-100 border border-slate-200"
            >
              <Lock className="w-4 h-4 text-slate-600" />
              <span>Devlogic Client Portal</span>
            </button>

            <button
              onClick={() => {
                onOpenProjectInquiry();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold text-white bg-slate-900"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

