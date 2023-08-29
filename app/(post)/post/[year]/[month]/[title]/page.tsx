import { MDX } from '@/components/Markdown';
import { getPost } from '@/utils/mdxUtils';

interface PostPageProps {
  params: {
    year: string;
    month: string;
    title: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { year, month, title } = params;
  const { mdxSource, content, metadata } = await getPost([year, month, title]);

  return (
    <article className='w-full'>
      <MDX mdxSource={mdxSource} />
    </article>
  );
}
