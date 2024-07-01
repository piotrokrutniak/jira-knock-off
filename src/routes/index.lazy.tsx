import { ProjectSelector } from "@components/feature/dashboard/ProjectSelector";
import { ProjectView } from "@components/feature/projects/ProjectView";
import { PageWrapper } from "@components/generic/PageWrapper";
import { useUserContext } from "@hooks/users/UserManager";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: () => <Home />,
});

export const Home = () => {
  // add currently selected project to local storage
  // mapp and display all projects
  // add button to create new project
  const { selectedProject } = useUserContext();

  return (
    <PageWrapper>
      {selectedProject ? <ProjectView/> : <ProjectSelector />}
    </PageWrapper>
  );
};
