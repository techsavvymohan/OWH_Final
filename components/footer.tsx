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
import { WhatsAppIcon, PhoneCallIcon } from '@/components/ui/brand-icons';
import { ThemeToggle } from './ui/theme-toggle';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-14 sm:py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-850">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logo_white.webp"
                alt="OnlyWayOnline"
                width={440}
                height={312}
                className="h-28 sm:h-32 w-auto object-contain"
                priority
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              We don&apos;t just launch websites. We launch high-converting growth systems that don&apos;t break. Web engineering, SEO-native architecture, social media, and performance marketing under one unified partner.
            </p>

            <div className="text-xs font-mono space-y-1 text-slate-400">
              <p><strong className="text-blue-400">Only</strong> means Strategy · <strong className="text-white">Way</strong> means Velocity · <strong className="text-slate-300">Online</strong> means Compound Growth</p>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-slate-200 text-xs font-mono font-bold border border-slate-800 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>All Client Systems 100% Operational</span>
              </div>
            </div>
          </div>

          {/* Col 3: Build Navigation */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold font-mono uppercase tracking-wider text-white">
              Revenue Line A · Build
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Websites & Redesign
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">
                  SaaS Platforms & MVPs
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">
                  E-Commerce Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Technical SEO Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Zero-Bug Handover Protocol™
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Grow Navigation */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold font-mono uppercase tracking-wider text-slate-200">
              Revenue Line B · Grow
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#growth" className="text-slate-400 hover:text-blue-400 transition-colors">
                  SEO Growth Retainers
                </a>
              </li>
              <li>
                <a href="#growth" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="#growth" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Paid Ads Campaigns (Meta/Google)
                </a>
              </li>
              <li>
                <a href="#growth" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Graphic Design & Creative Studio
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-slate-400 hover:text-blue-400 transition-colors">
                  90-Day Launch & Growth Sprint
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold font-mono uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  Unit 971, 9th Floor, Aggarwal Millenium Tower 2, Netaji Subhash Place, Pitampura, Delhi 110034, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@onlywayonline.com" className="text-blue-400 hover:underline font-semibold">
                  info@onlywayonline.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCallIcon className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+917827701112" className="text-slate-300 hover:text-white transition-colors font-medium">
                  +91 7827701112
                </a>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/917827701112?text=Hi%20OnlyWayOnline,%20I'd%20like%20to%20discuss%20a%20website%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 hover:underline font-semibold"
                >
                  WhatsApp: +91 7827701112
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} OnlyWayOnline. All rights reserved. Zero-Bug Handover Protocol™.
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer border border-slate-800"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
