import Head from 'next/head';
import type { GetStaticProps } from 'next';

import { Seo } from '@components/common';
import Posts from '@components/post/Posts';
import Pagination from '@components/post/Pagination';
import type { GetStaticPropsResult } from '@interface';
import { BLOG_THUMBNAIL } from '@utils';
import { getPostPaginationPaths, getPostsByPage } from '@utils/mdxUtils';
import SimpleIntroduce from '@components/SimpleIntroduce';

interface Props extends GetStaticPropsResult {}

export default function Home({ posts, currentPage, paginationLength }: Props) {
  return (
    <>
      <Seo
        title='감구마'
        description='감구마의 개발 블로그'
        thumbnail={BLOG_THUMBNAIL}
        keywords={['개발', '개발자', '감구마', '42seoul', '42서울', '프론트엔드']}
      />
      <Head>{/* <link rel='canonical' href={process.env.NEXT_PUBLIC_SITE_URL} /> */}</Head>
      <SimpleIntroduce />
      <Posts posts={posts} />
      <Pagination currentPage={currentPage} paginationLength={paginationLength} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getPostsByPage(1);
  const pageLength = getPostPaginationPaths().length;

  return {
    props: {
      posts,
      currentPage: 1,
      paginationLength: pageLength,
    },
  };
};
