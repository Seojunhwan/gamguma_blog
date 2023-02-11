import Head from 'next/head';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import { GoogleAnalytics, Providers } from '@components/common';
import { Layout } from '@components/layout';

import '@styles/globals.css';

function App({ Component, pageProps, router }: AppProps) {
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
