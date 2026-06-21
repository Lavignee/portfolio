import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://ldy-fe.com/sitemap.xml',
    host: 'https://ldy-fe.com',
  };
}
