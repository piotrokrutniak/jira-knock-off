import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useTheme } from "@components/ThemeManager";
import "../index.css";
import clsx from "clsx";
import { Navbar } from "@components/feature/navbar/Navbar";

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

const RootComponent = () => {
  const { theme } = useTheme();
  const rootStyles = clsx([
    "flex flex-col min-h-screen flex-1",
    theme === "light" ? "bg-white text-black" : "bg-black text-white",
  ]);

  return (
    <>
      <div className={rootStyles}>
        <Navbar />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  );
};
