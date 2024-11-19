import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "./redux/lang/action";
import { toggleTheme } from "./redux/theme/action";

const translation = {
  en: {
    title: "To-Do List",
    button: "English",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
  },
  id: {
    title: "Daftar Tugas",
    button: "Indonesia",
    darkMode: "Mode Gelap",
    lightMode: "Mode Terang",
  },
};

const App = () => {
  const lang = useSelector((state) => state.lang.lang);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const [todoToEdit, setTodoToEdit] = useState(null);
  const { title, button, darkMode, lightMode } = translation[lang];

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "id" : "en";
    dispatch(changeLanguage(newLang));
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className={`card-body ${theme}`}>
                <div className="d-flex justify-content-between mb-3">
                  <button onClick={toggleLanguage} className={`btn ${
                      theme === "light" ? "btn-dark" : "btn-light"
                    }`}>
                    {button}
                  </button>
                  <button
                    onClick={handleToggleTheme}
                    className={`btn ${
                      theme === "light" ? "btn-dark" : "btn-light"
                    }`}
                  >
                    {theme === "light" ? darkMode : lightMode}
                  </button>
                </div>
                <h1 className="card-title text-center mb-4">{title}</h1>
                <TodoInput
                  todoToEdit={todoToEdit}
                  setTodoToEdit={setTodoToEdit}
                />
                <TodoList onEdit={setTodoToEdit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
