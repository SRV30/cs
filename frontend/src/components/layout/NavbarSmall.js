import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaBars, FaUserCircle } from "react-icons/fa";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { logout } from "../../actions/userAction";

const NavbarSmall = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setUserMenuOpen(false);
  };

  const logoutHandler = () => {
    dispatch(logout()); // Dispatch logout action (make sure this action is correctly implemented)
    closeMenu(); // Close menus after logout
    setMessage("Logged out successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
    navigate("/"); // Navigate to home page after logout
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 lg:hidden fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative">
          <button
            onClick={toggleMenu}
            className={`text-white focus:outline-none transition-transform duration-300 ease-in-out ${
              isOpen ? "scale-110" : "scale-100"
            }`}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Toggle Menu Dropdown */}
        <div
          className={`absolute top-12 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50 dropdown-menu transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="text-white mt-4">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:bg-gray-700 transition-transform duration-300 ease-in-out"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="block px-4 py-2 text-white hover:bg-gray-700 transition-transform duration-300 ease-in-out"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#viewservice"
                className="block px-4 py-2 text-white hover:bg-gray-700 transition-transform duration-300 ease-in-out"
                onClick={closeMenu}
              >
                View Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 text-white hover:bg-gray-700 transition-transform duration-300 ease-in-out"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
            <li>
              {isAuthenticated ? (
                <button
                  onClick={logoutHandler}
                  className="block px-4 py-2 text-white hover:bg-gray-700 border border-gray-400 rounded-lg transition-transform duration-300 ease-in-out"
                >
                  <span className="flex items-center">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 1a1 1 0 011-1h10a1 1 0 011 1v2H5V5zm10 4a1 1 0 011 1v5a1 1 0 01-1 1H6a1 1 0 01-1-1v-5a1 1 0 011-1h10zm-5 3a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Logout
                  </span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className="block px-4 py-2 text-white hover:bg-gray-700 border border-gray-400 rounded-lg transition-transform duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  <span className="flex items-center">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 1a1 1 0 011-1h10a1 1 0 011 1v2H5V5zm10 4a1 1 0 011 1v5a1 1 0 01-1 1H6a1 1 0 01-1-1v-5a1 1 0 011-1h10zm-5 3a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Admin Login
                  </span>
                </Link>
              )}
            </li>
          </ul>
        </div>

        <div className="flex-grow text-center">
          <Link
            to="/"
            className="text-white text-2xl font-bold transition-transform duration-300 ease-in-out"
          >
            City Smile Dental Clinic
          </Link>
        </div>

        {/* User Menu Dropdown */}
        {isAuthenticated && (
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className={`text-white focus:outline-none transition-transform duration-300 ease-in-out ${
                userMenuOpen ? "scale-110" : "scale-100"
              }`}
            >
              <FaUserCircle className="text-2xl" />
            </button>
            <div
              className={`absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50 dropdown-menu transition-opacity duration-300 ease-in-out ${
                userMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <ul className="text-white mt-4">
                {user && user.role === "admin" && (
                  <li>
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 text-white hover:bg-gray-700 transition-transform duration-300 ease-in-out"
                      onClick={closeMenu}
                    >
                      Admin Panel
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to="/account"
                    className="block px-4 py-2 text-white hover:bg-gray-700 transition-transform duration-300 ease-in-out"
                    onClick={closeMenu}
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/me/update"
                    className="block px-4 py-2 text-white hover:bg-gray-700 transition-transform duration-300 ease-in-out"
                    onClick={closeMenu}
                  >
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/password/update"
                    className="block px-4 py-2 text-white hover:bg-gray-700 transition-transform duration-300 ease-in-out"
                    onClick={closeMenu}
                  >
                    Update Password
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </nav>
  );
};

export default NavbarSmall;
