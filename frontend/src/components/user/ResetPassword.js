import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../actions/userAction";
import MetaData from "../layout/MetaData";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate, useParams } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Loader from "../layout/Loader";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(token, myForm));
  };

  useEffect(() => {
    if (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(error);
      setSnackbarOpen(true);
      dispatch(clearErrors());
    }

    if (success) {
      setSnackbarSeverity("success");
      setSnackbarMessage("Password Updated Successfully");
      setSnackbarOpen(true);
      navigate("/login");
    }
  }, [dispatch, error, success, navigate, token]);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <MetaData title="Reset Password | City Smile Dental Clinic" />
      <div className="resetPasswordContainer mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Update Password</h2>
        <div className="resetPasswordBox bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
          <form className="resetPasswordForm" onSubmit={resetPasswordSubmit}>
            <div className="mb-4">
              <LockOpenIcon className="inline-block mr-2" />
              <input
                type="password"
                placeholder="New Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <LockIcon className="inline-block mr-2" />
              <input
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
              value="Update"
              className="resetPasswordBtn bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
            />
          </form>
        </div>
      </div>

      {/* Snackbar for displaying notifications */}
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
  );
};

export default ResetPassword;
