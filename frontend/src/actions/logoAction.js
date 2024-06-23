import {
  GET_HOMEPAGE_CONTENT_SUCCESS,
  GET_HOMEPAGE_CONTENT_FAILURE,
  UPDATE_HOMEPAGE_CONTENT_SUCCESS,
  UPDATE_HOMEPAGE_CONTENT_FAILURE,
} from "../constants/logoConstants";

export const fetchHomePageContent = () => async (dispatch) => {
  try {
    const response = await fetch("/api/as/get/logo");
    const data = await response.json();
    dispatch({ type: GET_HOMEPAGE_CONTENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_HOMEPAGE_CONTENT_FAILURE, payload: error.message });
  }
};

export const updateHomePageContent = (contentData) => async (dispatch) => {
  try {
    const response = await fetch("/api/as/update/logo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contentData),
    });
    const data = await response.json();
    dispatch({ type: UPDATE_HOMEPAGE_CONTENT_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: UPDATE_HOMEPAGE_CONTENT_FAILURE, payload: error.message });
  }
};
