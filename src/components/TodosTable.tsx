import { Square, SquareCheck } from 'lucide-react';
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
import { ITodo } from '../../interfaces';
import TabelActionButtons from './TabelActionButtons';
import { Toggle } from './ui/toggle';

const TodosTable = ({ todos }: { todos: ITodo[] }) => {
  const todosFinished = todos.filter((todo: ITodo) => todo.completed !== false);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead >Title</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo: ITodo) => (
          <TableRow key={todo.id}>
            <TableCell
              className={`font-medium ${todo.completed ? 'line-through' : ''}`}
            >
              {todo.title}
            </TableCell>
            <TableCell>
              <Badge> {todo.priority}</Badge>
            </TableCell>
            <TableCell>
              {todo.completed ? (
                <Toggle aria-label="Toggle square-check">
                  <SquareCheck />
                </Toggle>
              ) : (
                <Toggle aria-label="Toggle square">
                  <Square />
                </Toggle>
              )}
            </TableCell>
            <TableCell className="text-right flex items-center space-x-2 ml-auto">
              <TabelActionButtons id={todo.id} />
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
