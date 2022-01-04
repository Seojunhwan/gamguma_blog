import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import HashTag from './HashTag';

interface IPost {
  title: string;
  id: number;
  date: string;
  hashTags: string[];
  description: string;
  content: string;
}

const posts: IPost[] = [
  {
    title: '감자의 테스트',
    id: 1,
    date: '2021-01-03 19:24',
    hashTags: ['감자', '요크셔테리어', '9살'],
    description:
      '감자의 견생 일대기,, 오늘 씻었다감자의 견생 일대기,, 오늘 씻었다감자의 견생 일대기,, 오늘 씻었다감자의 견생 일대기,, 오늘 씻었다감자의 견생 일대기,, 오늘 씻었다감자의 견생 일대기,, 오늘 씻었다',
    content: '감자는 감자고 오늘 0103 2시쯤 씻었다,,!',
  },
  {
    title: '구마의 테스트',
    id: 2,
    date: '2021-01-03 20:55',
    hashTags: ['고구마', '요크셔테리어', '3살'],
    description: '구마의 견생 일대기,, 내일 씻는다',
    content: '구마는 구마고 내일 0104 2시쯤 씻는다,,!',
  },
  {
    title: '감자의 테스트',
    id: 3,
    date: '2021-01-03 19:24',
    hashTags: ['감자', '요크셔테리어', '9살'],
    description: '감자의 견생 일대기,, 오늘 씻었다',
    content: '감자는 감자고 오늘 0103 2시쯤 씻었다,,!',
  },
  {
    title: '구마의 테스트',
    id: 4,
    date: '2021-01-03 20:55',
    hashTags: ['고구마', '요크셔테리어', '3살'],
    description: '구마의 견생 일대기,, 내일 씻는다',
    content: '구마는 구마고 내일 0104 2시쯤 씻는다,,!',
  },
  {
    title: '감자의 테스트',
    id: 5,
    date: '2021-01-03 19:24',
    hashTags: ['감자', '요크셔테리어', '9살'],
    description: '감자의 견생 일대기,, 오늘 씻었다',
    content: '감자는 감자고 오늘 0103 2시쯤 씻었다,,!',
  },
  {
    title: '구마의 테스트',
    id: 6,
    date: '2021-01-03 20:55',
    hashTags: ['고구마', '요크셔테리어', '3살'],
    description: '구마의 견생 일대기,, 내일 씻는다',
    content: '구마는 구마고 내일 0104 2시쯤 씻는다,,!',
  },
  {
    title: '감자의 테스트',
    id: 7,
    date: '2021-01-03 19:24',
    hashTags: ['감자', '요크셔테리어', '9살'],
    description: '감자의 견생 일대기,, 오늘 씻었다',
    content: '감자는 감자고 오늘 0103 2시쯤 씻었다,,!',
  },
  {
    title: '구마의 테스트',
    id: 8,
    date: '2021-01-03 20:55',
    hashTags: ['고구마', '요크셔테리어', '3살'],
    description: '구마의 견생 일대기,, 내일 씻는다',
    content: '구마는 구마고 내일 0104 2시쯤 씻는다,,!',
  },
  {
    title: '구마의 테스트',
    id: 8,
    date: '2021-01-03 20:55',
    hashTags: ['고구마', '요크셔테리어', '3살'],
    description: '구마의 견생 일대기,, 내일 씻는다',
    content: '구마는 구마고 내일 0104 2시쯤 씻는다,,!',
  },
  {
    title: '구마의 테스트',
    id: 8,
    date: '2021-01-03 20:55',
    hashTags: ['고구마', '요크셔테리어', '3살'],
    description: '구마의 견생 일대기,, 내일 씻는다',
    content: '구마는 구마고 내일 0104 2시쯤 씻는다,,!',
  },
  {
    title: '구마의 테스트',
    id: 8,
    date: '2021-01-03 20:55',
    hashTags: ['고구마', '요크셔테리어', '3살'],
    description: '구마의 견생 일대기,, 내일 씻는다',
    content: '구마는 구마고 내일 0104 2시쯤 씻는다,,!',
  },
  {
    title: '구마의 테스트',
    id: 8,
    date: '2021-01-03 20:55',
    hashTags: ['고구마', '요크셔테리어', '3살'],
    description: '구마의 견생 일대기,, 내일 씻는다',
    content: '구마는 구마고 내일 0104 2시쯤 씻는다,,!',
  },
  {
    title: '구마의 테스트',
    id: 8,
    date: '2021-01-03 20:55',
    hashTags: ['고구마', '요크셔테리어', '3살'],
    description: '구마의 견생 일대기,, 내일 씻는다',
    content: '구마는 구마고 내일 0104 2시쯤 씻는다,,!',
  },
  {
    title: '구마의 테스트',
    id: 8,
    date: '2021-01-03 20:55',
    hashTags: ['고구마', '요크셔테리어', '3살'],
    description: '구마의 견생 일대기,, 내일 씻는다',
    content: '구마는 구마고 내일 0104 2시쯤 씻는다,,!',
  },
];

const Container = styled.div`
  width: 100%;
`;

const Posts = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
  gap: 1.5rem;
`;

const Post = styled.article`
  cursor: pointer;
  background-color: #383838;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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

const ImageWrapper = styled.div`
  width: 100%;
  height: 15rem;
  position: relative;
`;

const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export default function Home() {
  const router = useRouter();
  const onClick = (id: number) => {
    router.push(`/post/${id}`);
  };
  return (
    <Container>
      <Posts>
        {posts.slice(0, 6).map((article) => (
          <Post onClick={() => onClick(article.id)} key={article.id}>
            <ImageWrapper>
              <Image
                src={'/구마.jpeg'}
                layout='fill'
                alt={article.title}
                objectFit='cover'
                objectPosition='center center'
              />
            </ImageWrapper>
            <PostInfoContainer>
              <Title>{article.title}</Title>
              <Description>{article.description}</Description>
              {/* TODO: HashTag 필터 연결하기 */}
              <CreateAt>{article.date}</CreateAt>
              <HashTag hashTags={article.hashTags} id={article.id} />
            </PostInfoContainer>
          </Post>
        ))}
      </Posts>
    </Container>
  );
}
