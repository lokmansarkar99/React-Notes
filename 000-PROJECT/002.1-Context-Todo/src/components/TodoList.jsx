import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};

export default TodoList;
