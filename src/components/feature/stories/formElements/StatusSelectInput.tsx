import { ControlledSelectInput } from "@components/generic/forms/ControlledSelectInput";
import { EditStoryFormControlType } from "../EditStoryForm";
import { StoryStatus } from "@domain/enums";
import { CreateStoryFormControlType } from "../CreateStoryForm";
import { parseStatus } from "@/utils/utils";

export const StatusSelectInput = ({
  control,
}: {
  control: EditStoryFormControlType | CreateStoryFormControlType;
}) => {
  const items = [
    { value: StoryStatus.Todo, label: parseStatus(StoryStatus.Todo) },
    { value: StoryStatus.InProgress, label: parseStatus(StoryStatus.InProgress) },
    { value: StoryStatus.Done, label: parseStatus(StoryStatus.Done) },
  ];

  return (
    <ControlledSelectInput
      name="status"
      control={control}
      label="Status"
      placeholder="Select status"
      items={items}
    />
  );
};
