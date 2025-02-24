import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/layout/UI/Loader";





const MovieDetail = () => {
  const params = useParams(); // Get movie ID from URL
  
  const { movieID } = params
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const API_KEY = import.meta.env.VITE_API_KEY;
        const response = await fetch(`${API_URL}/?i=${movieID}&apikey=${API_KEY}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [movieID]);

  if (loading) return <Loader />
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!movie) return <p className="text-center text-gray-500">Movie not found.</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          {movie.Title} ({movie.Year})
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Movie Poster */}
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full md:w-1/3 rounded-lg"
          />

          {/* Movie Details */}
          <div className="flex-1 space-y-4">
            <p className="text-lg"><strong>Genre:</strong> {movie.Genre}</p>
            <p className="text-lg"><strong>Director:</strong> {movie.Director}</p>
            <p className="text-lg"><strong>Actors:</strong> {movie.Actors}</p>
            <p className="text-lg"><strong>Plot:</strong> {movie.Plot}</p>
            <p className="text-lg"><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
