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

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function VercelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true" {...props}>
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  );
}

const TECH_PARTNERS = [
  { name: 'Next.js 15', tag: 'App Router & Edge SSR', icon: Globe, color: 'text-slate-900', bg: 'bg-slate-100' },
  { name: 'React 19', tag: 'Server Actions & Hydration', icon: Code2, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'TypeScript 5.9', tag: 'Type-Safe Builds', icon: Code2, color: 'text-sky-600', bg: 'bg-sky-50' },
  { name: 'Tailwind CSS v4', tag: 'Zero-Runtime Styles', icon: Zap, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { name: 'Google Ads & Search', tag: 'High-Intent Search Engine', icon: Target, color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'Meta Pixel & CAPI', tag: 'Conversion Attribution', icon: Flame, color: 'text-blue-700', bg: 'bg-blue-50' },
  { name: 'Stripe Billing', tag: 'Global Payment Rails', icon: CreditCard, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'PostgreSQL & Supabase', tag: 'Scalable Cloud Database', icon: Database, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'GitHub CI/CD', tag: 'Playwright Automated Gates', icon: GithubIcon, color: 'text-slate-900', bg: 'bg-slate-100' },
  { name: 'Google Search Console', tag: 'Semantic Indexation API', icon: Search, color: 'text-emerald-700', bg: 'bg-emerald-50' },
  { name: 'Vercel Edge Network', tag: 'Global Sub-100ms TTFB', icon: VercelIcon, color: 'text-slate-900', bg: 'bg-slate-100' },
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
