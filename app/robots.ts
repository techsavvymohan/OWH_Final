import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/private/', '/_next/'],
      },
    ],
    sitemap: 'https://onlywayonline.com/sitemap.xml',
  };
}
