import { SignUpDto } from "@components/feature/auth/signUp/SignUpForm";
import { axiosInstance } from "@hooks/axios/useAxios";
import { useMutation } from "@tanstack/react-query";

export const useMutationSignUp = () => {
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: signUp,
  });
};

const signUp = async (data: SignUpDto): Promise<unknown> => {
  const response = await axiosInstance.post("/authentication/register", data);
  return response.data;
};
