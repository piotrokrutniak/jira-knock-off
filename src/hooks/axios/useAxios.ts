import axios from "axios";
import { refreshAccessToken } from "../users/mutations/useMutationRefreshAccessToken";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const user = localStorage.getItem("user");
    if (error.response.status === 401) {
      if (user) {
        refreshAccessToken();
        return;
      }
      window.location = "/auth/signin" as unknown as Location;
    }
  },
);
