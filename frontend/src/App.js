import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WebFont from "webfontloader";
import React, {  useEffect } from "react";
import store from "./store";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Photo from "./components/pages/Photo";
import NavbarLarge from "./components/layout/NavbarLarge";
import NavbarSmall from "./components/layout/NavbarSmall";
import Footer from "./components/layout/Footer";
import { loadUser } from "./actions/userAction";
import Login from "./components/user/Login";
import SignUp from "./components/user/Signup";
import ForgotPassword from "./components/user/ForgotPassword";
import Profile from "./components/user/Profile";
import ProtectedRoute from "./Route/ProtectedRoute";
import ResetPassword from "./components/user/ResetPassword";
import UpdatePassword from "./components/user/UpdatePassword";
import UpdateProfile from "./components/user/UpdateProfile";
import Dashboard from "./components/admin/Dashboard";
import UsersList from "./components/admin/UserList";
import UpdateUser from "./components/admin/UpdateUser";
import AdminContact from "./components/admin/admingetintouch";
import AdminPhoto from "./components/admin/AdminPhoto";
import AdminAbout from "./components/admin/AdminAbout";
import AdminService from "./components/admin/AdminService";
import AdminLogo from "./components/admin/AdminLogo";
import AdminHomeAbout from "./components/admin/AdminHomeAbout";
import AdminHomeContact from "./components/admin/AdminHomeContact";

function App() {
  const {  } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="app-container">
        <NavbarLarge />
        <NavbarSmall />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/me/update"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/password/update"
            element={
              <ProtectedRoute>
                <UpdatePassword />
              </ProtectedRoute>
            }
          />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute isAdmin={true}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            isAdmin={true}
            path="/admin/users"
            element={
              <ProtectedRoute>
                <UsersList />
              </ProtectedRoute>
            }
          />
          <Route
            isAdmin={true}
            path="/admin/user/:id"
            element={
              <ProtectedRoute>
                <UpdateUser />
              </ProtectedRoute>
            }
          />
          <Route
            isAdmin={true}
            path="/admin/contact"
            element={
              <ProtectedRoute>
                <AdminContact />
              </ProtectedRoute>
            }
          />
          <Route
            isAdmin={true}
            path="/admin/photo"
            element={
              <ProtectedRoute>
                <AdminPhoto />
              </ProtectedRoute>
            }
          />
          <Route
            isAdmin={true}
            path="/admin/about"
            element={
              <ProtectedRoute>
                <AdminAbout />
              </ProtectedRoute>
            }
          />
          <Route
            isAdmin={true}
            path="/admin/services"
            element={
              <ProtectedRoute>
                <AdminService />
              </ProtectedRoute>
            }
          />
          <Route
            isAdmin={true}
            path="/admin/logo"
            element={
              <ProtectedRoute>
                <AdminLogo />
              </ProtectedRoute>
            }
          />
          <Route
            isAdmin={true}
            path="/admin/home/about"
            element={
              <ProtectedRoute>
                <AdminHomeAbout />
              </ProtectedRoute>
            }
          />
          <Route
            isAdmin={true}
            path="/admin/home/contact"
            element={
              <ProtectedRoute>
                <AdminHomeContact />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
