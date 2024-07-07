import { ProjectType } from "@/domain/types";
import { axiosInstance } from "@hooks/axios/useAxios";
import { useQuery } from "@tanstack/react-query";

export const useQueryGetProjectById = (projectId: string) => {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProjectById(projectId),
    select: (data) => {
      return data.data as ProjectType;
    },
    enabled: !!projectId,
  });
};

const getProjectById = (id: string) => {
  return axiosInstance.get(`/projects/${id}`);
};
