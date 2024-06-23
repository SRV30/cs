import axios from "axios";
import {
  GET_ABOUT_CONTENT_SUCCESS,
  GET_ABOUT_CONTENT_FAILURE,
  UPDATE_ABOUT_CONTENT_SUCCESS,
  UPDATE_ABOUT_CONTENT_FAILURE,
} from "../constants/homeAboutConstants";

export const fetchAboutContent = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/as/get/home/about");
    dispatch({
      type: GET_ABOUT_CONTENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ABOUT_CONTENT_FAILURE,
      payload: error.message || "Failed to fetch About content",
    });
  }
};

export const updateAboutContent = (formData) => async (dispatch) => {
  try {
    const response = await axios.put("/api/as/update/home/about", formData);
    dispatch({
      type: UPDATE_ABOUT_CONTENT_SUCCESS,
      payload: response.data.message,
    });

    dispatch(fetchAboutContent());
  } catch (error) {
    dispatch({
      type: UPDATE_ABOUT_CONTENT_FAILURE,
      payload: error.message || "Failed to update About content",
    });
  }
};
