import { type Post } from '@//interfaces/Post';
import { getRelativeDate } from '@//utils/date';
import Link from 'next/link';

type PostCardProps = Post;

export const PostCard = ({ slug, metadata }: PostCardProps) => {
  return (
    <article
      key={slug}
      className='mb-8 flex flex-col rounded-lg p-4 transition-all hover:bg-neutral-50 active:bg-neutral-100
          sm:h-48 sm:flex-row sm:items-stretch sm:justify-between sm:py-8'
    >
      <div className='order-2 mt-2 flex h-full grow basis-0 p-2 sm:order-1 sm:mr-6 sm:mt-0 sm:justify-between'>
        <div className='space-y-2'>
          <Link href={`/post/${slug}`} className='inline-block w-fit'>
            <h2 className='w-fit break-keep text-lg font-semibold text-gray-700 hover:text-gray-500'>
              {metadata.title}
            </h2>
          </Link>
          <p className='mb-1 line-clamp-2 overflow-hidden text-ellipsis break-keep text-sm font-light text-gray-600'>
            {metadata.description}
          </p>
        </div>

        <div className='mt-2 flex justify-between sm:mt-0'>
          <div>
            <time dateTime={metadata.createAt} className='text-xs font-extralight text-gray-400'>
              {getRelativeDate(metadata.createAt)}
            </time>
          </div>

          <div className='flex items-center space-x-1'>
            {metadata.hashTags.map((tag) => (
              <span key={tag} className='text-xs font-extralight text-gray-400'>
                TEMP-{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
