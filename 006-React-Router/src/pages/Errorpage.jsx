import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError(); // Get error details
  const navigate = useNavigate()

  const handleGoBack = ()=> { 
    navigate(-1)
  }
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 px-6">
      {/* Error Code */}
      <h1 className="text-8xl font-extrabold text-blue-500 drop-shadow-lg">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
      
      {/* Error Message */}
      <p className="mt-2 text-gray-600 text-center max-w-md">
        {error?.statusText || error?.message || "The page you're looking for doesn't exist."}
      </p>

      {/* Back to Home Button */}
    <button onClick={handleGoBack} className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">  Go Back </button>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </Link>

      

      {/* Decorative SVG (Optional) */}
      <svg className="w-64 mt-8" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="200" fill="#E0F2FE" />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="48" fontWeight="bold" fill="#3B82F6">
          Not Found
        </text>
      </svg>
    </div>
  );
};

export default ErrorPage;
