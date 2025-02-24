import { useEffect, useState } from "react";

const FetchAsyncAwait = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const api = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const fetchPokemon = async () => {
    try {
        const response = await fetch(api)
        const data = await response.json();
        setData(data);
        setLoading(false);

    } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
    }

  };
  console.log(data);
  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
    if(error) return( 
        <div>
            <h1>Error: {error.message}</h1>
        </div>
    )


  return (
    <section className="container">
      <header>
        <h1>Lets Catch Pokemon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={data.sprites.other.dream_world.front_default}
              alt={data.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{data.name}</h1>
          <div className="grid-three-cols">
            <p className="pokeom-info">
                Height: {data.height}
            </p>
            <p className="pokeom-info">
                Weight: {data.weight}
            </p>
            <p className="pokeom-info">
                Speed: <span>{data.stats[0].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>

      
    </section>
  );
};

export default FetchAsyncAwait;
