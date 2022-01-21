import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout';
import { GlobalStyle } from '../styles/global-style';
import { darkTheme, lightTheme } from '../styles/theme';
import { MDXProvider } from '@mdx-js/react';
import Code from '../components/post/Code';
import '../styles/fonts.css';
import { useState } from 'react';

const components = {
  code: Code,
};

function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Head>
          <meta charSet='utf-8' />
          <meta name='theme-color' content={isDark ? darkTheme.headerColor : lightTheme.headerColor} />
          <meta name='viewport' content='width=device-width, initial-scale=1 user-scalable=no' />
          <meta name='google-site-verification' content='7sKg11gheMwgKUWF1yFO_cq8gx8jiPXacgwa7OSzhPY' />
          <meta name='description' content='감구마의 개발 블로그' />
          <title>개발 블로그</title>
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
