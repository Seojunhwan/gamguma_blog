import { prisma } from './prisma';

export const incrementPostViewCountBySlug = async (slug: string) => {
  const { views } = await prisma.postViews.upsert({
    where: { slug },
    create: { slug, views: 1 },
    update: { views: { increment: 1 } },
  });

  return views;
};

export const getPostViewCountBySlug = async (slug: string) => {
  const postView = await prisma.postViews.findUnique({
    where: { slug },
  });
  return postView?.views ?? 0;
};
