import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { FaUserCircle } from "react-icons/fa";

const NavbarLarge = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setMessage("Logged out successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {message}
        </Alert>
      </Snackbar>
      <nav className="bg-gray-800 sticky p-4 hidden lg:block w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-white text-3xl font-bold flex items-center"
          >
            City Smile Dental Clinic
          </Link>
          <div className="w-full lg:flex lg:items-center lg:w-auto">
            <ul className="lg:flex lg:justify-end text-white">
              <li className="block lg:inline-block mt-4 lg:mt-0 lg:ml-6">
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li className="block lg:inline-block mt-4 lg:mt-0 lg:ml-6">
                <a href="#about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li className="block lg:inline-block mt-4 lg:mt-0 lg:ml-6">
                <a href="#viewservice" className="hover:text-gray-400">
                  View Services
                </a>
              </li>
              <li className="block lg:inline-block mt-4 lg:mt-0 lg:ml-6">
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
              {isAuthenticated && (
                <>
                  <li
                    className="block lg:inline-block mt-4 lg:mt-0 lg:ml-6 relative"
                    onClick={toggleUserMenu}
                  >
                    <button
                      onClick={() => {}}
                      className="text-white focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
                    >
                      <FaUserCircle className="text-2xl" />
                    </button>
                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50 dropdown-menu">
                        <ul className="text-white mt-4">
                          {user && user.role === "admin" && (
                            <li>
                              <Link
                                to="/admin/dashboard"
                                className="block px-4 py-2 text-white hover:bg-gray-700"
                                onClick={closeUserMenu}
                              >
                                Admin Panel
                              </Link>
                            </li>
                          )}
                          <li>
                            <Link
                              to="/account"
                              className="block px-4 py-2 text-white hover:bg-gray-700"
                              onClick={closeUserMenu}
                            >
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/me/update"
                              className="block px-4 py-2 text-white hover:bg-gray-700"
                              onClick={closeUserMenu}
                            >
                              Edit Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/password/update"
                              className="block px-4 py-2 text-white hover:bg-gray-700"
                              onClick={closeUserMenu}
                            >
                              Update Password
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </>
              )}
              {isAuthenticated ? (
                <li className="block lg:inline-block mt-4 lg:mt-0 lg:ml-6">
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className="hover:text-gray-400 cursor-pointer"
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="block lg:inline-block mt-4 lg:mt-0 lg:ml-6">
                  <Link to="/login" className="hover:text-gray-400">
                    Admin Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLarge;
