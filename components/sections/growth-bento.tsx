'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Share2, 
  Palette, 
  Target, 
  ArrowUpRight, 
  Sparkles, 
  Search, 
  DollarSign, 
  Flame, 
  BarChart3, 
  Layers 
} from 'lucide-react';

interface GrowthBentoProps {
  onOpenProjectModal: (service?: string) => void;
}

const KEYWORD_RANKINGS = [
  { keyword: 'zero-bug web engineering agency', rank: 'Top 3 Focus', change: '+14 ranks', volume: '3.2k/mo' },
  { keyword: 'next.js 15 enterprise developers', rank: 'Page 1 Target', change: '+22 ranks', volume: '6.4k/mo' },
  { keyword: 'b2b conversion rate optimization agency', rank: 'Top 3 Focus', change: '+18 ranks', volume: '4.1k/mo' },
  { keyword: 'high roas paid media engineering', rank: 'Page 1 Target', change: '+9 ranks', volume: '2.8k/mo' },
];

const SOCIAL_POSTS = [
  {
    platform: 'LinkedIn',
    tag: 'B2B Thought Leadership',
    reach: '28.4K',
    engagement: '5.6%',
    text: 'Why high-growth SaaS companies fail their launches: The architecture was built in isolation from the paid acquisition funnel 🧵...',
  },
  {
    platform: 'Instagram',
    tag: 'Visual Brand Case Study',
    reach: '34.2K',
    engagement: '7.1%',
    text: 'Zero-Bug Handover Protocol: Inside our 4-stage automated QA and stability verification gate.',
  },
  {
    platform: 'X / Twitter',
    tag: 'Technical Breakdown',
    reach: '42.8K',
    engagement: '4.8%',
    text: 'How we achieved 100/100 Core Web Vitals and 18ms INP across 24 dynamic server-action routes in Next.js 15 👇',
  },
];

const CREATIVE_DECKS = [
  { title: 'Brand Identity Systems & Design Tokens', color: 'from-blue-600 to-indigo-600', icon: Palette },
  { title: 'High-Converting Multi-Format Ad Collateral', color: 'from-emerald-600 to-teal-600', icon: Flame },
  { title: 'Investor Pitch Decks & Sales Enablement', color: 'from-purple-600 to-pink-600', icon: Layers },
];

export function GrowthBento({ onOpenProjectModal }: GrowthBentoProps) {
  const [activeSocialIndex, setActiveSocialIndex] = React.useState(0);
  const [adSpend, setAdSpend] = React.useState(5000);
  const [activeCreativeDeck, setActiveCreativeDeck] = React.useState(0);

  // Dynamic ROAS calculation: ~4.2x target benchmark model
  const estimatedRevenue = Math.round(adSpend * 4.2);
  const estimatedLeads = Math.round(adSpend / 38);

  return (
    <section id="growth" className="py-20 sm:py-28 relative bg-gradient-to-b from-white via-emerald-50/40 to-slate-50/80 border-t border-slate-200 overflow-hidden">
      {/* Background glow in emerald */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-200/50 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold border border-emerald-200">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>MARKETING & CLIENT ACQUISITION WING</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Google SEO, Social Media, & Paid Ads.{' '}
              <span className="text-emerald-700">Under One Growth Partner.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Stop wasting budget on separate agencies that don&apos;t talk to each other. We manage your Google search rankings, social media content, and targeted ad campaigns to bring you consistent, high-paying clients.
            </p>
          </div>

          <button
            id="growth-bento-discuss-btn"
            onClick={() => onOpenProjectModal('growth-sprint')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shrink-0 cursor-pointer shadow-md hover:shadow-lg shadow-emerald-600/20"
          >
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span>Get Your Growth Blueprint</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4-Card Bento Grid with Scroll Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1 (Span 6/12): SEO Growth Retainer Ranking Trend */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="md:col-span-12 lg:col-span-6 rounded-3xl bg-white border border-emerald-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Search className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    Target: Compounding Organic Growth
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">Programmatic SEO · Dynamic Schema</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Built to Get Found — on Google Today & AI Search Tomorrow
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                SEO built from day one, not bolted on after. We create structured topic clusters and search architecture so buyers searching for your exact products and services find your business first.
              </p>

              {/* 5 SaaS SEO Retainer Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-[11px] font-mono">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>1. Technical SEO & Schema</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>2. Programmatic Content Engine</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>3. Partnerships & Backlinks</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>4. Conversion Analytics (CRO)</span>
                </div>
                <div className="sm:col-span-2 flex items-center gap-2 p-2 rounded-xl bg-emerald-100/70 text-emerald-950 font-bold border border-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0 animate-pulse" />
                  <span>5. AI-Search Readiness (ChatGPT, Perplexity & SearchGPT Optimization)</span>
                </div>
              </div>
            </div>

            {/* Keyword Ranking Tracker */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-1 border-b border-slate-200">
                <span>Target High-Intent Commercial Keyword</span>
                <span>SERP Target</span>
              </div>
              {KEYWORD_RANKINGS.map(item => (
                <div
                  key={item.keyword}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">
                      {item.keyword}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      Monthly search volume: {item.volume}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-emerald-700 font-bold">
                      {item.change}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 font-mono font-bold border border-emerald-200">
                      {item.rank}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2 (Span 6/12): Social Media Brand Dominance */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="md:col-span-12 lg:col-span-6 rounded-3xl bg-white border border-emerald-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Share2 className="w-5 h-5" />
                </div>
                <div className="flex gap-1.5">
                  {SOCIAL_POSTS.map((post, idx) => (
                    <button
                      key={post.platform}
                      onClick={() => setActiveSocialIndex(idx)}
                      className={`text-xs font-mono px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeSocialIndex === idx
                          ? 'bg-emerald-600 text-white font-bold shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {post.platform}
                    </button>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Consistent Social Content That Builds Real Authority
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Platform-native thought-leadership copywriting, high-engagement creative carousels, and targeted audience nurturing across LinkedIn, X, and Instagram.
              </p>
            </div>

            {/* Social Post Preview Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-emerald-700 font-bold">
                  ● Scheduled Content Engine · {SOCIAL_POSTS[activeSocialIndex].platform}
                </span>
                <span className="text-[10px] font-mono text-slate-500 font-medium">
                  {SOCIAL_POSTS[activeSocialIndex].tag}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-medium italic leading-relaxed p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                &ldquo;{SOCIAL_POSTS[activeSocialIndex].text}&rdquo;
              </p>
              <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-slate-500 block text-[10px]">Estimated Organic Impressions</span>
                  <span className="text-slate-900 font-bold text-sm">
                    {SOCIAL_POSTS[activeSocialIndex].reach}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-slate-500 block text-[10px]">Engagement Rate</span>
                  <span className="text-emerald-700 font-bold text-sm">
                    {SOCIAL_POSTS[activeSocialIndex].engagement}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 (Span 6/12): Graphic Design Studio Deck Stack */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="md:col-span-12 lg:col-span-6 rounded-3xl bg-white border border-emerald-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Palette className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  Design System Synergy
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Brand Identity & Performance Design Studio
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Brand architecture guidelines, high-converting ad variations, pitch decks, and digital collateral that reuse your exact website design tokens for unified authority.
              </p>
            </div>

            {/* Creative Card Stack */}
            <div className="space-y-2.5">
              {CREATIVE_DECKS.map((deck, index) => {
                const Icon = deck.icon;
                const isSelected = activeCreativeDeck === index;
                return (
                  <div
                    key={deck.title}
                    onClick={() => setActiveCreativeDeck(index)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50/70 border-emerald-400 shadow-xs scale-[1.01]'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${deck.color} flex items-center justify-center text-white shadow-2xs`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900">
                        {deck.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold">
                      {isSelected ? 'Selected Deck' : 'View Spec'}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Card 4 (Span 6/12): Paid Ads Campaigns ROI Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="md:col-span-12 lg:col-span-6 rounded-3xl bg-white border border-emerald-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Target className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    Target Benchmark: 3x–5x+ ROAS
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">Meta CAPI · Google Ads Conversion Funnel</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Every Ad Rupee Tracked to a Real Lead, Not a Guess
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Full-funnel Google, Meta, and LinkedIn ad campaigns connected directly to high-converting landing pages with server-side lead tracking so you know your exact customer acquisition cost.
              </p>
            </div>

            {/* Interactive ROI Calculator */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-600 font-semibold">Monthly Media Budget:</span>
                  <span className="text-emerald-700 font-bold font-mono text-sm">
                    ${adSpend.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={25000}
                  step={500}
                  value={adSpend}
                  onChange={e => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-2xs">
                  <span className="text-[10px] font-mono text-slate-500 block">Target Pipeline Revenue (Model)</span>
                  <span className="text-lg sm:text-xl font-bold font-mono text-emerald-700">
                    ${estimatedRevenue.toLocaleString()}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-2xs">
                  <span className="text-[10px] font-mono text-slate-500 block">Estimated Qualified Inquiries</span>
                  <span className="text-lg sm:text-xl font-bold font-mono text-slate-900">
                    ~{estimatedLeads} target
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
