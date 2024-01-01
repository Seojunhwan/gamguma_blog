import { cn } from '@/utils/cn';
import { type ButtonHTMLAttributes } from 'react';

// type ButtonVariant = 'solid' | 'outline' | 'ghost';
// type ButtonColor = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonRadius = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // variant?: ButtonVariant;
  // color?: ButtonColor;
  size?: ButtonSize;
  radius?: ButtonRadius;
}

/**
 * TODO: Add variantColorClasses
 * variant, color가 정의되지 않아 우선 외부에서 주입받아 사용하도록 하며 하기 코드는 주석처리
 */
// const variantColorClasses: Record<`${Variant}-${Color}`, string> = {
//   'solid-primary': 'bg-primary text-gray-700',
//   'solid-secondary': 'bg-secondary text-gray-700',
//   'solid-danger': 'bg-danger text-gray-700',
//   'outline-primary': 'border border-primary text-primary',
//   'outline-secondary': 'border border-secondary text-secondary',
//   'outline-danger': 'border border-danger text-danger',
//   'ghost-primary': 'text-primary',
//   'ghost-secondary': 'text-secondary',
//   'ghost-danger': 'text-danger',
// };

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const radiusClasses: Record<ButtonRadius, string> = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
};

const defaultClasses = [
  'inline-flex items-center justify-center',
  'transition duration-200 ease-in-out',
  'focus:outline-none',
  'disabled:opacity-50 disabled:cursor-not-allowed',
];

export const Button = ({
  children,
  // variant = 'solid',
  // color = 'primary',
  size = 'sm',
  radius = 'sm',
  className,
  ...restProps
}: ButtonProps) => {
  const classes = [
    //variant, color가 정의되지 않아 우선 외부에서 주입받아 사용하도록 하며 하기 코드는 주석처리
    // variantColorClasses[`${variant}-${color}`],
    sizeClasses[size],
    radiusClasses[radius],
    className,
  ];
  return (
    <button className={cn(defaultClasses, classes)} {...restProps}>
      {children}
    </button>
  );
};
