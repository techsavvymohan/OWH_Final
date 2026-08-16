'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Terminal, 
  Gauge, 
  Clock, 
  ChevronRight, 
  X, 
  Check, 
  AlertCircle,
  FileCheck2,
  Sparkles
} from 'lucide-react';

interface ZeroBugBandProps {
  onOpenProjectModal: (service?: string) => void;
}

const GUARANTEE_ITEMS = [
  { id: 'qa', label: 'Cross-Device Tested', icon: ShieldCheck, status: '100% Passed' },
  { id: 'errors', label: 'Zero Broken Pages', icon: Terminal, status: 'Zero Faults' },
  { id: 'vitals', label: 'Instant Load Speed', icon: Gauge, status: 'Sub-Second' },
  { id: 'sla', label: '90-Day Bug Warranty', icon: Clock, status: 'Active Support' },
];

const PROTOCOL_STEPS = [
  {
    phase: 'Phase 1 · Custom Design & Code Quality Gate',
    title: 'Clean Custom Build — No Bloated Templates',
    desc: 'We build your site with clean, custom code. No slow page builders, no security vulnerabilities, and no brittle plugins that crash after updates.',
  },
  {
    phase: 'Phase 2 · Cross-Device & Mobile Screen Testing',
    title: '18 Mobile Phone & Tablet Breakpoint Audits',
    desc: 'We test your website across every iPhone, Android, iPad, and laptop screen size before launch, ensuring every button, layout, and contact form works 100% flawlessly.',
  },
  {
    phase: 'Phase 3 · Google Search & Speed Certification',
    title: 'Sub-Second Page Delivery & Google SEO Ready',
    desc: 'We optimize your site to load instantly under 1 second and set up Google search indexing from Day 1 so potential customers find your business easily.',
  },
  {
    phase: 'Phase 4 · 90-Day Monitored Peace-of-Mind Window',
    title: 'Monitored 90-Day Stability Window',
    desc: 'Real-time 24/7 uptime monitoring. If any bug or layout issue occurs within 90 days after launch, rapid engineering remediation is included in your monitored stability window.',
  },
];

export function ZeroBugBand({ onOpenProjectModal }: ZeroBugBandProps) {
  const [showProtocolModal, setShowProtocolModal] = React.useState(false);
  const [activeCheckIndex, setActiveCheckIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveCheckIndex(prev => (prev + 1) % GUARANTEE_ITEMS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative -mt-4 mb-16 max-w-7xl mx-auto px-4 sm:px-6"
    >
      {/* Outer Glow & Shimmer Container */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-400/40 via-emerald-400/40 to-blue-400/40 shadow-xl shadow-slate-900/5">
        <div className="relative overflow-hidden rounded-2xl glass-panel px-5 py-4 sm:py-5 border border-slate-200/90 shadow-sm">
          {/* Shimmer sweep */}
          <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-20" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Guarantee Brand Title */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 neo-pill">
                <ShieldCheck className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                    Zero-Bug Handover Protocol™
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE STANDARD
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  We test every button, form, and page across 18 screen sizes before launch so nothing breaks.
                </p>
              </div>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 w-full lg:w-auto">
              {GUARANTEE_ITEMS.map((item, index) => {
                const isCurrent = activeCheckIndex === index;
                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs transition-all ${
                      isCurrent
                        ? 'glass-card border-blue-300 text-blue-950 shadow-xs'
                        : 'neo-inset text-slate-700'
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <div className="truncate">
                      <span className="font-semibold block truncate">{item.label}</span>
                      <span className="text-[10px] font-mono text-emerald-700 block font-bold">
                        {item.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Protocol Deep-dive Trigger */}
            <button
              id="inspect-protocol-btn"
              onClick={() => setShowProtocolModal(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 px-4 py-2 rounded-xl neo-button shrink-0 cursor-pointer"
            >
              <span>Inspect Protocol</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Protocol Explanation Modal */}
      <AnimatePresence>
        {showProtocolModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProtocolModal(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Zero-Bug Handover Protocol™
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      Engineering Specification & SLA Mandate
                    </p>
                  </div>
                </div>
                <button
                  id="close-protocol-modal-btn"
                  onClick={() => setShowProtocolModal(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Protocol Steps */}
              <div className="mt-6 space-y-4">
                {PROTOCOL_STEPS.map((step, idx) => (
                  <div
                    key={step.phase}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-blue-600 font-bold uppercase tracking-wider">
                        {step.phase}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                        VERIFIED GATE #{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Guarantee Badge & CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Backed by contractually defined stability SLA.</span>
                </div>
                <button
                  onClick={() => {
                    setShowProtocolModal(false);
                    onOpenProjectModal('Zero-Bug Web System');
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Commission a Zero-Bug Build</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
