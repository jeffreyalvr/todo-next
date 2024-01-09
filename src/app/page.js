import Link from "next/link";
import { revalidatePath } from "next/cache";

import { prisma } from "@/db";
import TodoItem from "@/components/TodoItem";

import Footer from "../components/Footer";

const Home = async () => {
  const toggleTodo = async (id, completed) => {
    "use server";
    await prisma.todo.update({ where: { id }, data: { completed } });
  };

  const handleExcluir = async (id) => {
    "use server";
    await prisma.todo.delete({ where: { id } });
    revalidatePath("/");
  };

  const getTodos = async () => {
    "use server";
    revalidatePath("/");
    return prisma.todo.findMany();
  };

  const todos = await getTodos();

  return (
    <main className="flex flex-col gap-8 w-[500px] h-fit mx-auto my-24">
      <div className="w-full h-fit p-6 rounded-lg border-2">
        <h1 className="flex gap-3 items-center text-gray-500 text-3xl font-bold">
          Next JS Todo List
          <span className="text-blue-600">({todos.length})</span>
        </h1>
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
      </div>
      <Footer />
    </main>
  );
};

export default Home;
