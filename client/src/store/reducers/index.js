import { combineReducers } from "redux";
import { formToggleReducer } from "./formToggle";
import { postReducer } from "./post";

export const reducers = combineReducers({
  posts: postReducer,
  formToggle: formToggleReducer,
});