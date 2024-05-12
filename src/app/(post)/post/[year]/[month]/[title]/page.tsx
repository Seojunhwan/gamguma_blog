import { Views } from '@/app/(post)/components/views';
import { Button, Utterances } from '@/components/common';
import { MDX } from '@/components/markdown';
import { BASE_URL } from '@/constants/url';
import { getAllPost, getPost } from '@/utils/mdxUtils';
import type { Metadata, ResolvingMetadata } from 'next';
import { Link } from 'next-view-transitions';
import { Suspense } from 'react';
import { CreatedAt } from './components/CreatedAt';
import { OutdatedWarning } from './components/OutdatedWarning';

interface PostPageProps {
  params: {
    year: string;
    month: string;
    title: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPost();

  return posts.map(({ slug }) => ({
    params: {
      year: slug.split('/')[0],
      month: slug.split('/')[1],
      title: slug.split('/')[2],
    },
  }));
}

export async function generateMetadata(
  { params }: PostPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { year, month, title } = params;

  const { metadata } = await getPost([year, month, title]);

  return {
    title: metadata.title + ' | 감구마 개발블로그',
    description: metadata.description,
    keywords: [...metadata.hashTags, ...((await parent).keywords ?? [])],
    alternates: {
      canonical: `/post/${year}/${month}/${title}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      url: `/post/${year}/${month}/${title}`,
      locale: 'ko',
      type: 'article',
      title: metadata.title,
      description: metadata.description,
      images: { url: `${BASE_URL}/og?title=${metadata.title}`, width: 1200, height: 630 },
      authors: metadata.author,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { year, month, title } = params;
  const { mdxSource, metadata } = await getPost([year, month, title]);
  const slug = [year, month, title].join('/');

  return (
    <>
      <article>
        <div className='mb-8 flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center justify-between'>
              <h1 className='text-lg font-semibold md:text-2xl dark:text-gray-1200'>{metadata.title}</h1>
              <Link href='/'>
                <Button className='p-0 underline underline-offset-4 dark:text-gray-1200 dark:hover:text-gray-1100'>
                  뒤로가기
                </Button>
              </Link>
            </div>
            <p className='text-sm font-medium text-neutral-700 md:text-base dark:text-gray-1100'>
              {metadata.description}
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <Suspense fallback={<span className='w-4 animate-pulse'></span>}>
              <CreatedAt createdAt={metadata.createdAt} />
            </Suspense>
            <Suspense fallback={<Views.Loader />}>
              <Views.WithIncrement
                slug={slug}
                className='text-sm font-medium text-neutral-600 dark:text-gray-1100'
              />
            </Suspense>
          </div>
        </div>

        <Suspense fallback={<div className='w-4 animate-pulse'></div>}>
          <OutdatedWarning createdAt={metadata.createdAt} />
        </Suspense>

        <MDX mdxSource={mdxSource} />
      </article>
      <Utterances />
    </>
  );
}
