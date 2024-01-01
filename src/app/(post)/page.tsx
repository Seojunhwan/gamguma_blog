import { getAllPost } from '@/utils/mdxUtils';
import { PostCard } from './components/PostCard';

export default function Home() {
  const posts = getAllPost();

  return (
    <ul className='mt-5'>
      {posts.map((post) => (
        <li key={post.slug}>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  );
}
