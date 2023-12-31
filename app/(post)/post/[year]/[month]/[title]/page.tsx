import { MDX } from '@/components/Markdown';
import { getRelativeDate } from '@/utils/date';
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
  const { mdxSource, metadata } = await getPost([year, month, title]);

  return (
    <article>
      <div>
        <h2 className='text-3xl font-semibold text-gray-900'>{metadata.title}</h2>
        <p className='text-base text-gray-500'>{metadata.description}</p>
        <time className='text-sm text-gray-500' dateTime={metadata.createAt}>
          {getRelativeDate(metadata.createAt)}
        </time>
      </div>
      <MDX mdxSource={mdxSource} />
    </article>
  );
}
