'use client';

import * as React from 'react';
import Image from 'next/image';
import { Search, TrendingUp, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Globe, FileCode2 } from 'lucide-react';

interface SEORankingSceneProps {
  onOpenProjectModal?: (service?: string) => void;
}

const SEO_LAYERS = [
  { level: '04', title: 'Top Google Ranking #1', desc: 'Commercial intent search dominance & continuous organic traffic.', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  { level: '03', title: 'User Experience & Engagement', desc: 'Sub-second LCP, zero layout shifts, and high dwell time.', color: 'text-blue-700 bg-blue-50 border-blue-200' },
  { level: '02', title: 'High-Quality Structured Content', desc: 'Topic clusters and authoritative service copywriting that answers buyer intent.', color: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
  { level: '01', title: 'Schema Markup & Crawl Speed', desc: 'JSON-LD structured data and lightning-fast edge rendering for search crawlers.', color: 'text-slate-800 bg-slate-100 border-slate-200' },
];

export function SEORankingScene({ onOpenProjectModal }: SEORankingSceneProps) {
  return (
    <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60 border border-slate-200 shadow-xl overflow-hidden my-12">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200/80 mb-3">
            <Search className="w-3.5 h-3.5" />
            <span>ORGANIC SEARCH ARCHITECTURE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Engineered so Google Understands and Ranks Your Business First.
          </h3>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            We don’t just write meta tags — we construct complete semantic search architectures with Schema.org JSON-LD, crawl speed optimization, and topic authority.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenProjectModal?.('Google SEO Architecture')}
          className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs font-mono flex items-center gap-2 shadow-md hover:scale-105 transition-all self-start md:self-auto cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Discuss SEO Strategy</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* 3D Visual Render (7 cols) */}
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-slate-100 aspect-[16/9] border border-slate-200 shadow-sm group">
          <Image
            src="/assets/visuals/seo-search-engine-3d.jpg"
            alt="3D Physical SEO Search Ranking Hierarchy Architecture"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono font-bold text-slate-800 shadow-xs">
            Studio PBR Render: Physical Search Hierarchy Stack
          </div>
        </div>

        {/* 4-Level SEO Stack Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-2.5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
            Engineered Ranking Hierarchy:
          </span>
          {SEO_LAYERS.map(layer => (
            <div
              key={layer.level}
              className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex items-start gap-3"
            >
              <span className={`text-[11px] font-mono font-bold px-2 py-1 rounded-lg border shrink-0 ${layer.color}`}>
                L{layer.level}
              </span>
              <div>
                <h4 className="text-xs font-bold text-slate-900">{layer.title}</h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
