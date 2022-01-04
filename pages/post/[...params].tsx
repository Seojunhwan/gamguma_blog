import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Blog() {
  const router = useRouter();
  const {
    query: { title },
  } = router;

  return (
    <>
      <Seo title={title} />
      <span>hihi</span>
    </>
  );
}
