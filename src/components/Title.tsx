type TitleProps = {
  size?: "sm" | "md" | "lg";
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & React.HTMLAttributes<HTMLElement>;

export function Title(props: TitleProps) {
  const { size = "md", tag = "h2", className, children, ...rest } = props;

  const Heading = tag;
  return (
    <Heading className="" {...rest}>
      {children}
    </Heading>
  );
}
