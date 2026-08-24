import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { 
  Terminal, 
  Menu, 
  X, 
  Lock, 
  ArrowRight, 
  Calculator,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenClientPortal: () => void;
  onOpenProjectInquiry: () => void;
  onOpenEstimator: () => void;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenClientPortal,
  onOpenProjectInquiry,
  onOpenEstimator,
  theme = 'light',
  onToggleTheme = () => {}
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
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 shadow-sm py-3'
          : 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Company Brand Identity */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 text-left"
            aria-label="Devlogic Systems Home"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 dark:bg-blue-950/60 text-blue-400 font-mono shadow-sm group-hover:bg-slate-800 border border-transparent dark:border-blue-800/50 flex items-center justify-center transition-colors">
              <Terminal className="w-4 h-4" />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                DEVLOGIC
              </span>
              <span className="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hidden sm:inline-block">
                SYSTEMS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1 rounded-lg border border-slate-200/80 dark:border-slate-700/80">
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
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold shadow-xs border border-slate-200/60 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
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
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-700 hover:border-blue-200/65 dark:hover:border-blue-800/50 transition-all"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Cost Estimator</span>
            </button>

            <button
              onClick={onOpenClientPortal}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-700 hover:border-blue-200/65 dark:hover:border-blue-800/50 transition-all"
            >
              <Lock className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              <span>Client Portal</span>
            </button>

            <button
              onClick={onOpenProjectInquiry}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all hover:scale-[1.01]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-200" />
            </button>

            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />}
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600 dark:text-slate-300" />}
            </button>

            <button
              onClick={onOpenEstimator}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              title="Estimator Tool"
            >
              <Calculator className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900 dark:text-white" /> : <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-4 pb-6 mt-2 shadow-lg animate-in slide-in-from-top duration-200">
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
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold border border-slate-200 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <button
              onClick={() => {
                onOpenEstimator();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <Calculator className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Project Cost Estimator Tool</span>
            </button>

            <button
              onClick={() => {
                onOpenClientPortal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <Lock className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span>Devlogic Client Portal</span>
            </button>

            <button
              onClick={() => {
                onOpenProjectInquiry();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
