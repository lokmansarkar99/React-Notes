
import { NavLink } from 'react-router-dom';



const Card = ({ currMovie }) => {
 

  const { Poster, Title, Year, Type, imdbID } = currMovie;

  return (
    <li className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl list-none">
      {/* Movie Poster */}
      <img
        src={Poster}
        alt={Title}
        className="w-full h-64 object-cover"
      />

      {/* Movie Info */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">{Title}</h2>
        <p className="text-gray-600 mt-1">📅 Year: {Year}</p>
        <p className="text-gray-600 mt-1">🎭 Type: {Type}</p>

        {/* Watch Now Button */}
        <NavLink  to={`/movie/${imdbID}`}>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          🎥 Watch Now
        </button>
        </NavLink>
      </div>
    </li>
  );
};

export default Card;
