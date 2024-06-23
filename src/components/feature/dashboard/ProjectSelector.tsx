import clsx from "clsx";

export const ProjectSelector = () => {
  return (
    <section id="projects-selector">
      <h1 className="text-3xl">Select Project</h1>
      {/* <ProjectPanel /> */}
      <div className="grid grid-auto-fit-xs gap-4">
        <AddProjectPanel />
        <AddProjectPanel />
        <AddProjectPanel />
        <AddProjectPanel />
        <AddProjectPanel />
        <AddProjectPanel />
        <AddProjectPanel />
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
      "p-16 aspect-square rounded-lg border-2",
      "shadow-sm hover:shadow-md transition-shadow cursor-pointer",
    ])}>+</div>
  )
};