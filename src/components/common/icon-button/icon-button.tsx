import { Button, type ButtonProps } from '@/components/common';

interface IconButtonProps extends Omit<ButtonProps, 'size'> {
  label: string;
}

export const IconButton = ({ label, children, ...restProps }: IconButtonProps) => {
  return (
    <Button {...restProps} aria-label={label} title={label} size='icon'>
      {children}
    </Button>
  );
};
