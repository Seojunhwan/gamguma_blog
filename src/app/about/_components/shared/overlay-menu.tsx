'use client';

import { useToggle } from '@/hooks/useToggle';
import { Variants, motion } from 'framer-motion';
import { MouseEventHandler, useCallback, useRef, useState } from 'react';

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
  },
  expand: {
    width: '300px',
    height: '48px',
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
};

export function OverlayMenu() {
  const [isOpen, toggle] = useToggle(false);
  return (
    <div className='fixed bottom-5 left-1/2 -translate-x-1/2'>
      <Magnetic disabled={isOpen}>
        <div className='p-4'>
          <motion.div
            className='flex h-12 w-12 flex-col gap-2 rounded-full bg-neutral-50 p-4 opacity-80 shadow-md transition-colors dark:bg-neutral-800'
            whileHover={{ scale: 1.05, opacity: 1 }}
            whileTap={{ scale: 0.98, opacity: 0.9 }}
            initial='initial'
            animate={isOpen ? 'expand' : 'animate'}
            exit='exit'
            variants={variants}
            onClick={toggle}
          />
        </div>
      </Magnetic>
    </div>
  );
}

function Magnetic({ children, disabled }: { children: React.ReactNode; disabled?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const { clientX, clientY } = e;

      if (disabled) return;
      if (!ref.current) return;

      const { height, width, left, top } = ref.current.getBoundingClientRect();

      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);

      setPosition({ x: middleX, y: middleY });
    },
    [disabled],
  );

  const reset = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ transform: `translate(${x}px, ${y}px)` }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className='text-white'
    >
      {children}
    </motion.div>
  );
}
