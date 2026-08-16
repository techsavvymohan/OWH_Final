'use client';

import * as React from 'react';
import { 
  Building2, 
  Layers, 
  ShoppingBag, 
  RefreshCw, 
  Search, 
  ShieldCheck, 
  Smartphone, 
  TrendingUp, 
  ArrowRight,
  Check
} from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';

interface CoreCapabilitiesProps {
  onOpenProjectModal: (service?: string) => void;
}

const CORE_SERVICES = [
  {
    id: 'corp-web',
    title: 'Custom Corporate Websites & Digital Flagships',
    category: 'Build',
    desc: 'Stunning corporate websites designed to build instant trust with high-value clients, showcase your portfolio, and generate consistent qualified inquiries.',
    features: ['100% Bespoke Design — No Templates', 'Sub-Second Page Delivery (<1s)', 'Monitored Zero-Bug QA Standards'],
    icon: Building2,
  },
  {
    id: 'saas-apps',
    title: 'Custom Client Portals & Web Apps',
    category: 'Build',
    desc: 'Easy-to-use custom software, customer portals, interactive dashboards, and subscription platforms tailored to your business operations.',
    features: ['Seamless Mobile & Laptop Access', 'Secure User Authentication', 'Automated Workflow Integrations'],
    icon: Layers,
  },
  {
    id: 'ecommerce',
    title: 'High-Performance E-Commerce & Online Stores',
    category: 'Build',
    desc: 'Lightning-fast online stores with 1-click checkouts, easy inventory management, Stripe/PayPal payment setup, and zero shopping cart lag.',
    features: ['Frictionless 1-Click Checkout', 'Shopify & Custom Commerce Setup', 'Mobile-Optimized Product Pages'],
    icon: ShoppingBag,
  },
  {
    id: 'redesign',
    title: 'Website Redesign & Speed Overhaul',
    category: 'Build',
    desc: 'Upgrade your outdated, slow, or fragile website into a modern lead-generation engine with zero loss in your existing Google rankings.',
    features: ['Comprehensive 301 Redirect & Authority Migration', 'Sub-Second Speed Boost', 'Modern Mobile-First Layout'],
    icon: RefreshCw,
  },
  {
    id: 'tech-seo',
    title: 'Google Search Ranking & SEO Architecture',
    category: 'Grow',
    desc: 'Get your business ranked at the top of Google search results when prospective clients search for the products and services you sell.',
    features: ['High-Intent Commercial Keyword Setup', 'Automated Search Engine Indexing', 'Continuous Google Rank Monitoring'],
    icon: Search,
  },
  {
    id: 'security-builds',
    title: 'Bank-Grade Security & 24/7 Reliability',
    category: 'Build',
    desc: 'Keep your website secure from vulnerabilities, spam, and downtime with enterprise SSL encryption, daily backups, and malware protection.',
    features: ['Enterprise SSL & Threat Shield', 'Daily Automated Site Backups', 'Target 99.9%+ Uptime Standards'],
    icon: ShieldCheck,
  },
  {
    id: 'responsive-mobile',
    title: 'Mobile Phone & Tablet Ergonomics',
    category: 'Build',
    desc: 'Flawless viewing and button interaction across every smartphone model, iPad tablet, and laptop screen so mobile visitors convert into buyers.',
    features: ['Tested on iPhone & Android', 'Instant Finger-Touch Ergonomics', 'Zero Mobile Layout Shift'],
    icon: Smartphone,
  },
  {
    id: 'continuous-scale',
    title: 'High-ROAS Google & Social Ad Campaigns',
    category: 'Grow',
    desc: 'Turn key advertising campaigns on to generate immediate, profitable customer leads from Google Search, LinkedIn, Meta, and Instagram.',
    features: ['Google Search & Meta Ad Setup', 'Conversion Lead Tracking', 'Monthly ROI & Leads Reporting'],
    icon: TrendingUp,
  },
];

export function CoreCapabilities({ onOpenProjectModal }: CoreCapabilitiesProps) {
  const [filter, setFilter] = React.useState<'All' | 'Build' | 'Grow'>('All');

  const filteredServices = CORE_SERVICES.filter(s => {
    if (filter === 'All') return true;
    return s.category === filter;
  });

  return (
    <section className="py-20 sm:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold mb-2">
              Full Spectrum Execution
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              End-to-End Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Whether building an enterprise platform from scratch or scaling an existing system, our technical and QA standards never compromise.
            </p>
          </div>

          {/* Filter Tabs with Neumorphic Inset Track */}
          <div className="flex items-center p-1 rounded-2xl neo-inset text-xs font-mono">
            {['All', 'Build', 'Grow'].map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab as any)}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-blue-600 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab === 'All' ? 'All Services (8)' : `${tab} Wing`}
              </button>
            ))}
          </div>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map(service => {
            const Icon = service.icon;
            return (
              <TiltCard
                key={service.id}
                maxTilt={4}
                className="rounded-3xl neo-card-hover p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 neo-pill group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                      service.category === 'Grow'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}>
                      {service.category.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                    {service.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenProjectModal(service.title)}
                  className="w-full py-2.5 rounded-xl neo-button text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                >
                  <span>Select Capability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
