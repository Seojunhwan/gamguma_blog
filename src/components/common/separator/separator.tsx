import { Children, isValidElement, type ReactNode } from 'react';

export function Separator({ children, divider }: { children: ReactNode[]; divider: ReactNode }) {
  const childrenArray = Children.toArray(children).filter(isValidElement);
  const lastIndex = childrenArray.length - 1;

  return (
    <>
      {childrenArray.map((child, index) => (
        <>
          {child}
          {index !== lastIndex && divider}
        </>
      ))}
    </>
  );
}
