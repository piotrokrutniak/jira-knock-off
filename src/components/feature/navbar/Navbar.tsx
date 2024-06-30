import { Link } from "@tanstack/react-router";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useUserContext } from "@hooks/users/UserManager";
import { Button } from "@components/ui/button";

export const Navbar = () => {
  const { isSignedIn, handleSignOut } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate({ to: "/auth/signIn" }).catch(console.error);
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="p-2  bg-blue-500 text-white w-full shadow-sm shadow-black">
      <div className="max-w-5xl flex justify-between gap-2 m-auto place-items-center">
        <Link to="/">
            <span className="font-bold">Jira</span>
        </Link>
        <div className="flex gap-2">
          {isSignedIn ? (
            <>
              <Link
                to="/"
                className="[&.active]:font-bold place-items-center flex"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="[&.active]:font-bold place-items-center flex"
              >
                About
              </Link>
              <Button onClick={handleSignOut} className="w-full sm:w-fit">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant={"ghost"} onClick={() => navigate({ to: "/auth/signUp" })}>
                Sign Up
              </Button>
              <Button onClick={() => navigate({ to: "/auth/signIn" })}>
                Sign In
              </Button>
            </>
          )}
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
