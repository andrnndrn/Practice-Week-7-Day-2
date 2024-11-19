import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "./redux/lang/action";

const translation = {
  en: {
    title: "To-Do List",
    button: "English",
  },
  id: {
    title: "Daftar Tugas",
    button: "Indonesia",
  },
};

const App = () => {
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();
const [todoToEdit, setTodoToEdit] = useState(null);
  const { title, button } = translation[lang];

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "id" : "en";
    dispatch(changeLanguage(newLang));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <button onClick={toggleLanguage} className="btn btn-primary">
                {button}
              </button>
              <h1 className="card-title text-center mb-4">{title}</h1>
              <TodoInput todoToEdit={todoToEdit} setTodoToEdit={setTodoToEdit}/>
              <TodoList onEdit={setTodoToEdit}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
