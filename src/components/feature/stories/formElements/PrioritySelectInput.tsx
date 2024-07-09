import { ControlledSelectInput } from "@components/generic/forms/ControlledSelectInput";
import { EditStoryFormControlType } from "../EditStoryForm";
import { StoryPriority } from "@domain/enums";
import { CreateStoryFormControlType } from "../CreateStoryForm";

export const PrioritySelectInput = ({
  control,
}: {
  control: EditStoryFormControlType | CreateStoryFormControlType;
}) => {
  const items = [
    { value: StoryPriority.Low, label: "Low" },
    { value: StoryPriority.Medium, label: "Medium" },
    { value: StoryPriority.High, label: "High" },
  ];

  return (
    <ControlledSelectInput
      name="priority"
      control={control}
      label="Priority"
      placeholder="Select priority"
      items={items}
    />
  );
};
