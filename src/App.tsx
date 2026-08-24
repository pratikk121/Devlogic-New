import React, { useState } from 'react';
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
import { CaseStudyModal } from './components/CaseStudyModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-cyan-500 selection:text-cyan-950">
      
      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenClientPortal={() => setIsPortalOpen(true)}
        onOpenProjectInquiry={() => handleOpenProjectInquiry()}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main Content Router View */}
      <main className="flex-grow">
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

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenProjectInquiry={(subject) => handleOpenProjectInquiry(subject)}
      />

      {/* Client Portal Preview Modal */}
      <ClientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      {/* Interactive Project Estimator Modal */}
      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onProceedToInquiry={(summary) => handleOpenProjectInquiry(summary)}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenClientPortal={() => setIsPortalOpen(true)}
        onOpenProjectInquiry={() => handleOpenProjectInquiry()}
      />
    </div>
  );
}
