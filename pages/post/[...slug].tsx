import Head from 'next/head';
import { useRouter } from 'next/router';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { Seo } from '@components/common';
import Post from '@components/post/Post';
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
  const { title, description, hashTags, thumbnail } = frontMatter;
  const {
    query: { slug },
  } = useRouter();
  return (
    <>
      <Seo title={title} description={description} keywords={hashTags} thumbnail={thumbnail} />
      <Head>
        <link
          rel='canonical'
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${typeof slug === 'object' ? slug.join('/') : ''}`}
        />
      </Head>
      <Post mdxSource={mdxSource} frontMatter={frontMatter} content={content} />
    </>
  );
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { mdxSource, data, content } = await getPost(params.slug);
  return {
    props: {
      mdxSource,
      frontMatter: data,
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
