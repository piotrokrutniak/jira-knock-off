import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  return (
    <div className="p-2 bg-blue-500 text-white w-full shadow-sm shadow-black">
      <div className="max-w-5xl flex justify-between gap-2 m-auto">
      <div>
        <span className="font-bold">Jira</span>
      </div>
      <div className="flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      </div>
    </div>
  );
}