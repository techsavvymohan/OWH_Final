'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
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
  Check,
  Sparkles,
  Zap,
  ChevronDown
} from 'lucide-react';

interface CoreCapabilitiesProps {
  onOpenProjectModal: (service?: string) => void;
}

interface CapabilityService {
  id: string;
  title: string;
  category: 'Build' | 'Grow';
  desc: string;
  features: string[];
  icon: React.ElementType;
  accentColor: string;
  badge: string;
}

const CORE_SERVICES: CapabilityService[] = [
  {
    id: 'corp-web',
    title: 'Custom Corporate Websites & Digital Flagships',
    category: 'Build',
    badge: 'Bespoke Architecture',
    desc: 'Stunning corporate websites designed to build instant trust with high-value clients, showcase your portfolio, and generate consistent qualified inquiries.',
    features: ['100% Bespoke Design — No Templates', 'Sub-Second Page Delivery (<1s)', 'Monitored Zero-Bug QA Standards'],
    icon: Building2,
    accentColor: 'blue',
  },
  {
    id: 'saas-apps',
    title: 'Custom Client Portals & Web Apps',
    category: 'Build',
    badge: 'Scalable Full-Stack',
    desc: 'Easy-to-use custom software, customer portals, interactive dashboards, and subscription platforms tailored to your business operations.',
    features: ['Seamless Mobile & Laptop Access', 'Secure User Authentication', 'Automated Workflow Integrations'],
    icon: Layers,
    accentColor: 'blue',
  },
  {
    id: 'ecommerce',
    title: 'High-Performance E-Commerce & Stores',
    category: 'Build',
    badge: 'Conversion Engine',
    desc: 'Lightning-fast online stores with 1-click checkouts, easy inventory management, payment integrations, and zero shopping cart lag.',
    features: ['Frictionless 1-Click Checkout', 'Shopify & Custom Commerce Setup', 'Mobile-Optimized Product Pages'],
    icon: ShoppingBag,
    accentColor: 'blue',
  },
  {
    id: 'redesign',
    title: 'Website Redesign & Speed Overhaul',
    category: 'Build',
    badge: 'Zero SEO Loss',
    desc: 'Upgrade your outdated, slow, or fragile website into a modern lead-generation engine with zero loss in your existing Google rankings.',
    features: ['Comprehensive 301 Redirect Migration', 'Sub-Second Speed Boost', 'Modern Mobile-First Layout'],
    icon: RefreshCw,
    accentColor: 'blue',
  },
  {
    id: 'tech-seo',
    title: 'Google Search Ranking & SEO Architecture',
    category: 'Grow',
    badge: 'Organic Influx',
    desc: 'Get your business ranked at the top of Google search results when prospective clients search for the products and services you sell.',
    features: ['High-Intent Commercial Keyword Setup', 'Automated Search Engine Indexing', 'Continuous Google Rank Monitoring'],
    icon: Search,
    accentColor: 'slate',
  },
  {
    id: 'security-builds',
    title: 'Bank-Grade Security & 24/7 Reliability',
    category: 'Build',
    badge: 'Target 99.9%+ Uptime',
    desc: 'Keep your website secure from vulnerabilities, spam, and downtime with enterprise SSL encryption, daily backups, and malware protection.',
    features: ['Enterprise SSL & Threat Shield', 'Daily Automated Site Backups', 'Target 99.9%+ Uptime Standards'],
    icon: ShieldCheck,
    accentColor: 'blue',
  },
  {
    id: 'responsive-mobile',
    title: 'Mobile Phone & Tablet Ergonomics',
    category: 'Build',
    badge: 'Multi-Screen QA',
    desc: 'Flawless viewing and button interaction across every smartphone model, iPad tablet, and laptop screen so mobile visitors convert into buyers.',
    features: ['Tested on iPhone & Android', 'Instant Finger-Touch Ergonomics', 'Zero Mobile Layout Shift'],
    icon: Smartphone,
    accentColor: 'blue',
  },
  {
    id: 'continuous-scale',
    title: 'High-ROAS Google & Social Ad Campaigns',
    category: 'Grow',
    badge: 'Lead Acquisition',
    desc: 'Turn key advertising campaigns on to generate immediate, profitable customer leads from Google Search, LinkedIn, Meta, and Instagram.',
    features: ['Google Search & Meta Ad Setup', 'Conversion Lead Tracking', 'Monthly ROI & Leads Reporting'],
    icon: TrendingUp,
    accentColor: 'slate',
  },
];

// Interactive Spotlight Card Component with Mouse Tracking & 3D Tilt
function InteractiveCapabilityCard({
  service,
  index,
  onOpenModal,
}: {
  service: CapabilityService;
  index: number;
  onOpenModal: (serviceTitle: string) => void;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = service.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-full rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/5 hover:border-slate-300 group cursor-default"
      >
        {/* Dynamic Cursor Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.07), transparent 60%)`,
          }}
        />

        {/* Shimmer Border Accent on Hover */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-500/30 transition-colors duration-300"
        />

        <div className="relative z-10">
          {/* Top Header Strip */}
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/20">
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-3" />
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 group-hover:border-slate-300 transition-colors">
                {service.badge}
              </span>
            </div>
          </div>

          {/* Title with smooth hover highlight */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-blue-600 transition-colors duration-200">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-600 mb-5 leading-relaxed">
            {service.desc}
          </p>

          {/* Feature List with interactive micro-animations */}
          <div className="space-y-2 pt-3.5 border-t border-slate-100 mb-5">
            {service.features.map(f => (
              <div
                key={f}
                className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-700 font-medium group/item"
              >
                <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover/item:bg-blue-100 transition-colors">
                  <Check className="w-2.5 h-2.5 text-blue-600 stroke-[3]" />
                </div>
                <span className="group-hover/item:text-slate-900 transition-colors">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button at bottom */}
        <div className="relative z-10 pt-2">
          <button
            type="button"
            onClick={() => onOpenModal(service.title)}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md hover:shadow-blue-600/20 group/btn cursor-pointer"
          >
            <span>Discuss This Capability</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function CoreCapabilities({ onOpenProjectModal }: CoreCapabilitiesProps) {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [filter, setFilter] = React.useState<'All' | 'Build' | 'Grow'>('All');
  const [showAll, setShowAll] = React.useState(false);

  // Scroll Progress across this section for background parallax illumination
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 90%', 'end 20%'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const beamWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const bgOrbY = useTransform(smoothProgress, [0, 1], [-40, 40]);

  const filteredServices = CORE_SERVICES.filter(s => {
    if (filter === 'All') return true;
    return s.category === filter;
  });

  // When 'All' is selected, show only 4 by default unless showAll is true
  const displayedServices = filter === 'All' && !showAll 
    ? filteredServices.slice(0, 4) 
    : filteredServices;

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 relative bg-gradient-to-b from-white via-slate-50/80 to-slate-100/50 border-t border-slate-200 overflow-hidden"
    >
      {/* Scroll-Linked Top Glowing Energy Beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-200 overflow-hidden">
        <motion.div
          style={{ width: beamWidth }}
          className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-slate-800 shadow-sm"
        />
      </div>

      {/* Dynamic Background Parallax Lighting for White + Black + Blue + Grey */}
      <motion.div
        style={{ y: bgOrbY }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100/40 rounded-full blur-[140px] pointer-events-none -z-10"
      />
      <motion.div
        style={{ y: bgOrbY }}
        className="absolute bottom-1/4 -left-20 w-96 h-96 bg-slate-200/50 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Viewport Stagger */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-blue-700 text-xs font-mono font-bold mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>OUR FULL RANGE OF SERVICES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Everything We Can Build & Grow For You
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-2xl leading-relaxed">
              From brand-new websites to custom portals, online stores, and Google ranking — pick what your business needs.
            </p>
          </div>

          {/* Filter Tabs with Animated Layout Pill Indicator */}
          <div className="flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-mono shrink-0 shadow-2xs">
            {(['All', 'Build', 'Grow'] as const).map(tab => {
              const isSelected = filter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setFilter(tab);
                    setShowAll(false);
                  }}
                  className={`relative px-4 py-2 rounded-xl transition-all cursor-pointer font-semibold ${
                    isSelected ? 'text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCapabilityFilter"
                      className="absolute inset-0 rounded-xl bg-blue-600 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab === 'All' ? 'All Services (8)' : `${tab} Services`}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 8-Card Interactive Animated Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {displayedServices.map((service, index) => (
              <InteractiveCapabilityCard
                key={service.id}
                service={service}
                index={index}
                onOpenModal={onOpenProjectModal}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Progressive Disclosure Toggle Button (When in 'All' view) */}
        {filter === 'All' && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 hover:border-blue-500 text-slate-800 hover:text-blue-600 font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>{showAll ? 'Show Fewer Services' : `See All ${CORE_SERVICES.length} Services & Solutions`}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? 'rotate-180 text-blue-600' : 'group-hover:translate-y-0.5'
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
