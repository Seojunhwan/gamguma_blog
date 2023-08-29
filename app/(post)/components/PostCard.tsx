import { Post } from '@/interfaces/Post';
import { getRelativeDate } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';

type PostCardProps = Post;

export const PostCard = ({ slug, metadata }: PostCardProps) => {
  return (
    <article
      key={slug}
      className='mb-8 flex flex-col rounded-lg p-4 transition-all
          hover:bg-neutral-50 active:bg-neutral-100
          sm:h-52 sm:flex-row sm:items-stretch sm:justify-between sm:py-8'
    >
      <div className='relative order-1 aspect-video w-full grow overflow-hidden rounded-lg shadow-sm sm:order-2 sm:w-60 sm:grow-0'>
        <Image src={metadata.thumbnail} alt={`thumbnail of ${metadata.title}`} fill />
      </div>

      <div className='order-2 mt-2 flex h-full grow basis-0 flex-col p-2 sm:order-1 sm:mr-6 sm:mt-0 sm:justify-between'>
        <div className='space-y-2'>
          <Link href={`/post/${slug}`}>
            <h2 className='break-keep text-lg font-bold text-gray-700'>{metadata.title}</h2>
          </Link>
          <p className='mb-1 line-clamp-3 max-h-20 overflow-hidden text-ellipsis break-keep text-sm font-medium text-gray-600'>
            {metadata.description}
          </p>
        </div>

        <div className='mt-5 flex justify-between'>
          <div>
            <time dateTime={metadata.createAt} className='text-xs font-normal text-gray-400'>
              {getRelativeDate(metadata.createAt)}
            </time>
          </div>

          <div className='flex items-center space-x-1'>
            {metadata.hashTags.map((tag) => (
              <span key={tag} className='text-xs font-normal text-gray-400'>
                TEMP-{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
