import { LOGIN_USER, LOGOUT_USER } from "../actions/types";

export const Login = (username) => ({
  type: LOGIN_USER,
  payload: { username: username },
});

export const Logout = () => ({
  type: LOGOUT_USER,
});
