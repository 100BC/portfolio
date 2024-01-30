export type WorkExperience = {
  title: string;
  time: string;
  location: string;
  role: string;
  duties: (string | Task)[];
  tech: string[];
};

type Task = {
  task: string;
  subTasks: string[];
};
