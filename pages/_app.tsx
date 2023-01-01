import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import GoogleAnalytics from '@components/GoogleAnalytics';
import { Providers } from '@components/common';
import { Layout } from '@components/layout';

import '@styles/globals.css';
import '@styles/fonts.css';
import '@styles/prism-one-dark.css';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('%c감구마 블로그', `color:#BAABDA; font-size: 4rem; font-weight: bold`);
  }, []);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1 user-scalable=no' />
      </Head>
      <GoogleAnalytics />
      <Providers>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  );
}

export default App;
