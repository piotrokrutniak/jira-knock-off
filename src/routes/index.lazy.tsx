import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: () => <Home/>,
});

export const Home = () => {
  return (
    <div>
      <h1 className="text-green-500">Home page</h1>
    </div>
  );
}