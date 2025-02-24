
import { IoMdCheckmark } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
const TodoList = ({task, setTask}) => {

  // Handle delete task
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((taskItem) => taskItem !== value);
    setTask(updatedTask);
  };

  return (
    <section className="myUnOrdList">
    <ul>
      {task.map((taskItem, index) => (
        <li key={index} className="todo-item">
          <span>{taskItem}</span>
          <button className="check-btn">
            <IoMdCheckmark />
          </button>
          <button
            className="delete-btn"
            onClick={() => handleDeleteTodo(taskItem)}
          >
            <MdDeleteForever />
          </button>
        </li>
      ))}
    </ul>
  </section>
  )
}

export default TodoList
