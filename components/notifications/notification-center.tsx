'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bell,
  Check,
  CheckCheck,
  Trash2,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Clock,
  Sparkles,
  Zap,
  Volume2,
  VolumeX,
  Mail,
  Smartphone,
  ExternalLink,
  Filter,
  X
} from 'lucide-react';
import { useAuth, NotificationItem } from '@/lib/auth-context';

interface NotificationCenterProps {
  onOpenProjectModal?: (service?: string) => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export function NotificationCenter({ onOpenProjectModal, onNavigateToSection }: NotificationCenterProps) {
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    clearNotification,
    clearAllNotifications,
    addNotification,
    notificationPreferences,
    updateNotificationPreferences,
  } = useAuth();

  const [isOpen, setIsOpen] = React.useState(false);
  const [filter, setFilter] = React.useState<'all' | 'unread' | 'qa' | 'growth' | 'sprint'>('all');
  const [showSettingsModal, setShowSettingsModal] = React.useState(false);
  const [testSent, setTestSent] = React.useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);

  // Close on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const filteredNotifications = notifications.filter(item => {
    if (filter === 'unread') return !item.read;
    if (filter === 'qa') return item.category === 'qa';
    if (filter === 'growth') return item.category === 'growth';
    if (filter === 'sprint') return item.category === 'sprint' || item.category === 'lead';
    return true;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'qa':
        return <ShieldCheck className="w-4 h-4 text-blue-500" />;
      case 'growth':
        return <TrendingUp className="w-4 h-4 text-emerald-500" />;
      case 'sprint':
        return <Zap className="w-4 h-4 text-purple-500" />;
      case 'lead':
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      default:
        return <Bell className="w-4 h-4 text-blue-400" />;
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case 'qa':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'growth':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'sprint':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'lead':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const handleSendTestNotification = () => {
    const randomTypes = [
      {
        title: 'Core Web Vitals Test: 99.8/100',
        message: 'Lighthouse audit completed. LCP 0.62s, CLS 0.00, FID 8ms on production cluster.',
        category: 'qa' as const,
        badge: 'Zero-Bug SLA',
      },
      {
        title: 'Organic Ranking Alert: #1 For Main Term',
        message: 'Google algorithm updated SERP indexing: captured #1 rank for target commercial keywords.',
        category: 'growth' as const,
        badge: '+310% Impressions',
      },
      {
        title: 'Sprint Deliverable: Edge Cache Active',
        message: 'Cloudflare Enterprise edge rules deployed with instantaneous stale-while-revalidate.',
        category: 'sprint' as const,
        badge: 'Sprint On-Track',
      }
    ];

    const pick = randomTypes[Math.floor(Math.random() * randomTypes.length)];
    addNotification(pick);
    setTestSent(true);
    setTimeout(() => setTestSent(false), 2500);
  };

  const handleNotificationAction = (item: NotificationItem) => {
    markAsRead(item.id);
    setIsOpen(false);

    if (item.category === 'qa' || item.category === 'growth') {
      const el = document.getElementById('dashboard');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.category === 'lead' || item.category === 'sprint') {
      if (onOpenProjectModal) onOpenProjectModal();
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Bell Trigger Button */}
      <button
        id="notification-bell-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer"
        aria-label="View notifications"
      >
        <Bell className="w-4 h-4" />
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-1 right-1 flex items-center justify-center min-w-[16px] h-4 px-1 rounded-full bg-blue-600 text-[9px] font-bold text-white shadow-xs ring-2 ring-white"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </motion.span>
        )}
      </button>

      {/* Popover Dropdown Tray */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold font-mono">
                  OW
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span>Notification Center</span>
                    {unreadCount > 0 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                        {unreadCount} new
                      </span>
                    )}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  id="notif-settings-toggle-btn"
                  onClick={() => setShowSettingsModal(true)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  title="Configure Notification Preferences"
                  aria-label="Notification Settings"
                >
                  <Settings2 className="w-4 h-4" />
                </button>
                {unreadCount > 0 && (
                  <button
                    id="mark-all-read-btn"
                    onClick={markAllAsRead}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    title="Mark all as read"
                    aria-label="Mark all read"
                  >
                    <CheckCheck className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Pills */}
            <div className="px-3 py-2 border-b border-slate-100 flex items-center gap-1 text-[11px] overflow-x-auto no-scrollbar">
              {(
                [
                  { id: 'all', label: 'All' },
                  { id: 'unread', label: `Unread (${unreadCount})` },
                  { id: 'qa', label: 'Zero-Bug QA' },
                  { id: 'growth', label: 'SEO & Ads' },
                  { id: 'sprint', label: 'Sprints & Leads' },
                ] as const
              ).map(tab => (
                <button
                  key={tab.id}
                  id={`notif-filter-${tab.id}`}
                  onClick={() => setFilter(tab.id)}
                  className={`px-2.5 py-1 rounded-full whitespace-nowrap font-medium transition-all ${
                    filter === tab.id
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Notifications List */}
            <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
              {filteredNotifications.length === 0 ? (
                <div className="py-10 px-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-2">
                    <Bell className="w-5 h-5 opacity-40" />
                  </div>
                  <p className="text-xs font-semibold text-slate-700">No alerts found</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {filter === 'unread' ? 'All notifications have been reviewed.' : 'You have a clean notification inbox.'}
                  </p>
                </div>
              ) : (
                filteredNotifications.map(item => (
                  <div
                    key={item.id}
                    id={`notification-row-${item.id}`}
                    className={`p-3.5 transition-colors relative group ${
                      item.read
                        ? 'bg-transparent hover:bg-slate-50'
                        : 'bg-blue-50/40 hover:bg-blue-50/70'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-slate-100 shrink-0 mt-0.5">
                        {getCategoryIcon(item.category)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-xs font-bold text-slate-900 truncate">
                              {item.title}
                            </span>
                            {!item.read && (
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                            )}
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 shrink-0">
                            {item.timestamp}
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
                          {item.message}
                        </p>

                        <div className="flex items-center justify-between gap-2">
                          {item.badge && (
                            <span
                              className={`text-[9px] font-mono px-2 py-0.5 rounded-full border font-semibold ${getCategoryBg(
                                item.category
                              )}`}
                            >
                              {item.badge}
                            </span>
                          )}

                          <div className="flex items-center gap-1 ml-auto">
                            {item.actionLabel && (
                              <button
                                type="button"
                                id={`notif-action-${item.id}`}
                                onClick={() => handleNotificationAction(item)}
                                className="text-[10px] font-semibold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 cursor-pointer"
                              >
                                <span>{item.actionLabel}</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </button>
                            )}

                            {!item.read && (
                              <button
                                type="button"
                                id={`mark-read-item-${item.id}`}
                                onClick={() => markAsRead(item.id)}
                                className="p-1 text-slate-400 hover:text-slate-700"
                                title="Mark as read"
                              >
                                <Check className="w-3 h-3" />
                              </button>
                            )}

                            <button
                              type="button"
                              id={`clear-notif-${item.id}`}
                              onClick={() => clearNotification(item.id)}
                              className="p-1 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Delete alert"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <button
                type="button"
                id="clear-all-notifs-btn"
                onClick={clearAllNotifications}
                className="text-slate-400 hover:text-red-500 font-medium transition-colors cursor-pointer"
              >
                Clear all alerts
              </button>

              <button
                type="button"
                id="open-notif-settings-footer"
                onClick={() => setShowSettingsModal(true)}
                className="text-blue-600 font-medium hover:underline cursor-pointer flex items-center gap-1"
              >
                <Settings2 className="w-3 h-3" />
                <span>Alert Preferences</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification Preferences Modal */}
      <AnimatePresence>
        {showSettingsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettingsModal(false)}
              className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 z-10"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Settings2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Alert & Notification Settings
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Configure push, email, and live SLA monitoring alerts.
                    </p>
                  </div>
                </div>
                <button
                  id="close-notif-settings-modal"
                  onClick={() => setShowSettingsModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Toggles */}
              <div className="space-y-3">
                {[
                  {
                    key: 'pushNotifications' as const,
                    icon: <Smartphone className="w-4 h-4 text-blue-600" />,
                    title: 'Browser & Mobile Push Notifications',
                    desc: 'Real-time alerts when new sprint code passes QA or server metrics spike.',
                  },
                  {
                    key: 'emailAlerts' as const,
                    icon: <Mail className="w-4 h-4 text-emerald-600" />,
                    title: 'Executive Email Notifications',
                    desc: 'Direct email delivery for milestone sign-offs and contract SLA notices.',
                  },
                  {
                    key: 'weeklyDigest' as const,
                    icon: <TrendingUp className="w-4 h-4 text-indigo-600" />,
                    title: 'Weekly Growth & SEO Digest',
                    desc: 'Comprehensive executive summary of organic rankings, traffic, and ROAS.',
                  },
                  {
                    key: 'zeroBugAlerts' as const,
                    icon: <ShieldCheck className="w-4 h-4 text-blue-600" />,
                    title: 'Zero-Bug SLA Critical Alerts',
                    desc: 'Instant failover notification if Core Web Vitals drop below 90.',
                  },
                  {
                    key: 'soundEnabled' as const,
                    icon: <Volume2 className="w-4 h-4 text-amber-600" />,
                    title: 'Sound Chimes on High-Impact Events',
                    desc: 'Play subtle audio chime when new inbound leads or deployments land.',
                  },
                ].map(pref => (
                  <div
                    key={pref.key}
                    className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">{pref.icon}</div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-900">
                          {pref.title}
                        </h4>
                        <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                          {pref.desc}
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                      <input
                        type="checkbox"
                        id={`toggle-pref-${pref.key}`}
                        checked={notificationPreferences[pref.key]}
                        onChange={e =>
                          updateNotificationPreferences({ [pref.key]: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>

              {/* Test Notification Trigger */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  id="send-test-alert-btn"
                  onClick={handleSendTestNotification}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-medium text-slate-700 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>{testSent ? 'Alert Dispatched!' : 'Send Test Alert'}</span>
                </button>

                <button
                  type="button"
                  id="save-notif-settings-btn"
                  onClick={() => setShowSettingsModal(false)}
                  className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
