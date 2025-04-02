// initial state for postReducer
const initialState = {
  posts: [],
  loading: false
};

// reducer for managing posts CRUD
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_POSTS_SUCCESS": // success
      return { posts: action.payload, loading: false };
    case "FETCH_POSTS_FAILURE":
      return { ...state, loading: false };
    case "CREATE_POST":
      return { posts: [...state.posts, action.payload] };
    case "DELETE_POST":
      return {
        posts: state.posts.filter((post) => post._id !== action.payload._id),
      };
    case "EDIT_POST":
      return {
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};

// initial state for isEditingReducer
const formToggleState = { isEditing: false, postToEdit: null };

// reducer for toggling b/w forms
export const isEditingReducer = (state = formToggleState, action) => {
  switch (action.type) {
    case "toggleForm/edit":
      return { isEditing: true, postToEdit: action.payload };
    case "toggleForm/create":
      return { isEditing: false, postToEdit: null };
    default:
      return state;
  }
};

export default postReducer;
