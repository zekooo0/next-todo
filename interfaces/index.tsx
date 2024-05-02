export interface ITodo {
  id: string;
  title: string;
  body: string;
  priority: IPriority;
  completed: boolean;
  userId: string;
  createdAt: Date;
}

export type IPriority = "low" | "medium" | "high";
