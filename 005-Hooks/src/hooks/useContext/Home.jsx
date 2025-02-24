import React, { useContext } from 'react'
import { BioContext } from './UseContext'

const Home = () => {
    const {myName, myAge} = useContext(BioContext)
  return (
    <div>
        <h1>Home Component</h1>
        <h2>My Name is {myName}</h2>
        <h2>My Age is {myAge}</h2>
    </div>
  )
}

export default Home
