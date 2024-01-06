import Link from "next/link";

import { prisma } from "@/db";

const Home = async () => {
  const getTodos = () => {
    return prisma.todo.findMany();
  };

  const todos = await getTodos();

  return (
    <main className="w-[500px] h-fit p-6 rounded-lg border-2 mx-auto my-24">
      <h1 className="text-gray-500 text-3xl font-bold">Next JS Todo List</h1>
      <div className="my-8 border-t-2 border-b-2 py-4">
        {todos.map((todo) => (
          <div className="flex flex-row gap-3" key={todo.id}>
            <input id={todo.id} type="checkbox" className="peer" />
            <label
              htmlFor={todo.id}
              className="cursor-pointer peer-checked:line-through"
            >
              {todo.text}
            </label>
          </div>
        ))}
      </div>
      <Link
        href="/adicionar"
        className="rounded-lg px-4 py-2 text-white bg-black"
      >
        Nova meta
      </Link>
    </main>
  );
};

export default Home;
