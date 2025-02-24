import { useState } from "react";

const TodoForm = ({ onAddToDo }) => {
  const [inputValue, setInputValue] = useState('');

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddToDo(inputValue.trim());
      setInputValue('');
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
