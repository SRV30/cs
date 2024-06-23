import axios from "axios";
import {
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
  SERVICE_LIST_FAIL,
  SERVICE_CREATE_REQUEST,
  SERVICE_CREATE_SUCCESS,
  SERVICE_CREATE_FAIL,
} from "../constants/serviceConstants";

export const listServices = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_LIST_REQUEST });

    const { data } = await axios.get("/api/as/get/service");

    dispatch({
      type: SERVICE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Create a new service
export const createService = (service) => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_CREATE_REQUEST });

    const { data } = await axios.post("/api/as/create/service", service);

    dispatch({
      type: SERVICE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
