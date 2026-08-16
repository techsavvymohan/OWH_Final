import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://onlywayonline.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/private/', '/_next/'],
      },
      // Explicit rules welcoming AI Search & Answer Engine Crawlers (GEO / AEO)
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
          'cohere-ai',
          'Bingbot',
          'Googlebot',
        ],
        allow: ['/', '/llms.txt', '/sitemap.xml'],
        disallow: ['/api/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
