import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/layout/Loader";

const ProtectedRoute = ({ children, isAdmin }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAdmin === true && user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
