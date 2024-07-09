import { Button } from "@components/ui/button";
import { useQueryGetProjectById } from "@hooks/projects/queries/useQueryGetProjectById";
import { useQueryGetStoriesByProjectId } from "@hooks/stories/queries/useQueryGetStoriesByProjectId";
import { useUserContext } from "@hooks/users/UserManager";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { StoryDisplay, columns } from "../stories/storiesList/columns";
import { DataTable } from "@components/generic/dataTable/dataTable";

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
    navigate({ to: `/project/${selectedProject}/story/create` }).catch(
      console.error,
    );
  };

  return (
    <div className="flex flex-col gap-8 flex-1">
      <div className="flex justify-between gap-8 mt-8">
        <h2 className="text-xl font-semibold">Stories</h2>
        <Button onClick={handleAddStory}>
          <FaPlus className="mr-2" /> Add New Story
        </Button>
      </div>
      <StoriesList selectedProject={selectedProject ?? ""} />
    </div>
  );
};

const StoriesList = ({ selectedProject }: { selectedProject: string }) => {
  const { data: stories } = useQueryGetStoriesByProjectId(
    selectedProject ?? "",
  );
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ProjectStories", stories);
  }, [stories]);

  const tableData: StoryDisplay[] = useMemo(() => {
    return (
      stories?.map((story) => ({
        ...story,
        id: story.id,
        project: story.project.id,
        owner: story.owner.id,
        title: story.title,
        status: story.status,
        priority: story.priority,
        projectName: story.project.name,
        projectId: story.project.id,
      })) ?? []
    );
  }, [stories]);

  const viewUser = (id: string) => {
    navigate({ to: `/users/${id}` }).catch(console.error);
  };

  const viewStory = (projectId: string, storyId: string) => {
    navigate({ to: `/project/${projectId}/story/${storyId}` }).catch(
      console.error,
    );
  };

  const onClicks = {
    title: (data: StoryDisplay) => {
      console.log("viewStory", data);
      viewStory(data.projectId, data.id);
    },
    owner: (data: StoryDisplay) => {
      viewUser(data.owner);
    },
    priority: (data: StoryDisplay) => {
      console.log("Priority", data);
    },
    status: (data: StoryDisplay) => {
      console.log("Status", data);
    },
  };

  return (
    <div className="flex-1 p-8 bg-slate-100/5 rounded-lg">
      <DataTable columns={columns} data={tableData} onClicks={onClicks} />
    </div>
  );
};
