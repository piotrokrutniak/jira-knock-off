import { EditStoryDto } from "@components/feature/stories/EditStoryForm";
import { axiosInstance } from "@hooks/axios/useAxios";
import { useMutation } from "@tanstack/react-query";

export const useMutationEditStoryById = () => {
  return useMutation({
    mutationKey: ["editStory"],
    mutationFn: editStoryById,
    onSuccess: (res) => {
      console.log(res);
    },
  });
};

const editStoryById = async (data: EditStoryDto): Promise<unknown> => {
  try {
    const response = await axiosInstance.put(`/stories/${data.id}`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const errorMessage =
        error.response.data?.message ||
        "An error occurred during story update.";
      throw new Error(errorMessage);
    } else {
      // This is not an HTTP error, so re-throw it
      throw error;
    }
  }
};
