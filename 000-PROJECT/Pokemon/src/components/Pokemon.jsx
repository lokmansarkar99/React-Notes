import { useEffect, useState } from 'react'

import PokemonCard from './PokemonCard'
import Loader from './Loader'

const Pokemon = ({search}) => {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    

    const api = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const fetchPokemon = async () => {
        try {
            const response = await fetch(api)
            const data = await response.json()
            // console.log(data)

            const detailedPokemonData = data.results.map(async (currPokemon) => {
                    // console.log(currPokemon.url)
                    const res = await fetch(currPokemon.url)
                    const data = await res.json()
                    // console.log(data)
                    return data
            })
            

            const detailedPokemonDataResolved = await Promise.all(detailedPokemonData)
            console.log(detailedPokemonDataResolved)
            setPokemon(detailedPokemonDataResolved)
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            setError(error)
            setLoading(false)
        }
    }
    


    useEffect(() => { 
        fetchPokemon()
    }, [])

    const searchData = pokemon.filter((currPokemon) => currPokemon.name.toLowerCase().includes(search.toLowerCase()))


    if(loading) { 
        return <Loader />
    }

    if(error) { 
        return <h1>Error Occured: {error.message}</h1>
    }
  return (
    <>
    
    <section className="container">
        <header>
          
            <h1 className='catch-pokemon'>Lets Catch Pokémon...</h1>
        </header>

            <div>
                <ul className="cards">
                    {
                        // pokemon.map((currPokemon) => 
                        searchData.map((currPokemon) => {
                            return(
                             <PokemonCard key={currPokemon.id} pokemonData={currPokemon} />
                            )
                        } )
                    }
                </ul>
            </div>
        
    </section>
    </>
  )
}

export default Pokemon