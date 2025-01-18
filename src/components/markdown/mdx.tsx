'use client';

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote';
import { Callout } from './callout';
import { Code } from './code';
import { CustomImage } from './image';
import { CustomLink } from './link';
import { CustomTable } from './table';
import { CustomHeading } from './heading';

interface MDXProps {
  mdxSource: MDXRemoteProps;
}

const MDXRemoteComponents: MDXRemoteProps['components'] = {
  code: Code,
  Callout: Callout,
  Image: CustomImage,
  link: CustomLink as any,
  Table: CustomTable,
  h1: (props) => <CustomHeading level={1} className='text-[1.125rem]' {...props} />,
  h2: (props) => <CustomHeading level={2} className='text-[1.0625rem]' {...props} />,
  h3: (props) => <CustomHeading level={3} className='text-[1rem]' {...props} />,
  h4: (props) => <CustomHeading level={4} className='text-[0.9375rem]' {...props} />,
  h5: (props) => <CustomHeading level={5} className='text-[0.875rem]' {...props} />,
  h6: (props) => <CustomHeading level={6} className='text-[0.8125rem]' {...props} />,
};

export const MDX = ({ mdxSource }: MDXProps) => {
  return (
    <div className='prose prose-sm prose-neutral w-full max-w-full break-all dark:prose-invert prose-code:before:content-none prose-code:after:content-none'>
      <MDXRemote {...mdxSource} components={MDXRemoteComponents} />
    </div>
  );
};
