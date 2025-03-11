import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-purple-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-purple-300 ${isActive ? "text-purple-300" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rq"
                className={({ isActive }) =>
                  `hover:text-purple-300 ${isActive ? "text-purple-300" : ""}`
                }
              >
                Fetch RQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/old"
                className={({ isActive }) =>
                  `hover:text-purple-300 ${isActive ? "text-purple-300" : ""}`
                }
              >
                Fetch Old
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
