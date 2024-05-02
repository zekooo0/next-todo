import AddTodoForm from "@/components/AddTodoForm";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import TodosTable from "@/components/TodosTable";
import { auth } from "@clerk/nextjs/server";
import { getTodoListAction } from "../../actions/todo.actions";

export default async function Home() {
  const { userId: id } = auth();
  const userId: string = id ? id : "";
  const todos = await getTodoListAction(userId);

  return (
    <main className="flex flex-col justify-between min-h-screen container">
      <div>
        <div className="mb-5 ml-auto w-fit">
          <AddTodoForm userId={userId} />
        </div>
        <TodosTable todos={todos} />
      </div>
      <div className="flex flex-col items-center space-y-10 py-10 container">
        <Separator />
        <Footer />
      </div>
    </main>
  );
}
