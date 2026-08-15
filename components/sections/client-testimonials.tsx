'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Quote,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Award
} from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  avatarUrl: string;
  companyLogoText: string;
  category: 'sprint' | 'saas' | 'seo_growth' | 'ecommerce';
  categoryLabel: string;
  metricBadge: string;
  metricSub: string;
  quote: string;
  highlight: string;
  verifiedSla: string;
  fullCaseStudy?: {
    challenge: string;
    solution: string;
    deliveredIn: string;
    keyStats: { label: string; value: string }[];
  };
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Elena Rostova',
    role: 'Co-Founder & CEO',
    company: 'NovaPulse Health',
    industry: 'HealthTech / Telehealth',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80',
    companyLogoText: 'NOVAPULSE',
    category: 'sprint',
    categoryLabel: '90-Day Build Sprint',
    metricBadge: 'Zero Bugs in 90 Days',
    metricSub: '100% SLA Uptime Post-Launch',
    highlight: 'Cut our time-to-market in half with zero QA regressions on launch day.',
    quote: 'Most agencies hand off a bug-ridden prototype and disappear into the night. OnlyWayOnline delivered a HIPAA-ready patient booking portal in exactly 58 days. The zero-bug handover protocol was genuine — our engineering audit found zero critical issues across 100,000 live patient sessions.',
    verifiedSla: '58-Day Delivery · Zero Defects',
    fullCaseStudy: {
      challenge: 'Legacy booking portal was losing 42% of mobile traffic due to 4.2s load times and broken React re-renders.',
      solution: 'Re-architected from scratch on Next.js 15 App Router with server actions, automated visual regression tests, and zero-defect SLA.',
      deliveredIn: '58 Days (2 days ahead of schedule)',
      keyStats: [
        { label: 'Booking Conversion', value: '+74%' },
        { label: 'Core Web Vitals', value: '100 / 100' },
        { label: 'Mobile Drop-off', value: '-82%' }
      ]
    }
  },
  {
    id: 'test-2',
    name: 'Marcus Thorne',
    role: 'Chief Marketing Officer',
    company: 'Apex Financial Intelligence',
    industry: 'FinTech B2B',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80',
    companyLogoText: 'APEX FIN',
    category: 'seo_growth',
    categoryLabel: 'SEO & Performance Marketing',
    metricBadge: '+340% Pipeline Influx',
    metricSub: '5.12x Blended ROAS on Paid Media',
    highlight: 'Dominated the top 3 commercial search positions for FinTech compliance queries.',
    quote: 'We partnered with OnlyWayOnline for their full-funnel growth retainer. Within 90 days, organic traffic jumped 340%, and our cost-per-qualified-lead plummeted by 61%. Their engineers write copy and build landing pages faster than any dedicated marketing team we’ve hired.',
    verifiedSla: '3-Month Sprint · $2.4M Pipeline Generated',
    fullCaseStudy: {
      challenge: 'Stagnant organic rankings, high CAC on Google Search Ads ($420/lead), and slow unoptimized WordPress marketing pages.',
      solution: 'Deployed programmatic Next.js SEO clusters with structured dynamic metadata, sub-second TTFB edge caching, and rebuilt Google Ads funnels.',
      deliveredIn: 'Ongoing Growth Retainer (Month 5)',
      keyStats: [
        { label: 'Organic Inbound Leads', value: '+340%' },
        { label: 'Cost Per Lead (CAC)', value: '-61%' },
        { label: 'First Page Rankings', value: '48 Keywords' }
      ]
    }
  },
  {
    id: 'test-3',
    name: 'Darius Vance',
    role: 'VP of Product Engineering',
    company: 'Kinetix Robotics',
    industry: 'Industrial AI & Robotics',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&auto=format&fit=crop&q=80',
    companyLogoText: 'KINETIX',
    category: 'saas',
    categoryLabel: 'SaaS Platform Architecture',
    metricBadge: '0.18s TTFB Global',
    metricSub: 'High-Density Live Telemetry',
    highlight: 'Real-time WebSocket telemetry dashboard handling 50k events/sec flawlessly.',
    quote: 'The frontend architecture they built handles high-frequency telemetry streams without stuttering or memory leaks. Their code is remarkably clean, completely typed, and documented like an elite Tier-1 Silicon Valley engineering department.',
    verifiedSla: 'Enterprise SLA · 99.99% Uptime',
    fullCaseStudy: {
      challenge: 'Complex hardware dashboard was lagging at 12 FPS with canvas memory spikes on heavy IoT robot data loads.',
      solution: 'Engineered WebGL + Web Worker telemetry visualization engine in React with zero UI thread blocking.',
      deliveredIn: '75-Day Dedicated Sprint',
      keyStats: [
        { label: 'Frame Rate Under Load', value: '60 FPS' },
        { label: 'Memory Footprint', value: '-70%' },
        { label: 'Enterprise Sign-ups', value: '18 Deals' }
      ]
    }
  },
  {
    id: 'test-4',
    name: 'Sophia Sterling',
    role: 'Managing Director',
    company: 'Vanguard Luxury Retail',
    industry: 'Direct-to-Consumer & Retail',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80',
    companyLogoText: 'VANGUARD',
    category: 'ecommerce',
    categoryLabel: 'Conversion-Engineered Commerce',
    metricBadge: '+118% Checkout Rate',
    metricSub: 'Instant Global Edge Checkout',
    highlight: 'Replaced a bloated legacy theme with an ultra-responsive headless storefront.',
    quote: 'Our mobile bounce rate dropped from 48% to 14% on the day of launch. OnlyWayOnline redesigned the entire customer checkout journey and delivered custom interactive previews that increased our average order value by $64.',
    verifiedSla: '45-Day Overhaul · 100/100 Core Web Vitals',
    fullCaseStudy: {
      challenge: 'High cart abandonment rate on mobile devices and 5-second product page load times during flash sales.',
      solution: 'Built Next.js headless storefront with instant prefetching, optimistic cart transitions, and customized checkout flow.',
      deliveredIn: '45 Days',
      keyStats: [
        { label: 'Checkout Conversion', value: '+118%' },
        { label: 'Average Order Value', value: '+$64' },
        { label: 'Mobile Bounce Rate', value: '14%' }
      ]
    }
  }
];

interface ClientTestimonialsProps {
  onOpenProjectModal?: (service?: string) => void;
}

export function ClientTestimonials({ onOpenProjectModal }: ClientTestimonialsProps) {
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'sprint' | 'saas' | 'seo_growth' | 'ecommerce'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<Testimonial | null>(null);

  const filteredTestimonials = TESTIMONIALS.filter(t => {
    if (activeCategory === 'all') return true;
    return t.category === activeCategory;
  });

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>VERIFIED CLIENT PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Built for Leaders Who Demand{' '}
              <span className="text-blue-600">Measurable Revenue ROI</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Read how high-growth tech founders, CMOs, and enterprise product leaders scale revenue, eliminate software bugs, and guarantee 100/100 Core Web Vitals with OnlyWayOnline.
            </p>
          </div>

          {/* Quick Aggregate Score */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm shrink-0 flex items-center gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-lg font-bold text-slate-900 font-mono leading-none">
                4.98 / 5.0
              </span>
              <span className="text-[11px] text-slate-500 font-sans mt-0.5">
                Across 48+ Verified Sprints
              </span>
            </div>
            <div className="h-10 w-px bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-emerald-700 font-mono">
                100% SLA
              </span>
              <span className="text-[11px] text-slate-500 font-sans">
                Zero-Defect Handover SLA
              </span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 no-scrollbar">
          {(
            [
              { id: 'all', label: 'All Case Studies' },
              { id: 'sprint', label: '90-Day Sprints' },
              { id: 'saas', label: 'SaaS Platforms' },
              { id: 'seo_growth', label: 'SEO & Performance Ads' },
              { id: 'ecommerce', label: 'High-Conversion E-Commerce' },
            ] as const
          ).map(tab => (
            <button
              key={tab.id}
              id={`testimonial-tab-${tab.id}`}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredTestimonials.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              id={`testimonial-card-${item.id}`}
            >
              <TiltCard maxTilt={4} className="relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl neo-card-hover h-full group">
                <div>
                  {/* Top Badge & Logo Bar */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider neo-badge text-blue-700">
                      {item.categoryLabel}
                    </span>

                    <div className="px-2.5 py-1 rounded-md neo-pill text-[11px] font-mono font-bold tracking-widest text-slate-800">
                      {item.companyLogoText}
                    </div>
                  </div>

                  {/* Primary Metric Badge Card */}
                  <div className="mb-5 p-3.5 rounded-2xl neo-inset flex items-center justify-between">
                    <div>
                      <span className="text-base sm:text-lg font-bold font-mono text-slate-900 flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        {item.metricBadge}
                      </span>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {item.metricSub}
                      </p>
                    </div>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Highlight text */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                  &ldquo;{item.highlight}&rdquo;
                </h3>

                {/* Detailed Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative">
                  <Quote className="w-6 h-6 text-blue-100 absolute -top-2.5 -left-1.5 -z-10" />
                  {item.quote}
                </p>
              </div>

              {/* Bottom Author Row & Case Study Trigger */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src={item.avatarUrl}
                      alt={item.name}
                      width={44}
                      height={44}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center ring-2 ring-white">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      {item.role} · <strong className="text-slate-800 font-semibold">{item.company}</strong>
                    </p>
                  </div>
                </div>

                {item.fullCaseStudy && (
                  <button
                    type="button"
                    id={`view-case-study-${item.id}`}
                    onClick={() => setSelectedCaseStudy(item)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-blue-50/90 border border-blue-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="text-left max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Zero-Risk Contractual Guarantee</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Every build backed by our contractual Zero-Bug Handover SLA
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              If any critical defect surfaces during your monitored 90-day stability window, our lead engineers remediate within 24 hours at zero billable cost.
            </p>
          </div>

          <button
            type="button"
            id="testimonials-cta-btn"
            onClick={() => onOpenProjectModal?.('Zero-Bug Build')}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-blue-200" />
            <span>Schedule Architecture Call</span>
          </button>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedCaseStudy && selectedCaseStudy.fullCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden z-10 my-8 p-6 sm:p-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={selectedCaseStudy.avatarUrl}
                    alt={selectedCaseStudy.name}
                    width={48}
                    height={48}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {selectedCaseStudy.company} — Verified Case Study
                    </h3>
                    <p className="text-xs text-slate-500">
                      {selectedCaseStudy.name} ({selectedCaseStudy.role}) · {selectedCaseStudy.industry}
                    </p>
                  </div>
                </div>

                <button
                  id="close-case-study-modal"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Key Results Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {selectedCaseStudy.fullCaseStudy.keyStats.map(stat => (
                  <div
                    key={stat.label}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center"
                  >
                    <span className="text-xl sm:text-2xl font-bold font-mono text-blue-600">
                      {stat.value}
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-0.5 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-rose-600 text-xs uppercase tracking-wider font-mono mb-1">
                    The Challenge
                  </h4>
                  <p>{selectedCaseStudy.fullCaseStudy.challenge}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-emerald-700 text-xs uppercase tracking-wider font-mono mb-1">
                    The OnlyWayOnline Solution
                  </h4>
                  <p>{selectedCaseStudy.fullCaseStudy.solution}</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[11px] font-mono text-slate-500">
                  Delivered in: <strong className="text-slate-900 font-bold">{selectedCaseStudy.fullCaseStudy.deliveredIn}</strong>
                </div>

                <button
                  type="button"
                  id="case-study-start-sprint"
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    onOpenProjectModal?.(selectedCaseStudy.categoryLabel);
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  Discuss Similar Scope
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
