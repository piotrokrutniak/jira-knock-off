import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { Form } from "@components/ui/form";
import { ControlledFormInput } from "@components/generic/forms/ControlledFormInput";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(24),
});

export const SignInForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const navigateToSignUp = () => {
    navigate({ to: "/auth/signUp" }).catch(console.error);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-full max-w-lg"
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
        <div className="flex gap-2 place-self-end">
          <Button
            variant={"secondary"}
            type="button"
            className="w-fit"
            onClick={navigateToSignUp}
          >
            Sign Up Instead
          </Button>
          <Button type="submit" className="w-fit">
            Sign In
          </Button>
        </div>
      </form>
    </Form>
  );
};
