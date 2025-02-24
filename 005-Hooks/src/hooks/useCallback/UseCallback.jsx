import { useState, memo, useCallback } from "react";

const Button = memo(({ children, onClick }) => {
    console.log(    `Rendering Button ${children}`)

  return (
    <button
      className={`text-black mb-4 py-2 px-5 ${
        children === "Increment" ? "bg-green-400" : "bg-red-400"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
})

const UseCallback = () => {
  const [count, setCount] = useState(0);

//   const increment = () => {
//     console.log("Increment inside");
//     setCount((pre) => pre + 1);
//   };

const increment = useCallback(()=> {

    console.log("Increment inside");
    setCount((pre) => pre + 1);
   
  }, [])


//   const decrement = () => {
//     console.log("Decrement inside");
//     setCount((pre) => pre - 1);
//   };


  const decrement = useCallback(() => {
    console.log("Decrement inside");
    setCount((pre) => pre - 1);
  }, [])


  return (
    <div className="p-4 h-lvh tracking-wider flex flex-col justify-center items-center bg-black text-white">
      <h1 className="mb-4">Count: {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default UseCallback;
