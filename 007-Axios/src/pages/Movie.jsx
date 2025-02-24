
import { useEffect, useState } from "react"
import { getMovie } from "../services/GetService"
import Card from "../components/Card"

const Movie = () => {
   
const [data, setData] = useState([])
    const fetchMovieData = async () => {
        try {
            const res = await getMovie()
          const data = res.data.Search
          setData(data)
          console.log(data)
          
         
            
        } catch (error) {
            console.log(error)
            console.log("Error Message: " + error.message)
            console.log("Error Status: " + error.response.status)
            console.log("Error Data : " + error.response.data.Error)
        }
    }

    useEffect(() => {
     
        fetchMovieData()
       
    
      return () => {
       
      }
    }, [])
    

  return (
    <div>
      <ul>
        {data.map((currElem) => {
           return <ul  key={currElem.imdbID}>  <Card currElem={currElem} /> </ul>
        })}
      </ul>
    </div>
  )
}

export default Movie
