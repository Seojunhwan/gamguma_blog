'use client';

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote';
import { Callout } from './Callout';
import { Code } from './Code';
import { CustomImage } from './Image';
import { CustomLink } from './Link';
import { CustomTable } from './Table';
import { CustomHeading } from './Heading';

interface MDXProps {
  mdxSource: MDXRemoteProps;
}

const MDXRemoteComponents: MDXRemoteProps['components'] = {
  code: Code,
  Callout: Callout,
  Image: CustomImage,
  link: CustomLink as any,
  Table: CustomTable,
  h1: (props) => <CustomHeading level={1} {...props} />,
  h2: (props) => <CustomHeading level={2} {...props} />,
  h3: (props) => <CustomHeading level={3} {...props} />,
  h4: (props) => <CustomHeading level={4} {...props} />,
  h5: (props) => <CustomHeading level={5} {...props} />,
  h6: (props) => <CustomHeading level={6} {...props} />,
};

export const MDX = ({ mdxSource }: MDXProps) => {
  return (
    <div className='prose prose-sm prose-neutral w-full max-w-full sm:prose-base dark:prose-invert'>
      <MDXRemote {...mdxSource} components={MDXRemoteComponents} />
    </div>
  );
};
