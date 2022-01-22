import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import glob from 'glob';

export const POSTS_PATH = path.join(process.cwd(), 'posts');

export const postFilePaths = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));

const DIR_REPLACE_STRING = '/posts';

const POST_PATH = `${process.cwd()}${DIR_REPLACE_STRING}`;

export const getAllPost = () => {
  const files = glob.sync(`${POST_PATH}/**/*.mdx`).reverse();
  const posts = files.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const { content, data } = matter(source);
    return {
      content,
      data,
      filePath,
    };
  });
  return posts;
};

export const getPost = async (slug: string) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      // @ts-ignore: Unreachable code error
      remarkPlugins: [[remarkToc, {}]],
      // @ts-ignore: Unreachable code error
      rehypePlugins: [[rehypeSlug, {}]],
    },
  });
  return { mdxSource, data, content };
};
