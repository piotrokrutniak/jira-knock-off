import { EditStoryForm } from '@components/feature/stories/EditStoryForm';
import { PageWrapper } from '@components/generic/PageWrapper';
import { H1Text } from '@components/generic/textComponents/h1';
import { Button } from '@components/ui/button';
import { StoryType } from '@customtypes/types';
import { useQueryGetStoryById } from '@hooks/stories/queries/useQueryGetStoryById';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/project/$projectId/story/$storyId')({
  component: () => <StoryView />
})

const StoryView = () => {
  const [editMode, setEditMode] = useState(false);
  const { storyId } = Route.useParams();
  const { data: story } = useQueryGetStoryById(storyId);

  const toggleEditMode = () => setEditMode(!editMode);

  return (
    <PageWrapper>
      {editMode ? <StoryEdit toggleEditMode={toggleEditMode} story={story} /> : <StoryHeader story={story} toggleEditMode={toggleEditMode} />}
    </PageWrapper>
  );
};

const StoryHeader = ({ story, toggleEditMode }: { story?: StoryType, toggleEditMode: () => void }) => {
  return story ? (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between gap-6">
        <H1Text>{story.title}</H1Text>
        <Button onClick={toggleEditMode}>Edit</Button>
      </div>
      <StoryDetails story={story} />
      <p>{story.description}</p>
    </section>
  ) : (
    <></>
  );
}

const StoryEdit = ({ story, toggleEditMode }: { story?: StoryType, toggleEditMode: () => void }) => {
  return story ? (
    <EditStoryForm story={story} />
  ) : (
    <></>
  );
}

const StoryDetails = ({ story }: { story: StoryType }) => {
  return (
    <section className="flex justify-between gap-6">
      <div className="flex flex-col gap-2">
        <p>Status: {story?.status}</p>
        <p>Priority: {story?.priority}</p>  
      </div>
      <div className="flex flex-col gap-2">
        <p>Owner: {story?.owner.fullName}</p>
      </div>
    </section>
  )
}