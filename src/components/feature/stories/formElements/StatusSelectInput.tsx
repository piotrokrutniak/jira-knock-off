import { ControlledSelectInput } from "@components/generic/forms/ControlledSelectInput";
import { EditStoryFormControlType } from "../EditStoryForm";
import { StoryStatus } from "@domain/enums";

export const StatusSelectInput = ({
  control,
}: {
  control: EditStoryFormControlType;
}) => {
  const items = [
    { value: StoryStatus.Open, label: "Open" },
    { value: StoryStatus.InProgress, label: "In Progress" },
    { value: StoryStatus.Closed, label: "Closed" },
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
