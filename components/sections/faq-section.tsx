'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  MessageCircle, 
  Sparkles 
} from 'lucide-react';

interface FaqSectionProps {
  onOpenProjectModal: (service?: string) => void;
}

const FAQS = [
  {
    q: 'Do I need technical skills or coding knowledge to work with OnlyWayOnline?',
    a: 'None at all. We handle all technical maintenance, hosting, updates, security, and coding for you. You receive a simple dashboard to view your leads and can request content updates or edits anytime with one click.',
  },
  {
    q: 'How does your Zero-Bug Handover Protocol™ protect my business?',
    a: 'Traditional web agencies build a site, collect their fee, and leave. When pages crash or load slowly, you are forced to pay another developer to fix it. We test every single page across 18 phone, tablet, and laptop screen sizes before launch. Plus, every site includes a 90-day stability guarantee: if any bug or issue occurs, we fix it within 24 hours at $0 cost to you.',
  },
  {
    q: 'Can you handle marketing, Google SEO, and paid ads for our existing website?',
    a: 'Yes. If you already have an active website, we can run our monthly Growth Retainers (Google Search SEO, Social Media Content, Paid Google/Meta Ads, and Lead Funnels) to drive consistent traffic and new customer inquiries.',
  },
  {
    q: 'Will my existing Google rankings be safe if I redesign my website with you?',
    a: 'We prioritize preserving and growing your search equity. During a website redesign, we map all your existing URLs with comprehensive 301 redirects to protect your search engine authority. By making your site faster and Core Web Vitals compliant, we optimize toward stronger search ranking signals post-launch.',
  },
  {
    q: 'How fast can my new website or growth campaign go live?',
    a: 'A standard custom website redesign or corporate site takes 3 to 4 weeks from kick-off to launch. Full-scale e-commerce stores and software platforms typically take 4 to 8 weeks.',
  },
  {
    q: 'How do I track my website leads, traffic, and return on investment?',
    a: 'You receive access to our Single Unified Client Dashboard. It shows live data on how many phone calls, contact forms, sales leads, and Google visits your site receives every month — presented in plain numbers with no confusing technical jargon.',
  },
  {
    q: 'Can I start with just a website build and add marketing services later?',
    a: 'Yes! Many of our long-term clients start with a custom Website Build Sprint. Because every site we build is optimized for Google SEO from Day 1, adding monthly SEO or paid ads later is completely seamless.',
  },
  {
    q: 'What makes OnlyWayOnline different from other web agencies?',
    a: 'Most agencies view a website as a one-time graphic design project. We view your website as a 24/7 sales engine. We combine high-speed engineering with active monthly marketing so your website actively generates leads and revenue month after month.',
  },
];

export function FaqSection({ onOpenProjectModal }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredFaqs = FAQS.filter(
    faq =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TRANSPARENT ANSWERS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Everything you need to know about our Zero-Bug handover protocol, build process, and growth retainers.
          </p>

          {/* Search Filter with Full Accessibility */}
          <div className="mt-6 max-w-md mx-auto relative">
            <label htmlFor="faq-search-input" className="sr-only">
              Search frequently asked questions
            </label>
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              id="faq-search-input"
              name="faq_search"
              type="text"
              aria-label="Search frequently asked questions"
              placeholder="Search answers (e.g. Zero-Bug, retainers, SEO, timeline)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
            />
          </div>
        </div>

        {/* Single-Expand Accordion List with Accessible Markup */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const headingId = `faq-heading-${idx}`;
            const answerId = `faq-answer-${idx}`;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-all hover:border-slate-300"
              >
                <h3 className="text-base font-normal m-0 p-0" id={headingId}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-blue-50 text-blue-700 font-bold' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={headingId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <span>Have a specific architectural or retainer question?</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Talk directly with our lead engineer & growth strategist on a 15-minute introductory call.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenProjectModal('General Inquiry')}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            Ask Us Anything
          </button>
        </div>
      </div>
    </section>
  );
}
