import Link from "next/link";

const Home = () => {
  const todos = [
    { id: 0, text: "Estudar desenvolvimento web", completed: false },
    { id: 1, text: "Estudar francês", completed: false },
    { id: 2, text: "Fazer o workout", completed: false },
    { id: 3, text: "Meditar", completed: false },
  ];

  return (
    <main className="w-[500px] h-fit p-6 rounded-lg border-2 mx-auto my-24">
      <h1 className="text-gray-500 text-3xl font-bold">Todos</h1>
      <div className="my-8 border-t-2 border-b-2 py-4">
        {todos.map((todo) => (
          <div className="flex flex-row gap-4" key={todo.id}>
            <input type="checkbox" />
            <span>{todo.text}</span>
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
