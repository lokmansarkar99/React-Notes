import React, { useRef, useId } from "react"



export const ForwardRef = () => {   

    const handleFormSubmit = (e) => {    
        e.preventDefault()
        console.log(username.current.value)
        console.log(password.current.value)
       
    }

    const username = useRef(null)
    const password = useRef(null)
    return (
        <form action="" onSubmit={handleFormSubmit}  >
            <AfterReact19  label="username"  ref={username} />
            <AfterReact19  label="password" ref={password} />
            <button type="submit">Submit</button>
        </form>
    )
}



// const BeforeReact19 = React.forwardRef((props, ref) => { 

// const id = useId(props.label)


//     return (
//         <>
          
//             <label htmlFor={id}>{props.label}</label>
//             <input type="text" id={id} ref={ref} />
//             <br />



//         </> 
//     )
// })



 const AfterReact19 = ({label, ref}) => { 

    const id = useId(label)
    
    
        return (
            <>
              
                <label htmlFor={id}>{label}</label>
                <input type="text" id={id} ref={ref} />
                <br />
    
    
    
            </> 
        )
    }