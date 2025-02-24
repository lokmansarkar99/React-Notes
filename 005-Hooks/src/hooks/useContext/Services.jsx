import { useContext, use } from "react"
import { BioContext } from "./UseContext"




const Services = () => {
    // const {myName, myAge} = useBioContext()
    // const {myAge, myName} = useContext(BioContext)
     const newHook = true
     let myAge;
     let myName
     if(newHook) {
      ({myAge, myName} = use(BioContext))
     }
    
  return (
    <div>
        <h1>Services Component</h1>
        <h2>My Name is {myName}</h2>
        <h2>My Age is {myAge}</h2>

    </div>
  )
}

export default Services
