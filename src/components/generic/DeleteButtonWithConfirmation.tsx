import { Button } from "@components/ui/button";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export const DeleteButtonWithConfirmation = ({
  deleteAction,
}: {
  deleteAction: () => void;
}) => {
  const [isInitiated, setIsInitiated] = useState(false);

  return isInitiated ? (
    <Button variant={"destructive"} onClick={deleteAction}>
      <FaTrash className="mr-2" /> Are you sure?
    </Button>
  ) : (
    <Button variant={"destructive"} onClick={() => setIsInitiated(true)}>
      <FaTrash className="mr-2" /> Delete
    </Button>
  );
};
