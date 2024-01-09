"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      href="/adicionar"
      disabled={pending}
      className="rounded-lg px-4 py-2 text-white bg-black transition hover:opacity-80 disabled:bg-zinc-500"
    >
      {pending ? "Adicionando..." : "Adicionar"}
    </button>
  );
};

export default SubmitButton;
