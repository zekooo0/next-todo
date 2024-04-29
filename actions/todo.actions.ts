'use server';

import { PrismaClient } from '@prisma/client';
import { TPriority } from '../interfaces';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export const getTodoListAction = async ({ userId }: { userId: string }) => {
  const todos = prisma.todo.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
  return todos;
};
export const createTodoAction = async ({
  title,
  body,
  priority,
  completed,
  userId,
}: {
  title: string;
  body?: string;
  priority?: 'low' | 'medium' | 'high';
  completed?: boolean;
  userId: string;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      priority,
      completed,
      userId,
    },
  });
  revalidatePath('/');
};
export const updateTodoAction = async ({
  id,
  title,
  body,
  priority,
}: {
  id: string;
  title: string;
  body: string;
  priority: TPriority;
}) => {
  await prisma.todo.update({
    where: { id },
    data: {
      title,
      body,
      priority,
    },
  });
  revalidatePath('/');
};
export const updateTodoStatusAction = async ({
  id,
  status,
}: {
  id: string;
  status: boolean;
}) => {
  await prisma.todo.update({
    where: { id },
    data: {
      completed: status,
    },
  });
  revalidatePath('/');
};

export const deleteTodoAction = async (id: string) => {
  await prisma.todo.delete({ where: { id } });
  revalidatePath('/');
};
