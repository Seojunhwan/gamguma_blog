import { createBaseUrl } from '@/utils/url';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/tags',
    },
    sitemap: createBaseUrl('/sitemap.xml'),
  };
}
