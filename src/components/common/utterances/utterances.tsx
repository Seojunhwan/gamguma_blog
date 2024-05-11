'use client';

import { useEffect, useRef } from 'react';

export function Utterances() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }
    const section = sectionRef.current;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.async = true;
    scriptElem.setAttribute('repo', 'Seojunhwan/gamguma_blog');
    scriptElem.setAttribute('issue-term', 'title');
    scriptElem.setAttribute('theme', 'github-light');
    scriptElem.setAttribute('label', 'blog-comment');
    scriptElem.crossOrigin = 'anonymous';

    section.appendChild(scriptElem);
  }, []);

  return <section ref={sectionRef} className='mt-2 [&>utterances]:w-full' />;
}
