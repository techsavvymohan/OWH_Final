'use client';

import * as React from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  Code2, 
  Rocket, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Zap, 
  Target 
} from 'lucide-react';

interface ProofTimelineProps {
  onOpenProjectModal: (service?: string) => void;
}

const PHASES = [
  {
    id: 1,
    range: 'Days 1–30',
    dayStart: 1,
    dayEnd: 30,
    title: 'Phase 1: Custom Architecture & Zero-Bug Handover',
    tagline: 'Your custom website built, cross-device tested, and launched with sub-second speed',
    color: 'blue',
    icon: Code2,
    deliverables: [
      'Understanding your business, planning your website layout & design',
      'Building your website with the fastest modern technology',
      'Setting up your website so Google can find and rank it',
      'Testing everything on phones, tablets & laptops — zero errors allowed',
      'Launching your website worldwide with bank-level security',
    ],
    metric: 'Your Website Goes Live — Fast, Secure & Error-Free',
  },
  {
    id: 2,
    range: 'Days 31–60',
    dayStart: 31,
    dayEnd: 60,
    title: 'Phase 2: Growth Engine Activation & Google Indexing',
    tagline: 'Google search indexing live, social content active, and targeted ads bringing in leads',
    color: 'emerald',
    icon: Rocket,
    deliverables: [
      'Getting your website listed on Google for the searches your customers make',
      'Starting your social media content on LinkedIn, X, and Instagram',
      'Launching Google & Facebook ad campaigns with accurate lead tracking',
      'Designing ad banners and creatives that match your brand',
      'Your 90-day free fix and monitoring guarantee begins',
    ],
    metric: 'Customers Start Finding You Online',
  },
  {
    id: 3,
    range: 'Days 61–90',
    dayStart: 61,
    dayEnd: 90,
    title: 'Phase 3: Conversion Optimization & Compound Scale',
    tagline: 'Refining page conversion rates using real visitor data to compound incoming revenue',
    color: 'emerald',
    icon: TrendingUp,
    deliverables: [
      'Improving your website based on how real visitors use it',
      'Getting trusted websites to link to yours for higher Google ranking',
      'Putting more ad budget into what\'s working best to get more customers',
      'Quarterly review meeting to plan your next steps',
      'Final quality check & option to continue monthly partnership',
    ],
    metric: 'Growing Revenue & A Clear Plan Forward',
  },
];

export function ProofTimeline({ onOpenProjectModal }: ProofTimelineProps) {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [activePhaseIndex, setActivePhaseIndex] = React.useState(0);

  // Framer Motion useScroll hook tracking scroll progress across this 90-day sprint section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'end 30%'],
  });

  const sprintProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const smoothSprint = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const sprintScaleX = useTransform(smoothSprint, [0, 1], [0, 1]);

  const activePhase = PHASES[activePhaseIndex];

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="py-20 sm:py-28 relative bg-gradient-to-b from-white via-blue-50/30 to-emerald-50/30 border-t border-slate-200 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-pill text-blue-700 text-xs font-mono font-bold border border-blue-200/90 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>THE 90-DAY LAUNCH & GROWTH SPRINT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            From Blueprint to{' '}
            <span className="text-emerald-700">Compounding Revenue Engine.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            The defining difference vs. traditional web design shops: <strong>we prove the website converts because we engineer the growth vectors that drive qualified buyers to it.</strong>
          </p>
        </motion.div>

        {/* Scroll-Driven Dynamic 90-Day Sprint Progress Bar */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-2xl neo-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono mb-2.5 gap-2">
            <div className="flex items-center gap-2 text-slate-700 font-bold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
              <span>Sprint Velocity Timeline:</span>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-2 text-[10px] sm:text-[11px] text-slate-500 font-semibold overflow-x-auto pb-0.5 sm:pb-0">
              <span className={`shrink-0 ${activePhaseIndex === 0 ? 'text-blue-600 font-bold' : ''}`}>Day 1: Build</span>
              <span className="shrink-0 text-slate-400">→</span>
              <span className={`shrink-0 ${activePhaseIndex === 1 ? 'text-emerald-600 font-bold' : ''}`}>Day 30: Growth</span>
              <span className="shrink-0 text-slate-400">→</span>
              <span className={`shrink-0 ${activePhaseIndex === 2 ? 'text-emerald-700 font-bold' : ''}`}>Day 90: Scale</span>
            </div>
          </div>

          <div className="relative h-2.5 rounded-full neo-inset p-0.5 overflow-hidden">
            <motion.div
              style={{ scaleX: sprintScaleX }}
              className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 origin-left shadow-xs"
            />
          </div>
        </div>

        {/* Phase Step Selectors with Viewport Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {PHASES.map((phase, idx) => {
            const Icon = phase.icon;
            const isSelected = activePhaseIndex === idx;
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-6 rounded-2xl transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? phase.color === 'emerald'
                      ? 'glass-card border-2 border-emerald-500 shadow-md scale-[1.02]'
                      : 'glass-card border-2 border-blue-500 shadow-md scale-[1.02]'
                    : 'neo-card hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${
                    isSelected
                      ? phase.color === 'emerald'
                        ? 'bg-emerald-700 text-white'
                        : 'bg-blue-700 text-white'
                      : 'neo-inset text-slate-700'
                  }`}>
                    {phase.range}
                  </span>
                  <div className={`p-1.5 rounded-lg ${
                    isSelected ? (phase.color === 'emerald' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800') : 'neo-inset text-slate-500'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-600">
                  {phase.tagline}
                </p>

                {isSelected && (
                  <motion.div
                    layoutId="phaseActiveLine"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-600"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Box with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="rounded-3xl glass-card p-6 sm:p-8 shadow-sm"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full neo-pill text-blue-700 border border-blue-200">
                    {activePhase.range} DELIVERABLES
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {activePhase.metric}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {activePhase.title}
                </h4>
              </div>

              <button
                onClick={() => onOpenProjectModal(activePhase.title)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shrink-0 cursor-pointer shadow-md shadow-blue-600/20 hover:scale-105"
              >
                <Sparkles className="w-4 h-4" />
                <span>Discuss {activePhase.range} Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {activePhase.deliverables.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3 p-3.5 rounded-2xl neo-inset text-xs text-slate-700 leading-relaxed font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-2xs">
                    ✓
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

