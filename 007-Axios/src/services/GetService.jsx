import axios from "axios";

const api = axios.create({
    baseURL: "https://www.omdbapi.com/",
    
})

export const getMovie = () => {
    return api.get("?s=batman&apikey=3d3311c")
}