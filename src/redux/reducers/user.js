import { LOGIN_USER, LOGOUT_USER } from "../../actions/types";
const INITIAL_STATE = { username: "" };

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, username: action.payload };
    case LOGOUT_USER:
      return { ...state, username: "" };
    default:
      return state;
  }
};
