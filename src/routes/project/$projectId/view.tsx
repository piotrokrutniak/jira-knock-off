import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project/$projectId/view')({
  component: () => <div>Hello /project/$projectId/view!</div>
})