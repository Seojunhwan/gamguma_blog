import { Link } from 'next-view-transitions';
import type { AnchorHTMLAttributes } from 'react';

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const CustomLink = ({ href, ...restProps }: CustomLinkProps) => {
  if (href?.startsWith('/') || href?.startsWith('#')) {
    return <Link href={href} {...restProps} />;
  }

  return <a href={href} target='_blank' rel='noopener noreferrer' {...restProps} />;
};
