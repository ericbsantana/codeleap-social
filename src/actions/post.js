import {
  POST_REQUEST,
  POST_FAIL,
  POST_SUCCESS,
  CREATE_POST_REQUEST,
  CREATE_POST_FAIL,
  CREATE_POST_SUCCESS,
  DELETE_POST_REQ,
  DELETE_POST_FAIL,
  DELETE_POST_SUCCESS,
  EDIT_POST_REQ,
  EDIT_POST_FAIL,
  EDIT_POST_SUCCESS,
} from "../actions/types";

import { store } from "../redux/store";

export const requestPost = () => ({
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
  dispatch(requestPost());
  return fetch(store.getState().postReducer.next)
    .then((response) => response.json())
    .then((json) => dispatch(setPosts(json)))
    .catch((error) => dispatch(setError()));
};
// https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator

export const requestCreatePost = () => ({
  type: CREATE_POST_REQUEST,
});

export const createPostError = () => ({
  type: CREATE_POST_FAIL,
});

export const postToList = (request) => ({
  type: CREATE_POST_SUCCESS,
  payload: {
    ...request,
  },
});

export const createPost = (query) => (dispatch) => {
  dispatch(requestCreatePost());
  return fetch("https://dev.codeleap.co.uk/careers/", {
    method: "POST",
    body: JSON.stringify({
      username: query.username,
      title: query.title,
      content: query.content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => dispatch(postToList(json)))
    .catch((error) => console.log(error));
};
export const requestDeletePost = () => ({
  type: DELETE_POST_REQ,
});

export const deletePostFail = () => ({
  type: DELETE_POST_FAIL,
});

export const deletePostFromList = (id) => ({
  type: DELETE_POST_SUCCESS,
  payload: {
    ...id,
  },
});

export const deletePost = (postId) => (dispatch) => {
  dispatch(requestDeletePost());
  return fetch(`https://dev.codeleap.co.uk/careers/${postId}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    dispatch(deletePostFromList({ id: postId }));
    res.text();
  });
};

export const requestEditPost = () => ({
  type: EDIT_POST_REQ,
});

export const editPostFail = () => ({
  type: EDIT_POST_FAIL,
});

export const editPostSuccess = (post) => ({
  type: EDIT_POST_SUCCESS,
  payload: {
    ...post,
  },
});

export const editPost = (data) => (dispatch) => {
  dispatch(requestEditPost());
  return fetch(`https://dev.codeleap.co.uk/careers/${data.id}/`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    dispatch(editPostSuccess(data));
    res.text();
  });
};
