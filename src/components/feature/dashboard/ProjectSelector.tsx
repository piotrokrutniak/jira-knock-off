import clsx from "clsx";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Input } from "@components/ui/input";

export const ProjectSelector = () => {
  const [projects, setProjects] = useState([]) // [Project, Project, Project
  return (
    <section id="projects-selector">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl">Select Project</h1>
        <Input placeholder="Search Projects" />
      </div>
      {/* <ProjectPanel /> */}
      {projects.length
        ? <div className="grid grid-auto-fit-xs gap-4">
            <AddProjectPanel />
          </div>
        : <div className="flex h-64">
            <AddProjectPanel />
          </div>}
      <div className="grid grid-auto-fit-xs gap-4">
      </div>
    </section>
  )
};

const ProjectPanel = () => {
  return (
    <></>
  )
};

const AddProjectPanel = () => {
  return (
    <div className={clsx([
      "p-16 aspect-square rounded-lg border-2 flex place-content-center justify-center items-center",
      "shadow-sm hover:shadow-md transition-shadow cursor-pointer",
    ])}><FaPlus className="flex" /></div>
  )
};