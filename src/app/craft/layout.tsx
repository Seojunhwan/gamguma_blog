'use client';

import { Motion } from '@/components/motion';
import { Variants } from 'framer-motion';
import { useState, type PropsWithChildren } from 'react';
import { CraftHeader } from './_components/craft-header';

const variants: Variants = {
  initial: {
    borderRadius: '10px',
    margin: '10px',
    width: 'calc(100% - 20px)',
  },
  animate: ({ isExpanded }: { isExpanded: boolean }) => ({
    borderRadius: isExpanded ? '10px' : '0px',
    margin: isExpanded ? '10px' : '0px',
    width: isExpanded ? 'calc(100% - 20px)' : '100%',
  }),
};

export default function CraftLayout({ children }: PropsWithChildren) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='mx-auto flex min-h-dvh flex-col bg-neutral-50'>
      <CraftHeader
        className='flex h-14 items-center justify-center'
        expanded={isExpanded}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      />
      <Motion.main
        custom={{ isExpanded }}
        initial='initial'
        animate='animate'
        variants={variants}
        className='flex h-full w-full grow flex-col overflow-hidden'
      >
        {children}
      </Motion.main>
    </div>
  );
}
