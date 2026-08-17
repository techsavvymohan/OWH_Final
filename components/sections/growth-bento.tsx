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

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" {...props}>
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        fill="#0A66C2"
      />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" {...props}>
      <defs>
        <radialGradient id="ig-radial-bento" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6.5" fill="url(#ig-radial-bento)" />
      <path
        fill="#FFFFFF"
        d="M12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.338-8.87a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zM17.8 4H6.2A2.2 2.2 0 0 0 4 6.2v11.6A2.2 2.2 0 0 0 6.2 20h11.6a2.2 2.2 0 0 0 2.2-2.2V6.2A2.2 2.2 0 0 0 17.8 4zm.4 13.8a.4.4 0 0 1-.4.4H6.2a.4.4 0 0 1-.4-.4V6.2a.4.4 0 0 1 .4-.4h11.6a.4.4 0 0 1 .4.4v11.6z"
      />
    </svg>
  );
}

function XTwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="6" fill="#000000" />
      <path
        d="M18.244 5.25h2.556l-5.584 6.382 6.568 8.685h-5.143l-4.028-5.267-4.609 5.267H5.448l5.973-6.827L5.11 5.25h5.274l3.642 4.815zm-.897 13.535h1.416L8.73 6.697H7.21z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

interface GrowthBentoProps {
  onOpenProjectModal: (service?: string) => void;
}

const KEYWORD_RANKINGS = [
  { keyword: 'best website design company near me', rank: 'Top 3 Focus', change: '+14 ranks', volume: '3.2k/mo' },
  { keyword: 'custom website developer for business', rank: 'Page 1 Target', change: '+22 ranks', volume: '6.4k/mo' },
  { keyword: 'website that gets more customers', rank: 'Top 3 Focus', change: '+18 ranks', volume: '4.1k/mo' },
  { keyword: 'google ads agency with guaranteed results', rank: 'Page 1 Target', change: '+9 ranks', volume: '2.8k/mo' },
];

const SOCIAL_POSTS = [
  {
    platform: 'LinkedIn',
    icon: LinkedInIcon,
    tag: 'Industry Expert Post',
    reach: '28.4K',
    engagement: '5.6%',
    text: 'Why most businesses fail online: They build a website without a plan to get customers 🧵...',
  },
  {
    platform: 'Instagram',
    icon: InstagramIcon,
    tag: 'Visual Success Story',
    reach: '34.2K',
    engagement: '7.1%',
    text: 'Behind the scenes: How we test every website on 18 different screens before launching.',
  },
  {
    platform: 'X / Twitter',
    icon: XTwitterIcon,
    tag: 'How-We-Did-It Thread',
    reach: '42.8K',
    engagement: '4.8%',
    text: 'We built a website that loads faster than you can blink — here\'s how we did it 👇',
  },
];

const CREATIVE_DECKS = [
  { title: 'Logo, Colors & Brand Guidelines', color: 'from-blue-600 to-indigo-600', icon: Palette },
  { title: 'Ad Banners & Social Media Graphics', color: 'from-emerald-600 to-teal-600', icon: Flame },
  { title: 'Business Presentations & Pitch Decks', color: 'from-purple-600 to-pink-600', icon: Layers },
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
              <span>MARKETING & GETTING YOU CUSTOMERS</span>
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
            type="button"
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
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">So customers find you on Google</span>
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
                  <span>1. Website Speed & Google Setup</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>2. Pages That Rank on Google</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>3. Getting Other Sites to Link to You</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>4. Tracking What Works & What Doesn’t</span>
                </div>
                <div className="sm:col-span-2 flex items-center gap-2 p-2 rounded-xl bg-emerald-100/70 text-emerald-950 font-bold border border-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0 animate-pulse" />
                  <span>5. Ready for AI Search (ChatGPT, Google AI)</span>
                </div>
              </div>
            </div>

            {/* Keyword Performance Table */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs">
              <div className="flex justify-between items-center pb-2.5 mb-2.5 border-b border-slate-200 text-slate-500 font-semibold text-[11px]">
                <span>Commercial Target Keyword</span>
                <span>SERP Position</span>
              </div>
              <div className="space-y-2">
                {KEYWORD_RANKINGS.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <span className="text-slate-800 font-medium truncate max-w-[200px]">
                      {item.keyword}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-emerald-700 font-bold">{item.rank}</span>
                      <span className="text-[10px] text-slate-500 bg-emerald-100/60 px-1.5 py-0.5 rounded">
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 (Span 6/12): Social Media Presence & Brand Trust */}
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
                <div className="flex gap-2 flex-wrap">
                  {SOCIAL_POSTS.map((post, idx) => {
                    const PostIcon = post.icon;
                    const isSelected = activeSocialIndex === idx;
                    return (
                      <button
                        type="button"
                        key={post.platform}
                        onClick={() => setActiveSocialIndex(idx)}
                        className={`inline-flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-xl transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-slate-900 text-white font-bold border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        <PostIcon className="w-4 h-4" />
                        <span>{post.platform}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Social Media Posts That Build Your Reputation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                We write professional posts, design eye-catching graphics, and grow your followers on LinkedIn, X (Twitter), and Instagram — so people trust your brand.
              </p>
            </div>

            {/* Social Post Preview Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-slate-800 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span>Scheduled Content Engine · {SOCIAL_POSTS[activeSocialIndex].platform}</span>
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
                  <span className="text-blue-600 font-bold text-sm">
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
                  Your Complete Brand Look
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Brand Identity & Performance Design Studio
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Your logo, colors, fonts, business cards, social media templates, ad banners, and presentations — all matching your website&apos;s look for a professional brand.
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
                    Goal: ₹3–₹5 Back for Every ₹1 Spent
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">Google Ads · Facebook & Instagram Ads</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Every Ad Rupee Tracked to a Real Lead, Not a Guess
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                We run Google, Facebook, Instagram, and LinkedIn ads that bring real customers — not just clicks. Every rupee is tracked so you know exactly what you’re getting back.
              </p>
            </div>

            {/* Interactive ROI Calculator */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <label htmlFor="growth-media-budget-slider" className="text-slate-600 font-semibold cursor-pointer">
                    Monthly Media Budget:
                  </label>
                  <span className="text-emerald-700 font-bold font-mono text-sm">
                    ${adSpend.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  id="growth-media-budget-slider"
                  name="media_budget"
                  type="range"
                  aria-label="Monthly Media Budget Slider"
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
                  <span className="text-[10px] font-mono text-slate-500 block">Expected Revenue [Modeled ~4.2x]</span>
                  <span className="text-lg sm:text-xl font-bold font-mono text-emerald-700">
                    ${estimatedRevenue.toLocaleString()}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-2xs">
                  <span className="text-[10px] font-mono text-slate-500 block">Estimated Customer Inquiries</span>
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
