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
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

type ProjectGoal = 'website' | 'growth' | 'ecommerce' | 'custom-app' | 'consultation';
type ContactMode = 'google-meet' | 'phone' | 'whatsapp';
type PreferredTime = 'asap' | 'morning' | 'afternoon' | 'evening';

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
    desc: 'Fast, modern website that looks stunning on phones & computers',
    badge: 'Popular',
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Get More Leads & Google SEO',
    desc: 'Rank higher on Google, get more customer calls, and run ads',
    badge: 'High Impact',
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    title: 'Online Store / E-Commerce',
    desc: 'Sell products online with smooth 1-click checkout',
  },
  {
    id: 'custom-app',
    icon: Cpu,
    title: 'Web App / Software Idea',
    desc: 'Custom client portals, dashboards, or software tools',
  },
  {
    id: 'consultation',
    icon: HelpCircle,
    title: 'Just Need Expert Advice',
    desc: 'Help me figure out the best plan for my business',
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
    sub: 'Quick 10-minute voice call',
  },
  {
    id: 'whatsapp',
    icon: MessageSquare,
    label: 'WhatsApp Chat',
    sub: 'Chat with us over text first',
  },
];

const TIME_PREFERENCES: { id: PreferredTime; label: string; icon: string }[] = [
  { id: 'asap', label: 'As Soon As Possible', icon: '⚡' },
  { id: 'morning', label: 'Morning (10 AM – 1 PM)', icon: '🌅' },
  { id: 'afternoon', label: 'Afternoon (2 PM – 6 PM)', icon: '☀️' },
  { id: 'evening', label: 'Evening (6 PM – 9 PM)', icon: '🌙' },
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
  const [goal, setGoal] = React.useState<ProjectGoal>(resolveInitialGoal(initialService));
  const [contactMode, setContactMode] = React.useState<ContactMode>('google-meet');
  const [preferredTime, setPreferredTime] = React.useState<PreferredTime>('asap');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [details, setDetails] = React.useState('');
  const [showOptionalDetails, setShowOptionalDetails] = React.useState(false);

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please enter your name';
    if (!phone.trim() && !email.trim()) {
      errs.phone = 'Please provide either a phone number or email so we can reach you';
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
    }, 600);
  };

  const selectedGoalObj = GOAL_OPTIONS.find(g => g.id === goal) || GOAL_OPTIONS[0];

  return (
    <motion.div
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
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Discuss Your Project
              </h2>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                100% Free · 15 Min Call
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              No technical knowledge needed. We&apos;ll explain everything on Google Meet or phone.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-7 overflow-y-auto flex-1">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-5 sm:space-y-6"
            >
              {/* Step 1: What do you want to build/discuss? */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
                  1. What do you need help with?
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

              {/* Step 2: How would you like us to contact you? */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
                  2. How would you prefer to talk?
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

              {/* Step 3: Minimal Essential Contact Info */}
              <div className="space-y-3 pt-1">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                  3. Where should we reach you?
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name Field */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={e => {
                        setName(e.target.value);
                        if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.name ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-rose-600 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Phone / WhatsApp Field */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Phone Number or WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 (555) 000-0000"
                      value={phone}
                      onChange={e => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'
                      }`}
                    />
                    {errors.phone && <span className="text-[10px] text-rose-600 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                {/* Email Field (Optional or Secondary) */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-slate-400 font-normal">(for calendar invite & meeting link)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. john@mybusiness.com"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-rose-600 mt-1 block">{errors.email}</span>}
                </div>

                {/* Preferred Call Time Pills */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1.5">
                    When is the best time to connect?
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

                {/* Collapsible Optional Extra Notes */}
                <div className="pt-1">
                  {!showOptionalDetails ? (
                    <button
                      type="button"
                      onClick={() => setShowOptionalDetails(true)}
                      className="text-xs text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>+ Add current website link or special notes (optional)</span>
                    </button>
                  ) : (
                    <div className="space-y-1.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] font-semibold text-slate-700">
                          Current website URL or brief note (optional):
                        </label>
                        <button
                          type="button"
                          onClick={() => setShowOptionalDetails(false)}
                          className="text-[10px] text-slate-400 hover:text-slate-600"
                        >
                          Hide
                        </button>
                      </div>
                      <textarea
                        rows={2}
                        placeholder="e.g. Current website is www.mybusiness.com, we want to redesign it to get more leads."
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Booking Your Discovery Call...</span>
                    </>
                  ) : (
                    <>
                      <span>Schedule Free 15-Min Strategy Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Reassurance Strip */}
                <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px] text-slate-500 font-medium text-center">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    100% Free · No Obligation
                  </span>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    We reply within 2 hours
                  </span>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <span>🔒 Your info is strictly private</span>
                </div>
              </div>
            </motion.form>
          ) : (
            /* Success Confirmation Screen */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 sm:py-8 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50/70 shadow-sm animate-bounce-slow">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Call Request Received, {name || 'there'}! 🎉
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our growth team has received your request regarding{' '}
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
                    <span>We review your requirements and prepare a tailored recommendation.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px] shrink-0">2</span>
                    <span>We send a calendar invite or message you at <strong>{phone || email || 'your contact number'}</strong>.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px] shrink-0">3</span>
                    <span>We hop on a quick 15-minute call — you get clear answers and an exact price estimate. No pressure.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/?text=Hi%20OnlyWayOnline%20team,%20I%20just%20requested%20a%20call%20for%20my%20business%20(${encodeURIComponent(name || 'client')})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Now</span>
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
