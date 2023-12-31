'use client';

import { cn } from '@/utils/cn';
import { applyStylesByDataAttribute } from '@/utils/style';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote';
import { Code } from './Code';

interface MDXProps {
  mdxSource: MDXRemoteProps;
}

const MDXRemoteComponents: MDXRemoteProps['components'] = {
  // h1: (props: any) => <Typography as='h1' fontWeight='bold' {...props} />,
  // h2: (props: any) => <Typography as='h2' fontWeight='bold' {...props} />,
  // h3: (props: any) => <Typography as='h3' fontWeight='600' {...props} />,
  // h4: (props: any) => <Typography as='h4' {...props} />,
  // p: (props: any) => <Typography as='p' {...props} />,
  // span: (props: any) => <Typography as='span' {...props} />,
  // code: (props: any) => <Typography as='code' {...props} />,
  // pre: (props: any) => <Typography as='pre' {...props} />,
  // pre: (props: any) => <pre {...props} className='overflow-auto rounded p-2 [&_code]:bg-inherit' />,
  code: Code,
};

export const MDX = ({ mdxSource }: MDXProps) => {
  return (
    <div
      className={cn(
        `prose prose-sm mx-auto w-full max-w-none md:prose-base prose-blockquote:font-light prose-blockquote:not-italic prose-strong:font-medium prose-code:rounded prose-code:px-1 prose-code:py-[2px] prose-code:font-code`,
        applyStylesByDataAttribute('type=text', ['prose-code:bg-gray-100', 'prose-code:rounded']),
      )}
    >
      <MDXRemote {...mdxSource} components={MDXRemoteComponents} />
    </div>
  );
};
