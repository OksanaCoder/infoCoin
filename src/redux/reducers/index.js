import { combineReducers } from "redux";

// api
import { authenticationReducer } from "./auth";

const reducers = combineReducers({
  authenticationReducer,
});

export default reducers;
