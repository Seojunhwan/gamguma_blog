import Image from 'next/image';

interface Props {
  src: string;
}

export default function Thumbnail({ src }: Props) {
  return (
    <div className='grow-1 order-1 overflow-hidden rounded-lg shadow-md md:order-2 md:w-60 md:grow-0 md:basis-auto'>
      <Image src={src} alt='post-thumbnail' width={1200} height={600} priority />
    </div>
  );
}
