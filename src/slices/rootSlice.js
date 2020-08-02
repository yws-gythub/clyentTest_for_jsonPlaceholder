import { combineReducers } from "redux";

import projectList from "./project/projectList";
import project from "./project/project";

const rootReducer = combineReducers({
  projectList,
  project,
});

export default rootReducer;
