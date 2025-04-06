import { FormToggle_ACTION_TYPES } from "../actionTypes";

// creators for toggling between "create" and "edit" Forms
export const toggleFormEdit = (data) => (dispatch) => {
  dispatch({ type: FormToggle_ACTION_TYPES.TOGGLE_EDIT, payload: data });
};
export const toggleFormCreate = (dispatch) => {
  dispatch({ type: FormToggle_ACTION_TYPES.TOGGLE_CREATE });
};
