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

export const ControlledSelectInput = ({
  control,
  label,
  name,
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
              <Select {...field}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Assign user" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
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
};

// import * as React from "react"

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// export function SelectDemo() {
//   return (
//     <Select>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder="Select a fruit" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Fruits</SelectLabel>
//           <SelectItem value="apple">Apple</SelectItem>
//           <SelectItem value="banana">Banana</SelectItem>
//           <SelectItem value="blueberry">Blueberry</SelectItem>
//           <SelectItem value="grapes">Grapes</SelectItem>
//           <SelectItem value="pineapple">Pineapple</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   )
// }
