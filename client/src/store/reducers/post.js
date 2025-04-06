import { POST_ACTION_TYPES } from "../actionTypes";

// initial state for postReducer
const initialState = {
  posts: [],
  loading: false
};

// reducer for managing posts CRUD
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ACTION_TYPES.FETCH_REQUEST:
      return { ...state, loading: true };
    case POST_ACTION_TYPES.FETCH_SUCCESS:
      return { posts: action.payload, loading: false };
    case POST_ACTION_TYPES.FETCH_FAILURE:
      return { ...state, loading: false };
    case POST_ACTION_TYPES.CREATE:
      return { posts: [...state.posts, action.payload] };
    case POST_ACTION_TYPES.DELETE:
      return {
        posts: state.posts.filter((post) => post._id !== action.payload._id),
      };
    case POST_ACTION_TYPES.EDIT:
      return {
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};