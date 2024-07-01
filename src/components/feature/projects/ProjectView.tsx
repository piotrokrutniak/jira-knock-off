import { useQueryGetProjectById } from "@hooks/projects/queries/useQueryGetProjectById";
import { useUserContext } from "@hooks/users/UserManager";
import { useNavigate } from "@tanstack/react-router";
import { FaArrowLeft } from "react-icons/fa";

export const ProjectView = () => {
  const { selectedProject, setSelectedProject } = useUserContext();

  return <ProjectHeader />;
};

const ProjectHeader = () => {
  const { selectedProject, setSelectedProject } = useUserContext();
  const navigate = useNavigate();

  const { data: project } = useQueryGetProjectById(selectedProject ?? "");

  const handleGoBack = () => {
    setSelectedProject(null);
    navigate({ to: "/" }).catch(console.error);
  };

  return (
    <div className="flex justify-between place-items-center gap-16">
      <FaArrowLeft onClick={handleGoBack} className="cursor-pointer" />
      <h1 className="text-3xl font-semibold shrink-0">{project?.name}</h1>
    </div>
  );
};
