import Link from 'next/link';

import Thumbnail from './Thumbnail';
import { getRelativeDate } from '@utils';
import type { Post } from '@interface';

interface Props {
  posts: Post[];
}

export default function Posts({ posts }: Props) {
  return (
    <div className='flex flex-col px-4 lg:px-0'>
      {posts.map((post) => (
        <article
          key={post.slug}
          className='mb-8 flex flex-col rounded-md p-4 shadow-sm ring-1 ring-gray-200 transition-shadow hover:ring-4 hover:ring-amber-200 dark:ring-gray-700 md:flex-row md:items-center md:justify-between md:space-x-2 md:py-8'
        >
          <Thumbnail src={post.data.thumbnail} />
          <div className='order-2 mt-4 flex grow basis-0 flex-col space-y-2 p-2 md:order-1 md:mt-0'>
            <Link href={`/post/${post.slug}`}>
              <h2 className='text-lg font-bold text-gray-700'>{post.data.title}</h2>
            </Link>
            <div className='md:mr-6'>
              <p className='mb-1 max-h-20 overflow-hidden text-ellipsis text-sm font-medium text-gray-700'>
                {post.data.description}
              </p>
              <time dateTime={post.data.createAt} className='text-sm font-light text-gray-400'>
                {getRelativeDate(post.data.createAt)}
              </time>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
