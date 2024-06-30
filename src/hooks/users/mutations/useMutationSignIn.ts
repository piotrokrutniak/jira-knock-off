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
  const response = await axiosInstance.post("/authentication/log-in", data, {
    withCredentials: true,
  });
  return response.data;
};
