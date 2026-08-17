'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  Phone,
  Video,
  MessageSquare,
  Globe,
  TrendingUp,
  ShoppingBag,
  Cpu,
  HelpCircle,
  Clock,
  ShieldCheck,
  Send,
  Calendar,
  Sparkles,
  ArrowRight,
  Zap,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

type ConversionLane = 'express' | 'rfp';
type ProjectGoal = 'website' | 'growth' | 'ecommerce' | 'custom-app' | 'consultation';
type ContactMode = 'google-meet' | 'phone' | 'whatsapp';
type PreferredTime = 'asap' | 'morning' | 'afternoon' | 'evening';
type BudgetTier = 'tier_starter' | 'tier_growth' | 'tier_scale' | 'tier_custom';

const GOAL_OPTIONS: {
  id: ProjectGoal;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  badge?: string;
}[] = [
  {
    id: 'website',
    icon: Globe,
    title: 'New Website / Redesign',
    desc: 'Ultra-fast website with 100/100 Google vitals & high conversion design',
    badge: 'Popular',
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Google SEO & Customer Leads',
    desc: 'Rank on page 1 of Google, run profitable ads, and boost inquiries',
    badge: 'High Impact',
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    title: 'High-Converting Online Store',
    desc: 'Modern e-commerce platform with 1-click instant checkout',
  },
  {
    id: 'custom-app',
    icon: Cpu,
    title: 'Web App / SaaS Portal',
    desc: 'Custom customer dashboards, client portals, and cloud web apps',
  },
  {
    id: 'consultation',
    icon: HelpCircle,
    title: 'General Strategy Consultation',
    desc: '15-minute roadmap consultation to evaluate your best digital path',
  },
];

const CONTACT_MODES: {
  id: ContactMode;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub: string;
}[] = [
  {
    id: 'google-meet',
    icon: Video,
    label: 'Google Meet',
    sub: 'Screen-share & strategy video call',
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Phone Call',
    sub: 'Quick voice call with engineer',
  },
  {
    id: 'whatsapp',
    icon: MessageSquare,
    label: 'WhatsApp Chat',
    sub: 'Direct text consultation first',
  },
];

const TIME_PREFERENCES: { id: PreferredTime; label: string; icon: string }[] = [
  { id: 'asap', label: 'As Soon As Possible', icon: '⚡' },
  { id: 'morning', label: 'Morning (10 AM – 1 PM)', icon: '🌅' },
  { id: 'afternoon', label: 'Afternoon (2 PM – 6 PM)', icon: '☀️' },
  { id: 'evening', label: 'Evening (6 PM – 9 PM)', icon: '🌙' },
];

const BUDGET_TIERS: { id: BudgetTier; label: string; range: string }[] = [
  { id: 'tier_starter', label: 'Starter Sprint', range: '$2,000 – $4,000 (₹1.5L–₹3L)' },
  { id: 'tier_growth', label: 'Growth Engine', range: '$4,000 – $8,000 (₹3L–₹6L)' },
  { id: 'tier_scale', label: 'Scale & Portal', range: '$8,000+ (₹6L+)' },
  { id: 'tier_custom', label: 'Monthly Retainer', range: '$1,200 – $3,000/mo' },
];

function resolveInitialGoal(service?: string): ProjectGoal {
  if (!service) return 'website';
  const s = service.toLowerCase();
  if (s.includes('ecom') || s.includes('store') || s.includes('shop') || s.includes('cart')) return 'ecommerce';
  if (s.includes('seo') || s.includes('ad') || s.includes('grow') || s.includes('marketing') || s.includes('social')) return 'growth';
  if (s.includes('saas') || s.includes('app') || s.includes('software') || s.includes('portal')) return 'custom-app';
  if (s.includes('consult') || s.includes('advice') || s.includes('general') || s.includes('inquiry')) return 'consultation';
  return 'website';
}

function ModalInnerForm({
  onClose,
  initialService,
}: {
  onClose: () => void;
  initialService?: string;
}) {
  const [lane, setLane] = React.useState<ConversionLane>('express');
  const [goal, setGoal] = React.useState<ProjectGoal>(resolveInitialGoal(initialService));
  const [contactMode, setContactMode] = React.useState<ContactMode>('google-meet');
  const [preferredTime, setPreferredTime] = React.useState<PreferredTime>('asap');
  const [budgetTier, setBudgetTier] = React.useState<BudgetTier>('tier_starter');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [details, setDetails] = React.useState('');

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const initialInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    // Focus initial input on mount
    const timer = setTimeout(() => {
      initialInputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, [lane]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please enter your full name';

    if (!phone.trim() && !email.trim()) {
      errs.phone = 'Please provide either a phone/WhatsApp number or email';
    } else if (phone.trim() && phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number (at least 7 digits)';
    } else if (email.trim() && !email.includes('@')) {
      errs.email = 'Please enter a valid email address';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // safe fallback
      }
    }, 500);
  };

  const selectedGoalObj = GOAL_OPTIONS.find(g => g.id === goal) || GOAL_OPTIONS[0];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 15 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-4 flex flex-col max-h-[92vh] border border-slate-200"
    >
      {/* Top Header */}
      <div className="px-5 sm:px-7 py-4 border-b border-slate-100 bg-gradient-to-r from-blue-50/80 via-white to-emerald-50/60 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-600/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 id="project-modal-title" className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Discuss Your Project
              </h2>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                100% Free · 15-Min Call
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              No technical knowledge needed. We&apos;ll explain everything clearly on Google Meet or phone.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Two-Lane Intake Selector Switch */}
      {!isSubmitted && (
        <div className="px-5 sm:px-7 pt-4 pb-1 bg-slate-50/50 border-b border-slate-100">
          <div className="flex items-center p-1 rounded-2xl bg-slate-200/80 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setLane('express')}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                lane === 'express'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>⚡ Express (15-Min Call)</span>
            </button>
            <button
              type="button"
              onClick={() => setLane('rfp')}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                lane === 'rfp'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>📋 Custom Scope (RFP)</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="p-5 sm:p-7 overflow-y-auto flex-1">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key={lane}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="space-y-5 sm:space-y-6"
            >
              {/* Goal Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
                  1. What would you like to achieve?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {GOAL_OPTIONS.map(opt => {
                    const isSelected = goal === opt.id;
                    const Icon = opt.icon;
                    const isFullWidth = opt.id === 'consultation';
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setGoal(opt.id)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                          isFullWidth ? 'sm:col-span-2' : ''
                        } ${
                          isSelected
                            ? 'bg-blue-50/90 border-blue-500 ring-2 ring-blue-500/20 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                        }`}
                      >
                        <div
                          className={`p-2 rounded-xl shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-blue-950' : 'text-slate-900'}`}>
                              {opt.title}
                            </span>
                            {opt.badge && (
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-semibold">
                                {opt.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-500 leading-tight mt-0.5 line-clamp-2">
                            {opt.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Preferred Contact Channel */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
                  2. How would you prefer to connect?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {CONTACT_MODES.map(mode => {
                    const isSelected = contactMode === mode.id;
                    const Icon = mode.icon;
                    return (
                      <button
                        type="button"
                        key={mode.id}
                        onClick={() => setContactMode(mode.id)}
                        className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex sm:flex-col items-center justify-start sm:justify-center gap-2.5 ${
                          isSelected
                            ? 'bg-emerald-50/80 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                        }`}
                      >
                        <div
                          className={`p-2 rounded-xl shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-left sm:text-center">
                          <span className={`text-xs font-bold block ${isSelected ? 'text-emerald-950' : 'text-slate-900'}`}>
                            {mode.label}
                          </span>
                          <span className="text-[10px] text-slate-500 block leading-tight">
                            {mode.sub}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Lane-Specific Fields */}
              {lane === 'rfp' && (
                <div className="space-y-4 pt-1 p-4 rounded-2xl bg-slate-50/80 border border-slate-200">
                  <span className="text-xs font-bold font-mono text-slate-800 uppercase tracking-wider block">
                    3. Target Budget & Company Scope
                  </span>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1.5">
                      Estimated Project Budget Tier:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {BUDGET_TIERS.map(b => (
                        <button
                          type="button"
                          key={b.id}
                          onClick={() => setBudgetTier(b.id)}
                          className={`p-2.5 rounded-xl border text-left transition-all text-xs cursor-pointer ${
                            budgetTier === b.id
                              ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-xs'
                              : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <span className="block">{b.label}</span>
                          <span className={`text-[10px] font-mono block mt-0.5 ${budgetTier === b.id ? 'text-blue-100' : 'text-slate-500'}`}>
                            {b.range}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="rfp-company" className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Company / Business Name
                      </label>
                      <input
                        id="rfp-company"
                        name="company"
                        type="text"
                        placeholder="e.g. Acme Health Corp"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        autoComplete="organization"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="rfp-website" className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Current Website (if applicable)
                      </label>
                      <input
                        id="rfp-website"
                        name="website"
                        type="url"
                        placeholder="https://example.com"
                        value={website}
                        onChange={e => setWebsite(e.target.value)}
                        autoComplete="url"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rfp-details" className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Key Deliverables or Special Requirements (Optional)
                    </label>
                    <textarea
                      id="rfp-details"
                      name="details"
                      rows={2}
                      placeholder="e.g. We need custom patient bookings, 100/100 Google Vitals, and 301 redirects from WordPress."
                      value={details}
                      onChange={e => setDetails(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Essential Contact Information */}
              <div className="space-y-3 pt-1">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                  {lane === 'rfp' ? '4. Your Direct Contact Details' : '3. Where should we send your invite & call confirmation?'}
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="modal-name-input" className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      ref={initialInputRef}
                      id="modal-name-input"
                      name="name"
                      type="text"
                      placeholder="e.g. Alex Henderson"
                      value={name}
                      onChange={e => {
                        setName(e.target.value);
                        if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                      }}
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'modal-name-error' : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.name ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <span id="modal-name-error" className="text-[10px] text-rose-600 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone / WhatsApp Field */}
                  <div>
                    <label htmlFor="modal-phone-input" className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="modal-phone-input"
                      name="phone"
                      type="tel"
                      placeholder="e.g. +1 (555) 019-2834"
                      value={phone}
                      onChange={e => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                      }}
                      autoComplete="tel"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'modal-phone-error' : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'
                      }`}
                    />
                    {errors.phone && (
                      <span id="modal-phone-error" className="text-[10px] text-rose-600 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="modal-email-input" className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Business Email Address <span className="text-slate-400 font-normal">(for calendar invite & meeting link)</span>
                  </label>
                  <input
                    id="modal-email-input"
                    name="email"
                    type="email"
                    placeholder="e.g. alex@yourbusiness.com"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                    }}
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'modal-email-error' : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && (
                    <span id="modal-email-error" className="text-[10px] text-rose-600 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Preferred Call Time Pills */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1.5">
                    Best Time Window:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {TIME_PREFERENCES.map(t => (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => setPreferredTime(t.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          preferredTime === t.id
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
                        }`}
                      >
                        <span>{t.icon}</span>
                        <span>{t.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Reserving Your Strategy Call...
                    </span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-blue-200" />
                      <span>
                        {lane === 'express' ? 'Schedule Free 15-Min Strategy Call' : 'Submit Detailed Scope & Book Call'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Trust Footer */}
                <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Free · No Obligation
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600" /> Fast Response Within 2 Hours
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1 text-slate-700">
                    <Phone className="w-3 h-3 text-emerald-600" /> Helpline: <a href="tel:+917827701112" className="text-blue-600 font-bold hover:underline">+91 7827701112</a>
                  </span>
                </div>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 sm:py-8 space-y-6"
            >
              {/* Success Badge */}
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Call Request Received, {name || 'there'}! 🎉
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our engineering and growth team has received your request regarding{' '}
                  <strong className="text-slate-900">{selectedGoalObj.title}</strong>. We will connect with you via{' '}
                  <strong className="text-blue-600">
                    {contactMode === 'google-meet' ? 'Google Meet video link' : contactMode === 'whatsapp' ? 'WhatsApp message' : 'phone call'}
                  </strong>{' '}
                  within <strong>2 business hours</strong> to confirm your slot.
                </p>
              </div>

              {/* What Happens Next Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-lg mx-auto space-y-3">
                <span className="text-xs font-bold font-mono uppercase text-slate-700 tracking-wider block">
                  What Happens Next?
                </span>
                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px] shrink-0">1</span>
                    <span>We review your requirements and prepare a tailored digital roadmap.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px] shrink-0">2</span>
                    <span>We send a calendar invite or message you at <strong>{phone || email || 'your contact number'}</strong>.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px] shrink-0">3</span>
                    <span>We hop on a quick 15-minute call — you get clear answers, technical clarity, and exact pricing.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/917827701112?text=Hi%20OnlyWayOnline%20team,%20I%20just%20requested%20a%20call%20for%20my%20business%20(${encodeURIComponent(name || 'client')})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 7827701112)</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl neo-pill text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all cursor-pointer"
                >
                  Close & Browse Site
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function ProjectModal({ isOpen, onClose, initialService }: ProjectModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          aria-hidden="true"
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
