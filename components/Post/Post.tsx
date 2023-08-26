'use client';

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote';
import { type ComponentProps } from 'react';

interface PostProps {
  mdxSource: MDXRemoteProps;
}

const MDXRemoteComponents: ComponentProps<typeof MDXRemote>['components'] = {};

export const Post = ({ mdxSource }: PostProps) => {
  return (
    <div className='[&_code]:font-code'>
      <MDXRemote {...mdxSource} components={MDXRemoteComponents} />
    </div>
  );
};
