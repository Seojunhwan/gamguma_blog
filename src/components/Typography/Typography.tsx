import { cn } from '@//utils/cn';
import { clsx } from 'clsx';
import { type AllHTMLAttributes, type CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TypographyProps<Element extends keyof JSX.IntrinsicElements = 'span'>
  extends Omit<AllHTMLAttributes<Element>, 'as'> {
  as?: Element;
  typography?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'code' | 'pre';
  color?: string;
  fontWeight?: CSSProperties['fontWeight'];
}

const typographyClasses: Partial<Record<keyof JSX.IntrinsicElements, string>> = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-lg',
  h6: 'text-base',
  p: 'text-base',
  span: 'text-base font-normal',
  code: 'text-base font-code',
  pre: 'text-base font-code',
};

const fontWeightClasses: Partial<Record<Exclude<CSSProperties['fontWeight'], undefined>, string>> = {
  normal: 'font-normal',
  bold: 'font-bold',
  600: 'font-semibold',
  700: 'font-bold',
  800: 'font-extrabold',
  900: 'font-black',
};

const defaultColor: Partial<Record<keyof JSX.IntrinsicElements, string>> = {
  h1: 'text-gray-800',
  h2: 'text-gray-800',
  h3: 'text-gray-800',
  h4: 'text-gray-800',
  h5: 'text-gray-800',
  h6: 'text-gray-800',
  p: 'text-gray-700',
  span: 'text-gray-700',
};

export const Typography = (({
  as: Component = 'span',
  typography,
  fontWeight = 'normal',
  color = '',
  className,
  ...restProps
}: TypographyProps) => {
  const typo = typography ?? Component;
  const classes = cn(typographyClasses[typo], fontWeightClasses[fontWeight], defaultColor[typo], className);

  return <Component className={classes} {...(restProps as any)} />;
}) as <Element extends keyof JSX.IntrinsicElements = 'span'>(props: TypographyProps<Element>) => JSX.Element;
