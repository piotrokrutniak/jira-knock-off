import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { HTMLInputTypeAttribute } from "react";
import { Control } from "react-hook-form";

export const ControlledFormInput = ({
  control,
  label,
  name,
  placeholder,
  type,
}: {
  control: Control<any>;
  label: string;
  name: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input type={type} {...field} placeholder={placeholder} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
