import { ControlledSelectInput } from "@components/generic/forms/ControlledSelectInput";
import { EditStoryFormControlType } from "../EditStoryForm";
import { StoryStatus } from "@domain/enums";

export const StatusSelectInput = ({
  control,
}: {
  control: EditStoryFormControlType;
}) => {
  const items = [
    { value: StoryStatus.Todo, label: "Todo" },
    { value: StoryStatus.InProgress, label: "In Progress" },
    { value: StoryStatus.Done, label: "Done" },
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
