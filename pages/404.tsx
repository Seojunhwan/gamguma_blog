import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 5rem;
    margin-bottom: 5rem;
  }
  span {
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

export default function Custom404() {
  return (
    <Container>
      <h1>음,, 잘못된 경로 같습니다!</h1>
      <Link href='/'>
        <a>
          <span>돌아가기</span>
        </a>
      </Link>
    </Container>
  );
}
