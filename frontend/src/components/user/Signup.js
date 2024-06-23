import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../actions/userAction";
import MetaData from '../layout/MetaData';

const SignUp = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const { error, isAuthenticated } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [setAvatar] = useState("/Profile.png");
  const [setAvatarPreview] = useState("/Profile.png");

  const navigate = useNavigate();
  const location = useLocation();

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      toast.success("Successfully Registered User");
      navigate(redirect);
    }
  }, [dispatch, error, isAuthenticated, redirect, navigate]);

  return (
    <>
    <MetaData title="Admin Signup | City Smile Sental Clinic"/>
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <CgProfile className="text-blue-500 text-6xl" />
        </div>

        <form className="space-y-6" onSubmit={registerSubmit} encType="multipart/form-data">
          <div className="flex justify-center space-x-4 mb-6">
            <Link
              to="/login"
              className={`text-lg font-semibold ${isLogin ? "text-blue-500 border-b-2 border-blue-500" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className={`text-lg font-semibold ${!isLogin ? "text-blue-500 border-b-2 border-blue-500" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </Link>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={registerDataChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
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
              value={email}
              onChange={registerDataChange}
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
                onChange={registerDataChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <span className="cursor-pointer" onClick={handleTogglePassword}>
                  {showPassword ? <IoEyeOff /> : <IoEye />}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="confirm-password">
              Confirm Password:
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                placeholder="Confirm password"
                name="confirmPassword"
                onChange={registerDataChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <span className="cursor-pointer" onClick={handleToggleConfirmPassword}>
                  {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default SignUp;
