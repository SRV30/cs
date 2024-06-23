import {
  ABOUT_FETCH_REQUEST,
  ABOUT_FETCH_SUCCESS,
  ABOUT_FETCH_FAIL,
  ABOUT_UPDATE_REQUEST,
  ABOUT_UPDATE_SUCCESS,
  ABOUT_UPDATE_FAIL,
} from "../constants/aboutConstants";

export const aboutReducer = (state = { about: {} }, action) => {
  switch (action.type) {
    case ABOUT_FETCH_REQUEST:
    case ABOUT_UPDATE_REQUEST:
      return { loading: true };
    case ABOUT_FETCH_SUCCESS:
      return { loading: false, about: action.payload };
    case ABOUT_UPDATE_SUCCESS:
      return { loading: false, success: true, about: action.payload };
    case ABOUT_FETCH_FAIL:
    case ABOUT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
