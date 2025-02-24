import  { useEffect, useState} from "react";
import { Link } from "react-router-dom";

import { getApiData } from "../api/GetApiData";
import Card from "../components/layout/UI/Card";
import Loader from "../components/layout/UI/Loader";

const Home = () => {

  const [trendingMovies, setTrendingMovies] = useState([]); // Store trending movies
  const fixedCategory = "batman"; // Fixed category for homepage
  const [loading, setloading] = useState(true)

  // Fetch trending movies on home page
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const data = await getApiData(fixedCategory);
      setTrendingMovies(data?.Search || []);
      setloading(false)
    };

    fetchTrendingMovies();
  }, []); // Run only on first render

if(loading) {
  return <Loader />
}
  

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Piku<span className="text-blue-500">Flix</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Your ultimate destination for streaming the best movies!
          </p>
          <Link
            to="/movie"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            🎬 View All Movies
          </Link>
        </div>
      </section>

      {/* Trending Movies Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Trending Now: <span className="text-blue-500">{fixedCategory.toUpperCase()}</span>
        </h2>

        {/* Movie List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {trendingMovies.length > 0 ? (
            trendingMovies.map((currMovie) => (
              <Card key={currMovie.imdbID} currMovie={currMovie} />
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500">Loading movies...</p>
          )}
        </div>
      </section>

      {/* View All Movies Button */}
      <div className="text-center mt-8 mb-12">
        <Link
          to="/movie"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          🎬 View All Movies
        </Link>
      </div>
    </div>
  );
};

export default Home;
