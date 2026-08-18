'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Layers,
  Compass,
  Code2,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Cpu,
  BarChart3,
  Search,
  MessageSquare,
  Phone,
  HelpCircle,
  Clock
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { BlurText } from '@/components/ui/blur-text';
import { SelectedWorkShowcase, FEATURED_PROJECTS } from '@/components/sections/selected-work-showcase';
import { PageScrollProgress } from '@/components/ui/section-reveal';

import { LiveStatusDock } from '@/components/ui/live-status-dock';
import { ProjectModal } from '@/components/project-modal';
import { AuthModal } from '@/components/auth/auth-modal';
import { OnboardingModal } from '@/components/onboarding-modal';

const CORE_PILLARS = [
  {
    icon: Compass,
    title: 'Make complexity feel simple',
    desc: 'We turn dense rules, offers, products, and workflows into clean interfaces people can understand and navigate quickly.',
    badge: 'UX Architecture',
    color: 'text-blue-600',
    bg: 'bg-blue-50 border-blue-200',
  },
  {
    icon: Zap,
    title: 'Design for the next action',
    desc: 'Every page is structured around what the visitor should do next, whether that means comparing, saving, browsing, or enquiring.',
    badge: 'Conversion Strategy',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border-emerald-200',
  },
  {
    icon: Cpu,
    title: 'Build for the business behind the product',
    desc: 'We engineer the underlying platform so the experience can grow with new content, users, offers, integrations, and revenue paths.',
    badge: 'Full-Stack Scale',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 border-indigo-200',
  },
];

export default function WorkPage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = React.useState(false);
  const [initialService, setInitialService] = React.useState<string | undefined>(undefined);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<'login' | 'signup' | 'reset'>('login');
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = React.useState(false);

  const handleOpenProjectModal = (service?: string) => {
    setInitialService(service);
    setIsProjectModalOpen(true);
  };

  const handleOpenAuthModal = (mode: 'login' | 'signup' | 'reset' = 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Scroll Progress Bar */}
      <PageScrollProgress />

      {/* Global Navigation */}
      <Navbar
        onOpenProjectModal={handleOpenProjectModal}
        onOpenAuthModal={handleOpenAuthModal}
        onOpenOnboardingModal={() => setIsOnboardingModalOpen(true)}
      />

      <main>
        {/* =========================================================================
            1. OUR WORK PAGE HERO (Section 2 of Copy Document)
           ========================================================================= */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/90 to-slate-100/60 border-b border-slate-200">
          {/* Ambient Background Auras */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[420px] bg-gradient-to-tr from-blue-200/40 via-sky-200/30 to-emerald-200/30 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-slate-200/60 blur-[90px] rounded-full pointer-events-none -z-10" />

          {/* Precision Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-60" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            {/* Breadcrumb / Back Link */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-2 text-xs font-mono text-slate-500"
            >
              <Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-bold">Our Work</span>
            </motion.div>

            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-slate-100 text-xs font-mono font-bold border border-slate-800 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>SELECTED DIGITAL PRODUCTS</span>
              </div>
            </motion.div>

            {/* Main Headline with BlurText */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] max-w-4xl mx-auto">
              <BlurText
                text="We Build Digital Products People Use, Trust, and Come Back To."
                wordDelay={0.06}
                highlightWords={['Digital', 'Products', 'Trust,']}
                highlightClass="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 bg-clip-text text-transparent"
              />
            </h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              From shopping discovery platforms to automated savings tools and high-trust comparison systems, we design and engineer digital experiences that make complex decisions feel simple.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
            >
              <MagneticButton strength={12}>
                <button
                  type="button"
                  id="work-hero-discuss-btn"
                  onClick={() => handleOpenProjectModal('Next Build Consultation')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-blue-200" />
                  <span>Discuss Your Next Build</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </MagneticButton>

              <MagneticButton strength={10}>
                <Link
                  href="/#services"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-white border border-slate-300 text-slate-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-slate-50 transition-all cursor-pointer shadow-xs"
                >
                  <span>Explore Our Services</span>
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex items-center justify-center"
            >
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono font-medium text-slate-500 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-200 shadow-2xs">
                <span>Product Strategy</span>
                <span className="text-slate-300">·</span>
                <span>UX/UI Design</span>
                <span className="text-slate-300">·</span>
                <span>Full-Stack Development</span>
                <span className="text-slate-300">·</span>
                <span className="text-emerald-600 font-bold">Growth-Ready Architecture</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            2. POSITIONING SECTION: Different Products. Same Engineering Standard.
               (Section 5 of Copy Document)
           ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto space-y-4 mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                <Code2 className="w-3.5 h-3.5 text-blue-600" />
                <span>UNIFIED ARCHITECTURE PRINCIPLES</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Different Products. Same Engineering Standard.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A coupon extension, a commerce discovery platform, and a prop-firm comparison system may serve different audiences—but they all depend on the same fundamentals: clear information architecture, fast interactions, trustworthy interfaces, and a next step users understand immediately.
              </p>
            </motion.div>

            {/* 3 Core Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CORE_PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                    className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-sm hover:shadow-md hover:bg-white hover:border-slate-300 transition-all space-y-4 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${pillar.bg} flex items-center justify-center ${pillar.color} shadow-2xs group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. FULL PROJECT SHOWCASE MODULE (PersueKey, GoCoupon, MatchingProp)
           ========================================================================= */}
        <SelectedWorkShowcase
          onOpenProjectModal={handleOpenProjectModal}
          isStandalonePage={true}
        />

        {/* =========================================================================
            4. CONVERSION BLOCK (Section 6 of Copy Document)
               "Your Idea Could Be Next"
           ========================================================================= */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-600/25 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-300 text-xs font-mono font-bold border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>YOUR IDEA COULD BE NEXT</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have a Product That Needs More Than a Pretty Interface?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Tell us what you are building, what is currently slowing growth, and what your users need to do more easily. We will help you shape the right product, experience, and launch path before development begins.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                id="work-mid-discuss-btn"
                onClick={() => handleOpenProjectModal('Custom Product Build')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 hover:scale-105 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Discuss a Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs font-mono text-slate-400 pt-2">
              No technical jargon. No pressure. Just a focused conversation about your product, your users, and the next version of your business.
            </p>
          </div>
        </section>

        {/* =========================================================================
            5. HIGH-CONVERTING FINAL CTA (Section 7 of Copy Document)
           ========================================================================= */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-800 text-white border border-blue-400/40 shadow-2xl shadow-blue-600/30 overflow-hidden text-center space-y-8">
              {/* Background Accents */}
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-400/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-400/25 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 max-w-3xl mx-auto relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Your Next Growth System Should Start With a Better User Journey.
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                  Whether you are building a marketplace, browser extension, comparison engine, SaaS platform, online store, or high-conversion website, we can help turn the idea into a fast, credible, revenue-ready experience.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
                <button
                  id="work-bottom-start-project-btn"
                  onClick={() => handleOpenProjectModal('New Growth System')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-blue-700 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-slate-900/20 hover:scale-105 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </button>

                <Link
                  href="/#services"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <span>See Our Services</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-blue-100 relative z-10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>Zero-Bug Handover Protocol™</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-300" />
                  <span>Free 15-Minute Discovery Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>No Obligation · Fixed Velocity</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <LiveStatusDock onOpenProjectModal={handleOpenProjectModal} />
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        initialService={initialService}
      />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
      <OnboardingModal
        isOpen={isOnboardingModalOpen}
        onClose={() => setIsOnboardingModalOpen(false)}
      />
    </div>
  );
}
