import { type FrontMatter, type Post } from '@/interfaces/Post';
import fs from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypePrettyCode, { type Options as PrettyCodeOptions } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';

const DIR_STRING = '/posts';

const POSTS_PATH = path.join(process.cwd(), DIR_STRING);

const getPostSlugs = (filePath: string) => {
  return filePath.slice(filePath.indexOf(DIR_STRING) + DIR_STRING.length + 1).replace('.mdx', '');
};

export const getAllPost = () => {
  const files = glob.sync(`${POSTS_PATH}/**/*.mdx`);

  const posts: Post[] = files.map((filePath) => {
    const source = fs.readFileSync(filePath);

    const { content, data: metadata } = matter(source);

    const slug = getPostSlugs(filePath);

    return {
      content,
      metadata: metadata as FrontMatter,
      slug,
    };
  });

  const sortedPosts = posts.sort((a, b) => {
    const aDate = +new Date(a.metadata.createAt);
    const bDate = +new Date(b.metadata.createAt);

    return bDate - aDate;
  });

  if (process.env.NODE_ENV === 'production') {
    return sortedPosts.filter((post) => post.metadata.isPublished === true);
  }
  return sortedPosts;
};

export const getPost = async (slugs: string[]) => {
  const postFilePath = path.join(POSTS_PATH, `${slugs.join('/')}.mdx`);

  const source = fs.readFileSync(postFilePath);

  const { content, data: metadata } = matter(source);

  const prettyCodeOptions: PrettyCodeOptions = {
    theme: 'one-dark-pro',
  };

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[remarkToc, {}]],
      rehypePlugins: [
        [rehypeSlug, {}],
        [rehypePrettyCode, prettyCodeOptions],
      ],
    },
  });

  return { mdxSource, content, metadata: metadata as FrontMatter };
};
