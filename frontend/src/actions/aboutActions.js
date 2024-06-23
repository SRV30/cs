import axios from "axios";
import {
  ABOUT_FETCH_REQUEST,
  ABOUT_FETCH_SUCCESS,
  ABOUT_FETCH_FAIL,
  ABOUT_UPDATE_REQUEST,
  ABOUT_UPDATE_SUCCESS,
  ABOUT_UPDATE_FAIL,
} from "../constants/aboutConstants";

export const fetchAbout = () => async (dispatch) => {
  try {
    dispatch({ type: ABOUT_FETCH_REQUEST });
    const { data } = await axios.get("/api/as/get/about");
    dispatch({ type: ABOUT_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ABOUT_FETCH_FAIL, payload: error.message });
  }
};

export const updateAbout = (about) => async (dispatch) => {
  try {
    dispatch({ type: ABOUT_UPDATE_REQUEST });
    const { data } = await axios.put("/api/as/update/about", about);
    dispatch({ type: ABOUT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ABOUT_UPDATE_FAIL, payload: error.message });
  }
};
