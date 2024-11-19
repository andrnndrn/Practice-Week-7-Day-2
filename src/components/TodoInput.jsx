// src/components/TodoInput.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/todos/action";

const TodoInput = ({ todoToEdit, setTodoToEdit }) => {
  const lang = useSelector((state) => state.lang.lang);
  const [text, setText] = useState(todoToEdit?.text || "");
  const dispatch = useDispatch();

  const translation = {
    en: {
      add: "Add",
      update: "Update",
      placeholder: "Add a new task...",
    },
    id: {
      add: "Tambah",
      update: "Perbarui",
      placeholder: "Tambahkan tugas baru...",
    },
  };

  const { add, update, placeholder } = translation[lang];

  useEffect(() => {
    if (todoToEdit) {
      setText(todoToEdit.text);
    } else {
      setText("");
    }
  }, [todoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoToEdit) {
      dispatch(updateTodo(todoToEdit.id, text));
      setTodoToEdit(null);
    } else {
      dispatch(addTodo({ id: Date.now(), text, completed: false }));
    }
    setText("");
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button
          className={`btn ${todoToEdit ? "btn-warning" : "btn-primary"}`}
          type="submit"
        >
          {todoToEdit ? update : add}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
