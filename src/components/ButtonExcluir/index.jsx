"use client";

const ButtonExcluir = ({ text, handleExcluirTudo }) => {
  return (
    <button
      className="rounded-lg px-4 py-2 text-black bg-red-300 hover:opacity-80"
      onClick={() => handleExcluirTudo({})}
    >
      {text || "Sem texto"}
    </button>
  );
};

export default ButtonExcluir;
