import { fetchProject } from "../../clients/project/fetchProject";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  projectList: [],
  count: 0,
};

const projectListSlice = createSlice({
  name: "projectListSlice",
  initialState,
  reducers: {
    getProjectList: (state, { payload }) => {
      state.projectList = payload;
      state.count = payload.length;
    },
  },
});

// export 제거 상태..
const { getProjectList } = projectListSlice.actions;
export const projectListSelector = (state) => state.projectList;
export default projectListSlice.reducer;

export function asyncDispatch_ProjectList() {
  return async (dispatch) => {
    const result = await fetchProject.findList();
    dispatch(getProjectList(result.data));
  };
}

/*
[Reducer]
비동기 작업을 수행하면 안된다.
들어온 인수를 변경해서는 안된다.
인수가 같다면 결과는 항상 동일해야 한다.
- 순수함수다.

 * React Reducer (useReducer Hook) vs Redux Reducer
React Reducer는 지역적이고 
Redux Reducer는 전역적이다.
*/
