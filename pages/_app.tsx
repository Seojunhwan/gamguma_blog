import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Code from '../components/post/Code';
import { MDXProvider } from '@mdx-js/react';
import { RecoilRoot } from 'recoil';
import ResponsiveImage from '../components/post/ResponsiveImage';
import Script from 'next/script';
import { useEffect } from 'react';

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
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-LYR2W8NBVJ' strategy='afterInteractive' />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-LYR2W8NBVJ');
        `}
      </Script>
      <RecoilRoot>
        <MDXProvider components={components}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
