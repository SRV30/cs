import {
  GET_HOME_CONTACT_REQUEST,
  GET_HOME_CONTACT_SUCCESS,
  GET_HOME_CONTACT_FAIL,
  UPDATE_HOME_CONTACT_REQUEST,
  UPDATE_HOME_CONTACT_SUCCESS,
  UPDATE_HOME_CONTACT_FAIL,
} from "../constants/homeContactConstants";

const initialState = {
  contactInfo: {},
  loading: false,
  error: null,
  success: false,
};

const homeContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_CONTACT_REQUEST:
    case UPDATE_HOME_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    case GET_HOME_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contactInfo: action.payload,
      };
    case UPDATE_HOME_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case GET_HOME_CONTACT_FAIL:
    case UPDATE_HOME_CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeContactReducer;
