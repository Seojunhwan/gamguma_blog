import { BASE_URL } from '@/constants/url';
import { getAllPost } from '@/utils/mdxUtils';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPost();

  const postSitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/post/${post.slug}`,
    lastModified: post.metadata.updatedAt ?? post.metadata.createdAt,
    priority: 0.6,
  }));

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'yearly',
      priority: 1,
    },
    // {
    //   url: `${BASE_URL}/about`,
    //   lastModified: new Date().toISOString().split('T')[0],
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${BASE_URL}/craft`,
    //   lastModified: new Date().toISOString().split('T')[0],
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${BASE_URL}/photo`,
    //   lastModified: new Date().toISOString().split('T')[0],
    //   changeFrequency: 'monthly',
    //   priority: 0.5,
    // },
    ...postSitemap,
  ];
}
