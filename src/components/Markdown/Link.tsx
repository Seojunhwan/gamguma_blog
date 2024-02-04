import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const CustomLink = ({ href, ...restProps }: CustomLinkProps) => {
  if (href?.startsWith('/')) {
    return <Link href={href} {...restProps} />;
  }

  if (href?.startsWith('#')) {
    return <a href={href} {...restProps} />;
  }

  return <a href={href} target='_blank' rel='noopener noreferrer' {...restProps} />;
};
