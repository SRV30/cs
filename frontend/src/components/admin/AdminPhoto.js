import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, deleteImage } from "../../actions/imageActions";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const AdminPhoto = () => {
  const [url, setUrl] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("");

  const dispatch = useDispatch();

  const imageUpload = useSelector((state) => state.imageUpload);
  const { loading, error, success } = imageUpload;

  const imageDelete = useSelector((state) => state.imageDelete);
  const {
    loading: deleteLoading,
    error: deleteError,
    success: deleteSuccess,
  } = imageDelete;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(uploadImage(url));
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteImage(url));
  };

  const closeSnackbar = () => {
    setShowSnackbar(false);
  };

  useEffect(() => {
    if (success) {
      setSnackbarType("success");
      setSnackbarMessage("Image uploaded successfully!");
      setShowSnackbar(true);
    } else if (error) {
      setSnackbarType("error");
      setSnackbarMessage(error);
      setShowSnackbar(true);
    }
    if (deleteSuccess) {
      setSnackbarType("success");
      setSnackbarMessage("Image deleted successfully!");
      setShowSnackbar(true);
    } else if (deleteError) {
      setSnackbarType("error");
      setSnackbarMessage(deleteError);
      setShowSnackbar(true);
    }
  }, [success, error, deleteSuccess, deleteError]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="font-bold text-2xl mb-4">Upload Photo</h2>
      <form onSubmit={submitHandler}>
        <div className="formGroup mb-4">
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
        <button
          type="button"
          onClick={deleteHandler}
          disabled={deleteLoading}
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-4"
        >
          {deleteLoading ? "Deleting..." : "Delete"}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && (
          <p className="text-green-500 mt-4">Image uploaded successfully!</p>
        )}
        {deleteError && <p className="text-red-500 mt-4">{deleteError}</p>}
        {deleteSuccess && (
          <p className="text-green-500 mt-4">Image deleted successfully!</p>
        )}
      </form>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={closeSnackbar}
      >
        <Alert
          onClose={closeSnackbar}
          severity={snackbarType}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AdminPhoto;
