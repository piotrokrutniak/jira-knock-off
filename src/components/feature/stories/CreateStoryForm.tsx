import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@components/ui/button";
import { Form } from "@components/ui/form";
import { ControlledFormInput } from "@components/generic/forms/ControlledFormInput";
import { ControlledFormTextArea } from "@components/generic/forms/ControlledFormTextArea";
import { useNavigate } from "@tanstack/react-router";
import { useMutationCreateStory } from "@hooks/stories/mutations/useMutationCreateStory";
import { PrioritySelectInput } from "./formElements/PrioritySelectInput";
import { StatusSelectInput } from "./formElements/StatusSelectInput";
import { ControlledUsersCombobox } from "@components/generic/forms/ControlledUsersCombobox";
import { StoryStatus } from "@domain/enums";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(0).max(200).optional(),
  owner: z.string().min(2).max(50),
  project: z.string().min(2).max(50),
  priority: z.string().min(0).max(20),
  status: z.string().min(2).max(50),
});

export type CreateStoryDto = z.infer<typeof formSchema>;

export type CreateStoryFormControlType = Control<
  {
    owner: string;
    project: string;
    title: string;
    status: string;
    priority: string;
    description?: string | undefined;
  },
  any
>;

export const CreateStoryForm = ({ projectId }: { projectId: string }) => {
  const navigate = useNavigate();
  const handleSuccess = () => {
    navigate({ to: "/" });
  };
  const {
    mutate: createStory,
    isError,
    error,
    isSuccess,
  } = useMutationCreateStory(handleSuccess);
  const form = useForm<CreateStoryDto>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      owner: "",
      project: projectId,
      priority: "",
      status: StoryStatus.Open,
    },
  });

  const onSubmit = (values: CreateStoryDto) => {
    console.log("submitted", values);
    createStory(values);
  };

  const onCancel = () => {
    navigate({ to: "/" });
  };

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
            {/* <UsersComboBox
              value={form.getValues("owner")}
              onChange={(value) => form.setValue("owner", value)}
            /> */}
            <ControlledUsersCombobox name="owner" control={form.control} />
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
