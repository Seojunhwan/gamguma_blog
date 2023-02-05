import { useMemo } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import Thumbnail from './Thumbnail';
import Utterances from './Utterances';
import Code from './Code';
import { getRelativeDate } from '@utils';
import type { FrontMatter } from '@interface';
import ResponsiveImage from './ResponsiveImage';
import { Profile } from '@components/profile';

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
  /*
   * This is the raw content of the post, used for SEO purposes.
   * Only using the Table of contents from the MDX source would not be enough
   * It is not rendered in the UI.
   */
  content: string;
}

const mdxComponents = {
  code: Code,
  img: ResponsiveImage,
  Image: ResponsiveImage,
  a: (props: any) => (
    <a
      {...props}
      className='rounded-sm text-blue-500 transition-shadow hover:bg-white hover:text-amber-600'
    />
  ),
};

export default function Post({
  mdxSource,
  frontMatter: { title, createAt, hashTags, thumbnail },
  content,
}: Props) {
  const relativeDate = useMemo(() => getRelativeDate(createAt), [createAt]);
  return (
    <>
      <div className='px-8'>
        <div className='-mx-4 mb-4 overflow-hidden rounded-lg shadow-md lg:-mx-8'>
          <Thumbnail src={thumbnail} />
        </div>
        <header className='mb-4 flex flex-col space-y-4 border-b-2 pb-4'>
          <h1 className='mt-4 text-3xl font-bold text-gray-700 dark:text-gray-100'>{title}</h1>
          <div className='flex items-center justify-between'>
            <Profile imageSize='xsm' />
            <time className='text-gray-500 dark:text-gray-100' dateTime={createAt}>
              {relativeDate}
            </time>
          </div>
        </header>
        <article
          className='prose prose-sm max-w-full pt-8 
                    prose-h2:border-b-2 prose-h2:pb-2
                    prose-blockquote:py-1
                    prose-blockquote:font-normal prose-blockquote:not-italic prose-code:rounded-sm prose-code:bg-gray-200 prose-code:px-2
                    prose-code:py-[1.5px] prose-code:font-sans prose-code:before:content-none prose-code:after:content-none prose-pre:-mx-4
                    prose-pre:px-8 prose-pre:shadow-md
                    dark:prose-invert prose-h2:dark:border-gray-400
                    dark:prose-code:bg-gray-700 md:prose-base
                    md:prose-pre:-mx-8
                    lg:prose-base'
        >
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </article>
      </div>
      <Utterances />
    </>
  );
}
