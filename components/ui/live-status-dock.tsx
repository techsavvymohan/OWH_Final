'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  X, 
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { WhatsAppIcon, PhoneCallIcon } from '@/components/ui/brand-icons';

interface LiveStatusDockProps {
  onOpenProjectModal: (service?: string) => void;
}

export function LiveStatusDock({ onOpenProjectModal }: LiveStatusDockProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Live System Status" className="fixed bottom-5 left-4 z-40 hidden md:block select-none">
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded-dock"
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl p-4 bg-slate-950/90 backdrop-blur-2xl border border-slate-800 text-white shadow-2xl shadow-slate-950/50 w-72 space-y-3"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-slate-200">
                  Accepting New Projects
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Collapse live status widget"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="space-y-1.5 text-[11px] text-slate-300">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                  <Zap className="w-3 h-3 text-amber-400" /> Response Time
                </span>
                <span className="text-emerald-400 font-bold">Under 15 Minutes</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3 h-3 text-blue-400" /> Free Consultation
                </span>
                <span className="text-blue-400 font-bold">100% No Obligation</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-1 space-y-1.5">
              <a
                href="https://wa.me/916398638176?text=Hi%20OnlyWayOnline,%20I'd%20like%20to%20discuss%20a%20website%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-1.5">
                <a
                  href="tel:+916398638176"
                  className="py-1.5 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <PhoneCallIcon className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>

                <button
                  onClick={() => {
                    setIsExpanded(false);
                    onOpenProjectModal('15-Minute Free Consultation');
                  }}
                  className="py-1.5 px-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <Sparkles className="w-3 h-3 text-blue-200" />
                  <span>Book Call</span>
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed-dock"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2"
          >
            <button
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-950/85 hover:bg-slate-900 backdrop-blur-xl border border-slate-800 hover:border-slate-700 text-white shadow-xl shadow-slate-950/40 text-xs transition-all cursor-pointer group"
              aria-label="Open project availability status"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-300 group-hover:text-white font-medium transition-colors">
                Available for New Projects · <strong className="text-emerald-400 font-bold">Quick Connect</strong>
              </span>
              <ChevronUp className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
