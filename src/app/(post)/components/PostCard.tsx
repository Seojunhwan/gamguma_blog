import { Views } from '@/app/(post)/components/Views';
import { type Post } from '@/interfaces/Post';
import { getRelativeDate } from '@/utils/date';
import Link from 'next/link';
import { Suspense } from 'react';

type PostCardProps = Post;

export const PostCard = ({ slug, metadata }: PostCardProps) => {
  return (
    <article
      key={slug}
      className='mb-8 flex flex-col rounded-lg transition-all hover:bg-neutral-100 dark:hover:bg-gray-200 dark:active:dark:hover:bg-gray-200'
    >
      <Link href={`/post/${slug}`} className='w-full p-3'>
        <div className='flex'>
          <div className='flex grow flex-col gap-1'>
            <h2 className='break-keep text-base font-medium tracking-tight text-neutral-900 dark:text-gray-1200'>
              {metadata.title}
            </h2>
            <p className='line-clamp-1 text-sm text-neutral-700 dark:text-gray-1000'>
              {metadata.description}
            </p>
          </div>

          <div className='flex flex-col items-end justify-between whitespace-nowrap'>
            <time
              dateTime={metadata.createAt}
              className='text-xs font-light text-neutral-600 dark:text-gray-1100'
            >
              {getRelativeDate(metadata.createAt)}
            </time>
            <Suspense fallback={<Views.Loader />}>
              <Views slug={slug} />
            </Suspense>
          </div>
        </div>
      </Link>
    </article>
  );
};
