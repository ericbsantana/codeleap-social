import { LOGIN_USER, LOGOUT_USER } from "../../actions/types";

let user = "";
if (JSON.parse(localStorage.getItem("store"))) {
  user = JSON.parse(localStorage.getItem("store")).userReducer.username;
}

const INITIAL_STATE = { username: user };

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { username: action.payload.username };
    case LOGOUT_USER:
      return { username: "" };
    default:
      return state;
  }
};
