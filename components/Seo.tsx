import Head from 'next/head';

interface ISeo {
  title: string;
  description: string;
  createAt: string;
}

export default function Seo({ title, description }: ISeo) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Head>
  );
}
