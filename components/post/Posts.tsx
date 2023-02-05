import Link from 'next/link';
import { PostCard } from './PostCard';

import type { Post } from '@interface';

interface Props {
  posts: Post[];
}

export default function Posts({ posts }: Props) {
  return (
    <div className='mb-2 flex grow flex-col px-4 lg:px-0'>
      {posts.map((post) => (
        <Link key={post.slug} href={`/post/${post.slug}`}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  );
}
