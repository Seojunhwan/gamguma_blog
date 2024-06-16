import { cn } from '@/utils/cn';
import { type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonRadius = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
}

const variantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-neutral-950 text-gray-1200 dark:bg-gray-1200 dark:text-gray-950',
  ghost: 'text-neutral-950 hover:bg-neutral-100 dark:text-gray-1200 dark:hover:bg-gray-300',
  outline:
    'border border-neutral-200 text-neutral-950 hover:bg-neutral-100 dark:border-neutral-800 dark:text-gray-1200 dark:hover:bg-gray-300',
  link: 'p-0 underline underline-offset-4 dark:text-gray-1200 dark:hover:text-gray-1100',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-4 py-2 text-lg',
};

const radiusClasses: Record<ButtonRadius, string> = {
  sm: 'rounded-[4px]',
  md: 'rounded-[6px]',
  lg: 'rounded-[10px]',
};

const defaultClasses = [
  'inline-flex items-center justify-center',
  'transition duration-200 ease-in-out',
  'focus:outline-none',
  'disabled:opacity-50 disabled:cursor-not-allowed',
  'font-normal',
];

export const Button = ({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'sm',
  radius = 'sm',
  className,
  ...restProps
}: ButtonProps) => {
  const classes = [sizeClasses[size], variantClasses[variant], radiusClasses[radius], className];
  return (
    <button className={cn(defaultClasses, classes)} {...restProps}>
      {children}
    </button>
  );
};
