import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { Form } from "@components/ui/form";
import { ControlledFormInput } from "@components/generic/forms/ControlledFormInput";
import { useMutationSignUp } from "@hooks/users/mutations/useMutationSignUp";
import { Link } from "@tanstack/react-router";

const formSchema = z
  .object({
    email: z.string().email(),
    firstName: z.string().min(1).max(24),
    lastName: z.string().min(1).max(24),
    password: z.string().min(8).max(24),
    confirmedPassword: z.string().min(8).max(24),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: "Passwords do not match", // Custom error message
    path: ["confirmedPassword"], // Path of the field that the error is associated with
  });

export type SignUpDto = z.infer<typeof formSchema>;

export const SignUpForm = () => {
  const navigate = useNavigate();
  const form = useForm<SignUpDto>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmedPassword: "",
    },
  });

  const { mutate: signUp, isPending, isSuccess, error } = useMutationSignUp();

  function onSubmit(values: SignUpDto) {
    signUp(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full max-w-lg"
      >
        <ControlledFormInput
          name="email"
          type="email"
          control={form.control}
          label="Email"
          placeholder="Enter your email"
        />
        <ControlledFormInput
          name="firstName"
          type="text"
          control={form.control}
          label="First Name"
          placeholder="Enter your first name"
        />
        <ControlledFormInput
          name="lastName"
          type="text"
          control={form.control}
          label="Last Name"
          placeholder="Enter your last name"
        />
        <ControlledFormInput
          name="password"
          type="password"
          control={form.control}
          label="Password"
          placeholder="Enter your password"
        />
        <ControlledFormInput
          name="confirmedPassword"
          type="password"
          control={form.control}
          label="Confirm Password"
          placeholder="Confirm your password"
        />
        {error && <p className="text-red-500">{error.message}</p>}
        <div className="flex max-sm:flex-col-reverse mt-4 gap-8 justify-between">
          <Link to="/auth/signIn" className="underline sm:place-self-center">
            Already have an account? Sign in here.
          </Link>
          <Button disabled={isPending} type="submit" className="w-full sm:w-fit">
            {isPending ? "Creating account..." : "Create Account"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
