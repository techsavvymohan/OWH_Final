'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, ShieldCheck, Zap, ArrowRight, Layers, Cpu, CheckCircle2, Code2, Globe, TrendingUp } from 'lucide-react';

interface Hero3DSceneProps {
  onOpenProjectModal?: (service?: string) => void;
}

export function Hero3DScene({ onOpenProjectModal }: Hero3DSceneProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Mouse tilt physics for subtle Apple-style depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-5xl mx-auto mt-8 sm:mt-12 perspective-[1200px]"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative rounded-3xl p-2 sm:p-4 bg-white/70 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-slate-900/10 overflow-hidden group"
      >
        {/* Top Studio Light Highlight Bar */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        {/* Header Metadata Pill */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100/80 mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            <span className="text-[11px] font-mono text-slate-400 ml-2 font-medium">
              architecture.onlywayonline.com — Unified Product Canvas
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Interactive 3D Digital Architecture</span>
          </div>
        </div>

        {/* Main 3D Studio Product Render Composition */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100/50 to-white aspect-[16/9] border border-slate-200/60">
          <Image
            src="/assets/visuals/hero-architecture-3d.jpg"
            alt="OnlyWayOnline 3D Digital Product Architecture - Studio Visualization"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center group-hover:scale-[1.015] transition-transform duration-700 ease-out"
          />

          {/* Floating UI Overlay Telemetry Badges */}
          <div className="absolute top-4 left-4 hidden md:flex flex-col gap-2 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md text-[11px] font-mono font-bold text-slate-900 flex items-center gap-2"
            >
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>Full-Stack Edge Architecture</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md text-[11px] font-mono font-bold text-slate-900 flex items-center gap-2"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sub-Second Multi-Device Sync</span>
            </motion.div>
          </div>

          <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenProjectModal?.('Digital Product Architecture')}
              className="px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-900 backdrop-blur-md text-white text-xs font-bold font-mono transition-all flex items-center gap-2 shadow-lg hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>Explore Custom Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Technical Caption */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 pt-3 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-800">Layered System:</span>
            <span>01 UX Design</span>
            <span className="text-slate-300">→</span>
            <span>02 TypeScript Engineering</span>
            <span className="text-slate-300">→</span>
            <span>03 Organic Search Authority</span>
            <span className="text-slate-300">→</span>
            <span className="text-emerald-600 font-bold">04 Revenue Conversion</span>
          </div>

          <span className="text-slate-400 font-medium hidden sm:inline-block">
            PBR Studio Art Direction · Apple × Linear Standard
          </span>
        </div>
      </motion.div>
    </div>
  );
}
