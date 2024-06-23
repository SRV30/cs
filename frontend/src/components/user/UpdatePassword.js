import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../actions/userAction";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Loader from "../layout/Loader";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(updatePassword(myForm));
  };

  useEffect(() => {
    if (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(error);
      setSnackbarOpen(true);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      setSnackbarSeverity("success");
      setSnackbarMessage("Password Updated Successfully");
      setSnackbarOpen(true);
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
      navigate("/account");
    }
  }, [dispatch, error, isUpdated, navigate]);

  const handleSnackbarClose = ( reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Change Password | City Smile Dental Clinic" />
          <div className="updatePasswordContainer mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">
              Update Password
            </h2>
            <div className="updatePasswordBox bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
              <form
                className="updatePasswordForm"
                onSubmit={updatePasswordSubmit}
              >
                <div className="mb-4">
                  <label
                    htmlFor="oldPassword"
                    className="block text-lg font-medium text-gray-700 mb-1"
                  >
                    Old Password
                  </label>
                  <input
                    id="oldPassword"
                    type="password"
                    placeholder="Old Password"
                    required
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="newPassword"
                    className="block text-lg font-medium text-gray-700 mb-1"
                  >
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    type="password"
                    placeholder="New Password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-lg font-medium text-gray-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>
                <input
                  type="submit"
                  value="Change"
                  className="updatePasswordBtn bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
                />
              </form>
            </div>
          </div>

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
        </Fragment>
      )}
    </Fragment>
  );
};

export default UpdatePassword;
