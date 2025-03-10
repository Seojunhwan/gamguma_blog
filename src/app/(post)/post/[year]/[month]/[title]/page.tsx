import { Views } from '@/app/(post)/components/views';
import { Button, Utterances } from '@/components/common';
import { MDX } from '@/components/markdown';
import { getAllPost, getPost } from '@/utils/mdxUtils';
import { createBaseUrl } from '@/utils/url';
import type { Metadata, ResolvingMetadata } from 'next';
import { Link } from 'next-view-transitions';
import { Suspense } from 'react';
import { CreatedAt, CreatedAtLoader } from './components/CreatedAt';
import { OutdatedWarning } from './components/OutdatedWarning';
import { Toc } from './components/Toc';
import { Fog } from './components/Fog';

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
      images: { url: createBaseUrl(`/og?title=${metadata.title}`), width: 1200, height: 630 },
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
            <div className='flex items-center justify-between gap-2'>
              <h1 className='text-lg font-semibold dark:text-gray-1200'>{metadata.title}</h1>
              <Link href='/' className='flex-shrink-0'>
                <Button variant='link' className='text-xs'>
                  뒤로가기
                </Button>
              </Link>
            </div>
            <p className='text-sm font-medium text-neutral-700 dark:text-gray-1100'>{metadata.description}</p>
          </div>

          <div className='flex items-center justify-between'>
            <Suspense fallback={<CreatedAtLoader createdAt={metadata.createdAt} />}>
              <CreatedAt createdAt={metadata.createdAt} />
            </Suspense>

            <Suspense fallback={<Views.Loader />}>
              <Views.WithIncrement slug={slug} className='font-medium text-neutral-600 dark:text-gray-1100' />
            </Suspense>
          </div>
        </div>

        <OutdatedWarning createdAt={metadata.createdAt} />

        <Toc />

        <Fog />
        <section id='content'>
          <MDX mdxSource={mdxSource} />
        </section>
      </article>
      <Utterances />
    </>
  );
}
