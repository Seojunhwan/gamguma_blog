import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Code from '../components/post/Code';
import { MDXProvider } from '@mdx-js/react';
import { RecoilRoot } from 'recoil';
import ResponsiveImage from '../components/post/ResponsiveImage';

const components = {
  code: Code,
  img: ResponsiveImage,
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1 user-scalable=no' />
        <link rel='canonical' href={process.env.NEXT_PUBLIC_SITE_URL} />
      </Head>
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
