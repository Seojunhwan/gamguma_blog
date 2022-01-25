import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Code from '../components/post/Code';
import { MDXProvider } from '@mdx-js/react';
import { RecoilRoot } from 'recoil';
import '../styles/fonts.css';
import PostImage from '../components/post/PostImage';

const components = {
  code: Code,
  Image: PostImage,
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gamguma | 개발블로그</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1 user-scalable=no' />
        <meta name='description' content='감구마의 개발 블로그' />
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
