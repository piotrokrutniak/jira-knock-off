import clsx from "clsx";

export const H1Text = ({
  children = "",
  className,
}: {
  children?: string;
  className?: string;
}) => {
  return <h1 className={clsx([[className, "text-3xl"]])}>{children}</h1>;
};
