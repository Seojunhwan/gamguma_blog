import { CustomLink } from './link';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const CustomHeading = ({ children, level, id, ...restProps }: HeadingProps) => {
  const Comp = `h${level}` as any;

  return (
    <Comp id={id} {...restProps}>
      <CustomLink href={'#' + id} className='anchor font-semibold no-underline'>
        {children}
      </CustomLink>
    </Comp>
  );
};
