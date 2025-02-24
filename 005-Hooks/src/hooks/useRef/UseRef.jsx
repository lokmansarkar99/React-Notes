import { useRef } from "react"

const UseRef = () => {
    // const username = document.getElementById('username')
    // const password = document.getElementById('password')
 

    const username = useRef(null)
    const password = useRef(null)
    console.log(username)

    const handleSubmit = (e) => { 
    e.preventDefault()
    
    const data = {username: username.current.value    , password: password.current.value}
    console.log(data)


    

    }
  return (
   <>
   <h1>Hello useRef</h1>

   <form onSubmit={handleSubmit}>
    <label htmlFor="username">Username</label>
    <input type="text"  placeholder="username" ref={username} />
    <br />
    <label htmlFor="password">Password</label>
    <input type="password" id="password" placeholder="password"  ref={password} />
    <br />
    <button type="submit">Submit</button>
   </form>
   </>
  )
}

export default UseRef