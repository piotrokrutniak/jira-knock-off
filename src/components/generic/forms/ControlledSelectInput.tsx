import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { HTMLInputTypeAttribute } from "react";
import { Control } from "react-hook-form";

type ControlledSelectInputProps = {
  control: Control<any>;
  label: string;
  name: string;
  placeholder: string;
  items: SelectItem[];
  selectLabel?: string;
  type?: HTMLInputTypeAttribute;
};

type SelectItem = {
  value: string;
  label: string;
};

export const ControlledSelectInput = ({
  control,
  label,
  selectLabel,
  placeholder,
  name,
  items,
}: ControlledSelectInputProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => {
      return (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {selectLabel && <SelectLabel>{selectLabel}</SelectLabel>}
                  {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      );
    }}
  />
);
