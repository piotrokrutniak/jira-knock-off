import { Button } from "@components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@components/ui/command";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@components/ui/form";
import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { cn } from "@utils/utils";
import { CheckIcon } from "lucide-react";
import { Control, FieldValues } from "react-hook-form";

type ComboBoxItem = {
  value: string;
  label: string;
  onSelect?: () => void;
};

type ComboBoxProps = {
  items: ComboBoxItem[];
  name: string;
  control: Control<FieldValues>;
  placeholder: string;
  formLabel: string;
  emptyLabel: string;
  emptyResultsLabel: string;
};

export const ControlledCombobox = ({
  items,
  name,
  control,
  placeholder,
  formLabel,
  emptyLabel,
  emptyResultsLabel,
}: ComboBoxProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{formLabel}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-[200px] justify-between",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  {field.value
                    ? items.find((item) => item.value === field.value)?.label
                    : emptyLabel}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder={placeholder} className="h-9" />
                <CommandList>
                  <CommandEmpty>{emptyResultsLabel}</CommandEmpty>
                  <CommandGroup>
                    {items.map((item) => (
                      <CommandItem
                        value={item.label}
                        key={item.value}
                        onSelect={() => {
                          field.onChange(item.value);
                        }}
                      >
                        {item.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            item.value === field.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {/* <FormDescription>
                {fieldDescription}
              </FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
