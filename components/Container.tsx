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
        "w-full mx-auto max-w-screen-xl py-16 px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}
