import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/";

import thunk from "redux-thunk";

let state;

export const store = createStore(
  rootReducer,
  state,
  compose(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem("store", JSON.stringify(store.getState()));
});
