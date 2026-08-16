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
          
          {/* Card 1 (Span 5/12): Mobile & Responsive Experience */}
          <div className="md:col-span-12 lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    Instant Speed · Zero Layout Shift
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">INP &lt; 20ms · 0.2s TTFB</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Loads Instantly, Works Flawlessly, on Every Device
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Your site loads before someone finishes clicking. Nothing jumps around while reading, and buttons respond the instant you tap them across every phone, tablet, and laptop.
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
                    VERIFIED
                  </span>
                </div>

                {/* Score Gauge Highlight Box */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/80 border border-slate-200 text-center shadow-2xs">
                  <span className="text-[10px] text-slate-500 block font-sans font-medium">Google Core Web Vitals Benchmark</span>
                  <span className="text-2xl font-bold font-mono text-emerald-700 tracking-tight block my-0.5">
                    100 / 100
                  </span>
                  <span className="text-[9px] font-mono text-blue-700 font-bold bg-blue-100/70 px-2 py-0.5 rounded-full inline-block">
                    ⚡ Instant Sub-Second Load
                  </span>
                </div>

                {/* Performance Metrics Breakdown */}
                <div className="space-y-1.5 text-[10px]">
                  <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <div>
                      <span className="text-slate-900 font-semibold block font-sans">Page Load Speed</span>
                      <span className="text-[8px] text-slate-400">LCP 0.52s · Instant Paint</span>
                    </div>
                    <span className="text-emerald-700 font-bold">Passed ✓</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <div>
                      <span className="text-slate-900 font-semibold block font-sans">Screen Stability</span>
                      <span className="text-[8px] text-slate-400">CLS 0.000 · No accidental taps</span>
                    </div>
                    <span className="text-emerald-700 font-bold">Zero Shift ✓</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <div>
                      <span className="text-slate-900 font-semibold block font-sans">Tap Response</span>
                      <span className="text-[8px] text-slate-400">INP 14ms · Ultra-low latency</span>
                    </div>
                    <span className="text-emerald-700 font-bold">Instant ✓</span>
                  </div>
                </div>

                {/* Playwright QA & Stability Badge */}
                <div className="p-2 rounded-xl bg-blue-50/80 border border-blue-200 text-[10px] text-center text-blue-800 font-sans font-semibold">
                  ✓ Tested on 18 screen sizes before launch
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
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
                    Automated Quality Gate
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">Continuous CI/CD Pipeline</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                From Design Straight to a Live, Working Website
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Built the same way large-scale platforms like Netflix and Nike build theirs — so your website stays ultra-fast and won&apos;t slow down as your business grows. No delays and no miscommunication between design and code.
              </p>
            </div>

            {/* Interactive Node Graph in Dark Graphite Console */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 relative">
                {/* Node 1 */}
                <div
                  onClick={() => setActiveNode(1)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    activeNode === 1
                      ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30 scale-105 font-bold'
                      : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                  }`}
                >
                  <Code2 className="w-5 h-5 mx-auto mb-1.5 text-blue-300" />
                  <div className="text-xs font-bold">Fast Modern Core</div>
                  <div className={`text-[10px] font-mono mt-1 ${activeNode === 1 ? 'text-blue-100' : 'text-slate-400'}`}>
                    Next.js & React 19
                  </div>
                </div>

                {/* Node 2 */}
                <div
                  onClick={() => setActiveNode(2)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    activeNode === 2
                      ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30 scale-105 font-bold'
                      : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                  }`}
                >
                  <ShieldCheck className="w-5 h-5 mx-auto mb-1.5 text-emerald-400" />
                  <div className="text-xs font-bold">Zero-Bug Testing</div>
                  <div className={`text-[10px] font-mono mt-1 ${activeNode === 2 ? 'text-blue-100' : 'text-slate-400'}`}>
                    Multi-Device QA
                  </div>
                </div>

                {/* Node 3 */}
                <div
                  onClick={() => setActiveNode(3)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    activeNode === 3
                      ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30 scale-105 font-bold'
                      : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                  }`}
                >
                  <Globe className="w-5 h-5 mx-auto mb-1.5 text-sky-300" />
                  <div className="text-xs font-bold">Worldwide Delivery</div>
                  <div className={`text-[10px] font-mono mt-1 ${activeNode === 3 ? 'text-blue-100' : 'text-slate-400'}`}>
                    Global Edge Network
                  </div>
                </div>
              </div>

              {/* Active node detail inspector with Two-Layer explanation */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 shadow-inner space-y-1">
                {activeNode === 1 && (
                  <>
                    <p className="font-semibold text-white">
                      → Server-First Speed: Dynamic routes built to load in milliseconds without sluggish page reloads.
                    </p>
                    <p className="text-[10px] font-mono text-slate-400">
                      Technical Spec: Next.js 15 App Router with TypeScript strict mode, React 19 concurrent hydration, and dynamic route streaming.
                    </p>
                  </>
                )}
                {activeNode === 2 && (
                  <>
                    <p className="font-semibold text-white">
                      → Zero-Bug Quality Gate: Automated tests ensure forms, links, and buttons never break on release.
                    </p>
                    <p className="text-[10px] font-mono text-slate-400">
                      Technical Spec: Automated Playwright end-to-end regression suites, Lighthouse 100 audits, and zero-console-warning gates.
                    </p>
                  </>
                )}
                {activeNode === 3 && (
                  <>
                    <p className="font-semibold text-white">
                      → Worldwide Delivery: Fast for every visitor, everywhere in the world, not just near your server.
                    </p>
                    <p className="text-[10px] font-mono text-slate-400">
                      Technical Spec: Global multi-region edge delivery with automatic Brotli compression, smart cache invalidation, and DDoS mitigation.
                    </p>
                  </>
                )}
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
                    Code
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Custom High-Conversion Components
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Interactive, accessible user interface elements engineered to turn website visitors into phone calls, booked meetings, and purchases.
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
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    Target 100/100 Vitals
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">Google Lighthouse Standard</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Built So Google Can Actually Find You
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Structured so Google understands exactly what your business does — this is what gets you found in search from Day 1.
              </p>
            </div>

            {/* 4x 100 Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { label: 'Speed & Vitals', score: '100' },
                { label: 'Accessibility', score: '100' },
                { label: 'Code Quality', score: '100' },
                { label: 'Search Ready', score: '100' },
              ].map(m => (
                <div
                  key={m.label}
                  className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center"
                >
                  <div className="text-xl font-bold font-mono text-emerald-700">
                    {m.score}
                  </div>
                  <div className="text-[10px] text-slate-700 font-semibold truncate font-sans">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5 (Span 4/12): Security & High Uptime Architecture */}
          <div className="md:col-span-12 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>TARGET 99.9%+ UPTIME</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Your Website Stays Online & Protected, 24/7
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Bank-level security protection against hacking and data theft, with automated edge failovers and live health checks.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-sans">Bank-Grade Encryption:</span>
                <span className="text-blue-700 font-bold font-mono">Grade A+ (SSL Strict)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-sans">Threat Defense:</span>
                <span className="text-emerald-700 font-bold font-mono">Hacker & Spam Gated</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-sans">Live Health Watch:</span>
                <span className="text-slate-900 font-bold font-mono">24/7 Monitored Ping</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
