import { useState, useEffect } from "react";
import { getApiData } from "../api/GetApiData"; // Import API function
import Card from "../components/layout/UI/Card";
import { Loader } from "lucide-react"; // Ensure correct import

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("superman"); // State for category
  const [moviesData, setMoviesData] = useState([]); // Store movies

  // Fetch movies whenever category changes
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // Start loading before fetching
      const data = await getApiData(category);
      setMoviesData(data?.Search || []);
      setLoading(false); // Set loading to false after fetching
    };

    fetchMovies();
  }, [category]); // Re-run when category changes

  // Show loader while fetching data
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin w-12 h-12 text-blue-500" />
        <p className="ml-2 text-lg font-semibold">Loading Movies...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Category Dropdown */}
      <div className="mb-4">
        <label className="mr-2 text-lg font-semibold">Select Category:</label>
        <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="p-2 border rounded-md"
>
  <option value="action">Action</option>
  <option value="adventure">Adventure</option>
  <option value="animation">Animation</option>
  <option value="biography">Biography</option>
  <option value="comedy">Comedy</option>
  <option value="crime">Crime</option>
  <option value="documentary">Documentary</option>
  <option value="drama">Drama</option>
  <option value="family">Family</option>
  <option value="fantasy">Fantasy</option>
  <option value="history">History</option>
  <option value="horror">Horror</option>
  <option value="musical">Musical</option>
  <option value="mystery">Mystery</option>
  <option value="romance">Romance</option>
  <option value="sci-fi">Sci-Fi</option>
  <option value="sport">Sport</option>
  <option value="thriller">Thriller</option>
  <option value="war">War</option>
  <option value="western">Western</option>
</select>

      </div>

      {/* Movie List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {moviesData.length > 0 ? (
          moviesData.map((currMovie) => (
            <Card key={currMovie.imdbID} currMovie={currMovie} />
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            No movies found. Try another category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Movie;
