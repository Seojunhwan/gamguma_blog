import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Seo from '../../components/Seo';
import { IFrontMatter } from '..';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

interface IMdxProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: IFrontMatter;
}

export default function Blog({ mdxSource, frontMatter }: IMdxProps) {
  return (
    <>
      <Seo title={frontMatter.title} description={frontMatter.description} keywords={frontMatter.hashTags} />
      <MDXRemote {...mdxSource} />
    </>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });
  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
