'use client';

import * as React from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  avatarUrl?: string;
  plan: 'Growth Retainer' | 'Enterprise Dedicated' | '90-Day Build' | 'Trial';
  joinedDate: string;
  verified: boolean;
  provider: 'email' | 'google' | 'github';
  websiteUrl?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  category: 'qa' | 'growth' | 'sprint' | 'system' | 'lead';
  timestamp: string;
  read: boolean;
  actionUrl?: string;
  actionLabel?: string;
  badge?: string;
}

export interface NotificationPreferences {
  emailAlerts: boolean;
  pushNotifications: boolean;
  weeklyDigest: boolean;
  zeroBugAlerts: boolean;
  growthMetrics: boolean;
  leadInquiries: boolean;
  soundEnabled: boolean;
}

export interface OnboardingData {
  fullName: string;
  companyName: string;
  industry: string;
  teamSize: string;
  websiteUrl: string;
  primaryGoal: 'redesign' | 'saas_build' | 'seo_growth' | 'paid_roas' | 'enterprise_stack';
  launchTimeline: '30_days' | '60_days' | '90_days' | 'ongoing';
  monthlyBudget: string;
  connectedIntegrations: string[];
  completedSteps: number;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  signup: (data: { name: string; email: string; company: string; role: string; password?: string }) => Promise<{ success: boolean; error?: string }>;
  loginWithSocial: (provider: 'google' | 'github') => Promise<{ success: boolean }>;
  logout: () => void;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  updateProfile: (data: Partial<UserProfile>) => void;
  quickDemoLogin: (role?: 'founder' | 'growth_lead') => void;
  
  // Notifications
  notifications: NotificationItem[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotification: (id: string) => void;
  clearAllNotifications: () => void;
  addNotification: (notification: Omit<NotificationItem, 'id' | 'timestamp' | 'read'>) => void;
  notificationPreferences: NotificationPreferences;
  updateNotificationPreferences: (prefs: Partial<NotificationPreferences>) => void;

  // Onboarding
  hasCompletedOnboarding: boolean;
  onboardingData: OnboardingData | null;
  completeOnboarding: (data: OnboardingData) => void;
  resetOnboarding: () => void;
}

const DEFAULT_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Zero-Bug SLA Verified 100/100',
    message: 'Automated CI/CD suite verified 0 critical defects across Chrome, Safari, and iOS viewport matrices.',
    category: 'qa',
    timestamp: '10 mins ago',
    read: false,
    badge: '100% Core Web Vitals',
    actionLabel: 'View Telemetry',
  },
  {
    id: 'notif-2',
    title: 'SEO Surge: +18 High-Intent Rankings',
    message: 'Primary commercial landing pages captured Top 3 SERP positions. Organic impression velocity +142%.',
    category: 'growth',
    timestamp: '2 hours ago',
    read: false,
    badge: '+142% Traffic',
    actionLabel: 'SERP Breakdown',
  },
  {
    id: 'notif-3',
    title: '90-Day Sprint: Milestone 2 Deployed',
    message: 'Day 30 production cutover complete. Global Edge CDN active with 0.18s TTFB.',
    category: 'sprint',
    timestamp: '1 day ago',
    read: true,
    badge: 'Sprint On-Time',
    actionLabel: 'Review Changelog',
  },
  {
    id: 'notif-4',
    title: 'New High-Value Lead Captured',
    message: 'Enterprise inbound inquiry from FinTech CTO requesting Zero-Bug SLA migration.',
    category: 'lead',
    timestamp: '2 days ago',
    read: true,
    badge: '$28k ARR Scope',
    actionLabel: 'View Lead Details',
  }
];

const DEFAULT_PREFERENCES: NotificationPreferences = {
  emailAlerts: true,
  pushNotifications: true,
  weeklyDigest: true,
  zeroBugAlerts: true,
  growthMetrics: true,
  leadInquiries: true,
  soundEnabled: false,
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'ow_auth_user_v1';
const NOTIFS_STORAGE_KEY = 'ow_notifications_v1';
const PREFS_STORAGE_KEY = 'ow_notif_prefs_v1';
const ONBOARDING_STORAGE_KEY = 'ow_onboarding_v1';

function getInitialUser(): UserProfile | null {
  if (typeof window === 'undefined') return null;
  try {
    const item = localStorage.getItem(AUTH_STORAGE_KEY);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
}

function getInitialNotifications(): NotificationItem[] {
  if (typeof window === 'undefined') return DEFAULT_NOTIFICATIONS;
  try {
    const item = localStorage.getItem(NOTIFS_STORAGE_KEY);
    return item ? JSON.parse(item) : DEFAULT_NOTIFICATIONS;
  } catch {
    return DEFAULT_NOTIFICATIONS;
  }
}

function getInitialPreferences(): NotificationPreferences {
  if (typeof window === 'undefined') return DEFAULT_PREFERENCES;
  try {
    const item = localStorage.getItem(PREFS_STORAGE_KEY);
    return item ? JSON.parse(item) : DEFAULT_PREFERENCES;
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

function getInitialOnboarding(): OnboardingData | null {
  if (typeof window === 'undefined') return null;
  try {
    const item = localStorage.getItem(ONBOARDING_STORAGE_KEY);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<UserProfile | null>(getInitialUser);
  const [isLoading] = React.useState(false);
  const [notifications, setNotifications] = React.useState<NotificationItem[]>(getInitialNotifications);
  const [notificationPreferences, setNotificationPreferences] = React.useState<NotificationPreferences>(getInitialPreferences);
  const [onboardingData, setOnboardingData] = React.useState<OnboardingData | null>(getInitialOnboarding);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = React.useState<boolean>(() => !!getInitialOnboarding());

  const saveUser = (newUser: UserProfile | null) => {
    setUser(newUser);
    if (typeof window !== 'undefined') {
      if (newUser) {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUser));
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
  };

  const addNotification = (item: Omit<NotificationItem, 'id' | 'timestamp' | 'read'>) => {
    const randomSuffix = Math.random().toString(36).substring(2, 7);
    const newNotif: NotificationItem = {
      ...item,
      id: `notif_${randomSuffix}`,
      timestamp: 'Just now',
      read: false,
    };
    setNotifications(prev => {
      const updated = [newNotif, ...prev];
      if (typeof window !== 'undefined') {
        try { localStorage.setItem(NOTIFS_STORAGE_KEY, JSON.stringify(updated)); } catch {}
      }
      return updated;
    });
  };

  const login = async (email: string): Promise<{ success: boolean; error?: string }> => {
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Please provide a valid work email address.' };
    }

    const username = email.split('@')[0];
    const formattedName = username.charAt(0).toUpperCase() + username.slice(1);
    const randId = Math.random().toString(36).substring(2, 8);

    const loggedUser: UserProfile = {
      id: `usr_${randId}`,
      name: formattedName,
      email: email.toLowerCase(),
      company: email.includes('@') ? email.split('@')[1].split('.')[0].toUpperCase() : 'Stealth Co',
      role: 'Growth Partner',
      plan: 'Growth Retainer',
      joinedDate: 'Aug 2026',
      verified: true,
      provider: 'email',
    };

    saveUser(loggedUser);
    
    addNotification({
      title: `Welcome back, ${loggedUser.name}!`,
      message: 'Your Zero-Bug telemetry and Growth sprint monitors are active.',
      category: 'system',
      badge: 'Live Session',
    });

    return { success: true };
  };

  const signup = async (data: { name: string; email: string; company: string; role: string }): Promise<{ success: boolean; error?: string }> => {
    if (!data.email || !data.email.includes('@')) {
      return { success: false, error: 'Valid business email is required.' };
    }
    if (!data.name.trim()) {
      return { success: false, error: 'Full name is required.' };
    }

    const randId = Math.random().toString(36).substring(2, 8);
    const newUser: UserProfile = {
      id: `usr_${randId}`,
      name: data.name,
      email: data.email.toLowerCase(),
      company: data.company || 'Enterprise Venture',
      role: data.role || 'Executive Lead',
      plan: '90-Day Build',
      joinedDate: 'Aug 2026',
      verified: true,
      provider: 'email',
    };

    saveUser(newUser);

    addNotification({
      title: 'Account Provisioned & Ready',
      message: `Welcome to OnlyWayOnline, ${data.name}. Complete your 4-step onboarding to activate your 90-day growth stack.`,
      category: 'system',
      badge: 'New Partner',
      actionLabel: 'Start Onboarding',
    });

    return { success: true };
  };

  const loginWithSocial = async (provider: 'google' | 'github'): Promise<{ success: boolean }> => {
    const isGoogle = provider === 'google';
    const randId = Math.random().toString(36).substring(2, 8);
    const socialUser: UserProfile = {
      id: `usr_soc_${randId}`,
      name: isGoogle ? 'Alex Rivera' : 'Dev Lead (GitHub)',
      email: isGoogle ? 'alex.rivera@scalevector.io' : 'alex@github.com',
      company: 'ScaleVector Labs',
      role: isGoogle ? 'VP of Growth & Technology' : 'Principal Engineer',
      plan: 'Enterprise Dedicated',
      joinedDate: 'Aug 2026',
      verified: true,
      provider,
      avatarUrl: isGoogle 
        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' 
        : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    };

    saveUser(socialUser);

    addNotification({
      title: `Signed in via ${provider === 'google' ? 'Google Workspace' : 'GitHub'}`,
      message: 'Zero-Bug SLA live monitor synchronized with your organization dashboard.',
      category: 'system',
      badge: 'OAuth Verified',
    });

    return { success: true };
  };

  const quickDemoLogin = (type: 'founder' | 'growth_lead' = 'founder') => {
    if (type === 'founder') {
      const demoUser: UserProfile = {
        id: 'usr_founder_01',
        name: 'Elena Rostova',
        email: 'elena@novapulse.io',
        company: 'NovaPulse Health',
        role: 'Co-Founder & CEO',
        plan: 'Enterprise Dedicated',
        joinedDate: 'Jan 2026',
        verified: true,
        provider: 'email',
        avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      };
      saveUser(demoUser);
    } else {
      const demoUser: UserProfile = {
        id: 'usr_growth_02',
        name: 'Marcus Thorne',
        email: 'marcus@apexfin.com',
        company: 'Apex Financial',
        role: 'Chief Marketing Officer',
        plan: 'Growth Retainer',
        joinedDate: 'Feb 2026',
        verified: true,
        provider: 'email',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      };
      saveUser(demoUser);
    }
  };

  const logout = () => {
    saveUser(null);
  };

  const resetPassword = async (email: string): Promise<{ success: boolean; error?: string }> => {
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Please enter your registered email address.' };
    }
    return { success: true };
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    saveUser(updated);
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => {
      const updated = prev.map(n => n.id === id ? { ...n, read: true } : n);
      if (typeof window !== 'undefined') {
        try { localStorage.setItem(NOTIFS_STORAGE_KEY, JSON.stringify(updated)); } catch {}
      }
      return updated;
    });
  };

  const markAllAsRead = () => {
    setNotifications(prev => {
      const updated = prev.map(n => ({ ...n, read: true }));
      if (typeof window !== 'undefined') {
        try { localStorage.setItem(NOTIFS_STORAGE_KEY, JSON.stringify(updated)); } catch {}
      }
      return updated;
    });
  };

  const clearNotification = (id: string) => {
    setNotifications(prev => {
      const updated = prev.filter(n => n.id !== id);
      if (typeof window !== 'undefined') {
        try { localStorage.setItem(NOTIFS_STORAGE_KEY, JSON.stringify(updated)); } catch {}
      }
      return updated;
    });
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    if (typeof window !== 'undefined') {
      try { localStorage.setItem(NOTIFS_STORAGE_KEY, JSON.stringify([])); } catch {}
    }
  };

  const updateNotificationPreferences = (prefs: Partial<NotificationPreferences>) => {
    setNotificationPreferences(prev => {
      const updated = { ...prev, ...prefs };
      if (typeof window !== 'undefined') {
        try { localStorage.setItem(PREFS_STORAGE_KEY, JSON.stringify(updated)); } catch {}
      }
      return updated;
    });
  };

  const completeOnboarding = (data: OnboardingData) => {
    setOnboardingData(data);
    setHasCompletedOnboarding(true);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(data));
      } catch {}
    }

    if (user && data.companyName) {
      updateProfile({
        company: data.companyName,
        websiteUrl: data.websiteUrl,
      });
    }

    addNotification({
      title: 'Growth Onboarding Complete! 🚀',
      message: `Your tailored ${data.launchTimeline.replace('_', '-')} roadmap is configured with ${data.connectedIntegrations.length} connected services.`,
      category: 'sprint',
      badge: 'Roadmap Active',
    });
  };

  const resetOnboarding = () => {
    setOnboardingData(null);
    setHasCompletedOnboarding(false);
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(ONBOARDING_STORAGE_KEY);
      } catch {}
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        loginWithSocial,
        logout,
        resetPassword,
        updateProfile,
        quickDemoLogin,

        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        clearNotification,
        clearAllNotifications,
        addNotification,
        notificationPreferences,
        updateNotificationPreferences,

        hasCompletedOnboarding,
        onboardingData,
        completeOnboarding,
        resetOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
