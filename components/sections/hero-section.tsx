'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Code2, 
  Search, 
  BarChart3, 
  Share2, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  Palette, 
  Star,
  Info
} from 'lucide-react';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { BlurText } from '@/components/ui/blur-text';
import { Hero3DScene } from '@/components/visuals/hero-3d-scene';

interface HeroSectionProps {
  onOpenProjectModal: (service?: string) => void;
  onOpenMethodology?: () => void;
}

const CAPABILITY_PILLS = [
  { icon: Code2, label: 'Modern Website Technology', type: 'tech', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
  { icon: Search, label: 'Get Found on Google Search', type: 'growth', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
  { icon: BarChart3, label: 'Google & Facebook Ads That Pay Back', type: 'growth', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
  { icon: Palette, label: 'Beautiful Designs That Convert Visitors', type: 'tech', color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-200' },
  { icon: Share2, label: 'Social Media & Brand Building', type: 'growth', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
  { icon: ShieldCheck, label: '90-Day Free Fix Guarantee', type: 'tech', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
];

export function HeroSection({ onOpenProjectModal, onOpenMethodology }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60">
      {/* Background Decorative Gradients for White + Black + Blue + Grey Luxury Theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[950px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-blue-200/40 via-slate-200/50 to-slate-300/40 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-slate-200/60 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-100/50 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Precision Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-60" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Philosophy Badge in Dark Graphite Luxury Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center"
        >
          <div
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] sm:text-xs font-mono font-medium text-slate-200 shadow-md select-none"
          >
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span>
              <strong className="font-bold text-blue-400">Only</strong> = Strategy ·{' '}
              <strong className="font-bold text-white">Way</strong> = Velocity ·{' '}
              <strong className="font-bold text-slate-300">Online</strong> = Growth
            </span>
          </div>
        </motion.div>

        {/* Main SEO-Optimized Headline with BlurText Reveal */}
        <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.12]">
          <BlurText 
            text="We Build Websites That Actually Bring You Customers."
            wordDelay={0.06}
            highlightWords={['Bring', 'Customers.']}
            highlightClass="bg-gradient-to-r from-blue-700 via-blue-600 to-slate-800 bg-clip-text text-transparent"
          />
        </h1>

        {/* High-Impact Sub-copy Tailored for Business Owners */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
        >
          Custom websites, SaaS products, and growth systems built to turn attention into qualified demand. We engineer lightning-fast digital experiences with clean code, search ranking architecture, and dedicated ongoing support.
        </motion.p>

        {/* Action CTAs with MagneticButton */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <MagneticButton strength={12}>
            <button
              id="hero-discuss-project-btn"
              type="button"
              onClick={() => onOpenProjectModal()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-[0.97] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 hover:scale-[1.02] transition-all duration-150 cursor-pointer brand-glow"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </MagneticButton>

          <MagneticButton strength={10}>
            <Link
              href="/work"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 active:scale-[0.97] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer shadow-md"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </Link>
          </MagneticButton>

          <MagneticButton strength={8}>
            <a
              href="#services"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white border border-slate-300 active:scale-[0.97] text-slate-700 font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-slate-50 transition-all duration-150 cursor-pointer shadow-xs"
            >
              <span>Services & Guarantee</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Process-Driven Quality Standards in Light Luxury Styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-5 py-2.5 rounded-full bg-white/90 border border-slate-200 shadow-sm text-xs text-slate-600 font-medium"
        >
          <div className="flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-900">12+ Production Builds Shipped</span>
          </div>

          <div className="hidden sm:block text-slate-300">•</div>

          <button
            type="button"
            onClick={onOpenMethodology}
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer text-left"
            title="Click to view testing methodology"
          >
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-900">Tested on 18 Screen Sizes</span>
            <Info className="w-3 h-3 text-slate-400" />
          </button>

          <div className="hidden sm:block text-slate-300">•</div>

          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-slate-700" />
            <span className="font-bold text-slate-900">90-Day Free Fix Warranty</span>
          </div>
        </motion.div>

        {/* Centerpiece Hero 3D Digital Product Architecture Engine */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero3DScene onOpenProjectModal={onOpenProjectModal} />
        </motion.div>

        {/* Editorial 3-Pillar Architectural Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80"
        >
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-6 font-semibold">
            Complete Digital Growth Architecture — Built & Scaled Under One Roof
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            {/* Pillar 1 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Custom Website Build</h4>
                  <span className="text-[10px] font-mono text-blue-600 font-semibold">Fast · 90-Day Free Fix Guarantee</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sub-second page delivery across every mobile phone and laptop with zero broken layouts.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Google & AI Search</h4>
                  <span className="text-[10px] font-mono text-emerald-600 font-semibold">SEO · GEO · AEO Ready</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured content and schema so buyers searching on Google, ChatGPT, and Perplexity find your business first.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-violet-300 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-xl bg-violet-50 text-violet-600 border border-violet-200/60">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">High-ROAS Acquisition</h4>
                  <span className="text-[10px] font-mono text-violet-600 font-semibold">Tracked Ad Return</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Targeted Google & Meta ad campaigns engineered to turn clicks into inbound phone calls and booked revenue.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
