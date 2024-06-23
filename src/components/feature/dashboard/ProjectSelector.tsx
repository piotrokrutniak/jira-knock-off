import clsx from "clsx";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Input } from "@components/ui/input";
import { ProjectType } from "@customtypes/types";

export const ProjectSelector = () => {
  const [projects, setProjects] = useState([]); // [Project, Project, Project
  return (
    <section id="projects-selector">
      <div className="flex justify-between mb-8 gap-8 max-sm:flex-col">
        <h1 className="text-3xl font-semibold text-nowrap">Select Project</h1>
        <Input className="sm:max-w-96" placeholder="Search Projects" />
      </div>
      {/* <ProjectPanel /> */}
      {projects.length ? (
        <div className="grid grid-auto-fit-xs gap-4">
          <AddProjectPanel />
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
  // display project panel data
  return (
    <div
      className={clsx([
        "p-16 aspect-square rounded-lg border-2 flex place-content-center justify-center items-center",
        "shadow-sm hover:shadow-md transition-all cursor-pointer hover:bg-slate-200/5",
      ])}
    >
      Project name
    </div>
  );
};

const AddProjectPanel = () => {
  // navigate to create project page
  return (
    <div
      className={clsx([
        "p-16 aspect-square rounded-lg border-2 flex place-content-center justify-center items-center",
        "shadow-sm hover:shadow-md transition-all cursor-pointer hover:bg-slate-200/5",
      ])}
    >
      <FaPlus className="flex" />
    </div>
  );
};
