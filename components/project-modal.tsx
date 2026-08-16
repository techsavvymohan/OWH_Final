'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Activity,
  TrendingUp,
  Code2,
  Laptop,
  HelpCircle,
  Send,
  Lock,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

type TrackType = 'web-app' | 'ecommerce' | 'growth-engine' | 'flagship-sprint' | 'custom-request';

interface GrowthDiscoveryData {
  track: TrackType;
  selectedServices: string[];
  budgetRange: string;
  monthlyTraffic: string;
  currentStack: string;
  primaryBottleneck: string;
  slaWindow: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  websiteUrl: string;
  phone: string;
  notes: string;
}

const TRACKS: {
  id: TrackType;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  tagColor: string;
}[] = [
  {
    id: 'flagship-sprint',
    title: '90-Day Launch & Growth Sprint',
    subtitle: 'Integrated end-to-end architecture + organic SEO + high-ROAS paid acquisition.',
    badge: 'Most Popular',
    icon: Sparkles,
    tagColor: 'bg-amber-100 text-amber-900 border-amber-200',
  },
  {
    id: 'web-app',
    title: 'Zero-Defect Web Platform & SaaS',
    subtitle: 'Next.js 15, React 19, TypeScript, sub-second latency, and 100/100 Core Web Vitals.',
    badge: 'Zero-Bug SLA',
    icon: Code2,
    tagColor: 'bg-blue-100 text-blue-900 border-blue-200',
  },
  {
    id: 'ecommerce',
    title: 'High-Performance Headless E-Commerce',
    subtitle: 'Ultra-fast cart transitions, instant checkouts, and custom conversion funnels.',
    badge: 'Sub-second Speed',
    icon: Laptop,
    tagColor: 'bg-indigo-100 text-indigo-900 border-indigo-200',
  },
  {
    id: 'growth-engine',
    title: 'Full-Funnel B2B SEO & Paid Acquisition',
    subtitle: 'Programmatic SEO, multi-channel ad scaling, attribution, and CRO pipelines.',
    badge: 'Target-Driven ROAS',
    icon: TrendingUp,
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
  },
  {
    id: 'custom-request',
    title: 'Custom Choice & Requested Services',
    subtitle: 'Bespoke architectures, custom scope, dedicated advisory, or any specific requested service.',
    badge: 'Custom Choice',
    icon: HelpCircle,
    tagColor: 'bg-purple-100 text-purple-900 border-purple-200',
  },
];

const SERVICE_CHIPS: Record<TrackType, { id: string; label: string }[]> = {
  'flagship-sprint': [
    { id: 'full-stack-app', label: 'Custom Next.js App / Platform' },
    { id: 'zero-bug-qa', label: 'Automated E2E QA Test Matrix' },
    { id: 'prog-seo', label: 'Programmatic SEO Architecture' },
    { id: 'paid-ads', label: 'Meta & Google Ads Campaign Setup' },
    { id: 'cro-funnel', label: 'Conversion Rate Optimization (CRO)' },
    { id: 'monitored-sla', label: '90-Day Monitored Stability SLA' },
  ],
  'web-app': [
    { id: 'saas-frontend', label: 'Next.js 15 / React 19 Frontend' },
    { id: 'backend-api', label: 'Serverless APIs & Edge Functions' },
    { id: 'database-orm', label: 'PostgreSQL / Firestore Architecture' },
    { id: 'ci-cd-qa', label: 'Playwright & GitHub Actions CI/CD' },
    { id: 'cwv-opt', label: '100/100 Core Web Vitals Audit' },
    { id: 'design-system', label: 'Tailwind Design System & Tokens' },
  ],
  'ecommerce': [
    { id: 'headless-store', label: 'Headless Storefront (Shopify/Next.js)' },
    { id: 'instant-checkout', label: 'Optimistic Cart & 1-Click Checkout' },
    { id: 'catalog-sync', label: 'Multi-Currency & ERP Sync' },
    { id: 'cro-pages', label: 'High-Converting Product Detail Pages' },
    { id: 'edge-cache', label: 'Global Edge CDN & Image Caching' },
    { id: 'abandon-recovery', label: 'Retention & Email Automation' },
  ],
  'growth-engine': [
    { id: 'technical-seo', label: 'Technical Crawl & Semantic SEO' },
    { id: 'keyword-cluster', label: 'High-Intent Keyword Matrix' },
    { id: 'paid-search-social', label: 'Google Search & LinkedIn Ads' },
    { id: 'meta-retargeting', label: 'Meta Dynamic Retargeting' },
    { id: 'funnel-ab-test', label: 'Landing Page A/B Split Testing' },
    { id: 'analytics-gtm', label: 'GA4 / GTM / Segment Tracking' },
  ],
  'custom-request': [
    { id: 'custom-web-mobile', label: 'Custom Web / Mobile / App Architecture' },
    { id: 'bespoke-integrations', label: 'Bespoke API & Third-Party System Integrations' },
    { id: 'tailored-retainer', label: 'Tailored Growth & Maintenance Retainer' },
    { id: 'technical-audit', label: 'Technical Code Audit & Architecture Advisory' },
    { id: 'graphic-branding', label: 'Graphic Design Studio & Brand Assets' },
    { id: 'other-custom-request', label: 'Other Custom Requested Services' },
  ],
};

const TRAFFIC_OPTIONS = [
  { id: 'early', label: 'Under 10,000 / mo', desc: 'Pre-launch or initial market validation phase' },
  { id: 'growth', label: '10k – 50,000 / mo', desc: 'Active traction requiring architectural speed & CRO' },
  { id: 'scale', label: '50k – 200,000 / mo', desc: 'High velocity requiring automated QA & SEO scaling' },
  { id: 'enterprise', label: '200,000+ / mo', desc: 'Enterprise volume requiring zero-downtime SLA' },
];

const STACK_OPTIONS: Record<TrackType, { id: string; label: string; tag: string }[]> = {
  'flagship-sprint': [
    { id: 'greenfield', label: 'New Product (From Scratch)', tag: 'Green-field' },
    { id: 'modern-react', label: 'Next.js / React / TypeScript', tag: 'Modern Stack' },
    { id: 'legacy-replatform', label: 'Legacy WordPress / PHP / Monolith', tag: 'Migration' },
    { id: 'shopify-plus', label: 'Shopify / Shopify Plus Ecosystem', tag: 'Commerce' },
    { id: 'custom-hybrid', label: 'Custom Multi-Tier Infrastructure', tag: 'Enterprise' },
  ],
  'web-app': [
    { id: 'greenfield', label: 'Green-field (Build from scratch)', tag: 'Recommended' },
    { id: 'modern-react', label: 'Next.js / React 19 / Tailwind', tag: 'Standard' },
    { id: 'legacy-php', label: 'WordPress / PHP (Need modern rewrite)', tag: 'Modernization' },
    { id: 'vue-angular', label: 'Vue / Nuxt / Angular codebase', tag: 'Refactor' },
    { id: 'node-python', label: 'Node.js / Python / Go backend', tag: 'Full-Stack' },
  ],
  'ecommerce': [
    { id: 'shopify', label: 'Shopify Plus / Headless Hydrogen', tag: 'E-Com Standard' },
    { id: 'woocommerce', label: 'WooCommerce (Migrating to Headless)', tag: 'Speed Boost' },
    { id: 'custom-commerce', label: 'Custom Stripe / Medusa / Vendure', tag: 'Custom' },
    { id: 'magento-bigcommerce', label: 'Magento / BigCommerce / Adobe', tag: 'Enterprise' },
  ],
  'growth-engine': [
    { id: 'meta-google', label: 'Google Ads + Meta Ads Manager', tag: 'Active' },
    { id: 'hubspot-salesforce', label: 'HubSpot / Salesforce / Marketo', tag: 'CRM' },
    { id: 'ga4-segment', label: 'GA4 + GTM + Mixpanel / Segment', tag: 'Analytics' },
    { id: 'no-current-tools', label: 'Starting fresh (Need complete setup)', tag: 'Turnkey' },
  ],
  'custom-request': [
    { id: 'custom-architecture', label: 'Custom Choice / Bespoke Stack', tag: 'Bespoke' },
    { id: 'hybrid-multi-cloud', label: 'Hybrid Multi-Cloud / Edge Architecture', tag: 'Hybrid' },
    { id: 'consulting-advisory', label: 'Technical Advisory & Audit Scope', tag: 'Strategy' },
  ],
};

const BOTTLENECK_OPTIONS = [
  {
    id: 'speed-vitals',
    title: 'Slow Load Times & Failing Core Web Vitals',
    desc: 'Losing mobile visitors and search rank due to sub-optimal performance.',
    recommendation: 'Next.js 15 Edge SSR & 100/100 Core Web Vitals Protocol',
  },
  {
    id: 'bugs-regressions',
    title: 'Frequent Bugs, Layout Shifts & Code Regressions',
    desc: 'Developer handoffs break features and damage user trust.',
    recommendation: 'Zero-Bug Handover Protocol™ + Playwright E2E Testing',
  },
  {
    id: 'low-conversion',
    title: 'Sub-Optimal Conversion Rate (< 2.5% CRO)',
    desc: 'Plenty of traffic but weak landing page conversion and drop-offs.',
    recommendation: 'Full CRO Funnel Redesign + High-Intent Semantic Copy',
  },
  {
    id: 'stagnant-seo',
    title: 'Stagnant Organic Search Rankings & Keyword Deficit',
    desc: 'Competitors outranking key commercial terms on Google.',
    recommendation: 'Programmatic SEO Cluster Architecture + Sub-Second TTFB',
  },
  {
    id: 'high-cac',
    title: 'High Customer Acquisition Cost & Low ROAS',
    desc: 'Ad spend is unprofitable or scaling is hindered by poor funnels.',
    recommendation: 'High-ROAS Ad Engine + Precision Attribution Tracking',
  },
];

const BUDGET_RANGES = [
  { id: 'b1', label: '$5,000 – $10,000', desc: 'Targeted Core Module or Growth Sprint' },
  { id: 'b2', label: '$10,000 – $25,000', desc: 'Full System Architecture or 90-Day Sprint (Optimal)' },
  { id: 'b3', label: '$25,000 – $50,000+', desc: 'Multi-Product Enterprise Ecosystem' },
  { id: 'b4', label: 'Custom Dedicated Retainer', desc: 'Dedicated Engineering & Growth Squad' },
];

function ModalInnerForm({
  onClose,
  initialService,
}: {
  onClose: () => void;
  initialService?: string;
}) {
  const getInitialTrack = (): TrackType => {
    if (!initialService) return 'flagship-sprint';
    const s = initialService.toLowerCase();
    if (s.includes('custom') || s.includes('other') || s.includes('choice') || s.includes('request')) return 'custom-request';
    if (s.includes('e-commerce') || s.includes('store') || s.includes('cart')) return 'ecommerce';
    if (s.includes('seo') || s.includes('ads') || s.includes('grow') || s.includes('marketing')) return 'growth-engine';
    if (s.includes('web') || s.includes('saas') || s.includes('app') || s.includes('zero-bug')) return 'web-app';
    return 'flagship-sprint';
  };

  const [step, setStep] = React.useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = React.useState<GrowthDiscoveryData>({
    track: getInitialTrack(),
    selectedServices: ['full-stack-app', 'zero-bug-qa', 'prog-seo', 'monitored-sla'],
    budgetRange: '$10,000 – $25,000',
    monthlyTraffic: 'growth',
    currentStack: 'modern-react',
    primaryBottleneck: 'speed-vitals',
    slaWindow: '90-day',
    timeline: '30-45-days',
    name: '',
    email: '',
    company: '',
    websiteUrl: '',
    phone: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState<Record<string, string>>({});

  const handleTrackChange = (newTrack: TrackType) => {
    const defaultChips = SERVICE_CHIPS[newTrack].map(c => c.id);
    const defaultStack = STACK_OPTIONS[newTrack][0].id;
    setFormData(prev => ({
      ...prev,
      track: newTrack,
      selectedServices: defaultChips,
      currentStack: defaultStack,
    }));
  };

  const toggleServiceChip = (chipId: string) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(chipId);
      const updated = exists
        ? prev.selectedServices.filter(id => id !== chipId)
        : [...prev.selectedServices, chipId];
      return { ...prev, selectedServices: updated.length > 0 ? updated : [chipId] };
    });
  };

  const qualificationScore = React.useMemo(() => {
    let score = 85;
    if (formData.track === 'flagship-sprint') score += 10;
    if (formData.monthlyTraffic === 'growth' || formData.monthlyTraffic === 'scale') score += 5;
    if (formData.selectedServices.length >= 3) score += 5;
    return Math.min(score, 100);
  }, [formData.track, formData.monthlyTraffic, formData.selectedServices]);

  const activeTrackObj = TRACKS.find(t => t.id === formData.track) || TRACKS[0];
  const activeBottleneckObj = BOTTLENECK_OPTIONS.find(b => b.id === formData.primaryBottleneck) || BOTTLENECK_OPTIONS[0];

  const validateStep2 = () => {
    if (!formData.monthlyTraffic || !formData.currentStack || !formData.primaryBottleneck) {
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = 'Valid corporate email is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
      }
    } else if (step === 3) {
      if (validateStep3()) {
        handleSubmitForm();
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as 1 | 2 | 3);
    }
  };

  const handleSubmitForm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // safe fallback
      }
    }, 750);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 15 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="relative w-full max-w-3xl glass-card rounded-3xl shadow-2xl overflow-hidden z-10 my-6 flex flex-col max-h-[90vh]"
    >
      {/* Top Header & Progress Stepper */}
      <div className="px-6 py-4 border-b border-slate-200/90 glass-panel-subtle flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-mono text-xs font-bold neo-pill">
            OW
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                Growth Discovery & Scope Builder
              </span>
              <span className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold shadow-2xs">
                Zero-Bug SLA
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              Targeted zero-defect QA · Optimized Core Web Vitals standard
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {step < 4 && (
            <div className="hidden sm:flex items-center gap-1 text-xs font-mono font-bold text-slate-600 neo-pill px-2.5 py-1 rounded-full">
              <span className="text-blue-600">Step {step}</span>
              <span className="text-slate-300">/</span>
              <span>3</span>
            </div>
          )}
          <button
            id="close-growth-discovery-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Visual Step Indicator Bars */}
      {step < 4 && (
        <div className="px-6 py-2.5 bg-slate-50/70 border-b border-slate-100 grid grid-cols-3 gap-2">
          <div className="h-2 rounded-full neo-inset p-0.5 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                step >= 1 ? 'bg-blue-600 shadow-xs' : 'bg-transparent'
              }`}
            />
          </div>
          <div className="h-2 rounded-full neo-inset p-0.5 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                step >= 2 ? 'bg-blue-600 shadow-xs' : 'bg-transparent'
              }`}
            />
          </div>
          <div className="h-2 rounded-full neo-inset p-0.5 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                step >= 3 ? 'bg-blue-600 shadow-xs' : 'bg-transparent'
              }`}
            />
          </div>
        </div>
      )}

      {/* Scrollable Modal Body */}
      <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
        {/* ================= STEP 1: TRACK & SCOPE ================= */}
        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Select Your Primary Growth Track
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Choose the main architecture focus. We tailor our automated testing matrix and pre-qualification based on your track.
              </p>
            </div>

            {/* 5 Track Cards (Includes Custom Choice / Requested Services) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TRACKS.map(track => {
                const isSelected = formData.track === track.id;
                const isFullWidth = track.id === 'custom-request';
                const IconComponent = track.icon;
                return (
                  <button
                    type="button"
                    key={track.id}
                    id={`track-option-${track.id}`}
                    onClick={() => handleTrackChange(track.id)}
                    className={`relative p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isFullWidth ? 'sm:col-span-2' : ''
                    } ${
                      isSelected
                        ? 'bg-blue-50/70 border-blue-600 ring-2 ring-blue-600/10 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                            isSelected
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${track.tagColor}`}
                        >
                          {track.badge}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {track.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {track.subtitle}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-mono text-slate-500">
                        {isSelected ? 'Track Selected' : 'Click to Select'}
                      </span>
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                          isSelected
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Scope Capabilities Chips */}
            <div className="space-y-2.5 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                <span>Included Capabilities & Modules</span>
                <span className="text-[11px] font-normal text-slate-500">
                  Toggle components needed for your sprint
                </span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICE_CHIPS[formData.track].map(chip => {
                  const isChecked = formData.selectedServices.includes(chip.id);
                  return (
                    <button
                      type="button"
                      key={chip.id}
                      onClick={() => toggleServiceChip(chip.id)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-blue-50 border-blue-300 text-blue-900 font-semibold'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span className="truncate pr-2">{chip.label}</span>
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Investment Range Selection */}
            <div className="space-y-2.5 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Target Investment Range
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BUDGET_RANGES.map(b => {
                  const isBudgetSelected = formData.budgetRange === b.label;
                  return (
                    <button
                      type="button"
                      key={b.id}
                      onClick={() =>
                        setFormData(prev => ({ ...prev, budgetRange: b.label }))
                      }
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isBudgetSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="text-xs font-bold font-mono">{b.label}</div>
                      <div
                        className={`text-[11px] mt-0.5 ${
                          isBudgetSelected ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {b.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* ================= STEP 2: GROWTH DISCOVERY & PRE-QUALIFICATION (CONDITIONAL LOGIC) ================= */}
        {step === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Conditional Logic Engine
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Tailored to {activeTrackObj.title}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Pre-Qualification & Architecture Discovery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Answering these parameters enables us to calculate your Zero-Bug test matrix and prepare custom benchmarks prior to our strategy call.
              </p>
            </div>

            {/* Live Qualification Indicator Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-900 uppercase">
                      Sprint Qualification Score: {qualificationScore}%
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-xs text-slate-700 mt-0.5">
                    Pre-qualified for <strong>{formData.slaWindow.toUpperCase()} Monitored Stability SLA</strong> with rigorous regression testing.
                  </p>
                </div>
              </div>
              <div className="text-right sm:shrink-0">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-blue-800 font-bold shadow-xs">
                  Target 100/100 CWV Benchmark
                </span>
              </div>
            </div>

            {/* Question 1: Current Monthly Traffic / User Scale */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <span>A. Current Monthly Unique Visitors / Traffic Scale</span>
                <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TRAFFIC_OPTIONS.map(opt => {
                  const isSelected = formData.monthlyTraffic === opt.id;
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      id={`traffic-option-${opt.id}`}
                      onClick={() =>
                        setFormData(prev => ({ ...prev, monthlyTraffic: opt.id }))
                      }
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500/20 text-blue-950 font-medium'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/80'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-mono">{opt.label}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        {opt.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question 2: Technology Stack & Infrastructure (Conditional on track) */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center justify-between">
                <span>B. Current Tech Stack or Platform Setup</span>
                <span className="text-[11px] font-mono text-slate-500 font-normal">
                  Track: {activeTrackObj.title.split(' ')[0]}
                </span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {STACK_OPTIONS[formData.track].map(stack => {
                  const isSelected = formData.currentStack === stack.id;
                  return (
                    <button
                      type="button"
                      key={stack.id}
                      id={`stack-option-${stack.id}`}
                      onClick={() =>
                        setFormData(prev => ({ ...prev, currentStack: stack.id }))
                      }
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-950 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold">{stack.label}</div>
                        <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                          Classification: {stack.tag}
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center border shrink-0 ${
                          isSelected
                            ? 'bg-indigo-600 border-indigo-600 text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question 3: Primary Bottleneck / Pain Point */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                C. Primary Growth Bottleneck to Eliminate
              </label>
              <div className="space-y-2">
                {BOTTLENECK_OPTIONS.map(bot => {
                  const isSelected = formData.primaryBottleneck === bot.id;
                  return (
                    <button
                      type="button"
                      key={bot.id}
                      id={`bottleneck-option-${bot.id}`}
                      onClick={() =>
                        setFormData(prev => ({
                          ...prev,
                          primaryBottleneck: bot.id,
                        }))
                      }
                      className={`w-full p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? 'bg-amber-50/70 border-amber-500 ring-1 ring-amber-500/30 text-amber-950'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="mt-0.5">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                            isSelected
                              ? 'bg-amber-600 border-amber-600 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-slate-900">
                          {bot.title}
                        </div>
                        <div className="text-[11px] text-slate-600 mt-0.5">
                          {bot.desc}
                        </div>
                        {isSelected && (
                          <div className="mt-2 p-2 rounded-xl bg-white/90 border border-amber-200 text-[11px] text-amber-900 font-mono">
                            <span className="font-bold">Deployed Solution:</span>{' '}
                            {bot.recommendation}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question 4: SLA Window Preference */}
            <div className="space-y-2.5 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                D. Desired Post-Launch Monitored Stability Window
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '30-day', label: '30-Day SLA', desc: 'Standard Launch Warranty' },
                  { id: '60-day', label: '60-Day SLA', desc: 'Velocity Growth Monitor' },
                  { id: '90-day', label: '90-Day SLA', desc: 'Enterprise Telemetry (Recommended)' },
                ].map(sla => (
                  <button
                    type="button"
                    key={sla.id}
                    onClick={() =>
                      setFormData(prev => ({ ...prev, slaWindow: sla.id }))
                    }
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      formData.slaWindow === sla.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold font-mono">{sla.label}</div>
                    <div
                      className={`text-[10px] mt-0.5 leading-tight ${
                        formData.slaWindow === sla.id
                          ? 'text-blue-100'
                          : 'text-slate-500'
                      }`}
                    >
                      {sla.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ================= STEP 3: CONTACT & SPRINT DISPATCH ================= */}
        {step === 3 && (
          <motion.div
            key="step-3"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Executive Contact & Sprint Dispatch
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Enter your details to receive our technical architecture blueprint and schedule your priority engineering walkthrough.
              </p>
            </div>

            {/* Discovery Parameters Summary Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Selected Track:</span>
                <span className="font-bold text-blue-700">{activeTrackObj.title}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Traffic Tier:</span>
                <span className="text-slate-800 font-semibold">
                  {TRAFFIC_OPTIONS.find(t => t.id === formData.monthlyTraffic)?.label}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Primary Bottleneck:</span>
                <span className="text-amber-800 font-semibold truncate max-w-[280px]">
                  {activeBottleneckObj.title}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Stability Protocol:</span>
                <span className="text-emerald-700 font-bold">
                  {formData.slaWindow.toUpperCase()} Monitored Quality Window
                </span>
              </div>
            </div>

            {/* Contact Form Inputs */}
            <div className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    id="discovery-input-name"
                    placeholder="e.g. Elena Rostova"
                    value={formData.name}
                    onChange={e =>
                      setFormData(prev => ({ ...prev, name: e.target.value }))
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      formErrors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-[11px] text-red-500 mt-0.5 block font-medium">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Corporate Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    id="discovery-input-email"
                    placeholder="e.g. elena@company.com"
                    value={formData.email}
                    onChange={e =>
                      setFormData(prev => ({ ...prev, email: e.target.value }))
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      formErrors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                    }`}
                  />
                  {formErrors.email && (
                    <span className="text-[11px] text-red-500 mt-0.5 block font-medium">
                      {formErrors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Company Name / Organization
                  </label>
                  <input
                    type="text"
                    id="discovery-input-company"
                    placeholder="e.g. ScaleVector Labs"
                    value={formData.company}
                    onChange={e =>
                      setFormData(prev => ({ ...prev, company: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Current Website / App URL
                  </label>
                  <input
                    type="text"
                    id="discovery-input-website"
                    placeholder="e.g. https://scalevector.io"
                    value={formData.websiteUrl}
                    onChange={e =>
                      setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Specific Requirements or Technical Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  id="discovery-input-notes"
                  placeholder="Mention any custom integrations, required target deadlines, or specific SLA metrics..."
                  value={formData.notes}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, notes: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
              </div>
            </div>

            {/* Zero-Defect Privacy & Security Note */}
            <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-950 font-medium">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                Your data is protected under strict mutual NDA. We respond with a tailored sprint scope and SLA proposal within <strong>2 business hours</strong>.
              </span>
            </div>
          </motion.div>
        )}

        {/* ================= STEP 4: SUCCESS CONFIRMATION ================= */}
        {step === 4 && (
          <motion.div
            key="step-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4 space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50 shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">
                Growth Discovery Blueprint Generated!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-blue-600">{formData.name || 'there'}</span>. Our technical architecture and growth team has received your parameters and will dispatch your customized sprint roadmap within <span className="font-bold text-slate-900">2 business hours</span>.
              </p>
            </div>

            {/* Summary Specification Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2.5 font-mono max-w-lg mx-auto">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500">Qualified Track:</span>
                <span className="text-blue-700 font-bold">{activeTrackObj.title}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Traffic Category:</span>
                <span className="text-slate-800 font-semibold">
                  {TRAFFIC_OPTIONS.find(t => t.id === formData.monthlyTraffic)?.label}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Active Modules:</span>
                <span className="text-indigo-700 font-bold">
                  {formData.selectedServices.length} Selected Components
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Core Web Vitals SLA:</span>
                <span className="text-emerald-700 font-bold">Target 100/100 Benchmark</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Post-Launch Protection:</span>
                <span className="text-emerald-700 font-bold">
                  {formData.slaWindow.toUpperCase()} Monitored Window
                </span>
              </div>
            </div>

            <div className="pt-2 max-w-md mx-auto space-y-2">
              <button
                type="button"
                id="done-growth-discovery-btn"
                onClick={onClose}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                Close & Return to Dashboard
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Sticky Action Footer (For Steps 1-3) */}
      {step < 4 && (
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between shrink-0">
          {step > 1 ? (
            <button
              type="button"
              id="back-discovery-step-btn"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Zero-Bug Protocol™</span>
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              type="button"
              id="next-discovery-step-btn"
              onClick={handleNext}
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing Scope...</span>
                </>
              ) : step === 3 ? (
                <>
                  <span>Dispatch Growth Blueprint</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span>
                    {step === 1 ? 'Continue to Pre-Qualification' : 'Review & Finalize'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function ProjectModal({ isOpen, onClose, initialService }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        />

        <ModalInnerForm
          key={`${initialService || 'default'}-${isOpen}`}
          onClose={onClose}
          initialService={initialService}
        />
      </div>
    </AnimatePresence>
  );
}
