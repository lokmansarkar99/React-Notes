import { useLoaderData, useNavigation } from "react-router-dom";
import Card from "../components/layout/UI/Card";
import { Loader } from "lucide-react";


const Movie = () => {
  const moviesData = useLoaderData(); // Ensure this is within a valid function component

const navigation = useNavigation()
if(navigation.state === "loading") {
  return <Loader />
}

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        🎬 All Movies
      </h1>

      {/* Grid layout for cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {moviesData?.Search?.length > 0 ? (
          moviesData.Search.map((currMovie) => (
            <Card key={currMovie.imdbID} currMovie={currMovie} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-4">No movies found.</p>
        )}
      </ul>
    </div>
  );
};

export default Movie;
