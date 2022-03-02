import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Seo from '../../components/Seo';
import { getAllPost, getPost } from '../../utils/mdxUtils';
import Comments from '../../components/comment/Comments';
import { IFrontMatter } from '../../common/types';
import Post from '../../components/post/Post';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface IProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: IFrontMatter;
  content: string;
}

interface IGetStaticProps {
  params: {
    slug: [];
  };
}

export default function Blog({ mdxSource, frontMatter, content }: IProps) {
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

export async function getStaticProps({ params }: IGetStaticProps) {
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
