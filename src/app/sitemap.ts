import { getAllPost } from '@/utils/mdxUtils';
import { createBaseUrl } from '@/utils/url';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPost();

  const postSitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: createBaseUrl(`/post/${post.slug}`),
    lastModified: new Date(post.metadata.updatedAt ?? post.metadata.createdAt).toISOString().split('T')[0],
    priority: 0.6,
  }));

  return [
    {
      url: createBaseUrl('/'),
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: createBaseUrl('/about'),
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // {
    //   url: createBaseUrl('/craft'),
    //   lastModified: new Date().toISOString().split('T')[0],
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
    // {
    //   url: createBaseUrl('/photo'),
    //   lastModified: new Date().toISOString().split('T')[0],
    //   changeFrequency: 'monthly',
    //   priority: 0.5,
    // },
    ...postSitemap,
  ];
}
