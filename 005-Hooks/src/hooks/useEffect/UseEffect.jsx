
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count is ${count}`;
    console.log("count is",count);
  }, [count]);

  useEffect(() => {
    console.log(`name is ${name}`);

    return () => {};
  }, [name]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Name is {name}</p>

      <label htmlFor=""> Enter Name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default UseEffect;
