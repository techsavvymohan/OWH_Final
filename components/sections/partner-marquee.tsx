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
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        fill="#24292F"
      />
    </svg>
  );
}

function VercelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path d="M12 1L24 22H0L12 1Z" fill="#000000" />
    </svg>
  );
}

function ReactIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="16" height="16" aria-hidden="true" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function TypeScriptIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        fill="#FFFFFF"
        d="M11.79 13.008h-2.44V20.5H6.91v-7.492H4.477V10.82h7.313v2.188zm3.25 4.887c.727.422 1.633.688 2.508.688 1.438 0 2.227-.68 2.227-1.68 0-.93-.563-1.469-1.992-1.992-1.828-.688-2.672-1.633-2.672-3.008 0-2.148 1.727-3.414 4.195-3.414 1.07 0 2.016.273 2.68.68l-.68 2.047a4.67 4.67 0 0 0-2.094-.523c-1.227 0-1.898.601-1.898 1.43 0 .843.578 1.328 1.945 1.851 1.96.758 2.727 1.672 2.727 3.125 0 2.149-1.688 3.516-4.5 3.516-1.273 0-2.46-.352-3.218-.844l.773-2.188z"
      />
    </svg>
  );
}

function TailwindIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#06B6D4"
      />
    </svg>
  );
}

function FigmaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83" />
      <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF" />
      <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E" />
      <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262" />
      <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE" />
    </svg>
  );
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

const TECH_PARTNERS = [
  { name: 'Next.js 15', tag: 'App Router & Edge SSR', icon: Globe, color: 'text-slate-900', bg: 'bg-slate-100' },
  { name: 'React 19', tag: 'Server Actions & Hydration', icon: ReactIcon, color: '', bg: 'bg-slate-900' },
  { name: 'TypeScript 5.9', tag: 'Type-Safe Builds', icon: TypeScriptIcon, color: '', bg: 'bg-transparent' },
  { name: 'Tailwind CSS v4', tag: 'Zero-Runtime Styles', icon: TailwindIcon, color: '', bg: 'bg-cyan-50' },
  { name: 'Google Ads & Search', tag: 'High-Intent Search Engine', icon: GoogleIcon, color: '', bg: 'bg-slate-50' },
  { name: 'Meta Pixel & CAPI', tag: 'Conversion Attribution', icon: Flame, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'Stripe Billing', tag: 'Global Payment Rails', icon: CreditCard, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'PostgreSQL & Supabase', tag: 'Scalable Cloud Database', icon: Database, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'GitHub CI/CD', tag: 'Playwright Automated Gates', icon: GithubIcon, color: '', bg: 'bg-slate-100' },
  { name: 'Google Search Console', tag: 'Semantic Indexation API', icon: GoogleIcon, color: '', bg: 'bg-slate-50' },
  { name: 'Vercel Edge Network', tag: 'Global Sub-100ms TTFB', icon: VercelIcon, color: '', bg: 'bg-slate-100' },
  { name: 'Figma Token Systems', tag: 'Design Architecture', icon: FigmaIcon, color: '', bg: 'bg-slate-50' },
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
