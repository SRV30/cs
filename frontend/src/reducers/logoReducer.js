import {
  GET_HOMEPAGE_CONTENT_SUCCESS,
  GET_HOMEPAGE_CONTENT_FAILURE,
  UPDATE_HOMEPAGE_CONTENT_SUCCESS,
  UPDATE_HOMEPAGE_CONTENT_FAILURE,
} from "../constants/logoConstants";

const initialState = {
  logoUrl: "",
  heading: "",
  subheading: "",
  loading: true,
  error: null,
};

const homePageContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOMEPAGE_CONTENT_SUCCESS:
      return {
        ...state,
        logoUrl: action.payload.logoUrl,
        heading: action.payload.heading,
        subheading: action.payload.subheading,
        loading: false,
        error: null,
      };
    case GET_HOMEPAGE_CONTENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_HOMEPAGE_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case UPDATE_HOMEPAGE_CONTENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homePageContentReducer;
