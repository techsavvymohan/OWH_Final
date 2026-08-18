'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Gauge,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Wifi,
  Smartphone,
  Globe,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  RotateCcw,
  Play
} from 'lucide-react';

interface InteractiveSpeedVisualizerProps {
  onOpenProjectModal: (service?: string) => void;
}

type NetworkProfile = '5g' | '4g' | '3g';

export function InteractiveSpeedVisualizer({ onOpenProjectModal }: InteractiveSpeedVisualizerProps) {
  const [network, setNetwork] = React.useState<NetworkProfile>('4g');
  const [isRunningTest, setIsRunningTest] = React.useState(false);
  const [testProgress, setTestProgress] = React.useState(100);

  const networkMultipliers: Record<NetworkProfile, { name: string; latencyBase: number; agencyTime: number; onlywayTime: number; note: string }> = {
    '5g': { name: 'Ultra-Fast 5G / Fiber', latencyBase: 12, agencyTime: 2.4, onlywayTime: 0.32, note: 'High bandwidth desktop connection' },
    '4g': { name: 'Everyday 4G Mobile', latencyBase: 45, agencyTime: 4.1, onlywayTime: 0.48, note: 'Typical customer browsing on an iPhone / Android' },
    '3g': { name: 'Spotty / Congested 3G', latencyBase: 120, agencyTime: 7.8, onlywayTime: 0.95, note: 'Poor coverage area or congested public WiFi' },
  };

  const currentProfile = networkMultipliers[network];

  const runSpeedSimulation = () => {
    setIsRunningTest(true);
    setTestProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setTestProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsRunningTest(false);
      }
    }, 40);
  };

  return (
    <section id="speed-visualizer" className="py-20 sm:py-28 relative bg-gradient-to-b from-white via-slate-50/70 to-white border-t border-slate-200 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/30 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200 shadow-2xs">
            <Gauge className="w-3.5 h-3.5 text-blue-600" />
            <span>INTERACTIVE REAL-WORLD PERFORMANCE BENCHMARK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Why Every Millisecond of Speed{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Means More Money.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Google research proves that 53% of mobile visitors abandon a website that takes more than 3 seconds to load. Experience the difference between slow bloated code and our custom edge architecture.
          </p>
        </motion.div>

        {/* Network Preset Control Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 shadow-sm mb-8 gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
            <Wifi className="w-4 h-4 text-blue-600" />
            <span className="font-bold">Select Simulated Visitor Network:</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {(['5g', '4g', '3g'] as const).map(p => (
              <button
                key={p}
                type="button"
                onClick={() => {
                  setNetwork(p);
                  runSpeedSimulation();
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  network === p
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {p.toUpperCase()}: {networkMultipliers[p].name}
              </button>
            ))}

            <button
              type="button"
              onClick={runSpeedSimulation}
              disabled={isRunningTest}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold transition-all cursor-pointer shadow-sm disabled:opacity-50"
            >
              {isRunningTest ? <RotateCcw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 text-blue-400" />}
              <span>{isRunningTest ? 'Simulating…' : 'Run Live Test'}</span>
            </button>
          </div>
        </div>

        {/* Dual Side-by-Side Live Performance Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* LEFT: SLOW TEMPLATE / TYPICAL AGENCY (ROSE TONE) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white border border-rose-200 p-6 sm:p-8 shadow-lg shadow-rose-500/5 space-y-6 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-rose-50 text-rose-600 border border-rose-200">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                      Typical Agency Site / Bloated CMS
                    </h3>
                    <p className="text-[11px] font-mono text-rose-600 font-semibold">
                      Heavy plugins, unoptimized images, bloated scripts
                    </p>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <span className="text-2xl font-black text-rose-600 block">
                    {currentProfile.agencyTime}s
                  </span>
                  <span className="text-[10px] text-slate-400 block font-sans">Full Page Render</span>
                </div>
              </div>

              {/* Waterfall Rendering Steps */}
              <div className="space-y-3 font-mono text-xs">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-600">1. Server Response & Shared Hosting</span>
                    <span className="text-rose-600 font-bold">~850ms</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      style={{ width: `${Math.min(100, testProgress * 0.7)}%` }}
                      className="h-full bg-rose-400 rounded-full transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-600">2. 45+ Third-Party Scripts & Plugin Bloat</span>
                    <span className="text-rose-600 font-bold">~1,600ms</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      style={{ width: `${Math.min(100, testProgress * 0.45)}%` }}
                      className="h-full bg-rose-500 rounded-full transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-600">3. Layout Shifts & Screen Jumps (CLS)</span>
                    <span className="text-rose-700 font-bold">High Layout Shift (0.34)</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      style={{ width: `${Math.min(100, testProgress * 0.3)}%` }}
                      className="h-full bg-rose-600 rounded-full transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Consequences Box */}
              <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 text-xs text-rose-900 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5 text-rose-800">
                  <TrendingDown className="w-4 h-4 text-rose-600" />
                  <span>The Real Cost to Your Business:</span>
                </div>
                <p className="text-[11px] text-rose-700 leading-relaxed">
                  Over <strong>58% of mobile shoppers bounce</strong> before the page finishes loading. Google lowers your search ranking due to poor Core Web Vitals scores.
                </p>
              </div>
            </div>

            {/* Score Pill */}
            <div className="flex items-center justify-between pt-3 border-t border-rose-100 text-xs font-mono">
              <span className="text-slate-500">Google Lighthouse Score:</span>
              <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 font-bold border border-rose-200">
                42 / 100 · Fails Speed Standard
              </span>
            </div>
          </motion.div>

          {/* RIGHT: ONLYWAY HIGH-SPEED CUSTOM ARCHITECTURE (EMERALD & BLUE TONE) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white border border-emerald-300 p-6 sm:p-8 shadow-xl shadow-emerald-500/10 space-y-6 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                      OnlyWay Engineered Architecture
                    </h3>
                    <p className="text-[11px] font-mono text-emerald-700 font-semibold">
                      Next.js 15 App Router · Global Edge CDN · Zero Bloat
                    </p>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <span className="text-2xl font-black text-emerald-700 block">
                    {currentProfile.onlywayTime}s
                  </span>
                  <span className="text-[10px] text-slate-400 block font-sans">Instant Paint</span>
                </div>
              </div>

              {/* Waterfall Rendering Steps */}
              <div className="space-y-3 font-mono text-xs">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-600">1. Global Edge Multi-Region CDN</span>
                    <span className="text-emerald-700 font-bold">&lt; 35ms (Instant)</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      style={{ width: `${testProgress}%` }}
                      className="h-full bg-emerald-500 rounded-full transition-all duration-300 shadow-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-600">2. Concurrent React 19 Hydration</span>
                    <span className="text-emerald-700 font-bold">~140ms</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      style={{ width: `${testProgress}%` }}
                      className="h-full bg-blue-600 rounded-full transition-all duration-300 shadow-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-600">3. Zero Layout Shift (CLS 0.000)</span>
                    <span className="text-emerald-700 font-bold">Flawless Stability ✓</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      style={{ width: `${testProgress}%` }}
                      className="h-full bg-emerald-600 rounded-full transition-all duration-300 shadow-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Business Lift Box */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>The OnlyWay Advantage:</span>
                </div>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  Visitors experience <strong>zero perceptible delay</strong>. Google ranks your pages higher in Search Engine results, and your ad campaigns achieve higher conversion rates.
                </p>
              </div>
            </div>

            {/* Score Pill & Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-emerald-100 gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold border border-emerald-300">
                100 / 100 · Target Core Vitals Score
              </span>

              <button
                type="button"
                onClick={() => onOpenProjectModal('web-dev')}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md shadow-blue-600/20"
              >
                <span>Upgrade to Sub-Second Speed</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
