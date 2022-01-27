import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import glob from 'glob';

const DIR_STRING = '/posts';

const POSTS_PATH = path.join(process.cwd(), DIR_STRING);

const getPostSlugs = (filePath: string) => {
  return filePath.slice(filePath.indexOf(DIR_STRING) + DIR_STRING.length + 1).replace('.mdx', '');
};

export const getAllPost = () => {
  const files = glob.sync(`${POSTS_PATH}/**/*.mdx`).reverse();

  const posts = files.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const { content, data } = matter(source);
    const slug = getPostSlugs(filePath);
    return {
      content,
      data,
      slug,
    };
  });

  if (process.env.NODE_ENV === 'production') {
    return posts.filter((post) => post.data.isPublished === true);
  }
  return posts;
};

export const getPost = async (slugs: []) => {
  const postFilePath = path.join(POSTS_PATH, `${slugs.join('/')}.mdx`);
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
