'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import {
  User,
  Building,
  Globe,
  Target,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  LayoutDashboard,
  Cpu,
  Layers,
  Zap,
  X
} from 'lucide-react';
import { useAuth, OnboardingData } from '@/lib/auth-context';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFinish?: () => void;
}

const STEPS = [
  { id: 1, title: 'Profile & Venture', desc: 'Identify your organization & scope' },
  { id: 2, title: 'Growth Goals', desc: 'Define your primary sprint targets' },
  { id: 3, title: 'Link Accounts', desc: 'Connect analytics, ads & codebases' },
  { id: 4, title: 'Platform Tutorial', desc: 'Tour Zero-Bug & growth systems' },
  { id: 5, title: 'Blueprint Ready', desc: 'Deploy tailored growth roadmap' },
];

export function OnboardingModal({ isOpen, onClose, onFinish }: OnboardingModalProps) {
  const { user, completeOnboarding } = useAuth();

  const [currentStep, setCurrentStep] = React.useState(1);

  // Form State initialized with user if available
  const [fullName, setFullName] = React.useState(() => user?.name || 'Sarah Jenkins');
  const [companyName, setCompanyName] = React.useState(() => user?.company || 'Apex Vector Labs');
  const [industry, setIndustry] = React.useState('SaaS & B2B Software');
  const [teamSize, setTeamSize] = React.useState('11-50 employees');
  const [websiteUrl, setWebsiteUrl] = React.useState('https://apexvector.io');

  const [primaryGoal, setPrimaryGoal] = React.useState<'redesign' | 'saas_build' | 'seo_growth' | 'paid_roas' | 'enterprise_stack'>('saas_build');
  const [launchTimeline, setLaunchTimeline] = React.useState<'30_days' | '60_days' | '90_days' | 'ongoing'>('60_days');
  const [monthlyBudget, setMonthlyBudget] = React.useState('$5,000 - $15,000 / mo');

  // Integrations state
  const [connectedIntegrations, setConnectedIntegrations] = React.useState<string[]>([
    'Google Search Console',
    'GitHub Organization'
  ]);

  // Tutorial active slide
  const [activeTutorialTab, setActiveTutorialTab] = React.useState<number>(0);

  if (!isOpen) return null;

  const toggleIntegration = (name: string) => {
    setConnectedIntegrations(prev =>
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    } else {
      const finalData: OnboardingData = {
        fullName,
        companyName,
        industry,
        teamSize,
        websiteUrl,
        primaryGoal,
        launchTimeline,
        monthlyBudget,
        connectedIntegrations,
        completedSteps: 5,
      };
      completeOnboarding(finalData);
      onFinish?.();
      onClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
      />

      {/* Main Wizard Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-3xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden z-10 my-6 flex flex-col max-h-[90vh]"
      >
        {/* Top Header */}
        <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
                OW
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                  Client Onboarding Protocol
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                  {STEPS[currentStep - 1].title}
                </h2>
              </div>
            </div>

            <button
              id="close-onboarding-modal-btn"
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Step {currentStep} of 5</span>
              <span className="text-blue-700 font-mono font-bold">
                {Math.round((currentStep / 5) * 100)}% Completed
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600"
                initial={{ width: '20%' }}
                animate={{ width: `${(currentStep / 5) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Steps mini pill list */}
            <div className="hidden sm:flex items-center justify-between pt-2">
              {STEPS.map((s) => (
                <div
                  key={s.id}
                  className={`flex items-center gap-1.5 text-[11px] font-semibold transition-colors ${
                    currentStep === s.id
                      ? 'text-blue-700 font-bold'
                      : currentStep > s.id
                      ? 'text-emerald-700'
                      : 'text-slate-400'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                      currentStep === s.id
                        ? 'bg-blue-600 text-white'
                        : currentStep > s.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {currentStep > s.id ? '✓' : s.id}
                  </div>
                  <span>{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Step Content (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* STEP 1: Profile & Organization */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-blue-900">
                    Dedicated Principal Engineer & Growth Strategist Assigned
                  </h4>
                  <p className="text-[11px] text-blue-700 mt-0.5">
                    Your venture profile initializes your personalized Zero-Bug handover protocol and Core Web Vitals telemetry guard.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Name & Title
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      id="onboarding-fullname"
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Organization / Company Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      id="onboarding-company"
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                      placeholder="e.g. Acme Health Corp"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Industry Domain
                  </label>
                  <select
                    id="onboarding-industry"
                    value={industry}
                    onChange={e => setIndustry(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500"
                  >
                    <option>SaaS & B2B Software</option>
                    <option>FinTech & WealthTech</option>
                    <option>HealthTech & MedTech</option>
                    <option>E-Commerce & High-Ticket Retail</option>
                    <option>AI & Hardware Robotics</option>
                    <option>Professional Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Team Size
                  </label>
                  <select
                    id="onboarding-teamsize"
                    value={teamSize}
                    onChange={e => setTeamSize(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500"
                  >
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>200+ Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Current Website URL
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="url"
                      id="onboarding-url"
                      value={websiteUrl}
                      onChange={e => setWebsiteUrl(e.target.value)}
                      placeholder="https://yoursite.com"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Project Goals & Growth Vectors */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider font-mono text-slate-800 mb-2">
                  Select Primary Growth Objective
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      id: 'saas_build' as const,
                      title: 'SaaS Platform & Web App',
                      desc: 'Full-stack Next.js 15, customer portals, subscription payments, real-time dashboards.',
                      badge: 'Zero-Bug SLA',
                    },
                    {
                      id: 'redesign' as const,
                      title: 'High-Conversion Redesign',
                      desc: 'Overhaul sluggish websites into 100/100 Core Web Vitals conversion engines.',
                      badge: 'Sub-Second Speed',
                    },
                    {
                      id: 'seo_growth' as const,
                      title: 'SEO Domination & Clusters',
                      desc: 'Programmatic landing pages, technical site audits, high-intent commercial rank growth.',
                      badge: 'Compounding SEO',
                    },
                    {
                      id: 'paid_roas' as const,
                      title: 'High-ROAS Paid Ads & Social',
                      desc: 'Targeted Google Ads, Meta funnels, conversion copywriting, LinkedIn audience scaling.',
                      badge: 'Target-Driven ROAS',
                    },
                  ].map(g => (
                    <div
                      key={g.id}
                      id={`goal-option-${g.id}`}
                      onClick={() => setPrimaryGoal(g.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        primaryGoal === g.id
                          ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500/20'
                          : 'bg-slate-50 border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xs font-bold text-slate-900">
                          {g.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                          {g.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {g.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Target Delivery Velocity
                  </label>
                  <select
                    id="onboarding-timeline"
                    value={launchTimeline}
                    onChange={e => setLaunchTimeline(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900"
                  >
                    <option value="30_days">30-Day Rapid MVP Sprint</option>
                    <option value="60_days">60-Day Full Architecture Overhaul</option>
                    <option value="90_days">90-Day Full-Funnel Build & Growth Sprint</option>
                    <option value="ongoing">Continuous Growth Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Estimated Growth Allocation
                  </label>
                  <select
                    id="onboarding-budget"
                    value={monthlyBudget}
                    onChange={e => setMonthlyBudget(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900"
                  >
                    <option>$2,500 - $5,000 / mo (Essential Growth)</option>
                    <option>$5,000 - $15,000 / mo (Scale-Up Velocity)</option>
                    <option>$15,000 - $35,000 / mo (Enterprise Dedicated)</option>
                    <option>Custom Enterprise Scope</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Link Accounts & Integrations */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="text-xs text-slate-600">
                Connect your existing tools to enable real-time telemetry syncing in the Unified Dashboard. All tokens are encrypted with client-side isolation.
              </div>

              <div className="space-y-3">
                {[
                  {
                    name: 'Google Search Console',
                    desc: 'Sync organic ranking velocity, indexed URLs, and Core Web Vitals field data.',
                    icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
                    badge: 'Organic Search',
                  },
                  {
                    name: 'GitHub Organization',
                    desc: 'Automated CI/CD Zero-Bug pipeline checks, Playwright e2e suites & PR previews.',
                    icon: <Cpu className="w-4 h-4 text-indigo-600" />,
                    badge: 'DevOps & QA',
                  },
                  {
                    name: 'Google Analytics 4 / PostHog',
                    desc: 'Real-time conversion funnel monitoring, user retention cohorts, and drop-off alerts.',
                    icon: <Target className="w-4 h-4 text-amber-600" />,
                    badge: 'Conversion CRO',
                  },
                  {
                    name: 'Meta Ads & Google Ads API',
                    desc: 'Live ROAS attribution, creative fatigue triggers, and CAC tracking.',
                    icon: <Zap className="w-4 h-4 text-blue-600" />,
                    badge: 'Paid Ads',
                  },
                  {
                    name: 'Figma Workspace',
                    desc: 'Direct design token sync, component library inspection, and UX review flows.',
                    icon: <Layers className="w-4 h-4 text-cyan-600" />,
                    badge: 'Design System',
                  },
                ].map(tool => {
                  const isConnected = connectedIntegrations.includes(tool.name);
                  return (
                    <div
                      key={tool.name}
                      id={`integration-row-${tool.name.replace(/\s+/g, '-').toLowerCase()}`}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-white border border-slate-200 shrink-0 mt-0.5">
                          {tool.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs font-bold text-slate-900">
                              {tool.name}
                            </h4>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold">
                              {tool.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {tool.desc}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        id={`toggle-connect-${tool.name.replace(/\s+/g, '-').toLowerCase()}`}
                        onClick={() => toggleIntegration(tool.name)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                          isConnected
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-500'
                        }`}
                      >
                        {isConnected ? '✓ Linked' : '+ Link Account'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 4: Platform Walkthrough & Tutorial */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
                {[
                  { title: 'Zero-Bug Telemetry', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
                  { title: 'Unified Dashboard', icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
                  { title: '90-Day Milestones', icon: <Clock className="w-3.5 h-3.5" /> },
                  { title: 'Lead Inquiries', icon: <Zap className="w-3.5 h-3.5" /> },
                ].map((tab, idx) => (
                  <button
                    key={tab.title}
                    type="button"
                    id={`tutorial-tab-${idx}`}
                    onClick={() => setActiveTutorialTab(idx)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTutorialTab === idx
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.title}</span>
                  </button>
                ))}
              </div>

              {/* Tutorial Cards Display */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                {activeTutorialTab === 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-700 font-mono text-xs font-bold uppercase">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Feature 1: Zero-Defect Handover SLA</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Automated CI/CD Quality Gating Before Any Production Cutover
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every pull request is automatically tested against 100+ viewport variations, accessibility standards (WCAG AA), and sub-millisecond Core Web Vitals checks. If anything breaks, our lead engineers remediate within 24 hours under contractual SLA.
                    </p>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 font-mono text-[11px] text-slate-800 space-y-1">
                      <div className="text-emerald-700 font-bold">✓ Lighthouse Score: Target 100/100 Performance</div>
                      <div className="text-blue-700 font-bold">✓ Sub-Second Global Edge Latency</div>
                      <div className="text-indigo-700 font-bold">✓ Monitored Quality SLA Window: Active (90 Days)</div>
                    </div>
                  </div>
                )}

                {activeTutorialTab === 1 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold uppercase">
                      <LayoutDashboard className="w-4 h-4" />
                      <span>Feature 2: Multi-Vector Unified Dashboard</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Real-Time Sync of Code Deployments, SEO Ranks & Paid ROAS
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Toggle seamlessly between your System Health, Organic SERP Tracking, Conversion Analytics, and Active Sprint Changelogs. No more fragmented spreadsheets or scattered agency reports.
                    </p>
                  </div>
                )}

                {activeTutorialTab === 2 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-indigo-700 font-mono text-xs font-bold uppercase">
                      <Clock className="w-4 h-4" />
                      <span>Feature 3: 90-Day Sprint Roadmap & Phase Sign-Offs</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Track Sprint Velocity from Day 1 Architecture to Day 90 Domination
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every 30 days is an official checkpoint. You review working software and verifiable organic traffic surges before advancing to the next growth vector.
                    </p>
                  </div>
                )}

                {activeTutorialTab === 3 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-amber-700 font-mono text-xs font-bold uppercase">
                      <Zap className="w-4 h-4" />
                      <span>Feature 4: Instant In-App Notification Center</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Actionable Alerts Directly in Your Navigation Bar
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Receive instant chimes when high-intent leads submit inquiries, when SEO keyword positions climb into Page 1, or when new sprint deliverables pass automated QA verification.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 5: Final Generated Blueprint */}
          {currentStep === 5 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-600/30">
                <Sparkles className="w-7 h-7 animate-pulse" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Growth Blueprint Generated for {companyName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Based on your {industry} sector and {launchTimeline.replace('_', '-')} timeline, we have tailored your initial sprint configuration.
                </p>
              </div>

              {/* Blueprint Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block font-mono text-[10px] uppercase">Venture Lead</span>
                  <span className="font-bold text-slate-900">{fullName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-mono text-[10px] uppercase">Primary Objective</span>
                  <span className="font-bold text-blue-700 uppercase font-mono">{primaryGoal.replace('_', ' ')}</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-mono text-[10px] uppercase">Sprint Target</span>
                  <span className="font-bold text-slate-900">{launchTimeline.replace('_', '-')} Velocity</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-mono text-[10px] uppercase">Connected Services</span>
                  <span className="font-bold text-emerald-700">{connectedIntegrations.length} Active Integrations</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Wizard Footer Navigation */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            id="onboarding-back-btn"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 disabled:opacity-40 disabled:hover:bg-transparent transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            id="onboarding-next-btn"
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>{currentStep === 5 ? 'Activate Growth Portal' : 'Continue'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
