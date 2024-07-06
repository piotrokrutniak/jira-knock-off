import { StoryType } from "@customtypes/types";
import { axiosInstance } from "@hooks/axios/useAxios";
import { useQuery } from "@tanstack/react-query";

export const useQueryGetStoryById = (storyId: string) => {
  return useQuery({
    queryKey: ["story", storyId],
    queryFn: () => getStoryById(storyId),
    select: (data) => {
      return data.data as StoryType;
    },
  });
};

const getStoryById = (storyId: string) => {
  return axiosInstance.get(`/stories/${storyId}`);
};
