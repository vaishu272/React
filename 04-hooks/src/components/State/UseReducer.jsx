import { useReducer, useState } from "react";

/* Initial State */
const initialState = {
  todos: [],
};

/* Reducer */
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };

    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((_, index) => index !== action.payload),
      };

    default:
      return state;
  }
};

const UseReducerTodo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="p-6 rounded-xl shadow-lg w-96 border">
        <h2 className="text-xl font-bold mb-4">useReducer Todo List</h2>

        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter todo"
            className="flex-1 border px-3 py-2 rounded"
          />
          <button
            onClick={addTodo}
            className="bg-green-500 text-white px-4 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {state.todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-3 py-2 rounded"
            >
              <span>{todo}</span>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_TODO", payload: index })
                }
                className="text-red-500 font-bold cursor-pointer hover:text-red-700"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseReducerTodo;
