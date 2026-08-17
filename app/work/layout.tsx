import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work — Selected Digital Products & Case Studies | OnlyWayOnline',
  description:
    'Explore three digital systems engineered by OnlyWayOnline: PersueKey (Commerce Discovery), GoCoupon (E-Commerce Browser Extension), and MatchingProp (Trader Comparison Platform).',
  alternates: {
    canonical: 'https://onlywayonline.com/work',
  },
  openGraph: {
    title: 'Our Work — Selected Digital Products | OnlyWayOnline',
    description:
      'Explore digital systems engineered by OnlyWayOnline: PersueKey, GoCoupon, and MatchingProp.',
    url: 'https://onlywayonline.com/work',
    siteName: 'OnlyWayOnline',
    images: [
      {
        url: '/assets/logo.webp',
        width: 1200,
        height: 630,
        alt: 'OnlyWayOnline Work & Case Studies',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work — Selected Digital Products | OnlyWayOnline',
    description:
      'Explore digital systems engineered by OnlyWayOnline: PersueKey, GoCoupon, and MatchingProp.',
    images: ['/assets/logo.webp'],
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
