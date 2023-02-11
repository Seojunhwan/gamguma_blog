import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  width: string;
  height: string;
  description?: string;
}

export function ResponsiveImage({ src, alt, width, height, description }: Props) {
  return description ? (
    <figure>
      <Image className='rounded-md' priority src={src} alt={alt} width={+width} height={+height} />
      <figcaption className='text-center'>{description}</figcaption>
    </figure>
  ) : (
    <Image className='rounded-md' priority src={src} alt={alt} width={+width} height={+height} />
  );
}
