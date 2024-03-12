import clsx from "clsx";

export function Container({
  className,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-screen-xl mt-16 px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}
