import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

import SubmitButton from "./components/SubmitButton";

const Page = () => {
  const createTodo = async (data) => {
    "use server";
    const text = data.get("todo")?.valueOf();

    if (typeof text !== "string" || text.length === 0)
      throw new Error("Todo inválido");

    await prisma.todo.create({ data: { text, completed: false } });
    redirect("/");
  };

  return (
    <main className="w-[500px] h-fit p-6 rounded-lg border-2 mx-auto my-24">
      <h1 className="text-gray-500 text-3xl font-bold">Novo todo</h1>
      <form action={createTodo}>
        <div className="flex flex-col my-8 border-t-2 border-b-2 py-4">
          <input
            type="text"
            name="todo"
            className="border-2 p-2"
            placeholder="Adicione algo aqui..."
          />
        </div>
        <div className="flex gap-1">
          <Link
            href=".."
            className="rounded-lg px-4 py-2 text-black bg-gray-50 border-2 border-gray-200 hover:opacity-80"
          >
            Cancelar
          </Link>
          <SubmitButton />
        </div>
      </form>
    </main>
  );
};

export default Page;
