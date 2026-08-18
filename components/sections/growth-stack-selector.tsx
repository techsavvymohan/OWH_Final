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
  Rocket,
  DollarSign,
  Info,
  Layers,
  HelpCircle
} from 'lucide-react';

interface GrowthStackSelectorProps {
  onOpenProjectModal: (service?: string) => void;
}

type StackMode = 'build' | 'bundle' | 'grow';
type CurrencyMode = 'usd' | 'inr';

interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  whoItsFor: string;
  timeline: string;
  priceUSD: string;
  priceINR: string;
  priceBilling: string;
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
      name: 'Custom Business Website',
      badge: 'Dedicated Sprint',
      whoItsFor: 'Established businesses replacing slow agency templates with a high-converting presence.',
      timeline: '3–4 Weeks to Launch',
      priceUSD: 'From $2,450',
      priceINR: 'From ₹1,85,000',
      priceBilling: 'Fixed Milestone Delivery',
      priceNote: 'Zero hidden fees · Full code handover',
      description: 'You get a bespoke, ultra-fast website that loads in under 1 second, looks stunning on every phone and laptop, and ranks on Google — with 30 days of free fixes included.',
      slaDays: 30,
      accent: 'blue',
      ctaLabel: 'Discuss Website Build',
      deliverables: [
        'Custom Figma design tailored to your brand — no generic templates',
        'Next.js 15 server-first stack for sub-second page loads',
        'Full Google SEO & schema setup so customers find you easily',
        'Target 100/100 Google speed score on mobile & laptop',
        '30-Day free fix guarantee & 24/7 uptime monitoring',
      ],
    },
    {
      id: 'build-saas',
      name: 'Custom Software & Client Portal',
      badge: 'Most Comprehensive',
      whoItsFor: 'Founders and businesses requiring custom client portals, calculators, or workflows.',
      timeline: '4–6 Weeks to Launch',
      priceUSD: 'From $4,900',
      priceINR: 'From ₹3,75,000',
      priceBilling: 'Sprint-Based Architecture',
      priceNote: 'Fixed scope · Full IP & code handover',
      description: 'You get a full-scale web application or customer portal with secure user logins, easy-to-use dashboards, and hardened security — built to grow smoothly with your business.',
      popular: true,
      slaDays: 60,
      accent: 'blue',
      ctaLabel: 'Discuss Custom Portal Build',
      deliverables: [
        'Custom web application built for your business operations',
        'Secure customer login and private member portal',
        'Easy-to-use controls that look great in light and dark mode',
        'Hardened SSL encryption and automated daily backups',
        '60-Day free fix guarantee & dedicated technical support',
      ],
    },
    {
      id: 'build-ecommerce',
      name: 'High-Converting Online Store',
      badge: 'High Conversion',
      whoItsFor: 'D2C and B2B brands wanting fast, frictionless checkout on mobile and desktop.',
      timeline: '3–5 Weeks to Launch',
      priceUSD: 'From $3,800',
      priceINR: 'From ₹2,90,000',
      priceBilling: 'Turnkey E-Commerce Store',
      priceNote: '1-click checkout · Fast on mobile',
      description: 'You get a lightning-fast online store with 1-click checkout, zero cart lag, and product pages designed to turn visitors into buyers.',
      slaDays: 60,
      accent: 'blue',
      ctaLabel: 'Discuss E-Commerce Build',
      deliverables: [
        'Modern online store with seamless payment gateway integration',
        'Quick 1-click checkout designed specifically for mobile shoppers',
        'Fast search, product filters, and instant page opening',
        'Lead & sales tracking to see exactly where orders come from',
        '60-Day free fix warranty after store launch',
      ],
    },
  ],
  bundle: [
    {
      id: 'bundle-starter',
      name: 'Website + Growth Starter',
      badge: 'Website + Marketing',
      whoItsFor: 'Companies launching a new site who want immediate SEO traffic and inbound leads.',
      timeline: '60-Day Sprint (Launch Wk 4)',
      priceUSD: 'From $1,450',
      priceINR: 'From ₹1,10,000',
      priceBilling: '/ month (60-Day Sprint)',
      priceNote: 'New site + SEO or Social growth',
      description: 'You get a custom high-speed website build plus ongoing monthly Google SEO or social media marketing to start driving customer inquiries right away.',
      slaDays: 60,
      accent: 'blue',
      ctaLabel: 'Choose Starter Bundle',
      deliverables: [
        'Full custom high-speed website build',
        '60-Day free fix and stability guarantee',
        'Monthly Google ranking boost OR social media management',
        'Monthly progress report call with our team',
        'Direct WhatsApp & email communication channel',
      ],
    },
    {
      id: 'bundle-fullstack',
      name: '90-Day Complete Launch & Growth',
      badge: 'RECOMMENDED · HIGHEST VALUE',
      whoItsFor: 'Ambitious businesses looking for a complete engineering + search + ads acquisition engine.',
      timeline: '90-Day All-in-One Sprint',
      priceUSD: 'From $2,850',
      priceINR: 'From ₹2,15,000',
      priceBilling: '/ month (90-Day Sprint)',
      priceNote: 'Full-stack: Website + SEO + Social + Ads',
      popular: true,
      slaDays: 90,
      accent: 'emerald',
      ctaLabel: 'Apply for 90-Day Sprint',
      description: 'Our most popular package: custom website build (Days 1–30), Google ranking & social media active (Days 31–60), and ad campaigns optimized to bring paying customers (Days 61–90).',
      deliverables: [
        'Complete custom website build with zero errors',
        'Comprehensive Google SEO setup to rank on Page 1',
        'Google & Facebook ad campaigns aimed at high returns',
        'Social media graphics and weekly posts for your brand',
        '90-Day free fix warranty & monthly progress dashboard',
      ],
    },
    {
      id: 'bundle-enterprise',
      name: 'Full Dedicated Team Partner',
      badge: 'Dedicated Team',
      whoItsFor: 'Growing companies needing an embedded engineering and growth marketing squad.',
      timeline: 'Ongoing Dedicated Squad',
      priceUSD: 'From $5,500',
      priceINR: 'From ₹4,20,000',
      priceBilling: '/ month (Dedicated Squad)',
      priceNote: 'Continuous updates + multi-channel growth',
      description: 'You get our team acting as your full-time tech and marketing department — handling continuous website upgrades, advertising, and priority 24/7 support.',
      slaDays: 90,
      accent: 'blue',
      ctaLabel: 'Discuss Dedicated Scope',
      deliverables: [
        'Continuous website feature updates and design improvements',
        'Aggressive Google search ranking and content publishing',
        'Full management of Google, Facebook, and Instagram ads',
        'Ongoing improvements based on how real visitors use your site',
        '90-Day warranty + priority emergency support',
      ],
    },
  ],
  grow: [
    {
      id: 'grow-seo',
      name: 'Monthly Google SEO Growth',
      badge: 'Google Rank Authority',
      whoItsFor: 'Existing sites wanting to capture high-intent commercial search traffic on Google.',
      timeline: 'Monthly Ongoing Retainer',
      priceUSD: 'From $1,250',
      priceINR: 'From ₹95,000',
      priceBilling: '/ month (Monthly Retainer)',
      priceNote: 'No long lock-ins · Transparent reporting',
      description: 'For businesses with an existing website: we handle monthly keyword strategy, speed fixes, and content creation to steadily climb to Page 1 on Google.',
      slaDays: 30,
      accent: 'emerald',
      ctaLabel: 'Activate SEO Retainer',
      deliverables: [
        'Fixing website speed and technical Google issues',
        'Targeting what your local customers search for',
        'Writing helpful articles and pages that rank on Google',
        'Getting trusted websites to mention and link to you',
        'Clear monthly report showing your rank improvements',
      ],
    },
    {
      id: 'grow-social',
      name: 'Social Media Management',
      badge: 'Brand Reputation',
      whoItsFor: 'B2B and lifestyle brands seeking consistent thought-leadership and social authority.',
      timeline: 'Monthly Ongoing Retainer',
      priceUSD: 'From $950',
      priceINR: 'From ₹75,000',
      priceBilling: '/ month (Monthly Retainer)',
      priceNote: 'LinkedIn, X & Instagram',
      description: 'For businesses with an existing website: we write professional posts and design eye-catching graphics for LinkedIn, X (Twitter), and Instagram to build your brand.',
      popular: true,
      slaDays: 30,
      accent: 'emerald',
      ctaLabel: 'Activate Social Management',
      deliverables: [
        'Monthly calendar of posts and professionally designed graphics',
        'Engaging posts written specifically for your target audience',
        'Replying to comments and growing your follower community',
        'Consistent brand colors, logos, and voice across all platforms',
        'Monthly report showing reach, follower growth, and new leads',
      ],
    },
    {
      id: 'grow-ads',
      name: 'Google & Facebook Ads Management',
      badge: 'Profitable Returns',
      whoItsFor: 'Businesses ready to scale paid customer acquisition profitably on Google and Meta.',
      timeline: 'Monthly Ongoing Retainer',
      priceUSD: 'From $1,650',
      priceINR: 'From ₹1,25,000',
      priceBilling: '/ month + Media Spend',
      priceNote: 'Targeting 3x–5x ROAS returns',
      description: 'For businesses with an existing website: we set up and manage Google and Facebook ad campaigns with lead tracking so every dollar spent brings real customer calls and orders.',
      slaDays: 30,
      accent: 'emerald',
      ctaLabel: 'Activate Ads Retainer',
      deliverables: [
        'High-converting ad copy and professionally tested graphics',
        'Landing page tweaks to get more leads from the same ad budget',
        'Full setup of Google & Meta tracking pixels and phone call tracking',
        'Weekly optimizations to reduce cost per lead and cut wasted spend',
        'Clear monthly report showing cost per lead and total return',
      ],
    },
  ],
};

export function GrowthStackSelector({ onOpenProjectModal }: GrowthStackSelectorProps) {
  const [selectedMode, setSelectedMode] = React.useState<StackMode>('bundle');
  const [currency, setCurrency] = React.useState<CurrencyMode>('usd');

  const activePlans = PLANS_DATA[selectedMode];

  return (
    <section id="pricing" className="py-20 sm:py-28 relative bg-gradient-to-b from-slate-50/80 via-blue-50/30 to-emerald-50/20 border-t border-slate-200 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-100/50 via-indigo-100/30 to-emerald-100/50 blur-[130px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING & PACKAGES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Clear Investment Models & Scopes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            No surprise add-ons, no hidden hosting lock-ins. Every engagement includes dedicated engineering, SLA peace-of-mind, and measurable business deliverables.
          </p>

          {/* Currency Toggle */}
          <div className="mt-6 inline-flex items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <button
              type="button"
              onClick={() => setCurrency('usd')}
              className={`px-3 py-1 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                currency === 'usd' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              $ USD
            </button>
            <button
              type="button"
              onClick={() => setCurrency('inr')}
              className={`px-3 py-1 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                currency === 'inr' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ₹ INR
            </button>
          </div>
        </div>

        {/* 3-Way Segmented Control */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={selectedMode === 'build'}
              onClick={() => setSelectedMode('build')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                selectedMode === 'build'
                  ? 'bg-blue-600 text-white shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Just Build (3 Tiers)</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={selectedMode === 'bundle'}
              onClick={() => setSelectedMode('bundle')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 relative ${
                selectedMode === 'bundle'
                  ? 'bg-blue-600 text-white shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Rocket className="w-4 h-4" />
              <span>Build + Grow (Sprint)</span>
              <span className="hidden sm:inline-block text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 font-bold ml-1">
                POPULAR
              </span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={selectedMode === 'grow'}
              onClick={() => setSelectedMode('grow')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                selectedMode === 'grow'
                  ? 'bg-blue-600 text-white shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Grow Only (Retainers)</span>
            </button>
          </div>
        </div>

        {/* Morphing Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activePlans.map((plan, idx) => {
            const isHighlighted = plan.popular;
            const price = currency === 'usd' ? plan.priceUSD : plan.priceINR;

            return (
              <motion.div
                key={plan.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all ${
                  isHighlighted
                    ? plan.accent === 'emerald'
                      ? 'glass-card border-2 border-emerald-500 shadow-xl lg:-translate-y-2'
                      : 'glass-card border-2 border-blue-600 shadow-xl lg:-translate-y-2'
                    : 'neo-card hover:border-slate-300 shadow-sm hover:shadow-md'
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

                  {/* Price Block */}
                  <div className="mb-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
                        {price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {plan.priceBilling}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-1">
                      {plan.priceNote}
                    </div>
                  </div>

                  {/* Who It's For & Timeline Pill Box */}
                  <div className="mb-4 p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mt-0.5">Best For:</span>
                      <span className="text-slate-800 font-medium text-[11px] leading-tight">{plan.whoItsFor}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1.5 border-t border-slate-100">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">Timeline:</span>
                      <span className="text-blue-700 font-bold font-mono text-[11px]">{plan.timeline}</span>
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
                    {plan.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
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

        {/* Pricing Transparency & Methodology Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-4xl mx-auto flex flex-col sm:flex-row items-start gap-4">
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs text-slate-600">
            <h4 className="font-bold text-slate-900 text-sm">
              How We Calculate Transparent Custom Scope
            </h4>
            <p className="leading-relaxed">
              The starting ranges above reflect standard engineering and marketing scopes. Exact investment amounts are determined by: (1) total custom page templates, (2) third-party API and database integrations, (3) multilingual and regional SEO clusters, and (4) ad spend scale. You will receive an exact line-item proposal on our 15-minute introductory call before any commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
