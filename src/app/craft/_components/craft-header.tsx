import { Motion } from '@/components/motion';
import { HTMLMotionProps } from 'framer-motion';

interface CraftHeaderProps extends HTMLMotionProps<'div'> {
  expanded: boolean;
}

export function CraftHeader({ expanded, ...props }: CraftHeaderProps) {
  return (
    <Motion.div className='bg-neutral-50 p-2' {...props}>
      hi 헤더임
    </Motion.div>
  );
}
