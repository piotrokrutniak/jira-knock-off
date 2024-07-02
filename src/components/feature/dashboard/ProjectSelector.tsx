import clsx from "clsx";
import { FaPlus } from "react-icons/fa";
import { Input } from "@components/ui/input";
import { ProjectType } from "@customtypes/types";
import { useNavigate } from "@tanstack/react-router";
import { useQueryGetProjects } from "@hooks/projects/queries/useQueryGetProjects";
import { useUserContext } from "@hooks/users/UserManager";
import { useState } from "react";

export const ProjectSelector = () => {
  const { data: projects } = useQueryGetProjects();
  const [searchString, setSearchString] = useState<string>("");

  return (
    <section id="projects-selector">
      <div className="flex justify-between mb-8 gap-8 max-sm:flex-col">
        <h1 className="text-3xl font-semibold text-nowrap">Select Project</h1>
        <Input
          className="sm:max-w-96"
          onChange={(event) =>
            setSearchString(event.target.value.toLowerCase())
          }
          placeholder="Search Projects"
        />
      </div>

      {projects?.count ? (
        <div className="grid grid-auto-fit-xs gap-4">
          {projects?.results
            .filter(
              (project) =>
                project.name.toLowerCase().includes(searchString) ||
                project.description.includes(searchString),
            )
            .map((project) => <ProjectPanel key={project._id} {...project} />)}
          {!searchString && <AddProjectPanel />}
        </div>
      ) : (
        <div className="flex h-64">
          <AddProjectPanel />
        </div>
      )}
      <div className="grid grid-auto-fit-xs gap-4"></div>
    </section>
  );
};

const ProjectPanel = (project: ProjectType) => {
  const navigate = useNavigate();
  const { setSelectedProject } = useUserContext();

  const handleProjectClick = () => {
    // navigate({ to: `/projects/${project.id}` }).catch(console.error);
    setSelectedProject(project._id);
  };

  return (
    <div
      className={clsx([
        "p-16 aspect-square rounded-lg border-2 flex place-content-center justify-center items-center",
        "shadow-sm hover:shadow-md transition-all cursor-pointer hover:bg-slate-200/5",
      ])}
      role="button"
      onClick={handleProjectClick}
    >
      {project.name ?? "Project name"}
    </div>
  );
};

const AddProjectPanel = () => {
  const navigate = useNavigate();
  // navigate to create project page
  return (
    <div
      className={clsx([
        "p-16 aspect-square rounded-lg border-2 flex place-content-center justify-center items-center",
        "shadow-sm hover:shadow-md transition-all cursor-pointer hover:bg-slate-200/5",
      ])}
      role="button"
      onClick={() => navigate({ to: "/projects/create" }).catch(console.error)}
    >
      <FaPlus className="flex" />
    </div>
  );
};
