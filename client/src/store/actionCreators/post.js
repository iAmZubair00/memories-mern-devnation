import * as api from "../../api/index.js";
import { POST_ACTION_TYPES } from "../actionTypes";

// creators for managing posts CRUD
export const fetchAllPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POST_ACTION_TYPES.FETCH_REQUEST });
    const { data } = await api.fetchPosts();
    dispatch({ type: POST_ACTION_TYPES.FETCH_SUCCESS, payload: data });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: POST_ACTION_TYPES.FETCH_FAILURE });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: POST_ACTION_TYPES.CREATE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const editPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.editPost(post);
    dispatch({ type: POST_ACTION_TYPES.EDIT, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    dispatch({ type: POST_ACTION_TYPES.DELETE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};