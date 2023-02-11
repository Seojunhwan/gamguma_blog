import { motion, useScroll, useSpring } from 'framer-motion';

export const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  return <motion.div className='absolute bottom-0 h-1 w-full origin-left bg-amber-300' style={{ scaleX }} />;
};
