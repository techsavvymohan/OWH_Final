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

function ReactIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" width="16" height="16" aria-hidden="true" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

function TypeScriptIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true" {...props}>
      <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.29 13.008h-2.44V20.5H6.91v-7.492H4.477V10.82h7.313v2.188zm3.25 4.887c.727.422 1.633.688 2.508.688 1.438 0 2.227-.68 2.227-1.68 0-.93-.563-1.469-1.992-1.992-1.828-.688-2.672-1.633-2.672-3.008 0-2.148 1.727-3.414 4.195-3.414 1.07 0 2.016.273 2.68.68l-.68 2.047a4.67 4.67 0 0 0-2.094-.523c-1.227 0-1.898.601-1.898 1.43 0 .843.578 1.328 1.945 1.851 1.96.758 2.727 1.672 2.727 3.125 0 2.149-1.688 3.516-4.5 3.516-1.273 0-2.46-.352-3.218-.844l.773-2.188z"/>
    </svg>
  );
}

function TailwindIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
    </svg>
  );
}

function FigmaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true" {...props}>
      <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4zm0-16h4v8H8c-2.2 0-4-1.8-4-4s1.8-4 4-4zm0-8h4v8H8C5.8 0 4 1.8 4 4s1.8 4 4 4zm4 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0zm4 8c2.2 0 4 1.8 4 4s-1.8 4-4 4c-2.2 0-4-1.8-4-4s1.8-4 4-4z"/>
    </svg>
  );
}

const TECH_PARTNERS = [
  { name: 'Next.js 15', tag: 'App Router & Edge SSR', icon: Globe, color: 'text-slate-900', bg: 'bg-slate-100' },
  { name: 'React 19', tag: 'Server Actions & Hydration', icon: ReactIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'TypeScript 5.9', tag: 'Type-Safe Builds', icon: TypeScriptIcon, color: 'text-sky-600', bg: 'bg-sky-50' },
  { name: 'Tailwind CSS v4', tag: 'Zero-Runtime Styles', icon: TailwindIcon, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { name: 'Google Ads & Search', tag: 'High-Intent Search Engine', icon: Target, color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'Meta Pixel & CAPI', tag: 'Conversion Attribution', icon: Flame, color: 'text-blue-700', bg: 'bg-blue-50' },
  { name: 'Stripe Billing', tag: 'Global Payment Rails', icon: CreditCard, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'PostgreSQL & Supabase', tag: 'Scalable Cloud Database', icon: Database, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'GitHub CI/CD', tag: 'Playwright Automated Gates', icon: GithubIcon, color: 'text-slate-900', bg: 'bg-slate-100' },
  { name: 'Google Search Console', tag: 'Semantic Indexation API', icon: Search, color: 'text-emerald-700', bg: 'bg-emerald-50' },
  { name: 'Vercel Edge Network', tag: 'Global Sub-100ms TTFB', icon: VercelIcon, color: 'text-slate-900', bg: 'bg-slate-100' },
  { name: 'Figma Token Systems', tag: 'Design Architecture', icon: FigmaIcon, color: 'text-purple-600', bg: 'bg-purple-50' },
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
