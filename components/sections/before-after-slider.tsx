'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeftRight, 
  Sparkles, 
  AlertTriangle, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 sm:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200 mb-3">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>ILLUSTRATIVE COMPARISON MODEL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Before vs. After OnlyWayOnline
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Drag the interactive slider to see an illustrative comparison of typical gains when upgrading from fragile agency templates to our clean, high-speed growth architecture.
          </p>
        </motion.div>

        {/* Interactive Comparison Container */}
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative h-[480px] sm:h-[500px] rounded-3xl overflow-hidden border border-slate-300 shadow-xl select-none cursor-ew-resize"
        >
          {/* AFTER SIDE (Full Background - OnlyWayOnline Standard in Crisp Light Luxury Palette) */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/60 text-slate-900 p-6 sm:p-10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-emerald-800 text-xs font-mono font-bold border-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                ILLUSTRATIVE AFTER · OnlyWayOnline Architecture
              </span>
              <div className="text-right font-mono glass-panel-subtle px-3 py-1 rounded-xl">
                <span className="text-emerald-700 font-bold text-lg">100 / 100</span>
                <span className="text-[10px] text-slate-500 block">Target Lighthouse Standard</span>
              </div>
            </div>

            {/* Content Preview After */}
            <div className="max-w-md space-y-4 my-auto">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg neo-pill text-blue-800 text-xs font-mono font-bold">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                Sub-Second TTFB · Next.js 15 App Router
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
                High-Conversion Growth System With Zero Broken Links
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clean, typed design tokens, sub-second edge caching, structured SEO schema, and integrated lead funnels engineered for compounding qualified pipeline.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-2xl neo-card">
                  <span className="text-slate-500 text-[10px] block">Lead Conversion</span>
                  <span className="text-emerald-700 font-bold text-base">Optimizing 2-3x+</span>
                </div>
                <div className="p-3 rounded-2xl neo-card">
                  <span className="text-slate-500 text-[10px] block">Stability Warranty</span>
                  <span className="text-blue-700 font-bold text-base">90-Day Monitored</span>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero-Bug Protocol Verified & Active</span>
              </div>
              <span className="text-[10px] text-slate-400 italic hidden sm:inline">*Illustrative benchmark model</span>
            </div>
          </div>

          {/* BEFORE SIDE (Clipped Overlay - Legacy Fragile Site) */}
          <div
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            className="absolute inset-0 bg-slate-200 text-slate-800 p-6 sm:p-10 flex flex-col justify-between border-r-2 border-rose-500"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/90 backdrop-blur-md text-rose-800 text-xs font-mono font-bold border border-rose-300">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                ILLUSTRATIVE BEFORE · Fragmented Legacy Build
              </span>
              <div className="text-right font-mono bg-white/70 backdrop-blur-sm px-3 py-1 rounded-xl">
                <span className="text-rose-700 font-bold text-lg">42 / 100</span>
                <span className="text-[10px] text-slate-600 block font-semibold">Failing Core Vitals</span>
              </div>
            </div>

            {/* Content Preview Before */}
            <div className="max-w-md space-y-4 my-auto">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-rose-100 text-rose-800 text-xs font-mono border border-rose-200">
                Slow 3.8s TTFB · Fragmented Plugins
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 leading-tight opacity-75">
                Fragile Template With Disconnected Vendors
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unresponsive layout bugs, broken forms, zero organic search rankings, and no support after final invoice is paid.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-2xl bg-white/80 border border-slate-300">
                  <span className="text-slate-600 text-[10px] block">Bounce Rate</span>
                  <span className="text-rose-700 font-bold text-base">High Drop-off</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/80 border border-slate-300">
                  <span className="text-slate-600 text-[10px] block">Post-Launch Support</span>
                  <span className="text-rose-700 font-bold text-base">None ($150/hr)</span>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-rose-700 font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Failing Mobile Viewport Matrix</span>
            </div>
          </div>

          {/* Slider Drag Line & Handle with Tactile Neumorphic Feel */}
          <div
            style={{ left: `${sliderPosition}%` }}
            className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-2xl -ml-0.5 pointer-events-none flex items-center justify-center z-20"
          >
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center neo-thumb border-2 border-white pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
