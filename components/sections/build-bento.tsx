'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Cpu, 
  Code2, 
  Gauge, 
  ShieldCheck, 
  Check, 
  ArrowUpRight, 
  Zap, 
  Lock, 
  Server, 
  Globe, 
  Layers,
  Sparkles
} from 'lucide-react';

interface BuildBentoProps {
  onOpenProjectModal: (service?: string) => void;
}

export function BuildBento({ onOpenProjectModal }: BuildBentoProps) {
  const [activeCodeTab, setActiveCodeTab] = React.useState<'preview' | 'code'>('preview');
  const [demoBookingCount, setDemoBookingCount] = React.useState(14);
  const [activeNode, setActiveNode] = React.useState<number>(1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode(prev => (prev % 3) + 1);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="py-20 sm:py-28 relative bg-gradient-to-b from-slate-50/80 via-blue-50/30 to-white overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-100/50 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
              <Code2 className="w-3.5 h-3.5" />
              <span>WEB DESIGN & DEVELOPMENT WING</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              High-Converting Web Systems.{' '}
              <span className="text-blue-600">Built to Scale Your Business.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              We replace slow, fragile websites with lightning-fast, custom-engineered web platforms designed to capture leads, rank on search engines, and maximize your revenue — with zero technical stress.
            </p>
          </div>

          <button
            id="build-bento-discuss-btn"
            onClick={() => onOpenProjectModal('web-dev')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shrink-0 cursor-pointer shadow-md hover:shadow-lg"
          >
            <span>Discuss Your Web Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5-Card Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1 (Span 5/12): Mobile & Sub-Second Core Web Vitals */}
          <div className="md:col-span-12 lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  INP &lt; 20ms · 0.2s TTFB
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Fluid Responsive & Touch Micro-Interactions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Adaptive layout architectures with zero cumulative layout shifts (CLS: 0.00). Native hardware-accelerated gestures and sub-second paint benchmarks across all mobile devices.
              </p>
            </div>

            {/* Full-Length Authentic Smartphone Device Frame - Pure White Light Luxury Theme */}
            <div className="relative mx-auto w-full max-w-[270px] sm:max-w-[285px] h-[470px] sm:h-[500px] bg-slate-50 rounded-[44px] p-3 border-[6px] border-slate-300 shadow-2xl flex flex-col justify-between overflow-hidden group/phone hover:border-blue-400 transition-all duration-300">
              {/* Silver Metallic Side Hardware Buttons */}
              <div className="absolute -left-[9px] top-24 w-[3px] h-8 bg-slate-300 rounded-l-md" />
              <div className="absolute -left-[9px] top-36 w-[3px] h-10 bg-slate-300 rounded-l-md" />
              <div className="absolute -right-[9px] top-28 w-[3px] h-12 bg-slate-300 rounded-r-md" />

              {/* Top Status Bar & Dynamic Island */}
              <div className="space-y-1 shrink-0 pt-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-700 px-3 font-semibold">
                  <span>9:41</span>
                  {/* Dynamic Island Pill */}
                  <div className="w-18 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-1.5 px-2 shadow-inner">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div className="w-1 h-1 rounded-full bg-blue-400" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-bold">5G</span>
                    <div className="w-3.5 h-2 rounded-xs border border-slate-700 p-[0.5px]">
                      <div className="h-full w-2.5 bg-slate-900 rounded-2xs" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Aesthetic White Screen Display */}
              <div className="my-auto space-y-2.5 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-slate-900 font-mono">
                {/* App Screen Top Header */}
                <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-md bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold">
                      OW
                    </div>
                    <span className="font-bold text-slate-900 font-sans text-xs">OnlyWay Studio</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    100% LIVE
                  </span>
                </div>

                {/* Score Gauge Highlight Box */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/80 border border-slate-200 text-center shadow-2xs">
                  <span className="text-[10px] text-slate-500 block font-sans font-medium">Google Core Web Vitals</span>
                  <span className="text-2xl font-bold font-mono text-emerald-700 tracking-tight block my-0.5">
                    100 / 100
                  </span>
                  <span className="text-[9px] font-mono text-blue-700 font-bold bg-blue-100/70 px-2 py-0.5 rounded-full inline-block">
                    ⚡ Sub-Second Mobile Paint
                  </span>
                </div>

                {/* Performance Metrics Breakdown */}
                <div className="space-y-1.5 text-[10px]">
                  <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <span className="text-slate-500">LCP (Largest Paint)</span>
                    <span className="text-emerald-700 font-bold">0.52s ✓</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <span className="text-slate-500">CLS (Layout Shift)</span>
                    <span className="text-emerald-700 font-bold">0.000 ✓</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <span className="text-slate-500">INP (Touch Latency)</span>
                    <span className="text-emerald-700 font-bold">14ms ✓</span>
                  </div>
                </div>

                {/* Playwright QA & Stability Badge */}
                <div className="p-2 rounded-xl bg-blue-50/80 border border-blue-200 text-[10px] text-center text-blue-800 font-sans font-semibold">
                  ✓ Playwright QA: 18 Breakpoints Verified
                </div>
              </div>

              {/* Bottom Screen Home Bar */}
              <div className="shrink-0 pt-1 pb-0.5 text-center">
                <div className="w-24 h-1 bg-slate-400 rounded-full mx-auto" />
              </div>
            </div>
          </div>

          {/* Card 2 (Span 7/12): Modern Stack Execution Pipeline */}
          <div className="md:col-span-12 lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
                  Continuous CI/CD Gate
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Modern Full-Stack Execution Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Direct synthesis from typed Figma design tokens to global edge deployment. Strict TypeScript 5.9 typing, zero memory leaks, and enterprise-grade resilience.
              </p>
            </div>

            {/* Interactive Node Graph */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 relative">
                {/* Node 1 */}
                <div
                  onClick={() => setActiveNode(1)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    activeNode === 1
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <Code2 className="w-5 h-5 mx-auto mb-1.5" />
                  <div className="text-xs font-bold">Next.js 15 Server Actions</div>
                  <div className={`text-[10px] font-mono mt-1 ${activeNode === 1 ? 'text-blue-100' : 'text-slate-500'}`}>
                    Server-First Core
                  </div>
                </div>

                {/* Node 2 */}
                <div
                  onClick={() => setActiveNode(2)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    activeNode === 2
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <ShieldCheck className="w-5 h-5 mx-auto mb-1.5" />
                  <div className="text-xs font-bold">Zero-Bug Gate</div>
                  <div className={`text-[10px] font-mono mt-1 ${activeNode === 2 ? 'text-blue-100' : 'text-slate-500'}`}>
                    Automated Strict QA
                  </div>
                </div>

                {/* Node 3 */}
                <div
                  onClick={() => setActiveNode(3)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    activeNode === 3
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <Globe className="w-5 h-5 mx-auto mb-1.5" />
                  <div className="text-xs font-bold">Global Edge CDN</div>
                  <div className={`text-[10px] font-mono mt-1 ${activeNode === 3 ? 'text-blue-100' : 'text-slate-500'}`}>
                    Sub-200ms Edge Cache
                  </div>
                </div>
              </div>

              {/* Active node detail inspector */}
              <div className="mt-4 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-mono shadow-2xs">
                {activeNode === 1 && '→ Active Architecture: Next.js 15 App Router with TypeScript strict mode, React 19 concurrent hydration, and dynamic route streaming.'}
                {activeNode === 2 && '→ Active Architecture: Automated Playwright end-to-end regression suites, Lighthouse 100 audits, and zero-console-warning gates.'}
                {activeNode === 3 && '→ Active Architecture: Global multi-region edge delivery with automatic Brotli compression, smart cache invalidation, and DDoS mitigation.'}
              </div>
            </div>
          </div>

          {/* Card 3 (Span 4/12): Component Architecture Switcher */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                  <Layers className="w-5 h-5" />
                </div>
                {/* Switcher Toggle */}
                <div className="flex items-center p-1 rounded-xl bg-slate-100 text-[11px] font-mono border border-slate-200">
                  <button
                    onClick={() => setActiveCodeTab('preview')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      activeCodeTab === 'preview'
                        ? 'bg-white text-blue-700 font-bold shadow-xs'
                        : 'text-slate-600'
                    }`}
                  >
                    Live UI
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('code')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      activeCodeTab === 'code'
                        ? 'bg-white text-blue-700 font-bold shadow-xs'
                        : 'text-slate-600'
                    }`}
                  >
                    TSX Code
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Type-Safe Component Systems
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Modular design tokens, fully accessible ARIA patterns, and seamless UI primitives.
              </p>
            </div>

            {/* Preview vs Code Box */}
            <div className="h-44 rounded-2xl bg-slate-50 border border-slate-200 p-3 overflow-hidden flex flex-col justify-center">
              {activeCodeTab === 'preview' ? (
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2.5 shadow-xs text-center">
                  <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase">Lead Engine Component</span>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                    <span>Active Sprint Capacity:</span>
                    <span className="text-blue-600 font-mono font-bold">{demoBookingCount} Slots</span>
                  </div>
                  <button
                    onClick={() => setDemoBookingCount(prev => (prev > 1 ? prev - 1 : 14))}
                    className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                  >
                    Reserve Instant Discovery Slot
                  </button>
                </div>
              ) : (
                <pre className="text-[10px] font-mono text-slate-800 overflow-x-auto p-2 leading-relaxed bg-white rounded-xl border border-slate-200">
{`export function CapacitySlot() {
  const [slots, setSlots] = useState(14);
  return (
    <Button onClick={() => setSlots(s => s - 1)}
      className="bg-blue-600 text-white rounded-xl">
      Reserve Instant Discovery Slot
    </Button>
  );
}`}
                </pre>
              )}
            </div>
          </div>

          {/* Card 4 (Span 4/12): Technical SEO 4x100 Gauge Tiles */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <Gauge className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  Google Lighthouse SLA
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                SEO-Native Engineering
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Structured Schema.org JSON-LD microdata, dynamic OpenGraph assets, and canonical routing.
              </p>
            </div>

            {/* 4x 100 Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { label: 'Performance', score: '100' },
                { label: 'Accessibility', score: '100' },
                { label: 'Best Practices', score: '100' },
                { label: 'SEO Engine', score: '100' },
              ].map(m => (
                <div
                  key={m.label}
                  className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center"
                >
                  <div className="text-xl font-bold font-mono text-emerald-700">
                    {m.score}
                  </div>
                  <div className="text-[10px] text-slate-700 font-semibold truncate">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5 (Span 4/12): Security & 99.99% Uptime */}
          <div className="md:col-span-12 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>99.99% GUARANTEED</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Security & Uptime Stability
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Zero-trust headers, SSL Grade A+, automated edge failovers, and real-time error telemetry.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 font-mono text-xs text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">SSL Certificate:</span>
                <span className="text-blue-700 font-bold">Grade A+ (HSTS Strict)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Security Headers:</span>
                <span className="text-emerald-700 font-bold">CSP & CORS Gated</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Stability Watch:</span>
                <span className="text-slate-900 font-bold">24/7 Automated Heartbeat</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
