import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import MetaData from "../layout/MetaData";
import { getAllUsers, clearErrors, deleteUser } from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";

const UsersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, users } = useSelector((state) => state.allUsers);
  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  const handleSnackbarClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(error);
      setSnackbarOpen(true);
      dispatch(clearErrors());
    }

    if (deleteError) {
      setSnackbarSeverity("error");
      setSnackbarMessage(deleteError);
      setSnackbarOpen(true);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      setSnackbarSeverity("success");
      setSnackbarMessage(message);
      setSnackbarOpen(true);
      navigate("/admin/users");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, error, deleteError, isDeleted, message, navigate]);

  return (
    <Fragment>
      <MetaData title={`ALL USERS - Admin`} />

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

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">All Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users &&
            users.map((user) => (
              <div
                key={user._id}
                className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <div>
                  <Link
                    to={`/admin/user/${user._id}`}
                    className="text-blue-600 hover:underline mr-4"
                  >
                    Details
                  </Link>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => deleteUserHandler(user._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default UsersList;
