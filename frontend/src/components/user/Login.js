import React, { Fragment, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../actions/userAction";
import MetaData from "../layout/MetaData";

const Login = () => {
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [dispatch, error, navigate, isAuthenticated, redirect]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Admin Login | City Smile Detal Clinic" />
          <section className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <div className="flex justify-center mb-6">
                <CgProfile className="text-blue-500 text-6xl" />
              </div>
              <form className="space-y-6" onSubmit={loginSubmit}>
                <div className="flex justify-center space-x-4 mb-6">
                  <Link
                    to="/login"
                    className={`text-lg font-semibold ${
                      isLogin ? "text-blue-500 border-b-2 border-blue-500" : ""
                    }`}
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/sign-up"
                    className={`text-lg font-semibold ${
                      !isLogin ? "text-blue-500 border-b-2 border-blue-500" : ""
                    }`}
                    onClick={() => setIsLogin(false)}
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="password">
                    Password:
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter password"
                      name="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                      <span
                        className="cursor-pointer"
                        onClick={handleTogglePassword}
                      >
                        {showPassword ? <IoEyeOff /> : <IoEye />}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mb-4">
                  <Link to="/password/forgot" className="text-blue-500 text-sm">
                    Forgot Password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Login
                </button>
              </form>
            </div>
          </section>
        </>
      )}
    </Fragment>
  );
};

export default Login;
