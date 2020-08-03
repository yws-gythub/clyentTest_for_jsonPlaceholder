const { createSlice } = require("@reduxjs/toolkit");

let signedUser = JSON.parse(sessionStorage.getItem("signedUser"));
const initialState = signedUser ? { signedUser } : {};

const signSlice = createSlice({
  name: "signSlice",
  initialState,
  reducers: {
    signRequest: (state, { payload }) => payload,
  },
});

export const { signRequest } = signSlice.actions;
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
