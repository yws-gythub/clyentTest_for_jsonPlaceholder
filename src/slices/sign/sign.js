const { createSlice } = require("@reduxjs/toolkit");

let user = JSON.parse(sessionStorage.getItem("user"));
const initialState = user ? { loggedIn: null, user } : {};

const signSlice = createSlice({
  name: "signSlice",
  initialState,
  reducers: {
    signIn: (state, { payload }) => {
      (state.loggedIn = true), (state.user = payload.user);
    },
  },
});

export const { signIn } = signSlice.actions;
export const signSelector = (state) => state.sign;
export default signSlice.reducer;

// export const asyncDispatch = {
//   findOne: (id) => {
//     return async (dispatch) => {
//       const result = await fetchProject.findOne(id);
//       dispatch(getProject(result.data));
//     };
//   },
// };
