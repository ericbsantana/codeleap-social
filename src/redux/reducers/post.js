import { POST_REQUEST, POST_FAIL, POST_SUCCESS } from "../../actions/types";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  posts: [],
  next: null,
  previous: null,
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_FAIL:
      return {
        ...state,
        isError: true,
      };
    case POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        info: action.payload,
        posts: action.payload.results,
        next: action.payload.next,
        previous: action.payload.previous,
      };
    default:
      return state;
  }
};
