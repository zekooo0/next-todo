export interface ITodo {
  id: string;
  title: string;
  body: string | null;
  priority: TPriority | null;
  completed: boolean | null;
  createdAt: Date;
}

export type TPriority = 'low' | 'medium' | 'high';
