"use client";

const TodoItem = ({ id, text, completed, toggleTodo, handleExcluir }) => {
  return (
    <div className="group flex flex-row gap-3" key={id}>
      <input
        id={id}
        data-testid={`todo-status-${id}`}
        type="checkbox"
        className="peer cursor-pointer"
        defaultChecked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        data-testid={`todo-label-${id}`}
        className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer"
      >
        {text}
      </label>
      <button
        className="text-red-400 underline text-sm hidden group-hover:inline-block hover:text-red-600"
        data-testid={`todo-delete-btn-${id}`}
        onClick={() => handleExcluir(id)}
      >
        excluir
      </button>
    </div>
  );
};

export default TodoItem;
