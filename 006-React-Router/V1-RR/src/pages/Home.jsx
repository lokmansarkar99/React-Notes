import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          🎥 Trending Movies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Sample Movies (Replace with API data) */}
          {[
            { id: 1, title: "The Batman", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSUOpwFVoR5xgrQX0AqB__TnzrmPtDbk9l30LJt78ih0wvfo-CW&psig=AOvVaw2xkO3EQvzD-7sS0PT8JmOB&ust=1739113576680000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOip94ittIsDFQAAAAAdAAAAABAE" },
            { id: 2, title: "Avengers Endgame", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTlzpyZ6LuQk1tzFnLMBQP5AcNLrA1sLFPNqgMYXZ2EpSaHnx7v&psig=AOvVaw1Asv5LVdeh4nUb1ahoR1f8&ust=1739113624721000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJj75Z-ttIsDFQAAAAAdAAAAABAE" },
            { id: 3, title: "Inception", image: "https://filmfisher.com/wp-content/uploads/2014/03/inception_ver12_xlg-600x885.jpg" },
            { id: 4, title: "Spider-Man: No Way Home", image: "https://images-cdn.ubuy.co.in/634e3c67f6511e3fcc7c57a3-2021-movie-tom-holland-spider-man-no.jpg" },
          ].map((movie) => (
            <div key={movie.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-lg font-semibold text-gray-900 mt-4">{movie.title}</h3>
            </div>
          ))}
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
