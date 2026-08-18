'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Layers, Cpu, ShieldCheck, Database, KeyRound, Webhook, BarChart3, Receipt, ArrowRight, Sparkles } from 'lucide-react';

interface SaaSModularSceneProps {
  onOpenProjectModal?: (service?: string) => void;
}

const MODULE_NODES = [
  { icon: KeyRound, label: 'User Auth & RBAC', desc: 'Enterprise JWT, OAuth & Session Isolation', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Database, label: 'Postgres & Edge DB', desc: 'Strict Schema, Sub-10ms Global Reads', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Webhook, label: 'API & Micro-Services', desc: 'Type-Safe Endpoints, Zero Runtime Errors', color: 'text-violet-600', bg: 'bg-violet-50' },
  { icon: BarChart3, label: 'Real-Time Telemetry', desc: 'Live Ingestion, Cohort Analytics & Logs', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Receipt, label: 'Automated Billing', desc: 'Stripe, Invoicing & Subscription Sync', color: 'text-amber-600', bg: 'bg-amber-50' },
];

export function SaaSModularScene({ onOpenProjectModal }: SaaSModularSceneProps) {
  const [activeNode, setActiveNode] = React.useState<number>(0);

  return (
    <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 border border-slate-200 shadow-xl overflow-hidden my-12">
      {/* Background Studio Light Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200/80 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>MODULAR SOFTWARE ARCHITECTURE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            We Engineer Complete Digital Systems, Not Just Pages.
          </h3>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            From secure multi-tenant authentication and high-throughput databases to automated recurring billing and live telemetry, every module is built to scale smoothly under load.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenProjectModal?.('Custom SaaS Architecture')}
          className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs font-mono flex items-center gap-2 shadow-md hover:scale-105 transition-all self-start md:self-auto cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Discuss SaaS Build</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Center 3D Composition Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* 3D Visual Render Showcase (7 cols) */}
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-slate-100 aspect-[16/9] border border-slate-200 shadow-sm group">
          <Image
            src="/assets/visuals/saas-modular-core-3d.jpg"
            alt="3D Modular SaaS Software Core Architecture"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono font-bold text-slate-800 shadow-xs">
            Studio PBR Render: Connected Core Engine
          </div>
        </div>

        {/* Interactive Module Spec List (5 cols) */}
        <div className="lg:col-span-5 space-y-2.5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
            Engineered Building Blocks:
          </span>
          {MODULE_NODES.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = activeNode === idx;
            return (
              <button
                key={node.label}
                type="button"
                onClick={() => setActiveNode(idx)}
                className={`w-full p-3.5 rounded-2xl text-left transition-all border cursor-pointer flex items-start gap-3 ${
                  isSelected
                    ? 'bg-white border-blue-500 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white/70 hover:bg-white border-slate-200/90 shadow-2xs hover:border-slate-300'
                }`}
              >
                <div className={`p-2 rounded-xl ${node.bg} ${node.color} shrink-0 mt-0.5`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900">{node.label}</h4>
                    {isSelected && (
                      <span className="text-[10px] font-mono text-blue-600 font-bold">Active SLA</span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{node.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
