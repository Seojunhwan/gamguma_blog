import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  description: string;
  keywords: string[];
  thumbnail: string;
}

export function Seo({ title, description, keywords, thumbnail }: Props) {
  const router = useRouter();
  return (
    <Head>
      <title>{title} | 감구마 개발블로그</title>
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords.join(', ')} />}

      <meta property='og:type' content={router.asPath === '/' ? 'blog' : 'article'} />
      <meta property='og:url' content={process.env.NEXT_PUBLIC_SITE_URL + router.asPath} />
      <meta property='og:title' content={`${title} | 감구마 개발블로그`} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content='감구마 개발블로그' />
      <meta property='og:locale' content='ko_KR' />
      <meta property='og:image' content={thumbnail} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={`${title} | 감구마 개발블로그`} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:site' content='감구마 개발블로그' />
      <meta name='twitter:url' content={process.env.NEXT_PUBLIC_SITE_URL + router.asPath} />
      <meta name='twitter:image' content={thumbnail} />
    </Head>
  );
}
