import { SignUpDto } from "@components/feature/auth/signUp/SignUpForm";
import { axiosInstance } from "@hooks/axios/useAxios";
import { useMutation } from "@tanstack/react-query";

export const useMutationSignUp = (onSuccess?: () => void) => {
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: signUp,
    onSuccess,
  });
};

const signUp = async (data: SignUpDto): Promise<unknown> => {
  try {
    const response = await axiosInstance.post("/authentication/register", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const errorMessage =
        error.response.data?.message || "An error occurred during sign-in.";
      throw new Error(errorMessage);
    } else {
      // This is not an HTTP error, so re-throw it
      throw error;
    }
  }
};
