import { getAllPost } from '@/utils/mdxUtils';
import { PostCard } from './components/post-card';
import { Metadata } from 'next';
import { BASE_URL } from '@/constants/url';

export const metadata: Metadata = {
  title: '감구마 | 감구마 개발블로그',
  description: '감구마의 개발 블로그',
  keywords: ['개발', '개발자', '감구마', '프론트엔드'],
  robots: 'index, follow',
  publisher: '서준환',
  authors: {
    name: '서준환',
    url: BASE_URL,
  },
  openGraph: {
    url: BASE_URL + '/post',
    locale: 'ko',
    title: '감구마 | 감구마 개발블로그',
    description: '감구마의 개발 블로그',
    authors: '서준환',
    images: {
      url: 'https://gamguma-blog.s3.ap-northeast-2.amazonaws.com/thumbnail/blog_thumbnail.jpeg',
      width: 1200,
      height: 630,
    },
  },
};

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
