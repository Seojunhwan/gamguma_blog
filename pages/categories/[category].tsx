import { useState } from 'react';
import Posts from '@components/post/Posts';

import type { GetStaticPropsParams, GetStaticPropsResult, Post } from '@interface';
import { CategoryNavigation, Seo } from '@components/common';
import Pagination from '@components/post/Pagination';

import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getAllPost } from '@utils/mdxUtils';
import { BLOG_THUMBNAIL, TAGS as tags } from '@constants';

interface Props {
  posts: Post[];
}

export default function Categories({ posts = [] }: Props) {
  return (
    <>
      <Seo
        title='감구마'
        description='감구마의 개발 블로그'
        thumbnail={BLOG_THUMBNAIL}
        keywords={['개발', '개발자', '감구마', '42seoul', '42서울', '프론트엔드']}
      />
      <Head>{/* <link rel='canonical' href={process.env.NEXT_PUBLIC_SITE_URL} /> */}</Head>
      <div className='flex items-start space-x-4'>
        <Posts posts={posts} />
        <div className='hidden lg:block'>
          <CategoryNavigation />
        </div>
      </div>
      {/* <Pagination currentPage={currentPage} paginationLength={paginationLength} /> */}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = tags.map((tag) => ({ params: { category: tag.toLocaleLowerCase() } }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { category: string }> = async ({ params }) => {
  const posts = getAllPost();
  const filteredPost = posts.filter((post) => {
    return post.data.hashTags.some((tag) => tag.toLocaleLowerCase() === params?.category);
  });

  return {
    props: {
      posts: filteredPost,
    },
  };
};
