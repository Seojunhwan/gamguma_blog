import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          <link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-icon-57x57.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='/favicon/apple-icon-60x60.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='/favicon/apple-icon-72x72.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/favicon/apple-icon-76x76.png' />
          <link rel='apple-touch-icon' sizes='114x114' href='/favicon/apple-icon-114x114.png' />
          <link rel='apple-touch-icon' sizes='120x120' href='/favicon/apple-icon-120x120.png' />
          <link rel='apple-touch-icon' sizes='144x144' href='/favicon/apple-icon-144x144.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/favicon/apple-icon-152x152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-icon-180x180.png' />
          <link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/favicon/favicon-96x96.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/favicon/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        </Head>
        <body className='bg-white transition-colors dark:bg-[#111111]'>
          <Main />
          <div id='modal' />
          <NextScript />
          <Script id='tailwind' strategy='beforeInteractive'>
            {`
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `}
          </Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
