import Head from 'next/head';
import { motion } from 'framer-motion';
import type { GetStaticProps } from 'next';

import { CategoryNavigation, Seo } from '@components/common';
import { SimpleIntroduce } from '@components/profile';
import { Pagination, Posts } from '@components/post';
import { animateVariants, BLOG_THUMBNAIL } from '@constants';
import { getPostPaginationPaths, getPostsByPage } from '@utils/mdxUtils';

import type { GetStaticPropsResult } from '@interface';

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
      <motion.div variants={animateVariants} initial='initial' animate='animate' exit='exit'>
        <SimpleIntroduce />
        <div className='flex items-start space-x-4'>
          <Posts posts={posts} />
          <div className='hidden lg:block'>
            <CategoryNavigation />
          </div>
        </div>
        <Pagination currentPage={currentPage} paginationLength={paginationLength} />
      </motion.div>
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
