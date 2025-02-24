import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu on navigation
  const closeMenu = () => {
    setIsOpen(false);
  };

  const activeNavLink = ({ isActive }) => {
    return (
        isActive ? "text-blue-500 font-semibold" : "text-gray-900 hover:text-blue-500 transition"
    )
  }

  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-gray-900">
          Piku<span className="text-blue-500">Flix</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink 
            to="/" 
            onClick={closeMenu} 
            className={activeNavLink}
          >
            Home
          </NavLink>
          <NavLink 
            to="/movie" 
            onClick={closeMenu} 
            className={activeNavLink}
          >
            Movies
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={closeMenu} 
            className={activeNavLink}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={closeMenu} 
            className={activeNavLink}
          >
            Contact
          </NavLink>
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <button onClick={toggleMenu} className="md:hidden text-gray-900">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 transition-all ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <NavLink 
          to="/" 
          onClick={closeMenu} 
          className={activeNavLink}
        >
          Home
        </NavLink>
        <NavLink 
          to="/movie" 
          onClick={closeMenu} 
          className={activeNavLink}
        >
          Movies
        </NavLink>
        <NavLink 
          to="/about" 
          onClick={closeMenu} 
          className={activeNavLink}
        >
          About
        </NavLink>
        <NavLink 
          to="/contact" 
          onClick={closeMenu} 
          className={activeNavLink}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
