import { UserType } from "@domain/types";
import { axiosInstance } from "@hooks/axios/useAxios";
import { useQuery } from "@tanstack/react-query";

export const useQueryGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    select: (data) => {
      return data.data as UsersResponse;
    },
  });
};

const getUsers = () => {
  return axiosInstance.get("/users/");
};

export type UsersResponse = {
  results: UserType[];
  count: number;
};
