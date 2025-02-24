import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movie from "./pages/Movie";
import AppLayout from "./components/layout/AppLayout";
import { getApiData } from "./api/GetApiData";
import MovieDetail from "./pages/MovieDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/movie", element: <Movie /> },
      { path: "/movie/:movieID", element: <MovieDetail /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return (
    
      <RouterProvider router={router} />
    
  );
};

export default App;
