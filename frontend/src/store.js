import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";
import {
  contactFetchReducer,
  contactSubmitReducer,
} from "./reducers/contactReducer";
import {
  imageDeleteReducer,
  imageFetchReducer,
  imageUploadReducer,
} from "./reducers/imageReducers";
import { aboutReducer } from "./reducers/aboutReducer";
import {
  serviceCreateReducer,
  serviceListReducer,
} from "./reducers/serviceReducer";
import homePageContentReducer from "./reducers/logoReducer";
import aboutHomeReducer from "./reducers/homeAboutReducers";
import homeContactReducer from "./reducers/homeContactReducer";

const reducer = combineReducers({
  user: userReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  allUsers: allUsersReducer,
  profile: profileReducer,
  contactSubmit: contactSubmitReducer,
  contactFetch: contactFetchReducer,
  imageUpload: imageUploadReducer,
  imageFetch: imageFetchReducer,
  imageDelete: imageDeleteReducer,
  about: aboutReducer,
  serviceList: serviceListReducer,
  serviceCreate: serviceCreateReducer,
  logo: homePageContentReducer,
  aboutHome: aboutHomeReducer,
  homeContact: homeContactReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
