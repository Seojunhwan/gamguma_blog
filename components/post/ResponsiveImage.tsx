import Image from 'next/image';
import { useRouter } from 'next/router';

interface ImageProps {
  src: string;
  alt: string;
}

export default function ResponsiveImage({ src, alt }: ImageProps) {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  const relativeSrc = (() => {
    if (Array.isArray(slug)) {
      return `/${slug.join('/')}/images${src}`;
    }
    return src;
  })();

  const size = (() => {
    const sizeInfo = alt.split(' ')[1].split('x');
    return {
      width: Number(sizeInfo[0]),
      height: Number(sizeInfo[1]),
    };
  })();

  return <Image objectFit='contain' priority src={relativeSrc} alt={alt} {...size} layout='responsive' />;
}
