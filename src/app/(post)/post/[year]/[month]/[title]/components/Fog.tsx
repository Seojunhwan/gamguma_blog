'use client';

import { useEffect, useState } from 'react';

export function Fog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const content = document.getElementById('content');

    if (!content) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // content 요소가 상단 100px 영역과 교차하면 Fog 표시
        setIsVisible(entry.isIntersecting);
      },
      {
        // 뷰포트 상단에서 100px 영역만 관찰
        rootMargin: '0px 0px -100% 0px',
        threshold: 0,
      },
    );

    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isVisible && (
        <div className='fixed left-0 right-0 top-0 z-10'>
          <div className='pointer-events-none mx-auto h-12 max-w-screen-md bg-gradient-to-b from-white to-transparent md:h-16 dark:from-neutral-900 dark:to-transparent' />
        </div>
      )}
    </>
  );
}
