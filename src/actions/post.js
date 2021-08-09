import { POST_REQUEST, POST_FAIL, POST_SUCCESS } from "./types";

export const requestPost = (query) => ({
  type: POST_REQUEST,
});

export const setError = () => ({
  type: POST_FAIL,
});

export const setPosts = (request) => ({
  type: POST_SUCCESS,
  payload: {
    ...request,
  },
});

export const fetchPosts = (query) => (dispatch) => {
  dispatch(requestPost(query));
  return fetch(`https://dev.codeleap.co.uk/careers/?format=json`)
    .then((response) => response.json())
    .then((json) => dispatch(setPosts(json)))
    .catch((error) => dispatch(setError()));
};
