import { Post } from '@/components/Post';
import { getPost } from '@/utils/mdxUtils';

export default async function Home() {
  const { mdxSource, content, frontMatter } = await getPost(['2022', '01', 'nextjs-blog-development-review']);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Post mdxSource={mdxSource} />
    </main>
  );
}
