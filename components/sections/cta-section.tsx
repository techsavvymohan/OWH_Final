'use client';

import * as React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { WhatsAppIcon, PhoneCallIcon } from '@/components/ui/brand-icons';

interface CtaSectionProps {
  onOpenProjectModal: (service?: string) => void;
}

export function CtaSection({ onOpenProjectModal }: CtaSectionProps) {
  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-slate-100/90 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-800 text-white border border-blue-400/40 shadow-2xl shadow-blue-600/30 overflow-hidden text-center space-y-8">
          
          {/* Background Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-400/25 rounded-full blur-3xl pointer-events-none" />

          {/* Top Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-blue-100 shadow-sm relative z-10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Now Accepting New Projects — Limited Slots Available</span>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Your business deserves a{' '}
              <span className="text-sky-300 underline decoration-sky-400/60 decoration-wavy decoration-2">
                better online path.
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              No confusing tech jargon, no hidden fees. Connect with our team for a free 15-minute strategy call on Google Meet or a quick phone call.
            </p>
          </div>

          {/* Action Button Row */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-2 relative z-10">
            <button
              id="cta-discuss-project-btn"
              onClick={() => onOpenProjectModal('15-Minute Free Consultation')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-blue-700 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20 hover:scale-105 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>Discuss Your Project (Free 15-Min Call)</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </button>

            <a
              href="https://wa.me/916398638176?text=Hi%20OnlyWayOnline,%20I'd%20like%20to%20discuss%20a%20website%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg shadow-emerald-900/30"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="tel:+916398638176"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-sm"
            >
              <PhoneCallIcon className="w-5 h-5" />
              <span>Direct Phone Call</span>
            </a>
          </div>

          {/* Proof Badges */}
          <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-blue-100 relative z-10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span className="font-semibold">Zero-Error Website Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-300" />
              <span className="font-semibold">90-Day Free Fix Promise</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span className="font-semibold">Perfect Google Speed Score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
