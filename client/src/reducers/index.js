import { combineReducers } from "redux";
import posts, { isEditingReducer } from "./post";

const reducers = combineReducers({
  posts,
  formToggle: isEditingReducer,
});

export default reducers;
