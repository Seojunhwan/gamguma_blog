import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Wrapper = styled.header`
  background-color: #121212;
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100rem;
  padding: 2.5rem 1rem;
  margin: 0 auto;
  & > div span {
    font-size: 3rem;
    color: white;
    font-family: Aggro;
    font-weight: 600;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #ff8a65;
    }
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  font-size: 2rem;
  gap: 1rem;
  color: white;
  a > span {
    position: relative;
  }
`;

const Indicator = styled(motion.span)`
  position: absolute;
  width: 100%;
  height: 0.1rem;
  background-color: #ff8a65;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -0.3rem;
`;

export default function Header() {
  const router = useRouter();
  return (
    <Wrapper>
      <Container>
        <div>
          <Link href='/'>
            <a>
              <span>감구마</span>
            </a>
          </Link>
        </div>
        <Nav>
          <Link href='/about'>
            <a>
              <span>About{router.asPath === '/about' && <Indicator layoutId='indicator' />}</span>
            </a>
          </Link>

          <Link href='/dev'>
            <a>
              <span>Dev{router.asPath === '/dev' && <Indicator layoutId='indicator' />}</span>
            </a>
          </Link>

          <Link href='/post'>
            <a>
              <span>Post{router.asPath === '/post' && <Indicator layoutId='indicator' />}</span>
            </a>
          </Link>
        </Nav>
      </Container>
    </Wrapper>
  );
}
