import { FormToggle_ACTION_TYPES } from "../actionTypes";

// initial state for formToggleReducer
const initialState = { 
  isEditing: false, 
  postToEdit: null
};

// reducer for toggling b/w forms
export const formToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FormToggle_ACTION_TYPES.TOGGLE_EDIT:
      return { isEditing: true, postToEdit: action.payload };
    case FormToggle_ACTION_TYPES.TOGGLE_CREATE:
      return { isEditing: false, postToEdit: null };
    default:
      return state;
  }
};