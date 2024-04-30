import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

export const darkSlice = createSlice({
  name: "DARK",
  initialState,
  reducers: {
    isDone (state,action){
   state.isDark = !state.isDark
    }
  },
});
export const {isDone} = darkSlice.actions;
export default darkSlice.reducer

