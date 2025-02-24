import { use } from "react"
import { createContext, useState } from "react"
export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark')

    const handleToogleTheme = () => {
        return setTheme((pre) => pre === "dark"? "light": "dark"  )
    }

   
  return (
    <ThemeContext.Provider value={{theme, handleToogleTheme}} >
        {children}
    </ThemeContext.Provider>
  )
}

export const DarkLight = () => {
    const {theme, handleToogleTheme} = use(ThemeContext)
    return (
        <div className={`h-lvh p-4 flex flex-col justify-center items-center ${theme === 'dark'? "bg-gray-800": "bg-white"}`}>
            <h1>
                Dark Light Mode Website
            </h1>
            <p>
                Hello React Developers
            </p>
            <button  type="button" onClick={handleToogleTheme} className={`${theme} === 'light'? bg-blue-500 py-2 px-4 text-2xl rounded-xl : 'bg-green-200'  `}  > {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"} </button>


        </div>
    )
}


