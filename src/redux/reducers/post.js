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
} from "../../actions/types";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  posts: [],
  next: "https://dev.codeleap.co.uk/careers/?format=json",
  previous: null,
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case POST_FAIL:
      return {
        ...state,
        isError: true,
      };
    case POST_SUCCESS:
      let splitNextUrl = action.payload.next.split("/");
      splitNextUrl[0] = "https:";

      let splitNewUrl = splitNextUrl.join("/");

      //omg why the api does not return https instead of http?!

      return {
        ...state,
        isLoading: false,
        isError: false,
        next: splitNewUrl,
        previous: action.payload.previous,
        posts: [...state.posts, ...action.payload.results],
      };
    case CREATE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case CREATE_POST_FAIL:
      return {
        ...state,
        isError: true,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        posts: [action.payload, ...state.posts],
      };
    case DELETE_POST_REQ:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DELETE_POST_FAIL:
      return {
        ...state,
        isError: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    case EDIT_POST_REQ:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case EDIT_POST_FAIL:
      return {
        ...state,
        isError: true,
      };
    case EDIT_POST_SUCCESS:
      let i = state.posts.findIndex((post) => post.id === action.payload.id);

      state.posts[i].title = action.payload.title;
      state.posts[i].content = action.payload.content;

      return {
        ...state,
        isLoading: false,
        isError: false,
        posts: [...state.posts],
      };
    default:
      return state;
  }
};
