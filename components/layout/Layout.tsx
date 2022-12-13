import React, { useEffect } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import { darkTheme, lightTheme } from '../../styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/global-style';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from '../../recoil/atoms';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  useEffect(() => {
    const persistTheme = localStorage.getItem('isDark');
    if (typeof persistTheme === 'string') {
      setIsDark(JSON.parse(persistTheme));
    } else {
      setIsDark(false);
    }
  }, []);
  return (
    <>
      <Head>
        <meta name='theme-color' content={isDark ? darkTheme.headerColor : lightTheme.headerColor} />
      </Head>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
        <Main>
          <Container>{children}</Container>
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  min-height: calc(100vh - 7rem - 6.5rem);
  padding: 1rem 1rem 5rem 1rem;
`;

const Main = styled.main`
  margin-top: 7rem;
  width: 100%;
`;
