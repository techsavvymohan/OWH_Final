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
  Star
} from 'lucide-react';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { BlurText } from '@/components/ui/blur-text';

interface HeroSectionProps {
  onOpenProjectModal: (service?: string) => void;
}

const CAPABILITY_PILLS = [
  { icon: Code2, label: 'Next.js 15 & React 19 Full-Stack', type: 'tech', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
  { icon: Search, label: 'Programmatic B2B SEO Engine', type: 'growth', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
  { icon: BarChart3, label: 'High-ROAS Paid Media (Google & Meta)', type: 'growth', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
  { icon: Palette, label: 'Enterprise Design Systems & CRO', type: 'tech', color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-200' },
  { icon: Share2, label: 'Multi-Channel Brand Distribution', type: 'growth', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
  { icon: ShieldCheck, label: 'Contractual 90-Day Zero-Bug SLA', type: 'tech', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
];

export function HeroSection({ onOpenProjectModal }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-slate-50/80">
      {/* Background Decorative Gradients for Pure Light Theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[950px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-blue-200/60 via-sky-200/50 to-emerald-200/50 blur-[110px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-200/60 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-200/60 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Philosophy Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neo-pill text-xs font-mono font-medium text-slate-700 hover:border-blue-500/40 hover:text-blue-600 transition-all group cursor-pointer"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span className="font-bold text-blue-700">Only</span> = Strategy ·{' '}
            <span className="font-bold text-slate-900">Way</span> = Impact ·{' '}
            <span className="font-bold text-emerald-700">Online</span> = Growth
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1 text-slate-400 group-hover:text-blue-600" />
          </a>
        </motion.div>

        {/* Main SEO-Optimized Headline with BlurText Reveal */}
        <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.12]">
          <BlurText 
            text="We don't just launch websites. We engineer conversions."
            wordDelay={0.06}
            highlightWords={['engineer', 'conversions.']}
            highlightClass="bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 bg-clip-text text-transparent"
          />
        </h1>

        {/* High-Impact Sub-copy Tailored for Business Owners & Non-Techies */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
        >
          Most agencies build a website and walk away. We act as your complete growth partner — delivering{' '}
          <strong className="text-slate-900 font-semibold">stunning, ultra-fast websites</strong> that rank on Google,{' '}
          bring in active customer leads, and <strong className="text-emerald-700 font-semibold">never break or slow down</strong>. No coding or tech knowledge needed.
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
              className="w-full sm:w-auto px-7 py-3.5 rounded-full neo-pill text-slate-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-slate-50 transition-all cursor-pointer"
            >
              <span>See Our Services & Guarantee</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Live Social Proof Stats in Light Luxury Styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-5 py-2.5 rounded-full glass-panel-subtle text-xs text-slate-600 font-medium"
        >
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900">5.0 / 5.0 Rating</span>
            <span className="text-slate-400">(64+ Verified Client Audits)</span>
          </div>

          <div className="hidden sm:block text-slate-300">•</div>

          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-900">100% Zero-Defect Handover SLA</span>
          </div>

          <div className="hidden sm:block text-slate-300">•</div>

          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span className="font-bold text-slate-900">&lt; 0.2s Global Edge TTFB</span>
          </div>
        </motion.div>

        {/* Capability Pills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 sm:mt-16 pt-6 border-t border-slate-200/80"
        >
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-4 font-semibold">
            Unified Dual-Engine Architecture · Engineering Rigor & Compound Distribution
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {CAPABILITY_PILLS.map((tile) => {
              const Icon = tile.icon;
              return (
                <div
                  key={tile.label}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105 ${
                    tile.type === 'growth'
                      ? 'glass-panel text-emerald-950 border-emerald-200/80 hover:border-emerald-300'
                      : 'glass-card text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="p-1 rounded-md neo-pill">
                    <Icon className={`w-3.5 h-3.5 ${tile.color}`} />
                  </div>
                  <span>{tile.label}</span>
                  {tile.type === 'growth' && (
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-600 text-white font-bold">
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
