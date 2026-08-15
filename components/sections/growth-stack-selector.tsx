'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  Code2, 
  Rocket 
} from 'lucide-react';

interface GrowthStackSelectorProps {
  onOpenProjectModal: (service?: string) => void;
}

type StackMode = 'build' | 'bundle' | 'grow';

interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  priceDesc: string;
  priceNote: string;
  description?: string;
  popular?: boolean;
  slaDays: number;
  deliverables: string[];
  ctaLabel: string;
  accent: 'blue' | 'emerald';
}

const PLANS_DATA: Record<StackMode, PlanItem[]> = {
  build: [
    {
      id: 'build-website',
      name: 'Enterprise Website & Modernization',
      badge: 'Dedicated Sprint',
      priceDesc: 'Milestone Scope Pricing',
      priceNote: 'Transparent milestone delivery',
      description: 'Ideal for established businesses seeking to replace low-performing or outdated websites with a high-speed digital flagship.',
      slaDays: 30,
      accent: 'blue',
      ctaLabel: 'Discuss Website Build',
      deliverables: [
        'Custom Figma design system & responsive token architecture',
        'Next.js 15 + TypeScript high-speed server-first frontend',
        'Technical SEO architecture + structured JSON-LD schema',
        'Lighthouse 100/100 performance & Core Web Vitals pass',
        '30-Day Zero-Bug monitored stability warranty',
      ],
    },
    {
      id: 'build-saas',
      name: 'SaaS MVP & Custom Web Platform',
      badge: 'Most Comprehensive Architecture',
      priceDesc: 'Sprint-Based Architecture',
      priceNote: 'Fixed deliverables & velocity',
      description: 'Scalable frontend architectures for software products, client portals, interactive dashboards, and subscription MVPs.',
      popular: true,
      slaDays: 60,
      accent: 'blue',
      ctaLabel: 'Discuss SaaS Architecture',
      deliverables: [
        'Full React 19 / Next.js 15 App Router & Server Actions',
        'Type-safe user authentication & interactive dashboard',
        'Accessible component library with dark/light token parity',
        'Edge API routes & zero-trust security hardening',
        '60-Day Zero-Bug monitored stability SLA',
      ],
    },
    {
      id: 'build-ecommerce',
      name: 'High-Converting E-Commerce Flagship',
      badge: 'High Conversion Funnel',
      priceDesc: 'Conversion-Engineered',
      priceNote: 'Multi-device checkout paths',
      description: 'Lightning-fast storefronts with frictionless checkout, dynamic facet filtering, Stripe integration, and instant edge caching.',
      slaDays: 60,
      accent: 'blue',
      ctaLabel: 'Discuss E-Commerce Build',
      deliverables: [
        'Headless or custom storefront architecture',
        'Frictionless mobile-first cart & checkout ergonomics',
        'Dynamic search, filtering & instant edge cache',
        'Conversion rate tracking & event telemetry',
        '60-Day Zero-Bug post-launch support',
      ],
    },
  ],
  bundle: [
    {
      id: 'bundle-starter',
      name: 'Build + Grow Starter',
      badge: 'Dual Engine Starter',
      priceDesc: 'Build + Single Retainer',
      priceNote: 'Build tier + SEO or Social retainer',
      description: 'Commission a custom Zero-Bug website build plus your choice of an ongoing SEO growth retainer or social media management.',
      slaDays: 60,
      accent: 'blue',
      ctaLabel: 'Choose Starter Bundle',
      deliverables: [
        'Full custom high-performance website build',
        '30/60-day monitored stability guarantee',
        'Monthly SEO keyword expansion OR social content engine',
        'Monthly performance & analytics review call',
        'Dedicated technical & growth communication channel',
      ],
    },
    {
      id: 'bundle-fullstack',
      name: '90-Day Launch & Growth Sprint',
      badge: 'RECOMMENDED · HIGHEST VALUE',
      priceDesc: 'Full Stack Growth System',
      priceNote: 'Website + SEO + Social + Ads + Design',
      popular: true,
      slaDays: 90,
      accent: 'emerald',
      ctaLabel: 'Apply for 90-Day Sprint',
      description: 'Our flagship transformation: Days 1–30 Build, Days 31–60 Traffic Launch, Days 61–90 ROAS & SEO optimization using live conversion data.',
      deliverables: [
        'Complete Zero-Bug website / SaaS MVP build',
        'Comprehensive SEO architecture & backlink sprints',
        'Full-funnel Meta & Google Ads setup (5.12x target ROAS)',
        'Multi-platform social media calendar & content design',
        '90-Day monitored SLA window & monthly executive dashboard',
      ],
    },
    {
      id: 'bundle-enterprise',
      name: 'Enterprise Scale Partner',
      badge: 'Dedicated Bandwidth',
      priceDesc: 'Full Dedicated Team',
      priceNote: 'Continuous engineering + multi-channel growth',
      description: 'Continuous web application feature development sprints, dedicated multi-channel marketing, and custom SLA response.',
      slaDays: 90,
      accent: 'blue',
      ctaLabel: 'Discuss Enterprise Scope',
      deliverables: [
        'Continuous web app feature development sprints',
        'Aggressive high-intent SEO & content production',
        'Omni-channel paid media buying & creative iterations',
        'Weekly CRO experiments & heatmap optimization',
        '90-Day monitored SLA + priority emergency response',
      ],
    },
  ],
  grow: [
    {
      id: 'grow-seo',
      name: 'Programmatic SEO Growth Retainer',
      badge: 'Organic Authority',
      priceDesc: 'Monthly Retainer',
      priceNote: 'No long lock-ins · Transparent reporting',
      description: 'For companies with an existing website that need continuous search rankings, technical audits, and compounding traffic.',
      slaDays: 30,
      accent: 'emerald',
      ctaLabel: 'Activate SEO Retainer',
      deliverables: [
        'Technical crawl audits & Core Web Vitals fixes',
        'High-intent commercial keyword mapping & targeting',
        'Programmatic content calendar & copywriting',
        'High-authority backlink acquisition outreach',
        'Monthly SERP rank progression & analytics report',
      ],
    },
    {
      id: 'grow-social',
      name: 'Multi-Channel Social Management',
      badge: 'Brand Authority',
      priceDesc: 'Monthly Retainer',
      priceNote: 'LinkedIn, X & Instagram',
      description: 'Platform-native content calendars, high-engagement B2B copy, visual creative design, and multi-channel audience building.',
      popular: true,
      slaDays: 30,
      accent: 'emerald',
      ctaLabel: 'Activate Social Management',
      deliverables: [
        'Platform-native content calendars & design templates',
        'High-engagement B2B copy & visual creative assets',
        'Community engagement & comment management',
        'Brand voice consistency aligned with your site',
        'Monthly reach, engagement & lead attribution reports',
      ],
    },
    {
      id: 'grow-ads',
      name: 'Paid Ads Performance Sprints',
      badge: 'High ROAS Multiplier',
      priceDesc: 'Monthly Management',
      priceNote: 'Meta + Google Ads campaign management',
      description: 'Full-funnel paid advertising on Meta and Google Ads with relentless CRO, ad creative design, and transparent ROAS attribution.',
      slaDays: 30,
      accent: 'emerald',
      ctaLabel: 'Activate Paid Ads Retainer',
      deliverables: [
        'Campaign structure & conversion pixel alignment',
        'High-converting ad creative copy & graphic design',
        'Target audience testing & bid budget optimization',
        'Landing page alignment & CRO recommendations',
        'Real-time ROAS tracking & attribution dashboard',
      ],
    },
  ],
};

export function GrowthStackSelector({ onOpenProjectModal }: GrowthStackSelectorProps) {
  const [selectedMode, setSelectedMode] = React.useState<StackMode>('bundle');

  const activePlans = PLANS_DATA[selectedMode];

  return (
    <section id="pricing" className="py-20 sm:py-28 relative bg-gradient-to-b from-slate-50/80 via-blue-50/30 to-emerald-50/20 border-t border-slate-200 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-100/50 via-indigo-100/30 to-emerald-100/50 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING & PACKAGES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Select Your Investment Plan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Choose the model that fits your business goals — whether you need a high-converting website build, monthly marketing & lead growth, or our turnkey 90-Day Launch & Growth Sprint.
          </p>
        </div>

        {/* 3-Way Segmented Control */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl neo-inset">
            <button
              onClick={() => setSelectedMode('build')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                selectedMode === 'build'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Just Build (3 Tiers)</span>
            </button>

            <button
              onClick={() => setSelectedMode('bundle')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 relative ${
                selectedMode === 'bundle'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Rocket className="w-4 h-4" />
              <span>Build + Grow (Sprint)</span>
              <span className="hidden sm:inline-block text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 font-bold ml-1">
                POPULAR
              </span>
            </button>

            <button
              onClick={() => setSelectedMode('grow')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                selectedMode === 'grow'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Grow Only (Retainers)</span>
            </button>
          </div>
        </div>

        {/* Morphing Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activePlans.map(plan => {
            const isHighlighted = plan.popular;
            return (
              <motion.div
                key={plan.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all ${
                  isHighlighted
                    ? plan.accent === 'emerald'
                      ? 'glass-card border-2 border-emerald-500 shadow-xl lg:-translate-y-2'
                      : 'glass-card border-2 border-blue-600 shadow-xl lg:-translate-y-2'
                    : 'neo-card hover:border-slate-300'
                }`}
              >
                {/* Popular Pill Badge */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-md">
                    {plan.badge || 'Highest Value Offer'}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      {plan.badge && !isHighlighted ? plan.badge : 'SLA Protected'}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {plan.slaDays}-Day Monitored SLA
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>

                  <div className="mb-4">
                    <div className="text-lg font-bold font-mono text-slate-900">
                      {plan.priceDesc}
                    </div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">
                      {plan.priceNote}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                      Scope Deliverables Included:
                    </span>
                    {plan.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenProjectModal(plan.id)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    isHighlighted
                      ? plan.accent === 'emerald'
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
