'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  Search, 
  Share2, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  Calendar,
  Layers,
  ArrowUpRight,
  Pause,
  Play,
  Flame,
  Sparkles
} from 'lucide-react';

interface UnifiedDashboardProps {
  onOpenProjectModal: (service?: string) => void;
}

const DASHBOARD_TABS = [
  { id: 'uptime', label: 'Is my site working right now?', shortLabel: 'Site Health', icon: Activity, metric: 'Target 99.9%+', color: 'text-blue-600' },
  { id: 'seo', label: 'Am I ranking on Google?', shortLabel: 'Google SEO', icon: Search, metric: 'Target SERP Growth', color: 'text-emerald-700' },
  { id: 'social', label: 'Is social media growing?', shortLabel: 'Social Reach', icon: Share2, metric: '73.8K Reach', color: 'text-purple-600' },
  { id: 'ads', label: 'Are ads making me money?', shortLabel: 'Ad Revenue', icon: DollarSign, metric: 'Targeting 3x-5x+ ROAS', color: 'text-emerald-700' },
];

export function UnifiedDashboard({ onOpenProjectModal }: UnifiedDashboardProps) {
  const [activeTab, setActiveTab] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % DASHBOARD_TABS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="dashboard" className="py-20 sm:py-28 relative bg-gradient-to-b from-slate-50/80 via-blue-50/40 to-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-sky-200/40 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>THE UNIFIED CONTROL TOWER</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            One Growth System.{' '}
            <span className="text-blue-600">One Real-Time Dashboard.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Eliminate the confusion of logging into disjointed portals or chasing unaccountable contractors. Monitor infrastructure health, Google search rankings, multi-channel social impressions, and paid media ROI in a single live telemetry hub.
          </p>
        </motion.div>

        {/* Unified Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-3xl glass-card overflow-hidden transition-all shadow-xl"
        >
          {/* Top Window Bar in Luxury Dark Graphite */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900 text-white gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500 shadow-2xs" />
                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-2xs" />
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-2xs" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2">
                app.onlywayonline.com/growth-hub
              </span>
            </div>

            {/* Tab Controls in Dark Graphite Pill Track */}
            <div className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex-wrap">
              {DASHBOARD_TABS.map((tab, idx) => {
                const Icon = tab.icon;
                const isCurrent = activeTab === idx;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-blue-600 text-white shadow-md font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="sm:hidden">{tab.shortLabel}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/80 transition-colors ml-1 cursor-pointer"
                title={isPaused ? 'Resume auto-cycle' : 'Pause auto-cycle'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Main Dashboard Screen View */}
          <div className="p-6 sm:p-8 min-h-[380px] bg-white">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div
                  key="tab-uptime"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        Is My Website Fast, Protected, and Working Right Now?
                      </h4>
                      <p className="text-xs text-slate-500">
                        Live site health, instant page response speed, and zero broken links.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      100% Operational Status
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
                    <div className="p-4 rounded-2xl neo-card">
                      <span className="text-[11px] text-slate-500 block">Uptime Target</span>
                      <span className="text-2xl font-bold text-emerald-700">99.9%+</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Monitored SLA target</span>
                    </div>
                    <div className="p-4 rounded-2xl neo-card">
                      <span className="text-[11px] text-slate-500 block">Page Load Latency</span>
                      <span className="text-2xl font-bold text-blue-700">&lt; 200ms</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Global edge CDN</span>
                    </div>
                    <div className="p-4 rounded-2xl neo-card">
                      <span className="text-[11px] text-slate-500 block">Broken Links</span>
                      <span className="text-2xl font-bold text-emerald-700">0 Faults</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Strict typed QA</span>
                    </div>
                    <div className="p-4 rounded-2xl neo-card">
                      <span className="text-[11px] text-slate-500 block">Speed Benchmark</span>
                      <span className="text-2xl font-bold text-emerald-700">100/100</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Core Web Vitals Pass</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl glass-panel-subtle border border-blue-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-800">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      <span>Monitored Stability Warranty: <strong>Day 48 of 90</strong> active</span>
                    </div>
                    <span className="font-mono text-blue-700 font-bold">
                      Automated Heartbeat Ping (60s)
                    </span>
                  </div>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  key="tab-seo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        Am I Ranking on Google and Getting Found by Buyers?
                      </h4>
                      <p className="text-xs text-slate-500">
                        Organic search impressions, Page 1 positions, and high-intent commercial buyer queries.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Compounding Organic Growth
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">Target SERP Positions</span>
                      <span className="text-2xl font-bold text-emerald-700">Page 1 Target</span>
                      <span className="text-[10px] text-emerald-700 block mt-1">High commercial intent</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">Monthly Organic Clicks</span>
                      <span className="text-2xl font-bold text-slate-900">22,480</span>
                      <span className="text-[10px] text-emerald-700 block mt-1">+41.2% MoM growth</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">Domain Trust Score</span>
                      <span className="text-2xl font-bold text-blue-700">58 / 100</span>
                      <span className="text-[10px] text-blue-600 block mt-1">High search equity</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
                    <div className="flex justify-between text-slate-500 text-[11px]">
                      <span>Target Indexed Route</span>
                      <span>Estimated Impressions</span>
                    </div>
                    <div className="flex justify-between text-slate-800">
                      <span>/services/headless-web-dev</span>
                      <span className="font-bold text-emerald-700">11,240 views (Top SERP Target)</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="tab-social"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        Is My Social Media Audience Growing and Building Trust?
                      </h4>
                      <p className="text-xs text-slate-500">
                        Content calendar synchronization across LinkedIn, X, and Instagram.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-mono font-bold border border-purple-200">
                      <Calendar className="w-3.5 h-3.5" />
                      18 Scheduled Posts Active
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">Total Cross-Platform Reach</span>
                      <span className="text-2xl font-bold text-purple-700">73.8K</span>
                      <span className="text-[10px] text-emerald-700 block mt-1">+52% vs previous period</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">Engagement Rate</span>
                      <span className="text-2xl font-bold text-slate-900">5.6%</span>
                      <span className="text-[10px] text-slate-500 block mt-1">High audience engagement</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">Inbound Inquiries</span>
                      <span className="text-2xl font-bold text-blue-700">96 leads</span>
                      <span className="text-[10px] text-blue-600 block mt-1">Direct from thought-leadership</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 3 && (
                <motion.div
                  key="tab-ads"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        Are My Paid Ads Delivering Qualified Leads and Revenue?
                      </h4>
                      <p className="text-xs text-slate-500">
                        Meta, Google & LinkedIn Ads tracked back to real customer leads and conversion funnels.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                      <Flame className="w-3.5 h-3.5" />
                      Target-Driven Multi-Touch ROAS
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">Monthly Ad Spend</span>
                      <span className="text-2xl font-bold text-slate-900">$5,000</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Meta & Google Search</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">Target Attributed Pipeline</span>
                      <span className="text-2xl font-bold text-emerald-700">$20,000+</span>
                      <span className="text-[10px] text-emerald-700 block mt-1">Target benchmark model</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">Cost Per Lead (CPL)</span>
                      <span className="text-2xl font-bold text-blue-700">Target Low CPL</span>
                      <span className="text-[10px] text-emerald-700 block mt-1">Funnel optimization</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] text-slate-500 block">Landing Page Conv.</span>
                      <span className="text-2xl font-bold text-emerald-700">Target 5-10%</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Optimized checkout funnel</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Action Footer */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-600 font-mono">
              Live updates delivered via monthly executive sprint reviews + dedicated private Slack channel.
            </span>
            <button
              id="dashboard-get-access-btn"
              onClick={() => onOpenProjectModal('growth-sprint')}
              className="inline-flex items-center gap-1.5 text-blue-700 font-bold hover:underline cursor-pointer"
            >
              <span>Commission Your Growth Dashboard</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
