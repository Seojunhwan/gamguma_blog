import media from '../../styles/media';
import styled from 'styled-components';
import HashTag from '../HashTag';
import Link from 'next/link';
import { IPost } from '../../common/types';
import Thumbnail from './Thumbnail';

export default function Posts({ posts }: { posts: IPost[] }) {
  return (
    <Container>
      {posts.slice(0, 6).map((article) => (
        <Post key={article.slug}>
          <Thumbnail src={article.data.thumbnail} />
          <PostInfoContainer>
            <Link href={`/post/${article.slug}`}>
              <a>
                <Title>{article.data.title}</Title>
              </a>
            </Link>
            <Description>{article.data.description}</Description>
            <CreateAt>{article.data.createAt}</CreateAt>
            <HashTag hashTags={article.data.hashTags} articleId={article.slug} isHashTagMenu={false} />
          </PostInfoContainer>
        </Post>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  ${media.small} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.medium} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Post = styled.article`
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.defaultShadow};
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1.3rem;
  overflow: hidden;
  height: 6rem;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow-wrap: break-word;
  line-height: 2rem;
`;

const CreateAt = styled.span`
  margin-bottom: 1rem;
`;

const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;
