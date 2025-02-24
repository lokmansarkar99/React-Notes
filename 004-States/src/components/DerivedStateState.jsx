

import { useState } from "react"
const DerivedData = () => {
  const users = [
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
  ];
  return <div></div>;
};

export default DerivedData

export const DerivedStateState = () => {
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
      {
        id: 4,
        name: 'Smith',
        age: 35,
      }


    ]);
  console.log(users)
  const totalUsers = users.length
const averageAge =
  users.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0) / totalUsers;

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
      <h2>Total Users: {totalUsers}</h2>
      <h2>Average Age: {averageAge} </h2>
    </div>
  )
}
