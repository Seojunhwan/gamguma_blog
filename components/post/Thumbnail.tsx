import Image from 'next/image';

interface Props {
  src: string;
}

export default function Thumbnail({ src }: Props) {
  return (
    <div className='relative'>
      <Image src={src} alt='post-thumbnail' width={1200} height={600} priority />
    </div>
  );
}
