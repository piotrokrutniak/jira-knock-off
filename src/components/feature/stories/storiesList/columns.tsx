import { ColumnDef } from "@tanstack/react-table"

export type StoryDisplay = {
  id: string
  title: string
  owner: string
  projectName: string
  projectId: string
  priority: string
  status: string
}

export const columns: ColumnDef<StoryDisplay>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Owner",
    accessorKey: "owner",
  },
  {
    header: "Priority",
    accessorKey: "priority",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
]