import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
};

export default TodoItem;
