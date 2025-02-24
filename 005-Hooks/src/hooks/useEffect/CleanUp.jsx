import { use } from "react";
import { useEffect, useState } from "react";

const CleanUp = () => {
  const [count, setCount] = useState(0);






  useEffect(() => {
    const timer = setInterval(() => { 
        setCount((prevCount) => prevCount + 1);
       }, 1000);

        return () => {
        clearInterval(timer);
        }
  }, []);
  return (
    <div>
      <h1> Count is   {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CleanUp;
