import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import HashTag from '../../components/HashTag';
import Posts from '../../components/post/Posts';
import { getAllPost } from '../../utils/mdxUtils';

export interface IFrontMatter {
  title: string;
  slug: string;
  author: string;
  hashTags: string[];
  description: string;
  createAt: string;
  isPublish: boolean;
}

interface IPost {
  content: string;
  filePath: string;
  data: IFrontMatter;
}

interface IProps {
  posts: IPost[];
  allHashTags: [];
}

export default function Post({ posts, allHashTags }: IProps) {
  const [filterPosts, setFilterPosts] = useState<IPost[]>();
  const router = useRouter();
  const {
    query: { hashTag },
  } = router;
  //TODO: useEffect 부분 리팩토링 필요
  useEffect(() => {
    if (!hashTag || hashTag === 'All') {
      setFilterPosts(posts);
    } else if (hashTag) {
      const filteredPost = posts.filter((post) => {
        const {
          data: { hashTags },
        } = post;
        if (typeof hashTag === 'object') {
          return hashTag.map((hashT) => hashTags.includes(hashT));
        } else if (typeof hashTag === 'string') {
          return hashTags.includes(hashTag);
        }
      });
      setFilterPosts(filteredPost);
    }
  }, [hashTag]);
  return (
    <Container>
      <HashTag hashTags={['All', ...allHashTags]}></HashTag>
      {filterPosts && <Posts posts={filterPosts} />}
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
