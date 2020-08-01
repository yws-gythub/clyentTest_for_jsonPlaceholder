import { combineReducers } from "redux";

import projectList from "./project/projectList";

const rootReducer = combineReducers({
  projectList
});

export default rootReducer;
