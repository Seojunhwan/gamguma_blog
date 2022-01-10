import { useEffect, useRef } from 'react';

interface IObserverRef {
  [key: string]: IntersectionObserverEntry;
}

const observerOption = {
  rootMargin: '-80px 0px -60% 0px',
};

export const useIntersectionObserver = (
  setActiveId: React.Dispatch<React.SetStateAction<string>>,
  content: string,
) => {
  const headingElementsRef = useRef<IObserverRef>({});
  useEffect(() => {
    headingElementsRef.current = {};
    const observerCallback = (elements: IntersectionObserverEntry[]) => {
      headingElementsRef.current = elements.reduce((map, headingElements) => {
        map[headingElements.target.id] = headingElements;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings: IntersectionObserverEntry[] = [];

      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) {
          visibleHeadings.push(headingElement);
        }
      });

      const findIndexFromId = (id: string) => {
        return visibleHeadings.findIndex((element) => element.target.id === id);
      };

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        visibleHeadings.sort((a, b) => {
          return findIndexFromId(a.target.id) - findIndexFromId(b.target.id);
        });
        setActiveId(visibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOption);
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    headingElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [content]);
};
