import { IPost } from '../common/types';
import Posts from '../components/post/Posts';
import { getAllPost } from '../utils/mdxUtils';

interface IProps {
  posts: IPost[];
}

export default function Home({ posts }: IProps) {
  return <Posts posts={posts} />;
}

export async function getStaticProps() {
  const posts = getAllPost();
  return { props: { posts } };
}
