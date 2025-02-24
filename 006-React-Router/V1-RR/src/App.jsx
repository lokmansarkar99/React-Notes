import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact, { contactData } from './pages/Contact';
import Movie from "./pages/Movie";
import AppLayout from "./components/layout/AppLayout";
import ErrorPage from "./pages/Errorpage";
import { getApiData } from "./api/GetApiData";
import MovieDetail from "./pages/MovieDetail";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout /> ,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: getApiData
        },
    
        {
          path: "/about",
          element: <About/>
        },
    
        {
          path: "/contact",
          element: <Contact />,
          action: contactData
        },
    
        {
          path: "/movie",
          element: <Movie />,
          loader: getApiData
        }, 
        {
          path: "/movie/:movieID",
          element: <MovieDetail />,
        }
      ]
    }

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App