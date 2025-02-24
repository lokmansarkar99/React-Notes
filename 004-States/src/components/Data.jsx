
import { useState } from "react"
const Data = () => {
  const users = [
    {
      id: 1,
      name: "John",
      age: 20
    },
    {
      id: 2,
      name: "Jane",
      age: 25
    },
    {
      id: 3,
      name: "Doe",
      age: 30
    }
  ]
  return (
    <div>
      
    </div>
  )
}

export default Data

export const DerivedState = () => {
    const [users, setUsers] = useState([
      {
        id: 1,
        name: 'John',
        age: 20,
      },
      {
        id: 2,
        name: 'Jane',
        age: 25,
      },
      {
        id: 3,
        name: 'Doe',
        age: 30,
      },
    ]);
  
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((users, index) => {
          const { id, name, age } = users;
          return(
          <li key={id}> {name} - {age} year old </li>
          )
       } ) }
        
      </ul>
    </div>
  )
}
