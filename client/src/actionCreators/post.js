import * as api from "../api/index";

// creators for managing posts CRUD
export const fetchAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const editPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.editPost(post);
    dispatch({ type: "EDIT_POST", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    dispatch({ type: "DELETE_POST", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

// creators for toggling between "create" and "edit" Forms
export const toggleFormEdit = (data) => (dispatch) => {
  dispatch({ type: "toggleForm/edit", payload: data });
};
export const toggleFormCreate = (dispatch) => {
  dispatch({ type: "toggleForm/create" });
};
