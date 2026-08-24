import React, { useState, useEffect, Suspense } from 'react';
import { PageId, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { SolutionsSection } from './components/SolutionsSection';
import { FeaturedWorkSection } from './components/FeaturedWorkSection';
import { ProcessSection } from './components/ProcessSection';
import { LabSection } from './components/LabSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

// Dynamic Code-Splitting for Heavy Modals (Loaded on-demand)
const CaseStudyModal = React.lazy(() =>
  import('./components/CaseStudyModal').then((m) => ({ default: m.CaseStudyModal }))
);
const ClientPortalModal = React.lazy(() =>
  import('./components/ClientPortalModal').then((m) => ({ default: m.ClientPortalModal }))
);
const ProjectEstimatorModal = React.lazy(() =>
  import('./components/ProjectEstimatorModal').then((m) => ({ default: m.ProjectEstimatorModal }))
);

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [inquirySubject, setInquirySubject] = useState<string | undefined>(undefined);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProjectInquiry = (subject?: string) => {
    setInquirySubject(subject);
    setCurrentPage('contact');
    setTimeout(() => {
      const el = document.getElementById('contact-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      
      {/* Skip to Main Content Bypass Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] px-4 py-2 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold shadow-2xl focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenClientPortal={() => setIsPortalOpen(true)}
        onOpenProjectInquiry={() => handleOpenProjectInquiry()}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Router View */}
      <main id="main-content" className="flex-grow">
        {/* HOMEPAGE - 8 Core Streamlined Sections */}
        {currentPage === 'home' && (
          <>
            {/* 1. HERO */}
            <Hero
              onOpenProjectInquiry={() => handleOpenProjectInquiry()}
              onExploreWork={() => {
                const el = document.getElementById('work-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* TRUST & TECHNICAL STANDARDS STRIP */}
            <TrustStrip />

            {/* 2. WHAT WE BUILD */}
            <ServicesSection
              onOpenProjectInquiry={handleOpenProjectInquiry}
            />

            {/* 3. SELECTED WORK */}
            <FeaturedWorkSection
              onSelectProject={(proj) => setSelectedProject(proj)}
              onOpenProjectInquiry={() => handleOpenProjectInquiry()}
            />

            {/* 4. BUSINESS PROBLEMS WE SOLVE */}
            <SolutionsSection
              onOpenProjectInquiry={handleOpenProjectInquiry}
            />

            {/* 5. HOW WE WORK */}
            <ProcessSection
              onOpenProjectInquiry={() => handleOpenProjectInquiry()}
            />

            {/* 6. DEVLOGIC LAB */}
            <LabSection />

            {/* 7. ABOUT DEVLOGIC & ENGINEERING STANDARDS */}
            <AboutSection
              onOpenProjectInquiry={() => handleOpenProjectInquiry()}
            />

            {/* FREQUENTLY ASKED QUESTIONS */}
            <FaqSection />

            {/* 8. FINAL CALL TO ACTION */}
            <ContactSection prefilledSubject={inquirySubject} />
          </>
        )}

        {/* SERVICES PAGE */}
        {currentPage === 'services' && (
          <div className="pt-20">
            <ServicesSection onOpenProjectInquiry={handleOpenProjectInquiry} />
            <ContactSection prefilledSubject={inquirySubject} />
          </div>
        )}

        {/* SOLUTIONS PAGE */}
        {currentPage === 'solutions' && (
          <div className="pt-20">
            <SolutionsSection onOpenProjectInquiry={handleOpenProjectInquiry} />
            <ContactSection prefilledSubject={inquirySubject} />
          </div>
        )}

        {/* WORK PAGE */}
        {currentPage === 'work' && (
          <div className="pt-20">
            <FeaturedWorkSection
              onSelectProject={(proj) => setSelectedProject(proj)}
              onOpenProjectInquiry={() => handleOpenProjectInquiry()}
            />
            <ContactSection prefilledSubject={inquirySubject} />
          </div>
        )}

        {/* PROCESS PAGE */}
        {currentPage === 'process' && (
          <div className="pt-20">
            <ProcessSection onOpenProjectInquiry={() => handleOpenProjectInquiry()} />
            <ContactSection prefilledSubject={inquirySubject} />
          </div>
        )}

        {/* ABOUT PAGE */}
        {currentPage === 'about' && (
          <div className="pt-20">
            <AboutSection onOpenProjectInquiry={() => handleOpenProjectInquiry()} />
            <ContactSection prefilledSubject={inquirySubject} />
          </div>
        )}

        {/* LAB PAGE */}
        {currentPage === 'lab' && (
          <div className="pt-20">
            <LabSection />
            <ContactSection prefilledSubject={inquirySubject} />
          </div>
        )}

        {/* CONTACT PAGE */}
        {currentPage === 'contact' && (
          <div className="pt-20">
            <ContactSection prefilledSubject={inquirySubject} />
            <FaqSection />
          </div>
        )}
      </main>

      {/* Dynamic Lazy-Loaded Modals with Suspense */}
      <Suspense fallback={null}>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onOpenProjectInquiry={(subject) => handleOpenProjectInquiry(subject)}
          />
        )}

        {isPortalOpen && (
          <ClientPortalModal
            isOpen={isPortalOpen}
            onClose={() => setIsPortalOpen(false)}
          />
        )}

        {isEstimatorOpen && (
          <ProjectEstimatorModal
            isOpen={isEstimatorOpen}
            onClose={() => setIsEstimatorOpen(false)}
            onProceedToInquiry={(summary) => handleOpenProjectInquiry(summary)}
          />
        )}
      </Suspense>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenClientPortal={() => setIsPortalOpen(true)}
        onOpenProjectInquiry={() => handleOpenProjectInquiry()}
      />
    </div>
  );
}
