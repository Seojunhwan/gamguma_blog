import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IFrontMatter } from '..';
import HashTag from '../../components/HashTag';
import Posts from '../../components/post/Posts';
import { getAllPost } from '../../utils/mdxUtils';

interface IPost {
  content: string;
  filePath: string;
  data: IFrontMatter;
}

interface IProps {
  posts: IPost[];
  allHashTags: string[];
}

export default function Post({ posts, allHashTags }: IProps) {
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>();
  const router = useRouter();
  const {
    query: { hashTag },
  } = router;
  //TODO: useEffect 부분 리팩토링 필요
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
    <Container>
      <HashTag isHashTagMenu hashTags={['All', ...allHashTags]}></HashTag>
      {filteredPosts && <Posts posts={filteredPosts} />}
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllPost();
  const hashTags = [].concat(
    ...posts.map((post) => {
      return post.data.hashTags;
    }),
  );
  const result = Array.from(new Set(hashTags));
  return {
    props: {
      posts,
      allHashTags: result,
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
