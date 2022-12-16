import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Code from '../components/post/Code';
import { RecoilRoot } from 'recoil';
import ResponsiveImage from '../components/post/ResponsiveImage';
import Script from 'next/script';
import { useEffect } from 'react';
// import { MDXProvider } from '@mdx-js/react';

const components = {
  code: Code,
  img: ResponsiveImage,
};

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
        {/*</MDXProvider>*/}
      </RecoilRoot>
    </>
  );
}

export default App;
