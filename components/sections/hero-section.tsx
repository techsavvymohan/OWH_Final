'use client';

import * as React from 'react';
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
          Most agencies just build a website and disappear. We stay with you — building a{' '}
          <strong className="text-slate-900 font-semibold">beautiful, lightning-fast website</strong> that shows up on Google,{' '}
          brings real customers to your door, and <strong className="text-slate-900 font-semibold">never crashes or slows down</strong>. You don&apos;t need to know anything about technology.
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
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 hover:scale-[1.02] transition-all cursor-pointer brand-glow"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </MagneticButton>

          <MagneticButton strength={10}>
            <a
              href="#services"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-slate-300 text-slate-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-slate-50 transition-all cursor-pointer shadow-xs"
            >
              <span>See Our Services & Guarantee</span>
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
            <span className="font-bold text-slate-900">90-Day Free Fix Guarantee</span>
          </div>

          <div className="hidden sm:block text-slate-300">•</div>

          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-900">Sub-Second Page Delivery</span>
          </div>
        </motion.div>

        {/* Capability Pills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 sm:mt-16 pt-6 border-t border-slate-200"
        >
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-4 font-semibold">
            Everything Your Business Needs — Website + Marketing Under One Roof
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {CAPABILITY_PILLS.map((tile) => {
              const Icon = tile.icon;
              return (
                <div
                  key={tile.label}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-800 shadow-2xs hover:border-slate-400 hover:shadow-xs transition-all hover:scale-105"
                >
                  <div className="p-1 rounded-md bg-slate-100 text-slate-700">
                    <Icon className={`w-3.5 h-3.5 ${tile.color}`} />
                  </div>
                  <span>{tile.label}</span>
                  {tile.type === 'growth' && (
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-900 text-white font-bold">
                      GROW
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
