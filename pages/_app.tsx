import Head from 'next/head';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
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
        <motion.main
          variants={{
            initial: { x: 100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: -100, opacity: 0 },
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
          initial='initial'
          animate='animate'
          exit='exit'
          key={router.asPath}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.main>
      </Providers>
    </>
  );
}

export default App;
