import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout';
import { GlobalStyle } from '../styles/global-style';
import { darkTheme, lightTheme } from '../styles/theme';
import { MDXProvider } from '@mdx-js/react';
import Code from '../components/post/Code';
import '../styles/fonts.css';

const components = {
  code: Code,
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Head>
          <title>Gamguma | 개발블로그</title>
          <meta charSet='utf-8' />
          <meta name='theme-color' content={lightTheme.headerColor} />
          <meta name='viewport' content='width=device-width, initial-scale=1 user-scalable=no' />
          <meta name='google-site-verification' content='7sKg11gheMwgKUWF1yFO_cq8gx8jiPXacgwa7OSzhPY' />
          <meta name='description' content='감구마의 개발 블로그' />
        </Head>
        <MDXProvider components={components}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
