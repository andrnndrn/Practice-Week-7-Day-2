// src/components/TodoInput.js
import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/action";

const TodoInput = () => {
  const lang = useSelector((state) => state.lang.lang);
 const todos = useSelector((state) => state.todo.todos);
  const [text, setText] = useState("");
  const [updateId, setUpdateId] = useState(null);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateId) {
      dispatch(updateTodo(updateId, text));
      setUpdateId(null);
    } else {
      dispatch(addTodo({ id: Date.now(), text, completed: false }));
    }
    setText("");
  };
  
  const handleUpdateClick = (todo) => {
    setUpdateId(todo.id);
    setText(todo.text);
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder= {placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">
        {updateId ? update : add}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
