import { axiosInstance } from "@/hooks/axios/useAxios";
import { useMutation } from "@tanstack/react-query";

export const useMutationRefreshAccessToken = () => {
  return useMutation({
    mutationKey: ["refreshAccessToken"],
    mutationFn: refreshAccessToken,
    onSuccess: () => {
      console.log("Access token refreshed");
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};

export const refreshAccessToken = async (): Promise<void> => {
  try {
    await axiosInstance.post("/authentication/refresh");
    location.reload();
  } catch (error: any) {
    if (error.response) {
      console.error(error);
      const errorMessage =
        error.response.data?.message ||
        "An error occurred during token refresh.";
      localStorage.removeItem("user");
      window.location = "/auth/signin" as unknown as Location;
      throw new Error(errorMessage);
    } else {
      // This is not an HTTP error, so re-throw it
      throw error;
    }
  }
};
