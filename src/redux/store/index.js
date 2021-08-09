import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers/";
import thunk from "redux-thunk";

let state;

export const store = createStore(
  rootReducer,
  state,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  localStorage.setItem("store", JSON.stringify(store.getState()));
});
