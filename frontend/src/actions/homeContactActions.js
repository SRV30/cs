import axios from "axios";
import {
  GET_HOME_CONTACT_REQUEST,
  GET_HOME_CONTACT_SUCCESS,
  GET_HOME_CONTACT_FAIL,
  UPDATE_HOME_CONTACT_REQUEST,
  UPDATE_HOME_CONTACT_SUCCESS,
  UPDATE_HOME_CONTACT_FAIL,
} from "../constants/homeContactConstants";

export const fetchHomeContact = () => async (dispatch) => {
  try {
    dispatch({ type: GET_HOME_CONTACT_REQUEST });

    const { data } = await axios.get("/api/as/get/home/contact");

    dispatch({
      type: GET_HOME_CONTACT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_HOME_CONTACT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateHomeContact = (contactData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HOME_CONTACT_REQUEST });

    const { data } = await axios.post(
      "/api/as/update/home/contact",
      contactData
    );

    dispatch({
      type: UPDATE_HOME_CONTACT_SUCCESS,
      payload: data.message,
    });

    dispatch(fetchHomeContact()); // Fetch updated contact information
  } catch (error) {
    dispatch({
      type: UPDATE_HOME_CONTACT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
