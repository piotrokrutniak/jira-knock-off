import { Button } from "@components/ui/button";
import { useQueryGetProjectById } from "@hooks/projects/queries/useQueryGetProjectById";
import { useQueryGetStoriesByProjectId } from "@hooks/stories/queries/useQueryGetStoriesByProjectId";
import { useUserContext } from "@hooks/users/UserManager";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

export const ProjectView = () => {
  const { selectedProject, setSelectedProject } = useUserContext();

  return <ProjectHeader />;
};

const ProjectHeader = () => {
  const { selectedProject, setSelectedProject } = useUserContext();
  const { data: project } = useQueryGetProjectById(selectedProject ?? "");
  const navigate = useNavigate();

  const handleGoBack = () => {
    setSelectedProject(null);
    navigate({ to: "/" }).catch(console.error);
  };

  return (
    <div className="flex flex-col gap-8 flex-1">
      <div className="flex justify-between place-items-center gap-16">
        <FaArrowLeft onClick={handleGoBack} className="cursor-pointer" />
        <h1 className="text-3xl font-semibold shrink-0">{project?.name}</h1>
      </div>
      <h2 className="text-xl font-semibold">Description</h2>
      <p>{project?.description}</p>
      <ProjectStories />
    </div>
  );
};

const ProjectStories = () => {
  const navigate = useNavigate();
  const { selectedProject } = useUserContext();

  const handleAddStory = () => {
    navigate({ to: "/projects/stories/create" }).catch(console.error);
  };

  return (
    <div className="flex flex-col gap-8 flex-1">
      <div className="flex justify-between gap-8 mt-8">
        <h2 className="text-xl font-semibold">Stories</h2>
        <Button onClick={handleAddStory}><FaPlus className="mr-2"/> Add New Story</Button>
      </div>
      <StoriesList selectedProject={selectedProject ?? ""} />
      {/* <NoStories /> */}
    </div>
  );
};

const NoStories = () => {
  return (
    <div className="flex-1 content-center p-8 bg-slate-50/50 rounded-lg">
      <p className="text-center">Any stories you create will go here.</p>
    </div>
  )
};

const StoriesList = ({selectedProject}: {selectedProject: string}) => {
  const { data: stories } = useQueryGetStoriesByProjectId(selectedProject ?? "");

  useEffect(() => {
    console.log("ProjectStories", stories);
  }, [stories]);

  return (
    <div className="flex-1 p-8 bg-slate-50/50 rounded-lg">
      {
        stories ? stories?.map((story) => (<div key={story._id}>{story.title}</div>)) : <NoStories />
      }
    </div>
  )
};