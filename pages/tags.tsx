import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IPost } from '../common/types';

import HashTag from '../components/HashTag';
import Posts from '../components/post/Posts';
import { getAllPost } from '../utils/mdxUtils';

interface IProps {
  posts: IPost[];
  allHashTags: string[];
}

export default function Tags({ posts, allHashTags }: IProps) {
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>();
  const router = useRouter();
  const {
    query: { hashTag },
  } = router;
  //FIXME: useEffect 부분 리팩토링 필요
  useEffect(() => {
    if (!hashTag || hashTag === 'All') {
      setFilteredPosts(posts);
    } else {
      const filteredPost = posts.filter((post) => {
        if (typeof hashTag === 'string') {
          return post.data.hashTags.includes(hashTag);
        }
      });
      setFilteredPosts(filteredPost);
    }
  }, [hashTag]);
  return (
    <>
      <Head>
        <link rel='canonical' href={process.env.NEXT_PUBLIC_SITE_URL + '/tags'} />
        <title>Tags | 감구마 개발블로그</title>
      </Head>
      <Container>
        <HashTag isHashTagMenu hashTags={['All', ...allHashTags]}></HashTag>
        {filteredPosts && <Posts posts={filteredPosts} />}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPost();
  const hashTags = [].concat(
    ...posts.map((post) => {
      return post.data.hashTags;
    }),
  );
  return {
    props: {
      posts,
      allHashTags: Array.from(new Set(hashTags)),
    },
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
