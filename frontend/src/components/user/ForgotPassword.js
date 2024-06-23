import React, { Fragment, useState, useEffect } from "react";
import Loader from "../layout/Loader";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../actions/userAction";
import MetaData from "../layout/MetaData";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message);
    }
  }, [dispatch, error, message]);

  return (
    <Fragment>
      <MetaData title="Forgot Password | City Smile Dental Clinic" />
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Forgot Password
          </h2>

          <form onSubmit={forgotPasswordSubmit}>
            <div className="mb-4">
              <div className="flex items-center border-b border-gray-300 py-2">
                <MailOutlineIcon className="text-gray-500 mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </form>

          <div className="mt-4 text-center">
            <a href="/login" className="text-blue-500 hover:underline">
              Back to Login
            </a>
          </div>
        </div>
      </div>

      {loading && <Loader />}
    </Fragment>
  );
};

export default ForgotPassword;
