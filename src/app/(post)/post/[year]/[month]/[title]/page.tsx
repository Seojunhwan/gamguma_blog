import { Views } from '@/app/(post)/components/Views';
import { MDX } from '@/components/Markdown';
import { Button } from '@/components/common';
import { incrementPostViewCountBySlug } from '@/db/post';
import { getDifferenceDate, getRelativeDate } from '@/utils/date';
import { getAllPost, getPost } from '@/utils/mdxUtils';
import { Suspense } from 'react';
import { Callout } from '@/components/Markdown/Callout';
import Link from 'next/link';
import { unstable_noStore as noStore } from 'next/cache';

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

function formatDate(date: Date | string) {
  noStore();
  return getRelativeDate(date);
}

export default async function PostPage({ params }: PostPageProps) {
  const { year, month, title } = params;
  const { mdxSource, metadata } = await getPost([year, month, title]);
  const slug = [year, month, title].join('/');
  await incrementPostViewCountBySlug(slug);

  const { diffDay } = getDifferenceDate(new Date(), metadata.createAt);

  return (
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
          <time
            className='text-sm font-medium text-neutral-600 dark:text-gray-1100'
            dateTime={metadata.createAt}
          >
            <Suspense fallback={<span className='w-4 animate-pulse'></span>}>
              {formatDate(metadata.createAt)}
            </Suspense>
          </time>
          <Suspense fallback={<Views.Loader />}>
            <Views slug={slug} className='text-sm font-medium text-neutral-600 dark:text-gray-1100' />
          </Suspense>
        </div>
      </div>

      {diffDay > 365 && (
        <Callout icon={'⚠️'} className='-mt-2 mb-8'>
          <p className='text-sm text-gray-500 dark:text-gray-1200'>
            이 글은 <strong>{diffDay}일</strong> 전에 작성되었습니다.
            <br />
            최신 정보가 아닐 수 있습니다.
          </p>
        </Callout>
      )}

      <MDX mdxSource={mdxSource} />
    </article>
  );
}
