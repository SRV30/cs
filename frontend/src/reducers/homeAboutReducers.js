import {
  GET_ABOUT_CONTENT_SUCCESS,
  GET_ABOUT_CONTENT_FAILURE,
  UPDATE_ABOUT_CONTENT_SUCCESS,
  UPDATE_ABOUT_CONTENT_FAILURE,
} from "../constants/homeAboutConstants";

const initialState = {
  heading: "",
  subheading: "",
  description1: "",
  description2: "",
  imageUrl: "",
  loading: true,
  error: null,
};

const aboutHomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ABOUT_CONTENT_SUCCESS:
      return {
        ...state,
        heading: action.payload.heading,
        subheading: action.payload.subheading,
        description1: action.payload.description1,
        description2: action.payload.description2,
        imageUrl: action.payload.imageUrl,
        loading: false,
        error: null,
      };
    case GET_ABOUT_CONTENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_ABOUT_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case UPDATE_ABOUT_CONTENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default aboutHomeReducer;
