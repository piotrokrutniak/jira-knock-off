import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project/$projectId/story/task/$taskId')({
  component: () => <div>Hello /projects/$projectId/story/task/$taskId!</div>
})
