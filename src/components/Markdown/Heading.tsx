interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const CustomHeading = ({ children, level, id, ...restProps }: HeadingProps) => {
  const Comp = `h${level}` as any;

  return (
    <Comp id={id} {...restProps}>
      <a href={'#' + id} className='anchor font-semibold no-underline'>
        {children}
      </a>
    </Comp>
  );
};
