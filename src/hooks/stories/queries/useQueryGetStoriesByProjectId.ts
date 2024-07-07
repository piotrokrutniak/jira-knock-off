import { StoryType } from "@/domain/types";
import { axiosInstance } from "@hooks/axios/useAxios";
import { useQuery } from "@tanstack/react-query";

export const useQueryGetStoriesByProjectId = (projectId: string) => {
  return useQuery({
    queryKey: ["stories", projectId],
    queryFn: () => getStoriesByProjectId(projectId),
    select: (data) => {
      return data.data as StoriesResponse;
    },
  });
};

const getStoriesByProjectId = (projectId: string) => {
  return axiosInstance.get(`/projects/${projectId}/stories/`);
};

type StoriesResponse = StoryType[];
