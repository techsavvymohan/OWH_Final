'use client';

import * as React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

interface SignatureBrandMonolithProps {
  onOpenProjectModal?: (service?: string) => void;
}

export function SignatureBrandMonolith({ onOpenProjectModal }: SignatureBrandMonolithProps) {
  return (
    <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-tr from-slate-900 via-slate-850 to-blue-950 text-white border border-slate-700/60 shadow-2xl overflow-hidden my-12">
      {/* Ambient Blue Radial Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Text & Value Prop (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-300 text-xs font-mono font-bold border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>THE ONLYWAYONLINE SYSTEM</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Strategy. Velocity. Growth. <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              One Integrated Engine.
            </span>
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            Most companies juggle multiple disconnected agencies for design, development, SEO, and paid ads. OnlyWayOnline operates as your single engineering and growth partner with fixed velocity, transparent milestones, and a 90-day stability guarantee.
          </p>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left">
              <span className="text-[10px] font-mono text-blue-400 uppercase font-bold block">Only</span>
              <span className="text-xs font-bold text-white">Strategy First</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left">
              <span className="text-[10px] font-mono text-sky-400 uppercase font-bold block">Way</span>
              <span className="text-xs font-bold text-white">Rapid Velocity</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left">
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">Online</span>
              <span className="text-xs font-bold text-white">Targeted Growth</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenProjectModal?.('Full OnlyWayOnline System')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm font-mono flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 hover:scale-105 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Initiate Your Growth System</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3D Signature Monolith Render (6 cols) */}
        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/15 shadow-2xl bg-black/40 group">
          <Image
            src="/assets/visuals/onlyway-signature-object-3d.jpg"
            alt="OnlyWayOnline Signature 3D Brand Monolith"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white shadow-xs">
            Signature Brand Monolith · Strategy · Velocity · Growth
          </div>
        </div>
      </div>
    </div>
  );
}
