import { cn } from '@/utils/cn';
import { HTMLAttributes, useState } from 'react';

interface CustomVideoProps extends HTMLAttributes<HTMLVideoElement> {
  description?: string;
  src: string;
  width?: number;
  height?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

export const CustomVideo = ({
  src,
  className,
  width,
  height,
  fullWidth,
  fullHeight,
  style: styleFromProps,
  ...props
}: CustomVideoProps) => {
  return (
    <video
      src={src}
      className={cn('rounded-lg', fullWidth && 'h-auto w-full', fullHeight && 'h-full w-auto', className)}
      style={{ ...styleFromProps, width: width, height: height }}
      {...props}
    />
  );
};
