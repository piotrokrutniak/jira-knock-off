import { useQueryGetUsers } from "@hooks/users/queries/useQueryGetUsers";
import { useEffect, useMemo } from "react";
import { ControlledCombobox } from "./ControlledCombobox";
import { Control } from "react-hook-form";

type ControlledUsersComboboxProps = {
  name: string;
  control: Control<any>;
};

export const ControlledUsersCombobox = ({
  name,
  control,
}: ControlledUsersComboboxProps) => {
  const { data } = useQueryGetUsers();

  const userItems = useMemo(() => {
    return (
      data?.results?.map((user) => ({
        value: user.id,
        label: user.fullName,
      })) ?? []
    );
  }, [data]);

  useEffect(() => {
    console.log(userItems);
  }, [userItems]);

  return userItems ? (
    <ControlledCombobox
      formLabel="Owner"
      items={userItems}
      control={control}
      emptyLabel="Select a user"
      emptyResultsLabel="No results found"
      name={name}
      placeholder="Select a user"
    />
  ) : null;
};
