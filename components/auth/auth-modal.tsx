'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Mail,
  Lock,
  User,
  Building,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Zap
} from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup' | 'reset';
  onSuccess?: () => void;
}

export function AuthModal({ isOpen, onClose, initialMode = 'login', onSuccess }: AuthModalProps) {
  const { login, signup, loginWithSocial, resetPassword, quickDemoLogin } = useAuth();
  
  const [mode, setMode] = React.useState<'login' | 'signup' | 'reset'>(initialMode);
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [resetSuccess, setResetSuccess] = React.useState(false);

  // Form states
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [role, setRole] = React.useState('');

  const [prevIsOpen, setPrevIsOpen] = React.useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setMode(initialMode);
      setErrorMsg(null);
      setResetSuccess(false);
    }
  }

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await login(email, password);
      if (res.success) {
        onSuccess?.();
        onClose();
      } else {
        setErrorMsg(res.error || 'Authentication failed. Please verify credentials.');
      }
    } catch {
      setErrorMsg('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await signup({ name, email, company, role, password });
      if (res.success) {
        onSuccess?.();
        onClose();
      } else {
        setErrorMsg(res.error || 'Signup failed. Please check your details.');
      }
    } catch {
      setErrorMsg('Could not register account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await resetPassword(email);
      if (res.success) {
        setResetSuccess(true);
      } else {
        setErrorMsg(res.error || 'Could not send reset instructions.');
      }
    } catch {
      setErrorMsg('Reset failed. Please verify your email.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocial = async (provider: 'google' | 'github') => {
    setLoading(true);
    setErrorMsg(null);
    try {
      await loginWithSocial(provider);
      onSuccess?.();
      onClose();
    } catch {
      setErrorMsg(`Failed to connect with ${provider}.`);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = (type: 'founder' | 'growth_lead') => {
    quickDemoLogin(type);
    onSuccess?.();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
        className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden z-10 my-8"
      >
        {/* Top Accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600" />

        {/* Close Button */}
        <button
          id="close-auth-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close authentication modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                OW
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                OnlyWayOnline Platform Demo
              </span>
            </div>
            <h2 id="auth-modal-title" className="text-2xl font-bold tracking-tight text-slate-900">
              {mode === 'login' && 'Sign in to your Growth Portal'}
              {mode === 'signup' && 'Create your Partner Account'}
              {mode === 'reset' && 'Reset your Password'}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {mode === 'login' && 'Access your live site health, growth dashboards, and sprint deliverables.'}
              {mode === 'signup' && 'Deploy verified web systems, track SEO growth sprints, and guarantee SLA uptime.'}
              {mode === 'reset' && 'Enter your verified work email to receive password reset instructions.'}
            </p>
          </div>

          {/* Quick Demo Switcher */}
          <div className="mb-6 p-3 rounded-2xl bg-blue-50 border border-blue-200">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                Instant Demo Access (One-Click)
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">
                Interactive Preview
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                id="demo-login-founder"
                onClick={() => handleQuickDemo('founder')}
                className="px-3 py-2 rounded-xl bg-white border border-blue-200 text-[11px] font-medium text-slate-700 hover:border-blue-500 hover:text-blue-700 text-left transition-colors flex flex-col cursor-pointer shadow-2xs"
              >
                <span className="font-bold text-slate-900">Elena Rostova</span>
                <span className="text-[10px] text-slate-500">CEO @ NovaPulse (Enterprise)</span>
              </button>
              <button
                type="button"
                id="demo-login-growth"
                onClick={() => handleQuickDemo('growth_lead')}
                className="px-3 py-2 rounded-xl bg-white border border-blue-200 text-[11px] font-medium text-slate-700 hover:border-blue-500 hover:text-blue-700 text-left transition-colors flex flex-col cursor-pointer shadow-2xs"
              >
                <span className="font-bold text-slate-900">Marcus Thorne</span>
                <span className="text-[10px] text-slate-500">CMO @ Apex (Growth Stack)</span>
              </button>
            </div>
          </div>

          {/* Social Auth Providers */}
          {mode !== 'reset' && (
            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  id="auth-social-google"
                  onClick={() => handleSocial('google')}
                  disabled={loading}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors shadow-2xs cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                  <span>Google Workspace</span>
                </button>

                <button
                  type="button"
                  id="auth-social-github"
                  onClick={() => handleSocial('github')}
                  disabled={loading}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors shadow-2xs cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub Dev</span>
                </button>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="w-full border-t border-slate-200" />
                <span className="absolute px-3 bg-white text-[11px] font-mono text-slate-500 uppercase">
                  or work email
                </span>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700" role="alert">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Password Reset Confirmation */}
          {resetSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Reset Link Dispatched</h3>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                  We have sent security recovery instructions to <strong className="text-slate-900">{email}</strong>. Check your inbox to set a new password.
                </p>
              </div>
              <button
                type="button"
                id="reset-back-to-login"
                onClick={() => {
                  setResetSuccess(false);
                  setMode('login');
                }}
                className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Return to Login
              </button>
            </div>
          ) : (
            <>
              {/* LOGIN FORM */}
              {mode === 'login' && (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="login-email-input" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Business Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        id="login-email-input"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="login-password-input" className="block text-xs font-bold text-slate-700">
                        Password
                      </label>
                      <button
                        type="button"
                        id="forgot-password-link"
                        onClick={() => setMode('reset')}
                        className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        id="login-password-input"
                        name="password"
                        type="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                        placeholder="••••••••••••"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    id="submit-login-btn"
                    disabled={loading}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Sign In to Dashboard</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* SIGNUP FORM */}
              {mode === 'signup' && (
                <form onSubmit={handleSignupSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="signup-name-input" className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                        <input
                          id="signup-name-input"
                          name="name"
                          type="text"
                          required
                          value={name}
                          onChange={e => setName(e.target.value)}
                          autoComplete="name"
                          placeholder="Alex Henderson"
                          className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="signup-company-input" className="block text-xs font-bold text-slate-700 mb-1">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                        <input
                          id="signup-company-input"
                          name="company"
                          type="text"
                          required
                          value={company}
                          onChange={e => setCompany(e.target.value)}
                          autoComplete="organization"
                          placeholder="Acme Growth Inc."
                          className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="signup-email-input" className="block text-xs font-bold text-slate-700 mb-1">
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                        <input
                          id="signup-email-input"
                          name="email"
                          type="email"
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          autoComplete="email"
                          placeholder="alex@acme.com"
                          className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="signup-role-input" className="block text-xs font-bold text-slate-700 mb-1">
                        Your Role / Title
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                        <input
                          id="signup-role-input"
                          name="role"
                          type="text"
                          value={role}
                          onChange={e => setRole(e.target.value)}
                          autoComplete="organization-title"
                          placeholder="VP Growth / Founder"
                          className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="signup-password-input" className="block text-xs font-bold text-slate-700 mb-1">
                      Set Secure Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                      <input
                        id="signup-password-input"
                        name="password"
                        type="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="new-password"
                        placeholder="At least 8 characters"
                        className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Includes Zero-Bug SLA monitoring and 5-step onboarding guidance.</span>
                  </div>

                  <button
                    type="submit"
                    id="submit-signup-btn"
                    disabled={loading}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                        <span>Create Partner Account</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* RESET FORM */}
              {mode === 'reset' && (
                <form onSubmit={handleResetSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="reset-email-input" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Registered Work Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        id="reset-email-input"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    id="submit-reset-btn"
                    disabled={loading}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <span>Send Recovery Instructions</span>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      id="back-to-login-from-reset"
                      onClick={() => setMode('login')}
                      className="text-xs text-slate-500 hover:text-slate-900 font-semibold cursor-pointer"
                    >
                      ← Back to Sign In
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

          {/* Bottom Switcher */}
          {!resetSuccess && (
            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              {mode === 'login' ? (
                <p className="text-xs text-slate-500">
                  Don&apos;t have a partner account?{' '}
                  <button
                    type="button"
                    id="switch-to-signup-btn"
                    onClick={() => {
                      setErrorMsg(null);
                      setMode('signup');
                    }}
                    className="font-bold text-blue-600 hover:underline cursor-pointer"
                  >
                    Sign up now
                  </button>
                </p>
              ) : mode === 'signup' ? (
                <p className="text-xs text-slate-500">
                  Already have an account?{' '}
                  <button
                    type="button"
                    id="switch-to-login-btn"
                    onClick={() => {
                      setErrorMsg(null);
                      setMode('login');
                    }}
                    className="font-bold text-blue-600 hover:underline cursor-pointer"
                  >
                    Sign in here
                  </button>
                </p>
              ) : null}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
