import { getAllPost } from '@/utils/mdxUtils';
import { PostCard } from './components/PostCard';

export default async function Home() {
  const posts = await getAllPost();

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
