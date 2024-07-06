import { PageWrapper } from '@components/generic/PageWrapper';
import { H1Text } from '@components/generic/textComponents/h1';
import { StoryType } from '@customtypes/types';
import { useQueryGetStoryById } from '@hooks/stories/queries/useQueryGetStoryById';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project/$projectId/story/$storyId')({
  component: () => <StoryView />
})

const StoryView = () => {
  const { storyId } = Route.useParams();
  const { data: story } = useQueryGetStoryById(storyId);

  return (
    <PageWrapper>
      {story ? <StoryHeader story={story} /> : <></>}
    </PageWrapper>
  );
};

const StoryHeader = ({ story }: { story: StoryType }) => {
  return (
    <section className="flex flex-col gap-6">
      <H1Text>{story?.title}</H1Text>
      <StoryDetails story={story} />
      <p>{story?.description}</p>
    </section>
  )
}

const StoryDetails = ({ story }: { story: StoryType }) => {
  return (
    <section className="flex justify-between gap-6">
      <div className="flex flex-col gap-2">
        <p>Story Points: {story?.status}</p>
        <p>Priority: {story?.priority}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Owner: {story?.owner.fullName}</p>
      </div>
    </section>
  )
}