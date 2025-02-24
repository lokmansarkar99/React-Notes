import { useState, useEffect } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import './Todo.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import DateTime from './components/DateTime';
import ClearButton from './components/ClearButton';

const Todo = ({task, setTask}) => {
  


  // Add a new task
  const handleAddToDo = (newTask) => {
    if (!task.includes(newTask)) {
      setTask((previous) => [...previous, newTask]);
    }
  };





  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <DateTime />
      </header>

      <TodoForm onAddToDo={handleAddToDo} />
      <TodoList task={task} setTask={setTask} />
<ClearButton setTask={setTask} />



    </section>
  );
};

export default Todo;
