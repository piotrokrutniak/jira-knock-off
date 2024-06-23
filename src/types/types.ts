export type ProjectType = {
  id: string;
  name: string;
  description: string;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  projects: ProjectType[];
};

export type StoryType = {
  id: string;
  title: string;
  description: string;
  status: StatusType;
  priority: PriorityType;
  project: ProjectType;
  ownerId: string;
  // MongoDb timestamp createdAt
  // MongoDb timestamp modifiedAt
};

export type TaskType = {
  id: string;
  title: string;
  description: string;
  priority: PriorityType;
  story: StoryType;
  doneByEstimate: string;
  status: StatusType;
  ownerId: string;
  startedAt: string;
  completedAt: string;
  userId: string; // developer or devops
  // MongoDb timestamp createdAt
  // MongoDb timestamp modifiedAt
};

export type PriorityType = "low" | "medium" | "high";

export type StatusType = "todo" | "in-progress" | "done";