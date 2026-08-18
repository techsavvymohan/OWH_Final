'use client';

import * as React from 'react';
import Image from 'next/image';
import { Rocket, ShieldCheck, Zap, TrendingUp, Sparkles, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

interface LaunchBlueprintSceneProps {
  onOpenProjectModal?: (service?: string) => void;
}

const BLUEPRINT_STEPS = [
  {
    step: '01',
    title: 'BUILD (Days 1–30)',
    sub: 'Foundation & Core Engineering',
    desc: 'Custom UI design in Figma, Next.js 15 full-stack code, mobile testing across 18 screen sizes, and Zero-Bug handover.',
    badge: 'Month 1',
    accent: 'border-blue-300 text-blue-700 bg-blue-50',
  },
  {
    step: '02',
    title: 'GROW (Days 31–60)',
    sub: 'Organic Search & Social Distribution',
    desc: 'Schema.org JSON-LD indexing, technical Google speed tuning, content publishing, and weekly social media brand authority.',
    badge: 'Month 2',
    accent: 'border-indigo-300 text-indigo-700 bg-indigo-50',
  },
  {
    step: '03',
    title: 'OPTIMIZE (Days 61–90)',
    sub: 'High-ROAS Paid Acquisition & Scaling',
    desc: 'Targeted Google & Meta ad campaigns with call tracking, conversion rate optimization, and monthly ROI review.',
    badge: 'Month 3',
    accent: 'border-emerald-300 text-emerald-700 bg-emerald-50',
  },
];

export function LaunchBlueprintScene({ onOpenProjectModal }: LaunchBlueprintSceneProps) {
  return (
    <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60 border border-slate-200 shadow-xl overflow-hidden my-12">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-slate-100 text-xs font-mono font-bold border border-slate-800 mb-3">
            <Rocket className="w-3.5 h-3.5 text-amber-400" />
            <span>90-DAY LAUNCH & GROWTH BLUEPRINT</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            We Don&apos;t Just Launch and Disappear — We Stay and Scale.
          </h3>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            A continuous three-stage delivery framework that turns an idea into a tested website, brings qualified Google searchers, and converts visitors into paying customers.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenProjectModal?.('90-Day Complete Launch Sprint')}
          className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-mono flex items-center gap-2 shadow-md hover:scale-105 transition-all self-start md:self-auto cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
          <span>Apply for 90-Day Sprint</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* 3D Visual Render (7 cols) */}
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-slate-100 aspect-[16/9] border border-slate-200 shadow-sm group">
          <Image
            src="/assets/visuals/launch-blueprint-3d.jpg"
            alt="3D 3-Stage Architectural Assembly Launch Blueprint"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono font-bold text-slate-800 shadow-xs">
            Studio PBR Render: Physical 3-Tier Assembly Blueprint
          </div>
        </div>

        {/* 3-Stage Specification Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {BLUEPRINT_STEPS.map(step => (
            <div
              key={step.step}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-all space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${step.accent}`}>
                  {step.badge}
                </span>
                <span className="text-xs font-bold text-slate-900">{step.title}</span>
              </div>
              <h4 className="text-xs font-semibold text-slate-800">{step.sub}</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
