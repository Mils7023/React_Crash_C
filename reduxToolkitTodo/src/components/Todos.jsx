import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { useState } from "react";
import AddTodo from "./AddTodo";

export default function Todos() {
  const [editTodo, setEditTodo] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  return (
    <>
      <AddTodo editTodo={editTodo} setEditTodo={setEditTodo} />
      <div className="mt-10">Todo List</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div>
              <button
                onClick={() => handleEdit(todo)}
                className="mr-4 inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              >
                ✏️
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
