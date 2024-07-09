import { axiosInstance } from "@hooks/axios/useAxios";
import { useMutation } from "@tanstack/react-query";

export const useMutationDeleteStoryById = (onSuccess?: () => void) => {
  return useMutation({
    mutationKey: ["deleteStory"],
    mutationFn: deleteStoryById,
    onSuccess,
  });
};

const deleteStoryById = async (storyId: string): Promise<unknown> => {
  try {
    const response = await axiosInstance.delete(`/stories/${storyId}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const errorMessage =
        error.response.data?.message ||
        "An error occurred during story deletion.";
      throw new Error(errorMessage);
    } else {
      // This is not an HTTP error, so re-throw it
      throw error;
    }
  }
};
