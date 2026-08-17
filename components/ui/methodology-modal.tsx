'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ShieldCheck, 
  Gauge, 
  TrendingUp, 
  CheckCircle2, 
  ExternalLink,
  Info,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

export interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProjectModal?: (service?: string) => void;
}

export function MethodologyModal({ isOpen, onClose, onOpenProjectModal }: MethodologyModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
          aria-hidden="true"
        />

        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="methodology-modal-title"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10 my-6 flex flex-col max-h-[88vh]"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <h2 id="methodology-modal-title" className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  Verification & Testing Methodology
                </h2>
                <p className="text-xs text-slate-500">
                  Standards, test conditions, and qualification criteria for our claims
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Close methodology modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {/* Standard 1: Google Speed */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                <Gauge className="w-4 h-4 text-blue-600" />
                <span>1. Sub-Second Speed & Core Web Vitals Standard</span>
              </div>
              <p>
                <strong>Test Context:</strong> Evaluated using Google Chrome Lighthouse v12 / PageSpeed Insights on simulated mobile devices (Moto G Power, 4G throttling) and high-speed broadband. Benchmark metrics target:
              </p>
              <ul className="list-disc pl-5 space-y-1 font-mono text-[11px] text-blue-950">
                <li>Largest Contentful Paint (LCP): &lt; 1.2s</li>
                <li>Cumulative Layout Shift (CLS): 0.000</li>
                <li>Interaction to Next Paint (INP): &lt; 50ms</li>
                <li>Total Blocking Time (TBT): &lt; 150ms</li>
              </ul>
            </div>

            {/* Standard 2: Zero-Bug Protocol */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>2. Zero-Bug Handover Protocol™ & 90-Day SLA</span>
              </div>
              <p>
                <strong>Test Matrix:</strong> Automated Playwright end-to-end suites testing 18 physical viewport widths (from 320px mobile to 2560px ultra-wide screens), cross-browser rendering (Chrome, Safari, Firefox, Edge), and form state sanitization.
              </p>
              <p>
                <strong>Contractual Remedy:</strong> If any visual defect, broken link, or script crash arises within 90 days post-launch that was part of original build scope, our engineering team fixes it within 24 hours at $0 client fee.
              </p>
            </div>

            {/* Standard 3: ROAS & Lead Growth */}
            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-2">
              <div className="flex items-center gap-2 text-purple-900 font-bold text-sm">
                <TrendingUp className="w-4 h-4 text-purple-600" />
                <span>3. Business Outcome & Growth Models</span>
              </div>
              <p>
                Quantitative performance metrics represent verified historical client cohort data tracked via Google Analytics 4, Meta Conversions API (CAPI), and verified CRM intake records.
              </p>
              <p className="text-[11px] text-slate-500">
                <em>* Disclaimer: Past cohort results do not guarantee identical outcomes for every niche; each campaign is tailored to local market supply, target margins, and media budget.</em>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
            {onOpenProjectModal ? (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenProjectModal('Zero-Bug Build');
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Discuss Verified Scope</span>
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
