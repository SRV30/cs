import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { UPDATE_USER_RESET } from "../../constants/userConstants";
import {
  getUserDetails,
  updateUser,
  clearErrors,
} from "../../actions/userAction";
import Loader from "../layout/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: userId } = useParams();
  const { loading, error, user } = useSelector((state) => state.userDetails);

  const {
    loading: updateLoading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    if (!user || user._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
  }, [dispatch, userId, user]);

  useEffect(() => {
    if (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(error);
      setSnackbarOpen(true);
      dispatch(clearErrors());
    }

    if (updateError) {
      setSnackbarSeverity("error");
      setSnackbarMessage(updateError);
      setSnackbarOpen(true);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      setSnackbarSeverity("success");
      setSnackbarMessage("User Updated Successfully");
      setSnackbarOpen(true);
      navigate("/admin/users");
      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, error, updateError, isUpdated, navigate]);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("role", role);

    dispatch(updateUser(userId, myForm));
  };

  return (
    <Fragment>
      <MetaData title="Update User" />

      {loading ? (
        <Loader />
      ) : (
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-6">Update User</h2>
          <form onSubmit={updateUserSubmitHandler} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-lg px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-lg px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-lg font-semibold mb-2"
              >
                Role (user, admin)
              </label>
              <input
                type="text"
                id="role"
                className="w-full border rounded-lg px-3 py-2"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Update User
              </button>
            </div>
          </form>

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
      )}
    </Fragment>
  );
};

export default UpdateUser;
