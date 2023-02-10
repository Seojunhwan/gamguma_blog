import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {
  src: string;
  alt: string;
  width: string;
  height: string;
  description?: string;
}

export function ResponsiveImage({ src, alt, width, height, description }: Props) {
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

  return description ? (
    <figure>
      <Image className='rounded-md' priority src={relativeSrc} alt={alt} width={+width} height={+height} />
      <figcaption className='text-center'>{description}</figcaption>
    </figure>
  ) : (
    <Image priority src={relativeSrc} alt={alt} width={+width} height={+height} />
  );
}
