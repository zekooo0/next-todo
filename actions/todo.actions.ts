'use server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  const todos = prisma.todo.findMany();
  return todos;
};
export const createTodoAction = async () => {};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async () => {};
