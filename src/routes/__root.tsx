import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useTheme } from "@components/ThemeManager";
import "../index.css";
import clsx from "clsx";
import { Navbar } from "@components/feature/navbar/Navbar";
import axios from "axios";

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

const RootComponent = () => {
  const { theme } = useTheme();
  const rootStyles = clsx([
    "flex flex-col min-h-screen flex-1",
    theme === "light" ? "bg-white text-black" : "bg-black text-white",
  ]);
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  return (
    <>
      <div className={rootStyles}>
        <Navbar />
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  );
};
