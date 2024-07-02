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
import { ControlledSelectInput } from "@components/generic/forms/ControlledSelectInput";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(0).max(200).optional(),
  ownerId: z.string().min(2).max(50),
  projectId: z.string().min(2).max(50),
  priority: z.string().min(0).max(20),
  status: z.string().min(2).max(50),
});

export type CreateStoryDto = z.infer<typeof formSchema>;

export const CreateStoryForm = () => {
  const navigate = useNavigate();
  const {
    mutate: createProject,
    isError,
    error,
    isSuccess,
  } = useMutationCreateProject();
  const form = useForm<CreateStoryDto>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      ownerId: "",
      projectId: "",
      priority: "",
      status: "",
    },
  });

  const onSubmit = (values: CreateStoryDto) => {
    console.log(values);
    // createProject(values);
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
          name="title"
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
        {
          // TODO: Replace with combobox
        }
        <ControlledSelectInput
          name="ownerId"
          control={form.control}
          label="Owner"
          placeholder="Select project owner"
        />
        {/* TODO: Implement controlled dropdowns */}
        {isError && <div className="text-red-500">{error.message}</div>}
        {isSuccess && (
          <div className="text-green-500">
            Project created successfully. Redirecting...
          </div>
        )}
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
