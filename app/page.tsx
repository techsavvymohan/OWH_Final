'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { ZeroBugBand } from '@/components/sections/zero-bug-band';
import { PartnerMarquee } from '@/components/sections/partner-marquee';
import { BuildBento } from '@/components/sections/build-bento';
import { GrowthBento } from '@/components/sections/growth-bento';
import { FeatureMarquee } from '@/components/sections/feature-marquee';
import { UnifiedDashboard } from '@/components/sections/unified-dashboard';
import { ProofTimeline } from '@/components/sections/proof-timeline';
import { CoreCapabilities } from '@/components/sections/core-capabilities';
import { BeforeAfterSlider } from '@/components/sections/before-after-slider';
import { PhilosophyStats } from '@/components/sections/philosophy-stats';
import { GrowthStackSelector } from '@/components/sections/growth-stack-selector';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaSection } from '@/components/sections/cta-section';
import { Footer } from '@/components/footer';
import { ProjectModal } from '@/components/project-modal';
import { AuthModal } from '@/components/auth/auth-modal';
import { OnboardingModal } from '@/components/onboarding-modal';
import { SectionReveal, PageScrollProgress } from '@/components/ui/section-reveal';

export default function HomePage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = React.useState(false);
  const [initialService, setInitialService] = React.useState<string | undefined>(undefined);

  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<'login' | 'signup' | 'reset'>('login');

  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = React.useState(false);

  const handleOpenProjectModal = (service?: string) => {
    setInitialService(service);
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
    setInitialService(undefined);
  };

  const handleOpenAuthModal = (mode: 'login' | 'signup' | 'reset' = 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleOpenOnboardingModal = () => {
    setIsOnboardingModalOpen(true);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-blue-600 selection:text-white"
    >
      {/* Dynamic Ambient Gradient Backdrop Layer for White + Black + Blue + Grey Luxury Theme */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/15 via-slate-300/20 to-transparent rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-gradient-to-bl from-slate-200/40 via-blue-100/20 to-transparent rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-slate-300/25 via-blue-200/15 to-transparent rounded-full blur-[160px] animate-float-slow" />
        <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-blue-400/12 via-slate-200/30 to-transparent rounded-full blur-[140px] animate-float" />
      </div>
      {/* Top Page Scroll Indicator with Framer Motion Spring */}
      <PageScrollProgress />

      {/* Sticky Glassmorphism Navbar with Smooth Active Tracker */}
      <Navbar
        onOpenProjectModal={handleOpenProjectModal}
        onOpenAuthModal={handleOpenAuthModal}
        onOpenOnboardingModal={handleOpenOnboardingModal}
      />

      {/* 1. Hero Section */}
      <HeroSection onOpenProjectModal={handleOpenProjectModal} />

      {/* 2. Zero-Bug Guarantee Band */}
      <SectionReveal delay={0.05}>
        <ZeroBugBand onOpenProjectModal={handleOpenProjectModal} />
      </SectionReveal>

      {/* 3. Tech Partner Logo Marquee */}
      <SectionReveal delay={0.05}>
        <PartnerMarquee />
      </SectionReveal>

      {/* 4. Build Capabilities Bento Grid (5-Card Asymmetric Grid) */}
      <SectionReveal>
        <BuildBento onOpenProjectModal={handleOpenProjectModal} />
      </SectionReveal>

      {/* 5. Growth Services Bento Grid (4-Card Asymmetric Grid in Emerald) */}
      <SectionReveal>
        <GrowthBento onOpenProjectModal={handleOpenProjectModal} />
      </SectionReveal>

      {/* 6. Feature Marquee (Dual Counter-Rotating Rows) */}
      <SectionReveal>
        <FeatureMarquee />
      </SectionReveal>

      {/* 7. Unified Dashboard Mockup (Auto-cycling 4 tabs) */}
      <SectionReveal>
        <UnifiedDashboard onOpenProjectModal={handleOpenProjectModal} />
      </SectionReveal>

      {/* 8. Proof Timeline (90-Day Launch & Growth Sprint) */}
      <SectionReveal>
        <ProofTimeline onOpenProjectModal={handleOpenProjectModal} />
      </SectionReveal>

      {/* 9. Core Capabilities Grid (8 Services with Filters) */}
      <SectionReveal>
        <CoreCapabilities onOpenProjectModal={handleOpenProjectModal} />
      </SectionReveal>

      {/* 10. Before / After Comparison Slider */}
      <SectionReveal>
        <BeforeAfterSlider />
      </SectionReveal>

      {/* 11. Brand Philosophy & Stats (Strategy · Impact · Growth · 100%) */}
      <SectionReveal>
        <PhilosophyStats />
      </SectionReveal>

      {/* 12. Growth Stack Selector (3-Way Segmented Control Pricing & Plans) */}
      <SectionReveal>
        <GrowthStackSelector onOpenProjectModal={handleOpenProjectModal} />
      </SectionReveal>

      {/* 14. FAQ Accordion (10 Comprehensive Q&As) */}
      <SectionReveal>
        <FaqSection onOpenProjectModal={handleOpenProjectModal} />
      </SectionReveal>

      {/* 15. CTA Section */}
      <SectionReveal>
        <CtaSection onOpenProjectModal={handleOpenProjectModal} />
      </SectionReveal>

      {/* 16. Footer */}
      <Footer />

      {/* Interactive Project Inquiry & Proposal Modal */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={handleCloseProjectModal}
        initialService={initialService}
      />

      {/* User Authentication Modal (Login, Signup, Reset, Social) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
        onSuccess={() => {
          // If needed, can launch onboarding after signup
        }}
      />

      {/* Customer Onboarding & Growth Blueprint Wizard */}
      <OnboardingModal
        isOpen={isOnboardingModalOpen}
        onClose={() => setIsOnboardingModalOpen(false)}
        onFinish={() => {
          // Finished onboarding
        }}
      />
    </motion.main>
  );
}
