import { fetchProject } from "../../clients/project/fetchProject";
// import { useHistory } from "react-router-dom";

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
    // 이것은
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
    //
    // useState를 써서 사용안함
    // changeInput: (state, { payload }) => {
    //   state[payload.name] = payload.value;
    // },
    // cudComplete: (state, { payload }) => {
    //   state.id = payload.id;
    // },
  },
});

export const { getProject } = projectSlice.actions;
export const projectSelector = (state) => state.project;
export default projectSlice.reducer;

// export function asyncDispatch_Project(id) {
//   return async (dispatch) => {
//     const result = await fetchProject.findOne(id);
//     dispatch(getProject(result.data));
//   };
// }

export const asyncDispatch = {
  findOne: (id) => {
    return async (dispatch) => {
      const result = await fetchProject.findOne(id);
      dispatch(getProject(result.data));
    };
  },
  // create: (project) => {
  //   return async (dispatch) => {
  //     const result = await fetchProject.create(project);
  //     dispatch(cudComplete(result.data));
  //   };
  // },
  // update: (project) => {
  //   return async (dispatch) => {
  //     const result = await fetchProject.update(project);
  //     dispatch(cudComplete(result.data));
  //   };
  // },
  // deleteOne: (id) => {
  //   return async (dispatch) => {
  //     const result = await fetchProject.deleteOne(id);
  //     dispatch(cudComplete(result.data));
  //   };
  // },
};
