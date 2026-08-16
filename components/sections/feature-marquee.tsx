'use client';

import * as React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Search, 
  Layers, 
  Lock, 
  BarChart, 
  Globe, 
  Clock,
  Code2,
  Share2,
  Sparkles
} from 'lucide-react';

const ROW_1_FEATURES = [
  { label: 'Zero-Bug Handover Protocol™', icon: ShieldCheck, type: 'brand' },
  { label: 'Optimized for 100/100 Core Web Vitals', icon: Zap, type: 'growth' },
  { label: 'Next.js 15 App Router & React 19', icon: Code2, type: 'brand' },
  { label: 'Programmatic SEO & JSON-LD Schema', icon: Search, type: 'growth' },
  { label: 'Responsive Multi-Device Layouts', icon: Smartphone, type: 'brand' },
  { label: 'Strict Pure Light Luxury Palette', icon: Sparkles, type: 'brand' },
  { label: 'Sub-Second Global Edge Delivery', icon: Globe, type: 'growth' },
];

const ROW_2_FEATURES = [
  { label: '90-Day Monitored Stability SLA', icon: Clock, type: 'brand' },
  { label: 'Target-Driven Paid Media ROAS Funnels', icon: BarChart, type: 'growth' },
  { label: 'Social Content Velocity (LinkedIn/X/IG)', icon: Share2, type: 'growth' },
  { label: 'Accessible WCAG AA 2.1 Primitives', icon: Layers, type: 'brand' },
  { label: 'Zero-Trust Security & SSL Grade A+', icon: Lock, type: 'brand' },
  { label: 'Continuous 90-Day Growth Sprint Engine', icon: Sparkles, type: 'growth' },
  { label: 'Multi-Channel Attribution & CAPI Tracking', icon: Search, type: 'growth' },
];

export function FeatureMarquee() {
  return (
    <section className="py-16 bg-white overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Built Into Every Build & Growth Engagement
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Zero shortcuts. Industrial-grade frontend engineering paired with high-yield compound marketing.
        </p>
      </div>

      {/* Row 1 - Marquee Left */}
      <div className="relative w-full flex overflow-hidden mb-4 mask-fade">
        <div className="flex gap-3 sm:gap-4 animate-marquee whitespace-nowrap py-1">
          {ROW_1_FEATURES.concat(ROW_1_FEATURES).map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={`r1-${f.label}-${i}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold backdrop-blur-md cursor-default transition-transform hover:scale-105 shadow-2xs ${
                  f.type === 'growth'
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                    : 'bg-slate-50 text-slate-800 border-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${f.type === 'growth' ? 'text-emerald-700' : 'text-blue-700'}`} />
                <span>{f.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2 - Marquee Reverse */}
      <div className="relative w-full flex overflow-hidden mask-fade">
        <div className="flex gap-3 sm:gap-4 animate-marquee-reverse whitespace-nowrap py-1">
          {ROW_2_FEATURES.concat(ROW_2_FEATURES).map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={`r2-${f.label}-${i}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold backdrop-blur-md cursor-default transition-transform hover:scale-105 shadow-2xs ${
                  f.type === 'growth'
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                    : 'bg-slate-50 text-slate-800 border-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${f.type === 'growth' ? 'text-emerald-700' : 'text-blue-700'}`} />
                <span>{f.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
