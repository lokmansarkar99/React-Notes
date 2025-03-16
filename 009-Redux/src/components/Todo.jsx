import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../raw-redux";
import { useState } from "react";

const Todo = () => {
    const [task, setTask] = useState("")
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);

  return (
    <div className="flex justify-center items-start min-h-screen bg-pink-200 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-4">To-Do List</h1>
        
          <form onSubmit={(e) => { 
            e.preventDefault()
            setTask("")
          }}  className="flex items-center border border-green-300 rounded-lg overflow-hidden mb-4">
          <input 
            type="text" 
            onChange={(e) => setTask(e.target.value)}
            id="input-box"
            value={task} 
            placeholder="Add a new task" 
            className="flex-1 p-2 outline-none text-gray-700" 

          />
          <button onClick={() => { dispatch(addTask(task)) }} className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 transition">Add</button>
          </form>
        
        <ul className="list-container space-y-2">
          {tasks.map((todo, index) => (
            <li key={index} className="flex justify-between items-center bg-white p-2 shadow rounded-lg hover:bg-pink-100 transition-all ">
              <p className="text-gray-700">{index + 1}: {todo}</p> 
              <MdDeleteForever 
                className="text-red-500 cursor-pointer text-2xl hover:text-red-700 transition"
                onClick={() => dispatch(deleteTask(index))}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
