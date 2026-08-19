'use client';

import * as React from 'react';
import Image from 'next/image';
import { ShoppingBag, Zap, ShieldCheck, Check, Sparkles, ArrowRight, CreditCard, RefreshCw } from 'lucide-react';

interface EcommerceStudioSceneProps {
  onOpenProjectModal?: (service?: string) => void;
}

export function EcommerceStudioScene({ onOpenProjectModal }: EcommerceStudioSceneProps) {
  const [isDemoCheckedOut, setIsDemoCheckedOut] = React.useState(false);

  return (
    <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60 border border-slate-200 shadow-xl overflow-hidden my-12">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200/80 mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>COMMERCE PRODUCT & CONVERSION STUDIO</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            High-Speed Checkout Designed to Convert Visitors into Buyers.
          </h3>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Eliminate checkout friction with sub-second catalog search, dynamic tax calculation, and 1-click mobile payment gateways that keep cart abandonment low.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenProjectModal?.('High-Converting E-Commerce Build')}
          className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-mono flex items-center gap-2 shadow-md hover:scale-105 transition-all self-start md:self-auto cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Discuss E-Commerce Build</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid: 3D Product Visual + Live Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* 3D Visual Render (7 cols) */}
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-slate-100 aspect-[16/9] border border-slate-200 shadow-sm group">
          <Image
            src="/assets/visuals/ecommerce-studio-3d.jpg"
            alt="High-Converting E-Commerce Product Experience"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono font-bold text-slate-800 shadow-xs">
            High-Converting E-Commerce & 1-Click Checkout
          </div>
        </div>

        {/* Live Interactive Commerce Features (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-blue-600" />
                <span>Interactive Checkout Demo</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Instant Process
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal (Smart Hub):</span>
                <span className="font-mono font-bold text-slate-900">$349.00</span>
              </div>
              <div className="flex justify-between">
                <span>Dynamic Sales Tax:</span>
                <span className="font-mono text-slate-700">$27.92</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-slate-200 font-bold text-slate-900">
                <span>Total Payment:</span>
                <span className="font-mono text-blue-700">$376.92</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsDemoCheckedOut(prev => !prev)}
              className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                isDemoCheckedOut
                  ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              {isDemoCheckedOut ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>PAYMENT VERIFIED (COMPLETED)</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Simulate 1-Click Apple Pay</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] font-mono text-slate-400 block mb-1">Mobile Optimization</span>
              <span className="font-bold text-slate-900">100% Frictionless</span>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] font-mono text-slate-400 block mb-1">Payment Gateways</span>
              <span className="font-bold text-slate-900">Stripe · Apple Pay · UPI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
