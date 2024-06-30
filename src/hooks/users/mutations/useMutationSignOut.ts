import { axiosInstance } from "@hooks/axios/useAxios";
import { useMutation } from "@tanstack/react-query";

export const useMutationSignOut = () => {
  return useMutation({
    mutationKey: ["signOut"],
    mutationFn: SignOut,
  });
};

// TODO: Fix 500 returned from server, sign out still works though
const SignOut = async (): Promise<unknown> => {
  const response = await axiosInstance.post("/authentication/log-out");
  return response.data;
};
