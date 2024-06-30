import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { Form } from "@components/ui/form";
import { ControlledFormInput } from "@components/generic/forms/ControlledFormInput";
import { Link } from "@tanstack/react-router";
import { useMutationSignIn } from "@hooks/users/mutations/useMutationSignIn";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(24),
});

export type SignInDto = z.infer<typeof formSchema>;

export const SignInForm = () => {
  const navigate = useNavigate();
  const form = useForm<SignInDto>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: signIn, isPending, isSuccess, error } = useMutationSignIn();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    signIn(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate({ to: "/" }).catch(console.error);
    }
  }, [isSuccess, navigate]);

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
          name="password"
          type="password"
          control={form.control}
          label="Password"
          placeholder="Enter your password"
        />
        {error && <p className="text-red-500">{error.message}</p>}
        {isSuccess && <p className="text-green-500">Sign in successful, you'll be redirected shortly...</p>}
        <div className="flex max-sm:flex-col-reverse mt-4 gap-8 justify-between">
          <Link to="/auth/signUp" className="underline sm:place-self-center">
            New around here? Sign up.
          </Link>
          <Button
            disabled={isPending}
            type="submit"
            className="w-full sm:w-fit"
          >
            {isPending ? "Signing in..." : "Sign In"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
