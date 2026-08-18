import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OnlyWayOnline — High-Performance Web Engineering & Growth Systems',
    short_name: 'OnlyWayOnline',
    description:
      'We build beautiful, lightning-fast websites and complete inbound growth systems backed by a 90-day free fix guarantee.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon-192.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/icon-512.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
      {
        src: '/apple-touch-icon.webp',
        sizes: '180x180',
        type: 'image/webp',
      },
    ],
  };
}
