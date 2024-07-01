import { CreateProjectDto } from "@components/feature/projects/CreateProjectForm";
import { axiosInstance } from "@hooks/axios/useAxios";
import { useMutation } from "@tanstack/react-query";

export const useMutationCreateProject = () => {
  return useMutation({
    mutationKey: ["signIn"],
    mutationFn: createProject,
    onSuccess: (res) => {
      console.log(res);
    },
  });
};

const createProject = async (data: CreateProjectDto): Promise<unknown> => {
  try {
    const response = await axiosInstance.post("/projects/", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const errorMessage =
        error.response.data?.message || "An error occurred during project creation.";
      throw new Error(errorMessage);
    } else {
      // This is not an HTTP error, so re-throw it
      throw error;
    }
  }
};
