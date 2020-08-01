import { fetchProject } from "../../clients/project/fetchProject";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  projectList: [],
  count: 0
};

const projectListSlice = createSlice({
  name: "projectListSlice",
  initialState,
  reducers: {
    setStateFromProjectList: (state, { payload }) => {
      state.projectList = payload;
      state.count = payload.length;
    }
  }
});

// 액션을 익스포트 하는 이유는?? 밖에서 쓰려고!!! 응!! 안쓰면 하지마!!
export const { setStateFromProjectList } = projectListSlice.actions;
//const { setStateFromProjectList } = projectListSlice.actions;
export const projectListSelector = state => state.projectList;
export default projectListSlice.reducer;

// 비동기가 들어가는 액션... 리듀서 안에서 쓸 수도 없고..
// 클라이언트에서 쓸 수도 없고... 이름을 정하기도 애매하고...
// 액션아닌데 액션인듯 액션 같은 너.
// export const projectListAction = {
//   getProjectList: () => {
//     return async dispatch => {
//       const result = await fetchProject.findList();
//       console.log(result);
//       dispatch(setStateFromProjectList(result.data));
//     };
//   }
// };

export function projectListActionGetProjectList() {
  return async dispatch => {
    const result = await fetchProject.findList();
    console.log(result);
    dispatch(setStateFromProjectList(result.data));
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
