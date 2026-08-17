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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition(prev => Math.max(5, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(prev => Math.min(95, prev + 5));
    }
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
            Drag the interactive slider or use arrow keys to see an illustrative comparison of typical gains when upgrading from fragile agency templates to our clean, high-speed growth architecture.
          </p>
        </motion.div>

        {/* Interactive Comparison Container */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
                AFTER · Built by OnlyWayOnline
              </span>
              <div className="text-right font-mono glass-panel-subtle px-3 py-1 rounded-xl">
                <span className="text-emerald-700 font-bold text-lg">100 / 100</span>
                <span className="text-[10px] text-slate-500 block">Google Speed Rating</span>
              </div>
            </div>

            {/* Content Preview After */}
            <div className="max-w-md space-y-4 my-auto">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg neo-pill text-blue-800 text-xs font-mono font-bold">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                Loads in Under 1 Second · Zero Lag
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
                Clean, High-Speed Website That Brings Customers
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Custom-designed for your brand, thoroughly tested on all mobile phones and laptops, and built to rank on Google without ever crashing.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-2xl neo-card">
                  <span className="text-slate-500 text-[10px] block">Customer Calls</span>
                  <span className="text-emerald-700 font-bold text-base">+3x to +5x Leads</span>
                </div>
                <div className="p-3 rounded-2xl neo-card">
                  <span className="text-slate-500 text-[10px] block">Stability Warranty</span>
                  <span className="text-blue-700 font-bold text-base">90-Day Free Fix</span>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-emerald-700 font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Tested on 18 Screen Sizes · Zero Bugs</span>
            </div>
          </div>

          {/* BEFORE SIDE (Clipped Overlay - Competitor / Legacy Website) */}
          <div
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            className="absolute inset-0 bg-slate-100 text-slate-700 p-6 sm:p-10 flex flex-col justify-between border-r border-slate-300"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-mono font-bold border border-rose-200">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                BEFORE · Typical Agency Site
              </span>
              <div className="text-right font-mono bg-white/70 backdrop-blur-sm px-3 py-1 rounded-xl">
                <span className="text-rose-700 font-bold text-lg">42 / 100</span>
                <span className="text-[10px] text-slate-600 block font-semibold">Fails Google Speed Test</span>
              </div>
            </div>

            {/* Content Preview Before */}
            <div className="max-w-md space-y-4 my-auto">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-rose-100 text-rose-800 text-xs font-mono border border-rose-200">
                Slow 4+ Second Load · Broken Plugins
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 leading-tight opacity-75">
                Slow Template & Disappearing Agencies
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Buttons and layouts that break on mobile screens, zero Google rankings, and the agency stopped replying after the invoice was paid.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-2xl bg-white/80 border border-slate-300">
                  <span className="text-slate-600 text-[10px] block">Lost Visitors</span>
                  <span className="text-rose-700 font-bold text-base">60%+ Leave Early</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/80 border border-slate-300">
                  <span className="text-slate-600 text-[10px] block">Help After Launch</span>
                  <span className="text-rose-700 font-bold text-base">None / Expensive</span>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-rose-700 font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Looks Broken on Mobile Phones</span>
            </div>
          </div>

          {/* Slider Drag Line & Accessible Handle */}
          <div
            style={{ left: `${sliderPosition}%` }}
            className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-2xl -ml-0.5 pointer-events-none flex items-center justify-center z-20"
          >
            <div
              role="slider"
              tabIndex={0}
              aria-label="Comparison slider position"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={5}
              aria-valuemax={95}
              onKeyDown={handleKeyDown}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center neo-thumb border-2 border-white pointer-events-auto cursor-ew-resize hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform"
            >
              <ArrowLeftRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
