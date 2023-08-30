import { Button, type ButtonProps } from '../Button';

interface IconButtonProps extends ButtonProps {
  label: string;
}

export const IconButton = ({ label, children, ...restProps }: IconButtonProps) => {
  return (
    <Button {...restProps} aria-label={label} title={label}>
      {children}
    </Button>
  );
};
