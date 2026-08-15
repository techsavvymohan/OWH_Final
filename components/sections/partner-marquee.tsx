'use client';

import * as React from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  GitBranch, 
  Globe, 
  Palette, 
  Zap,
  Flame,
  Search,
  Target,
  Database,
  CreditCard
} from 'lucide-react';

const TECH_PARTNERS = [
  { name: 'Next.js 15', tag: 'App Router & Edge SSR', icon: Globe, color: 'text-slate-900', bg: 'bg-slate-100' },
  { name: 'React 19', tag: 'Server Actions & Hydration', icon: Code2, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'TypeScript 5.9', tag: 'Type-Safe Builds', icon: Code2, color: 'text-sky-600', bg: 'bg-sky-50' },
  { name: 'Tailwind CSS v4', tag: 'Zero-Runtime Styles', icon: Zap, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { name: 'Google Ads & Search', tag: 'High-Intent Search Engine', icon: Target, color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'Meta Pixel & CAPI', tag: 'Conversion Attribution', icon: Flame, color: 'text-blue-700', bg: 'bg-blue-50' },
  { name: 'Stripe Billing', tag: 'Global Payment Rails', icon: CreditCard, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'PostgreSQL & Supabase', tag: 'Scalable Cloud Database', icon: Database, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'GitHub CI/CD', tag: 'Playwright Automated Gates', icon: GitBranch, color: 'text-slate-800', bg: 'bg-slate-100' },
  { name: 'Google Search Console', tag: 'Semantic Indexation API', icon: Search, color: 'text-emerald-700', bg: 'bg-emerald-50' },
  { name: 'Vercel Edge Network', tag: 'Global Sub-100ms TTFB', icon: Cpu, color: 'text-slate-900', bg: 'bg-slate-100' },
  { name: 'Figma Token Systems', tag: 'Design Architecture', icon: Palette, color: 'text-purple-600', bg: 'bg-purple-50' },
];

export function PartnerMarquee() {
  return (
    <section className="py-12 border-y border-slate-200 bg-slate-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-600 font-bold">
          Engineered With Industry Standards & High-Converting Lead Infrastructure
        </p>
      </div>

      {/* Marquee Row */}
      <div className="relative w-full flex overflow-hidden mask-fade">
        <div className="flex gap-4 sm:gap-6 animate-marquee whitespace-nowrap py-2">
          {TECH_PARTNERS.concat(TECH_PARTNERS).map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={`${partner.name}-${index}`}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-500/60 hover:scale-105 transition-all cursor-default"
              >
                <div className={`p-1.5 rounded-lg ${partner.bg}`}>
                  <Icon className={`w-4 h-4 ${partner.color}`} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-900">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {partner.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
