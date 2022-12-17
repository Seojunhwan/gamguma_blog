import Link from 'next/link';

import Thumbnail from './Thumbnail';
import type { Post } from '@interface';

interface Props {
  posts: Post[];
}

export default function Posts({ posts }: Props) {
  return (
    <div className='flex flex-col'>
      {posts.map((article) => (
        <article key={article.slug}>
          <Thumbnail src={article.data.thumbnail} />
          <div>
            <Link href={`/post/${article.slug}`}>
              <h2>{article.data.title}</h2>
            </Link>
            <div>
              <p>{article.data.description}</p>
            </div>
            <div>
              <span>{article.data.createAt}</span>
              {/* <HashTag hashTags={article.data.hashTags} articleId={article.slug} isHashTagMenu={false} /> */}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
