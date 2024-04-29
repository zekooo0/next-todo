'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  const todos = prisma.todo.findMany({ orderBy: { createdAt: 'desc' } });
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
  revalidatePath('/');
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async (id: string) => {
  await prisma.todo.delete({ where: { id } });
  revalidatePath('/');
};
