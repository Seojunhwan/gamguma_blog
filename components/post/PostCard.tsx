import { Profile } from '@components/profile';
import Thumbnail from './Thumbnail';
import { getRelativeDate } from '@utils';

import type { Post } from '@interface';

interface Props {
  post: Post;
}

export function PostCard({ post }: Props) {
  return (
    <article
      className='mb-8 flex flex-col rounded-md p-4 shadow-sm ring-1 ring-gray-200 transition-all 
                hover:-translate-y-1 hover:bg-neutral-50 hover:ring-4 hover:ring-amber-200
              active:bg-neutral-100 dark:ring-gray-700 md:flex-row md:items-center md:justify-between md:space-x-2 md:py-8'
    >
      <div className='grow-1 order-1 overflow-hidden rounded-lg shadow-md md:order-2 md:w-60 md:grow-0 md:basis-auto'>
        <Thumbnail src={post.data.thumbnail} />
      </div>
      <div className='order-2 mt-4 flex grow basis-0 flex-col space-y-2 p-2 md:order-1 md:mt-0'>
        <h2 className='text-lg font-bold text-gray-700'>{post.data.title}</h2>
        <div className='md:mr-6'>
          <p className='mb-1 max-h-20 overflow-hidden text-ellipsis text-sm font-medium text-gray-600'>
            {post.data.description}
          </p>
          <div className='mt-5 flex items-center justify-between space-x-2 md:justify-start'>
            <Profile imageSize='xsm' />
            <time dateTime={post.data.createAt} className='text-sm font-light text-gray-400'>
              {getRelativeDate(post.data.createAt)}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
}
