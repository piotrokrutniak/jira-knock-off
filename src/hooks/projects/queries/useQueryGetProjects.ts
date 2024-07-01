import { ProjectType } from "@customtypes/types";
import { axiosInstance } from "@hooks/axios/useAxios";
import { useQuery } from "@tanstack/react-query";

export const useQueryGetProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    select: (data) => {
      return data.data as ProjectsResponse;
    },
  });
};

const getProjects = () => {
  return axiosInstance.get("/projects/");
};

type ProjectsResponse = {
  results: ProjectType[];
  count: number;
};