import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import glob from 'glob';
import { FrontMatter, Post } from '@interface';
import { POSTS_PER_PAGE_OFFSET } from '@constants';

const DIR_STRING = '/posts';

const POSTS_PATH = path.join(process.cwd(), DIR_STRING);

const getPostSlugs = (filePath: string) => {
  return filePath.slice(filePath.indexOf(DIR_STRING) + DIR_STRING.length + 1).replace('.mdx', '');
};

export const getPostPaginationPaths = () => {
  const posts = getAllPost();

  const pageLength = Math.ceil(posts.length / POSTS_PER_PAGE_OFFSET);

  const paths = Array.from({ length: Math.ceil(pageLength) }, (_, index) => ({
    params: { index: (index + 1).toString() },
  }));

  return paths;
};

export const getPostsByPage = (index: number) => {
  const posts = getAllPost();

  const startIndex = (index - 1) * POSTS_PER_PAGE_OFFSET;
  const endIndex = startIndex + POSTS_PER_PAGE_OFFSET;

  const slicedPosts = posts.slice(startIndex, endIndex);

  return slicedPosts;
};

export const getAllPost = () => {
  const files = glob.sync(`${POSTS_PATH}/**/*.mdx`);

  const posts: Post[] = files.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const { content, data } = matter(source);
    const slug = getPostSlugs(filePath);
    return {
      content,
      data: data as FrontMatter,
      slug,
    };
  });

  const sortedPosts = posts.sort((a, b) => {
    const aDate = +new Date(a.data.createAt);
    const bDate = +new Date(b.data.createAt);

    return bDate - aDate;
  });

  if (process.env.NODE_ENV === 'production') {
    return sortedPosts.filter((post) => post.data.isPublished === true);
  }
  return sortedPosts;
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
