import { ProjectSelector } from "@components/feature/dashboard/ProjectSelector";
import { PageWrapper } from "@components/generic/PageWrapper";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: () => <Home/>,
});

export const Home = () => {
  // add currently selected project to local storage
  // mapp and display all projects
  // add button to create new project
  return (
    <PageWrapper>
      <ProjectSelector />
    </PageWrapper>
  );
}