import { MetadataRoute } from 'next';
import { BASE_URL } from '../constants/url';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/tags',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
