import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import media from '../styles/media';

export default function Custom404() {
  const router = useRouter();
  return (
    <Container>
      <h1>존재하지 않는 페이지입니다.</h1>
      <button onClick={() => router.back()}>돌아가기</button>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 3rem;
    margin-bottom: 15rem;
    ${media.medium} {
      font-size: 5rem;
    }
  }
  button {
    border-radius: 0.5rem;
    border: 1px solid white;
    transition: all 0.2s ease-in;
    background-color: white;
    border: 1px solid black;
    padding: 1rem 10rem;
    color: black;
    font-size: 2rem;
  }
`;
