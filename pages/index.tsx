import Head from 'next/head';
import { IPost } from '../interfaces';
import Posts from '../components/post/Posts';
import Seo from '../components/common/Seo';
import { getAllPost } from '../utils/mdxUtils';

interface IProps {
  posts: IPost[];
}

export default function Home({ posts }: IProps) {
  const BLOG_THUMBNAIL = 'https://gamguma-blog.s3.ap-northeast-2.amazonaws.com/thumbnail/blog_thumbnail.jpeg';
  return (
    <>
      <Seo
        title='감구마'
        description='감구마의 개발 블로그'
        thumbnail={BLOG_THUMBNAIL}
        keywords={['개발', '개발자', '감구마', '42seoul', '42서울', '프론트엔드']}
      />
      <Head>
        <link rel='canonical' href={process.env.NEXT_PUBLIC_SITE_URL} />
      </Head>
      <Posts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPost();
  return { props: { posts } };
}
