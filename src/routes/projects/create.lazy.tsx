import { CreateProjectForm } from '@components/feature/projects/CreateProjectForm'
import { PageWrapper } from '@components/generic/PageWrapper'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/projects/create')({
  component: () => <CreateProjectPage />
})

const CreateProjectPage = () => {
  return (
    <PageWrapper>
      <CreateProjectForm />
    </PageWrapper>
  )
}