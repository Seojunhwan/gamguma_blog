import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IPost } from '../common/types';

import HashTag from '../components/HashTag';
import Posts from '../components/post/Posts';
import { getAllPost } from '../utils/mdxUtils';

interface IHashCount {
  name: string;
  count: number;
}
interface IProps {
  posts: IPost[];
  allHashTags: string[];
  hashTagCountInfo: IHashCount[];
}

export default function Tags({ posts, allHashTags, hashTagCountInfo }: IProps) {
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>();
  const router = useRouter();

  const {
    query: { hashTag },
  } = router;

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
        <HashTag isHashTagMenu hashTags={allHashTags} hashTagCountInfo={hashTagCountInfo}></HashTag>
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

  const removedDuplicateHashTags = Array.from(new Set(['All', ...hashTags]));

  const hashTagWithCount = removedDuplicateHashTags.map((hashTag) => {
    if (hashTag === 'All') {
      return { name: hashTag, count: posts.length };
    }
    const count = hashTags.filter((compareTag) => compareTag === hashTag).length;
    return { name: hashTag, count };
  });

  return {
    props: {
      posts,
      allHashTags: removedDuplicateHashTags,
      hashTagCountInfo: hashTagWithCount,
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
