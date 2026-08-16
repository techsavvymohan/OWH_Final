import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/lib/auth-context';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://onlywayonline.com'),
  title: {
    default: 'OnlyWayOnline — Websites That Actually Bring You Customers',
    template: '%s | OnlyWayOnline',
  },
  description:
    'We build beautiful, lightning-fast websites and complete marketing systems that rank on Google, bring real customer leads, and never crash — backed by a 90-day free fix guarantee.',
  keywords: [
    'Website Design Company',
    'Custom Web Development India',
    'Fast Next.js Websites',
    'Google SEO Agency',
    'Google Ads Management',
    'Facebook Ads Agency',
    'E-Commerce Website Builder',
    'High Speed Website Overhaul',
    'Website Developer Delhi',
    'OnlyWayOnline Growth Partner',
    'Website Redesign Without Losing SEO',
    'Mobile Friendly Web Development',
  ],
  authors: [{ name: 'OnlyWayOnline Team', url: 'https://onlywayonline.com' }],
  creator: 'OnlyWayOnline',
  publisher: 'OnlyWayOnline Studio',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://onlywayonline.com',
  },
  openGraph: {
    title: 'OnlyWayOnline — Websites That Actually Bring You Customers',
    description:
      'We replace slow, fragile websites with lightning-fast platforms designed to capture leads, rank on Google, and grow your business with zero technical stress.',
    url: 'https://onlywayonline.com',
    siteName: 'OnlyWayOnline',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&auto=format&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'OnlyWayOnline Web Systems and Growth Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnlyWayOnline — Websites That Actually Bring You Customers',
    description:
      'Lightning-fast websites, Google search ranking, and high-return advertising funnels for your business.',
    creator: '@onlywayonline',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&auto=format&fit=crop&q=80',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.webp', type: 'image/webp', sizes: '32x32' },
      { url: '/favicon-16x16.webp', type: 'image/webp', sizes: '16x16' },
      { url: '/icon-192.webp', type: 'image/webp', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-touch-icon.webp', sizes: '180x180', type: 'image/webp' },
    ],
  },
  other: {
    'geo.region': 'IN-DL',
    'geo.placename': 'New Delhi, Pitampura',
    'geo.position': '28.6924;77.1517',
    'ICBM': '28.6924, 77.1517',
  },
};

// Comprehensive Structured Graph for SEO, GEO, AEO, and E-E-A-T
const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. Organization & E-E-A-T Entity
    {
      '@type': 'Organization',
      '@id': 'https://onlywayonline.com/#organization',
      name: 'OnlyWayOnline',
      alternateName: ['OWO', 'OnlyWay Online Studio'],
      url: 'https://onlywayonline.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://onlywayonline.com/assets/logo.webp',
        caption: 'OnlyWayOnline Logo',
      },
      description:
        'Enterprise web engineering and digital growth agency delivering Zero-Defect full-stack applications, sub-second Core Web Vitals, and compound acquisition systems.',
      slogan: 'Only means Strategy · Way means Velocity · Online means Compound Growth',
      foundingLocation: {
        '@type': 'Place',
        name: 'New Delhi, India',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 971, 9th Floor, Aggarwal Millenium Tower 2, Netaji Subhash Place',
        addressLocality: 'Pitampura, Delhi',
        postalCode: '110034',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.6924,
        longitude: 77.1517,
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Support & Project Discovery',
          email: 'info@onlywayonline.com',
          availableLanguage: ['English', 'Hindi'],
          areaServed: ['Worldwide', 'IN', 'US', 'GB', 'CA', 'AU', 'AE', 'SG'],
        },
      ],
      sameAs: [
        'https://twitter.com/onlywayonline',
        'https://linkedin.com/company/onlywayonline',
        'https://github.com/onlywayonline',
      ],
      knowsAbout: [
        'Web Design & Full-Stack Development',
        'Next.js 15 App Router & React 19',
        'Programmatic SEO & Schema Architecture',
        'Google Core Web Vitals Optimization',
        'Conversion Rate Optimization (CRO)',
        'Paid Media Strategy (Meta & Google Ads)',
        'E-Commerce & Headless Storefronts',
        'Automated End-to-End QA Testing',
      ],
    },

    // 2. ProfessionalService & LocalBusiness (GEO / Local SEO)
    {
      '@type': 'ProfessionalService',
      '@id': 'https://onlywayonline.com/#service',
      name: 'OnlyWayOnline Web Systems & Growth Agency',
      parentOrganization: { '@id': 'https://onlywayonline.com/#organization' },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&auto=format&fit=crop&q=80',
      telephone: '+91-11-49000000',
      email: 'info@onlywayonline.com',
      url: 'https://onlywayonline.com',
      priceRange: '$$$$',
      currenciesAccepted: 'INR, USD, EUR, GBP, AED',
      paymentAccepted: 'Wire Transfer, Credit Card, Stripe, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 971, 9th Floor, Aggarwal Millenium Tower 2, Netaji Subhash Place',
        addressLocality: 'Pitampura, Delhi',
        postalCode: '110034',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.6924,
        longitude: 77.1517,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Singapore' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Engineering & Digital Growth Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Corporate Website & Digital Flagship Build',
              description: 'Bespoke Figma design, Next.js 15 server-first build, 100/100 Core Web Vitals benchmark, and 30-day stability warranty.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SaaS Web Platform & Client Portal MVP',
              description: 'Scalable frontend web application with secure authentication, real-time dashboards, and 60-day monitored stability SLA.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Programmatic SEO Growth Retainer',
              description: 'Technical schema architecture, commercial keyword clusters, crawl optimization, and AI-search readiness for ChatGPT & Google.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'High-ROAS Paid Ads Management (Google & Meta)',
              description: 'Full-funnel paid media campaigns with server-side CAPI tracking, custom landing pages, and target 3x–5x+ ROAS benchmarks.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '90-Day Rapid Launch & Growth Sprint',
              description: 'Complete 3-phase transformation: Days 1–30 Build, Days 31–60 Traffic & Indexing, Days 61–90 Conversion Optimization.',
            },
          },
        ],
      },
    },

    // 3. WebSite with Search / Identity
    {
      '@type': 'WebSite',
      '@id': 'https://onlywayonline.com/#website',
      url: 'https://onlywayonline.com',
      name: 'OnlyWayOnline',
      description: 'Zero-Defect Web Systems & Full-Funnel Growth Engineering',
      publisher: { '@id': 'https://onlywayonline.com/#organization' },
    },

    // 4. FAQPage Schema for Direct Answer Engine Optimization (AEO & AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://onlywayonline.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need technical skills or coding knowledge to work with OnlyWayOnline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'None at all. We handle all technical maintenance, hosting, updates, security, and coding for you. You receive a simple dashboard to view your leads and can request content updates or edits anytime with one click.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does your Zero-Bug Handover Protocol™ protect my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional web agencies build a site, collect their fee, and leave. When pages crash or load slowly, you are forced to pay another developer to fix it. We test every single page across 18 phone, tablet, and laptop screen sizes before launch. Plus, every site includes a 90-day stability guarantee: if any bug or issue occurs, we fix it within 24 hours at $0 cost to you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you handle marketing, Google SEO, and paid ads for our existing website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. If you already have an active website, we can run our monthly Growth Retainers (Google Search SEO, Social Media Content, Paid Google/Meta Ads, and Lead Funnels) to drive consistent traffic and new customer inquiries.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my existing Google rankings be safe if I redesign my website with you?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We prioritize preserving and growing your search equity. During a website redesign, we map all your existing URLs with comprehensive 301 redirects to protect your search engine authority. By making your site faster and Core Web Vitals compliant, we optimize toward stronger search ranking signals post-launch.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast can my new website or growth campaign go live?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard custom website redesign or corporate site takes 3 to 4 weeks from kick-off to launch. Full-scale e-commerce stores and software platforms typically take 4 to 8 weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I track my website leads, traffic, and return on investment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You receive access to our Single Unified Client Dashboard. It shows live data on how many phone calls, contact forms, sales leads, and Google visits your site receives every month — presented in plain numbers with no confusing technical jargon.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I start with just a website build and add marketing services later?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Many of our long-term clients start with a custom Website Build Sprint. Because every site we build is optimized for Google SEO from Day 1, adding monthly SEO or paid ads later is completely seamless.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes OnlyWayOnline different from other web agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most agencies view a website as a one-time graphic design project. We view your website as a 24/7 sales engine. We combine high-speed engineering with active monthly marketing so your website actively generates leads and revenue month after month.',
          },
        },
      ],
    },

    // 5. Speakable Specification (for Voice Search: Siri, Alexa, Google Assistant)
    {
      '@type': 'WebPage',
      '@id': 'https://onlywayonline.com/#webpage',
      url: 'https://onlywayonline.com',
      name: 'OnlyWayOnline — Zero-Defect Web Systems & Full-Funnel B2B Growth',
      isPartOf: { '@id': 'https://onlywayonline.com/#website' },
      about: { '@id': 'https://onlywayonline.com/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'p.text-slate-600'],
      },
    },

    // 6. BreadcrumbList
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://onlywayonline.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://onlywayonline.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services & Build Wing',
          item: 'https://onlywayonline.com/#services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Growth Engine Retainers',
          item: 'https://onlywayonline.com/#growth',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Pricing & Plans',
          item: 'https://onlywayonline.com/#pricing',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Frequently Asked Questions',
          item: 'https://onlywayonline.com/#faq',
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} light`}
      style={{ colorScheme: 'light' }}
    >
      <head>
        <link rel="alternate" type="text/plain" href="https://onlywayonline.com/llms.txt" title="LLM Knowledge Base" />
        <script
          id="window-fetch-safe-setter"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var globalObj = typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : self);
                  if (!globalObj) return;
                  var origFetch = globalObj.fetch;
                  var _fetch = origFetch;
                  
                  // Handle window.fetch property descriptor if it's getter-only
                  var desc = Object.getOwnPropertyDescriptor(globalObj, 'fetch');
                  if (!desc || desc.configurable || !desc.writable) {
                    try {
                      Object.defineProperty(globalObj, 'fetch', {
                        get: function() { return _fetch || origFetch; },
                        set: function(fn) { _fetch = fn; },
                        configurable: true,
                        enumerable: true
                      });
                    } catch (e) {
                      try {
                        if (globalObj.Window && globalObj.Window.prototype) {
                          Object.defineProperty(globalObj.Window.prototype, 'fetch', {
                            get: function() { return _fetch || origFetch; },
                            set: function(fn) { _fetch = fn; },
                            configurable: true,
                            enumerable: true
                          });
                        }
                      } catch (e2) {}
                    }
                  }
                } catch (err) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
