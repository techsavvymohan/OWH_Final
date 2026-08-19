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
              <span>WEBSITE DESIGN & DEVELOPMENT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Websites That Look Amazing &{' '}
              <span className="text-blue-600">Bring You Business.</span>
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

        {/* 5-Card Asymmetric Bento Grid with Scroll Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1 (Span 5/12): Mobile & Responsive Experience */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
            className="md:col-span-12 lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-lg transition-colors transition-shadow duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    Loads Fast · Looks Perfect
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">Opens instantly on any phone</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Loads Instantly, Works Flawlessly, on Every Device
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Your site loads before someone finishes clicking. Nothing jumps around while reading, and buttons respond the instant you tap them across every phone, tablet, and laptop.
              </p>
            </div>

            {/* Responsive Multi-Device Visual Graphics Canvas */}
            <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] pt-4 pb-2 flex flex-col justify-center items-center">
              {/* Main Desktop Browser Mockup */}
              <div className="w-full rounded-2xl bg-white border border-slate-200/90 shadow-lg p-3 space-y-2.5">
                {/* Browser Header Bar */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[10px] font-mono px-3 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-500 truncate max-w-[160px]">
                    https://your-brand.com
                  </div>
                  <div className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    100 Vitals
                  </div>
                </div>

                {/* Simulated Content Wireframe */}
                <div className="space-y-2 py-1">
                  <div className="h-3 w-3/4 rounded-md bg-slate-900" />
                  <div className="h-2 w-full rounded-md bg-slate-200" />
                  <div className="h-2 w-5/6 rounded-md bg-slate-100" />
                  
                  {/* Visual Speed Badge */}
                  <div className="flex items-center justify-between p-2 rounded-xl bg-blue-50/70 border border-blue-100 mt-2">
                    <div className="flex items-center gap-1.5 text-xs text-blue-900 font-bold">
                      <Zap className="w-3.5 h-3.5 text-blue-600" />
                      <span>Instant Sub-Second Display</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-blue-700">18 Screens Tested</span>
                  </div>
                </div>
              </div>

              {/* Overlapping Mobile Device Pill */}
              <div className="w-[85%] -mt-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-300 shadow-xl p-3 z-10 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-slate-800">Mobile Experience</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[10px]">
                    Ultra Smooth
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                  <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[9px]">Load Time</span>
                    <span className="font-bold text-emerald-700">&lt; 0.5s</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[9px]">Tap Response</span>
                    <span className="font-bold text-blue-700">Instant</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[9px]">Stability</span>
                    <span className="font-bold text-emerald-700">Zero Jumps</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 (Span 7/12): Modern Stack Execution Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
            className="md:col-span-12 lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-lg transition-colors transition-shadow duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
                    Built Right, No Shortcuts
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">Automatic quality checks</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                From Design Straight to a Live, Working Website
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Built the same way large-scale platforms like Netflix and Nike build theirs — so your website stays ultra-fast and won&apos;t slow down as your business grows. No delays and no miscommunication between design and code.
              </p>
            </div>

            {/* Interactive Node Graph in Dark Graphite Console with Animated Pipeline Beams */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-md relative overflow-hidden">
              {/* Subtle Background Circuit Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 relative z-10">
                {/* Node 1 */}
                <div
                  onClick={() => setActiveNode(1)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer relative group/node ${
                    activeNode === 1
                      ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/40 scale-105 font-bold'
                      : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                  }`}
                >
                  <Code2 className="w-5 h-5 mx-auto mb-1.5 text-blue-300 transition-transform group-hover/node:scale-110" />
                  <div className="text-xs font-bold">Fast Modern Core</div>
                  <div className={`text-[10px] font-mono mt-1 ${activeNode === 1 ? 'text-blue-100' : 'text-slate-400'}`}>
                    Next.js 15 & React 19
                  </div>
                  {activeNode === 1 && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400" />
                    </span>
                  )}
                </div>

                {/* Node 2 */}
                <div
                  onClick={() => setActiveNode(2)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer relative group/node ${
                    activeNode === 2
                      ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/40 scale-105 font-bold'
                      : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                  }`}
                >
                  <ShieldCheck className="w-5 h-5 mx-auto mb-1.5 text-emerald-400 transition-transform group-hover/node:scale-110" />
                  <div className="text-xs font-bold">Zero-Bug Testing</div>
                  <div className={`text-[10px] font-mono mt-1 ${activeNode === 2 ? 'text-blue-100' : 'text-slate-400'}`}>
                    Multi-Device QA (18 Screens)
                  </div>
                  {activeNode === 2 && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                    </span>
                  )}
                </div>

                {/* Node 3 */}
                <div
                  onClick={() => setActiveNode(3)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer relative group/node ${
                    activeNode === 3
                      ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/40 scale-105 font-bold'
                      : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                  }`}
                >
                  <Globe className="w-5 h-5 mx-auto mb-1.5 text-sky-300 transition-transform group-hover/node:scale-110" />
                  <div className="text-xs font-bold">Worldwide Delivery</div>
                  <div className={`text-[10px] font-mono mt-1 ${activeNode === 3 ? 'text-blue-100' : 'text-slate-400'}`}>
                    Global Edge Multi-Region
                  </div>
                  {activeNode === 3 && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400" />
                    </span>
                  )}
                </div>
              </div>

              {/* Active node detail inspector */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 shadow-inner space-y-1">
                {activeNode === 1 && (
                  <>
                    <p className="font-semibold text-white">
                      → Instant Page Delivery: Pages load in milliseconds without sluggish delays.
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Clean modern code structure engineered for maximum speed, security, and search engine ranking.
                    </p>
                  </>
                )}
                {activeNode === 2 && (
                  <>
                    <p className="font-semibold text-white">
                      → Zero-Bug Quality Check: Comprehensive pre-launch testing across 18 screen sizes.
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Every form, button, and link is verified before launch so your customers never hit an error.
                    </p>
                  </>
                )}
                {activeNode === 3 && (
                  <>
                    <p className="font-semibold text-white">
                      → Worldwide Instant Loading: High-speed delivery across all regions and devices.
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Global network caching and enterprise-grade security to keep your site live and protected 24/7.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Card 3 (Span 4/12): Component Architecture Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
            className="md:col-span-6 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-lg transition-colors transition-shadow duration-200"
          >
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
                Custom Buttons & Forms That Get You Leads
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Every button, form, and section on your website is designed to turn visitors into actual phone calls, WhatsApp messages, and paying customers.
              </p>
            </div>

              {/* Preview vs Code Box */}
              <div className="h-44 rounded-2xl bg-slate-50 border border-slate-200 p-3 overflow-hidden flex flex-col justify-center">
                {activeCodeTab === 'preview' ? (
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2.5 shadow-xs text-center">
                    <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase">Lead Capture Widget</span>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                      <span>Available Slots This Month:</span>
                      <span className="text-blue-600 font-mono font-bold">{demoBookingCount} Slots</span>
                    </div>
                    <button
                      onClick={() => setDemoBookingCount(prev => (prev > 1 ? prev - 1 : 14))}
                      className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                    >
                      Book a Free Consultation
                    </button>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 text-xs text-slate-700">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>Conversion Optimization Features:</span>
                    </div>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li>✓ 1-Click WhatsApp & Phone Call triggers</li>
                      <li>✓ Instant form validation & CRM sync</li>
                      <li>✓ High-converting mobile layouts</li>
                    </ul>
                  </div>
                )}
              </div>
          </motion.div>

          {/* Card 4 (Span 4/12): Technical SEO 4x100 Gauge Tiles */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
            className="md:col-span-6 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-lg transition-colors transition-shadow duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <Gauge className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    Target 100/100 Vitals
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">Google's Official Speed Test</span>
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
          </motion.div>

          {/* Card 5 (Span 4/12): Security & High Uptime Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
            className="md:col-span-12 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-lg transition-colors transition-shadow duration-200"
          >
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
                Hardened SSL encryption, automated DDoS filtering, and continuous health monitoring to keep your site fast and secure.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-sans">HTTPS & SSL Encryption:</span>
                <span className="text-blue-700 font-bold font-mono">Grade A+ (Strict TLS)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-sans">Automated DDoS Defense:</span>
                <span className="text-emerald-700 font-bold font-mono">Cloudflare Edge Gated</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-sans">Uptime Health Watch:</span>
                <span className="text-slate-900 font-bold font-mono">24/7 Real-Time Ping</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
