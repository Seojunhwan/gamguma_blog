import Posts from '../components/Posts';
import { loadAllPost } from '../utils/mdxUtils';

//TODO: MDX 관련 interface 정리하기

export interface IFrontMatter {
  title: string;
  slug: string;
  author: string;
  hashTags: string[];
  description: string;
  createAt: string;
}
interface IPost {
  content: string;
  filePath: string;
  data: IFrontMatter;
}

interface IProps {
  posts: IPost[];
}

export default function Home({ posts }: IProps) {
  return <Posts posts={posts} />;
}

export async function getStaticProps() {
  const posts = loadAllPost();
  return { props: { posts } };
}
