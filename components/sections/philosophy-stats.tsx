'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'motion/react';
import { Target, Zap, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';

interface StatItem {
  prefix: string;
  targetNum: number;
  decimals: number;
  prefixSymbol?: string;
  suffixSymbol?: string;
  unit: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  color: string;
  accentBg: string;
  borderColor: string;
}

const STATS: StatItem[] = [
  {
    prefix: 'ONLY',
    targetNum: 0,
    decimals: 0,
    unit: 'Generic Templates',
    title: 'Only Means Bespoke Strategy',
    desc: 'Every system is uniquely engineered for your specific unit economics, buyer persona, and industry positioning.',
    icon: Target,
    color: 'text-blue-600',
    accentBg: 'bg-blue-50',
    borderColor: 'hover:border-blue-300',
  },
  {
    prefix: 'WAY',
    targetNum: 0.2,
    decimals: 1,
    suffixSymbol: 's',
    unit: 'Global Edge TTFB',
    title: 'Way Means High-Speed Velocity',
    desc: 'Frictionless execution with sub-second page delivery, zero console faults, and seamless checkout journeys.',
    icon: Zap,
    color: 'text-amber-600',
    accentBg: 'bg-amber-50',
    borderColor: 'hover:border-amber-300',
  },
  {
    prefix: 'ONLINE',
    targetNum: 5.12,
    decimals: 2,
    suffixSymbol: 'x',
    unit: 'Average Client ROAS',
    title: 'Online Means Compound Growth',
    desc: 'Organic search indexing authority, multi-channel thought-leadership, and high-converting ad pipelines.',
    icon: TrendingUp,
    color: 'text-emerald-700',
    accentBg: 'bg-emerald-50',
    borderColor: 'hover:border-emerald-300',
  },
  {
    prefix: 'STANDARD',
    targetNum: 100,
    decimals: 0,
    suffixSymbol: '%',
    unit: 'Zero-Defect SLA Guarantee',
    title: 'Our Relentless Quality Gate',
    desc: 'Lighthouse 100 benchmarks across Performance, SEO, Best Practices, and Accessibility backed by a 90-day monitored window.',
    icon: Award,
    color: 'text-purple-600',
    accentBg: 'bg-purple-50',
    borderColor: 'hover:border-purple-300',
  },
];

function StatCounter({
  targetNum,
  decimals = 0,
  prefixSymbol = '',
  suffixSymbol = '',
  duration = 1.8,
}: {
  targetNum: number;
  decimals?: number;
  prefixSymbol?: string;
  suffixSymbol?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [currentValue, setCurrentValue] = React.useState('0');

  React.useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const startNum = 0;

    const animateCount = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = (timestamp - startTimestamp) / (duration * 1000);
      const progress = Math.min(elapsed, 1);
      // Smooth cubic-out easing
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = startNum + (targetNum - startNum) * ease;
      setCurrentValue(val.toFixed(decimals));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCurrentValue(targetNum.toFixed(decimals));
      }
    };

    const animId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animId);
  }, [isInView, targetNum, decimals, duration]);

  return (
    <span ref={ref} className="tabular-nums font-mono">
      {prefixSymbol}
      {currentValue}
      {suffixSymbol}
    </span>
  );
}

export function PhilosophyStats() {
  const sectionRef = React.useRef<HTMLElement>(null);

  // Framer Motion useScroll hook for parallax and smooth entrance
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.4]);
  const smoothGlow = useSpring(glowOpacity, { stiffness: 90, damping: 20 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 sm:py-28 relative bg-slate-50/70 border-t border-slate-200 overflow-hidden"
    >
      {/* Dynamic Background Parallax Lighting */}
      <motion.div
        style={{ y: backgroundY, opacity: smoothGlow }}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-200/30 via-emerald-100/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-pill text-blue-700 text-xs font-mono font-bold border border-blue-200/90 mb-3">
            <span>ABOUT ONLYWAYONLINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Only Means Strategy.{' '}
            <span className="text-blue-600">Way Means Velocity.</span>{' '}
            <span className="text-emerald-700">Online Means Compound Growth.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            OnlyWayOnline was founded to replace traditional agencies that build a site and disappear. We combine custom high-speed web design with monthly marketing operations to deliver predictable, ongoing business growth.
          </p>
        </motion.div>

        {/* 4 Stat Cards with Staggered Viewport Reveal & Live Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TiltCard maxTilt={5} className="rounded-3xl neo-card-hover p-6 sm:p-8 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono font-bold tracking-widest text-slate-500">
                        {stat.prefix}
                      </span>
                      <div className={`p-2 rounded-xl ${stat.accentBg} neo-pill group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-4 h-4 ${stat.color}`} />
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 tracking-tight">
                        <StatCounter
                          targetNum={stat.targetNum}
                          decimals={stat.decimals}
                          prefixSymbol={stat.prefixSymbol}
                          suffixSymbol={stat.suffixSymbol}
                        />
                      </div>
                      <div className="text-xs font-mono text-slate-600 mt-0.5">
                        {stat.unit}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {stat.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Guaranteed Deliverable</span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

