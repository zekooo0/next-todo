'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  const todos = prisma.todo.findMany();
  return todos;
};
export const createTodoAction = async ({
  title,
  body,
  priority,
  completed,
}: {
  title: string;
  body?: string;
  priority?: 'low' | 'medium' | 'high';
  completed?: boolean;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      priority,
      completed,
    },
  });
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async () => {};
