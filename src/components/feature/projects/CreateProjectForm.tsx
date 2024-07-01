import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@components/ui/button";
import { Form } from "@components/ui/form";
import { ControlledFormInput } from "@components/generic/forms/ControlledFormInput";
import { ControlledFormTextArea } from "@components/generic/forms/ControlledFormTextArea";
import { useNavigate } from "@tanstack/react-router";
import { useMutationCreateProject } from "@hooks/projects/mutations/useMutationCreateProject";
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(0).max(200).optional(),
});

export type CreateProjectDto = z.infer<typeof formSchema>;

export const CreateProjectForm = () => {
  const navigate = useNavigate();
  const { mutate: createProject, isError, error, isSuccess } = useMutationCreateProject();
  const form = useForm<CreateProjectDto>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (values: CreateProjectDto) => {
    console.log(values);
    createProject(values);
  };

  const onCancel = () => {
    navigate({ to: "/" });
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate({ to: "/" });
      }, 1000);
    }
  }, [isSuccess, navigate]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <ControlledFormInput
          name="name"
          control={form.control}
          label="Project Name"
          placeholder="Enter project name"
        />
        <ControlledFormTextArea
          name="description"
          control={form.control}
          label="Project description"
          placeholder="Enter project description"
        />
        {isError && <div className="text-red-500">{error.message}</div>}
        {isSuccess && <div className="text-green-500">Project created successfully. Redirecting...</div>}
        <div className="flex gap-2 place-self-end">
          <Button
            variant={"secondary"}
            type="button"
            className="w-fit"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit" className="w-fit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
