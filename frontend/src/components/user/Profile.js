import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please login to view your profile.");
      setSnackbarOpen(true);
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  const handleSnackbarClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <MetaData title="Profile | City Smile Dental Clinic" />
      <h2 className="text-3xl font-bold text-center mb-6">User Profile</h2>
      {isAuthenticated && (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
          <div className="mb-4">
            <p className="text-lg font-bold mb-2">Name:</p>
            <p className="text-lg">{user.name}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-bold mb-2">Email:</p>
            <p className="text-lg">{user.email}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-bold mb-2">Created At:</p>
            <p className="text-lg">{String(user.createdAt).substr(0, 10)}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-bold mb-2">Role:</p>
            <p className="text-lg">{user.role}</p>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => navigate("/password/update")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-lg font-medium"
            >
              Change Password
            </button>
          </div>
        </div>
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Profile;
