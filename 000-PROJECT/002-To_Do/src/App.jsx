import Todo from "./Todo";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);


  return (
    <section>
      
      <Todo task= {task} setTask={setTask} />

     
    
   </section>
  );
}

export default App
