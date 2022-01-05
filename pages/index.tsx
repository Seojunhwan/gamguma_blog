import Posts from '../components/Posts';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';

interface IPost {
  content: string;
  filePath: string;
  data: {
    title: string;
    slug: string;
    author: string;
    hashTags: string[];
    description: string;
    createAt: string;
  };
}

interface IProps {
  posts: IPost[];
}

export default function Home({ posts }: IProps) {
  return <Posts posts={posts} />;
}

export async function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);
    return {
      content,
      data,
      filePath,
    };
  });
  return { props: { posts } };
}
