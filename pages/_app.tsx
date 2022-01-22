import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Code from '../components/post/Code';
import { MDXProvider } from '@mdx-js/react';
import { RecoilRoot } from 'recoil';
import '../styles/fonts.css';

const components = {
  code: Code,
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gamguma | 개발블로그</title>
        <meta charSet='utf-8' />
        {/* <meta name='theme-color' content={lightTheme.headerColor} /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1 user-scalable=no' />
        <meta name='google-site-verification' content='7sKg11gheMwgKUWF1yFO_cq8gx8jiPXacgwa7OSzhPY' />
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
