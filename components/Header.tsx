import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div``;

const Nav = styled.nav`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 25px;
  background-color: #ff9999;
`;

export default function Header() {
  return (
    <Container as='header'>
      <Nav>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/dev'>
          <a>Dev</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </Nav>
    </Container>
  );
}
