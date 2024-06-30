import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { Form } from "@components/ui/form";
import { ControlledFormInput } from "@components/generic/forms/ControlledFormInput";

const formSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(8).max(24).optional(),
  lastName: z.string().min(0).max(200).optional(),
  password: z.string().min(8).max(24),
  confirmedPassword: z.string().min(8).max(24),
});

export const SignUpForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmedPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const navigateToSignIn = () => {
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
        <div className="flex gap-2 place-self-end">
          <Button
            variant={"secondary"}
            type="button"
            className="w-fit"
            onClick={navigateToSignIn}
          >
            Sign In Instead
          </Button>
          <Button type="submit" className="w-fit">
            Create Account
          </Button>
        </div>
      </form>
    </Form>
  );
};
