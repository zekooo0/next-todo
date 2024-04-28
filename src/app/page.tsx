import AddTodoForm from '@/components/AddTodoForm';
import TodosTable from '@/components/TodosTable';
import { getTodoListAction } from '../../actions/todo.actions';

export default async function Home() {
  const todos = await getTodoListAction();

  return (
    <main className="pb-20 min-h-screen container">
      <div className="ml-auto w-fit">
        <AddTodoForm />
      </div>
      <TodosTable todos={todos} />
    </main>
  );
}
