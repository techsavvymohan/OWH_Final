'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Activity,
  ShoppingBag,
  Layers,
  Search,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Cpu,
  Globe,
  Sliders,
  DollarSign,
  Star,
  Users,
  Smartphone,
  Flame,
  Check,
  BarChart3
} from 'lucide-react';

interface HeroVisualizerProps {
  onOpenProjectModal: (service?: string) => void;
}

type ShowcaseMode = 'ecommerce' | 'saas' | 'leadgen';

export function HeroVisualizer({ onOpenProjectModal }: HeroVisualizerProps) {
  const [activeMode, setActiveMode] = React.useState<ShowcaseMode>('ecommerce');
  const [autoRotate, setAutoRotate] = React.useState(true);
  const [demoCodeApplied, setDemoCodeApplied] = React.useState(false);
  const [pingLatency, setPingLatency] = React.useState(18);
  const [isPinging, setIsPinging] = React.useState(false);
  const [leadStep, setLeadStep] = React.useState<1 | 2>(1);
  const [bookedSlot, setBookedSlot] = React.useState(false);

  // Auto-cycle through preview modes unless user interacts
  React.useEffect(() => {
    if (!autoRotate) return;
    const modes: ShowcaseMode[] = ['ecommerce', 'saas', 'leadgen'];
    const timer = setInterval(() => {
      setActiveMode(prev => {
        const nextIdx = (modes.indexOf(prev) + 1) % modes.length;
        return modes[nextIdx];
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const handleManualSelect = (mode: ShowcaseMode) => {
    setAutoRotate(false);
    setActiveMode(mode);
  };

  const handlePingTest = () => {
    setIsPinging(true);
    setTimeout(() => {
      setPingLatency(Math.floor(Math.random() * 12) + 12);
      setIsPinging(false);
    }, 400);
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto mt-12 sm:mt-16"
      onMouseEnter={() => setAutoRotate(false)}
    >
      {/* Outer Ambient Glow Aura */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-sky-400/20 to-emerald-500/20 rounded-[36px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none -z-10 animate-pulse-slow" />

      {/* Main Glassmorphic Showcase Stage Container */}
      <div className="relative rounded-[32px] bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-slate-900/10 overflow-hidden">
        
        {/* Top Control Header / Browser & Tab Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 sm:px-7 py-3.5 border-b border-slate-100 bg-slate-900 text-white gap-3">
          {/* Left: Window Traffic Lights & Breadcrumbs */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/90 shadow-2xs" />
              <span className="w-3 h-3 rounded-full bg-amber-500/90 shadow-2xs" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-2xs" />
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300 pl-2 border-l border-slate-800">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>onlywayonline.com/live-architecture</span>
            </div>
          </div>

          {/* Center/Right: Interactive Mode Switcher Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-800/90 border border-slate-700/80">
            <button
              type="button"
              onClick={() => handleManualSelect('ecommerce')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeMode === 'ecommerce'
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>E-Commerce Flagship</span>
            </button>

            <button
              type="button"
              onClick={() => handleManualSelect('saas')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeMode === 'saas'
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>SaaS & Portals</span>
            </button>

            <button
              type="button"
              onClick={() => handleManualSelect('leadgen')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeMode === 'leadgen'
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Lead Conversion</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Stage Body */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-50/60 via-white to-blue-50/20">
          <AnimatePresence mode="wait">
            
            {/* MODE 1: E-COMMERCE / COMMERCE DISCOVERY FLAGSHIP */}
            {activeMode === 'ecommerce' && (
              <motion.div
                key="mode-ecommerce"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                {/* Left Col: Live Interactive Product & Cart Engine Card (7 cols) */}
                <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-md space-y-4">
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-mono text-[10px] font-bold border border-blue-200">
                        NEXT.js 15 COMMERCE CORE
                      </span>
                      <span className="text-xs text-slate-500 font-mono">1-Click Fast Checkout</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Instant Edge Hydration</span>
                    </div>
                  </div>

                  {/* Interactive Product Showcase Box */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center p-4 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200/80">
                    {/* Visual Mock Product Card */}
                    <div className="w-full sm:w-36 h-28 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-700 p-3 text-white flex flex-col justify-between shadow-md relative overflow-hidden shrink-0">
                      <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-sm" />
                      <div className="flex items-center justify-between text-[10px] font-mono opacity-80">
                        <span>LUMINA PRO</span>
                        <span>SERIES X</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold">Ultra Wireless Studio</div>
                        <div className="text-lg font-mono font-extrabold mt-0.5">
                          {demoCodeApplied ? '$189.00' : '$249.00'}
                        </div>
                      </div>
                    </div>

                    {/* Product Details & Actions */}
                    <div className="space-y-2 text-left w-full">
                      <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-slate-700 text-[11px] font-mono">(4.9/5 · 48 Verified Reviews)</span>
                      </div>
                      
                      <div className="text-xs text-slate-600 font-medium">
                        Sub-second catalog filter, dynamic inventory sync & automated tax calculation.
                      </div>

                      {/* Interactive Discount Button */}
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setDemoCodeApplied(prev => !prev)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            demoCodeApplied
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-slate-900 text-white hover:bg-slate-800'
                          }`}
                        >
                          {demoCodeApplied ? (
                            <>
                              <Check className="w-3 h-3 stroke-[3]" />
                              <span>PROMO APPLIED (-$60)</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-3 h-3 text-amber-300" />
                              <span>Test Auto-Apply VIP Code</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Speed & Conversion Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 text-center font-mono">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">LCP Speed</span>
                      <span className="text-sm font-bold text-emerald-700">0.42s</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">Cart Friction</span>
                      <span className="text-sm font-bold text-blue-700">0.00%</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">Conv. Rate</span>
                      <span className="text-sm font-bold text-emerald-700">+3.8x Lift</span>
                    </div>
                  </div>
                </div>

                {/* Right Col: Live Telemetry & Guarantee Stack (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span>Why Our E-Commerce Converts</span>
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">
                        100/100 Core Vitals
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Instant product filtering without sluggish page reloads.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Seamless Apple Pay, Google Pay & UPI 1-click checkout.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Automated rich schema markup so products rank on Google.</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive CTA to discuss store */}
                  <button
                    type="button"
                    onClick={() => onOpenProjectModal('ecommerce')}
                    className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Build Your High-Performance Store</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* MODE 2: HIGH-SCALE SAAS & CLIENT PORTAL */}
            {activeMode === 'saas' && (
              <motion.div
                key="mode-saas"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                {/* Left Col: Live Real-Time SVG Performance Spline Chart (7 cols) */}
                <div className="lg:col-span-7 rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6 text-white shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-xs font-mono font-bold text-slate-200">
                        EDGE API THROUGHPUT & LATENCY
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handlePingTest}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-mono font-semibold text-blue-300 flex items-center gap-1 transition-colors cursor-pointer border border-slate-700"
                    >
                      <RefreshCw className={`w-3 h-3 ${isPinging ? 'animate-spin' : ''}`} />
                      <span>Ping Edge CDN ({pingLatency}ms)</span>
                    </button>
                  </div>

                  {/* SVG Spline Trend Area Chart */}
                  <div className="relative h-32 w-full pt-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="heroSaasChartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Grid Lines */}
                      <line x1="0" y1="30" x2="400" y2="30" stroke="#1e293b" strokeDasharray="3 3" />
                      <line x1="0" y1="70" x2="400" y2="70" stroke="#1e293b" strokeDasharray="3 3" />
                      <line x1="0" y1="110" x2="400" y2="110" stroke="#1e293b" strokeDasharray="3 3" />
                      
                      {/* Filled Area */}
                      <path
                        d="M 0,100 Q 60,60 120,75 T 240,40 T 320,25 T 400,15 L 400,120 L 0,120 Z"
                        fill="url(#heroSaasChartGlow)"
                      />
                      {/* Animated Line Stroke */}
                      <path
                        d="M 0,100 Q 60,60 120,75 T 240,40 T 320,25 T 400,15"
                        fill="none"
                        stroke="#60a5fa"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Glowing Peak Data Node */}
                      <circle cx="320" cy="25" r="4.5" fill="#60a5fa" className="animate-ping" />
                      <circle cx="320" cy="25" r="4" fill="#ffffff" />
                      <circle cx="400" cy="15" r="4" fill="#3b82f6" />
                    </svg>
                    <div className="absolute top-1 right-20 text-[10px] font-mono bg-blue-600/90 text-white px-2 py-0.5 rounded shadow-sm">
                      99.98% SLA
                    </div>
                  </div>

                  {/* Telemetry Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 font-mono text-center pt-1">
                    <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-[9px] text-slate-400 block">Response Time</span>
                      <span className="text-xs font-bold text-blue-400">{pingLatency}ms Edge</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-[9px] text-slate-400 block">Auth Security</span>
                      <span className="text-xs font-bold text-emerald-400">Strict JWT</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-[9px] text-slate-400 block">Crash Rate</span>
                      <span className="text-xs font-bold text-emerald-400">0.00% QA</span>
                    </div>
                  </div>
                </div>

                {/* Right Col: SaaS Architecture Highlights (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-blue-600" />
                        <span>Custom Portals & Web Apps</span>
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">
                        Enterprise Grade
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Interactive dashboards, subscription billing & CRM workflows.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Multi-tenant security isolation & bank-level encryption.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Scales to millions of requests with zero server lag.</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenProjectModal('saas-portal')}
                    className="w-full py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span>Commission a Custom Web App</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* MODE 3: HIGH-CONVERSION LEAD GENERATION ENGINE */}
            {activeMode === 'leadgen' && (
              <motion.div
                key="mode-leadgen"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                {/* Left Col: Interactive High-Converting Lead Capture Widget (7 cols) */}
                <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-md space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-mono text-[10px] font-bold border border-emerald-200">
                        CONVERSION ACCELERATOR
                      </span>
                      <span className="text-xs text-slate-500 font-mono">Frictionless Inbound Flow</span>
                    </div>
                    <span className="text-[10px] font-mono text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      Step {leadStep} of 2
                    </span>
                  </div>

                  {/* Interactive Lead Intake Box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    {leadStep === 1 ? (
                      <div className="space-y-2.5">
                        <div className="text-xs font-bold text-slate-900">
                          What is your primary growth goal for this quarter?
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setLeadStep(2)}
                            className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 active:scale-[0.97] text-left text-xs font-medium text-slate-800 transition-all duration-150 cursor-pointer shadow-2xs flex items-center gap-2"
                          >
                            <div className="p-1 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                              <Sparkles className="w-3.5 h-3.5" />
                            </div>
                            <span>Modernize Outdated Website</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setLeadStep(2)}
                            className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 active:scale-[0.97] text-left text-xs font-medium text-slate-800 transition-all duration-150 cursor-pointer shadow-2xs flex items-center gap-2"
                          >
                            <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                              <Search className="w-3.5 h-3.5" />
                            </div>
                            <span>Rank Top of Google (SEO)</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setLeadStep(2)}
                            className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-violet-500 hover:bg-violet-50/50 active:scale-[0.97] text-left text-xs font-medium text-slate-800 transition-all duration-150 cursor-pointer shadow-2xs flex items-center gap-2"
                          >
                            <div className="p-1 rounded-lg bg-violet-50 text-violet-600 shrink-0">
                              <BarChart3 className="w-3.5 h-3.5" />
                            </div>
                            <span>Run High-ROAS Paid Ads</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setLeadStep(2)}
                            className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-amber-500 hover:bg-amber-50/50 active:scale-[0.97] text-left text-xs font-medium text-slate-800 transition-all duration-150 cursor-pointer shadow-2xs flex items-center gap-2"
                          >
                            <div className="p-1 rounded-lg bg-amber-50 text-amber-600 shrink-0">
                              <Zap className="w-3.5 h-3.5" />
                            </div>
                            <span>Full Website + Growth Sprint</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3 text-center py-2">
                        {bookedSlot ? (
                          <div className="space-y-1.5">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto font-bold">
                              ✓
                            </div>
                            <div className="text-xs font-bold text-slate-900">Sprint Consultation Reserved!</div>
                            <div className="text-[11px] text-slate-500">
                              Our engineering team will prepare your custom speed & competitor audit.
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="text-xs font-bold text-slate-900">
                              Available Priority Slots: <span className="text-blue-600">3 of 8 Remaining</span>
                            </div>
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => setBookedSlot(true)}
                                className="flex-1 py-2 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors cursor-pointer shadow-sm"
                              >
                                Claim Free Strategy Slot →
                              </button>
                              <button
                                type="button"
                                onClick={() => setLeadStep(1)}
                                className="px-3 py-2 rounded-lg bg-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-300 transition-colors cursor-pointer"
                              >
                                Back
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Social Proof & Conversion Trust Badges */}
                  <div className="grid grid-cols-3 gap-2 font-mono text-center">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[9px] text-slate-500 block">Avg Response</span>
                      <span className="text-xs font-bold text-slate-900">&lt; 15 Mins</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[9px] text-slate-500 block">Form Drop-off</span>
                      <span className="text-xs font-bold text-emerald-700">Ultra Low</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[9px] text-slate-500 block">Client Rating</span>
                      <span className="text-xs font-bold text-amber-600">5.0 ★ (100%)</span>
                    </div>
                  </div>
                </div>

                {/* Right Col: Lead-Gen Narrative (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <span>Turning Visitors Into Paying Clients</span>
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold">
                        3x–5x ROAS
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Custom conversion funnels engineered for WhatsApp & phone calls.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Google Search & Meta Ad campaigns optimized daily for revenue.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Transparent lead tracking so every marketing dollar is accountable.</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenProjectModal('growth-sprint')}
                    className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <Flame className="w-4 h-4 text-emerald-200" />
                    <span>Claim Your Growth Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Bottom Floating Visual Telemetry Bar */}
        <div className="px-6 py-3.5 bg-slate-100/90 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-800">ENGINEERING GUARANTEE:</span>
            <span>90-Day Bug-Free Warranty & 100/100 Core Web Vitals Standard</span>
          </div>

          <div className="flex items-center gap-3 text-[10px] text-slate-500">
            <span>Next.js 15</span>
            <span>•</span>
            <span>React 19 Hydration</span>
            <span>•</span>
            <span>TypeScript Strict</span>
            <span>•</span>
            <span>Edge Multi-Region</span>
          </div>
        </div>

      </div>
    </div>
  );
}
