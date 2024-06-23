import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm } from "../../actions/contactActions";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("");

  const dispatch = useDispatch();
  const contactSubmit = useSelector((state) => state.contactSubmit);
  const { loading, error, success } = contactSubmit;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(submitContactForm(formData));

    if (success) {
      setSnackbarType("success");
      setSnackbarMessage("Message sent successfully!");
    } else if (error) {
      setSnackbarType("error");
      setSnackbarMessage(error);
    }

    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-blue-100">
        <div className="bg-white rounded-lg shadow-lg px-6 py-5 max-w-lg w-full mx-4">
          <h2 className="font-bold text-2xl mb-4 text-center">Contact Us</h2>
          {loading && <p className="text-center">Loading...</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="formGroup">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="formGroup">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="formGroup">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="formGroup">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-block w-full px-4 py-2 mt-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              onClose={handleCloseSnackbar}
              severity={snackbarType === "success" ? "success" : "error"}
            >
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
