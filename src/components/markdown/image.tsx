import Image from 'next/image';

export const CustomImage = (props: any) => {
  return <Image alt={props.alt} className='rounded-md' {...props} />;
};
