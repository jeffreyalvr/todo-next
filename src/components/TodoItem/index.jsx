const TodoItem = ({ id, text, completed }) => {
  return (
    <div className="flex flex-row gap-3" key={id}>
      <input id={id} type="checkbox" className="peer cursor-pointer" />
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
