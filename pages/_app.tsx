import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import { GlobalStyle } from '../styles/global-style';
import { lightTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>개발 블로그</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
