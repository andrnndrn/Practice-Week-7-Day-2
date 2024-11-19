import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, UPDATE_TODO } from "../todos/action";

//state
const initialState = {
  todos: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do List", completed: false },
    { id: 3, text: "Celebrate", completed: false },
  ],
};

//reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
      case UPDATE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, text: action.payload.text }
              : todo
          ),
        };
    default: {
      return state;
    }
  }
};

export default todoReducer;
