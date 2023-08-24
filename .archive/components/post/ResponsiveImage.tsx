import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  src: string;
  alt: string;
  width: string;
  height: string;
  description?: string;
}

export function ResponsiveImage({ src, alt, width, height, description }: Props) {
  return (
    <motion.div
      initial={{
        filter: 'blur(10px)',
      }}
      whileInView={{
        filter: 'blur(0px)',
      }}
      transition={{ duration: 0.1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {description ? (
        <figure>
          <Image className='rounded-md' priority src={src} alt={alt} width={+width} height={+height} />
          <figcaption className='text-center'>{description}</figcaption>
        </figure>
      ) : (
        <Image className='rounded-md' priority src={src} alt={alt} width={+width} height={+height} />
      )}
    </motion.div>
  );
}
