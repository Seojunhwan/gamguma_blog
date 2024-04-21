import { Views } from '@/app/(post)/components/Views';
import { type Post } from '@/interfaces/Post';
import { getRelativeDate } from '@/utils/date';
import Link from 'next/link';
import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';

type PostCardProps = Post;

function formatDate(date: Date | string) {
  noStore();
  return getRelativeDate(date);
}

export const PostCard = ({ slug, metadata }: PostCardProps) => {
  return (
    <article
      key={slug}
      className='group mb-8 flex flex-col rounded-lg transition-all hover:bg-neutral-100 dark:hover:bg-gray-200 dark:active:dark:hover:bg-gray-200'
    >
      <Link href={`/post/${slug}`} className='w-full p-3'>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center justify-between'>
            <h2 className='break-keep text-base font-medium tracking-tight text-neutral-900 dark:text-gray-1200'>
              {metadata.title}
            </h2>
            <time
              dateTime={metadata.createAt}
              className='whitespace-nowrap text-xs font-light text-neutral-600 dark:text-gray-1100'
            >
              <Suspense fallback={<span className='w-4 animate-pulse'></span>}>
                {formatDate(metadata.createAt)}
              </Suspense>
            </time>
          </div>

          <div className='flex items-center justify-between'>
            <p className='line-clamp-1 text-sm text-neutral-700 transition-opacity group-hover:opacity-100 md:opacity-50 dark:text-gray-1000'>
              {metadata.description}
            </p>
            <div className='shrink-0'>
              <Suspense fallback={<Views.Loader />}>
                <Views slug={slug} />
              </Suspense>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
