import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useTheme } from "@components/ThemeManager";
import "../index.css";
import clsx from "clsx";

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

const RootComponent = () => {
  const { theme } = useTheme();
  const rootStyles = clsx([
    "flex flex-col min-h-screen flex-1 border-2 border-red-500",
    theme === "light" ? "bg-white text-black" : "bg-black text-white",
  ])

  return (
    <>
      <div className={rootStyles}>
        <div className="p-2 flex gap-2 bg-blue-500 text-white">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  )
}