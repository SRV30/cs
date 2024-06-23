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

export const imageUploadReducer = (state = {}, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD_REQUEST:
      return { loading: true };
    case IMAGE_UPLOAD_SUCCESS:
      return { loading: false, success: true, image: action.payload };
    case IMAGE_UPLOAD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const imageFetchReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    case IMAGE_FETCH_REQUEST:
      return { loading: true, images: [] };
    case IMAGE_FETCH_SUCCESS:
      return { loading: false, images: action.payload };
    case IMAGE_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const imageDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case IMAGE_DELETE_REQUEST:
      return { loading: true };
    case IMAGE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case IMAGE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
