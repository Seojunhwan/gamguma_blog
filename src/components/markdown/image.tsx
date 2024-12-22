import Image from 'next/image';

interface CustomImageProps extends React.ComponentProps<typeof Image> {
  description?: string;
}

export const CustomImage = ({ description, alt, ...props }: CustomImageProps) => {
  return (
    <figure className='my-4'>
      <Image alt={alt} className='w-full rounded-md' {...props} />
      {description && (
        <figcaption className='mt-2 text-center text-sm text-gray-500 dark:text-neutral-400'>
          {description}
        </figcaption>
      )}
    </figure>
  );
};
