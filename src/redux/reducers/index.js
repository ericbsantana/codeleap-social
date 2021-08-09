import { userReducer } from "./user";
import { postReducer } from "./post";
import { LOGOUT_USER } from "../../actions/types";

import { combineReducers } from "redux";

const appReducer = combineReducers({ userReducer, postReducer });

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    state = undefined;
    localStorage.setItem("store", JSON.stringify(state));
  }

  return appReducer(state, action);
};

export default rootReducer;
