import { getAllPost } from '@//utils/mdxUtils';
import { PostCard } from './components/PostCard';

export default function Home() {
  const posts = getAllPost();

  return (
    <div className='mt-5'>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  );
}
