import { ComboBox } from "@components/generic/ComboBox";
import { useQueryGetUsers } from "@hooks/users/queries/useQueryGetUsers";
import { useEffect, useMemo } from "react";

export const UsersComboBox = ({
  onChange,
  value,
}: {
  onChange: (userId: string) => void;
  value: string;
}) => {
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
    <ComboBox
      items={userItems}
      setValue={onChange}
      value={value}
      emptyValue="Select a user"
      placeholder="Select a user"
    />
  ) : null;
};
