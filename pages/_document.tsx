import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='ko'>
        <Head>
          <link
            rel='preload'
            href='/fonts/Aggro/Aggro-M.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/Aggro/Aggro-M.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/SpoqaHanSans/SpoqaHanSansNeo-Regular.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/SpoqaHanSans/SpoqaHanSansNeo-Regular.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/SpoqaHanSans/SpoqaHanSansNeo-Bold.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/SpoqaHanSans/SpoqaHanSansNeo-Bold.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/GmarketSans/GmarketSansTTFMedium.woff2'
            as='font'
            type='font/woff2'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/GmarketSans/GmarketSansTTFMedium.woff'
            as='font'
            type='font/woff'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
