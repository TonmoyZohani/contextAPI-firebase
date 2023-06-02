import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gray-900 py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex items-center space-x-4">
        <li>
            <Link to="/" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
             Home
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
