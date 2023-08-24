import { motion, useScroll } from 'framer-motion';

export const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className='absolute bottom-0 h-1 w-full origin-left bg-amber-300'
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      {/* TODO:둥둥떠다니기 */}
      {/* <Image
        className='absolute right-0 z-50 aspect-square h-4 w-4 '
        src='/images/gumaguma.png'
        alt='guma-indicator'
        width={519.83}
        height={498.61}
      /> */}
    </>
  );
};
