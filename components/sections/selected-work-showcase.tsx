'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  ShoppingBag,
  Cpu,
  BarChart3,
  Search,
  Sliders,
  Maximize2,
  ChevronRight,
  Layers,
  Code2,
  Compass
} from 'lucide-react';

export interface ProjectData {
  id: string;
  slug: string;
  name: string;
  url: string;
  displayUrl: string;
  category: string;
  categoryBadge: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string[];
  focusAreas: string[];
  conversionOutcome: string;
  deliverables: string[];
  techStack: string[];
  metrics: { label: string; value: string; note: string }[];
  visualTheme: {
    gradient: string;
    badgeBg: string;
    badgeText?: string;
    borderGlow: string;
    accentColor: string;
  };
  keyFeatures: { title: string; desc: string }[];
  disclaimer?: string;
}

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: 'persuekey',
    slug: 'persuekey',
    name: 'PersueKey',
    url: 'https://www.persuekey.com/',
    displayUrl: 'www.persuekey.com',
    category: 'Commerce Discovery',
    categoryBadge: 'COMMERCE DISCOVERY PLATFORM',
    tagline: 'Make Every Shopping Search More Valuable.',
    shortDesc:
      'A shopping-discovery experience designed to help users move from browsing to better offers. PersueKey brings categories, stores, coupons, deals, and product discovery into one structured destination.',
    fullDesc: [
      'Shopping content is easy to scatter across categories, retailers, product pages, and promotional offers. PersueKey was shaped around a simpler idea: bring the discovery journey together so users can browse by interest, explore stores, find coupons, and compare product opportunities without losing context.',
      'The experience combines category navigation, trending stores, featured coupons, and product-led discovery into one commerce interface. Instead of making visitors hunt through disconnected pages, the platform gives each visitor several natural next steps—explore a category, open a store, inspect an offer, or move toward a product decision.',
    ],
    focusAreas: [
      'Searchable commerce architecture & verified store index',
      'Category-led discovery & structured deal visibility',
      'Store pages, discount coupons, & product-focused browsing',
      'High-speed filtering across retailers & promotional offers',
    ],
    conversionOutcome:
      'The result is a clearer path from “What should I buy?” to “Where can I get the better offer?”—with every section designed to keep shoppers moving toward a useful deal.',
    deliverables: [
      'Full-Stack Next.js 15 Web Application',
      'Programmatic Category & Store Directory Engine',
      'Multi-Retailer Coupon Presentation UI',
      'Automated SEO Schema (Product, Offer & Store JSON-LD)',
    ],
    techStack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Edge Caching', 'Schema.org JSON-LD'],
    metrics: [
      { label: 'Discovery Flow', value: 'Unified', note: 'Deals + Stores + Categories in 1 Hub' },
      { label: 'Page Speed Index', value: 'Sub-second', note: 'Edge-cached catalog queries' },
      { label: 'Search Architecture', value: '100% Native', note: 'Programmatic SEO routes' },
    ],
    visualTheme: {
      gradient: 'from-amber-500/15 via-rose-500/10 to-orange-500/15',
      badgeBg: 'bg-amber-50 border-amber-200 text-amber-800',
      borderGlow: 'hover:border-amber-400/60 hover:shadow-amber-500/10',
      accentColor: 'text-amber-600',
    },
    keyFeatures: [
      { title: 'Store & Brand Hub', desc: 'Direct discovery pages for leading online stores with verified offers.' },
      { title: 'Deal Aggregation', desc: 'Live discounts, promo codes, and limited-time price drops.' },
      { title: 'Category Matrix', desc: 'Seamless navigation through fashion, tech, home, and travel deals.' },
    ],
  },
  {
    id: 'gocoupon',
    slug: 'gocoupon',
    name: 'GoCoupon',
    url: 'https://www.gocoupon.io/',
    displayUrl: 'www.gocoupon.io',
    category: 'Browser Product & Savings',
    categoryBadge: 'BROWSER EXTENSION · E-COMMERCE SAVINGS',
    tagline: 'Turn Coupon Hunting Into One Click.',
    shortDesc:
      'A Chrome extension that automatically finds and applies the highest-saving coupon code at checkout across supported Indian e-commerce stores.',
    fullDesc: [
      'Coupon products succeed when the value is understood before the user reaches checkout. GoCoupon makes that value immediate: add the extension, continue shopping, and let the product test and apply eligible codes automatically.',
      'The experience is built around a short activation journey, clear store support, savings-led interface states, product benefits, privacy reassurance, social proof, pricing, FAQs, and content that helps users understand the product before installing it. It is a strong example of how product UX and conversion copy can work together: remove uncertainty, show the moment of value, and make the next action obvious.',
    ],
    focusAreas: [
      'One-click activation & checkout-time automated testing',
      'Supported-store discovery (Flipkart, Amazon, Myntra, Meesho, Ajio, Nykaa, etc.)',
      'Savings visibility, trust messaging, & privacy positioning',
      'Cashback communication & a clear free-to-Pro product path',
    ],
    conversionOutcome:
      'The product turns a frustrating trial-and-error task into a simple promise: install once, shop normally, and let the system search for the better code when it matters.',
    deliverables: [
      'Web Flagship & Onboarding Landing System',
      'Chrome Extension Manifest V3 Integration UI',
      'Automated Checkout Coupon Testing UX',
      'Store Discovery & Savings Calculator Module',
    ],
    techStack: ['Manifest V3', 'React Web UI', 'Low-Latency API', 'Tailwind CSS', 'Privacy-First Architecture'],
    metrics: [
      { label: 'Activation Step', value: '1-Click', note: 'Zero-friction browser onboarding' },
      { label: 'Stores Covered', value: 'Top Retailers', note: 'Amazon, Flipkart, Myntra, Ajio+' },
      { label: 'User Experience', value: 'Automated', note: 'Auto-applies best code at cart' },
    ],
    visualTheme: {
      gradient: 'from-emerald-500/15 via-teal-500/10 to-blue-500/15',
      badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      borderGlow: 'hover:border-emerald-400/60 hover:shadow-emerald-500/10',
      accentColor: 'text-emerald-600',
    },
    keyFeatures: [
      { title: 'Auto-Apply at Checkout', desc: 'Tests every working promo code in seconds to maximize basket savings.' },
      { title: 'Cashback & Price Drops', desc: 'Real-time price alerts and cashback communication.' },
      { title: 'Privacy-First Design', desc: 'Transparent permissions and secure, isolated token handling.' },
    ],
  },
  {
    id: 'matchingprop',
    slug: 'matchingprop',
    name: 'MatchingProp',
    url: 'https://www.matchingprop.com/',
    displayUrl: 'www.matchingprop.com',
    category: 'Comparison & FinTech',
    categoryBadge: 'COMPARISON PLATFORM · TRADER RESEARCH',
    tagline: 'Make Complex Prop-Firm Decisions Easier.',
    shortDesc:
      'A structured comparison platform for traders evaluating prop firms, rules, reviews, payout information, platforms, assets, allocations, and active discount offers.',
    fullDesc: [
      'Prop-firm research can become overwhelming quickly. Traders need to compare more than a headline rating: they may need to understand drawdown rules, payout information, asset coverage, platforms, account sizes, reviews, and promotional terms.',
      'MatchingProp organizes these decision points into a comparison-led experience. Rankings, filters, firm cards, coupon areas, hubs, calculators, resources, and transparency content create multiple entry points for different research needs while keeping the core action clear: find the firm that matches the trader’s edge.',
      'Because the category involves simulated trading evaluations and commercial partnerships, the platform maintains clear risk disclosure and affiliate disclosure transparency throughout the user flow.',
    ],
    focusAreas: [
      'Comparison matrices, multi-parameter filters, & firm rankings',
      'Evaluation calculators, payout rules, & allocation metrics',
      'Deal discovery, trader resources, & methodology signals',
      'Transparency content, risk disclosures, & repeat-visit journeys',
    ],
    conversionOutcome:
      'The platform transforms a difficult research task into a guided decision path: compare the rules, understand the trade-offs, find an active offer, and choose with more confidence.',
    deliverables: [
      'Interactive Firm Comparison Matrix & Filter UI',
      'Trader Profit & Drawdown Calculator Engines',
      'Promotional Coupon & Discount Hub',
      'Compliance-Ready Disclosure & Rating Framework',
    ],
    techStack: ['Next.js 15', 'Dynamic Matrix Index', 'Interactive Calculators', 'TypeScript', 'SEO Hubs'],
    metrics: [
      { label: 'Decision Speed', value: 'Matrix Guided', note: 'Multi-firm side-by-side rules' },
      { label: 'Evaluation Tools', value: 'Interactive', note: 'Profit split & drawdown calculator' },
      { label: 'Trust & Transparency', value: 'Disclosed', note: 'Methodology & verified parameters' },
    ],
    visualTheme: {
      gradient: 'from-blue-500/15 via-indigo-500/10 to-purple-500/15',
      badgeBg: 'bg-blue-50 border-blue-200 text-blue-800',
      borderGlow: 'hover:border-blue-400/60 hover:shadow-blue-500/10',
      accentColor: 'text-blue-600',
    },
    keyFeatures: [
      { title: 'Interactive Comparison Matrix', desc: 'Filter by max drawdown, profit targets, platforms, and scaling plans.' },
      { title: 'Exclusive Trader Discounts', desc: 'Live verified coupon codes for challenge fee discounts.' },
      { title: 'Calculators & Knowledge Hub', desc: 'Custom tools to simulate risk parameters and target payouts.' },
    ],
    disclaimer: 'Informational comparison tool for simulated trading evaluations. Includes clear risk disclosures.',
  },
];

interface SelectedWorkShowcaseProps {
  onOpenProjectModal: (service?: string) => void;
  isStandalonePage?: boolean;
}

export function SelectedWorkShowcase({
  onOpenProjectModal,
  isStandalonePage = false,
}: SelectedWorkShowcaseProps) {
  const [activeFilter, setActiveFilter] = React.useState<string>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<ProjectData | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Projects (3)' },
    { id: 'Commerce Discovery', label: 'Commerce Discovery' },
    { id: 'Browser Product & Savings', label: 'Browser & Savings' },
    { id: 'Comparison & FinTech', label: 'Comparison & FinTech' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-20 sm:py-28 relative bg-slate-50/70 border-t border-slate-200 overflow-hidden">
      {/* Background Decorative Auras */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>SELECTED DIGITAL PRODUCTS & CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Real Products. Clear Outcomes.{' '}
            <span className="text-blue-600 underline decoration-blue-400/40 decoration-wavy decoration-2">
              Built for Growth.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore three digital systems we designed and engineered across commerce discovery, automated savings, and high-trust comparison.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {filterCategories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold active:scale-[0.97] transition-all duration-150 cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 3 Flagship Project Cards Grid */}
        <div className="space-y-8 sm:space-y-12">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
              className={`rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 hover:shadow-2xl transition-colors transition-shadow duration-200 overflow-hidden group ${project.visualTheme.borderGlow}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
                
                {/* Left Col: Core Narrative & Actions (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Top Category Badge & Live Link Pill */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold border ${project.visualTheme.badgeBg}`}>
                        <Layers className="w-3 h-3" />
                        {project.categoryBadge}
                      </span>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-500 hover:text-blue-600 transition-colors group/link"
                      >
                        <span>{project.displayUrl}</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                      {project.tagline}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.shortDesc}
                    </p>

                    {/* Key Focus Highlights */}
                    <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-2.5">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Engineering & Design Focus
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {project.focusAreas.slice(0, 4).map((area, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcome statement */}
                    <div className="text-xs text-slate-700 font-medium italic border-l-2 border-blue-500 pl-3 py-1">
                      {project.conversionOutcome}
                    </div>
                  </div>

                  {/* Buttons Pair: Visit Live Site + Discuss Similar Project */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                    >
                      <span>Visit {project.name}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => onOpenProjectModal(`Similar to ${project.name} (${project.category})`)}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                      <span>Discuss a Similar Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedCaseStudy(project)}
                      className="w-full sm:w-auto px-4 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Compass className="w-3.5 h-3.5 text-slate-500" />
                      <span>Deep Dive</span>
                    </button>
                  </div>
                </div>

                {/* Right Col: Interactive Visual Dashboard / Telemetry Card (5 cols) */}
                <div className={`lg:col-span-5 rounded-2xl bg-gradient-to-br ${project.visualTheme.gradient} border border-slate-200 p-6 flex flex-col justify-between space-y-6`}>
                  {/* Browser-like Mockup Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-300/60">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 bg-white/80 px-2.5 py-0.5 rounded-md border border-slate-200">
                        {project.displayUrl}
                      </span>
                    </div>

                    {/* Metrics Grid */}
                    <div className="space-y-2.5">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-medium text-slate-500">{m.label}</span>
                            <span className="text-xs font-mono font-bold text-slate-900">{m.value}</span>
                          </div>
                          <p className="text-[10px] text-slate-400 mt-0.5">{m.note}</p>
                        </div>
                      ))}
                    </div>

                    {/* Features Preview List */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                        Core Built Capabilities
                      </div>
                      <div className="space-y-1.5 text-xs">
                        {project.keyFeatures.map((kf, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-white/80 border border-slate-200/70 space-y-0.5">
                            <div className="font-bold text-slate-800 text-[11px] flex items-center gap-1.5">
                              <Zap className="w-3 h-3 text-blue-600 shrink-0" />
                              <span>{kf.title}</span>
                            </div>
                            <p className="text-[10px] text-slate-500 leading-normal">{kf.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-2 border-t border-slate-300/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-white text-slate-700 text-[10px] font-mono font-semibold border border-slate-200 shadow-2xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

        {/* Homepage Bottom CTA to Full Page if not already on /work */}
        {!isStandalonePage && (
          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-xl shadow-slate-900/10 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Explore Complete Case Studies & Architecture Breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>

      {/* Interactive Case Study Deep Dive Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold border ${selectedCaseStudy.visualTheme.badgeBg}`}>
                    {selectedCaseStudy.categoryBadge}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                    {selectedCaseStudy.name} — Architecture & Strategy
                  </h3>
                  <a
                    href={selectedCaseStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-blue-600 hover:underline mt-1"
                  >
                    <span>{selectedCaseStudy.displayUrl}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Case Study Body */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedCaseStudy.fullDesc.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Deliverables Grid */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <span className="text-xs font-bold font-mono uppercase text-slate-800 tracking-wider block">
                  Delivered Architecture & Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {selectedCaseStudy.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-mono font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={selectedCaseStudy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Visit Live {selectedCaseStudy.name} ↗</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    const svc = `Similar to ${selectedCaseStudy.name} (${selectedCaseStudy.category})`;
                    setSelectedCaseStudy(null);
                    onOpenProjectModal(svc);
                  }}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-blue-200" />
                  <span>Build a Similar Product →</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
