"use client";

const TodoItem = ({ id, text, completed, toggleTodo }) => {
  return (
    <div className="flex flex-row gap-3" key={id}>
      <input
        id={id}
        type="checkbox"
        className="peer cursor-pointer"
        defaultChecked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer"
      >
        {text}
      </label>
    </div>
  );
};

export default TodoItem;
