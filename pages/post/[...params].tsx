import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Blog() {
  const router = useRouter();
  const {
    query: { title, hashTags },
  } = router;

  return (
    <>
      <Seo title={title as string} keywords={hashTags as string[]} />
      <span>hihi</span>
    </>
  );
}
