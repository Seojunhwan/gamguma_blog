import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout';
import { GlobalStyle } from '../styles/global-style';
import { lightTheme } from '../styles/theme';
import { MDXProvider } from '@mdx-js/react';
import Code from '../components/post/Code';
import '../styles/fonts.css';

interface Iprops {}

const components = {
  code: Code,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>개발 블로그</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <MDXProvider components={components}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
