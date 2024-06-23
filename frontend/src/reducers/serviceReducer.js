import {
    SERVICE_LIST_REQUEST,
    SERVICE_LIST_SUCCESS,
    SERVICE_LIST_FAIL,
    SERVICE_CREATE_REQUEST,
    SERVICE_CREATE_SUCCESS,
    SERVICE_CREATE_FAIL,
  } from '../constants/serviceConstants';
  
  export const serviceListReducer = (state = { services: [] }, action) => {
    switch (action.type) {
      case SERVICE_LIST_REQUEST:
        return { loading: true, services: [] };
      case SERVICE_LIST_SUCCESS:
        return { loading: false, services: action.payload };
      case SERVICE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const serviceCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case SERVICE_CREATE_REQUEST:
        return { loading: true };
      case SERVICE_CREATE_SUCCESS:
        return { loading: false, success: true, service: action.payload };
      case SERVICE_CREATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  