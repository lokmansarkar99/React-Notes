
import { useState } from "react"
const State = () => {
  // let value = 0
  // const handleButtonClick = () => { 
  //   value = value + 1
  //   console.log(value)

  // }
  // let array = useState()
  // console.log(array);
  const [count, setCount] = useState(5)
  const handleClickButton = () => { 
    setCount(count + 1)
    console.log("Parent Component")
  }
  
  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={handleClickButton}>Click Me</button>
      </div>
      <ChildComponent count={count} />
    </>
  );
}

const ChildComponent = ({count}) => {
  return (
    <div>
  {console.log("Child Component")}
      <h1>Child Component - count value {count} </h1>
    </div>
  )
}

export default State


