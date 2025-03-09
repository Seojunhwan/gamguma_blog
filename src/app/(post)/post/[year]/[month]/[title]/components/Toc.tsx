'use client';

import { Motion } from '@/components/motion';
import { cn } from '@/utils/cn';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const TOC_ITEM_COLOR_MAP: Record<number, { background: string; text: string }> = {
  2: {
    background: 'bg-neutral-900 dark:bg-neutral-100',
    text: 'text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100',
  },
  3: {
    background: 'bg-neutral-500 dark:bg-neutral-300',
    text: 'text-neutral-500 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-neutral-300',
  },
  4: {
    background: 'bg-neutral-300 dark:bg-neutral-500',
    text: 'text-neutral-300 dark:text-neutral-500 hover:text-neutral-300 dark:hover:text-neutral-500',
  },
  5: {
    background: 'bg-neutral-100 dark:bg-neutral-900',
    text: 'text-neutral-100 dark:text-neutral-900 hover:text-neutral-100 dark:hover:text-neutral-900',
  },
};

// 컨테이너 애니메이션 변형
const containerVariants = {
  expanded: {
    opacity: 1,
    height: '100%',
    transition: {
      duration: 0.3,
    },
  },
  collapsed: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
    },
  },
};

// 아이템 애니메이션 변형
const itemVariants = {
  expanded: (level: number) => ({
    marginLeft: `${(level - 2) * 8}px`,
    transition: {
      duration: 0.3,
      ease: 'circOut',
      delay: 0.3,
    },
  }),
  collapsed: {
    marginLeft: 0,
    transition: {
      duration: 0.3,
      ease: 'circOut',
      delay: 0.3,
    },
  },
};

// 텍스트 애니메이션 변형
const textVariants = {
  expanded: {
    opacity: 1,
    x: 0,
    height: 'auto',
    transition: {
      duration: 0.3,
    },
  },
  collapsed: {
    opacity: 0,
    x: -5,
    height: 0,
    transition: {
      duration: 0.2,
      height: {
        delay: 0.3,
      },
    },
  },
};

export function Toc() {
  const [isHovered, setIsHovered] = useState(true);
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    const content = document.getElementById('content');
    const headings = content?.querySelectorAll('h2, h3');
    if (!headings) {
      return;
    }

    const headingList = Array.from(headings).map((heading) => {
      const id = heading.id;
      const text = heading.textContent ?? '';
      const level = heading.tagName.charAt(1);

      return { id, text, level: Number(level) };
    });

    setToc(headingList);
  }, []);

  return (
    <AnimatePresence>
      <aside className='fixed left-0 top-0 z-20 hidden h-full max-h-dvh w-full max-w-64 pl-4 pr-6 md:block'>
        <Motion.div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className='scrollbar-hide flex w-full overflow-y-auto py-4'
          initial={{ opacity: 0 }}
          variants={containerVariants}
          animate={isHovered ? 'expanded' : 'collapsed'}
        >
          <ul className='flex w-full flex-col'>
            {toc.map((item) => (
              <Motion.li
                key={item.id}
                className='relative flex items-center gap-2 py-1.5'
                custom={item.level}
                variants={itemVariants}
                layout
              >
                <div className='flex h-full items-center justify-center'>
                  <Motion.div
                    aria-hidden
                    className={cn('h-px w-2', TOC_ITEM_COLOR_MAP[item.level].background)}
                    animate={{ scale: 1 }}
                  />
                </div>

                <AnimatePresence mode='wait'>
                  {isHovered && (
                    <Motion.div
                      initial='collapsed'
                      animate='expanded'
                      exit='collapsed'
                      variants={textVariants}
                      className='flex flex-grow items-center overflow-hidden'
                    >
                      <Link
                        href={`#${item.id}`}
                        className={cn(
                          'inline-block w-full truncate whitespace-nowrap text-xs',
                          TOC_ITEM_COLOR_MAP[item.level].text,
                        )}
                      >
                        {item.text}
                      </Link>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </Motion.li>
            ))}
          </ul>
        </Motion.div>
      </aside>
    </AnimatePresence>
  );
}
