import type { MetadataRoute } from 'next';

const SITE_URL = 'https://ldy-fe.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    '',
    '/about',
    '/footprint',
    '/skill/language',
    '/skill/lib',
    '/skill/tool',
    '/skill/interest',
  ];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
