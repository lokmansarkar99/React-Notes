import { createContext } from "react"
import { use } from "react"

export const BioContext = createContext()


export const BioProvider =  ({children}) => {
    const myName = "Lokman"
    const myAge = 25
    return <BioContext.Provider value={{myName, myAge}}>
        {children}
         </BioContext.Provider>     
 
}



export const useBioContext  = () => {
    const context = use(BioContext)
    if(context === undefined){
        throw new Error("Component must be wrapped with BioProvider")
    }
    return context
}
