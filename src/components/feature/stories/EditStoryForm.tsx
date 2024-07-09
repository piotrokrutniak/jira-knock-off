import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@components/ui/button";
import { Form } from "@components/ui/form";
import { ControlledFormInput } from "@components/generic/forms/ControlledFormInput";
import { ControlledFormTextArea } from "@components/generic/forms/ControlledFormTextArea";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { StoryType } from "@domain/types";
import { useMutationEditStoryById } from "@hooks/stories/mutations/useMutationEditStoryById";
import { PrioritySelectInput } from "./formElements/PrioritySelectInput";
import { StatusSelectInput } from "./formElements/StatusSelectInput";
import { UsersComboBox } from "./formElements/UsersComboBox";

const formSchema = z.object({
  id: z.string().min(2).max(50),
  title: z.string().min(2).max(50),
  description: z.string().min(0).max(200).optional(),
  owner: z.string().min(2).max(50),
  project: z.string().min(2).max(50),
  priority: z.string().min(0).max(20),
  status: z.string().min(2).max(50),
});

export type EditStoryDto = z.infer<typeof formSchema>;

export type EditStoryFormControlType = Control<
  {
    owner: string;
    project: string;
    title: string;
    id: string;
    status: string;
    priority: string;
    description?: string | undefined;
  },
  any
>;

export const EditStoryForm = ({ story }: { story: StoryType }) => {
  const navigate = useNavigate();
  const {
    mutate: editStory,
    isError,
    error,
    isSuccess,
  } = useMutationEditStoryById();
  const form = useForm<EditStoryDto>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: story.id,
      title: story.title,
      description: story.description,
      owner: story.owner.id,
      project: story.project.id,
      priority: story.priority,
      status: story.status,
    },
  });

  const onSubmit = (values: EditStoryDto) => {
    console.log(values);
    editStory(values);
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
        <div className="display flex justify-between gap-8">
          <div>
            <PrioritySelectInput control={form.control} />
            <StatusSelectInput control={form.control} />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2">
              Story owner
            </p>
            <UsersComboBox
              value={form.getValues("owner")}
              onChange={(value) => form.setValue("owner", value)}
            />
          </div>
        </div>
        <ControlledFormTextArea
          name="description"
          control={form.control}
          label="Project description"
          placeholder="Enter project description"
        />
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
