import { createContext, useState } from "react";

// Create Context
export const TodoContext = createContext();

// Create Provider
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn Context API", completed: false },
    { id: 2, text: "Build a React App", completed: false },
  ]);

  // Add Todo
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Toggle Complete
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
