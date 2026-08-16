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
  { label: 'Zero-Error Website Guarantee', icon: ShieldCheck, type: 'brand' },
  { label: '100/100 Google Speed Score', icon: Zap, type: 'growth' },
  { label: 'Fast Modern Website Technology', icon: Code2, type: 'brand' },
  { label: 'Google Search Ranking Ready', icon: Search, type: 'growth' },
  { label: 'Tested on All Mobile & Tablet Screens', icon: Smartphone, type: 'brand' },
  { label: 'Custom Professional Brand Design', icon: Sparkles, type: 'brand' },
  { label: 'Loads in Under 1 Second Worldwide', icon: Globe, type: 'growth' },
];

const ROW_2_FEATURES = [
  { label: '90-Day Free Fix Guarantee', icon: Clock, type: 'brand' },
  { label: 'Profitable Google & Facebook Ads', icon: BarChart, type: 'growth' },
  { label: 'Social Media Posts & Graphics (LinkedIn/X/IG)', icon: Share2, type: 'growth' },
  { label: 'Easy to Use for All Visitors', icon: Layers, type: 'brand' },
  { label: 'Bank-Level Security & SSL', icon: Lock, type: 'brand' },
  { label: 'Turnkey 90-Day Growth Plan', icon: Sparkles, type: 'growth' },
  { label: 'Accurate Lead & Customer Tracking', icon: Search, type: 'growth' },
];

export function FeatureMarquee() {
  return (
    <section className="py-16 bg-white overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Included With Every Website & Growth Project
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Zero shortcuts. High-speed custom web design paired with proven marketing that brings real customers.
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
