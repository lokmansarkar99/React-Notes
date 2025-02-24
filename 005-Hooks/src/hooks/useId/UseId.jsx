import { useId } from "react"

// const UseId = () => {

//     const usernameID = useId()
//     const passwordID = useId()
//   return (
   
//     <>
    
//     <h1>Hello useId</h1>
//     <form action="">
//     <div>
//     <label  htmlFor={usernameID} >Username</label>
//     <input type="text" id={usernameID} placeholder="username" />
//     </div>

//     <div>
//     <label htmlFor={passwordID} >Password</label>
//     <input type="password"  placeholder="password" id={passwordID} />
//     </div>
//     <button type="submit">Submit</button>

//     </form>
//     </>
//   )
// }




const UseId = () => {

    const id = useId()
    
  return (
   
    <>
    
    <h1>Hello useId</h1>
    <form action="">
    <div>
    <label  htmlFor={id + "usernameID"} >Username</label>
    <input type="text" id={id + "usernameID"} placeholder="username" />
    </div>

    <div>
    <label htmlFor={id + "emailID"} >Password</label>
    <input type="email"  placeholder="email" id={id + "emailID"} />
    </div>

    <div>
    <label htmlFor={ id + "passwordID"} >Password</label>
    <input type="password"  placeholder="password" id={ id + "passwordID"} />
    </div>


    <button type="submit">Submit</button>

    </form>
    </>
  )
}



export default UseId