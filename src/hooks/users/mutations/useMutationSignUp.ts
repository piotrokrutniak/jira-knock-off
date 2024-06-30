import { SignUpDto } from "@components/feature/auth/signUp/SignUpForm";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useMutationSignUp = () => {
  return useMutation({
    mutationFn: signUp
  });
};

const signUp = async (data: SignUpDto): Promise<unknown> => {
  const response = await axios.post("/api/auth/signUp", data);
  return response.data;
};