import axios from "axios";
import {
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAIL,
  IMAGE_FETCH_REQUEST,
  IMAGE_FETCH_SUCCESS,
  IMAGE_FETCH_FAIL,
  IMAGE_DELETE_REQUEST,
  IMAGE_DELETE_SUCCESS,
  IMAGE_DELETE_FAIL,
} from "../constants/imageConstants";

export const uploadImage = (url) => async (dispatch) => {
  try {
    dispatch({ type: IMAGE_UPLOAD_REQUEST });
    const { data } = await axios.post("/api/as/upload/images", { url });
    dispatch({ type: IMAGE_UPLOAD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: IMAGE_UPLOAD_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const fetchImages = () => async (dispatch) => {
  try {
    dispatch({ type: IMAGE_FETCH_REQUEST });
    const { data } = await axios.get("/api/as/get/images");
    dispatch({ type: IMAGE_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: IMAGE_FETCH_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const deleteImage = (url) => async (dispatch) => {
  try {
    dispatch({ type: IMAGE_DELETE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.delete("/api/as/delete/image", { data: { url } }, config);

    dispatch({ type: IMAGE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: IMAGE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
