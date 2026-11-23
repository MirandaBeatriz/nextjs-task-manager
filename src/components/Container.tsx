type ContainerProps = {
  size?: "sm" | "md" | "lg";
} & React.HTMLAttributes<HTMLDivElement>;

export function Container(props: ContainerProps) {
  const { size = "md", className, children, ...rest } = props;

  const sizeClass =
    size === "sm"
      ? "max-w-screen-sm"
      : size === "md"
        ? "max-w-screen-md"
        : "max-w-screen-lg";

  return (
    <div className={`relative ${sizeClass} ${className}`} {...rest}>
      {children}
    </div>
  );
}
