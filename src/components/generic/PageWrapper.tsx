import clsx from "clsx";

export const PageWrapper = ({
  children,
  className,
}: {
  children: JSX.Element[] | JSX.Element;
  className?: string;
}) => {
  const styles = clsx(
    ["max-w-5xl w-full mx-auto p-6 flex flex-col flex-1"],
    className,
  );
  return <div className={styles}>{children}</div>;
};
