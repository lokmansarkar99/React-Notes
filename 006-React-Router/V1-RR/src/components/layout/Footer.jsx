import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md w-full mt-auto ">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        
        {/* Brand Section */}
        <div>
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Piku<span className="text-blue-500">Flix</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">Your go-to platform for movies & entertainment.</p>
        </div>

        {/* Navigation Section */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-900">Explore</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link to="/movie" className="hover:text-blue-500">Movies</Link></li>
              <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Support</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-gray-900">Follow Us</h3>
          <div className="flex mt-2 space-x-4">
            <a href="#" className="hover:text-blue-500"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-500"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-500"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-500"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 text-gray-500 text-center py-2 text-sm">
        © {new Date().getFullYear()} PikuFlix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
