import type { GetStaticPaths, GetStaticProps } from 'next';

import { Seo } from '@components/common';
import Posts from '@components/post/Posts';
import Pagination from '@components/post/Pagination';
import { BLOG_THUMBNAIL } from '@utils';
import { getPostPaginationPaths, getPostsByPage } from '@utils/mdxUtils';
import type { GetStaticPropsParams, GetStaticPropsResult } from '@interface';

interface Props extends GetStaticPropsResult {}

export default function Page({ posts, currentPage, paginationLength }: Props) {
  return (
    <>
      <Seo
        title='감구마'
        description='감구마의 개발 블로그'
        thumbnail={BLOG_THUMBNAIL}
        keywords={['개발', '개발자', '감구마', '42seoul', '42서울', '프론트엔드']}
      />
      <Posts posts={posts} />
      <Pagination currentPage={currentPage} paginationLength={paginationLength} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const removedFirstPagePaths = getPostPaginationPaths().filter((path) => path.params.index !== '1');

  return {
    paths: removedFirstPagePaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<GetStaticPropsResult, GetStaticPropsParams> = async (context) => {
  const currentIndex = Number(context.params?.index);
  const posts = getPostsByPage(currentIndex);
  const pageLength = getPostPaginationPaths().length;

  return {
    props: {
      posts: posts,
      currentPage: currentIndex,
      paginationLength: pageLength,
    },
  };
};
