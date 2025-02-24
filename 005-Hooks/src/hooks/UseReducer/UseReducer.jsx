import { useReducer } from "react"


export const UseReducer = () => {
    const reducer = (state, action) => {
        console.log(state, action)
        if(action.type === "INCREAMENT") {
            return state + 1
        }
        if(action.type === "DECREAMENT") {
            return state - 1
        }
        if(action.type === "RESET") {
            return state = 0
        }

    }
    // const [count, dispatch] = useReducer(reducer, 0)
    const [count, dispatch] = useReducer(reducer, 0)
    
  return (
   <>
   <div className="container p-6 mx-auto text-center">
   <h1 className="text-3xl underline text-blue-400 mb-2">Hello UseReducer</h1>
   <h1 className="text-3xl  text-blue-400 "> Count is: {count}</h1>
   <div className="">
   <button onClick={()=>  dispatch({type: "INCREAMENT"}) } className="text-white px-6 py-2 m-4 bg-blue-400 hover:bg-blue-500 rounded-xl transition-all">Increament</button>
   <button onClick={()=>  dispatch({type: "DECREAMENT"}) } className="text-white px-6 py-2 m-4 bg-red-400  hover:bg-red-500 rounded-xl transition-all rounded-xl">Decreament</button>
   <button onClick={()=>  dispatch({type: "RESET"}) } className="text-white px-6 py-2 m-4 bg-green-400  hover:bg-green-500 rounded-xl transition-all rounded-xl">Reset</button>
   </div>
   </div>
   
   </>
  )
}

