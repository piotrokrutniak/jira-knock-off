import { CreateStoryDto } from "@components/feature/stories/CreateStoryForm";
import { StoryType } from "@domain/types";
import { axiosInstance } from "@hooks/axios/useAxios";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useMutationCreateStory = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createStory"],
    mutationFn: createStory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      onSuccess && onSuccess();
    },
  });
};

const createStory = async (story: CreateStoryDto): Promise<StoryType> => {
  try {
    const response = await axiosInstance.post("/stories", story);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const errorMessage =
        error.response.data?.message ||
        "An error occurred during story creation.";
      throw new Error(errorMessage);
    } else {
      // This is not an HTTP error, so re-throw it
      throw error;
    }
  }
};
