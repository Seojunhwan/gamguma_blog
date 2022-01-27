import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
}

export default function ResponsiveImage({ src, alt }: ImageProps) {
  const size = (() => {
    const sizeInfo = alt.split(' ')[1].split('x');
    return {
      width: Number(sizeInfo[0]),
      height: Number(sizeInfo[1]),
    };
  })();
  return <Image objectFit='contain' src={src} alt={alt} {...size} layout='responsive' />;
}
