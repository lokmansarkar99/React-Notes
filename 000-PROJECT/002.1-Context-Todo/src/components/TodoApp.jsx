import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoList from "./TodoList";

const TodoApp = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText(""); // Clear input after adding
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <TodoList />
    </div>
  );
};

export default TodoApp;
