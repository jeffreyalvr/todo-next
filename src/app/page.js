import Link from "next/link";

import { prisma } from "@/db";
import TodoItem from "@/components/TodoItem";
import { redirect } from "next/navigation";

const Home = async () => {
  const getTodos = () => {
    return prisma.todo.findMany();
  };

  const todos = await getTodos();

  const toggleTodo = async (id, completed) => {
    "use server";
    await prisma.todo.update({ where: { id }, data: { completed } });
  };

  const handleExcluir = async (id) => {
    "use server";
    await prisma.todo.delete({ where: { id } });
    redirect("/");
  };

  return (
    <main className="w-[500px] h-fit p-6 rounded-lg border-2 mx-auto my-24">
      <h1 className="text-gray-500 text-3xl font-bold">Next JS Todo List</h1>
      <div className="my-8 border-t-2 border-b-2 py-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            handleExcluir={handleExcluir}
          />
        ))}
      </div>
      <Link
        href="/adicionar"
        className="rounded-lg px-4 py-2 text-white bg-black hover:opacity-80"
      >
        Nova meta
      </Link>
    </main>
  );
};

export default Home;
