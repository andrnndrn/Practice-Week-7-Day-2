import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todos/action";
import { completeTodo } from "../redux/todos/action";

const TodoList = ({ onEdit }) => {
  const todos = useSelector((state) => state.todo.todos);
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();

  const translation = {
    en: {
      complete: "Complete",
      delete: "Delete",
      update: "Update",
    },
    id: {
      complete: "Selesai",
      delete: "Hapus",
      update: "Perbarui",
    },
  };
  const { complete, delete: deleteText, update } = translation[lang];

  const handleUpdateClick = (todo) => {
    onEdit(todo);
  }
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          <div className="btn-group">
            <button
              className="btn btn-success btn-sm"
              onClick={() => dispatch(completeTodo(todo.id))}
            >
              {complete}
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              {deleteText}
            </button>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => handleUpdateClick(todo)}
            >
              {update}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
