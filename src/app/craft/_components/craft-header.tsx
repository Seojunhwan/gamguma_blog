import { Motion } from '@/components/motion';
import { HTMLAttributes } from 'react';

interface CraftHeaderProps extends HTMLAttributes<HTMLDivElement> {
  expanded: boolean;
}

export function CraftHeader({ expanded, ...props }: CraftHeaderProps) {
  return (
    <Motion.div className='bg-neutral-50 p-2' {...props}>
      hi 헤더임
    </Motion.div>
  );
}
