import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import type { GetStaticPaths, GetStaticProps } from 'next';

import { CategoryNavigation, Seo } from '@components/common';
import { Empty } from '@components/lotties';
import { Posts } from '@components/post';
import { animateVariants, BLOG_THUMBNAIL, TAGS as tags } from '@constants';
import { getAllPost } from '@utils/mdxUtils';
import { isEmpty } from '@utils';
import type { Post } from '@interface';

interface Props {
  posts: Post[];
}

export default function Categories({ posts = [] }: Props) {
  const isEmptyCategory = isEmpty(posts);

  return (
    <>
      <Seo
        title='감구마'
        description='감구마의 개발 블로그'
        thumbnail={BLOG_THUMBNAIL}
        keywords={['개발', '개발자', '감구마', '42seoul', '42서울', '프론트엔드']}
      />
      <Head>{/* <link rel='canonical' href={process.env.NEXT_PUBLIC_SITE_URL} /> */}</Head>
      <AnimatePresence>
        <div className='flex items-start space-x-4'>
          {!isEmptyCategory ? (
            <Posts posts={posts} />
          ) : (
            <motion.div
              variants={animateVariants}
              initial='initial'
              animate='animate'
              className='mb-2 flex grow flex-col items-center justify-center px-4 py-8 lg:px-0'
            >
              <h1 className='mb-4 text-2xl font-semibold'>아직 작성된 글이 없습니다.</h1>
              <Empty className='w-1/2 md:w-2/5' />
            </motion.div>
          )}
          <div className='hidden lg:block'>
            <CategoryNavigation />
          </div>
        </div>
      </AnimatePresence>
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
