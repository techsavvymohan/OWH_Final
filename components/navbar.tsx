'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  User,
  LogOut,
  Compass,
  CheckCircle2,
  ChevronDown,
  Lock,
  Layers
} from 'lucide-react';
import { WhatsAppIcon, PhoneCallIcon } from '@/components/ui/brand-icons';
import { ThemeToggle } from './ui/theme-toggle';
import { useAuth } from '@/lib/auth-context';

interface NavbarProps {
  onOpenProjectModal: (service?: string) => void;
  onOpenAuthModal?: (mode?: 'login' | 'signup' | 'reset') => void;
  onOpenOnboardingModal?: () => void;
}

interface NavLinkItem {
  name: string;
  href: string;
  badge?: string;
  isRoute?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: 'Solutions', href: '#services', badge: 'Build' },
  { name: 'Our Work', href: '/work', isRoute: true },
  { name: 'Marketing', href: '#growth', badge: 'Scale' },
  { name: 'Results Dashboard', href: '#dashboard' },
  { name: 'How It Works', href: '#timeline' },
  { name: 'Pricing & Plans', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export function Navbar({ onOpenProjectModal, onOpenAuthModal, onOpenOnboardingModal }: NavbarProps) {
  const { user, isAuthenticated, logout, hasCompletedOnboarding } = useAuth();

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = React.useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>('');

  const userDropdownRef = React.useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for smooth nav indicator
      const sectionIds = ['services', 'growth', 'dashboard', 'timeline', 'pricing', 'faq'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(`#${sectionIds[i]}`);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        setActiveSection(href);
        setSolutionsDropdownOpen(false);
        const headerOffset = 90;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } else {
        // If element is not in DOM (e.g. on /work page), let browser navigate to /#targetId
        window.location.href = `/${href}`;
      }
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(false);
      setSolutionsDropdownOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto">
          {/* Floating Outer Gradient Border Sheath for Distinct Visual Separation */}
          <div className="relative rounded-full p-[1.5px] bg-gradient-to-r from-blue-500/40 via-sky-400/30 to-emerald-500/40 shadow-[0_12px_36px_rgba(15,23,42,0.12)]">
            <nav
              id="main-nav"
              className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-white/95 backdrop-blur-xl border border-white/80 shadow-md'
                  : 'bg-white/90 backdrop-blur-lg border border-white/70 shadow-sm'
              }`}
            >
              {/* Brand Logo & Live Status */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="#"
                  onClick={e => handleLinkClick(e, '#')}
                  className="flex items-center gap-2 group cursor-pointer"
                  aria-label="OnlyWayOnline Home"
                >
                  <Image
                    src="/assets/Main_logo.webp"
                    alt="OnlyWayOnline Logo"
                    width={28}
                    height={28}
                    className="h-5 sm:h-6 w-auto object-contain transition-transform group-hover:scale-105"
                    priority
                  />
                  <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 font-sans">
                    OnlyWay<span className="text-blue-600">Online</span>
                  </span>
                </a>
              </div>

            {/* Desktop Navigation Links with Solutions Dropdown */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Solutions Group Dropdown */}
              <div className="relative" ref={solutionsDropdownRef}>
                <button
                  type="button"
                  id="solutions-dropdown-btn"
                  aria-expanded={solutionsDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Toggle solutions navigation menu"
                  onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    ['#services', '#growth', '#dashboard', '#timeline'].includes(activeSection)
                      ? 'text-blue-600 font-bold bg-blue-50/80 border border-blue-200/80'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${solutionsDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                <AnimatePresence>
                  {solutionsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-72 rounded-2xl bg-white border border-slate-200 shadow-xl p-3 z-50 space-y-1"
                    >
                      <div className="px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Capabilities & Systems
                      </div>

                      <a
                        href="#services"
                        onClick={e => handleLinkClick(e, '#services')}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group cursor-pointer"
                      >
                        <div className="p-1.5 rounded-lg bg-blue-100/80 text-blue-700 font-bold text-xs mt-0.5">
                          ⚡
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600">
                            Core Web Engineering
                          </div>
                          <p className="text-[11px] text-slate-500">
                            Next.js 15, Zero-Bug SLA & 100/100 Vitals
                          </p>
                        </div>
                      </a>

                      <a
                        href="#growth"
                        onClick={e => handleLinkClick(e, '#growth')}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group cursor-pointer"
                      >
                        <div className="p-1.5 rounded-lg bg-emerald-100/80 text-emerald-700 font-bold text-xs mt-0.5">
                          📈
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 flex items-center gap-1.5">
                            <span>B2B Growth Engine</span>
                            <span className="text-[9px] font-mono px-1 rounded bg-emerald-100 text-emerald-800 font-bold">
                              NEW
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500">
                            Programmatic SEO, Paid Media & Social
                          </p>
                        </div>
                      </a>

                      <a
                        href="#dashboard"
                        onClick={e => handleLinkClick(e, '#dashboard')}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/80 transition-colors group cursor-pointer"
                      >
                        <div className="p-1.5 rounded-lg bg-purple-100/80 text-purple-700 font-bold text-xs mt-0.5">
                          📊
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-purple-700">
                            Live Growth & Health Hub
                          </div>
                          <p className="text-[11px] text-slate-500">
                            Real-Time Website & Marketing Dashboard
                          </p>
                        </div>
                      </a>

                      <a
                        href="#timeline"
                        onClick={e => handleLinkClick(e, '#timeline')}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-indigo-50/80 transition-colors group cursor-pointer"
                      >
                        <div className="p-1.5 rounded-lg bg-indigo-100/80 text-indigo-700 font-bold text-xs mt-0.5">
                          ⏱️
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-700">
                            90-Day Sprint Roadmap
                          </div>
                          <p className="text-[11px] text-slate-500">
                            Build, Traffic Launch & Conversion Scale
                          </p>
                        </div>
                      </a>

                      <div className="pt-2 border-t border-slate-100 mt-1">
                        <Link
                          href="/work"
                          onClick={() => setSolutionsDropdownOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-xs font-bold text-slate-800 hover:text-blue-700 transition-colors group"
                        >
                          <span className="flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                            <span>Selected Work & Case Studies</span>
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Our Work Dedicated Direct Nav Link */}
              <Link
                href="/work"
                className="relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center text-slate-700 hover:text-slate-900 hover:bg-slate-100/60"
              >
                <span>Our Work</span>
              </Link>

              {/* Direct Links */}
              {[
                { name: 'Pricing & Plans', href: '#pricing' },
                { name: 'FAQ', href: '#faq' },
              ].map(link => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={e => handleLinkClick(e, link.href)}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive ? 'text-blue-600 font-bold bg-blue-50/60' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                    }`}
                  >
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Actions - Grouped for Maximum Elegance */}
            <div className="flex items-center gap-2">
              {/* Client Onboarding Protocol Trigger */}
              <button
                type="button"
                id="navbar-onboarding-trigger"
                onClick={onOpenOnboardingModal}
                className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-100/80 border border-slate-200/90 hover:border-slate-300 text-slate-600 hover:text-blue-600 hover:bg-white transition-all cursor-pointer relative shadow-2xs"
                title="Client Onboarding Protocol"
                aria-label="Open client onboarding protocol"
              >
                <Compass className="w-4 h-4 text-blue-600" />
                {!hasCompletedOnboarding && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </button>

              {/* User Authentication Menu / Sign In Button */}
              {isAuthenticated && user ? (
                <div className="relative" ref={userDropdownRef}>
                  <button
                    type="button"
                    id="user-profile-menu-btn"
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 p-1 pl-1.5 pr-2.5 rounded-full bg-slate-100 border border-slate-200 hover:border-blue-500 transition-all cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-xs font-semibold text-slate-800 max-w-[90px] truncate hidden sm:inline-block">
                      {user.name}
                    </span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {userDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl p-3 z-50 divide-y divide-slate-100"
                      >
                        <div className="pb-3 px-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-slate-900 truncate">
                              {user.name}
                            </h4>
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                              {user.plan}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 truncate">
                            {user.email}
                          </p>
                          <div className="mt-1.5 flex items-center gap-1 text-[10px] font-mono text-emerald-600 font-bold">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Zero-Bug SLA Active</span>
                          </div>
                        </div>

                        <div className="py-2 space-y-1">
                          <button
                            type="button"
                            id="menu-open-onboarding"
                            onClick={() => {
                              setUserDropdownOpen(false);
                              onOpenOnboardingModal?.();
                            }}
                            className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors text-left"
                          >
                            <Compass className="w-3.5 h-3.5 text-blue-600" />
                            <span>Onboarding & Blueprint</span>
                          </button>

                          <button
                            type="button"
                            id="menu-jump-dashboard"
                            onClick={() => {
                              setUserDropdownOpen(false);
                              const el = document.getElementById('dashboard');
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors text-left cursor-pointer"
                          >
                            <Layers className="w-3.5 h-3.5 text-indigo-600" />
                            <span>Live Client Dashboard</span>
                          </button>
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            id="navbar-logout-btn"
                            onClick={() => {
                              setUserDropdownOpen(false);
                              logout();
                            }}
                            className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 transition-colors text-left"
                          >
                            <LogOut className="w-3.5 h-3.5" />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  type="button"
                  id="navbar-signin-btn"
                  onClick={() => onOpenAuthModal?.('login')}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 hover:border-blue-500 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Sign In</span>
                </button>
              )}

              {/* Primary CTA (Desktop & Tablet) */}
              <button
                id="discuss-project-nav-btn"
                onClick={() => onOpenProjectModal()}
                className="hidden sm:inline-flex relative items-center justify-center gap-1.5 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 transition-all duration-200 cursor-pointer group"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                <span>Discuss Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 hidden xs:inline-block" />
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(true)}
                className="xl:hidden p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>

      {/* Floating Bottom-Right "Discuss Project" FAB (Mobile Screen Only) */}
      <div className="fixed bottom-5 right-4 z-40 sm:hidden">
        <motion.button
          id="mobile-fab-discuss-btn"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onOpenProjectModal()}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 text-white font-bold text-xs shadow-2xl shadow-blue-600/50 border border-blue-400/40 cursor-pointer backdrop-blur-md active:bg-blue-700"
          aria-label="Discuss Project"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <Sparkles className="w-3.5 h-3.5 text-blue-200" />
          <span>Discuss Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/Main_logo.webp"
                      alt="OnlyWayOnline Logo"
                      width={24}
                      height={24}
                      className="h-5 w-auto object-contain"
                    />
                    <span className="font-bold text-base tracking-tight text-slate-900 font-sans">
                      OnlyWay<span className="text-blue-600">Online</span>
                    </span>
                  </div>
                  <button
                    id="close-mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                    aria-label="Close navigation"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Auth Status */}
                <div className="py-4 border-b border-slate-100">
                  {isAuthenticated && user ? (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 truncate max-w-[120px]">
                            {user.name}
                          </h4>
                          <span className="text-[10px] text-emerald-600 font-mono font-bold">
                            {user.plan}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={logout}
                        className="text-xs text-red-500 font-semibold hover:underline"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenAuthModal?.('login');
                        }}
                        className="py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 text-center hover:bg-slate-50"
                      >
                        Sign In
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenAuthModal?.('signup');
                        }}
                        className="py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold text-center shadow-sm"
                      >
                        Sign Up
                      </button>
                    </div>
                  )}
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col gap-1 mt-4">
                  {NAV_LINKS.map(link => (
                    link.isRoute ? (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                          <span>{link.name}</span>
                        </span>
                        {link.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-blue-50 text-blue-700 border border-blue-200">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    ) : (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={e => handleLinkClick(e, link.href)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        <span>{link.name}</span>
                        {link.badge && (
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                              link.badge === 'Scale'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : 'bg-blue-50 text-blue-700 border border-blue-200'
                            }`}
                          >
                            {link.badge}
                          </span>
                        )}
                      </a>
                    )
                  ))}

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenOnboardingModal?.();
                    }}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors text-left mt-1"
                  >
                    <span className="flex items-center gap-2">
                      <Compass className="w-4 h-4" />
                      <span>Onboarding Protocol</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                      Tour
                    </span>
                  </button>
                </div>
              </div>

              {/* Bottom Quick Contact */}
              <div className="pt-6 border-t border-slate-100 space-y-3 mt-4">
                <button
                  id="mobile-discuss-project-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProjectModal();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-blue-200" />
                  <span>Discuss Your Project</span>
                </button>

                {/* Direct Call & WhatsApp Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+916398638176"
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <PhoneCallIcon className="w-4 h-4 text-blue-600" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href="https://wa.me/916398638176?text=Hi%20OnlyWayOnline,%20I'd%20like%20to%20discuss%20a%20website%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-emerald-200"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 font-mono text-slate-600">
                  <div className="flex items-center gap-1.5 text-slate-800 font-sans font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Zero-Bug Handover Protocol</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Automated CI/CD validation + 90-day monitored stability guarantee.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
