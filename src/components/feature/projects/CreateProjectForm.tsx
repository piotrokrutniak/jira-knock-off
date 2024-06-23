import { zodResolver } from "@hookform/resolvers/zod"
import { Control, useForm } from 'react-hook-form';
import { z } from "zod"
import { Button } from "@components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form"
import { Input } from "@components/ui/input"
import { HTMLInputTypeAttribute } from "react";
import { Textarea } from "@components/ui/textarea";
 
const formSchema = z.object({
  id: z.string().min(2).max(50),
  name: z.string().min(2).max(50),
  description: z.string().min(0).max(200).optional(),
})

export const CreateProjectForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      description: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <ControlledFormInput name="name" control={form.control} label="Project ID" placeholder="Enter project name"/>
        <ControlledFormTextArea name="description" control={form.control} label="Project description" placeholder="Enter project description"/>
        <div className="flex gap-2 place-self-end">
          <Button variant={"secondary"} type="button" className="w-fit">Cancel</Button>
          <Button type="submit" className="w-fit">Submit</Button>
        </div>
      </form>
    </Form>
  )
};

// TODO: Move these components to a shared location
const ControlledFormInput = ({ control, label, name, placeholder, type }: {
  control: Control<any>,
  label: string,
  name: string,
  placeholder: string,
  type?: HTMLInputTypeAttribute,
}) => {
  return (
    <FormField control={control} name={name} render={({field}) => {
      return (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} {...field} placeholder={placeholder}/>
          </FormControl>
          <FormMessage/>
        </FormItem>
      )
    }}/>
  )
};
const ControlledFormTextArea = ({ control, label, name, placeholder, type }: {
  control: Control<any>,
  label: string,
  name: string,
  placeholder: string,
  type?: HTMLInputTypeAttribute,
}) => {
  return (
    <FormField control={control} name={name} render={({field}) => {
      return (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} {...field} className="resize-y" />
          </FormControl>
          <FormMessage/>
        </FormItem>
      )
    }}/>
  )
};