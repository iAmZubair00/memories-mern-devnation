// initial state for postReducer
const initialState = {
  posts: [],
};

// reducer for managing posts CRUD
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
      //console.log({ posts: action.payload });
      return { posts: action.payload };
    case "CREATE_POST":
      //console.log(state);
      //console.log({ ...state.posts, posts: action.payload });
      //console.log({ posts: [...state.posts, action.payload] });
      return { posts: [...state.posts, action.payload] };
    //return { ...state.posts, action.payload };
    case "DELETE_POST":
      //console.log(...state.posts);
      //console.log(state);
      return {
        posts: state.posts.filter((post) => post._id !== action.payload._id),
      };
    case "EDIT_POST":
      //console.log({ posts: action.payload });
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
