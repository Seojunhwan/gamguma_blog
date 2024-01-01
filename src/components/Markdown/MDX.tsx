'use client';

import { cn } from '@/utils/cn';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote';
import { Callout } from './Callout';
import { Code } from './Code';
import { CustomImage } from './Image';

interface MDXProps {
  mdxSource: MDXRemoteProps;
}

const MDXRemoteComponents: MDXRemoteProps['components'] = {
  code: Code,
  Callout: Callout,
  Image: CustomImage,
};

export const MDX = ({ mdxSource }: MDXProps) => {
  return (
    <div className={cn(`prose prose-sm prose-neutral w-full max-w-full sm:prose-base dark:prose-invert`)}>
      <MDXRemote {...mdxSource} components={MDXRemoteComponents} />
    </div>
  );
};
