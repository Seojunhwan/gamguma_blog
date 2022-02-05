import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ThemeChangeButton from '../ThemeChangeButton';

export default function Header() {
  const router = useRouter();
  return (
    <Wrapper>
      <Container>
        <div>
          <Link href='/'>
            <a>감구마</a>
          </Link>
        </div>
        <Nav>
          <ThemeChangeButton />
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
          <Link href='/tags'>
            <a>
              <span>Tags{router.asPath.startsWith('/tags') && <Indicator layoutId='indicator' />}</span>
            </a>
          </Link>
        </Nav>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  transition: background-color 0.2s ease-in-out;
  background-color: ${(props) => props.theme.headerColor};
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
  padding: 2rem 1rem;
  margin: 0 auto;
  & > div {
    font-size: 3rem;
    color: white;
    font-family: Aggro;
    font-weight: 600;
  }
  span {
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  font-size: 2rem;
  gap: 1rem;
  color: white;
  a {
    margin: auto;
  }
  a > span {
    position: relative;
  }
`;

const Indicator = styled(motion.span)`
  position: absolute;
  width: 100%;
  height: 0.1rem;
  background-color: ${(props) => props.theme.accentColor};
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -0.3rem;
`;
