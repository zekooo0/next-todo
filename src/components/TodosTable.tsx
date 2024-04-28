'use client';

import { ITodo, TPriority } from '../../interfaces';
import { Pen, Trash } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Badge } from './ui/badge';
import { Button } from './ui/button';

const TodosTable = ({ todos }: { todos: ITodo[] }) => {
  const todosFinished = todos.filter((todo: ITodo) => todo.completed !== false);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Title</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo: ITodo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.title}</TableCell>
            <TableCell>{todo.priority}</TableCell>
            <TableCell>
              {todo.completed ? (
                <Badge variant={'secondary'}>Completed</Badge>
              ) : (
                <Badge>Uncompleted</Badge>
              )}
            </TableCell>
            <TableCell className="flex items-center space-x-2 ml-auto">
              <Button size={'sm'}>
                <Pen />
              </Button>
              <Button variant={'destructive'} size={'sm'}>
                <Trash />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Todos Finished</TableCell>
          <TableCell className="text-right">{todosFinished.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
export default TodosTable;
