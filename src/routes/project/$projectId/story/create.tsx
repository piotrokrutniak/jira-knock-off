import { CreateStoryForm } from "@components/feature/stories/CreateStoryForm";
import { PageWrapper } from "@components/generic/PageWrapper";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/project/$projectId/story/create")({
  component: () => <StoryCreate />,
});

const StoryCreate = () => {
  return (
    <PageWrapper>
      <CreateStoryForm />
    </PageWrapper>
  );
};
