import { type HTMLAttributes } from 'react';

interface CodeProps extends HTMLAttributes<HTMLElement> {
  'data-language'?: string;
}

export const Code = ({ 'data-language': dataLanguage, ...props }: CodeProps) => {
  return <code {...props} data-type={dataLanguage ? 'code' : 'text'} />;
};
