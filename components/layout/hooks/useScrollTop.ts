import { useCallback, useEffect, useState } from 'react';

export const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  return scrollTop;
};
