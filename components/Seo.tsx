import Head from 'next/head';

interface ISeo {
  title: string;
  description?: string;
  createAt?: string;
  keywords: string[];
}

export default function Seo({ title, description, keywords }: ISeo) {
  return (
    <Head>
      <title>{title} | Guma-dev</title>
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords.join(', ')}></meta>}
    </Head>
  );
}
