import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { signOut } from "firebase/auth"; // Import the signOut function

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  // Function to handle sign-out
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Optional: Add any additional logic after sign-out
      })
      .catch((error) => {
        console.log("Error signing out:", error);
      });
  };

  return (
    <div className="bg-gray-900 py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex items-center space-x-4">
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
            >
              Login
            </Link>
          </li>
          <li className="text-red-400">{user?.email}</li>
          {user && (
            <li>
              <button
             
                className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
                onClick={handleLogOut}
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
