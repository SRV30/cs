import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updateProfile, loadUser } from "../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Loader from "../layout/Loader";
import FaceIcon from "@mui/icons-material/Face";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading } = useSelector((state) => state.user);
  const profileState = useSelector((state) => state.profile);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);

    dispatch(updateProfile(myForm));
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }

    if (profileState.error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(profileState.error);
      setSnackbarOpen(true);
      dispatch(clearErrors());
    }

    if (profileState.isUpdated) {
      setSnackbarSeverity("success");
      setSnackbarMessage("Profile Updated Successfully");
      setSnackbarOpen(true);
      dispatch(loadUser());
      navigate("/account");
      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, profileState, user, navigate]);

  const handleSnackbarClose = (reason) => {
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
          <MetaData title="Update Profile | City Smile Dental Clinic" />
          <div className="updateProfileContainer mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">
              Update Profile
            </h2>
            <div className="updateProfileBox bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
              <form
                className="updateProfileForm"
                encType="multipart/form-data"
                onSubmit={updateProfileSubmit}
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <div className="flex items-center">
                    <FaceIcon className="text-gray-400 mr-2" />
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <div className="flex items-center">
                    <MailOutlineIcon className="text-gray-400 mr-2" />
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
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
      )}
    </Fragment>
  );
};

export default UpdateProfile;
