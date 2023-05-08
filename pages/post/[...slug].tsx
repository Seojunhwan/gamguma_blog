import Head from 'next/head';
import { useRouter } from 'next/router';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { Post } from '@components/post';
import { Seo } from '@components/common';
import { getAllPost, getPost } from '@utils/mdxUtils';

import type { FrontMatter } from '@interface';

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
  content: string;
}

interface GetStaticProps {
  params: {
    slug: [];
  };
}

export default function Blog({ mdxSource, frontMatter, content }: Props) {
  const { title, description, hashTags, thumbnail, slug } = frontMatter;

  return (
    <>
      <Seo title={title} description={description} keywords={hashTags} thumbnail={thumbnail} />
      <Head>
        <link rel='canonical' href={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`} />
      </Head>
      <div className='mx-auto max-w-3xl'>
        <Post mdxSource={mdxSource} frontMatter={frontMatter} content={content} />
      </div>
    </>
  );
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { mdxSource, data, content } = await getPost(params.slug);

  return {
    props: {
      mdxSource,
      frontMatter: { ...data, slug: params.slug.join('/') },
      content,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPost().map((post) => {
    return {
      params: {
        slug: post.slug.split('/'),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
