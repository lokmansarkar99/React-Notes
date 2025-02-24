import {useContext} from 'react'
import { BioContext } from './UseContext'

const Content = () => {
    const {myName, myAge}=useContext(BioContext)
  return (
    <div>
      
      <h1>Content </h1>
      <h2>MY NAME {myName}</h2>
      <h2>MY AGE {myAge} </h2>

    </div>
  )
}

export default Content
