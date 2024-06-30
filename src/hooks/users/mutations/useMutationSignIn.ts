import { SignInDto } from "@components/feature/auth/signIn/SignInForm";
import { axiosInstance } from "@hooks/axios/useAxios";
import { useMutation } from "@tanstack/react-query";
import { User, useUserContext } from "../UserManager";

export const useMutationSignIn = () => {
  const { setUser } = useUserContext();
  return useMutation({
    mutationKey: ["signIn"],
    mutationFn: signIn,
    onSuccess: (res: User) => {
      console.log(res);
      setUser(res);
    },
  });
};

const signIn = async (data: SignInDto): Promise<User> => {
  try {
    const response = await axiosInstance.post("/authentication/log-in", data);
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
