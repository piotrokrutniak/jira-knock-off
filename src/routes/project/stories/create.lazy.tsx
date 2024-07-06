import { CreateStoryForm } from "@components/feature/stories/CreateStoryForm";
import { PageWrapper } from "@components/generic/PageWrapper";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/project/stories/create")({
  component: () => <CreateStoryPage />,
});

const CreateStoryPage = () => {
  return (
    <PageWrapper>
      <CreateStoryForm />
    </PageWrapper>
  );
};
