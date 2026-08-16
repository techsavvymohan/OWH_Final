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
    default: 'OnlyWayOnline — Zero-Defect Web Systems & Full-Funnel B2B Growth Engine',
    template: '%s | OnlyWayOnline',
  },
  description:
    'We engineer high-performance web applications, custom SaaS platforms, and enterprise digital ecosystems with an uncompromising Zero-Bug SLA, 100/100 Core Web Vitals, and compound organic SEO & paid acquisition systems.',
  keywords: [
    'Zero-Bug Web Development',
    'Next.js 15 Full-Stack Agency',
    'SaaS Engineering Studio',
    'Core Web Vitals Optimization',
    'B2B Growth Systems',
    'High ROAS Paid Media',
    'Technical SEO Architecture',
    'Automated QA Testing',
    'Conversion Rate Optimization CRO',
    'Custom Web App Development',
    'Enterprise Frontend Architecture',
    'OnlyWayOnline Growth Stack',
  ],
  authors: [{ name: 'OnlyWayOnline Engineering Team', url: 'https://onlywayonline.com' }],
  creator: 'OnlyWayOnline',
  publisher: 'OnlyWayOnline Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://onlywayonline.com',
  },
  openGraph: {
    title: 'OnlyWayOnline — Zero-Defect Web Systems & Full-Funnel B2B Growth Engine',
    description:
      'We engineer high-performance web applications and run the SEO, paid ads, and social growth that turn visitors into predictable recurring revenue.',
    url: 'https://onlywayonline.com',
    siteName: 'OnlyWayOnline',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&auto=format&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'OnlyWayOnline Zero-Bug Web Development and Growth Telemetry Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnlyWayOnline — Zero-Defect Web Systems & B2B Growth',
    description:
      'Zero-bug web development, sub-second Core Web Vitals, programmatic SEO, and high-ROAS paid media funnels.',
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
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://onlywayonline.com/#organization',
      name: 'OnlyWayOnline',
      url: 'https://onlywayonline.com',
      logo: 'https://onlywayonline.com/assets/logo.png',
      description:
        'Enterprise web engineering and growth agency delivering Zero-Defect full-stack applications, sub-millisecond Core Web Vitals, and compound acquisition systems.',
      slogan: 'Only means Strategy · Way means Impact · Online means Growth',
      sameAs: [
        'https://twitter.com/onlywayonline',
        'https://linkedin.com/company/onlywayonline',
        'https://github.com/onlywayonline',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Client Strategy & Engineering Desk',
        email: 'hello@onlywayonline.com',
        availableLanguage: ['English'],
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://onlywayonline.com/#service',
      name: 'OnlyWayOnline Web Systems & Growth Agency',
      parentOrganization: { '@id': 'https://onlywayonline.com/#organization' },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&auto=format&fit=crop&q=80',
      priceRange: '$$$$',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Zero-Bug Development & Growth Capabilities',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Zero-Defect Full-Stack Web Development',
              description: 'Next.js 15, React 19, TypeScript, Playwright E2E testing with 100/100 Core Web Vitals guarantee.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Programmatic SEO & High-Intent Search Architecture',
              description: 'Semantic topic clustering, programmatic landing pages, and technical crawl optimization.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'High-ROAS Paid Acquisition & Conversion Funnels',
              description: 'Multi-channel Google Ads, Meta, and LinkedIn campaign scaling with real-time attribution.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '90-Day Rapid Launch & Growth Sprint',
              description: 'Structured 3-phase roadmap from foundational architecture to verified multi-vector growth.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://onlywayonline.com/#website',
      url: 'https://onlywayonline.com',
      name: 'OnlyWayOnline',
      publisher: { '@id': 'https://onlywayonline.com/#organization' },
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
