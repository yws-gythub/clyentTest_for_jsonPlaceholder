import { fetchProject } from "../../clients/project/fetchProject";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  id: null,
  title: null,
  userId: null,
  completed: null,
};

const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    getProject: (state, { payload }) => payload,
    //
    // 아래와 모두 같다.
    //
    // getProject: (state, { payload }) => {
    //   return payload;
    // },
    //
    // getProject: (state, { payload }) => {
    //   state.id = payload.id;
    //   state.title = payload.title;
    //   state.userId = payload.userId;
    //   state.completed = payload.completed;
    // },
  },
});

const { getProject } = projectSlice.actions;
export const projectSelector = (state) => state.project;
export default projectSlice.reducer;

export function asyncDispatch_Project(id) {
  return async (dispatch) => {
    const result = await fetchProject.findOne(id);
    dispatch(getProject(result.data));
  };
}
