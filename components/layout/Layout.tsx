import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/theme';
import { GlobalStyle } from '../../styles/global-style';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../../recoil/atoms';
import Head from 'next/head';

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 1rem 1rem 5rem 1rem;
`;

const Main = styled.main`
  margin-top: 7rem;
  width: 100%;
  min-height: calc(100vh - 7rem - 6.5rem);
`;

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  const isDark = useRecoilValue(isDarkAtom);
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
