'use client';

import * as React from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Globe, 
  ArrowUp, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { ThemeToggle } from './ui/theme-toggle';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50/90 py-14 sm:py-16 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <Image
                src="/assets/logo.png"
                alt="OnlyWayOnline"
                width={210}
                height={52}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
              We don&apos;t just launch websites. We launch high-converting growth systems that don&apos;t break. Web engineering, SEO-native architecture, social media, and performance marketing under one unified partner.
            </p>

            <div className="text-xs font-mono space-y-1 text-slate-500">
              <p><strong className="text-blue-600">Only</strong> means Strategy · <strong className="text-slate-900">Way</strong> means Velocity · <strong className="text-slate-800">Online</strong> means Compound Growth</p>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-mono font-bold border border-slate-300 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>All Client Systems 100% Operational</span>
              </div>
            </div>
          </div>

          {/* Col 3: Build Navigation */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold font-mono uppercase tracking-wider text-slate-900">
              Revenue Line A · Build
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Websites & Redesign
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  SaaS Platforms & MVPs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  E-Commerce Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Technical SEO Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Zero-Bug Handover Protocol™
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Grow Navigation */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold font-mono uppercase tracking-wider text-emerald-700">
              Revenue Line B · Grow
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#growth" className="hover:text-emerald-700 transition-colors">
                  SEO Growth Retainers
                </a>
              </li>
              <li>
                <a href="#growth" className="hover:text-emerald-700 transition-colors">
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="#growth" className="hover:text-emerald-700 transition-colors">
                  Paid Ads Campaigns (Meta/Google)
                </a>
              </li>
              <li>
                <a href="#growth" className="hover:text-emerald-700 transition-colors">
                  Graphic Design & Creative Studio
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-emerald-700 transition-colors">
                  90-Day Launch & Growth Sprint
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold font-mono uppercase tracking-wider text-slate-900">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Unit 971, 9th Floor, Aggarwal Millenium Tower 2, Netaji Subhash Place, Pitampura, Delhi 110034, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:info@onlywayonline.com" className="text-blue-600 hover:underline font-semibold">
                  info@onlywayonline.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} OnlyWayOnline. All rights reserved. Zero-Bug Handover Protocol™.
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
